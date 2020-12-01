module.exports = {

  config: {

    nome: 'beijar',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
    aliases: ['kiss','beijo'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
    descricao: 'Comando que cumprimenta o usuário de volta.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
  },
  run: async (client, message, args) => {
	  const fetch = require("node-fetch")

var n = Math.round(Math.random()*15)

const discord = require("discord.js")
let user = message.mentions.users.first() || client.users.cache.get(args[0])
if(!user) return message.reply("selecione alguém para beijar!")
fetch('https://api.tenor.com/v1/search?tag=kiss+anime&key=S7TF4CPQ4ZDW&limit=16', { method: 'POST', body: 'a=1' })
    .then(res => res.json()) // expecting a json response
    .then(json => {
        var img = json.results[n].url
        message.channel.send("foi"+img)
    })
  }
}
