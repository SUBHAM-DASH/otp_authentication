const express = require("express");
const app = express();
const port = 3000;
const client = require("twilio")(
  "ACc6d72d0b17c829892e508f281e1318a6",
  "60c3dc1c4b80dc8e304a08027a0fef2e"
);
// 'MGea578267d20b43c9ed3cd2a3a11e8f07'
app.get("/login", async(req, res) => {
  client
  .verify
  .services('MGea578267d20b43c9ed3cd2a3a11e8f07')
  .verifications
  .create({
    to: 7978904202,
    channel: "sms"
  })
  .then((data)=>{
    res.status(200).send("successful")
  });
});

app.listen(port, () => {
  console.log(`server running in ${port}`);
});
