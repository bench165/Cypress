Feature: dashboard
    Feature dashboard displays electricity consumption data as a data card, day, month, year, and electricity consumption graph.

Background:
    Given Open the IoT Connect web browser
    When Provide valid "ProjectIOT" and "IOT@1234"
    And Click on submit button
    

# Scenario: Testing access to the Dashboard screen
#     Given Click the IoT Connect menu bar
#     Then Successfully entered the Dashboard screen

# Scenario: Dashboard screen display
#     Given Click the IoT Connect menu bar
#     Then Successfully Dashboard screen display

Scenario: Test the day button
    Given Click the IoT Connect menu bar
    And Click the day button
    Then Successfully entered the day button

# Scenario: Test the month button
#     Given Click the IoT Connect menu bar
#     And Click the month button
#     Then Successfully entered the month button

# Scenario: Test the year button
#     Given Click the IoT Connect menu bar
#     And Click the year button
#     Then Successfully entered the year button



# 1. `cy.visit()`: ใช้เพื่อเข้าชมหน้าเว็บที่คุณต้องการทดสอบ.

# 2. `cy.get()`: ใช้เพื่อเลือก HTML elements บนหน้าเว็บเพื่อทดสอบ.

# 3. `cy.click()`: ใช้เพื่อคลิกที่ elements ที่ถูกเลือก.

# 4. `cy.type()`: ใช้เพื่อป้อนข้อความลงใน elements เช่น input fields.

# 5. `cy.contains()`: ใช้เพื่อค้นหา elements ที่มีข้อความหรือเนื้อหาที่ระบุ.

# 6. `cy.should()`: ใช้เพื่อทำการตรวจสอบเงื่อนไขต่าง ๆ บน elements เช่นการตรวจสอบข้อความ, คลาส, หรือคุณสมบัติอื่น ๆ.

# 7. `cy.intercept()`: ใช้เพื่อสร้างการจำลองการเรียก API และควบคุมการตอบสนองของ API เพื่อทดสอบการประสิทธิภาพของแอปพลิเคชัน.

# 8. `cy.route()`: คำสั่งที่เก่าและถูกแทนที่ด้วย `cy.intercept()` ใน Cypress 6 ขึ้นไป.

# 9. `cy.exec()`: ใช้สำหรับการรันคำสั่งเป็นคำสั่งใน shell (Command Line) และจัดการกับกระบวนการภายนอก.

# 10. `cy.scrollTo()`: ใช้เพื่อเลื่อนหน้าเว็บไปยังตำแหน่งที่ระบุ.

# 11. `cy.wait()`: ใช้สำหรับการรอคอยเพื่อรอให้เหตุการณ์หรือเงื่อนไขเกิดขึ้น.

# 12. `cy.its()`: ใช้สำหรับการเข้าถึงคุณสมบัติของ elements และทำการตรวจสอบ.

# 13. `cy.invoke()`: ใช้สำหรับการเรียกใช้ฟังก์ชันหรือเมทอดบน elements และทำการตรวจสอบ.

# 14. `cy.fixture()`: ใช้สำหรับการโหลดข้อมูลจาก fixture files เพื่อใช้ในการทดสอบ.

# 15. `cy.route2()`: ใช้สำหรับการจำลองการเรียก API ใน Cypress 7 ขึ้นไป.