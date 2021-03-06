import { Listener } from 'discord-akairo'
import config from '../../config'

class GuildMemberRemoveListener extends Listener {
  constructor () {
    super('guildMemberRemove', {
      emitter: 'client',
      event: 'guildMemberRemove'
    })
  }

  exec (member) {
    const channel = this.client.channels.cache.get(config.channels.logs.memberLog)

    if (member.user.bot) {
      return channel.send(`:robot: **${member.user.tag}** was removed from the server \`BOT\``)
    }

    return channel.send(`:outbox_tray: **${member.user.tag}** left the server`)
  }
}

export default GuildMemberRemoveListener
