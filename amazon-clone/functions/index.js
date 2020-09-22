const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTs5CAyXCzXLdvSlGoQIp0YOAEjCbxvwFOWUDEN8LBj6LNU9NmIJcsVfORqsawfWxN0M0Dr9swfh5yZjtYaOFii001L8mh1yB"
);

//API

//API config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response, next) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //ok -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);
