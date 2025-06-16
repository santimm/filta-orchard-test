const MEDIA_BASE_URL = import.meta.env.VITE_STRAPI_MEDIA_URL || ''

export function getImageUrl(url) {
  if (!url) return ''
  return url.startsWith('http') ? url : `${MEDIA_BASE_URL}${url}`
}
