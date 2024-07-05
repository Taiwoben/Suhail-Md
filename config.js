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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_58_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInQ0VmRLMU42b0ZKb2UwcGlsbTgzTjhCbldaVTBaUXEwWjd4Q0NZUWVSdXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRZTUNtbS1pVGsyeUFoRXhNMkFzblFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU1NjM3YjItYmRiNy00YzU3LWE3NTktMzNkYzYxMmZhZjVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTQyLFxuICAgICAgMTQsXG4gICAgICAxMTEsXG4gICAgICAxMzIsXG4gICAgICAyMzMsXG4gICAgICAxNzUsXG4gICAgICAxNDMsXG4gICAgICAxMTMsXG4gICAgICAyMDcsXG4gICAgICA5MSxcbiAgICAgIDIwOCxcbiAgICAgIDExOCxcbiAgICAgIDE0OCxcbiAgICAgIDE1NSxcbiAgICAgIDE0OCxcbiAgICAgIDIyNSxcbiAgICAgIDE3OSxcbiAgICAgIDcsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMjA4LFxuICAgICAgMTcxLFxuICAgICAgMjUwLFxuICAgICAgMjQ4LFxuICAgICAgMTgsXG4gICAgICAxMzksXG4gICAgICAyMzUsXG4gICAgICAyMjEsXG4gICAgICAyOCxcbiAgICAgIDgyLFxuICAgICAgNDMsXG4gICAgICA4OSxcbiAgICAgIDAsXG4gICAgICAxNzAsXG4gICAgICAxMDEsXG4gICAgICAxOTYsXG4gICAgICAxMjksXG4gICAgICAxOTksXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlJKU01GSllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTgwMDE1Njk6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MTk3NDM2NjgzNDQ6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1B3bCtJREVMaWpuN1FHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIza29ZVmJpeTErK1MwdmpTOVh4Y3dSWmp1dHAwWVBiTmZsQjk0UVVoTUJNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNScEtGVzQ3d3V0dXlLeERjVk0yMW4rbGVNSHE4QmY1VzJoRXpadU1SWXpDb2xUT3R0N2xKUVhQYkZUSGNxcy9xRWhjR2t5Y2tFTURUY3Q1dk4zd0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhhaXBMMWZhLzJlUTlPNWRjMXdPK3BwRWNONGZlRm5qR1dJQzVWYVBHSVNCK0J5T0tMZmUzbFArNHRpejlQZWxJVzg5K095Q0lTT3VQcEJMSklEcmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwMDE1Njk6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE3NzA4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN4MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3gwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXZkMHI5M3k5bFZobzJUR0QvaDZ6UjVMZzBCMWpzOVUrdzlUMGFRK1lJYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDExMjE4NDY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
