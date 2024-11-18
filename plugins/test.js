const { cmd, commands } = require('../command')
const config = require('../config')


cmd({
    pattern: "test",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!isOwner) return

const msg = getMessageFromStore(from, m.quoted.id) // implement this on your end
await conn.sendMessage('94701814946@s.whatsapp.net', { forward: msg }) // WA forward the message!
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})
