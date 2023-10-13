import getCount from "./utils/count.js";
import getSchedule from "./utils/schedule.js";

export const channels = [
  // {
  //   channel_tv: "ATV",
  //   url: "https://www.atv.pe/programacion",
  //   recoverSchedule: async ({ page }) => {

  //     const title_selector = ".schedule-segment__title"
  //     const schedule_selector = ".schedule-segment__range > span"
  
  //     const MAX_LENGTH = await getCount({ page }, title_selector)
  //     const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
  //     return results

  //   }
  // },
  {
    channel_tv: "TNT",
    url: "https://mi.tv/pe/canales/tnt",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      // const hasPressed = await page.getByText("+ Mostrar programas pasados").click()  
      await page.waitForTimeout(1000)
      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "Warner Channel",
    url: "https://mi.tv/pe/canales/warner",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      // const hasPressed = await page.getByText("+ Mostrar programas pasados").click()  
      await page.waitForTimeout(1000)
      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "Start Channel",
    url: "https://mi.tv/pe/canales/fox",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      // const hasPressed = await page.getByText("+ Mostrar programas pasados").click()  
      await page.waitForTimeout(1000)
      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "FX",
    url: "https://mi.tv/pe/canales/fx",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      // const hasPressed = await page.getByText("+ Mostrar programas pasados").click()  
      await page.waitForTimeout(1000)
      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "Space",
    url: "https://mi.tv/pe/canales/space",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      // const hasPressed = await page.getByText("+ Mostrar programas pasados").click()  
      await page.waitForTimeout(1000)
      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "Paramount Channel",
    url: "https://mi.tv/pe/canales/paramount-channel",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      // const hasPressed = await page.getByText("+ Mostrar programas pasados").click()  
      await page.waitForTimeout(1000)
      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "Cinecanal",
    url: "https://mi.tv/pe/canales/cinecanal",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "Cinemax",
    url: "https://mi.tv/pe/canales/cinemax",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "HBO Family Este",
    url: "https://mi.tv/ar/canales/hbo-family",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "HBO 2",
    url: "https://mi.tv/co/canales/hbo-2",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "HBO Plus Este",
    url: "https://mi.tv/co/canales/hbo-plus-este",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "HBO XTREME",
    url: "https://mi.tv/ar/canales/max-prime",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "HBO",
    url: "https://mi.tv/pe/canales/hbo",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  },
  {
    channel_tv: "HBO Pop",
    url: "https://mi.tv/ar/canales/max-up",
    recoverSchedule: async ({ page }) => {

      const title_selector = ".content > h2"
      const schedule_selector = ".content .time"

      // Pressed Visible All Items
      await page.locator(".btn-expand > span:first-child").click();
      await page.waitForTimeout(1000)

      const MAX_LENGTH = await getCount({ page }, title_selector)
      const results = await getSchedule({ page }, MAX_LENGTH, title_selector, schedule_selector)
      return results
    }
  }
]