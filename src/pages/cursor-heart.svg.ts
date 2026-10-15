import type { APIRoute } from 'astro'
import { heart } from '../data/sprites'
import { spriteSvg } from '../lib/pixel'

export const GET: APIRoute = () =>
  new Response(spriteSvg(heart, { scale: 3 }), {
    headers: { 'Content-Type': 'image/svg+xml' },
  })
