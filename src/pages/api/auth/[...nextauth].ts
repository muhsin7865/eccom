import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../lib/mongodb'
import { Adapter } from 'next-auth/adapters'
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "196320390597-bfo6vofcagem41ap8838guo8l9ujkm4f.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  adapter: MongoDBAdapter(clientPromise) as Adapter<boolean>
})
