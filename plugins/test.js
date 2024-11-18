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
        const response = await conn.sendMessage(from, { text: 'සු' });
        await conn.sendMessage(from, {
            text: 'සුර',
            edit: response.key,
        });
        await conn.sendMessage(from, {
            text: 'සුරං',
            edit: response.key,
        });
        await conn.sendMessage(from, {
            text: 'සුරංග',
            edit: response.key,
        });
        await conn.sendMessage(from, {
            text: 'සුරංගනා',
            edit: response.key,
        });
        await conn.sendMessage(from, {
            text: 'සුරංගනාවිය',
            edit: response.key,
        });
        await conn.sendMessage(from, {
            text: 'සුරංගනාවියක්',
            edit: response.key,
        });

        // Function to create a delay
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        // Wait for 5 seconds (5000 ms)
        await delay(5000);

        // Send the second message, which edits the previous one
        const next = await conn.sendMessage(from, {
            text: 'හැබැයි බඩුවක්',
            edit: response.key,
        });

        await delay(2000);

        await conn.sendMessage(from, { delete: next.key })

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

