import Head from "next/head";
import Link from "next/link";
import React from "react";
import colors from "../data/colors.json";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Colors generator</title>
        <meta
          name="description"
          content="App that displays pretty colors to learn Next!"
        />
      </Head>
      {colors.map((color) => (
        <Link href={`/${color.name}`}>
          <h2>{color.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Home;
