import React from "react";

class Paragraph extends React.Component {
  render() {
    return <p className="w-50 text-justify m-auto pt-3">{this.props.text}</p>;
  }
}

export default Paragraph;
