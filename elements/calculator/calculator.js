Polymer({
  ready: function () {
    this.currentCalculation = "";
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
  addToCalculation: function (event, detail, sender) { 
    if (sender.value == "sqrt") {
      this.currentCalculation += "Math.sqrt("
    } else if (this.basicOperations[sender.value]) {
      this.currentCalculation += this.basicOperations[sender.value];
    } else {
      this.currentCalculation += sender.value;
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