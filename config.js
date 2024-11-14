const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Hj5h1aDC#hzdB5vtEIP48kfUkkKUsNiEgqUHJfmR9OUTTa4mBzfM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true",
MV_SEND_JID: process.env.MV_SEND_JID || "120363292156762185@g.us",
MODE: process.env.MODE || "public",
};
