import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const params = searchParams.get('params')

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 })
  }

  try {
    const result = await client.fetch(
      query,
      params ? JSON.parse(params) : undefined
    )

    return NextResponse.json({ result })
  } catch (error) {
    console.error('Error executing Sanity query:', error)
    return NextResponse.json(
      { error: 'Failed to execute query' },
      { status: 500 }
    )
  }
} 