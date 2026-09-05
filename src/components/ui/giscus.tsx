'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { useLocale } from 'next-intl'

const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

const enabled = Boolean(repo && repoId && category && categoryId)

function themeName(resolvedTheme?: string) {
  return resolvedTheme === 'dark' ? 'transparent_dark' : 'light'
}

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const locale = useLocale()

  useEffect(() => {
    if (!enabled || !ref.current) return
    if (ref.current.dataset.giscusLoaded === 'true') return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.dataset.repo = repo!
    script.dataset.repoId = repoId!
    script.dataset.category = category!
    script.dataset.categoryId = categoryId!
    script.dataset.mapping = 'pathname'
    script.dataset.strict = '0'
    script.dataset.reactionsEnabled = '1'
    script.dataset.emitMetadata = '0'
    script.dataset.inputPosition = 'top'
    script.dataset.theme = themeName(resolvedTheme)
    script.dataset.lang = locale
    ref.current.setAttribute('data-giscus-loaded', 'true')
    ref.current.appendChild(script)
  }, [locale, resolvedTheme])

  useEffect(() => {
    if (!enabled) return

    const sendMessage = () => {
      const frame = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
      frame?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: themeName(resolvedTheme) } } },
        'https://giscus.app'
      )
    }

    const interval = window.setInterval(() => {
      if (document.querySelector('iframe.giscus-frame')) {
        sendMessage()
        window.clearInterval(interval)
      }
    }, 300)

    return () => window.clearInterval(interval)
  }, [resolvedTheme])

  if (!enabled) return null

  return <div ref={ref} />
}