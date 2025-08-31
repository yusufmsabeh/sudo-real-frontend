import icon from "../assets/Icon code.png";

export default function NavBar() {
  return (
    <nav>
      <div className="icon">
        <img src={icon} alt="Logo" />
        <span>Sudo Real</span>
      </div>
    </nav>
  );
}
