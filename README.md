### Web Calculator

This web calculator is a Polymer component. To use it, include the following:
```
 <maria-calculator theme="dark" calcWidth="300" calcHeight="400">
 </maria-calculator>
```
* Settings: You can change the calculator's theme, width, and height by setting the properties `theme`, `calcWidth`, and `calcHeight`. The theme options are "light" and "dark". The calculator's contents adjust to fill the given height and width.
* Supported Operations: The calculator can multiply, divide, find a square root, and clear its results.
* Error Handling: The calculator displays an error message for invalid calculations (such as "3--9").

### Demo:

A demo is up at https://pacana-calculator.herokuapp.com/

#### To Do:
Given more time, I would add the following:
* Scroll to end of calculator input: Calculator input just runs off the screen for long calculations (e.g., "9999999999999*44444"). I would hide the beginning of the input string and just display the last few digits.
* Add default settings for `theme`, `calcWidth`, etc., so they don't need to be specified.
