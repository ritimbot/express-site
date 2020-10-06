const e = require("express");
const web = e();

// INDEX
web.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// URL's
web.get("/davet", (req, res) => res.redirect("https://discord.com/oauth2/authorize?client_id=711411719922253884&scope=bot&permissions=1110822208"));
web.get("/oy", (req, res) => res.redirect("https://top.gg/bot/711411719922253884/vote"));
web.get("/youtube", (req, res) => res.redirect("https://www.youtube.com/channel/UCddBjStwXgfTOL2gvJ07_iA?"));
web.get("/discord", (req, res) => res.redirect("https://discord.gg/9kdBEAj"));
web.get("/github/:repo", (req, res) => res.redirect("https://github.com/ritimbot/"+req.params.repo));
web.get("/sdn", (req, res) => res.redirect("https://forum.shiftdelete.net/konular/discord-icin-muzik-botu-ritim-bot.698307/"));
web.get("/github", (req, res) => res.redirect("https://github.com/ritimbot/"));
web.get("/patreon", (req, res) => res.redirect("https://www.patreon.com/ritim"));
web.get("/dbl", (req, res) => res.redirect("https://top.gg/bot/711411719922253884/"));
web.get("/api", (req, res) => res.redirect("https://api.ritim.xyz"));
web.get("/twitter", (req, res) => res.redirect("https://twitter.com/ritimbot"))

// 404
web.get("/404", (req, res) => res.sendFile(__dirname + "/404.html"));
web.get("*", (req, res) => res.sendFile(__dirname + "/404.html"));

web.listen(process.env.PORT, () => console.log("ekspiress izlemede!"));
