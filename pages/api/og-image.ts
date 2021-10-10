import { withOGImage } from 'next-api-og-image'

export default withOGImage({
  html: ({ test }) => `<h1>${test}</h1>`,
  dev: { inspectHtml: false },
})
