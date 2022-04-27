import Header from "@components/header/Header";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>ML Front test Kiyoshi</title>
        <meta name="description" content="ML Front test Kiyoshi" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
