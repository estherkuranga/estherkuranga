import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full bg-white font-sans dark:bg-black">
      <main className="w-5/6 min-h-screen flex flex-col items-center justify-center py-4 md:py-8 bg-white dark:bg-black m-auto">
        <Nav />
        <Header />
        <About />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
