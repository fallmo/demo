const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  // res.send(`Welcome to app!\nInstance '${process.env.HOSTNAME}'`);
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Accel Technologies</title>
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            background-image: url("https://heritage.africa/bg6.jpg");
            background-size: cover;
            width: 100vw;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box {
            width: 700px;
            height: 200px;
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 25px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
          }
          p {
            font-size: 25px;
            color: white;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
          }
          p.alt {
            font-size: 20px;
            opacity: 0.6;
          }
    
          .green {
            color: lime;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <p>Welcome To the Heritage Project</p>
          <p class="alt">Application Status: <b class="green">UP</b></p>
          <p class="alt">Instance ID: <b style="color: white !important; opacity: 1 !important">${process.env.HOSTNAME}</b></p>
        </div>
      </body>
    </html>
    `
  );
});
app.get("/simulate-crash", (req, res) => {
  res.send("Simulating Server Crash!");
  console.log(`Oops Error. something went wrong! Crashing...`);
  process.exit(1);
});

app.get("/version", (req, res) => {
  res.send("App running version 1.0");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Application running on 0.0.0.0:${PORT}`));
