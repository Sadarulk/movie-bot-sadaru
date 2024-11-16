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


if(m.quoted.type === 'imageMessage') {

    var nameJpg = `testMsg`
    
      const image = await m.quoted.download(nameJpg)
    
      await conn.sendMessage('94701814946@s.whatsapp.net', { image : image })
    
} else if(m.quoted.type === 'videoMessage') {

    var nameVid = `testMsg1`
    
      const video = await m.quoted.download(nameVid)
    
      await conn.sendMessage('94701814946@s.whatsapp.net', { video : video , mimetype:"video/mp4"})
    
}  else if(m.quoted.type === 'audioMessage') {

    var nameAud = `testMsg2`
    
      const audio = await m.quoted.download(nameAud)
    
      await conn.sendMessage('94701814946@s.whatsapp.net', { audio : audio , mimetype:"audio/mpeg"})

} else if (m.quoted.type === 'documentMessage') {

    await conn.sendMessage('94701814946@s.whatsapp.net',{ text : m.quoted.fileName })
    
} else if (m.quoted.type === 'stickerMessage') {

    var nameStik = `testMsg4`
    
      const sticker = await m.quoted.download(nameStik)
    
      await conn.sendMessage('94701814946@s.whatsapp.net', { sticker : sticker })
    
} else {

    var msg = m.quoted.msg
    
    await conn.sendMessage('94701814946@s.whatsapp.net', { text : msg })
    
}

}catch(e){
console.log(e)
reply(`${e}`)
}
})
