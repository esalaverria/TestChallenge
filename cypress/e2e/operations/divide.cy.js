/// <reference types="cypress" />

import { BasicCalculator } from "../pages/BasicCalculator";
const basicCalculator = new BasicCalculator();

describe("Substract Operation", () => {
  beforeEach(() => {
    cy.fixture("divide.json").as("divide");
  });

  context("Integers", () => {
    it("dividing two number", function () {
      this.divide.forEach((data) => {
        if (data.context == "integers") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.divide();
          if (data.integersOnly == "True") {
            basicCalculator.onlyIntegersChecked();
          } else {
            basicCalculator.onlyIntegersUnChecked();
          }
          basicCalculator.calculate();
          if (data.secondNumber == "0") {
            basicCalculator.errorMessage().contains("Divide by zero error!");
            basicCalculator.answer().should("not.contain.value");
          } else {
            basicCalculator.answer().should("have.value", data.answer);
          }
        }
      });
    });
  });

  context("Reals", () => {
    it("dividing two number", function () {
      this.divide.forEach((data) => {
        if (data.context == "reals") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.divide();
          if (data.integersOnly == "True") {
            basicCalculator.onlyIntegersChecked();
          } else {
            basicCalculator.onlyIntegersUnChecked();
          }
          basicCalculator.calculate();
          if (data.secondNumber == "0") {
            basicCalculator.errorMessage().contains("Divide by zero error!");
            basicCalculator.answer().should("not.contain.value");
          } else {
            basicCalculator.answer().should("have.value", data.answer);
          }
        }
      });
    });
  });
});
