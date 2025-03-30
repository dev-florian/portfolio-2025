import type {Block} from 'payload'
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const TitleHeader: Block = {
  slug: 'titleHeader',
  interfaceName: 'TitleHeaderBlock',
  labels: {
    singular: 'Title header',
    plural: 'Title headers',
  },
  fields: [
    {
      name: 'title',
      type: 'richText',
      editor: lexicalEditor({}),
      label: 'Title',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'richText',
      editor: lexicalEditor({}),
      label: 'Sous titre',
      required: false,
    },
  ]
}
