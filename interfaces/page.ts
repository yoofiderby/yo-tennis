import { Sections } from './sections'
export interface Page {
 pageName: string
 _type: 'page' | 'service' | 'blog' | 'portfolio'
 slug: { current: string }
 pageBuilder: Sections[]
 _id: string
}
