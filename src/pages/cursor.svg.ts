import type { APIRoute } from 'astro'
import { cursorArrow } from '../data/sprites'
import { spriteSvg } from '../lib/pixel'

export const GET: APIRoute = () =>
  new Response(spriteSvg(cursorArrow, { scale: 2 }), {
    headers: { 'Content-Type': 'image/svg+xml' },
  })
