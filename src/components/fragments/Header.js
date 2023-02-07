import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="/">
        <img src="/img/logo.png" alt="CARMEX logo" />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/customer">Klienci</Link>
          </li>
          <li>
            <Link to="/car">Samochody</Link>
          </li>
          <li>
            <Link to="/reservation">Rezerwacja</Link>
          </li>
          <li>
            <Link to="/register">Rejestracja</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
