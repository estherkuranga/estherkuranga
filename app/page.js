import Nav from "./components/Nav";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-screen w-5/6 flex-col items-center py-4 md:py-8 bg-white dark:bg-black md:items-start">
        <Nav />
        <Header />
      </main>
    </div>
  );
}
