import { palette as defaultPalette } from '../data/sprites'

export type Sprite = readonly string[]

// Convierte un sprite de texto en <rect>s SVG, uniendo pixeles contiguos
// del mismo color en una sola fila para que el SVG quede ligero.
export function spriteRects(rows: Sprite, palette = defaultPalette): string {
  const out: string[] = []
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const ch = row[x]
      let run = 1
      while (row[x + run] === ch) run++
      if (ch !== '.') {
        const fill = palette[ch]
        if (!fill) throw new Error(`Color desconocido "${ch}" en la fila ${y}`)
        out.push(`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${fill}"/>`)
      }
      x += run
    }
  })
  return out.join('')
}

export function spriteSize(rows: Sprite) {
  const width = rows[0]?.length ?? 0
  rows.forEach((row, y) => {
    if (row.length !== width) throw new Error(`La fila ${y} mide ${row.length}, se esperaban ${width}`)
  })
  return { width, height: rows.length }
}

// SVG completo (para favicon, cursores, etc.). `scale` multiplica el tamaño intrínseco.
export function spriteSvg(rows: Sprite, { scale = 1, palette = defaultPalette } = {}) {
  const { width, height } = spriteSize(rows)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges">${spriteRects(rows, palette)}</svg>`
}
