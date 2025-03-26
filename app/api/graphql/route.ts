import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'
import { typeDefs } from '@/lib/graphql/schema'
import { resolvers } from '@/lib/graphql/resolvers'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer)

export { handler as GET, handler as POST }