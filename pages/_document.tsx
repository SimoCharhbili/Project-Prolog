import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html dir="" data-theme="light">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="prose">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
