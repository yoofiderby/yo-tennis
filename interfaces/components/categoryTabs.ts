interface Category {
 key: string
 label: string
}
export interface CategoryTabProps {
 categories: Category[]
 selectedCategory: string
 onSelect: (key: string) => void
}
