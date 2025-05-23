'use client'

import { useState } from 'react'
import ClassDetailRow from '@/components/ClassDetailRow'

interface Category {
  _id: string
  title: string
  slug: { current: string }
}

interface Class {
  _id: string
  title: string
  slug: { current: string }
  description: any
  category: Category
  featuredImage: any
  chartImage: any
  timePeriod: string
  maxCapacity: number
  location: string
  instructor: string
  timeSlots: any[]
}

interface ClassesWithCategoriesProps {
  initialClasses: Class[]
  initialCategories: Category[]
}

export default function ClassesWithCategories({ initialClasses, initialCategories }: ClassesWithCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategories[0]?._id || '')

  const filteredClasses = selectedCategory
    ? initialClasses.filter(classItem => classItem.category?._id === selectedCategory)
    : initialClasses

  return (
    <>
      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mt-8 mb-12">
        {initialCategories.map((category) => (
          <button
            key={category._id}
            onClick={() => setSelectedCategory(category._id)}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors ${
              selectedCategory === category._id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Classes List */}
      <div className="mt-10">
        {filteredClasses.map((classItem, index) => (
          <ClassDetailRow
            key={classItem._id}
            class={classItem}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </>
  )
} 