// Pixel art dibujado a mano: cada carácter es un pixel y '.' es transparente.
// Para editar un sprite basta con cambiar las letras; los colores salen de `palette`.

export const palette: Record<string, string> = {
  K: '#170d24', // contorno
  H: '#2c2147', // cabello
  h: '#55468a', // brillo del cabello
  S: '#ffe4d8', // piel
  s: '#f4b8a8', // sombra de piel
  E: '#1f1230', // ojo
  I: '#8a63d2', // iris
  W: '#ffffff', // brillo de ojo
  B: '#ff9dbb', // rubor
  M: '#d9506f', // boca
  p: '#ff7aa8', // lengua / rosa
  C: '#eceaff', // outfit plateado
  c: '#a9a3dc', // sombra del outfit
  A: '#c7cdf5', // choker plateado
  P: '#b57bff', // acento morado
  G: '#ffffff', // destello
  L: '#8f7ad6', // nube
  l: '#6a55b8', // sombra de nube
}

// Retrato 32x32 inspirado en Karina: cabello largo negro con flequillo,
// ojos grandes, choker plateado y outfit metálico estilo aespa.
export const portrait = [
  '................................',
  '...........KKKKKKKKKK...........',
  '.........KKHHHHHHHHHHKK.........',
  '........KHHHHHHHHHHHHHHK........',
  '.......KHHHHHHHHHHHHHHHHK.......',
  '......KHHHHHHHHHHHHHHHHHHK......',
  '.....KHHHHHHhhhhhhhhHHHHHHK.....',
  '.....KHHHhhhHHHHHHHHhhhHHHK.....',
  '....KHHHhhHHHHHHHHHHHHhhHHHK....',
  '....KHHhHHHHHHHHHHHHHHHHhHHK....',
  '...KHHHHHHHHHHHHHHHHHHHHHHHHK...',
  '...KHHHHHHHHHHHHHHHHHHHHHHHHK...',
  '...KHHHHsHHHsHHHHHHsHHHsHHHHK...',
  '...KHHHHSSSHSSSHHSSSHSSSHHHHK...',
  '...KHHHHSKSSSSSSSSSSSSKSHHHHK...',
  '...KHHHHSKKKKKSSSSKKKKKSHHHHK...',
  '...KHHHHSSEWEESSSSEWEESSHHHHK...',
  '...KHHHHSSEIIESSSSEIIESSHHHHK...',
  '...KHHHHSSEIWESSSSEIWESSHHHHK...',
  '...KHHHHSBBSSSSSSSSSSBBSHHHHK...',
  '...KHHHHSSSSSSMSSMSSSSSSHHHHK...',
  '...KHHHHSSSSSSSMMSSSSSSSHHHHK...',
  '...KHHHHHsSSSSSSSSSSSSsHHHHHK...',
  '...KHHhHHHsSSSSSSSSSSsHHHhHHK...',
  '...KHHhHHHHKsssSSsssKHHHHhHHK...',
  '...KHHhHHHHHHAAPPAAHHHHHHhHHK...',
  '...KHhHHHHHcCCsSSsCCcHHHHHhHK...',
  '...KHhHHHHcCCCCSSCCCCcHHHHhHK...',
  '...KHhHHHcCCCCCPPCCCCCcHHHhHK...',
  '...KHHhHHcCCCCCCCCCCCCcHHhHHK...',
  '...KHHhHHPPPPPPPPPPPPPPHHhHHK...',
  '...KHHhHHcCCCCCCCCCCCCcHHhHHK...',
]

// Capas que se superponen al retrato (misma cuadrícula).
export const blinkOverlay = [
  ...Array(14).fill('................................'),
  '.........S............S.........',
  '.........SSSSS....SSSSS.........',
  '.........SSSSS....SSSSS.........',
  '.........KKKKK....KKKKK.........',
  '.........SSSSS....SSSSS.........',
  ...Array(13).fill('................................'),
]

export const happyOverlay = [
  ...Array(14).fill('................................'),
  '.........S............S.........',
  '.........SSSSS....SSSSS.........',
  '.........SSKKS....SKKSS.........',
  '.........SKSSK....KSSKS.........',
  '.........SSSSS....SSSSS.........',
  '................................',
  '..............MMMM..............',
  '..............SppS..............',
  ...Array(10).fill('................................'),
]

// Iconos pequeños
export const heart = [
  '.KK.KK.',
  'KppKppK',
  'KpGpppK',
  'KpppppK',
  '.KpppK.',
  '..KpK..',
  '...K...',
]

export const star = [
  '..G..',
  '..G..',
  'GGGGG',
  '..G..',
  '..G..',
]

export const sparkle = [
  '...P...',
  '...P...',
  '..PGP..',
  'PPGGGPP',
  '..PGP..',
  '...P...',
  '...P...',
]

export const note = [
  '..CCCCCC',
  '..CCCCCC',
  '..C....C',
  '..C....C',
  '.PC...PC',
  'PPP..PPP',
  'PP...PP.',
]

export const cloud = [
  '......LLLL..........',
  '....LLLLLLLL..LLL...',
  '..LLLLLLLLLLLLLLLLL.',
  '.LLLLLLLLLLLLLLLLLLL',
  'LLLLLLLLLLLLLLLLLLLL',
  '.llllllllllllllllll.',
]

export const cursorArrow = [
  'K.........',
  'KK........',
  'KWK.......',
  'KWWK......',
  'KWWWK.....',
  'KWWWWK....',
  'KWWWWWK...',
  'KWWWWWWK..',
  'KWWWWWWWK.',
  'KWWWWWKKKK',
  'KWWKWWK...',
  'KWK.KWWK..',
  'KK..KWWK..',
  'K....KWWK.',
  '.....KWWK.',
  '......KK..',
]
