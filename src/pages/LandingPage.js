import LandingPageImage from "../assets/Image (1).png";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../assets/style.css";

export default function LandingPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="main">
          <section className="text">
            <div className="head1-text">Convert Psuedo Code to Real Code</div>
            <div className="head2-text">
              Write in pseudocode. Get Python, Javascript, or PHP code
            </div>
            <Link className="primary-button" to={"/home"}>
              Start Now
            </Link>
          </section>
          <section className="image">
            <img src={LandingPageImage} alt="" />
          </section>
        </section>
      </main>
      <footer>
        <span>© 2023 Sudo Real. All rights reserved.</span>
      </footer>
    </>
  );
}
