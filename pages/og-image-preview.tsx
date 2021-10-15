import { Params } from '../types/index'

const formatDate = (d: Date) =>
  d.toString().replace(/\w+ (\w+) (\d+) (\d+).*/, '$2 $1, $3')

export const OGImagePreview = ({
  title = 'Create OG Images using Next.js API',
  date = JSON.stringify(new Date()),
  authors = JSON.stringify([
    {
      name: 'Deadman',
      twitter: '@taker',
    },
  ]),
}: Record<keyof Params, string>) => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="font-alegreya text-4xl">{title}</h1>
      <p className="text-xl">{formatDate(JSON.parse(date))}</p>
      <span>Authors: </span>
      <ul>
        {JSON.parse(authors).map((author: any) => (
          <li>
            {author.name} ({author.twitter})
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      // returns the default 404 page with a status code of 404
      notFound: process.env.NODE_ENV === 'production',
    },
  }
}

OGImagePreview.displayName = 'OGImagePreview'

export default OGImagePreview
