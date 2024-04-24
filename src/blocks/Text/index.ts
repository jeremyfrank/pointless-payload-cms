import type { Block } from 'payload/types'

export const Text: Block = {
  slug: 'text',
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
  ],
}
