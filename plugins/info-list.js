let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed Yanz BOT' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "ଘ 💻Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "ଘ 👤Nama Creator", rowId: '.nameown', description: '╰►Developer Yanz BOT' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: '╰►Support Fangz Agar on 24 Jam' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: '╰►S&K Yanz BOT' },
	    {title: "ଘ ⛔No Menu", rowId: '', description: '╰►No menu' },
	    {title: "ଘ 📑Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: '╰►Speed Yanz BOT' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa Yanz BOT' },
	{title: "ଘ 🗣️Request Fitur", rowId: '.request', description: '╰►Request Fitur Fangz BOT' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi Yanz BOT' },
	{title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi Yanz BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa Yanz BOT' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi Yanz BOT' },
	    {title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi Yanz BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa Yanz BOT' },
	{title: "ଘ ⚡Speed Bot", rowId: '.speed', description: '╰►Speed Yanz BOT' },
	{title: "ଘ 🔧 Customer Service", rowId: '.complaint', description: '╰►Laporkan keluhan mu di sini...' },
	{title: "ଘ 📊Status Bot", rowId: '.botstats', description: '╰►Sistem Yanz BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
