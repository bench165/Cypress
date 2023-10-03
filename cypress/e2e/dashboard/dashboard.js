import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

// import rgbHex from 'rgb-hex';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// เปิดเว็บเบราว์เซอร์
Given('Open the IoT Connect web browser', () => {
  cy.visit('/');
});

// กรอกชื่อและรหัสผ่านที่ถูกต้อง
When('Provide valid {string} and {string}', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
});

// คลิกปุ่ม submit เพื่อเข้าสู่ระบบ
And('Click on submit button', () => {
  cy.get('#btn_login').click();
});

// คลิกเมนู Dashboard Power Monitor
Given('Click the IoT Connect menu bar', () => {
  cy.wait(4000);
  cy.get(':nth-child(2) > .ttt-menu-bg').click();
  cy.get(':nth-child(2) > .nav > :nth-child(2) > .nav-link').click();
});

// ตรวจสอบว่าตัวพื้นหลังแสดงหรือไม่
Then('Successfully entered the Dashboard screen', () => {
  cy.get('h1').should('be.visible');
});

// ตรวจสอบว่ามีการแสดงผลของแต่ละส่วนหรือไม่
Then('Successfully Dashboard screen display', () => {
  cy.get('h1').contains('Dashboard Power Monitor');
  cy.get(':nth-child(1) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get(':nth-child(2) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get(':nth-child(3) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get(':nth-child(3) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get('.first').should('be.visible');
  cy.get('.multi-button > :nth-child(2)').should('be.visible');
  cy.get('.third').should('be.visible');
  cy.get('#main').should('be.visible');
  cy.get('#power').should('be.visible');
  cy.get('#energy').should('be.visible');
  cy.get('#voltage').should('be.visible');
  cy.get('#frequency').should('be.visible');
})

const hexToRgb = (hex) => {
  const rValue = ParseInt(hex.substring(0, 2), 16);
  const gValue = ParseInt(hex.substring(2, 4), 16);
  const bValue = ParseInt(hex.substring(4), 16);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
}



//ทดสอบการทำงานปุ่ม Day
And('Click the day button', () => {
  cy.get('.first').click();
})

//เช็คสีของปุ่ม Day
Then('Successfully entered the day button', () => {
  // cy.get('.first').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('4bdd33')})
  cy.get('.first').should('have.css', 'background-color', hexToRgb('3579f6'))
})

//ทดสอบการทำงานปุ่ม Month
And('Click the month button', () => {
  cy.get('.multi-button > :nth-child(2)').click();
})

//เช็คสีของปุ่ม Month
Then('Successfully entered the month button', () => {
  cy.get('.multi-button > :nth-child(2)').should('eq', 'reg(#3579f6)')
})

//ทดสอบการทำงานปุ่ม Year
And('Click the year button', () => {
  cy.get('.third').click();
})

//เช็คสีของปุ่ม Year
Then('Successfully entered the year button', () => {
  cy.get('.third').should('eq', '#3579f6')
})