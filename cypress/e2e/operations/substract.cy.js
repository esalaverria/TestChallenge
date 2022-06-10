/// <reference types="cypress" />

import { BasicCalculator } from "../pages/BasicCalculator";
const basicCalculator = new BasicCalculator();

describe("Substract Operation", () => {
  beforeEach(() => {
    cy.fixture("substract.json").as("substract");
  });

  context("Integers", () => {
    it("substracting two number", function () {
      this.substract.forEach((data) => {
        if (data.context == "integers") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.substract();
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
    it("substracting two number", function () {
      this.substract.forEach((data) => {
        if (data.context == "reals") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.substract();
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
