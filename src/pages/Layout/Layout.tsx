import Intro from "../Intro/Intro";
import "./layout.less";

const Layout = () => {
  /* 
  TODO:
  - If the user already has a local config skip Intro
  */
  return (
    <main class="layout">
      <Intro />
    </main>
  );
};

export default Layout;
