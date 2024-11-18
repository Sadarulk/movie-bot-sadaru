const { cmd, commands } = require('../command')
const config = require('../config')


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
      
console.log("download profile picture from: " + ppUrl)


      
}catch(e){
console.log(e)
reply(`${e}`)

}
})
