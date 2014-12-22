/** Calculator Model
 - Performs the actual calculations (e.g., add, subtract).
**/
var calculator = {
  // Reset the current calculation.
  refresh: function () {
    this.currentCalculation = "";
  },
  // Map supported operations to strings that can be evaluated.
  basicOperations: {
    'multiply': '*',
    'add': '+',
    'subtract': '-',
    'divide': '/',
    'sqrt': 'Math.sqrt('
  },
  // Evaluate current calculation.
  calculate: function () {
    var temp = this.currentCalculation;
    this.currentCalculation = eval(temp);
    return this.currentCalculation;
  },
  // Update the current calculation based on inputs.
  updateCalculation: function (buttonVal) {
    if (this.basicOperations[buttonVal]) {
      this.currentCalculation += this.basicOperations[buttonVal];
    } else {
      this.currentCalculation += buttonVal;
    }
    // TODO: Additional layer of validation?
    return this.currentCalculation;
  }
}

/** Calculator View
 - Configure Polymer settings (published properties, event handlers)
 - Displays the current calculation and the result.
**/
Polymer({
  // Reset the calculator when display is ready.
  ready: function () {
    this.calculator.refresh();
  },
  // PUBLISHED PROPERTIES:
  // - Publish theme, calcWidth, and calcHeight so they can be set externally
  // (e.g., <maria-calculator theme="dark">). Set default values.
  theme: {
    value: "light",
    reflect: true
  },
  calcWidth: {
    value: "183",
    reflect: true
  },
  calcHeight: {
    value: "246",
    reflect: true
  },
  // BUTTONS:
  // - Organize buttons as objects; display them with the 'calcBtn' template. //   Separate the displayed value from the actual value sent when the button //   is clicked. (e.g., √ vs "sqrt".)
  firstRow: [{val: "(", displayedVal: "(",},
              {val: ")", displayedVal: ")"}],
  secondRow: [{val: "7", displayedVal: "7"},
              {val: "8", displayedVal: "8"},
              {val: "9", displayedVal: "9"},
              {val: "sqrt", displayedVal: "\u221A"}],
  thirdRow: [{val: "4", displayedVal: "4"},
              {val: "5", displayedVal: "5"},
              {val: "6", displayedVal: "6"},
              {val: "multiply", displayedVal: "\u00D7"},
              {val: "divide", displayedVal: "\u00F7"}],
  fourthRow: [{val: "1", displayedVal: "1"},
              {val: "2", displayedVal: "2"},
              {val: "3", displayedVal: "3"},
              {val: "add", displayedVal: "+"},
              {val: "subtract", displayedVal: "\u2212"}],
  fifthRow: [{val: "0", displayedVal: "0"},
             {},
             {},
             {val: "=", displayedVal: "="},
             {val: "clear", displayedVal: "Clear"}],
  // - If the user clicks on the "clear" or "=" button, then either clear
  //   the display or run the calculation. Otherwise, update the current
  //   calculation using the button's value.
  buttonCallback: function(event, detail, sender) {
    var newToken = sender.value;
    var calculationToDisplay;
    if (sender.value === "clear") {
      this.calculator.refresh();
      this.clearDisplay();
    } else {
      if (newToken === "=") {
        calculationToDisplay = this.calculator.calculate();
      } else {
        calculationToDisplay = this.calculator.updateCalculation(newToken);
      }
      this.updateDisplay(calculationToDisplay);
    }
  },
  // Wire up Polymer component to "calculator" model.
  calculator: calculator,
  // DISPLAYED CALCULATION:
  // - Uses Polymer's automatic node-finding (this.$.X) to update
  // input field with new calculation.
  updateDisplay: function(calculation) {
    this.$.calculation.value = this.reformatCalculation(calculation);
  },
  // - Clear 'input' field.
  clearDisplay: function() {
    this.$.calculation.value = "";
  },
  // - Format calculation for display.
  reformatCalculation: function(calculation) {
    return calculation.toString().replace("Math.sqrt(", "\u221A(")
  },
});

