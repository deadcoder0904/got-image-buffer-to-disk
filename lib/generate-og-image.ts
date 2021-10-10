import fs from 'fs'
import path from 'path'
import got from 'got'

const saveImageFromAPI = async (url: string, folderPath: string) => {
  try {
    const resp = await got(url).buffer()
    fs.writeFileSync(path.join(folderPath, 'og-image.jpeg'), resp)
  } catch (e) {
    console.error(e)
  }
}

export const generateOGImage = () => {
  try {
    const folderPath = 'public/'
    const params = {
      test: 'Hello OG Image',
    }
    const searchParams = Object.keys(params)
      .map((k) => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(
          params[k as keyof typeof params]
        )}`
      })
      .join('&')

    const API_URL = `http://localhost:3000/api/og-image?${searchParams}`

    saveImageFromAPI(API_URL, folderPath)
  } catch (e) {
    console.error(e)
  } finally {
  }
}
