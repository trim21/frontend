import ky, { Options } from 'ky'
import { Input } from 'ky/distribution/types/options'

export const client = ky.create({
  prefixUrl: import.meta.env.VITE_PRIVATE_API_ROOT,
  credentials: 'include',
  timeout: 6000
})

export async function privateGet (url: Input, options?: Options): Promise<any> {
  const res = await client.get(url, options)
  return await res.json()
}
