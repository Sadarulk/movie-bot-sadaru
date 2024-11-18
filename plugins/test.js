const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
    pattern: "mathee",
    desc: "test",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        // Send the first message and store the response
        const response = await conn.sendMessage(from, { text: 'සුරංගනාවියක්' });

        // Function to create a delay
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // Wait for 5 seconds (5000 ms)
        await delay(5000);

        // Send the second message, which edits the previous one
        const next = await conn.sendMessage(from, {
            text: 'හැබැයි බඩුවක්',
            edit: response.key,
        });

        await delay(5000);

        await conn.sendMessage(from, { delete: next.key })

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

