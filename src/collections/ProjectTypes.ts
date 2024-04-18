import { CollectionConfig } from 'payload/types'

const ProjectTypes: CollectionConfig = {
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
  ],
  slug: 'project-types',
}

export default ProjectTypes
