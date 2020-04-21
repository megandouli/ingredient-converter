import React from "react";
import Paragraph from "./Paragraph.js";
import Entries from "./Entries.js";

class AppBody extends React.Component {
  render() {
    return (
      <div className="App-body p-5">
        <Paragraph
          text="Measuring ingredients by weight is by far the most precise way of
          determining how much of something should be used in a recipe. However,
          the majority of recipes in the US are not in the metric system and
          constantly having to figure how much 1 c. of flour weighs can be a
          pain. This app is here to help you convert your common baking
          ingredients into the metric system!"
        />
        <Entries />
      </div>
    );
  }
}

export default AppBody;
