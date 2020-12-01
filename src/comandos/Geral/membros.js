module.exports = {
  config: {
    nome: 'membros',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
    aliases: ['member', 'users', 'm'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
    descricao: 'Comando que cumprimenta o usuário de volta.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    utilizacao: '',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
    cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
  },
  run: async (client, message, args) => {
let on = message.guild.members.cache.filter(a => a.presence.status == "online")
let off = message.guild.members.cache.filter(a => a.presence.status == "offline")
let au = message.guild.members.cache.filter(a => a.presence.status == "idle")
let ocu = message.guild.members.cache.filter(a => a.presence.status == "dnd")

on.forEach(membro=>{
    function users(){
        console.log(membro.user.username)
    }
    users()
})
console.log("online")
on.forEach(membro=>{
    function users(){
        console.log(membro.user.username)
    }
    users()
})
console.log("offline")
off.forEach(membro=>{
    function users2(){
        console.log(membro.user.username)
    }
    users2()
})
console.log("ocupado")
ocu.forEach(membro=>{
    function users3(){
        console.log(membro.user.username)
    }
    users3()
})
console.log("ausente")
au.forEach(membro=>{
    function users4(){
        console.log(membro.user.username)
    }
    users4()
})
}
}
