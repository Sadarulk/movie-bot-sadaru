const { cmd, commands } = require('../command')
const config = require('../config')


cmd({
    pattern: "join",
    desc: "join groups",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let link = q
        
 const response = await conn.groupAcceptInvite(link)
      
console.log("joined to: " + response)
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})
