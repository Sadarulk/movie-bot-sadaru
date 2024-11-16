const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "test",
    desc: "test",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{



if(!m.quoted) return reply('Reply to something') 
    
      await message.forward(from, message.reply_message.message);
    


}catch(e){
console.log(e)
reply(`${e}`)
}
})