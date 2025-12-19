import { chromium } from 'playwright'
;(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  page.on('console', (msg) => console.log('PAGE LOG:', msg.type(), msg.text()))
  page.on('pageerror', (err) => console.log('PAGE ERROR:', err.toString()))

  const url = 'http://localhost:5173/categories/coke-and-milk'
  console.log('Navigating to', url)
  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 })
    console.log('Response status:', resp && resp.status())
    const html = await page.content()
    console.log('PAGE HTML length:', html.length)
    // Save a screenshot to inspect visually
    await page.screenshot({ path: 'debug-category.png', fullPage: true })
    console.log('Screenshot saved: debug-category.png')
  } catch (e) {
    console.log('Navigation error', e.message)
  }

  await browser.close()
})()
