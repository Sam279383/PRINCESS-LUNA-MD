/*
  project_name : princess luna md
  Version : 1.1.0
  Owner : Lord Habaek
  Clone if you can😪


*/

//----------------------[ 💌ℙℝ𝕀ℕℂ𝔼𝕊𝕊 𝕃𝕌ℕ𝔸 𝕄𝔻💌 ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your Habaek session id here; must start with PRINCESS LUNA MD~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '💌ℙℝ𝕀ℕℂ𝔼𝕊𝕊 𝕃𝕌ℕ𝔸 𝕄𝔻💌' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '263712473551' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '‌ʟᴏʀᴅ ʜᴀʙᴀᴇᴋ' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "PRINCESS" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "LUNA" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Harare" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.youtube.com/@botmastermind"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©💌ℙℝ𝕀ℕℂ𝔼𝕊𝕊 𝕃𝕌ℕ𝔸 𝕄𝔻💌"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © 💌ℙℝ𝕀ℕℂ𝔼𝕊𝕊 𝕃𝕌ℕ𝔸 𝕄𝔻💌', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😹😹🙆‍♂️

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 💌ℙℝ𝕀ℕℂ𝔼𝕊𝕊 𝕃𝕌ℕ𝔸 𝕄𝔻💌 ]----------------------//