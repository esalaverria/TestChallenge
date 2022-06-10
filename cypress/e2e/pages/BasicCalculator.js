export class BasicCalculator {
  add() {
    cy.get("#selectOperationDropdown").select("0");
  }
  substract() {
    cy.get("#selectOperationDropdown").select("1");
  }
  multiply() {
    cy.get("#selectOperationDropdown").select("2");
  }
  divide() {
    cy.get("#selectOperationDropdown").select("3");
  }
  firstNumber() {
    return cy.get("#number1Field");
  }
  secondNumber() {
    return cy.get("#number2Field");
  }
  onlyIntegersChecked() {
    cy.get("#integerSelect").check();
  }
  onlyIntegersUnChecked() {
    cy.get("#integerSelect").uncheck();
  }
  answer() {
    return cy.get("#numberAnswerField");
  }
  calculate() {
    cy.get("#calculateButton").click();
  }
}
