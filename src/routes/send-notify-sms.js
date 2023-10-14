import express from "express"
import { chromium } from "playwright";
import { channels } from "../channels.js";
import sendSMS from "../utils/sendSms.js";
import schedule from "node-schedule";
import { myFavoritiesMovies } from "../favorities.js";
import { config } from "dotenv";

const managerRouter = express.Router()
config()

managerRouter.get('/', (req, res) => {
  const date = new Date()
  res.json({ status: "Work!", env: process.env.TEST_ENV_DEPLOY, date })
})


managerRouter.get('/send-notity-movies', (req, res) => {

  let rule = new schedule.RecurrenceRule();
  rule.hour = 12;
  rule.minute = 30;
  rule.second = 0;
  rule.dayOfWeek = new schedule.Range(0, 6);

  schedule.scheduleJob(rule, async function() {
    console.log('this will run everyday at 8:00am');
  
    ;(async () => {
      const browser = await chromium.launch()
    
      let listOfChannels = []
    
      for(const channel of channels) {
        const { recoverSchedule, channel_tv, url } = channel
    
        const page = await browser.newPage();    
        console.log("Recuperando URL")
        await page.goto(url, { timeout: 120000 })
        const schedule = await recoverSchedule({ page })
        
        listOfChannels.push({ channel: channel_tv, schedule: schedule })
    
        await page.close()
      }
    
      const movies = listOfChannels.map((data) => {
        let values = []
        const { channel, schedule } = data
      
        for(let s of schedule) {
          const movie = s.pelicula.trim().toLocaleLowerCase()
          myFavoritiesMovies.forEach((m) => {
            const regex = new RegExp(`${m}.*`)
            if (movie.match(regex)) {
              values.push(s)
            }
          })
        }
        return {channel, values}
      
      })
    
      console.log(movies)
    
      const message = movies.map((p) => {
        if(p.values.length === 0) return
        let title = `En el canal ${p.channel} pasará la pelicula: `
        const body = p.values.map((values) => {
          let b = `${values.pelicula.trim()} a las ${values.horario}`
          return b
        })
      
        return "Enhorabuena, " + title + body + " |||| "
      })
    
      const hasNotMessage = message.every(m => m === undefined)
    
      const res = hasNotMessage ? "No hay nada que ver hoy" : sendSMS(message.join(",")).then((m) => console.log("Mensaje Enviado"))
      console.log(res)
    
      await browser.close()
    })()
  
  })

  res.json({ result: "OK"})

})

export default managerRouter

