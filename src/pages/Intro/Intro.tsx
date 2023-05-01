import { Match, Show, Switch, createSignal } from "solid-js";
import ArrowIcon from "../../assets/icons/arrow-right.svg";
import { PrimaryButton } from "../../components/Button/Buttons";
import "./Intro.less";

const Intro = () => {
  const [currentPage, setCurrentPage] = createSignal(1);

  return (
    <div class="intro-container">
      <Switch>
        <Match when={currentPage() === 1}>
          <FirstIntro />
        </Match>
        <Match when={currentPage() === 2}>
          <SecondIntro />
        </Match>
      </Switch>
      <div class="intro-page-switcher">
        <Show when={currentPage() > 1}>
          <PrimaryButton
            class="intro-btn intro-btn--reverse"
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <ArrowIcon />
          </PrimaryButton>
        </Show>
        <Show when={currentPage() < 3}>
          <PrimaryButton
            class="intro-btn"
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <ArrowIcon />
          </PrimaryButton>
        </Show>
      </div>
    </div>
  );
};

export default Intro;

const FirstIntro = () => {
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
};

const SecondIntro = () => {
  return (
    <>
      <header class="intro__header">
        <h2>Please insert your name:</h2>
      </header>
      <input />
    </>
  );
};
