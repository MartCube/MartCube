import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'

const config = defineConfig({
  title: 'martcube',
  projectId: 'n11vgkgk',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(listItem => !['media.tag', 'articleTag'].includes(listItem.getId() ?? '')),
          ]),
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
})

export default config
