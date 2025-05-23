import { ButtonProps } from './components/button'

export interface Icon {
 iconUrl?: string
 alt: string
}

export interface SocialIcon {
  icon:Icon
  url: string;
  title: string;
}

export interface PreHeading {
 icon: Icon
 text: string
}

export interface TechnologyTagProps {
 _id?: string
 technologyName?: string
 icon?: Icon
 alt?: string
 tag?: TechnologyTagProps
}

export interface TechnologyTags {
 technologyTags: TechnologyTagProps[]
}

export interface TechnologyGroupProps {
    technologyTags?: TechnologyTagProps[]
 technologyCategory: string
}
export interface MyCreativeToolboxSection {
 preHeading: PreHeading
 heading: string
 description: string
 technologyGroups: TechnologyGroupProps[]
 button: ButtonProps
}

export interface OGImage {
 url: string
 width: number
 height: number
 alt: string
}
