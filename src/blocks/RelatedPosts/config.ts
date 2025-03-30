import type { Block } from 'payload'

export const RelatedPosts: Block = {
  slug: 'relatedPosts',
  interfaceName: 'RelatedPostsBlock',
  labels: {
    singular: 'Cétgorie',
    plural: 'Categories',
  },
  fields: [
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Select Category',
      required: true,
    },
    ]
}
