let { performance } = require('perf_hooks')
let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let fs = require ('fs')
let path = require('path')

let handler  = async (m, { conn, usedPrefix: _p, command }) => {

  let old = performance.now()
  await conn.fakeReply(m.chat, '*[❗] Ｌｏｄｉｎｇ．．．*', '0@s.whatsapp.net', `*Baca Rules Dulu Sebelum Make Bot!*\n\n*Ketik .rules*`)
    let RendyGans = './src/avatar_contact.png'
  let pp = 'https://i.ibb.co/wpWpVNd/avatar-contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    RendyGans = await conn.getProfilePicture(conn.user.jid)
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let neww = performance.now()
    let res = await fetch('https://api.zeks.xyz/api')
    let json = await res.json()
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level, money, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max, health } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let totalft = Object.keys(global.DATABASE._data.stats).length
    let totalsend = global.DATABASE.data.stats['menu.js'].total
    let tags = {
      'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'xp': 'Exp & Limit',
      'rpg': 'Adventure Menu (NEW)', 
      'tutor': 'Tutorial Buat Baka BOTZ',
      'hadiah': 'Hadiah',
      'dewasa': '18+ Menu',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Prank Menu',
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'game': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'Video Menu',
      'anony': 'Anonymous Chat',
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'tools': 'Tools Menu',
      'jadibot': 'Bot Numpang',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'info': 'Information',
      'thnks': 'THANKS TO',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
    
╔╦═╦╗╔═╗╔╗─╔═╗╔═╗╔═╦═╗╔═╗
║║║║║║╦╝║║─║╔╝║║║║║║║║║╦╝
║║║║║║╩╗║╚╗║╚╗║║║║║║║║║╩╗
╚═╩═╝╚═╝╚═╝╚═╝╚═╝╚╩═╩╝╚═╝
    
┌┈━━━━「 *INFO DEVELOPER* 」━━━━┈ ❋ཻུ۪۪⸙
│
│◦➛ *ɴᴀᴍᴇ* : ${conn.getName(conn.user.jid)}
│◦➛ *ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ* : 3 Januari 2009
│◦➛ *ʏᴏᴜᴛᴜʙᴇ* : https://bit.ly/3hg3bm4
│◦➛ *ɢʀᴏᴜᴘ* : https://bit.ly/36cLg9x
│◦➛ *ɢɪᴛʜᴜʙ* : https://github.com/BakaBOTZ/
│◦➛ *ʙʀᴏᴡsᴇʀ* : Baka Team
│◦➛ *ᴍᴇʀᴋ ʜᴘ* : Redmi 4A
│◦➛ *ᴠᴇʀsɪ ʜᴘ* : N2G47H
│◦➛ *ᴠᴇʀsɪ ᴍɪᴜɪ* : MIUI 10
│◦➛ *ᴠᴇʀsɪ ᴀɴᴅʀᴏɪᴅ* : 7.1.2
│◦➛ *ᴄᴘᴜ* : Quad-core Max 1.40GHz
│◦➛ *ʀᴏᴏᴛ ᴀᴄᴄᴇss* : No
│◦➛ *ʀᴀᴍ* : 2GB
│◦➛ *sᴄʀᴇᴇɴ sɪᴢᴇ* : 5.00 Inch
│◦➛ *ᴡᴇɪɢʜᴛ* : 131 Gram
│◦➛ *ᴀᴘɪ ʟᴇᴠᴇʟ* : 25
│◦➛ *ʙᴀᴛᴛᴇʀʏ* : %battery%
│◦➛ *ᴄᴀᴘᴀᴄɪᴛʏ* : 3120 mAh
│◦➛ *ᴘᴏᴡᴇʀ sᴏᴜʀᴄᴇ* : USB Port
│◦➛ *ᴛᴇᴄʜɴᴏʟᴏɢʏ* : Li-Poly
│◦➛ *ɢᴘᴜ ʀᴇɴᴅᴇʀᴇʀ*: Adreno (TM) 308
│◦➛ *ᴛᴏᴛᴀʟ ʜɪᴛ* : %totalsend ᴘᴇsᴀɴ
│◦➛ *ᴜsᴇʀ* : %totalreg ɴᴏᴍᴏʀ
│◦➛ *ɢʀᴏᴜᴘ* : %totalgc ɢʀᴏᴜᴘ
│◦➛ *sᴘᴇᴇᴅ ʙᴏᴛ* : ${json.SPEED}
│◦➛ *ɴᴏᴍᴇʀ ᴏᴡɴᴇʀ* : wa.me/6287834993722
│◦➛ *B A K A  B O T Z*
│
└┬───────────┈ ⳹ ❋ཻུ۪۪⸙
┌┤「 *INFO BOT* 」
││
││➥ *ᴄᴏɴɴᴇᴄᴛ* : Baileys 0.2.4
││➥ *ᴍᴏᴅᴇ* : Public
││➥ *sᴇʀᴠᴇʀ* : Ubuntu Linux
││➥ *ᴘʀᴇғɪx* : ( ᴍᴜʟᴛɪ ᴘʀᴇғɪx )
││➥ *ʙᴏᴛ ᴠᴇʀsɪᴏɴ* : 9.6.6
││
│├────────────┈ ⳹
││     「 *INFO USER* 」
││
││✎ ${ucapanWaktu} %name
││✎ *ɴᴀᴍᴇ* : %name
││✎ *ᴀᴘɪ ᴡʜᴀᴛsᴀᴘᴘ* : wa.me/${who.split`@`[0]}
││✎ *ᴇxᴘ* : %exp XP
││✎ *ᴇxᴘ ᴛᴏ ʟᴇᴠᴇʟᴜᴘ* : %xp4levelup
││✎ *ᴇxᴘ ᴛᴏᴛᴀʟ* : %totalexp
││✎ *ᴍᴏɴᴇʏ* : ${money} 💵
││✎ *ʀᴏʟᴇ* : ${role}
││✎ *ᴛɪᴄᴋᴇᴛ* :  %limit 🎟️
││✎ *ʟᴇᴠᴇʟ* : %level
││
│└────────────┈ ⳹
│ *©RakuGans*
├━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│┌───「 *TIME* 」───
││
││⦿  *ʜᴀʀɪ* : %week
││⦿  *ᴡᴇᴛᴏɴ* : %weton
││⦿  *ᴛᴀɴɢɢᴀʟ* : %date
││⦿  *ᴛᴀɴɢɢᴀʟ ɪsʟᴀᴍ* : ${dateIslamic}
││⦿  *ᴡɪᴛ* : ${wit} WIT
││⦿  *ᴡɪᴛᴀ* :  ${wita} WITA
││⦿  *ᴡɪʙ* : %time WIB
││⦿  *ʀᴜɴ ᴛɪᴍᴇ* : %uptime
││
│└────────────┈ ⳹ 
│ *©RakuGans*
├━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│
│➥ *ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ* : .request
│➥ *ʙᴜɢ* : .bug / .report
│ *ʟᴀᴘᴏʀᴀɴ / ʀᴇǫᴜᴇsᴛ ᴘᴀʟsᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ*
│ *ᴅɪᴛᴀɴɢɢᴀᴘɪ ᴏʟᴇʜ ʙᴏᴛ ᴅᴀɴ*
│ *ᴜsᴇʀ ᴀᴋᴀɴ ᴅɪʙᴀɴɴᴇᴅ sᴇᴍᴇɴᴛᴀʀᴀ*
│
│⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
│
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙


%readmore`
    let header = conn.menu.header || '┌─── ⳹°❀❬ *%category* ❭❀°'
    let body   = conn.menu.body   || '│✎ %cmd%islimit'
    let footer = conn.menu.footer || '└────────────┈ ⳹ ❋ཻུ۪۪⸙\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `*Bot Ini Cuma Numpang*\n`) + `\n*BAKA BOTZ %version*\n\`\`\`\Creator By : RakuChan\`\`\`\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║\n▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║`
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, battery, totalreg, totalgc, totalft, totalsend,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    
conn.sendFile(m.chat, RendyGans, 'pp.jpg', text.trim(), { key: { remoteJid: '0@s.whatsapp.net' }, message: { imageMessage: { caption: '⍟ ʙᴀᴋᴀʙᴏᴛᴢ ᴘᴜʙʟɪᴄ x sᴇʟғ ʙᴏᴛ ⍟', jpegThumbnail: await (await fetch(pp)).buffer() }}})
  }
}
handler.help = ['FITUR']
handler.tags = ['main'] 
handler.command = /^(FITUR)$/i

handler.owner = false
handler.mods = false 
handler.premium = false 
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 20

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
