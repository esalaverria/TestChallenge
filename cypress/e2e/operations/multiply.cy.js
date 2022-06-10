/// <reference types="cypress" />

import { BasicCalculator } from "../pages/BasicCalculator";
const basicCalculator = new BasicCalculator();

describe("Multiply Operation", () => {
  beforeEach(() => {
    cy.fixture("multiply.json").as("multiply");
  });

  context("Integers", () => {
    it("multiplying two number", function () {
      this.multiply.forEach((data) => {
        if (data.context == "integers") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.multiply();
          if (data.integersOnly == "True") {
            basicCalculator.onlyIntegersChecked();
          } else {
            basicCalculator.onlyIntegersUnChecked();
          }
          basicCalculator.calculate();
          basicCalculator.answer().should("have.value", data.answer);
        }
      });
    });
  });

  context("Reals", () => {
    it("multiplying two number", function () {
      this.multiply.forEach((data) => {
        if (data.context == "reals") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.multiply();
          if (data.integersOnly == "True") {
            basicCalculator.onlyIntegersChecked();
          } else {
            basicCalculator.onlyIntegersUnChecked();
          }
          basicCalculator.calculate();
          basicCalculator.answer().should("have.value", data.answer);
        }
      });
    });
  });
});
