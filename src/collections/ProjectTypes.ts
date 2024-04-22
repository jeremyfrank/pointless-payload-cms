import { CollectionConfig } from 'payload/types'

const ProjectTypes: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'publishedDate'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      required: true,
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
    },
    {
      name: 'accentColor',
      type: 'text',
      required: true,
    },
    {
      name: 'textColor',
      type: 'text',
      required: true,
    },
    {
      name: 'linkColor',
      type: 'text',
      required: true,
    },
  ],
  slug: 'project-types',
}

export default ProjectTypes
