const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "moviedl",
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

if(c === " 1080p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[0].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[0].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`
        
       await conn.sendMessage( from ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`}, {quoted: mek})

} else if(c === " 720p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[1].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

        let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[1].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

        await conn.sendMessage( from ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`}, {quoted: mek})

} else if(c === " 480p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[2].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

        let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[2].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

        await conn.sendMessage( from ,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`}, {quoted: mek})

} else { 

    return reply("*Invalid quality.*\n\n*Available qualities :* 1080p , 720p , 480p")

}
         
}catch(e){
console.log(e)
reply(`${e}`)

}
})
