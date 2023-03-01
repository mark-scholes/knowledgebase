import type { NextApiRequest, NextApiResponse } from "next"
import {client} from '../../../lib/sanity.client'

export default async function previewChatTexts (req: NextApiRequest, res:NextApiResponse) {
    const {slug} = req.query;

    if (!slug){
        return 
        res.status(404).end()
    }

    const query = `*[slug.current == $slug]{
        "slug": slug.current
      }`
    const results = await client.fetch(query, {slug})

    if (!results.length){
        return res.status(404).end()
    }
    res.setPreviewData({})
    res.writeHead(307, {Location: `/post/${results[0].slug}`})
    res.end()
}