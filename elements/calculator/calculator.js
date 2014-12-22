Polymer({
  ready: function () {
    this.currentCalculation = "";
  },
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
              {val: "multiply", displayedVal: "\u00F7"}],
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
  buttonCallback: function(event, detail, sender) {
    if (sender.value == "=") {
      this.calculate();
    } else if (sender.value == "clear") {
      this.clearCalculation();
    } else {
      this.addToCalculation(sender.value);
    }
  },
  basicOperations: {
    'multiply': '*',
    'add': '+',
    'subtract': '-',
    'divide': '/',
  },
  currentCalculationString: function() {
    return this.currentCalculation.replace("Math.sqrt(", "\u221A(")
  },
  calculate: function () {
    this.$.calculation.value = eval(this.currentCalculation);
    this.currentCalculation = this.$.calculation.value.toString();
  },
  addToCalculation: function (buttonVal) {
    if (buttonVal == "sqrt") {
      this.currentCalculation += "Math.sqrt("
    } else if (this.basicOperations[buttonVal]) {
      this.currentCalculation += this.basicOperations[buttonVal];
    } else {
      this.currentCalculation += buttonVal;
    }
    this.displayCurrentCalculation();
  },
  clearCalculation: function() {
    this.currentCalculation = "";
    this.displayCurrentCalculation();
  },
  displayCurrentCalculation: function() {
    this.$.calculation.value = this.currentCalculationString();
  },
});