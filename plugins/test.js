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

        if(!isOwner) return

if(!q.startsWith('https://chat.whatsapp.com/')) return reply(`*_Invalid group link._*`)
        
        const result = q.split('https://chat.whatsapp.com/')[1]
        
 const response = await conn.groupAcceptInvite(result)
        
 const test = await conn.groupGetInviteInfo(result)
      
reply(`*_Successfully joined ✅_*`)
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "left",
    desc: "left groups",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!isOwner) return reply(`*_This is an owner cmd._*`)
          
        await conn.groupLeave(from)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "open",
    desc: "open groups",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!groupAdmins) return reply(`*_You are not admin._*`)
          
        await conn.groupSettingUpdate(from, 'not_announcement')

reply(`*_Group open by ${sender}_*`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "close",
    desc: "close groups",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!groupAdmins) return reply(`*_You are not admin._*`)
          
        await conn.groupSettingUpdate(from, 'announcement')

        reply(`*_Group close by ${sender}_*`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "link",
    desc: "close groups",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
       
        const code = await conn.groupInviteCode(from)
                                                
        reply("https://chat.whatsapp.com/" + code)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
