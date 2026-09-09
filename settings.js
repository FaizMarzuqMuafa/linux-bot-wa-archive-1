require("./Cantarella")
const fs = require('fs')

global.owner = "6285813708397", "6285813708397" //NOMOR OWNER
global.nobot = "6285119732048" //NOMOR BOT
global.nomorowner = '6285813708397' //NOMOR OWNER
global.namaowner = "FallZx Infinity" //NAMA OWNER LO
global.namaBot = "𝑪𝒂𝒏𝒕𝒂𝒓𝒆𝒍𝒍𝒂" //NAMA BOT LO
global.thumnail2 = "https://d.uguu.se/yzPjnXEU.jpeg" //REPLY IMAG
global.replyimg = "https://u.pone.rs/sofxtryg.jpg" //REPLY IMAGE
global.creator = `${owner}@s.whatsapp.net` //GAUSAH LO OPREK
global.foother = `© ${namaBot}` //GAUSAH LO OPREK
global.ppowner = 'https://files.catbox.moe/h5zya9.png' //PROFILE OWNER
global.versi ="𝑪𝒂𝒏𝒕𝒂𝒓𝒆𝒍𝒍𝒂" //JANGAN LO UBAH
global.menuBg = 'https://u.pone.rs/ezchqsab.jpg' //THUMBNAIL MENU LO
global.idch = "120363186130999681@newsletter" //UBAH PAKE IDCH LO
global.linkSaluran = "https://whatsapp.com/channel/0029Vb8xSqi0AgWJaiZ9Qm16" //SAMA UBAH JUGA
//KALO MAU GANTI BACKGROUND WELCOME/GOODBYE UBAH AJA
global.welcomeBg = 'https://files.catbox.moe/qbihzq.jpg'
//UBAH SESUKA LO
global.mess = {
    owner: "You are not owner",
    prem: "You are not premium",
    group: "Only group command",
    admin: "You are not Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Only Private Chat",
    done: "Done"
}
//===BAGIAN STORE UNTUK PAYMENT GETWA =====
global.midtransServerKey = '';
global.midtransClientKey = '';
global.midtransProduction = false;
global.paymentMode = 'both';
//==================================


//===GAUSAH LO UBAH APA APA =====
global.mute = false
global.onlygc = false
global.allowedGroupIds = global.allowedGroupIds || [""];
global.nama = namaBot
global.namach = nama
global.namafile = foother
global.author = namaowner
global.welcome = true
global.leave = true
global.antitags = false
global.welcomeMessage = "awkawkwwk"
global.leaveMessage = "awkww yatim oit"
global.autoreadsw = false
global.autoreactsw = false
global.autoreactemoji = '😂'
global.prefix = ".", "/", "#", "?", "/"
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.keyopenai = "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"
global.packname = nama
global.author = namaBot
//==================================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})