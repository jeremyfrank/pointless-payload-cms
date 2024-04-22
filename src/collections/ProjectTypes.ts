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
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
    },
    {
      name: 'accentColor',
      type: 'text',
    },
    {
      name: 'textColor',
      type: 'text',
    },
    {
      name: 'linkColor',
      type: 'text',
    },
  ],
  slug: 'project-types',
}

export default ProjectTypes
