//MemberCounter
module.exports = {
  name: 'membercounter',
  description: 'count the total members on the server minus the bots',
  execute(member) {
    if (member.guild.id !== countChannel.serverID) return; // Avoid leaking.

    bot.channels.cache
      .get(countChannel.member)
      .setName(
        `👤 Members: ${
          member.guild.members.cache.filter((m) => !m.user.bot).size
        }`
      );
  },
};
