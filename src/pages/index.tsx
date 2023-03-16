import { type NextPage } from "next";
import Head from "next/head";
import Scene from "~/components/Scene";
import Footer from "~/components/Footer";
import { Canvas } from "@react-three/fiber";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aziz Mejri</title>
        <meta name="description" content="Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100svh] bg-black">
        <Canvas>
          <Scene />
        </Canvas>
      </main>
      <Footer />
    </>
  );
};

export default Home;
