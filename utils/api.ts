import { defu } from 'defu'
import { toast } from 'vue-sonner'

interface FetchOptions {
  headers?: Record<string, string>
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: string | FormData
  [key: string]: any
}

interface APIResponse<T> {
  status: number
  message: string
  data: T
}

interface ErrorResponse {
  data: {
    statusMessage?: string
    [key: string]: any
  }
  [key: string]: any
}

/**
 * Custom hook to make API calls with proper authentication and error handling.
 *
 * @param api - The API endpoint to fetch.
 * @param options - Optional fetch options.
 * @returns A promise resolving to the API response or rejecting with an error.
 */
export function useAPI<T>(api: string, options?: FetchOptions): Promise<APIResponse<T>> {
  const storeLogin = useLoginStore()

  return $fetch<APIResponse<T>>(api, defu(options || {}, {
    headers: {
      Authorization: `Bearer ${storeLogin.getToken || ''}`,
    },
  }))
    .then((response) => {
      if (response.status > 201) {
        toast.error(response.message)
        return Promise.reject(response)
      }
      else {
        return Promise.resolve(response)
      }
    })
    .catch((error: ErrorResponse) => {
      console.error('[useAPI Catch]', error)
      if (error?.data?.statusMessage) {
        toast.error(error.data.statusMessage)
      }
      return Promise.reject(error)
    })
}
