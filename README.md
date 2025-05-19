# CRM Admin Dashboard

An enterprise-grade Customer Relationship Management (CRM) system built with Angular, Node.js (Express), and PostgreSQL.

This admin dashboard includes:
- Modular components
- AG Grid reporting
- Role-based access for Customers, Support, Developers, and Admins

---

## 🌐 Tech Stack

- **Frontend**: Angular 16+, Angular Material, AG Grid
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Auth**: JWT-based Authentication

---

## ✨ Features

- ✅ Full modularized admin panel for managing:
  - Customers
  - Tickets
  - BRDs
  - Invoices & Payments
  - Reports

- 🔐 **Role-Based Access Control**:
  - **Admin**: Full access
  - **Support/Developer**: Assigned BRDs/Tickets
  - **Customer**: Company-specific access

- 📊 Reports Implemented:
  - New Business Report
  - Payment Due Report

---

## 📁 Folder Structure
crm-dashboard/
├── crm-frontend/
│ └── app/
│ └── admin-dashboard/
│ └── pages/
│ ├── reports/
│ ├── new-business/
│ └── payment-due/
│ └── shared/tab-state.service.ts
├── crm-backend/
│ ├── routes/
│ │ ├── reports.js
│ │ └── customers.js
│ ├── index.js
│ └── CRM_db.sql


---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/Gaurav-0805/crm-dashboard.git
cd crm-dashboard

2. **Backend Setup**

cd crm-backend
npm install
# Create a .env file with the following variables:
PORT=3000
DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret
node index.js

3. **Frontend Setup**
cd crm-frontend
npm install
ng serve


