import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-π½ππ΅π π»πΈππ π§£
ββββββββββββββ
π ${this.client.config.prefix}α΄Ι΄α΄Κ
π ${this.client.config.prefix}ΚΚα΄α΄‘α΄α΄Κ
π ${this.client.config.prefix}Ι΄κ±κ°α΄‘α΄α΄α΄α΄ΙͺΙ΄
π ${this.client.config.prefix}Ι΄κ±κ°α΄‘Κα΄ΚΙͺ
π ${this.client.config.prefix}Ι΄κ±κ°α΄‘α΄α΄α΄α΄Κ
π ${this.client.config.prefix}α΄ΚΙͺΙ’Κκ±
π ${this.client.config.prefix}Κα΄Ι΄α΄α΄Ιͺ
π ${this.client.config.prefix}α΄α΄Ιͺα΄
π ${this.client.config.prefix}α΄α΄κ±α΄α΄ΚΚα΄α΄Ιͺα΄Ι΄
π ${this.client.config.prefix}Ι΄α΄α΄α΄α΄
π ${this.client.config.prefix}Ι΄κ±κ°α΄‘-α΄‘α΄Ιͺκ°α΄
π ${this.client.config.prefix}Ι΄κ±κ°α΄‘α΄α΄α΄α΄
π ${this.client.config.prefix}Ι΄κ±κ°α΄‘-Ι΄α΄α΄α΄
π ${this.client.config.prefix}α΄α΄κ±κ±Κ
π ${this.client.config.prefix}α΄Κα΄α΄
ββββββββββββββ` }
        )
    }
}
