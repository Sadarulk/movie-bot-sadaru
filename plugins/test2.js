const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "test2",
    desc: "download movies",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

    if (!q && !q.startsWith("https://sinhalasub.lk/"))

return reply("*_Please give me a sinhalasub.lk url & quality._*\n\n*Example :-* .moviedl url & quality\n\n( Available qualities : 1080p , 720p , 480p )")

let x = q
        
let a = x.split("&")

let b = a[0]
let c = a[1]

let mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)
        
function getDownloadLinkByQuality(quality) {
  
  const filteredLinks = mv.result.data.dl_links.filter(link => link.quality === quality && link.link.includes("pixeldrain.com"));
  
  if (filteredLinks.length > 0) {
    return filteredLinks.map(link => link.link);  // Return all Pixeldrain links matching the quality
  } else {
    return reply(`*_Not found in your quality._*`);  // Return a message if no match is found
  }
}

let qualityInput = c
let resultLinks = getDownloadLinkByQuality(qualityInput)

        return reply(`${resultLinks}`)


         
}catch(e){
console.log(e)
reply(`${e}`)

}
})
