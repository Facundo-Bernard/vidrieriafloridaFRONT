import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css'; // para tus animaciones CSS
import CAROUSEL from './CAROUSEL/CAROUSEL.JSX';
import DondeEncontrarnos from './DONDEENCONTRARNOS/DONDEENCONTRARNOS';
import FOOTER from "./FOOTER/FOOTER";
import NAVBAR from './NAVBAR/navbar';
import PROCESOSECTION from './PROCESOSECTION/PROCESOSECTION';
import PRODUCTSECTION from "./PRODUCTSECTION/PRODUCTSECTION";
import QUIENESSOMOS from './QUIENESSOMOS/QUIENESSOMOS';

function LANDINGPAGE() {

  return (
    <>
    <NAVBAR></NAVBAR>
        <main>
          <CAROUSEL></CAROUSEL>
          <QUIENESSOMOS></QUIENESSOMOS>
          <DondeEncontrarnos></DondeEncontrarnos>
          <PRODUCTSECTION></PRODUCTSECTION>
          <PROCESOSECTION></PROCESOSECTION>
          
        
        </main>
        <FOOTER></FOOTER>

    </>
  )
}

export default LANDINGPAGE
