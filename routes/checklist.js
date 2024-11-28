const express = require('express');
const fetchData = require('../utils/fetchData');
const evaluateChecklist = require('../utils/checklistEvaluator');
const checklistRules = require('../config/checklistRules.json');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const apiUrl = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';
    const data = await fetchData(apiUrl);
    const results = evaluateChecklist(data, checklistRules);

    res.render('dashboard', { data, results });
  } catch (error) {
    res.status(500).send('Error fetching or processing data: ' + error.message);
  }
});

module.exports = router;
