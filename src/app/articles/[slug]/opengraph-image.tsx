import { readFile } from 'fs/promises'
import path from 'path'
import { ImageResponse } from 'next/og'
import { getArticleMeta } from '@/lib/articles'
import { formatDate } from '@/lib/utils'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const fontDir = path.join(process.cwd(), 'src', 'app', 'fonts', 'og')

async function loadFont(weight: 400 | 500 | 700 | 800) {
  const file = await readFile(path.join(fontDir, 'noto-sans-v27-latin-regular.ttf'))
  const data = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength) as ArrayBuffer
  return { name: 'Noto Sans', data, weight }
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = getArticleMeta(slug)
  if (!meta) return new Response('Not found', { status: 404 })

  const fonts = await Promise.all([loadFont(400), loadFont(500), loadFont(700), loadFont(800)])
  const title = meta.title.length > 92 ? `${meta.title.slice(0, 89)}…` : meta.title
  const tags = meta.tags.slice(0, 5)
  const accent = '#34d399'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #18181b 0%, #09090b 60%)',
          padding: '72px 72px 64px',
          color: '#fafafa',
          fontFamily: 'Noto Sans'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: 999, backgroundColor: accent }} />
            <div style={{ fontSize: '30px', fontWeight: 500, letterSpacing: '0.2em', color: '#d4d4d8' }}>
              BENTOOO
            </div>
          </div>
          <div style={{ fontSize: '28px', color: '#71717a' }}>
            {formatDate(meta.date, 'pt')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div style={{ fontSize: '68px', lineHeight: 1.08, fontWeight: 800, maxWidth: '1000px' }}>
            {title}
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  padding: '12px 28px',
                  borderRadius: 999,
                  border: '2px solid #3f3f46',
                  color: '#d4d4d8',
                  fontSize: '28px',
                  fontWeight: 500
                }}
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ height: '2px', flex: 1, backgroundColor: '#27272a' }} />
          <div style={{ fontSize: '26px', color: '#a1a1aa', fontWeight: 500 }}>manuelbento.dev</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}