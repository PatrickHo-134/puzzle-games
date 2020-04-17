import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import PlayTictactoe from "./components/TictactoePage/tictactoePage";
import PlaySudoku from "./components/SudokuPage/sudokuPage";
import PlayCrossword from "./components/CrosswordPage/crosswordPage";
import history from "./components/history/history";

const Main = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/playtictactoe" component={PlayTictactoe} />
          <Route path="/playsudoku" component={PlaySudoku} />
          <Route path="/playcrossword" component={PlayCrossword} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
