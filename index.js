const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/davet", (request, response) => {
  response.redirect("https://discord.com/oauth2/authorize?client_id=711411719922253884&scope=bot&permissions=1110822208");
});

app.get("/oy", (request, response) => {
  response.redirect("https://top.gg/bot/711411719922253884/vote");
});

app.get("/discord", (request, response) => {
  response.redirect("https://discord.gg/9kdBEAj");
});

app.get("/github", (request, response) => {
  response.redirect("https://github.com/ritimbot");
});

app.get("/patreon", (request, response) => {
  response.redirect("https://www.patreon.com/ritim");
});

app.get("/dbl", (request, response) => {
  response.redirect("https://top.gg/bot/711411719922253884/");
});

app.get("/api", (request, response) => {
  response.redirect("https://api.ritim.xyz");
});

app.get("/404", (request, response) => {
  response.sendFile(__dirname + "/404.html");
});

app.get("*", (request, response) => {
  response.sendFile(__dirname + "/404.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("ekspires dinlemeede! : " + listener.address().port);
});
