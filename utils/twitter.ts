import Twitter from 'twitter-lite';

import needle from 'needle';

const userId = '11348282';
const url = `https://api.twitter.com/2/users/${userId}/tweets`;

const bearerToken = process.env.TWITTER_BEARER_TOKEN;

export const getUserTweets = async () => {
  let userTweets: [] = [];
  let params = {
    max_results: 5,
    'tweet.fields': 'text',
    expansions: 'author_id',
    exclude: 'retweets,replies',
  };
  const options = {
    headers: {
      'User-Agent': 'v2UserTweetsJS',
      authorization: `Bearer ${bearerToken}`,
    },
  };

  let hasNextPage = true;
  let nextToken = null;
  let userName;
  console.log('Retrieving Tweets...');

  // while (hasNextPage) {
  let resp = await getPage(params, options, nextToken);
  if (
    resp &&
    resp.meta &&
    resp.meta.result_count &&
    resp.meta.result_count > 0
  ) {
    // userName = resp.includes.users[0].username;
    if (resp.data) {
      userTweets.push.apply(userTweets, resp.data);
    }
    if (resp.meta.next_token) {
      nextToken = resp.meta.next_token;
    } else {
      hasNextPage = false;
    }
  } else {
    hasNextPage = false;
  }
  // }

  // console.dir(userTweets, {
  //   depth: null,
  // });
  console.log(
    `Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`
  );

  return userTweets;
};

const getPage = async (params: any, options: any, nextToken: any) => {
  if (nextToken) {
    params.pagination_token = nextToken;
  }

  try {
    const resp = await needle('get', url, params, options);

    if (resp.statusCode != 200) {
      console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
      return;
    }
    return resp.body;
  } catch (err) {
    throw new Error(`Request failed: ${err}`);
  }
};
