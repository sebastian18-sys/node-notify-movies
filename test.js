import { chromium } from "playwright"

async function main() {

  console.log("Ejecutando Browser...")
  const browser = await chromium.launch()

  // const context =

  // const page = await browser.newPage();
  const context = await browser.newContext()
  const page = await context.newPage()
  console.log("Recuperando URL")
  
  // ATV
  await page.goto("https://www.atv.pe/programacion")
  // await page.goto("https://tv.movistar.com.pe/tv-guide/epg")
  await page.waitForTimeout(2000)

  // aceptar cookies
  // await page.locator("#ID").click()


  console.log("Recuperando canales...")

  const MAX_LENGTH = 19
  let channels_title = []

  for(let i = 0; i < MAX_LENGTH; i++) {
    const title = await page.locator(".schedule-segment__title").nth(i)
    const schedule = await page.locator(".schedule-segment__range > span").nth(i)
    const title_results = await title.textContent({ timeout: 60000 })
    const schedule_results = await schedule.textContent({ timeout: 60000 })
    // console.log(results)
    channels_title.push({ "horario": schedule_results, "pelicula": title_results })
  }


  // const MAX_LENGTH = 108
  // let channels_title = []

  // for(let i = 0; i < MAX_LENGTH; i++) {
  //   const title = await page.locator(".element--DrFdZ").nth(i)
  //   const results = await title.getAttribute('title', {
  //     timeout: 60000
  //   })
  //   console.log(results)
  //   channels_title.push(results)
  // }

  

  console.log("Fin Interación")
  console.log(channels_title)
  



  await context.close()
  await page.close()
  
}

main()

