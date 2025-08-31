import "../assets/home.css";
import NavBar from "../components/NavBar";
import InputBox from "../components/InputBox";
import OutputBox from "../components/OutputBox";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <InputBox />
        <OutputBox />
      </main>
      <footer>
        <span>© 2023 Sudo Real. All rights reserved.</span>
      </footer>
    </>
  );
}
