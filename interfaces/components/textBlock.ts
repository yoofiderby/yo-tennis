import { PortableTextReactComponents } from 'next-sanity';

export interface TextBlockProps {
    content: any;
    components: Partial<PortableTextReactComponents>;
  }