import { Metadata } from 'next'

export const DEFAULT_METADATA: Metadata = {
  title: 'Yo! Tennis | Cardio Tennis & Fitness Community',
  description:
    'Join Yo! Tennis to boost your fitness and tennis skills through high-energy cardio tennis workouts, group classes, and private lessons in a fun, community-driven environment.',
  keywords: [
    'Cardio Tennis',
    'Tennis Fitness',
    'Group Tennis Classes',
    'Private Tennis Lessons',
    'Tennis Workouts',
    'Fitness Community',
    'Tennis Skills',
    'Cardiovascular Health',
    'Tennis Drills',
    'Yoofi Tennis',
    'Newark Tennis',
    'New Jersey Tennis',
    'Tennis Coaching',
    'Fun Fitness',
    'Group Fitness',
  ],
  authors: [{ name: 'Yoofi' }],
  openGraph: {
    title: 'Yo! Tennis | Cardio Tennis & Fitness Community',
    description:
      'Elevate your fitness and tennis game with Yo! Tennis. Enjoy high-intensity cardio tennis workouts, group classes, and private lessons in a supportive, fun community.',
    url: 'https://yo-tennis.com', // Replace with actual website URL
    siteName: 'Yo! Tennis',
    images: [
      {
        url: 'https://yo-tennis.com/meta-image-yotennis.png', // Replace with actual image URL
        width: 1200,
        height: 627,
        alt: 'Yo! Tennis Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  } as Required<Metadata>['openGraph'], // Ensure openGraph is fully defined
  twitter: {
    card: 'summary_large_image',
    title: 'Yo! Tennis | Cardio Tennis & Fitness Community',
    description:
      'Join Yo! Tennis for fun, high-energy cardio tennis workouts and group classes that boost fitness and tennis skills in a vibrant community.',
    images: ['https://yo-tennis.com/meta-image-yotennis.png'], // Replace with actual image URL
  },
  icons: {
    icon: '/favicon.ico', // Replace with actual favicon path
    apple: '/apple-icon.png', // Replace with actual apple icon path
  },
}