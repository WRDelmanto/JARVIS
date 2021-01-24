//System Libraries
const Discord = require('discord.js');

//Bot Variables
const Delete_Message_Timeout = '50';
const Bot_Color = '0x008080';

//RULES
module.exports = {
  name: 'rules',
  description: 'Rules Embed',
  execute(message, args) {
    const Rules = new Discord.MessageEmbed()
      .setTitle(
        '------------------ BEM VINDOS AO AVENGERS FACILITY ------------------'
      )
      .setDescription(
        'Antes de ler, gostaríamos de informar de que estas regras se aplicam dentro da Comunidade do Avengers Facility no Discord.\nElas são aplicadas igualmente a todos os membros, independente se o membro for VIP ou não.\nRegras poderão ser adicionadas ao longo do tempo.\n\nAo participar da nossa comunidade você concorda em respeitar as regras abaixo:'
      )
      .addField(
        '1 - Não Poste Material Duvidoso',
        '- Material duvidoso ou pornográfico, sendo imagens, links ou qualquer outro meio não serão tolerados, sendo passível de punição imediata.'
      )
      .addField(
        '2 - Não Use Linguagem Inapropriada',
        '- Xingamentos excessivos, conteúdos discriminatórios, tentativas de promover discurso de ódio, apelidos e avatares inapropriados não serão tolerados, ficando a critério da equipe categorizar.'
      )
      .addField(
        '3 - Não Faça Divulgação Não Autorizada',
        '- Não divulgue servidores (independente de qualquer plataforma) e vídeos sem autorização prévia da equipe.'
      )
      .addField(
        '4 - Não Faça Spam',
        '- Evite postar conteúdos repetitivos ou sem sentido, isso inclui imagens.'
      )
      .addField(
        '5 - Utilize Os Canais Devidamente',
        '- Utilize os canais corretos para postar conteúdo e respeite o conteúdo do canal.'
      )
      .addField(
        '6 - Não Poste Conteúdos Ilegais',
        '- É estritamente proibido postar mensagens/imagens/vídeos que se encaixam fora da lei ou contra o TOS do Discord.'
      )
      .addField(
        '7 - Não Crie Tumultos',
        '- Evite gerar tumultos, ninguém aqui quer começar uma briga ou ficar assistindo uma briga. Somos todos amigos!.'
      )
      .addField(
        '8 - Evite Reproduzir Sons Altos Em Canais De Voz',
        '- Não reproduza sons altos em canais de voz usando gritos, vídeos, músicas e similares.'
      )
      .addField(
        '9 - Não Finja Ser Membro Da Equipe',
        '- Não tente enganar membros fingindo ser da equipe com apelidos ou mensagens.'
      )
      .addField(
        '10 - Não Tente Encontrar Brechas Nas Regras',
        '- Evite tentar encontrar brechas nas regras para abusar das mesmas.'
      )
      .setColor(Bot_Color);
    message.channel.send(Rules);

    message.delete({ timeout: Delete_Message_Timeout });
  },
};
