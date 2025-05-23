import React from 'react'
import Button from './Button'
import { PackageCardProps } from '@/interfaces/packageSection'

const FormattedPrice = ({
 featured,
 price,
}: {
 featured: boolean
 price: string
}) => {
 if (!String(price).includes('$')) {
  return price
 } else {
  return (
   <span>
    {price}{' '}
    <span
     className={`text-sm font-light w-6 inline-block leading-none ${
      featured ? 'text-gray-700' : 'text-gray-400'
     }`}
    >
     per month
    </span>{' '}
   </span>
  )
 }
}

export const PackageCard: React.FC<PackageCardProps> = ({
 title,
 price,
 subtitle,
 perks,
 featured = false,
 button,
}) => {
 return (
  <div
   className={`${
    featured
     ? 'bg-[#FFB84D] text-black'
     : 'bg-transparent text-white border border-[#FFB84D]'
   } rounded-lg shadow-md p-6 flex flex-col h-full hover:shadow-lg`}
  >
   <div className="mb-3">
    <h3 className="text-xl font-bold">{title}</h3>
   </div>

   <div className="text-4xl font-bold mb-1">
    <FormattedPrice
     featured={featured}
     price={price}
    />
   </div>

   <p className="text-base mb-8">{subtitle}</p>

   <div
    className={`border-t ${featured ? 'border-black' : 'border-[#FFB84D]'} my-4`}
   ></div>

   <ul className="space-y-3 mb-8 flex-grow">
    {perks.map((perk, index) => (
     <li
      key={index}
      className="flex items-center"
     >
      <div className="mr-3 flex-shrink-0">
       <svg
        className={`h-5 w-5 ${featured ? 'text-black' : 'text-[#FFB84D]'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <circle
         cx="12"
         cy="12"
         r="10"
         stroke="currentColor"
         strokeWidth="2"
         fill="none"
        />
        <path
         d="M9 12l2 2 4-4"
         stroke="currentColor"
         strokeWidth="2"
         fill="none"
        />
       </svg>
      </div>
      <span className={perk.highlighted ? 'font-bold' : ''}>{perk.text}</span>
     </li>
    ))}
   </ul>

   <div className="mt-auto w-full">
    <Button {...button} />
   </div>
  </div>
 )
}
