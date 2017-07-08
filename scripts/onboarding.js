/**
 * Description:
 *   Sends useful information to new Open Wichita Slack members.
 */

const introMessages = [
  `
    Welcome to the Open Wichita Slack! I'm keeperbot, a chatbot you can interact
    with. My goal is to help you get involved with the group and answer whatever
    questions you may have.
  `,
  `
    If you're 100% new to the concept of "civic hacking", you should read our
    Civic Hacking 101 guide -> https://github.com/openwichita/docs/blob/master/civic-hacking-101.md
  `,
  `
    To learn about how we operate as a group and really get involved, read our
    onboarding guide, which can be found at https://github.com/openwichita/docs/blob/master/onboarding-guide.md.
  `,
  `
    All the most important information is contained within our \`docs\` repo,
    at https://github.com/openwichita/docs.
  `,
]

module.exports = (robot) => {
  /**
   * When someone enters the room, send them each of the intro messages.
   */
  robot.enter(res => {
    // Get the room name from the provided room ID
    const room = robot.adapter.client.rtm.dataStore.getChannelGroupOrDMById(res.message.room)
    const user = res.message.user.name

    console.log('room', room)

    if (room !== '#general') return

    introMessages.map(m => robot.messageRoom(user, m))
  })
}
