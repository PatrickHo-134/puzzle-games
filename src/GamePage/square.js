import React from "react";

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#06d6a0",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

class Square extends React.Component {
  render() {
    return (
      <div className="square" onClick={this.props.onClick} style={squareStyle}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
