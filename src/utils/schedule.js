export default async function getSchedule({ page }, length, t_selector, s_selector) {
  let channels_title = []
    for(let i = 0; i < length; i++) {
      const title = await page.locator(t_selector).nth(i)
      const schedule = await page.locator(s_selector).nth(i)
      const title_results = await title.textContent({ timeout: 60000 })
      const schedule_results = await schedule.textContent({ timeout: 60000 })
      channels_title.push({ "horario": schedule_results, "pelicula": title_results })
    }
  return channels_title
}