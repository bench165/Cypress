import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// เปิดเว็บเบราว์เซอร์
Given("Open the IoT Connect web browser", () => {
  cy.visit("/");
});

// กรอกชื่อและรหัสผ่านที่ถูกต้อง
When("Provide valid {string} and {string}", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
});

// คลิกปุ่ม submit เพื่อเข้าสู่ระบบ
And("Click on submit button", () => {
  cy.get("#btn_login").click();
});

// คลิกเมนู History Power Monitor
And("Click the History Power Moniter menu bar", () => {
  cy.wait(4000);
  cy.get(":nth-child(4) > .ttt-menu-bg").click();
  cy.get(".menu-open > .nav > :nth-child(2) > .nav-link").click();
});

// ตรวจสอบว่าหัวข้อเรื่องตรงไหม
Then("Successfully entered the history screen", () => {
  cy.get("h1").contains("History Power Monitor");
});
