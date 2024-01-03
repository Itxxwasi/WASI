const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923135673658"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="wasi@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/SuhailMdPairingCode?v=1";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/Wasi";
global.gurl= process.env.GURL   || "https://chat.whatsapp.com/IeLtUn3KvIL18tjWSij9Mo";
global.website =process.env.GURL|| "https://chat.whatsapp.com/IeLtUn3KvIL18tjWSij9Mo" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://i.imgur.com/kV0IGnM.jpeg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923135673658";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923135673658";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©𝐖𝐀𝐒𝐈-𝐌𝐃 " ,// ```『 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐖𝐀𝐒𝐈 𝐓𝐄𝐂𝐇』```", //*『𝐒𝐔𝐁𝐂𝐑𝐈𝐁𝐄 𝐖𝐀𝐒𝐈 𝐓𝐄𝐂𝐇』*\n youtube.com/@wasitech1"),

 
  author: process.env.PACK_AUTHER || "𝑾𝑨𝑺𝑰",
  packname: process.env.PACK_NAME || "♥️👁️🙈💋 ",
  botname: process.env.BOT_NAME   || "Wasi ",
  ownername:process.env.OWNER_NAME|| "It'x wasi",


  sessionName:process.env.SESSION_ID|| "",
  userImages:process.env.USER_IMAGES|| "text",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "wasi",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
