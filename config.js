const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "32wQBC7B#HyshEG-YRnN6KZOSf3a_iuSanPbrk2uvBat_dtMceAA",
MV_SEND_JID: process.env.MV_SEND_JID || "120363355439809658@g.us",
MODE: process.env.MODE || "public",
AUTO_AI: process.env.AUTO_AI || "on", // on or off
AUTO_AI_JID: process.env.AUTO_AI_JID || "120363365489430422@g.us",
BLOCK_JID: process.env.BLOCK_JID || "120363365489430422@g.us",
};
