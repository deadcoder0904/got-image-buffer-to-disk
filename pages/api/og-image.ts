import { withOGImage } from 'next-api-og-image'

export default withOGImage({
  html: ({ title }) => `<h1>${title}</h1>`,
  dev: { inspectHtml: false },
})
