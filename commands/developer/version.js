import { Command } from 'discord-akairo'
import pkg from '../../package.json'

class VersionCommand extends Command {
  constructor () {
    super('version', {
      aliases: ['version'],
      category: 'System',
      description: {
        name: 'Bot Version',
        content: 'Get the bot\'s current version number.',
        usage: '!version'
      },
      channel: 'guild',
      userPermissions: ['MANAGE_GUILD'],
      protected: true
    })
  }

  exec (message) {
    return message.util.send(pkg.version)
  }
}

export default VersionCommand