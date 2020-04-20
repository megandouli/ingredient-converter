import React from "react";

class Paragraph extends React.Component {
  render() {
    return <p className="w-50 text-justify m-auto">{this.props.text}</p>;
  }
}

export default Paragraph;
