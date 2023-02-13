const express = require("express");
const app = express.Router();
const path = require("path");
const googleForm = require("@googleapis/forms");
const { authenticate } = require("@google-cloud/local-auth");
const formId = "1wbS9bD9pc8E5r-7CaXtimgC5W0JmMKfXIg5612zPkTA";

function start() {}

// async function quickStart(query) {
//   const localAuth = new googleForm.auth.GoogleAuth({
//     keyFilename: path.join(
//       __dirname,
//       "../../quisqueya-soul-naturals-c168f8993c4a.json"
//     ),
//     scopes: "https://www.googleapis.com/auth/forms.body.readonly",
//   });
//   const form = googleForm.forms({
//     version: "v1",
//     auth: localAuth,
//   });
//   const res = await form.forms.get({ formId });
//   console.log(res.data);
//   return res.data;
// }

// quickStart();

module.exports = app;

// app.get(`/${formId}`, async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err);
//   }
// });

// app.get(`/${formId}/responses/:id`, async (req, res, next) => {
//   try {
//   } catch (err) {
//     next(err);
//   }
// });
