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

const accent = '#34d399'
const ptMonths = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
]

function formatDatePt(date) {
  const d = new Date(`${date}T00:00:00Z`)
  return `${d.getUTCDate()} ${ptMonths[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

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

function renderCard({ title, date, tags }) {
  const shortTitle = title.length > 92 ? `${title.slice(0, 89)}…` : title
  const shortTags = tags.slice(0, 5)

  return el(
    'div',
    {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #18181b 0%, #09090b 60%)',
        padding: '72px 72px 64px',
        color: '#fafafa',
        fontFamily: 'Noto Sans'
      }
    },
    el(
      'div',
      { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
      el(
        'div',
        { style: { display: 'flex', alignItems: 'center', gap: '14px' } },
        el('div', { style: { display: 'flex', width: '22px', height: '22px', borderRadius: 999, backgroundColor: accent } }),
        el('div', { style: { display: 'flex', fontSize: '30px', fontWeight: 500, letterSpacing: '0.2em', color: '#d4d4d8' } }, 'BENTOOO')
      ),
      el('div', { style: { display: 'flex', fontSize: '28px', color: '#71717a' } }, formatDatePt(date))
    ),
    el(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '36px' } },
      el(
        'div',
        { style: { display: 'flex', fontSize: '68px', lineHeight: 1.08, fontWeight: 800, maxWidth: '1000px' } },
        shortTitle
      ),
      el(
        'div',
        { style: { display: 'flex', gap: '16px' } },
        shortTags.map((tag) =>
          el(
            'div',
            {
              style: {
                display: 'flex',
                padding: '12px 28px',
                borderRadius: 999,
                border: '2px solid #3f3f46',
                color: '#d4d4d8',
                fontSize: '28px',
                fontWeight: 500
              }
            },
            `#${tag}`
          )
        )
      )
    ),
    el(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
      el('div', { style: { display: 'flex', height: '2px', flex: 1, backgroundColor: '#27272a' } }),
      el('div', { style: { display: 'flex', fontSize: '26px', color: '#a1a1aa', fontWeight: 500 } }, 'manuelbento.dev')
    )
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

    const svg = await satori(renderCard({ title: data.title, date: data.date, tags: data.tags ?? [] }), {
      width: 1200,
      height: 630,
      fonts
    })
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
    await writeFile(path.join(outDir, `${slug}.png`), png)
    console.log(`og: ${slug}.png (${(png.length / 1024).toFixed(0)} kB)`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})