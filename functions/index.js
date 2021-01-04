const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')(
  'sk_test_51I5oHIFQSiZUYx2uoJnGXS5tUueUSlWSFe4DwAWOBKJe4lcS6RlotraTATS7HW0nRsuRVdhefxhoAqj8iDi1VdzW00cBro0dFk'
);
// api
// app config
const app = express();
// aip middleware
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment request received soon!!!', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: 'usd',
  });
  //   ok-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// example-end point
//http://localhost:5001/rebuild-f71a0/us-central1/api
