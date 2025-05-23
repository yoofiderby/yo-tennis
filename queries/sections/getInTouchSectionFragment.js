import { sectionHeaderFragment } from '../partials'

export const getInTouchSectionFragment = `_type == "getInTouchSection" => {
   sectionHeader ${sectionHeaderFragment},
   }
   `
