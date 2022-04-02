import logo from "images/logo.svg";
import ExternalLink from "components/ExternalLink";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <ExternalLink className="App-link" href="https://reactjs.org">
        Learn React
      </ExternalLink>
    </header>
  );
}
