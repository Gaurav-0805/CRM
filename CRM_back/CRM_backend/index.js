const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 🔐 Auth middleware
const { authenticateJWT } = require('./middlewares/auth');

// 📦 Routes
const reportsRoutes = require('./reports');
const authRoutes = require('./auth');
const customersRouter = require('./routes/customers');
const ticketRoutes = require('./routes/tickets');
const brdRoutes = require('./routes/brd'); // ✅ This handles BRD logic
const invoiceRoutes = require('./routes/invoices');
const paymentsRoutes = require('./routes/payments');
const logActivityRoutes = require('./routes/activitylogs');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productMasterRoutes = require('./routes/productMaster');

// 🌐 API Routing
app.use('/api/auth', authRoutes);
app.use('/reports', reportsRoutes);
app.use('/api/companies', authenticateJWT, customersRouter);
app.use('/api/tickets', authenticateJWT, ticketRoutes);
app.use('/api/brds', brdRoutes);      // ✅ Legacy or plural route (you can keep it if needed)
app.use('/api/brd', brdRoutes);       // ✅ Add this to fix the frontend PATCH issue
app.use('/api/invoices', invoiceRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/activity', logActivityRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api', productMasterRoutes);

// 📂 Serve uploaded folders
app.use('/uploads/screenshots', express.static(path.join(__dirname, 'uploads/screenshots')));
app.use('/uploads/brd', express.static(path.join(__dirname, 'uploads/brd')));

// ❌ 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
