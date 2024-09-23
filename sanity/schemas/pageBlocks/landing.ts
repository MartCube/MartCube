import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingSection',
  title: 'Landing',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Landing',
      }
    },
  },
})
