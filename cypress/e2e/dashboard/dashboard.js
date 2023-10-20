import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

// import rgbHex from 'rgb-hex';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// เปิดเว็บเบราว์เซอร์
Given('Open the IoT Connect web browser', () => {
  cy.viewport(1920, 1080);
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
  cy.get(':nth-child(1) > :nth-child(1) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get(':nth-child(2) > :nth-child(1) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get(':nth-child(3) > :nth-child(1) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get(':nth-child(4) > :nth-child(1) > .card-monitor > .col-span-3 > .monitor_card > .card-value').should('be.visible');
  cy.get('.day-button').should('be.visible');
  cy.get('.month-button').should('be.visible');
  cy.get('.year-button').should('be.visible');
  cy.get('.p-inputtext').should('be.visible');
  cy.get('.p-multiselect-label').should('be.visible');
  cy.get('.tab-content-chart > div > canvas').should('be.visible');
  cy.get('.gap-3 > :nth-child(1) > .grid > .col-span-2 > div > canvas').should('be.visible');
  cy.get('.gap-3 > :nth-child(2) > .grid > .col-span-2 > div > canvas').should('be.visible');
  cy.get('.grid-cols-2.gap-5 > :nth-child(1) > .grid > .col-span-2 > div > canvas').should('be.visible');
  cy.get('.grid-cols-2.gap-5 > :nth-child(2) > .grid > .col-span-2 > div > canvas').should('be.visible');
})

//ทดสอบการทำงานปุ่ม Day
And('Click the day button', () => {
  cy.get('.day-button').click();
})

//เช็คสีของปุ่ม Day
Then('Successfully entered the day button', () => {
  // cy.get('.day-button').invoke('css', 'background-color').then((bgcolor) => {expect(rgbHex(bgcolor)).to.eq('4bdd33')})
  // cy.get('.day-button').should('have.css', 'background-color', hexToRgb('3579f6'))
  cy.get('.day-button').should('have.css', 'background-color').and('eq', 'rgb(53, 121, 246)');
})

//ทดสอบการทำงานปุ่ม Month
And('Click the month button', () => {
  cy.get('.month-button').click();
})

//เช็คสีของปุ่ม Month
Then('Successfully entered the month button', () => {
  cy.get('.month-button').should('have.css', 'background-color').and('eq', 'rgb(53, 121, 246)');
})

//ทดสอบการทำงานปุ่ม Year
And('Click the year button', () => {
  cy.get('.year-button').click();
})

//เช็คสีของปุ่ม Year
Then('Successfully entered the year button', () => {
  cy.get('.year-button').should('have.css', 'background-color').and('eq', 'rgb(53, 121, 246)');
})

//เช็คปฎิทิน
And('Click the date picker', () =>{
  cy.get('.p-inputtext').click();
})

//เช็คว่าตรงวันที่ปัจุบันหรือไม่
Then('Successfully entered the date picker', () => {
  const currentDate = new Date();
  // นำเดือนปัจจุบันมาแปลงเป็นชื่อของเดือน
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = months[currentDate.getMonth()];
  // สร้างสตริง "DD Month YYYY"
  const formattedDate = `${currentDate.getDate()} ${currentMonth} ${currentDate.getFullYear()}`;
  cy.get('.p-inputtext.p-component').should('be.visible', formattedDate);
})

//เช็ค drop-down
Given('Click the drop-down', () => {
  cy.get('.p-multiselect-trigger').click();
})

//ตรวจสอบรายการ monitor
Then('Successfully entered the drop-down', () => {
  // cy.get('.p-multiselect-items > :nth-child(1)').should('be.visible');
  // cy.get('.p-multiselect-items > :nth-child(2)').should('be.visible');
  // cy.get('.p-multiselect-items > :nth-child(3)').should('be.visible');
  // cy.get('.p-multiselect-items > :nth-child(4)').should('be.visible');
  // cy.get('.p-multiselect-items > :nth-child(5)').should('be.visible');
  // cy.get('.p-multiselect-items > :nth-child(6)').should('be.visible');
  // เช็คค่า value ของตัวเลือก
  // cy.get('.p-multiselect-items > :nth-child(1)').should('have.text', 'MDB-PANA'); 
  // cy.get('.p-multiselect-items > :nth-child(2)').should('have.text', 'DB-2'); 
  // cy.get('.p-multiselect-items > :nth-child(3)').should('have.text', 'DB-1'); 
  // cy.get('.p-multiselect-items > :nth-child(4)').should('have.text', 'MDB-1'); 
  // cy.get('.p-multiselect-items > :nth-child(5)').should('have.text', 'DB-3'); 
  // cy.get('.p-multiselect-items > :nth-child(6)').should('have.text', 'DB-4');
  
  cy.get('.p-multiselect-label').contains('6 items selected');
})

//เช็คปุ่ม clear
And('Click the clear button', () => {

  cy.get('.clear-button').click();
})

//ตรวจผลปุ่ม clear
Then('Successfully the clear button in drop-down', () => {
  cy.get('.p-multiselect-label').contains('Select Monitor');
  // cy.get('.tab-content-chart > div > canvas').should('have.value', '0');
})

// คลิกปุ่มเลือกในดรอปดาวน์
And('Click the all button', () => {
  cy.get('.all-button').click();
})

// ผลการกดปุ่มเลือกทั้งหมด
Then('Successfully the all button in drop-down', () => {
  cy.get('.p-multiselect-label').contains('6 items selected');
})

// ตรวจสอบรายการในดรอดาวน์
Then('Successfully list monitor', () => {
  cy.get('.p-multiselect-items > :nth-child(1) > span').should('have.text', 'DB-5');
  cy.get('.p-multiselect-items > :nth-child(2) > span').should('have.text', 'DB-2');
  cy.get('.p-multiselect-items > :nth-child(3) > span').should('have.text', 'DB-1');
  cy.get('.p-multiselect-items > :nth-child(4) > span').should('have.text', 'MDB-1');
  cy.get('.p-multiselect-items > :nth-child(5) > span').should('have.text', 'DB-3');
  cy.get('.p-multiselect-items > :nth-child(6) > span').should('have.text', 'DB-4');
  cy.get('.p-multiselect-items').should('be.visible');
  cy.get('.p-multiselect-label').contains('6 items selected');
})

Then('Successfully the minimum number of monitors', () =>{
  cy.get('.p-multiselect-label').contains('Select Monitor');
  cy.get('.power-monitor-list-container > :nth-child(1)').should('be.visible');
  cy.get('.power-monitor-list-container > :nth-child(2)').should('not.be.visible');
  cy.get('.power-monitor-list-container > :nth-child(3)').should('not.be.visible');
  cy.get('.power-monitor-list-container > :nth-child(4)').should('not.be.visible');
  cy.get('.power-monitor-list-container > :nth-child(5)').should('not.be.visible');
  cy.get('.power-monitor-list-container > :nth-child(6)').should('not.be.visible');
})