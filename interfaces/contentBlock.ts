/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ContentBlocksProps {
 blocks: Block[]
}

export type Block = TextBlock | ChallengeBlock

export interface TextBlock {
 _type: 'textBlock'
 body: any // Use `any` for now if `blockContent` isn't explicitly typed, or define its structure
}

export interface ChallengeBlock {
 _type: 'challengeBlock'
 title: string
 description: string
}
