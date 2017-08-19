const RM = require('./src/index')
const bot = new RM.Client()

bot.on('message', msg => {
  if (msg.content === '!!!test') {
    let Msg = new RM.Message(bot, 'test', msg.channel)
    Msg.AddMenu()
    let btn = new RM.Button()
    nums.forEach(num => {
      btn.SetEmoji(num.e)
      btn.SetCallback(Btn)
      btn.SetData({n: num.n})
      Msg.Menu.AddButton(btn)
    })
    Msg.Send()
  }
})

bot.on('ready', () => {
  console.log('ready!')
})

bot.login('token-here')

const nums = [{e: '😄', n: 'one'}, {e: '🤔', n: 'two'}, {e: '🤣', n: 'three'}, {e: '😠', n: 'four'}, {e: '🔟', n: 'ten'}]

const Btn = (user, client, message, data = null) => {
  message.edit(data.n).catch(console.error)
}
