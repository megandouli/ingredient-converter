(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),s=t.n(i),l=(t(13),t(14),t(15),t(1)),o=t(2),u=t(4),m=t(3),c=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{className:"col-md-6 text-justify m-auto pt-3"},this.props.text)}}]),t}(r.a.Component),h=t(5),p=[{name:"",gramsPerCup:null},{name:"Baking Powder",gramsPerCup:192},{name:"Baking Soda",gramsPerCup:288},{name:"Butter",gramsPerCup:227},{name:"Buttermilk",gramsPerCup:227},{name:"Chocolate Chips",gramsPerCup:170},{name:"Cocoa Powder",gramsPerCup:84},{name:"Cornstarch",gramsPerCup:112},{name:"Flour \u2014 AP",gramsPerCup:120},{name:"Flour \u2014 Bread",gramsPerCup:120},{name:"Flour \u2014 Cake",gramsPerCup:114},{name:"Flour \u2014 Whole Wheat",gramsPerCup:113},{name:"Heavy Cream",gramsPerCup:227},{name:"Honey",gramsPerCup:336},{name:"Mayonnaise",gramsPerCup:220},{name:"Milk",gramsPerCup:227},{name:"Molasses",gramsPerCup:322},{name:"Olive Oil",gramsPerCup:200},{name:"Peanut Butter",gramsPerCup:270},{name:"Salt",gramsPerCup:256},{name:"Sour Cream",gramsPerCup:227},{name:"Sugar \u2014 White",gramsPerCup:200},{name:"Sugar \u2014 Brown(Packed)",gramsPerCup:213},{name:"Sugar \u2014 Confectioner's",gramsPerCup:113},{name:"Vegetable Oil",gramsPerCup:200},{name:"Water",gramsPerCup:236.59},{name:"Yogurt Plain",gramsPerCup:227}],d=[{name:"cups",perCup:1},{name:"tbs",perCup:16},{name:"tsp",perCup:48}],g=[{name:"grams",perGram:1},{name:"oz.",perGram:1/28.349523125}];function v(e){return p.find((function(a){return a.name.toLowerCase()===e.toLowerCase()})).gramsPerCup}function f(e){return d.find((function(a){return a.name.toLowerCase()===e.toLowerCase()})).perCup}function C(e){return g.find((function(a){return a.name.toLowerCase()===e.toLowerCase()})).perGram}function b(e,a){return Number.isNaN(parseFloat(e))?e:(parseFloat(e)*C(a)).toFixed(3)}function O(e,a,t){return Number.isNaN(parseFloat(e))?e:(e/f(t)*v(a)).toFixed(3)}var j=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E,{label:"Amount:",form:r.a.createElement("input",{type:"text",onChange:this.props.handleChange,value:this.props.value,className:"form-control amount-input"})})}}]),t}(r.a.Component),y=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.name.toLowerCase();return r.a.createElement("option",{value:e},this.props.name)}}]),t}(r.a.Component),E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"m-auto mt-4 pt-4 generic-form col"},r.a.createElement("label",null,this.props.label,r.a.createElement("br",null),this.props.form))}}]),t}(r.a.Component),N=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.options;return r.a.createElement(E,{label:this.props.label,form:r.a.createElement("select",{"data-live-search":"true",onChange:this.props.handleChange,value:this.props.value,className:"select-menu "+this.props.className},e.map((function(e){return r.a.createElement(y,{key:e,name:e})})))})}}]),t}(r.a.Component),k=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).ingredients=p.map((function(e){return e.name})),n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(N,{label:"Ingredients:",value:this.props.value,handleChange:this.props.handleChange,options:this.ingredients,className:"ingredient-menu col-md-8"})}}]),t}(r.a.Component),w=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).units=d.map((function(e){return e.name})),n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(N,{label:"Units:",value:this.props.value,handleChange:this.props.handleChange,options:this.units,className:"imperial-menu"})}}]),t}(r.a.Component),P=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).units=g.map((function(e){return e.name})),n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(N,{label:"Units:",value:this.props.value,handleChange:this.props.handleChange,options:this.units,className:"metric-menu"})}}]),t}(r.a.Component),A=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={ingredient:"",amt:"0",imperialUnit:"cups",metricUnit:"grams"},n.handleIngredientChange=n.handleIngredientChange.bind(Object(h.a)(n)),n.handleImperialUnitChange=n.handleImperialUnitChange.bind(Object(h.a)(n)),n.handleMetricUnitChange=n.handleMetricUnitChange.bind(Object(h.a)(n)),n.handleImperialAmtChange=n.handleImperialAmtChange.bind(Object(h.a)(n)),n.handleMetricAmtChange=n.handleMetricAmtChange.bind(Object(h.a)(n)),n.changeAmount=n.changeAmount.bind(Object(h.a)(n)),n.imperialValue="0",n.metricValue="0",n}return Object(o.a)(t,[{key:"handleIngredientChange",value:function(e){var a=e.target.value;if(this.setState({ingredient:a}),""===a)this.changeAmount(0);else{var t=O(this.imperialValue/f(this.state.imperialUnit),a,"cups");this.changeAmount(t)}}},{key:"handleImperialUnitChange",value:function(e){this.setState({imperialUnit:e.target.value});var a=O(this.imperialValue/f(e.target.value),this.state.ingredient,"cups");this.changeAmount(a)}},{key:"handleMetricUnitChange",value:function(e){this.setState({metricUnit:e.target.value}),this.metricValue=b(this.state.amt,e.target.value)}},{key:"handleImperialAmtChange",value:function(e){var a=O(e.target.value,this.state.ingredient,this.state.imperialUnit);this.imperialValue=e.target.value,this.changeAmount(a)}},{key:"handleMetricAmtChange",value:function(e){var a,t,n=(a=e.target.value,t=this.state.metricUnit,Number.isNaN(parseFloat(a))?a:(a/C(t)).toFixed(3));this.metricValue=e.target.value,this.changeAmount(n)}},{key:"changeAmount",value:function(e){var a=this;this.setState((function(t){var n,r,i,s=(n=e,r=t.imperialUnit,i=t.ingredient,Number.isNaN(parseFloat(n))?n:(n/v(i)*f(r)).toFixed(3)),l=a.imperialValue;parseFloat(s)!==parseFloat(l)&&(a.imperialValue=Number.isNaN(parseFloat(s))?l:parseFloat(s),console.log("imperial amt after: "+a.imperialValue));var o=b(e,t.metricUnit),u=a.metricValue;return parseFloat(o)!==parseFloat(u)&&(a.metricValue=Number.isNaN(parseFloat(o))?u:parseFloat(o)),{amt:e}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-row m-auto"},r.a.createElement(k,{handleChange:this.handleIngredientChange,value:this.state.ingredient}),r.a.createElement("div",{className:"form-row m-0"},r.a.createElement("div",{className:"form-row m-0"},r.a.createElement(j,{handleChange:this.handleImperialAmtChange,value:this.imperialValue}),r.a.createElement(w,{handleChange:this.handleImperialUnitChange,value:this.state.imperialUnit})),r.a.createElement("div",{className:"form-row m-0"},r.a.createElement(j,{handleChange:this.handleMetricAmtChange,value:this.metricValue}),r.a.createElement(P,{handleChange:this.handleMetricUnitChange,value:this.state.metricUnit}),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.id)},className:"remove-button mb-5"},r.a.createElement("i",{className:"fa fa-trash"})))))}}]),t}(r.a.Component),U=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleAdd=n.handleAdd.bind(Object(h.a)(n)),n.onDelete=n.onDelete.bind(Object(h.a)(n)),n.state={allEntries:[new Date]},n}return Object(o.a)(t,[{key:"handleAdd",value:function(){var e=Array.from(this.state.allEntries);e.push(new Date),this.setState({allEntries:e})}},{key:"onDelete",value:function(e){var a=Array.from(this.state.allEntries).filter((function(a){return e!==a}));this.setState({allEntries:a})}},{key:"render",value:function(){var e=this,a=Array.from(this.state.allEntries);return r.a.createElement("div",{className:"entries col-md-6 m-auto"},a.map((function(a){return r.a.createElement(A,{key:a,id:a,onDelete:e.onDelete})})),r.a.createElement("button",{className:"p-2 mt-5",id:"add-button",onClick:this.handleAdd},"Add Item"))}}]),t}(r.a.Component),F=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-body pt-4 pb-3 pl-2 pr-2"},r.a.createElement(c,{text:"Measuring ingredients by weight is by far the most precise way of determining how much of something should be used in a recipe. However, the majority of recipes in the US are not in the metric system and constantly having to figure how much 1 c. of flour weighs can be a pain. This app is here to help you convert your common baking ingredients into the metric system!"}),r.a.createElement(U,null))}}]),t}(r.a.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header m-0 p-4"},r.a.createElement("h1",null,"Ingredient Converter")),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(F,null)),r.a.createElement("div",{className:"App-footer"},r.a.createElement("p",{className:"col-md-6 m-auto p-4"},'Note: conversions are approximate because ingredients from different brands vary in density. Conversion rates taken from https://www.thecalculatorsite.com/cooking/cups-grams.php and https://www.kingarthurflour.com/learn/ingredient-weight-chart."')))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.17fd4116.chunk.js.map