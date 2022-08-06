import React from 'react';
import Head from "next/head";

const PageTitle = ({keywords, description, title}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

PageTitle.defaultProps = {
  title: "MoviePro",
  keywords: "stream popular movies",
  description: "tream popular movies for free"
}

export default PageTitle;