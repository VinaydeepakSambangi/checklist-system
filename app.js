const express = require('express');
const path = require('path');
const checklistRouter = require('./routes/checklist');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/checklist', checklistRouter);

// Default Route
app.get('/', (req, res) => {
  res.redirect('/checklist');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
