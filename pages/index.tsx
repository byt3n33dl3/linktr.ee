import Image from 'next/image';
import logo from '@/public/images/logo.png';
import Divider from '@/components/Divider';
import Section from '@/components/Section';

import sekilasImg from '@/public/images/dummy2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Podcast from '@/components/Podcast';

import { getUserTweets } from '@/utils/twitter';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { Iceland, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import Celotehan from '@/components/Celotehan';
import { GetServerSideProps } from 'next';
import Twitter from 'twitter-lite';

const iceland = Iceland({ weight: '400', subsets: ['latin'] });
const opensans = Open_Sans({ subsets: ['latin'] });

// type Tweet = {
//   created_at: string;
//   author_id: string;
//   text: string;
// };

// type Props = {
//   tweets: Tweet[];
// };

export default function Home() {
  return (
    <>
      <main className="min-h-screen mx-4 md:mx-12 font-sans">
        <nav className="flex justify-between w-full px-4 py-4 md:mt-2">
          <Image src={logo} alt="Aldie Nusa Putra" height={50} />
          <div className="hidden md:block">
            <ul className="flex gap-8 h-full items-end font-display font-bold text-sm">
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  document
                    .getElementById('sekilas')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SEKILAS
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  document
                    .getElementById('podcast')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                PODCAST
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  document
                    .getElementById('celotehan')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                CELOTEHAN
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  document
                    .getElementById('kontak')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                KONTAK
              </li>
            </ul>
          </div>
        </nav>
        <Divider />
        <Section className="mx-2 md:mx-8">
          <h1 className="font-display text-2xl md:text-4xl lg:text-6xl">
            BOSEN ‘GAK SIH <span className="italic">KELEN </span>
            <br />
            <span className="inline-block">
              <span className="font-semibold">INDONESIA GINI-GINI AJA?</span>
            </span>
          </h1>
        </Section>
        <Divider />
        <Section>
          <div className="relative flex items-center justify-center">
            <video
              loop
              autoPlay
              muted
              poster="/images/dummy1.png"
              className="w-full object-cover h-[500px]"
            >
              <source src="/videos/sample.mp4" type="video/mp4" />
            </video>
            <div className="flex justify-between items-center px-12 mb-12 w-full absolute bottom-0 left-0">
              <div className="flex flex-col gap-2 font-display font-bold">
                <h2 className=" text-white">UNTUK INDONESIA</h2>
                <button className="bg-white py-1 w-1/2 text-sm">WATCH</button>
              </div>
              <Image src={logo} width={100} height={100} alt="ALDIE" />
            </div>
          </div>
        </Section>
        <Divider />
        <Section className="px-2 md:px-8" id="sekilas">
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="flex flex-col">
              <h2 className="tracking-wider text-xl mb-4">SEKILAS</h2>
              <div className="relative">
                <span className="font-black text-6xl italic absolute top-0 left-0">{`"`}</span>
                <h1 className="text-4xl font-script italic ml-8 mt-8">
                  Yuk, bangun <b>Indonesia</b>,
                  <br />
                  Mulai dari <b>Sumatera Utara!</b>
                </h1>
              </div>
              <div className="flex flex-col gap-6 ml-8 mt-8">
                <p>
                  Kelen tau nggak? Sumatera Utara adalah potensi kelapa sawit
                  nomor satu dunia! Apabila dimanfaatkan dengan baik, maka
                  keuntungannya bisa menggenjot perekonomian daerah senilai Rp
                  .... loh!
                </p>
                {/* <p>blablabvlabalabalalbt laborum</p> */}
                <p>
                  Yuk sama-sama kita bangun{' '}
                  <span className="font-bold">Indonesia</span>, mulai dari{' '}
                  <span className="font-bold">Sumatera Utara!</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full mt-12 md:mt-0 ">
              <Image src={sekilasImg} alt="ALDIE" width={350} height={100} />
            </div>
          </div>
        </Section>
        <Divider />
        <Section className="relative" id="podcast">
          {/* <h2 className="absolute top-6 left-8 tracking-wider text-xl z-10">
            PODCAST
          </h2> */}
          {/* <h2 className="tracking-wider text-xl mb-4 ml-8">PODCAST</h2> */}
          <Podcast />
        </Section>
        <Divider />
        <Section className="px-2 md:px-8" id="celotehan">
          <div className="flex flex-col">
            <h2 className="tracking-wider text-xl mb-4">CELOTEHAN ALDIE</h2>
            <Celotehan />
          </div>
        </Section>
        {/* <Divider />
        <Section className="px-2 md:px-8">
          <div className="flex flex-col">
            <h2 className="tracking-wider text-xl mb-4">
              LATEST INSTAGRAM UPDATE
            </h2>
            <Celotehan />
          </div>
        </Section> */}
      </main>
      <footer className="bg-black px-14 py-10" id="kontak">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 font-display text-aldie-yellow font-bold">
            <div className="flex flex-col">
              <p>ALDIE NUSA PUTRA</p>
              <span className={iceland.className}>with Partai Ummat</span>
            </div>
            <p>+628999999660</p>
            <p>aldienusa@gmail.com</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-display text-aldie-yellow font-bold">
              Kritik dan saran
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="flex flex-col gap-6 text-white"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`${opensans.className} bg-black border border-white rounded-lg px-4 py-4 outline-none`}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className={`${opensans.className} bg-black border border-white rounded-lg px-4 py-4 outline-none`}
              />
              <input
                type="phone"
                name="phone"
                placeholder="No. Telepon / Whatsapp"
                className={`${opensans.className} bg-black border border-white rounded-lg px-4 py-4 outline-none`}
              />
              <textarea
                name="pesan"
                cols={30}
                rows={5}
                placeholder="Pesan anda"
                className={`${opensans.className} bg-black border border-white rounded-lg px-4 py-4 outline-none`}
              ></textarea>
              <button
                type="submit"
                className={`${opensans.className} bg-aldie-yellow px-8 py-3 text-black`}
              >
                KIRIM
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between text-white font-sans mt-12">
          <div className="flex flex-row gap-4">
            <div className="bg-white rounded-full hover:scale-110">
              <Link href="">
                <FaFacebookF className="text-4xl text-black p-2" />
              </Link>
            </div>
            <div className="bg-white rounded-full hover:scale-110">
              <Link href="">
                <FaTwitter className="text-4xl text-black p-2" />
              </Link>
            </div>
            <div className="bg-white rounded-full hover:scale-110">
              <Link href="">
                <FaLinkedin className="text-4xl text-black p-2" />
              </Link>
            </div>
            <div className="bg-white rounded-full hover:scale-110">
              <Link href="">
                <FaInstagram className="text-4xl text-black p-2" />
              </Link>
            </div>
          </div>
          <span>
            © {new Date().getFullYear()} @noosakreatif, All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

// export async function getServerSideProps() {
//   const tweets = await getUserTweets();
//   return {
//     props: {
//       tweets: tweets,
//     },
//   };
// }
