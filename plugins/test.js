const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
     on: "body"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!body === 'mathee') return
        // Send the first message and store the response
        const response = await conn.sendMessage(from, { text: 'සු' }, {quoted : mek});
        await conn.sendMessage(from, {
            text: 'සුර',
            edit: response.key,
        }, {quoted : mek});
        await conn.sendMessage(from, {
            text: 'සුරං',
            edit: response.key,
        }, {quoted : mek});
        await conn.sendMessage(from, {
            text: 'සුරංග',
            edit: response.key,
        }, {quoted : mek});
        await conn.sendMessage(from, {
            text: 'සුරංගනා',
            edit: response.key,
        }, {quoted : mek});
        await conn.sendMessage(from, {
            text: 'සුරංගනාවිය',
            edit: response.key,
        }, {quoted : mek});
        await conn.sendMessage(from, {
            text: 'සුරංගනාවියක් 😌',
            edit: response.key,
        }, {quoted : mek});

        // Function to create a delay
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // Wait for 5 seconds (5000 ms)
        await delay(5000);

        // Send the second message, which edits the previous one
        await conn.sendMessage(from, {
            text: 'හැබැයි බඩුවක් 😂',
            edit: response.key,
        }, {quoted : mek});
        
        await delay(2000);

            await conn.sendMessage(from, {
            text: 'සුරංගනාවියක් 😌',
            edit: response.key,
        }, {quoted : mek});
            
        
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

