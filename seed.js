import axios from 'axios'
import FormData from 'form-data'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const API_BASE_URL = 'http://localhost:3000/api'
const IMAGE_DIR = path.resolve(__dirname, 'src', 'components')

const categories = [
  { name: 'Cake & Milk', productCount: 14, color: '#F2FCE4', imageFile: 'burger.png' },
  { name: 'Peach', productCount: 17, color: '#FFFCEB', imageFile: 'peach.png' },
  { name: 'Organic Kiwi', productCount: 21, color: '#ECFFEC', imageFile: 'kiwi.png' },
  { name: 'Red Apple', productCount: 68, color: '#FEEFEA', imageFile: 'apple.png' },
  { name: 'Snack', productCount: 34, color: '#FFF3EB', imageFile: 'snack.png' },
  { name: 'Black plum', productCount: 25, color: '#FFF3FF', imageFile: 'blackplum.png' },
  { name: 'Vegetables', productCount: 65, color: '#F2FCE4', imageFile: 'cabbage.png' },
  { name: 'Headphone', productCount: 33, color: '#FFFCEB', imageFile: 'headphone.png' },
  { name: 'Cake & Milk', productCount: 54, color: '#F2FCE4', imageFile: 'cake.png' },
  { name: 'Orange', productCount: 63, color: '#FFF3FF', imageFile: 'orange.png' },
]

const promotions = [
  {
    title: 'Everyday Fresh & Clean with Our Products',
    color: '#F0E8D5',
    buttonColor: '#3BB77E',
    url: '#',
    imageFile: 'onion.png',
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    color: '#F3E8E8',
    buttonColor: '#3BB77E',
    url: '#',
    imageFile: 'yogurt.png',
  },
  {
    title: 'The best Organic Products Online',
    color: '#E7EAF3',
    buttonColor: '#FDC040',
    url: '#',
    imageFile: 'vegetable.png',
  },
]

const fileExists = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Image file not found: ${filePath}`)
  }
}

const buildFormData = (fields, imageFile) => {
  const formData = new FormData()

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value)
  })

  const resolvedImagePath = path.resolve(IMAGE_DIR, imageFile)
  fileExists(resolvedImagePath)
  formData.append('image', fs.createReadStream(resolvedImagePath))

  return formData
}

const postMultipart = async (endpoint, fields, imageFile, itemName) => {
  const formData = buildFormData(fields, imageFile)

  await axios.post(`${API_BASE_URL}/${endpoint}`, formData, {
    headers: formData.getHeaders(),
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  })

  console.log(`Created ${itemName}`)
}

async function seedData() {
  console.log('Starting to seed data...')

  console.log('Seeding Categories...')
  for (const category of categories) {
    try {
      await postMultipart(
        'categories',
        {
          name: category.name,
          productCount: category.productCount,
          color: category.color,
        },
        category.imageFile,
        `category: ${category.name}`,
      )
    } catch (error) {
      console.error(`Failed to create category ${category.name}:`, {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      })
    }
  }

  console.log('Seeding Promotions...')
  for (const promotion of promotions) {
    try {
      await postMultipart(
        'promotions',
        {
          title: promotion.title,
          buttonColor: promotion.buttonColor,
          color: promotion.color,
          url: promotion.url,
        },
        promotion.imageFile,
        `promotion: ${promotion.title}`,
      )
    } catch (error) {
      console.error(`Failed to create promotion ${promotion.title}:`, {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      })
    }
  }

  console.log('Seeding complete!')
}

seedData()
