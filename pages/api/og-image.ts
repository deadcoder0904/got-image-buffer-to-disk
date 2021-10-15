import React from 'react'
import ReactDOM from 'react-dom/server'
import { withOGImage } from 'next-api-og-image'

import { OGImagePreview } from './../og-image-preview'
import { Params } from '../../types/index'

export default withOGImage<keyof Params>({
  template: {
    html: ({ title, date, authors }) => {
      const el = React.createElement(OGImagePreview, {
        title: title as string,
        date: date as string,
        authors: authors as string,
      })
      const body = ReactDOM.renderToStaticMarkup(el)

      const baseCSS = `
        .font-alegreya {
          font-family: Alegreya;
        }
        .font-jetbrains {
          font-family: 'JetBrains Mono';
        }
      `

      return `
        <html>
          <head>
            <meta charset="utf-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
              rel="stylesheet"
            />
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
            <style>${baseCSS}</style>
          </head>
          <body>
            ${body}
          </body>
          <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
        </html>
      `
    },
  },
  dev: { inspectHtml: false },
})
