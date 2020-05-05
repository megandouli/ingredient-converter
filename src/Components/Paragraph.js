import React from "react";

class Paragraph extends React.Component {
  render() {
    return (
      <p className="col-md-6 text-justify m-auto pt-3">{this.props.text}</p>
    );
  }
}

export default Paragraph;
