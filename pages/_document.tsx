import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
      return (
        <Html lang="en" className='scroll-smooth'>
          <Head>
            <link href="http://fonts.cdnfonts.com/css/antimatrix" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Rubik:wght@300&display=swap" rel="stylesheet"/>
            <meta 
              name="description"
              content="Ashwin Chandran Web Developer"
            />
            <meta 
              name="keywords"
              content="React Aws Developer"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument