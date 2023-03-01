import type { NextApiRequest, NextApiResponse } from "next"

export default function previewChatTexts (req: NextApiRequest, res:NextApiResponse) {
    res.setPreviewData({})
    res.writeHead(307, {Location: '/chatTexts'})
    res.end()
}