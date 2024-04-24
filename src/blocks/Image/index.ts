import type { Block } from 'payload/types'

export const Image: Block = {
  slug: 'image',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}
