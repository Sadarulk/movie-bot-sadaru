const { cmd, commands } = require('../command')
const config = require('../config')
const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('@whiskeysockets/baileys')


cmd({
    pattern: "id",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        reply(`Eka parak kiwahama ahapm pko.ubta oka hdnna be 🖕`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
