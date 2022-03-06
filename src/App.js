import image from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import view from "./images/icon-view.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <main>
          <article className="main-image">
            <img src={image} alt="" />
            <div>
              <img src={view} alt="" />
            </div>
          </article>
          <article>
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <ul>
              <li>
                <img src={ethereum} alt="" /> 0.041 ETH
              </li>
              <li>
                <img src={clock} alt="" /> 3 days left
              </li>
            </ul>
          </article>
          <article className="avatar">
            <img src={avatar} alt="" />
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </article>
        </main>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/mustafafaqiry">Mustafa Faqiry</a>.
        </div>
      </div>
    </>
  );
}
export default App;
