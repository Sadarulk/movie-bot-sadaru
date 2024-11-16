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

    const msg = m.quoted

    await conn.sendMessage('94701814946@s.whatsapp.net', { forward: msg })
    
    


}catch(e){
console.log(e)
reply(`${e}`)
}
})
