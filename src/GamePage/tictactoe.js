import React from "react";
import Board from "./board.js";
import findWinner from "./findWinner.js";

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: Array(9).fill(null),
      placeX: true,
    };
  }

  handleClick(i) {
    const newBoard = this.state.boardState.slice();
    // calculate winner before next move
    if (findWinner(newBoard) || newBoard[i]) {
      return;
    }
    newBoard[i] = this.state.placeX ? "X" : "O";

    this.setState({
      boardState: newBoard,
      placeX: !this.state.placeX,
    });
  }

  handleReset = (event) => {
    this.setState({
      boardState: Array(9).fill(null),
      placeX: true,
    });
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.boardState}
            onClick={(i) => this.handleClick(i)}
            onReset={this.handleReset}
            placeX={this.state.placeX}
          />
        </div>
      </div>
    );
  }
}

export default Tictactoe;
