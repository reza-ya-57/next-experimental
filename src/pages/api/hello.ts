// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import path  from 'path';
import { dirname } from 'path';
import fs from 'fs';
import xlsx from 'node-xlsx';




type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
    console.log(module.exports)
      // type obj = any
      // var obj  = xlsx.parse(__dirname + 'E:\\Dev\\Next\\next-experimental\\server\\testexcel.xlsx'); // parses a file
      // var obj = xlsx.parse(fs.readFileSync(__dirname + '/testexcel.xlsx'));
      // res.send(obj[0].data[1][2])
  res.status(200).json({ name: 'asghar' })
}
