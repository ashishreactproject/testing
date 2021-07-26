import './App.css';
import logo from './images/logo.png';
import menu1 from './images/menu.png';

function App() {
  // var menuBtn = document.getElementById("menuBtn");
  // var sideNav = document.getElementById("sideNav");
  // var menu = document.getElementById("menu");

  // var menuBtn = () => {
  //   if (sideNav.style.right == "-250px") {
  //     sideNav.style.right = "0";
  //   }
  //   else {
  //     sideNav.style.right = "-250px";
  //   }
  // }

  return (
    <>
      <section id="banner">
        <img src={logo} alt="logo" className="logo" />
        <div className="banner-text">
          <h1>Hair Studio</h1>
          <p>Style Your Hair is Style Your Life</p>
          <div className="banner-btn">
            <span></span> Find Out
            <span></span> Read More
          </div>
        </div>
      </section>
      <div id="sideNav">
        <nav>
          <ul>
            <li>HOME</li>
            <li>FEATURES</li>
            <li>SERVICES</li>
            <li>TESTIMONIALS</li>
            <li>MEET US </li>
          </ul>
        </nav>
      </div>
      <div id="menuBtn">
        <img src={menu1} alt="menu" id="menu" />
      </div>
      <script>

      </script>
    </>
  );
}

export default App;
