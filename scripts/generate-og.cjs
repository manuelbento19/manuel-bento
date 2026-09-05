const { readFile, mkdir, writeFile, readdir } = require('node:fs/promises')
const path = require('node:path')
const satoriModule = require('satori')
const satori = satoriModule.default ?? satoriModule
const { Resvg } = require('@resvg/resvg-js')
const matter = require('gray-matter')

const root = process.cwd()
const articlesDir = path.join(root, 'content', 'articles')
const fontPath = path.join(root, 'src', 'app', 'fonts', 'og', 'noto-sans-v27-latin-regular.ttf')
const outDir = path.join(root, 'public', 'og', 'articles')

function el(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children
    }
  }
}

async function loadFont(weight) {
  const file = await readFile(fontPath)
  const data = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength)
  return { name: 'Noto Sans', data, weight }
}

function mimeOf(buffer) {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return 'image/jpeg'
  if (buffer[0] === 0x89 && buffer[1] === 0x50) return 'image/png'
  if (buffer.toString('ascii', 0, 4) === 'RIFF') return 'image/webp'
  return 'image/png'
}

async function loadWallpaper(wallpaperPath) {
  if (!wallpaperPath) return null
  try {
    const file = await readFile(path.join(root, 'public', wallpaperPath))
    return `data:${mimeOf(file)};base64,${file.toString('base64')}`
  } catch {
    return null
  }
}

function renderCard({ wallpaper }) {
  if (!wallpaper) {
    return el(
      'div',
      { style: { display: 'flex', width: '100%', height: '100%', background: 'linear-gradient(135deg, #18181b 0%, #09090b 60%)' } }
    )
  }

  return el(
    'div',
    { style: { display: 'flex', width: '100%', height: '100%' } },
    el('img', {
      src: wallpaper,
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })
  )
}

async function main() {
  await mkdir(outDir, { recursive: true })

  const fonts = await Promise.all([loadFont(400), loadFont(500), loadFont(700), loadFont(800)])
  const files = (await readdir(articlesDir)).filter((file) => file.endsWith('.mdx'))

  for (const file of files) {
    const raw = await readFile(path.join(articlesDir, file), 'utf8')
    const { data } = matter(raw)
    const slug = file.replace(/\.mdx$/, '')
    const wallpaper = await loadWallpaper(data.wallpaper)

    const svg = await satori(
      renderCard({ title: data.title, date: data.date, tags: data.tags ?? [], wallpaper }),
      {
        width: 1200,
        height: 630,
        fonts
      }
    )
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
    await writeFile(path.join(outDir, `${slug}.png`), png)
    console.log(`og: ${slug}.png (${(png.length / 1024).toFixed(0)} kB)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})