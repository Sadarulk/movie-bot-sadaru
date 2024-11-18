const { cmd, commands } = require('../command')
const config = require('../config')
const fs = require('fs')


cmd({
    pattern: "getpp",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!isOwner) return


const ppUrl = await conn.profilePictureUrl(from)
      
await conn.sendMessage(from, {image: ppUrl },{ quoted: mek })
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})
