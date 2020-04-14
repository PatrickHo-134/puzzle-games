import React from "react";
import Square from "./square.js";
import findWinner from "./findWinner.js";

const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const winnerStyle = {
  height: "30px",
  marginTop: "10px",
  marginBottom: "10px",
  fontWeight: "bold",
  fontSize: "25px",
  color: "red",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#06d6a0",
  color: "white",
  fontSize: "16px",
  borderRadius: "10px",
};

class Board extends React.Component {
  render() {
    var nextPlayer = this.props.placeX ? "X" : "O";
    var winner = findWinner(this.props.squares);
    let claim, status;

    if (winner) {
      claim = "Winner: " + winner;
      status = "Game finished!!!";
    } else {
      claim = "";
      status = "Next player: " + nextPlayer;
    }

    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>
          {status}
        </div>
        <div className="winner" style={winnerStyle}>
          {claim}
        </div>

        <button onClick={this.props.onReset} style={buttonStyle}>
          Reset
        </button>

        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square
              value={this.props.squares[0]}
              onClick={() => this.props.onClick(0)}
            />
            <Square
              value={this.props.squares[1]}
              onClick={() => this.props.onClick(1)}
            />
            <Square
              value={this.props.squares[2]}
              onClick={() => this.props.onClick(2)}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              value={this.props.squares[3]}
              onClick={() => this.props.onClick(3)}
            />
            <Square
              value={this.props.squares[4]}
              onClick={() => this.props.onClick(4)}
            />
            <Square
              value={this.props.squares[5]}
              onClick={() => this.props.onClick(5)}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              value={this.props.squares[6]}
              onClick={() => this.props.onClick(6)}
            />
            <Square
              value={this.props.squares[7]}
              onClick={() => this.props.onClick(7)}
            />
            <Square
              value={this.props.squares[8]}
              onClick={() => this.props.onClick(8)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
