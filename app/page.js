import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full bg-white font-sans dark:bg-black max-sm:mb-16">
      <main className="w-5/6 min-h-screen flex flex-col items-center justify-center pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-16 lg:pb-8 xl:pt-20 xl:pb-10 bg-white dark:bg-black m-auto">
        <Nav />
        <Header />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
