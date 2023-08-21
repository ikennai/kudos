import NextAuth from 'next-auth';
import { options } from './options';

const handler = NextAuth(options);

export { handler as GET, handler as POST };

// Understand advanced implementation

/*
import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    ...
  })
}
*/
