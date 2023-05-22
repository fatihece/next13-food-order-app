import Head from "next/head";
// import Header from "../../Header.jsx";
// import Home from "../../pages/home/index.js";
import Header from "../../components/layout/Header";
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
    </main>
  );
}
