import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNav from './components/StudioNavbar';
import { createDefaultDocumentNode } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Knowledge_Base',
  title: 'Knowledge_Base_Studio',
  projectId,
  dataset,
  images: {
    // Add your image configuration here
    domains: ['cdn.sanity.io'],
  },
  plugins: [deskTool({
    defaultDocumentNode: createDefaultDocumentNode
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
   studio: {
    components: {
      // logo: Logo,
      navbar: StudioNav, 

    }
   },

  theme: myTheme
})

