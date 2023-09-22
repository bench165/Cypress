import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

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

// คลิกเมนู History Power Monitor
And('Click the History Power Moniter menu bar', () => {
  cy.wait(4000);
  cy.get(':nth-child(4) > .ttt-menu-bg').click();
  cy.get('.menu-open > .nav > :nth-child(2) > .nav-link').click();
});

// ตรวจสอบว่าหัวข้อเรื่องตรงไหม
Then('Successfully entered the history screen', () => {
  cy.get('h1').contains('History Power Monitor');
});

// ไม่กรอกชื่อมอนิเตอร์
And('Not entering the monitor name', () => {
  cy.wait(4000)
  cy.get('.filter > :nth-child(1)').type(' ');
})

// ระบบไม่แสดงชื่อมอนิเตอร์
Then('The system does not display the monitor name in the text box', () => {
  cy.get('.filter > :nth-child(1)').should('be.visible', ' ');
});

// กรอกชื่อมอนิเตอร์ 'DB-1'
And('Enter the monitor name {string}', (monitorName) => {
  cy.get('.filter > :nth-child(1)').type(monitorName);
});

// ระบบแสดงชื่อมอนิเตอร์ 'DB-1' ในกล่องข้อความ
Then('The system will display {string} as entered in the monitor name text box', (monitorName) => {
    cy.get('.filter > :nth-child(1)').should('be.visible', monitorName);
    cy.get('.filter > :nth-child(1)').clear();
});

// ไม่กรอกไอดีมอนิเตอร์
And('Not entering the monitor ID', () => {
  cy.get('.filter > :nth-child(2)').type(' ');
});

// ระบบไม่แสดงไอดีมอนิเตอร์
Then('The system does not display the monitor ID in the text box', () => {
  cy.get('.filter > :nth-child(2)').should('be.visible', ' ');
});

// กรอกไอดีมอนิเตอร์ '283210'
And('Enter the monitor ID {string}', (monitorID) => {
  cy.get('.filter > :nth-child(2)').type(monitorID);
});

// ระบบแสดงไอดีมอนิเตอร์ '283210'
Then('The system will display {string} as entered in the monitor ID text box', (monitorID) => {
    cy.get('.filter > :nth-child(2)').should('be.visible', monitorID);
    cy.get('.filter > :nth-child(2)').clear();
});

// คลิกเพื่อเปิดปฎิทิน
And("Click the Date picker button", () => {
  cy.wait(4000);
  cy.get('.date-picker').click();
});

// เปิดปฎิทินสำเร็จ
Then("The system displays the current calendar correctly", () => {
  cy.get('.react-datepicker__month-container').should('be.visible');
});

// เลือกวันที่ 11/08/2023
And('Select date {string}', (date) => {
  cy.get('.date-picker').type(date).click();
});

// ระบแสดงวันที่ 11/08/2023 ได้ถูกต้อง
Then('The system displays the date {string} correctly', (date) => {
  cy.get('.date-picker').should('be.visible', date);
  cy.get('.date-picker').clear();
});

// คลิกปุ่ม Search
And('Click the Search button', () => {
  cy.get('.filter > .btn-primary').click();
});

// ระบบแสดงข้อมูลทั้งหมด
Then('The system displays the data of all monsters correctly at the present time', () => {
  cy.get('.table-responsive').should('be.visible')
})

// ระบบแสดงข้อมูลตามที่เลือกได้ถูกต้อง
Then('The system correctly displays the name Monitor {string}, the monitor ID {string}, and the date {string}, and the information is accurate', (monitorName, monitorID, date) => {
  cy.wait(4000)
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(2)').should('be.visible', monitorName)
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(3)').should('be.visible', monitorID)
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(10)').should('be.visible', date)
  cy.get('.btn-outline-dark').click();
})

// ระบบไม่แสดงข้อมูล
Then('The system does not display any information', () => {
  cy.wait(4000)
  cy.wrap('').should('be.empty'); // ต้องแก้ไข
  cy.get('.btn-outline-dark').click();
})

// ระบบแสดงข้อมูลตามชื่อและไอดีที่กรอกได้ถูกต้อง
Then('The system correctly displays the name Monitor {string}, the monitor ID {string}, and the information is accurate', (monitorName, monitorID) => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(2)').should('be.visible', monitorName)
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(3)').should('be.visible', monitorID)
  cy.get('.btn-outline-dark').click();
})

// ระบบแสดงข้อมูลตามชื่อที่กรอกได้ถูกต้อง
Then('The system correctly displays the name Monitor {string} and the information is accurate', (monitorName) => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(2)').should('be.visible', monitorName)
  cy.get('.btn-outline-dark').click();
})

// ระบบแสดงข้อมูลตามวันที่กรอกได้ถูกต้อง
Then('The system correctly displays the date {string}, and the information is accurate', (date) => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(10)').should('be.visible', date)
  cy.get('.btn-outline-dark').click();
})

// ระบบแสดงข้อมูลตามไอดีที่กรอกได้ถูกต้อง
Then('The system correctly displays the Monitor ID {string} and the information is accurate', (monitorID) => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(3)').should('be.visible', monitorID)
  cy.get('.btn-outline-dark').click();
})

// คลิกดาวน์โหลดไฟล์ Excel
And("Click the Export CSV button", () => {
  cy.wait(5000);
  cy.get(".btn-success").click();
});

// ระบุไฟล์ที่ดาวน์โหลด
Then("A .csv file appears", () => {
  cy.readFile("cypress/downloads/monitor_data.csv").should(
    "contain",
    "Monitor Name"
  );
});

// คลิกตัวเลือกหลายรายการ
And('Select {string} from multiple options', (select) => {
  cy.wait(4000);
  cy.get('.form-control').select(0).should('have.value', select);
});

// แสดงจำนวนข้อมูลได้ถูกต้อง
Then('Displaying {string} items correctly', (select) => {
  cy.get('.col-5 > p').should('text', 'Showing 1 to ' + select + ' of 96275 entries');
});

// คลิกปุ่มก่อนหน้า
And('Click the previous button', () => {
  cy.wait(4000);
  cy.get(':nth-child(8) > .btn').click();
  cy.get('.paginate > :nth-child(1) > .btn').click();
});

Then('Clicked the previous button successfully', () => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(1)').should('be.vaule', '1');
});