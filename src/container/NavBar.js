import react from "react";

export const NavBar = () => {
  return (
    <nav class="navbar">
      <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
        <i class="fa fa-bars"></i>
      </label>
      <a href="/" class="logo">
        Nasa-Asteroids
      </a>
      <input type="checkbox" id="chkToggle"></input>
      <ul class="main-nav my-auto" id="js-menu">
        <li>
          <a href="/" class="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="/problemstatement" class="nav-links">
            Problem Statement
          </a>
        </li>
        <li>
          <a href="/asteroids" class="nav-links">
            Asteroids
          </a>
        </li>

        <li>
          <a href="/search/date" class="nav-links">
            Asteroids Date Filter
          </a>
        </li>
       
      </ul>
    </nav>
  );
};
