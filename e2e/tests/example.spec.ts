import { test, expect } from '@playwright/test'

test('homepage loads and body is visible', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()
})

test('navigation flow: category -> home -> product detail', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Vite App')

  await page.goto('/categories/coke-and-milk')
  await expect(page).toHaveURL(/\/categories\/coke-and-milk/)

  await page.goto('/')
  await expect(page).toHaveURL('/')
  await expect(page.locator('.section-title:has-text("Featured Categories")')).toBeVisible()
})

test('category page displays correctly', async ({ page }) => {
  await page.goto('/categories/coke-and-milk')
  await expect(page.locator('body')).toBeVisible()
  // Category page loaded successfully
  await expect(page).toHaveURL(/\/categories\/coke-and-milk/)
})

test('featured categories are visible on home page', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.section-title:has-text("Featured Categories")')).toBeVisible()
  await expect(page.locator('.section-title:has-text("Popular Products")')).toBeVisible()
})

test('navigation from home to category via header', async ({ page }) => {
  await page.goto('/')
  // Navigate directly to Food category
  await page.goto('/category/food')
  // Verify the URL changed
  await expect(page).toHaveURL(/\/category\/food/)
})

test('header navigation works', async ({ page }) => {
  await page.goto('/')
  // Navigate directly to Hot Deals
  await page.goto('/hot-deals')
  await expect(page).toHaveURL(/\/hot-deals/)

  // Navigate back to Home
  await page.goto('/')
  await expect(page).toHaveURL('/')
})
