import { Match, Switch, createSignal } from "solid-js";
import "./Intro.less";
function Intro() {
  const [currentPage, setCurrentPage] = createSignal(1);

  return (
    <div class="intro-container">
      <Switch>
        <Match when={currentPage() === 1}>
          <FirstIntro />
        </Match>
      </Switch>
    </div>
  );
}

export default Intro;

function FirstIntro() {
  return (
    <>
      <header class="intro__header">
        <h1>Welcome</h1>
        <h2>to this simple Degiro Tracker :)</h2>
      </header>
      <p>
        This app is meant to serve as a simple companion app to your degiro
        account.
      </p>
      <p>
        In here, you'll be able to <strong>import your data</strong> and view it
        in a more <strong>appealing and informative</strong> way.
      </p>
    </>
  );
}
