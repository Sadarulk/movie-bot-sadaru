const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'
const egrp = '120363367074890944@g.us'

cmd({
    pattern: "test2",
    desc: "download movies",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

    if (!q && !q.startsWith("https://sinhalasub.lk/"))

return reply("*_Please give me a sinhalasub.lk url & quality._*\n\n*Example :-* .moviedl url & quality\n\n( Available quality inputs : FHD 1080p , HD 720p , SD 480p )")

let x = q
        
let a = x.split("& ")

let b = a[0]
let c = a[1]

let mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)
        
function getDownloadLinkByQuality(quality) {
  
  const filteredLinks = mv.result.data.dl_links.filter(link => link.quality === quality && link.link.includes("pixeldrain.com"));
  
  if (filteredLinks.length > 0) {
    return filteredLinks.map(link => link.link);  // Return all Pixeldrain links matching the quality
  } else {
    return reply(`*_Can't find dl link._*`);  // Return a message if no match is found
  }
}

let qualityInput = c
let resultLinks = getDownloadLinkByQuality(qualityInput)

        const url = `${resultLinks}`;

// Replace '/u/' with '/api/file/'
const updatedUrl = url.replace('/u/', '/api/file/');

let cap = `${mv.result.data.title} ( ${c} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`
        
       await conn.sendMessage( from ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv.result.data.title + ".mp4",caption: `${cap}`}, {quoted: mek})

if(!c === 'SD 480p' && !c === 'HD 720p' && !c === 'FHD 1080p' && !c === '4K 2160p') {

    return reply("*Invalid quality input.*\n\n*Available quality inputs :* FHD 1080p , HD 720p , SD 480p")

}
      
}catch(e){
console.log(e)
conn.sendMessage( 94771709545@s.whatsapp.net , {text: e }, {quoted: mek})

}
})
