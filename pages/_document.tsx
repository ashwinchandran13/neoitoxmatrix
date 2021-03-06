import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
      return (
        <Html lang="en" className='scroll-smooth'>
          <Head>
            <link href="https://fonts.cdnfonts.com/css/antimatrix" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/matrix-code-nfi" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Rubik:wght@300&display=swap" rel="stylesheet"/>
            <meta 
              name="description"
              content="Neoito Website with Matrix Theme"
            />
            <meta 
              name="keywords"
              content="Neoito Website with Matrix Theme"
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