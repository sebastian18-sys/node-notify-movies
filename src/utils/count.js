export default async function getCount({ page }, t_selector) {
  await page.locator(`${t_selector}`).nth(1).waitFor()
  const count = await page.locator(`${t_selector}`).count()
  return count
}