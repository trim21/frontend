import ky, { Input, Options } from 'ky'

export const client = ky.create({
  prefixUrl: import.meta.env.VITE_PRIVATE_API_ROOT,
  credentials: 'include',
  timeout: 6000
})

export async function privateGet (url: Input, options?: Options): Promise<any> {
  return await client.get(url, options).json()
}
