import React from "react";

let ingredients = [
  { name: "", gramsPerCup: null },
  { name: "Flour", gramsPerCup: 242 },
  { name: "Sugar", gramsPerCup: 200 },
  { name: "Butter", gramsPerCup: 227 },
  { name: "Cocoa Powder", gramsPerCup: 100 },
  { name: "Milk", gramsPerCup: 242 },
  { name: "Water", gramsPerCup: 236.59 }
];

let imperialUnits = [
  { name: "cups", perCup: 1 },
  { name: "tbs", perCup: 16 },
  { name: "tsp", perCup: 48 }
];

let metricUnits = [
  { name: "grams", perGram: 1 },
  { name: "oz.", perGrams: 28.349523125 }
];

// returns the grams/Cup for the given ingredient name
function getGramsPerCup(ingredName) {
  var element = ingredients.find(item => {
    return item.name.toLowerCase() === ingredName.toLowerCase();
  });

  return element.gramsPerCup;
}

function getPerCup(imperialUnitName) {
  var element = imperialUnits.find(unit => {
    return unit.name.toLowerCase() === imperialUnitName.toLowerCase();
  });

  return element.perCup;
}

function getPerGram(metricUnitName) {
  var element = metricUnits.find(unit => {
    return unit.name.toLowerCase() === metricUnitName.toLowerCase();
  });

  return element.perGram;
}

// converts from the given amount in grams into the given metric unit
function convertToMetric(grams, metricUnit) {
  if (Number.isNaN(parseFloat(grams))) {
    return grams;
  } else {
    return grams * getPerGram(metricUnit);
  }
}

// converts from the given amount in the given metric units into grams
function convertToGrams(amt, metricUnit) {
  if (Number.isNaN(parseFloat(amt))) {
    return amt;
  } else {
    return amt / getPerGram(metricUnit);
  }
}

// returns the given amount (in grams) in its equivalent amount in the given imperial unit
// for the given ingredient name
function convertToImperial(grams, imperialUnit, ingredName) {
  if (Number.isNaN(parseFloat(grams))) {
    return grams;
  } else {
    var asCups = grams / getGramsPerCup(ingredName);
    var result = asCups * getPerCup(imperialUnit);
    return result;
  }
}

// converts from the given amount of the given ingredient in the given imperial unit
// into grams
function convertImperialToGrams(amt, ingredName, imperialUnit) {
  if (Number.isNaN(parseFloat(amt))) {
    return amt;
  } else {
    var asCups = amt / getPerCup(imperialUnit);
    var result = asCups * getGramsPerCup(ingredName);
    return result;
  }
}

class AmountInput extends React.Component {
  render() {
    return (
      <GenericForm
        label="Amount:"
        form={
          <input
            type="text"
            onChange={this.props.handleChange}
            value={this.props.value}
            className="form-control amount-input"
          />
        }
      />
    );
  }
}

class MenuOption extends React.Component {
  render() {
    let value = this.props.name.toLowerCase();
    return <option value={value}>{this.props.name}</option>;
  }
}

class GenericForm extends React.Component {
  render() {
    return (
      <div className="w-50 m-auto mt-4 pt-4 generic-form col">
        <label>
          {this.props.label}
          <br />
          {this.props.form}
        </label>
      </div>
    );
  }
}

class GenericMenu extends React.Component {
  render() {
    let options = this.props.options;
    return (
      <GenericForm
        label={this.props.label}
        form={
          <select
            onChange={this.props.handleChange}
            value={this.props.value}
            className={this.props.className + " select-menu"}
          >
            {options.map(option => {
              return <MenuOption key={option} name={option} />;
            })}
          </select>
        }
      />
    );
  }
}

class IngredientMenu extends React.Component {
  constructor(props) {
    super(props);
    this.ingredients = ingredients.map(ingredient => {
      return ingredient.name;
    });
  }

  render() {
    return (
      <GenericMenu
        label="Ingredients:"
        value={this.props.value}
        handleChange={this.props.handleChange}
        options={this.ingredients}
        className="ingredient-menu"
      />
    );
  }
}

class ImperialDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.units = imperialUnits.map(unit => {
      return unit.name;
    });
  }
  render() {
    return (
      <GenericMenu
        label="Units:"
        value={this.props.value}
        handleChange={this.props.handleChange}
        options={this.units}
        className="imperial-menu"
      />
    );
  }
}

class MetricDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.units = metricUnits.map(unit => {
      return unit.name;
    });
  }
  render() {
    return (
      <GenericMenu
        label="Units:"
        value={this.props.value}
        handleChange={this.props.handleChange}
        options={this.units}
        className="metric-menu"
      />
    );
  }
}

class IngredientRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      amt: "0", // in grams
      imperialUnit: "cups",
      metricUnit: "grams"
    };
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleImperialUnitChange = this.handleImperialUnitChange.bind(this);
    this.handleMetricUnitChange = this.handleMetricUnitChange.bind(this);
    this.handleImperialAmtChange = this.handleImperialAmtChange.bind(this);
    this.handleMetricAmtChange = this.handleMetricAmtChange.bind(this);
    this.changeAmountWithIngredient = this.changeAmountWithIngredient.bind(
      this
    );
    this.changeAmount = this.changeAmount.bind(this);
    this.imperialValue = "0";
    this.metricValue = "0";
  }

  handleIngredientChange(event) {
    let newIngredient = event.target.value;
    this.setState({ ingredient: newIngredient });
    if (newIngredient === "") {
      this.changeAmountWithIngredient(0, newIngredient);
    } else {
      let oldAmtCups = this.imperialValue / getPerCup(this.state.imperialUnit);
      let newAmtGrams = convertImperialToGrams(
        oldAmtCups,
        newIngredient,
        "cups"
      );
      this.changeAmountWithIngredient(newAmtGrams, newIngredient);
    }
  }

  handleImperialUnitChange(event) {
    this.setState({ imperialUnit: event.target.value });
  }

  handleMetricUnitChange(event) {
    this.setState({ metricUnit: event.target.value });
  }

  handleImperialAmtChange(event) {
    let newAmt = convertImperialToGrams(
      event.target.value,
      this.state.ingredient,
      this.state.imperialUnit
    );
    this.imperialValue = event.target.value;
    this.changeAmount(newAmt);
  }

  handleMetricAmtChange(event) {
    let newAmt = convertToGrams(
      parseFloat(event.target.value),
      this.state.metricUnit
    );
    this.metricValue = event.target.value;
    this.changeAmount(newAmt);
  }

  changeAmountWithIngredient(newAmt, newIngredient) {
    let newAmtImperial = convertToImperial(
      newAmt,
      this.state.imperialUnit,
      newIngredient
    );
    let oldAmtImperial = this.imperialValue;
    if (parseFloat(newAmtImperial) !== parseFloat(oldAmtImperial)) {
      this.imperialValue = Number.isNaN(newAmtImperial)
        ? oldAmtImperial
        : newAmtImperial;
    }
    let newAmtMetric = convertToMetric(newAmt, this.state.metricUnit);

    let oldAmtMetric = this.metricValue;

    if (parseFloat(newAmtMetric) !== parseFloat(oldAmtMetric)) {
      this.metricValue = Number.isNaN(newAmtMetric)
        ? oldAmtMetric
        : newAmtMetric;
    }
    this.setState({ amt: newAmt });
  }

  changeAmount(newAmt) {
    this.changeAmountWithIngredient(newAmt, this.state.ingredient);
  }

  render() {
    return (
      <div className="form-row w-50 m-auto">
        <IngredientMenu
          handleChange={this.handleIngredientChange}
          value={this.state.ingredient}
        />
        <AmountInput
          handleChange={this.handleImperialAmtChange}
          value={this.imperialValue}
        />
        <ImperialDropdown
          handleChange={this.handleImperialUnitChange}
          value={this.state.imperialUnit}
        />
        <AmountInput
          handleChange={this.handleMetricAmtChange}
          value={this.metricValue}
        />
        <MetricDropdown
          handleChange={this.handleMetricUnitChange}
          value={this.state.metricUnit}
        />
      </div>
    );
  }
}

export default IngredientRow;
