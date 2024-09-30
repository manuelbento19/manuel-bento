import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    wallpaper: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    date: { type: 'date', required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article]
})
