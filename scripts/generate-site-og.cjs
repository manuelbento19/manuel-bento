const { readFile, writeFile } = require('node:fs/promises')
const path = require('node:path')
const satoriModule = require('satori')
const satori = satoriModule.default ?? satoriModule
const { Resvg } = require('@resvg/resvg-js')

const root = process.cwd()
const fontPath = path.join(root, 'src', 'app', 'fonts', 'og', 'noto-sans-v27-latin-regular.ttf')
const photoPath = path.join(root, 'public', 'myself-cutout.png')
const outPath = path.join(root, 'public', 'og.png')

function el(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children
    }
  }
}

function mimeOf(buffer) {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return 'image/jpeg'
  if (buffer[0] === 0x89 && buffer[1] === 0x50) return 'image/png'
  if (buffer.toString('ascii', 0, 4) === 'RIFF') return 'image/webp'
  return 'image/png'
}

async function loadFont(weight) {
  const file = await readFile(fontPath)
  const data = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength)
  return { name: 'Noto Sans', data, weight }
}

async function loadPhoto() {
  const file = await readFile(photoPath)
  return `data:${mimeOf(file)};base64,${file.toString('base64')}`
}

function renderCard({ photo }) {
  return el(
    'div',
    {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #18181b 0%, #09090b 60%)'
      }
    },
    el(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 72px',
          width: '62%',
          height: '100%',
          gap: '24px'
        }
      },
      el(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }
        },
        el(
          'span',
          {
            style: {
              display: 'flex',
              width: '16px',
              height: '16px',
              borderRadius: '4px',
              background: '#fafafa'
            }
          }
        ),
        el(
          'span',
          {
            style: {
              display: 'flex',
              color: '#a1a1aa',
              fontSize: '28px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }
          },
          'Portfolio'
        )
      ),
      el(
        'div',
        {
          style: {
            display: 'flex',
            color: '#fafafa',
            fontSize: '88px',
            fontWeight: 800,
            lineHeight: 1
          }
        },
        'Manuel'
      ),
      el(
        'div',
        {
          style: {
            display: 'flex',
            color: '#fafafa',
            fontSize: '88px',
            fontWeight: 300,
            lineHeight: 1
          }
        },
        'Bento'
      ),
      el(
        'div',
        {
          style: {
            display: 'flex',
            color: '#71717a',
            fontSize: '28px',
            fontWeight: 500,
            letterSpacing: '1px'
          }
        },
        'Software Developer · Frontend Specialist'
      )
    ),
    el(
      'div',
      {
        style: {
          display: 'flex',
          width: '38%',
          height: '100%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }
      },
      el('img', {
        src: photo,
        style: {
          display: 'flex',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'bottom right'
        }
      })
    )
  )
}

async function main() {
  const fonts = await Promise.all([loadFont(400), loadFont(500), loadFont(700), loadFont(800)])
  const photo = await loadPhoto()

  const svg = await satori(renderCard({ photo }), {
    width: 1200,
    height: 630,
    fonts
  })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
  await writeFile(outPath, png)
  console.log(`og.png regenerated (${(png.length / 1024).toFixed(0)} kB)`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})