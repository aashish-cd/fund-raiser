const recommendFundraisers = require('@/model/fundraiserrecommend.ts')
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(recommendFundraisers('bhattaashish303@gmail.com'))
  const data = recommendFundraisers('bhattaashish303@gmail.com', 10)
  res.status(200).json({ data })
}
