import {defineType, defineField } from 'sanity'

export default defineType({
  name: "chatMessage",
  title: "ChatMessage",
  type: "document",
  fields: [
    defineField({
        name: 'description',
        description: 'Enter a short description/usecase for the chat',
        title: "Description",
        type: 'string',
      }),
      defineField({
        name: 'chat',
        description: "Enter the content of the chat",
        title: 'Chat',
        type: 'blockContent',
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      }),
      defineField({
        name: 'chatTypes',
        title: 'ChatTypes',
        type: 'array',
        of: [{type: 'reference', to: {type: 'chatType'}}],
      }),
      defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
  ]
})  