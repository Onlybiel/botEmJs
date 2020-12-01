# PRIMEIROS PASSOS (CRIAÇÃO E CONFIGURAÇÃO DE UM PROJETO):

  • Abra o console/terminal e navegue até à diretoria onde está a pasta "bot-discord".
    Você pode alterar o nome da pasta para o que você quiser, mas **NÃO** use espaços e **NÃO** use letras MAIÚSCULAS;

  • Execute o comando `npm init -y` (ignore os ``) (**Deve ter o node.js instalado primeiro!!**);

  • Após executar esse comando, um ficheiro package.json será criado (se não for criado, verifique se tudo foi feito corretamente até agora).
    

   **ANTES DE CONTINUAR, ALTERE O CONTEÚDO DO SEU package.json PARA O APRESENTADO A SEGUIR:**

   {
     "name": "<nomedoseubot>",
     "version": "1.0.0",
     "main": "./src/bot.js",
     "scripts": {
       "start": "node ."
     },
     "author": "<SeuNome>",
     "license": "ISC"
   }

   >> **NOTA:** Deixe o nome do seu bot na zona "name" como algo bem simples, como o nome do seu bot, SEM LETRAS MAIÚSCULAS E ESPAÇOS!


  • Execute o comando `npm install` (mais uma vez, ignore os ``);
  • Após executar esse comando, um ficheiro package-lock.json. A partir deste momento, você pode instalar as packages todas que quiser com `npm install <package>`;
  • Antes de continuar, **verifique que tem o ficheiro package.json, o ficheiro config.json e a pasta src tudo no mesmo local!**.
    NOTA: **A pasta node_modules só aparecerá quando você instalar alguma coisa usando o npm install <package>!**


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# PRÓXIMOS PASSOS (CONFIGURAÇÃO DO BOT E ENTENDIMENTO DA ESTRUTURA DAS PASTAS E FICHEIROS):

  • Agora que tudo está configurado, abra o ficheiro config.json. Introduza o prefixo e o token do seu bot nos espaços corretos, dentro das "";

  • Execute o comando `npm install discord.js` (ignorando os ``);

  • Abra a pasta src. Estarão presentes as pastas "comandos", "eventos" e "handlers" e o ficheiro bot.js. Pode abrir o ficheiro bot.js para dar uma olhada, se quiser;

  • Abrindo a pasta "handlers", verá que estarão presentes os ficheiros comandos.js e eventos.js. Pode abri-los para dar uma olhada, se quiser;

  • Abrindo a pasta "comandos", você verá várias categorias. Dentro da PRIMEIRA categoria, você verá um ficheiro de um comando de exemplo. **RECOMENDO** dar uma olhada.
    NOTAS:
     > **Você não precisa ter essas categorias, elas servem apenas para organização. Você pode ter todos os ficheiros de comandos sem nenhuma pasta de categoria!**;
     > Sempre que adicionar um comando, o nome do ficheiro desse comando **TEM DE SER O MESMO** que o nome do comando!
       Exemplo: (`Comando: ban          Ficheiro: ban.js`).

  • Abrindo a pasta "eventos", você verá várias categorias. Dentro das categorias, você verá ficheiros de eventos. **RECOMENDO** dar uma olhada.
    NOTAS:
     > **Você não precisa ter essas categorias, elas servem apenas para organização. Você pode ter todos os ficheiros de eventos sem nenhuma pasta de categoria!**;
     > Sempre que adicionar um evento, o nome do ficheiro desse evento **TEM DE SER O MESMO** que o nome do evento!
       Exemplo: (`Evento: guildMemberAdd          Ficheiro: guildMemberAdd.js`).
  

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# ÚLTIMO PASSO (LIGAR O BOT):

  • Abra o console/terminal e navegue até à diretoria onde está a pasta "bot-discord";

  • Execute o comando `node .` (ignore os ``).


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# DÚVIDAS

  • Caso possua alguma dúvida, contacte 5antos#4876 no Discord.


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# REFERÊNCIAS:

  • Documentação do Discord.js: https://discord.js.org/#/docs/main/stable/general/welcome

  • Guia útil para utilização do Discord.js: https://discordjs.guide/