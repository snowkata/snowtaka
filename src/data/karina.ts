// ✦ Todo el contenido editable de la página vive aquí ✦
// Cambia lo que está entre comillas y guarda: con `pnpm dev` se ve al instante.

// 1) Textos generales
export const site = {
  title: 'KARINA ✦ pixel world', // título de la pestaña del navegador
  description: 'Un pequeño rincón en pixel art dedicado a KARINA, líder de aespa.',
  kicker: 'snowkata · aespa', // texto pequeño arriba del nombre
  name: 'KARINA', // título grande
  subtitle: '카리나 · 유지민 · LEADER',
  hint: '↑',
  startButton: '▶ PRESS START',
  stagesButton: '♪ STAGES',
  statusTitle: 'STATUS ✦ KARINA',
  stagesTitle: 'SELECT STAGE ♪',
  stagesTip: 'MV ↗ abre YouTube',
  photosTitle: 'MEMORY CARD ♡',
  photosTip: 'Memories',
  emptySlot: 'VACÍO',
  footer: 'hecho con ♥ por snowkata',
  legal: 'Fan page · sin relación con SM Entertainment',
}

// 2) Caja de diálogo (se escribe letra por letra)
export const dialog =
  '¡Hola, MY´s! ♡ Este es un pequeño rincón en pixel art dedicado a KARINA de aespa. Por ahora es solo una página de prueba… pero ya tiene corazón.'

// 3) Frases del globo cuando haces clic en el retrato
export const phrases = [
  '안녕, MY! ♡',
  'Next Level ✦',
  '¡Supernova! ✧',
  'MY, 사랑해 ♥',
  '¿Siguiente stage?',
  'Whiplash ⚡',
  '♪ ♫ ♪',
]

// 4) Ficha de personaje
export const profile = [
  { label: 'NOMBRE', value: 'KARINA · 카리나' },
  { label: 'REAL', value: 'Yu Jimin · 유지민' },
  { label: 'NACIÓ', value: '11.04.2000' },
  { label: 'GRUPO', value: 'aespa · 에스파' },
  { label: 'CLASE', value: 'LÍDER ★' },
  { label: 'DEBUT', value: '17.11.2020 · Black Mamba' },
  { label: 'PARTY', value: 'Giselle · Winter · Ningning' },
  { label: 'FANDOM', value: 'MY ♡' },
]

// Barras de stats (0 a 100)
export const stats = [
  { label: 'CARISMA', value: 99 },
  { label: 'BAILE', value: 98 },
  { label: 'VISUAL', value: 100 },
  { label: 'STAGE', value: 99 },
]

// 5) Canciones (cartas de SELECT STAGE + música de fondo)
// `audio` es el archivo en public/musica/. Al hacer clic en la carta suena ese audio,
// y el botón ♪ BGM reproduce todas en este orden. Si una carta no tiene audio
// (o el archivo no existe), la carta abre el MV en YouTube.
export type Stage = {
  title: string
  year: number
  color: string
  artist?: string
  bonus?: boolean
  audio?: string
}

export const stages: Stage[] = [
  { title: 'Black Mamba', year: 2020, color: '#7dffb2', audio: '/musica/aespa_Black_Mamba_Instrumental.mp3' },
  { title: 'Next Level', year: 2021, color: '#7ef0ff', audio: '/musica/aespa_-_Next_Level_Official_Instrumental.mp3' },
  { title: 'Savage', year: 2021, color: '#ff7aa8', audio: '/musica/aespa_-_Savage_Instrumental.mp3' },
  { title: 'Girls', year: 2022, color: '#c9a8ff', audio: '/musica/aespa_-_Girls_Official_Instrumental.mp3' },
  { title: 'Spicy', year: 2023, color: '#ff9b5e', audio: '/musica/aespa_Spicy_Official_Instrumental.mp3' },
  { title: 'Drama', year: 2023, color: '#ff5e7a', audio: '/musica/aespa_Drama_Official_Instrumental.mp3' },
  { title: 'Supernova', year: 2024, color: '#ffe066', audio: '/musica/aespa_-_Supernova_Instrumental.mp3' },
  { title: 'Whiplash', year: 2024, color: '#b8c4ff', audio: '/musica/aespa_Whiplash_Official_Instrumental.mp3' },
  {
    title: 'UP',
    year: 2024,
    color: '#ffffff',
    artist: 'KARINA',
    bonus: true,
    audio: '/musica/aespa_UP_KARINA_Solo_Instrumental.mp3',
  },
]

// 6) Fotos de la "memory card"
// Lo mejor: guarda la foto en src/assets/fotos/ y escribe solo el nombre del archivo
// ('karina-07.jpg'). Astro la optimiza sola (WebP, tamaño justo).
// También sirven enlaces directos a la imagen (https://i.imgur.com/abc123.jpg, https://i.pinimg.com/...).
export const photos: { src: string; caption?: string }[] = [
  { src: 'karina-01.jpg', caption: 'White winter ❄' },
  { src: 'karina-02.jpg', caption: 'Blue sky ☁' },
  { src: 'karina-03.jpg', caption: 'Photocard ♡' },
  { src: 'karina-04.jpg', caption: 'Soft waves ✦' },
  { src: 'karina-05.jpg', caption: 'Black & silver' },
  { src: 'karina-06.jpg', caption: 'i luv u ♡' },
]
