const { fetchJson } = require('../lib/functions');
const config = require('../config');
const { cmd, commands } = require('../command');

const apilink = 'https://dark-yasiya-api-new.vercel.app';

cmd({
    pattern: "test2",
    desc: "download movies",
    category: "movie",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, reply }) => {
    try {
        // Validate input
        if (!q || !q.startsWith("https://sinhalasub.lk/")) {
            return reply(
                "*_Please provide a valid sinhalasub.lk URL & quality._*\n\n" +
                "*Example :-* .moviedl url & quality\n\n" +
                "( Available quality inputs: FHD 1080p, HD 720p, SD 480p )"
            );
        }

        // Split the input into URL and quality
        const inputParts = q.split("& ");
        const movieUrl = inputParts[0];
        const qualityInput = inputParts[1];

        // Fetch movie data
        const mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${movieUrl}`);

        // Validate the provided quality
        const availableQualities = ['SD 480p', 'HD 720p', 'FHD 1080p', '4K 2160p'];
        if (!availableQualities.includes(qualityInput)) {
            return reply(
                "*Invalid quality input.*\n\n" +
                "*Available quality inputs:* FHD 1080p, HD 720p, SD 480p, 4K 2160p"
            );
        }

        // Filter download links based on the quality
        const filteredLinks = mv.result.data.dl_links.filter(
            (link) => link.quality === qualityInput && link.link.includes("pixeldrain.com")
        );

        if (filteredLinks.length === 0) {
            return reply(`*Can't download your movie in this quality.*`);
        }

        // Generate download URL
        const downloadUrl = filteredLinks[0].link.replace('/u/', '/api/file/');

        // Prepare caption and send the document
        const caption = `${mv.result.data.title} (${qualityInput})\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`;

        await conn.sendMessage(
            from,
            {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: mv.result.data.title + ".mp4",
                caption: caption
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error(e);
        conn.sendMessage('94771709545@s.whatsapp.net', { text: `${e}` }, { quoted: mek });
    }
});
