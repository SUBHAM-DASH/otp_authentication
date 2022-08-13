require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const sId = "ACc6d72d0b17c829892e508f281e1318a6";
const authId = "60c3dc1c4b80dc8e304a08027a0fef2e";
const phoneNumber = "+14194844328";

const twilio = require('twilio')(sId,authId)

twilio.messages.create({
  from : `${phoneNumber}`,
  to : "+91  7978904202",
  body : "This is finally done"
})
.then((res) =>{
  console.log("message sent");
})
.catch((error) =>{
  console.log(error.messsage);
});


app.listen(port, () => {
  console.log(`server running in ${port}`);
});
