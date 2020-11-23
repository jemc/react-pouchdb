/// <reference types='..' />

interface PouchDBProps extends PouchDB.Configuration.DatabaseConfiguration {
  name: string
  maxListeners?: number
  children?: ReactNode
}
export function PouchDB(props: PouchDBProps): JSX.Element

export {
  useDB,
  useGet,
  Get,
  useFind,
  Find,
  useAllDocs,
  AllDocs,
}
