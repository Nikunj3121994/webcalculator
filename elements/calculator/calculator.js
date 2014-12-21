Polymer({
  ready: function () {
    this.tokens = [];
  },
  operations: {
    'multiply': 'x',
    'add': '+',
    'subtract': '-',
    'divide': '/'
  },
  calculationExpression: function () {
    var self = this;
    return this.tokens.map(function(elem){
      return (self.operations[elem]) ? self.operations[elem] : elem; 
    }).join("");
  },
  calculate: function () {
    console.log("calculating things");
  },
  addToCalculation: function (event, detail, sender) { 
    this.tokens.push(sender.value);
    this.displayCurrentCalculation();
  },
  clearCalculation: function() {
    this.tokens = [];
    this.displayCurrentCalculation();
  },
  displayCurrentCalculation: function() {
    this.$.calculation.value = this.calculationExpression();
  },
  computed: {
    currentCalculationString: 'bar'
  }
});