import Header from "@components/header/Header";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <Header />
    </>
  );
};

export default Home;
