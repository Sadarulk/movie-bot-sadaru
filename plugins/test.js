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

let response = await conn.sendMessage(from, { text: 'hello!' })
        
let a = await conn.sendMessage(from, {
      text: '▄',
      edit: response.key,
    });
let b = await conn.sendMessage(from, {
      text: '▄▅',
      edit: a.key,
    });        
let c = await conn.sendMessage(from, {
      text: '▄▅▆',
      edit: b.key,
    });        
let d = await conn.sendMessage(from, {
      text: '▄▅▆▇',
      edit: c.key,
    });        
let f = await conn.sendMessage(from, {
      text: '▄▅▆▇█',
      edit: d.key,
    });        
let g = await conn.sendMessage(from, {
      text: '▄▅▆▇██',
      edit: f.key,
    });
let h = await conn.sendMessage(from, {
      text: '▄▅▆▇██▇',
      edit: g.key,
    });        
let i = await conn.sendMessage(from, {
      text: '▄▅▆▇██▇▆',
      edit: h.key,
    });        
let j = await conn.sendMessage(from, {
      text: '▄▅▆▇██▇▆▅',
      edit: i.key,
    });        
let k = await conn.sendMessage(from, {
      text: '▄▅▆▇██▇▆▅▄',
      edit: j.key,
    });


        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
