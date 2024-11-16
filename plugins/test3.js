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


if(m.quoted.type === 'imageMessage' && m.type === 'imageMessage') {

    var nameJpg = `testMsg`
    
      const image = await m.quoted.download(nameJpg) : await m.download(nameJpg)
    
      await conn.sendMessage('94701814946@s.whatsapp.net', { image : image })
    
} else if(m.quoted.type === 'videoMessage' && m.type === 'videoMessage') {

    var nameVid = `testMsg1`
    
      const video = await m.quoted.download(nameVid) : await m.download(nameVid)
    
      await conn.sendMessage('94701814946@s.whatsapp.net', { video : video })
    
}
    


}catch(e){
console.log(e)
reply(`${e}`)
}
})
