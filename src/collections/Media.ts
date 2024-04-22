import type { CollectionConfig } from 'payload/types'

import { LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

const Media: CollectionConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
    {
      name: 'caption',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [LinkFeature({})],
      }),
      type: 'richText',
    },
  ],
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
}

export default Media
