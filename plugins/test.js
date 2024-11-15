const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')



const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "test",
    desc: "get movie download links",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
  
    if (!q.startsWith("https://")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const pixeldrainLinks = mv.result.data.dl_links
  .filter(link => link.link.includes('pixeldrain.com'))
  .map(link => ({
    quality: link.quality,
    size: link.size,
    link: link.link
  }));


const array = pixeldrainLinks;

let dt = `*_${mv.result.data.title} All Download Links ⬇️_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

if (!array || array.length === 0) {
            return reply("*_No download links in this movie._*");
        }
        
const result = array.map((movie, index) => `${index + 1}. *Quality :* ${array[index].quality}\n*Size :* ${array[index].size}\n*Link :* ${array[index].link}`).join("\n\n");
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

          if(quoted === "1") return reply(`Hi there`)  

}catch(e){
console.log(e)
reply(`${e}`)

}
})
