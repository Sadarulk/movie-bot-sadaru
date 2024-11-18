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

if(!isGroup) return
        
        if(!groupAdmins) return reply(`*_You are not admin._*`)
          
        await conn.groupSettingUpdate(from, 'not_announcement')

reply(`*_Group opened_*`)
  
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

if(!isGroup) return
        
        if(!groupAdmins) return reply(`*_You are not admin._*`)
          
        await conn.groupSettingUpdate(from, 'announcement')

        reply(`*_Group closed._*`)
  
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

        if(!isGroup) return
        
        const code = await conn.groupInviteCode(from)
                                        
        reply("https://chat.whatsapp.com/" + code)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "add",
    desc: "add member",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
       // id & people to add to the group (will throw error if it fails)
const response = await conn.groupParticipantsUpdate(
    from, 
    q + "@s.whatsapp.net",
    "add" // replace this parameter with "remove", "demote" or "promote"
)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "kick",
    desc: "remove member",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return

        let member = m.quoted.sender
       // id & people to add to the group (will throw error if it fails)
const response = await conn.groupParticipantsUpdate(
    from, 
    member,
    "remove" // replace this parameter with "remove", "demote" or "promote"
)
        if(q > 0){

const response = await conn.groupParticipantsUpdate(
    from, 
    q + "@s.whatsapp.net",
    "remove" // replace this parameter with "remove", "demote" or "promote"
)
            
        }
reply(`*_Successfully removed ✅_*`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
