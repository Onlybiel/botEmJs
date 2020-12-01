const discord = require("discord.js")
module.exports = {
  config: {
    nome: 'ajuda',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
    aliases: ['help'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
    descricao: 'Comando que cumprimenta o usuário de volta.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    cooldown: 2                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
  },
  run: async (client, message, args) => {
//==========
var ajuda, avatar,diversao,util


avatar = client.user.displayAvatarURL()


ajuda = new discord.MessageEmbed()
.setAuthor("| Central de ajuda Senku",avatar)
.setDescription(`**Olá sou o [${client.user.username}](https://discord.gg/Uwj5CAxYUa), um bot multifuncional com intuito de te deixar feliz!**

<a:X_danceTKF:778267276108759040> | Diversão
<:id:773732018252152832> | Úteis
<:Black_Fantasy:773730625622376449> | Moderação
<:host:773729899433164871> | Gerenciamento
<:js:773728377701531648> | Javascript
<a:lab_animedanca:778327398331842571> | Comics
<a:vip:778327738352140330> | Vips`)
.setThumbnail(avatar)
.setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/731488256306446417/778644530974425158/1605713569390.jpg")
.setColor("#00FF00")
.setFooter("Atenciosamente equipe de desenvolvedores")

diversao = new discord.MessageEmbed()
.setAuthor("| Central de diversão do Senku",avatar)
.setDescription(`**Olá sou o [${client.user.username}](https://discord.gg/Uwj5CAxYUa), é você esta na minha pagina de diversão**

<:seta_verde:778396117641461770> -beijar - Beije um usuário
<:seta_verde:778396117641461770> - abraçar - Abrace um usuário
<:seta_verde:778396117641461770> -tapa - dê um tapa em um usuário
<:seta_verde:778396117641461770> -soco - dê um soco em um usuário
<:seta_verde:778396117641461770> -chute - chute alguém
<:seta_verde:778396117641461770> -carinho - faça carinho em alguém
<:seta_verde:778396117641461770> -laranjo
<:seta_verde:778396117641461770> -carta - faça eu envia uma carta para alguém
`)
.setThumbnail(avatar)
.setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/731488256306446417/778650770089705512/1605715150613.jpg")
.setColor("YELLOW")
.setFooter("Atenciosamente equipe de dev")

util = new discord.MessageEmbed()
.setAuthor("| Central de diversão do Senku",avatar)
.setDescription(`**Olá sou o [${client.user.username}](https://discord.gg/Uwj5CAxYUa), é você esta na minha pagina de diversão**

<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
<:seta_verde:778396117641461770>
`)
.setThumbnail(avatar)
.setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/731488256306446417/778318250538434570/1605635807371.jpg")
.setColor("#00FF00")
.setFooter("Atenciosamente equipe de dev")

//==============	  
message.channel.send(ajuda).then(async msg => {

    await msg.react('778267276108759040')
    await msg.react("773732018252152832")
    await msg.react("773730625622376449")
    await msg.react("773729899433164871")
    await msg.react("773728377701531648")
    await msg.react('778327398331842571');
    await msg.react("778327738352140330")
    const filter = (reaction, user) => ['778267276108759040','773732018252152832', '773730625622376449','773729899433164871','773728377701531648','778327398331842571','778327738352140330'].includes(reaction.emoji.id) && user.id === message.author.id;

    const collector = msg.createReactionCollector(filter, { time: 1000*60/* tempo em millisegundos */ });

    collector.on('collect', r => {
        switch (r.emoji.id) {
            case '778267276108759040': {
              msg.edit(diversao);
              break;
            }
            case '773732018252152832': {
              collector.stop('motivo1');
              break;
            }
            case '773730625622376449': {
              collector.stop('motivo1');
              break;
            }
            case '773729899433164871': {
              collector.stop('motivo1');
              break;
            }
            case '773728377701531648': {
              collector.stop('motivo1');
              break;
            }
            case '778327398331842571': {
              collector.stop('motivo1');
              break;
            }
            case '778327738352140330': {
              collector.stop('motivo1');
              break;
            }
            }
    });
});


  }
}
