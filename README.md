# snowkata ✦ KARINA pixel world

Página de prueba en pixel art dedicada a KARINA (aespa). Hecha con [Astro](https://astro.build) y es 100% estática.

## Comandos

```sh
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:4321
pnpm build       # genera el sitio en dist/
pnpm preview     # sirve dist/ para revisarlo antes de subirlo
```

## Dónde editar

| Qué | Archivo |
| --- | --- |
| Todos los textos, perfil, stats, canciones, fotos y música | `src/data/karina.ts` |
| Pixel art (retrato, corazón, nubes, cursor…) | `src/data/sprites.ts` |
| Página principal | `src/pages/index.astro` |
| Colores y estilos globales | `src/styles/global.css` |

Los sprites son texto: cada letra es un pixel y `.` es transparente. Los colores salen de `palette`.

## Fotos (memory card)

Agrega objetos al arreglo `photos` en `src/data/karina.ts`:

```ts
export const photos = [
  { src: 'karina-07.jpg', caption: 'Mi foto' },                    // archivo en src/assets/fotos/
  { src: 'https://i.imgur.com/XXXXXXX.jpg', caption: 'Whiplash' }, // enlace directo
]
```

- **Lo más confiable:** guarda la imagen en `src/assets/fotos/` y escribe solo el nombre del archivo.
  Astro la convierte a WebP y la reduce al tamaño necesario (necesita `sharp`, ya incluido).
- **Imgur / Pinterest:** usa el enlace *directo* a la imagen (`i.imgur.com/....jpg`, `i.pinimg.com/....jpg`),
  no el de la página del pin/post. Pueden bloquear el hotlinking o borrar la imagen; si una falla, el slot muestra "ERROR ✕".
- Las fotos se ven pixeladas; al pasar el cursor (o tocarlas en celular) se ven en HD.

## Música (cartas de STAGES + botón ♪ BGM)

Guarda los audios en `public/musica/` y pon la ruta en el campo `audio` de cada canción de `stages`
(en `src/data/karina.ts`):

```ts
{ title: 'Black Mamba', year: 2020, color: '#7dffb2', audio: '/musica/mi-archivo.mp3' },
```

- Clic en una carta → suena su audio (otro clic lo pausa). El botón **MV ↗** abre YouTube.
- El botón ♪ BGM de la barra superior reproduce todas en orden, y al terminar una pasa a la siguiente.
- Si una canción no tiene `audio` o el archivo no existe, su carta abre el MV en YouTube como antes.
- La música empieza apagada: los navegadores no permiten sonido automático hasta que el visitante hace clic.

## Subirlo a tu dominio

`pnpm build` y sube la carpeta `dist/` a cualquier hosting estático (Vercel, Netlify, Cloudflare Pages…).
En Vercel el framework se detecta solo (Astro): build `pnpm build`, output `dist`.

La barra superior muestra el dominio desde el que se abre la página y `HTTPS ✓` cuando el certificado funciona,
así puedes comprobar rápido que el DNS apunta bien.

## Easter egg

Código Konami (↑ ↑ ↓ ↓ ← → ← → B A) o el botón del footer → SUPERNOVA MODE.

---

Fan page no oficial, sin relación con SM Entertainment. Fuentes: Press Start 2P y Galmuri (licencia OFL).
