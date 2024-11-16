const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    on: "body"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const rejectGrp = ['120363355439809658@g.us', '120363359103844355@g.us']
    
if(isCmd) return
if(senderNumber === botNumber) return      
if(rejectGrp.includes(from)) return

if (config.AUTO_AI === 'on') {
    
let data = await fetchJson(`https://dark-yasiya-api-new.vercel.app/ai/chatgpt?q=${body}`)

return reply(`${data.result}`)
    
}
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
