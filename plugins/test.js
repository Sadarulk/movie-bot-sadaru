const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

const apilink = 'https://dark-yasiya-api-new.vercel.app'
const id = config.MV_SEND_JID

cmd({
    pattern: "moviesend",
    desc: "movie send to grp jid",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

    if (!q && !q.startsWith("https://sinhalasub.lk/"))

return reply("*_Please give me a sinhalasub.lk url & quality._*\n\n*Example :-* .moviedl url & quality\n\n( Available quality input : 1080p , 720p , 480p )")

let x = q
        
let a = x.split(" & ")

let b = a[0]
let c = a[1]
let d = a[2]

if(!d) {


if(c === " 1080p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[0].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[0].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`
        
       await conn.sendMessage( id ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`});

} else if(c === " 720p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[1].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

        let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[1].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`

        await conn.sendMessage( id ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`});

} else if(c === " 480p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[2].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

        let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[2].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`

        await conn.sendMessage( id ,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`});

} else { 

    return reply("*Invalid quality input.*\n\n*Available quality inputs :* 1080p , 720p , 480p")

}
} else if (d.endsWith('@g.us')) {

if(c === " 1080p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[0].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[0].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`
        
       await conn.sendMessage(d ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`});

} else if(c === " 720p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[1].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

        let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[1].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`

        await conn.sendMessage(d ,{document: {url: updatedUrl },mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`});

} else if(c === " 480p") {

let mv_info = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${b}`)

let url = `${mv_info.result.data.dl_links[2].link}`;

// Replace '/u/' with '/api/file/'
let updatedUrl = url.replace('/u/', '/api/file/');

        let cap = `${mv_info.result.data.title} ( ${mv_info.result.data.dl_links[2].quality} )

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`

        await conn.sendMessage(d ,{document: {url:updatedUrl},mimetype:"video/mp4",fileName:mv_info.result.data.title + ".mp4",caption: `${cap}`});

} else { 

    return reply("*Invalid quality input.*\n\n*Available quality inputs :* 1080p , 720p , 480p")

}
}    
     
}catch(e){
console.log(e)
reply(`${e}`)

}
})
