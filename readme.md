# Try cypress   
Only Test Apps You Control (shouldn’t test applications you don’t control)  
Cypress is to be a tool you use every day to build and test your own applications  
Cypress is not a general purpose web automation tool.  
It is poorly suited for scripting live, production websites not under your control.
- anti-pattern เวลาใช้ให้ start server กับ cypress แยกกัน
- cypress ถูกสร้างมาเพื่อเป็น tool for your daily local development (test and develop at the same time)
- cypress สามารถ stub network ได้
- cypress ใช้สำหรับ test app ของเราเองที่เราสามารถควบคุมได้
- ถ้าจะ test flow อย่า test หน้าจอ login 
( Do not use your UI to login before each test.) 
- ใช้ cy.request(), cy.task() กับ cy.exec() ในการจัดการ 3rd party กับข้อมูล,api ที่ต้องเตรียมก่อน test ex. authen
- command cy.* เป็น asynchronous (promise based) chain function ที่จะ exec เมื่อจบ function
- cypress ออกแบบมาโดยยึดหลัก create deterministic, repeatable, consistent tests that are flake free
- แต่ command cy.* ไม่ได้เป็น promise 100% ไม่ควร .race หรือใส่ .catch เพราะ cypress มองเป็น serial (enqueue all commands onto a global singleton)

ดูเพิ่มเติม
https://docs.cypress.io/guides/overview/why-cypress.html