const express = require('express');
const router = express.Router();
const db = require('./db');

// 📊 1. New Business Report – Recent customers added in the last 30 days
router.get('/new-business', async (req, res) => {
  try {
    const query = `
      SELECT c.id, c.name, c.email, c.created_at, co.name AS company_name
      FROM customers c
      JOIN companies co ON c.company_id = co.id
      WHERE c.created_at >= NOW() - INTERVAL '30 days'
      ORDER BY c.created_at DESC
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('New Business Report Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// 💸 2. Payment Due Report – Shows payments with unpaid statuses
router.get('/payment-due', async (req, res) => {
  try {
    const query = `
      SELECT p.id, co.name AS company_name, p.amount_paid, p.payment_date, s.name AS status
      FROM payments p
      JOIN invoices i ON p.invoice_id = i.id
      JOIN companies co ON i.company_id = co.id
      JOIN status_master s ON i.status_id = s.id
      WHERE s.name IN ('Unpaid', 'Partially Paid', 'Overdue')
      ORDER BY p.payment_date ASC
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Payment Due Report Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// 🧾 3. Invoice Due Report – All invoices that are unpaid
router.get('/invoice-due', async (req, res) => {
  try {
    const query = `
      SELECT i.id, co.name AS company_name, i.amount, i.due_date, s.name AS status
      FROM invoices i
      JOIN status_master s ON i.status_id = s.id
      JOIN companies co ON i.company_id = co.id
      WHERE s.name = 'Unpaid'
      ORDER BY i.due_date ASC
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Invoice Due Report Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// 📚 4. Ledger Report – Invoicing vs Payment summary per company
router.get('/ledger', async (req, res) => {
  try {
    const query = `
      SELECT co.id, co.name AS company_name, 
             COALESCE(SUM(i.amount), 0) AS total_invoiced, 
             COALESCE(SUM(p.amount_paid), 0) AS total_paid,
             (COALESCE(SUM(i.amount), 0) - COALESCE(SUM(p.amount_paid), 0)) AS balance_due
      FROM companies co
      LEFT JOIN invoices i ON co.id = i.company_id
      LEFT JOIN payments p ON i.id = p.invoice_id
      GROUP BY co.id, co.name
      ORDER BY co.name
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Ledger Report Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
