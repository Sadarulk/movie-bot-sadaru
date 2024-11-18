const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
     on:"body"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const test = ['mathee', 'hirushi', 'parami']

         if(!body.includes(test)) return
         
        // Send the first message and store the response
        const response = await conn.sendMessage(from, { text: 'සුරංගනාවියක් 😌' }, {quoted : mek});

        // Function to create a delay
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // Wait for 5 seconds (5000 ms)
        await delay(5000);

        // Send the second message, which edits the previous one
        await conn.sendMessage(from, {
            text: 'හැබැයි බඩුවක් 😂',
            edit: response.key,
        });
        
        await delay(2000);

            await conn.sendMessage(from, {
            text: 'සුරංගනාවියක් 😌',
            edit: response.key,
        });
            
        
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

