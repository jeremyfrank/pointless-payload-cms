import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { webpackBundler } from '@payloadcms/bundler-webpack' // bundler-import
import { slateEditor } from '@payloadcms/richtext-slate' // editor-import
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Media from './collections/Media'
import Projects from './collections/Projects'
import ProjectTypes from './collections/ProjectTypes'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(), // bundler-config
  },
  editor: slateEditor({}), // editor-config
  collections: [Users, Media, Projects, ProjectTypes],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // database-adapter-config-end
})
