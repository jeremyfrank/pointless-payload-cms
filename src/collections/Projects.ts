import { CollectionConfig } from 'payload/types'
import { populatePublishedDate } from '../hooks/populatePublishedDate'

const Projects: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'publishedDate'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
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
      name: 'url',
      type: 'text',
    },
    {
      name: 'twitter',
      type: 'text',
      label: 'Twitter Handle',
    },
    {
      name: 'type',
      type: 'relationship',
      required: true,
      hasMany: false,
      relationTo: 'project-types',
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'launchDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'retiredDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
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
  hooks: {
    beforeChange: [populatePublishedDate],
  },
  slug: 'projects',
}

export default Projects
