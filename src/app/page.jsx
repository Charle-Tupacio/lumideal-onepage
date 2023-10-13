import "./style.css";
import Footer from "./components/Footer/footer";
import NavBar from "./components/NavBar/navBar";
import Section1 from "./sections/Section-1";
import Section2 from "./sections/Section-2";
import Section3 from "./sections/Section-3";
import Section4 from "./sections/Section-4";
import Section5 from "./sections/Section-5";
import Section6 from "./sections/Section-6";
import Section7 from "./sections/Section-7";
import Section8 from "./sections/section-8";
import Carousel2 from "./components/Carousel/carousel2";
import Carouselmd from "./components/Carousel/carouselmd";

export default function Home() {
  return (
    <main className="container-none w-full mx-auto flex-col m-0">
      <NavBar />
      {/* seccion 1 (logo e links a redes) */}
      <Section1 />
      {/* seccion 2  */}
      <Section2 />
      {/* seccion 3 (3 logos png + 1 flotante) */}
      <Section3 />
      {/* seccion 4 (3 imagenes ilustrativas) */}
      {/* <Section4 /> */}
      {/* carousel */}
      <Carousel2 />
      <Carouselmd />
      {/* seccion 5 (las 3 cards) */}
      <Section5 />
      {/* seccion 6 (formulario de contacto) */}
      <Section6 />
      {/* seccion 7 (contenido instagram y links) */}
      <Section7 />
      {/* section 8 fondo */}
      <Section8 />
      <Footer />
    </main>
  );
}
