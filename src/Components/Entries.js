import React from "react";
import IngredientRow from "./Forms";

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = { allEntries: [new Date()] };
  }

  handleAdd() {
    let newEntries = Array.from(this.state.allEntries);
    newEntries.push(new Date());
    this.setState({
      allEntries: newEntries
    });
  }

  onDelete(row) {
    const entries = Array.from(this.state.allEntries).filter(entry => {
      return row !== entry;
    });
    this.setState({ allEntries: entries });
  }

  render() {
    let entries = Array.from(this.state.allEntries);
    return (
      <div className="entries col-md-6 m-auto">
        {entries.map(entry => {
          return (
            <IngredientRow key={entry} id={entry} onDelete={this.onDelete} />
          );
        })}
        <button className="p-2 mt-5" id="add-button" onClick={this.handleAdd}>
          Add Item
        </button>
      </div>
    );
  }
}

export default Entries;
