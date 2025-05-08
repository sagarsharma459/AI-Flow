import axios from 'axios';

export async function postToSlack(channel: string, text: string) {
  await axios.post('https://slack.com/api/chat.postMessage', { channel, text }, {
    headers: { Authorization: `Bearer ${process.env.SLACK_TOKEN}` }
  });
}
