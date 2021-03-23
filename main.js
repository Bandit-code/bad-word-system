console.log('Bot is being enabled!')
console.log('Credit to hyperz for the idea snice he made the fortnite bot')
const Bad = require('discord.js')
const client = new Bad.Client()
const TOKEN = "ODIzODkwOTI3MjcyOTg0NjI2.YFnaOA.ONJRpK0xzIzPFBLg3l_Jg1qHRAg"
client.on('ready', ready => {

    client.guilds.cache.forEach(g => {
        console.log(`${g.name} is now protected from Trolls.`)
    })
});

client.on('message', message => {
    if (message.content.includes("hard r")) {
        message.delete()
    } else if (message.content.includes("retard")) {
        message.delete()
    } else if (message.content.includes("virgin")) {
        message.delete()
    } else if (message.content.includes("faggot")) {
        message.delete()
    }
    console.log(`Deleted a Fortnite Message in ${message.guild.name}`)
});

client.login(TOKEN)