import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Header } from "../components/Header";
import MapComponent from "../components/MapComponent";
import MapWrapper from "../components/MapWrapper";
import Image from "../components/Image";
import MapC from "../components/MapC";
// import MapTiler from "~/components/MapTiler";
import dynamic from "next/dynamic";

const MapTiler = dynamic(() => import('~/components/Map/MapTiler'), {
  ssr: false
});

export default function Home() {

  return (
    <>
      <Head>
        <title>NeuGuessr</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <main>
        <Header/>
        <div className="container">
          <div className="flex flex-row justify-center flex-wrap gap-10 pt-5">
            <div className="flex-1">
              <Image/>
            </div>
            <div className="flex-none">
              <MapComponent/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

/*
npm run dev
git add -A
git commit -m "message"
git push origin main
*/