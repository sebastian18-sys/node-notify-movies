import twilio from "twilio";
import { config } from "dotenv";

config()

export default async function sendSMS(body) {
  const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)
  return client.messages.create({
    body: body,
    from: process.env.TWILIO_NUMBER_FROM,
    to: process.env.TWILIO_NUMBER_TO
  }).then(message => console.log(message.sid)).catch(err => console.error(err))
}
