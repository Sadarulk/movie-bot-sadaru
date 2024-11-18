const config = require('../config')
const {cmd , commands} = require('../command')
const {getLinkPreview , getPreviewFromContent} = require('link-preview-js')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const blockGrp = config.BLOCK_JID
if(blockGrp.includes(from)) return
    
let aliveMsg = getLinkPreview(" Hi there this is test https://chat.whatsapp.com/IBFf5kRHL6j9Wcw1sTnwms")

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: aliveMsg},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})



