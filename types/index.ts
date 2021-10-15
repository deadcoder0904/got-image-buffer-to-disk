export interface Author {
  name: string
  twitter: string
}

export interface Params {
  title: string
  date: Date
  authors: Author[]
}
