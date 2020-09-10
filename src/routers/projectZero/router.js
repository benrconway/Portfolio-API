const express = require('express');
const projectZeroData = require('../../../data/projectZero/projectZeroData');
const router = express.Router();

router.get('/categories', function (req, res) {
  res.send(projectZeroData.categories);
})

router.get('/base-data', function (req, res) {
  res.send(projectZeroData.baseData);
})

router.get('/about', function (req, res) {
  res.send('This information is the current data set for the Neighbourhood Map application in KnockoutJS');
})

module.exports = router;

