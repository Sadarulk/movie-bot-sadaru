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

        if(!isOwner) return

const msg = getMessageFromStore('120363318515104141@g.us', '3EB0DDA73A39D1325BCEE1') // implement this on your end
await conn.sendMessage('94701814946@s.whatsapp.net', { forward: msg }) // WA forward the message!
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
