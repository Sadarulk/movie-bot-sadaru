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

     
const response = await conn.sendMessage(from, { text: 'hello!' })

await conn.sendMessage(from, { delete: response.key })
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
