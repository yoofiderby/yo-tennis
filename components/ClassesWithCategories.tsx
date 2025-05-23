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
  const [isAnimating, setIsAnimating] = useState(false)

  const filteredClasses = selectedCategory
    ? initialClasses.filter(classItem => classItem.category?._id === selectedCategory)
    : initialClasses

  const handleCategoryChange = (categoryId: string) => {
    setIsAnimating(true)
    setSelectedCategory(categoryId)
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <>
      {/* Category Tabs */}
      <div className="flex justify-center mt-8 mb-12">
        <div className="inline-flex flex-wrap gap-2 rounded-full border-2 border-primary p-2">
          {initialCategories.map((category) => (
            <button
              key={category._id}
              onClick={() => handleCategoryChange(category._id)}
              className={`px-6 py-2 rounded-full uppercase font-semibold text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category._id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-transparent text-primary hover:bg-primary/10'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Classes List */}
      <div className={`mt-10 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {filteredClasses.map((classItem, index) => (
          <div 
            key={classItem._id}
            className="animate-fadeIn"
          >
            <ClassDetailRow
              class={classItem}
              isReversed={index % 2 === 1}
            />
          </div>
        ))}
      </div>
    </>
  )
} 
