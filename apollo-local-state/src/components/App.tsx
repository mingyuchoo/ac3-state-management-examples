import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";

const App: React.FC = (): React.ReactElement => (
  <div>
    <HeaderContainer />
    <MainContainer />
  </div>
);

export default App;
