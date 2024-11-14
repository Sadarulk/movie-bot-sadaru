const {cmd , commands} = require('../command')
const config = require('../config')

cmd({
    pattern: "menu",
    desc: "Get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
owner: '',
movie: '',
other: ''
};

 for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│► .${commands[i].pattern}\n`;
 }
}   

let madeMenu = `*👋 HELLO _${pushname}_*

「 ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ ᴍᴇɴᴜ 」

╭──────────●
│❯ MAIN COMMANDS ❮
│   ───────
${menu.main}╰───────────●
╭───────────●
│❯ OWNER COMMANDS ❮
│   ───────
${menu.owner}╰───────────●
╭───────────●
│❯ MOVIE COMMANDS ❮
│   ───────
${menu.movie}╰───────────●
╭───────────●
│❯ OTHER COMMANDS ❮
│   ───────
${menu.other}╰───────────●

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})