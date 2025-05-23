import { globalLinksFragment } from './globalLinksFragment';

export const callToActionFragment = `{
  text,
  email,
  meetingText,
  meetingLink-> ${globalLinksFragment}
}`;
