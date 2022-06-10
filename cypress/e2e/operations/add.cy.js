/// <reference types="cypress" />

import { BasicCalculator } from "../pages/BasicCalculator";
const basicCalculator = new BasicCalculator();

describe("Addition Operation", () => {
  beforeEach(() => {
    cy.fixture("add.json").as("add");
  });

  context("Integers", () => {
    it("adding two number", function () {
      this.add.forEach((data) => {
        if (data.context == "integers") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.add();
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
    it("adding two number", function () {
      this.add.forEach((data) => {
        if (data.context == "reals") {
          cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
          basicCalculator.firstNumber().type(data.firstNumber);
          basicCalculator.secondNumber().type(data.secondNumber);
          basicCalculator.add();
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
