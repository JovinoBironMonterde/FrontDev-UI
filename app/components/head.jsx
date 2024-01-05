import Head from 'next/head';
import Carousel from '../include/owlcarousel/owlcarousel'

const owlcarousel = () => (
  <Head>
    <Carousel />
    <script src="/jquery.min.js"></script>
    <script src="/jquery.dad.min.js"></script>
  </Head>
);

export default owlcarousel;
