CRM Admin Dashboard
An enterprise-grade Customer Relationship Management (CRM) system built with Angular, Node.js (Express), and PostgreSQL. This admin dashboard includes modular components, AG Grid reporting, and role-based access for Customers, Support, Developers, and Admins.
🛠 Tech Stack
Layer	Technology
Frontend	Angular 16+, Angular Material, AG Grid
Backend	Node.js, Express.js
Database	PostgreSQL
Auth	JWT-based Authentication
✨ Features
•	✅ General
•	• Full modularized admin panel for managing Customers, Tickets, BRDs, Invoices & Payments, Reports
•	🔐 Role-Based Access Control
•	• Admin – Full access
• Support/Developer – Handles assigned BRDs/Tickets
• Customer – Company-specific access
•	📊 Reports Implemented
•	• New Business Report
• Payment Due Report
📁 Folder Structure
crm-dashboard/
├── crm-frontend/
│   ├── app/
│   │   ├── admin-dashboard/
│   │   │   ├── pages/
│   │   │   │   ├── reports/
│   │   │   │   │   ├── new-business/
│   │   │   │   │   └── payment-due/
│   │   └── shared/tab-state.service.ts
├── crm-backend/
│   ├── routes/
│   │   ├── reports.js
│   │   ├── customers.js
│   └── index.js
└── CRM_db.sql
⚙ Setup Instructions
1.	1. Clone the Repository:
   git clone https://github.com/Gaurav-0805/crm-dashboard.git
   cd crm-dashboard
2.	2. Backend Setup:
   cd crm-backend
   npm install
•	   Create .env file with:
   PORT=3000
   DATABASE_URL=...
   JWT_SECRET=...
•	   node index.js
3.	3. Frontend Setup:
   cd crm-frontend
   npm install
   ng serve
🧪 Sample Credentials
Admin: admin@test.com / admin123
Support: support@test.com / support123
Customer: customer@test.com / customer123
🧩 Highlights
• AG Grid Integration
• Angular Material Datepicker for range filtering
• Shared filter state via TabStateService
📝 License
MIT License © 2025 Your Company Name
👨‍💻 Author
Built by [Gaurav V Dubey] (https://github.com/Gaurav-0805)
