const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')


cmd({
    pattern: "test",
    desc: "test",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

await conn.sendMessage(from, { text : "hello there this is test"}, {quoted : mek})

if(m.quoted.msg === 1){

return reply("test 1")

}

}catch(e){
console.log(e)
reply(`${e}`)

}
})
