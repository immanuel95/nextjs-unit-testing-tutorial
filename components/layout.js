import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

import '../styles/sass/main.sass';

const Layout = props => (
  <>
    <Head>
      <title>Asik</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Nav></Nav>
    {props.children}
    <Footer></Footer>
  </>
);

export default Layout;
