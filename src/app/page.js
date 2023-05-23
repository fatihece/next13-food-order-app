import Head from "next/head";
import Header from "../../components/layout/Header";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
export default function Index() {
  return (
    <main>
      <Head>
        <title>Food Order App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <Carousel />
      <Campaigns />
    </main>
  );
}
