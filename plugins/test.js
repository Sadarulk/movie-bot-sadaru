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

       await conn.sendMessage(from, {text : `Hello test`}, {contextInfo: { forwardingScore: 999, isForwarded: true }})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
