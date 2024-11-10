import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import ShopCatagories from "./component/ShopCatagories";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <ShopCatagories/>
      <Footer/> */}
    </div>
  );
}
