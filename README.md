# Linear Regression

In linear regression, the relationships are modeled using linear predictor functions whose unknown model parameters are estimated from the data. 


## Example

|     | Age (X) | Glucose Level (Y) | XY    | X^2   | Y^2   |
| --- | ------- | ----------------- | ----- | ----- | ----- |
|     | 43      | 99                | 4257  | 1849  | 9801  |
|     | 21      | 65                | 1365  | 441   | 4225  |
|     | 25      | 79                | 1975  | 625   | 6241  |
|     | 42      | 75                | 3150  | 1764  | 5625  |
|     | 57      | 87                | 4959  | 3249  | 7569  |
|     | 59      | 81                | 4779  | 3481  | 6561  |
| SUM | 247     | 486               | 20485 | 11409 | 40022 |


A linear equation is an algebraic equation in which each term is either a constant or the product of a constant and a single variable.

![](https://github.com/barend-erasmus/linear-regression/raw/master/images/y-equation.png)

The first step in linear regression is to calculate the following 5 values.

* Sum of X.
* Sum of Y.
* Sum of XY.
* Sum of X^2.
* Sum of Y^2.

We can calculate `a`, which is the Y-intercept, using this equation.

![](https://github.com/barend-erasmus/linear-regression/raw/master/images/a-equation.png)

In this example `a` will be `65.142`.

We can calculate `b`, which is the slope, using this equation.

![](https://github.com/barend-erasmus/linear-regression/raw/master/images/b-equation.png)

In this example `b` will be `0.3852`.

Thus the Glucose Level of a 30 year old would be:

```
y = a + bx

y = 65.142 + (0.3852)(30)

y = 76.698
```

![](https://github.com/barend-erasmus/linear-regression/raw/master/images/chart.png)