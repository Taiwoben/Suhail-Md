const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349018001569";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349018001569,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_47_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSbmF5dTJWUy9KZWUwSGIvQzQ5a0VIZ1MvdFVHY09RaDlRV2crS3NTUlhBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYa2NmX0tsQVFwV1JNdnRVbmlYRG9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZkM2EyZjAyLTY3ODAtNDU4Zi1iNTc2LTViMzk3MTY5NGM5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICA1OSxcbiAgICAgIDEyNyxcbiAgICAgIDY4LFxuICAgICAgMTY2LFxuICAgICAgODQsXG4gICAgICAxNTcsXG4gICAgICA5LFxuICAgICAgMTk1LFxuICAgICAgMTI1LFxuICAgICAgMjE2LFxuICAgICAgMjEzLFxuICAgICAgNjksXG4gICAgICAxOTksXG4gICAgICAxODcsXG4gICAgICAxNjMsXG4gICAgICAxMzMsXG4gICAgICAxLFxuICAgICAgNjUsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxNTQsXG4gICAgICA0OSxcbiAgICAgIDIwMyxcbiAgICAgIDc1LFxuICAgICAgMTQ4LFxuICAgICAgNTcsXG4gICAgICAxNCxcbiAgICAgIDExNSxcbiAgICAgIDIzMSxcbiAgICAgIDE5NSxcbiAgICAgIDkwLFxuICAgICAgNzEsXG4gICAgICAxMDAsXG4gICAgICA4OCxcbiAgICAgIDIwMixcbiAgICAgIDM4LFxuICAgICAgNzIsXG4gICAgICAxOTksXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkZZQTVGTlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTgwMDE1Njk6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MTk3NDM2NjgzNDQ6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1B3bCtJREVOT2JvYlFHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIza29ZVmJpeTErK1MwdmpTOVh4Y3dSWmp1dHAwWVBiTmZsQjk0UVVoTUJNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhSbjFKN2xSOHVWMEJPOThLVXVJc1BHendOZHAyVTE1aVJUM1Y4SVlab1puRS91ZkJLMlp1TWpiaXVrZ2N3Q05Ya21seUUyV1VOQUZoN01XUXBNTEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5rZzFtb0tuT1VzZzR5czdpNkZUcFV2b3l3VVFKQU9EdUVhNUMyRnlQY3d3b1ZvVm51V0kxbzhUcWR2OTd6VHVUc0gralh2Wm9ReTRFZEVJdnlPM2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwMDE1Njk6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIwODg1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN4MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3gwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXZkMHI5M3k5bFZobzJUR0QvaDZ6UjVMZzBCMWpzOVUrdzlUMGFRK1lJYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDExMjE4NDY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
