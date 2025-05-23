import { CustomImage } from './components/customImage'

export interface TeamMember {
  _id: string
  name: string
  designation: string
  bio?: string
  image: CustomImage
  socialLinks?: {
    platform: 'linkedin' | 'twitter' | 'instagram'
    url: string
  }[]
}

export interface TeamSectionProps {
  heading: string
  backgroundHeading: string
  teamMembers: TeamMember[]
} 