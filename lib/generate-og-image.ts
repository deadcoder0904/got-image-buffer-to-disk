import fs from 'fs'
import path from 'path'
import got from 'got'

const saveImageFromAPI = async (
  url: string,
  searchParams: Record<string, any>,
  folderPath: string
) => {
  try {
    const resp = await got
      .post(url, {
        searchParams,
      })
      .buffer()
    fs.writeFileSync(path.join(folderPath, 'og-image.jpeg'), resp)
  } catch (e) {
    console.error(e)
  }
}

export const generateOGImage = () => {
  console.log('generating OG Image...')
  try {
    const folderPath = 'public/'
    const params = {
      title: 'Hello OG Image',
      date: new Date().toString(),
      author: JSON.stringify([
        {
          name: 'Deadman',
          twitter: '@taker',
        },
      ]),
    }

    const API_URL = `http://localhost:3000/api/og-image`

    saveImageFromAPI(API_URL, params, folderPath)
  } catch (e) {
    console.error(e)
  } finally {
  }
}
