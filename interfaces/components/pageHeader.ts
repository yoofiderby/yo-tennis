export interface Breadcrumb {
  label: string
  href: string
}

export interface PageHeaderProps {
  title: string
  breadcrumbs: Array<{
    label: string
    href: string
  }>
  backgroundImage?: string
} 