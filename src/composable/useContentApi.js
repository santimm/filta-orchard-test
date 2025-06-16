const API_BASE = import.meta.env.VITE_STRAPI_API_URL

export const useContentApi = () => {
  const fetchSingle = async (slug, query) => {
    try {
      const response = await fetch(`${API_BASE}/api/${slug}?populate${query}`)
      if (!response.ok) {
        throw new Error(`Error fetching content: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.log('Failed to fetch content:', error)
      throw error
    }
  }

  return { fetchSingle }
}
