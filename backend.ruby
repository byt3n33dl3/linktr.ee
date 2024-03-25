require 'sinatra'
require 'json'

get '/api/links/:user_id' do
  content_type :json
  links = Link.where(user_id: params[:user_id])
  links.to_json
end
