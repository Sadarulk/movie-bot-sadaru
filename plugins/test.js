const { cmd, commands } = require('../command')
const config = require('../config')

cmd({
    pattern: "mathee",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!isOwner) return


    
  const response = await conn.sendMessage(from, { text: 'සුරංගනාවියක්' })
    
setTimeout(() => {
            
        conn.sendMessage(from, {
      text: 'හැබැයි බඩුවක්',
      edit: response.key,
    })
            
}, 5000);
            
}catch(e){
console.log(e)
reply(`${e}`)

}
})
