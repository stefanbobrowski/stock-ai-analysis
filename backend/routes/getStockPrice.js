const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');
const router = express.Router();

const bigquery = new BigQuery();

router.get('/api/stock-price', async (req, res) => {
  try {
    const query = `
      SELECT
        symbol,
        timestamp_utc,
        close
      FROM
        \`bigquery-public-data.market_data.us_stocks_intraday\`
      WHERE
        symbol = 'MSFT'
      ORDER BY
        timestamp_utc DESC
      LIMIT 1;
    `;

    const [rows] = await bigquery.query({ query });
    res.json(rows[0]); // return just the latest row
  } catch (err) {
    console.error('BigQuery error:', err);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

module.exports = router;
