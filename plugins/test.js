const { cmd, commands } = require('../command')
const config = require('../config')

cmd({
    pattern: "del",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if(!isOwner) return

const response = await sock.sendMessage(from, { text: 'hello!' })
        
await sock.sendMessage(from, {
      text: '▄',
      edit: response.key,
    });
await sock.sendMessage(from, {
      text: '▄▅',
      edit: response.key,
    });        
await sock.sendMessage(from, {
      text: '▄▅▆',
      edit: response.key,
    });        
await sock.sendMessage(from, {
      text: '▄▅▆▇',
      edit: response.key,
    });        
await sock.sendMessage(from, {
      text: '▄▅▆▇█',
      edit: response.key,
    });        

}catch(e){
console.log(e)
reply(`${e}`)

}
})
