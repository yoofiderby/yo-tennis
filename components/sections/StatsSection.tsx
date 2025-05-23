'use client'
import { StatsSectionProps } from '@/interfaces/statsSection'
import Button from '../Button'
import Image from 'next/image'
import { useState } from 'react'
import SectionTitle from '@/components/sectionTitle'

export default function StatsSection({ heading, button, stats, thumbnail, video }: StatsSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative py-20">
      {/* Black background for top half */}
      <div className="absolute top-0 left-0 right-0 h-[70%] md:h-[60%] bg-[#071008]">
        <div className="absolute inset-0">
          <Image
            src="/background_overlay.png"
            alt="Background pattern"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
      </div>
      
      <div className="container relative mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden mb-16">
          <SectionTitle 
            variant="white"
            size="default"
            as="h2"
            className="mb-8 text-left"
          >
            {heading}
          </SectionTitle>
          {button && <div className="mb-12"><Button {...button} /></div>}
          
          <div className="w-full grid grid-cols-2 gap-x-8 gap-y-16 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <SectionTitle
                  variant="white"
                  size="default"
                  className="mb-4"
                >
                  {stat.value}
                </SectionTitle>
                <div className="text-white">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-row justify-between items-start mb-32 text-white">
          <div className="md:w-1/2">
            <SectionTitle 
              variant="white"
              size="default"
              as="h2"
              className="mb-8"
            >
              {heading}
            </SectionTitle>
            {button && <Button {...button} />}
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-x-8 gap-y-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <SectionTitle
                  variant="white"
                  size="default"
                  className="mb-4"
                >
                  {stat.value}
                </SectionTitle>
                <div className="text-white">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-[calc(100%-40px)] max-w-[1280px] h-[400px] lg:h-[600px] overflow-hidden rounded-lg -mt-8 md:-mt-16 shadow-2xl flex-shrink-0 mx-auto">
          {/* Thumbnail Image */}
          {!isVideoPlaying && (
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Image
                src={thumbnail.url || ''}
                alt={thumbnail.alt || 'Video thumbnail'}
                fill
                className="object-cover"
                priority
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <svg
                  className="w-16 md:w-20 h-16 md:h-20 text-white opacity-80 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Video Element */}
          {isVideoPlaying && (
            <video
              src={video.asset.url}
              className="w-full h-full object-cover"
              controls
              autoPlay
              onEnded={() => setIsVideoPlaying(false)}
            />
          )}
        </div>
      </div>
    </section>
  )
} 