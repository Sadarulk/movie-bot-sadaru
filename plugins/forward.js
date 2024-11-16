const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "forward",
    alias: ["fd"],
    desc: "forward a msg",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    if(!q) return reply(`*_please give me a jid to forward this_*`)
    
if(m.quoted.type === 'imageMessage') {

    var nameJpg = `testMsg`
    
      const image = await m.quoted.download(nameJpg)
    
      await conn.sendMessage(q, { image : image })
    
} else if(m.quoted.type === 'videoMessage') {

    var nameVid = `testMsg1`
    
      const video = await m.quoted.download(nameVid)
    
      await conn.sendMessage(q, { video : video , mimetype:"video/mp4"})
    
}  else if(m.quoted.type === 'audioMessage') {

    var nameAud = `testMsg2`
    
      const audio = await m.quoted.download(nameAud)
    
      await conn.sendMessage(q, { audio : audio , mimetype:"audio/mpeg"})
    
} else if (m.quoted.type === 'stickerMessage') {

    var nameStik = `testMsg3`
    
      const sticker = await m.quoted.download(nameStik)
    
      await conn.sendMessage(q, { sticker : sticker })
    
    } else if (m.quoted.type === 'documentMessage') {

    return reply(`*_Can't forward this media_*`)
    
} else {

    var msg = m.quoted.msg
    
    await conn.sendMessage(q, { text : msg })
    
}

   

}catch(e){
console.log(e)
reply(`${e}`)
}
})
