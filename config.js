//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a17ffcc8c1071a46ace85.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "50955476339";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 1;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlxUVp3MHJ0RTRsWWFacUJIbVNzcEU1TWFBMHFPRjM0QlRZTnJQL0wyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5BYzUvd1RjTEsybVg5YytYTGNMNjBVQzBqbWU2MHlwOEZ0Q1BQUURnMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSWJNV3crSFloZGovNWVTOGlqUE1BUmE3U3hYQmdkaFBJOGNWVWRmVEZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRVBWZFFMOGpWaUVlSUpuMWZxQlBieS9saFJyMzBBaXczdDFOUXFHY2tjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CK3c0ZUphdDN6RzVDcldVQ1BDL1JsSDF0ZUpReWdQcnRLaVB6dTZWa2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY3a2IvRVh1bThCV2MyZGtBSWlwMVE3aXFWbEh3dkRvY3E5Z254Mm5wSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxRV0tiRXlDeHA4RUYxTWs2ZlFEN0l3K2NrWGVTVkJmTFdiaFdCUHFudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFhrbXlkaVE4cm9BejBlZmRQc3p1ZlY3VERaWTRWQVgrUHU3emhrR2d4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ3SjhjdldtRmxXSDVvWGtXb28vUXU2K3R1SERuVXRiNzllZWpEalRQNGtJL1BRTmVFYzVtdnZMcFJlQXB6QlZ6NzZpT2ppdVU3QjJxMzhNbVQ1NURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJacm9hZitYMldHUnVCZmpMWVdKN2VnKzhPK2FLMXY2NUhKZzB3U25JeERzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLM2NfV0tJV1M1ZVgwaFZ0eFZqNUpBIiwicGhvbmVJZCI6IjhkM2FhN2ZmLWU5ZjgtNDQ5OS1hNDZlLTMzYjRlNGRjMDBlOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlL3hrcU9IL0tMUVNFb1doQWlVcmNxc21YQzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVJWUEg3akV0SW1za0YxQmNESE5sZ2dLMVBZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpUVjRUV0tRIiwibWUiOnsiaWQiOiI1MDk1NTQ3NjMzOToxMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTdFOWQ0RkVKUEx2clVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSnkxNVRUdWxBUjZ2azJURmlsODM5bUdBckd6SHcvakR0ZXFOaVBhSzhRZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM1NpU2p1TU1uUzQyRXFzVk5IZWVldUhoemg2QmJBRUZNL2h5clF0dEtoakRuWjF3azNabnRBVEhjMWFrbmthODJwYkRhdURRajdPZUIxd1djNnRPQXc9PSIsImRldmljZVNpZ25hdHVyZSI6ImIwUXIzTWxjVDRLU2NuY3o3Lzg4RXpVUXQ3aDQ1eFB3UUJBQ0lEaTJZYXg4UjlrNDVTWERjbVV4WVFvNUg0UXVaVDlFZkw5NTl1Rko2bW4wRHUrbkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NTU0NzYzMzk6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2N0ZVUwN3BRRWVyNU5reFlwZk4vWmhnS3hzeDhQNHc3WHFqWWoyaXZFSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc4NzIzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNQ3MifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "ᬊ᭄𝑮۝𝒅 𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  packname: process.env.PACK_NAME || "ᬊ᭄𝑮۝𝒅 𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  botname: process.env.BOT_NAME || "ᬊ᭄𝑮۝𝒅 𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  ownername: process.env.OWNER_NAME || "ᬊ᭄𝑮۝𝒅 𝖋𝖑𝖊𝖆𝖚𝖝 𝑺۝𝖚𝖐𝖚𝖓𝖆",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
