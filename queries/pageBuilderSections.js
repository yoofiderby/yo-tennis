import { blockContentFragment } from './partials'
import { plansSectionFragment } from './sections/plansSectionFragment'
import { statsSectionFragment } from './sections/statsSectionFragment'
import {
 aboutMeHeaderSectionFragment,
 aboutMeSliderSectionFragment,
 heroSectionFragment,
 pageHeaderSectionFragment,
 testimonialSectionRefFragment,
 faqSectionFragment,
 cardsSectionRefFragment,
 videoTestimonialsSectionRefFragment,
 teamSectionFragment,
 contactSectionFragment,
} from './sections'
import { allClassesSectionFragment } from './sections/allClassesSectionFragment'

export const pageBuilderSections = `
    ${blockContentFragment},
    ${heroSectionFragment},
    ${statsSectionFragment},
    ${testimonialSectionRefFragment},
    ${pageHeaderSectionFragment},
    ${aboutMeHeaderSectionFragment},
    ${aboutMeSliderSectionFragment},
    ${faqSectionFragment},
    ${cardsSectionRefFragment},
    ${videoTestimonialsSectionRefFragment},
    ${plansSectionFragment},
    ${teamSectionFragment},
    ${contactSectionFragment},
    ${allClassesSectionFragment}
`
