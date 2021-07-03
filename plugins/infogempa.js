let axios = require("axios");
let handler = async(m, { conn, text }) => {

   await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
      axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) =>{
         let hasil = ` *Info Gempa* \n\ *Lokasi ðŸ“* : _${res.data.lokasi}_ \n *Kedalaman ã€½ ï¸* : _${res.data.kedalaman}_ \n *Koordinat ï¸ðŸ“Œ* : _${res.data.koordinat}_ \n *Magnitude ðŸ’¢* : _${res.data.magnitude}_ \n *Waktu â³* : _${res.data.waktu}_ `
  
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['infogempa']
handler.tags = ['tools']
handler.command = /^(infogempa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100

module.exports = handler
