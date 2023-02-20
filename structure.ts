import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

// Customise this function to show the correct URL based on the current document
// function getPreviewUrl(doc: SanityDocument) {
//   return doc?.slug?.current
//     ? `${window.location.host}/${doc.slug.current}`
//     : `${window.location.host}`
// }

// Import this into the deskTool() plugin
export const createDefaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `post` schema type documents this will need updating later on to include other areas of the site we wish to a preview of in the studio
  switch (schemaType) {
    case `post`:   
      return S.document().views([
        //the S.view.form is the input form for the post we are looking at, in the sanity studio
        S.view.form(),
        //the second view is one we are creating below which will be the iframe of the post we want to see. 
        S.view
          .component(Iframe)
          .options({
            // url: (doc: SanityDocument) => getPreviewUrl(doc),
            url: `${process.env.PRODUCTION_URL || "http://localhost:3000"}/api/preview`,
            reload: {
                button: true, // default `undefined`
              },
              attributes: {}
          })
          .title('Preview'),
          
      ])
    default:
      return S.document().views([S.view.form()])
  }
}