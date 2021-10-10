import fs from 'fs'
import path from 'path'
import got from 'got'

const saveImageFromAPI = async (
  url: string,
  json: Record<string, any> | undefined,
  folderPath: string
) => {
  try {
    const resp = await got
      .post(url, {
        json,
      })
      .buffer()
    fs.writeFileSync(path.join(folderPath, 'og-image.jpeg'), resp)
  } catch (e) {
    console.error(e)
  }
}

export const generateOGImage = () => {
  try {
    const folderPath = 'public/'
    const params = {
      title: 'Hello OG Image',
      date: new Date(),
    }
    // const searchParams = Object.keys(params)
    //   .map((k) => {
    //     return `${encodeURIComponent(k)}=${encodeURIComponent(
    //       params[k as keyof typeof params]
    //     )}`
    //   })
    //   .join('&')

    const API_URL = `http://localhost:3000/api/og-image`

    saveImageFromAPI(API_URL, params, folderPath)
  } catch (e) {
    console.error(e)
  } finally {
  }
}
