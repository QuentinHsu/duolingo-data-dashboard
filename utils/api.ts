import { defu } from 'defu'
import { toast } from 'vue-sonner'

export function useAPI(api: string, options?: object): Promise<unknown> {
  const storeLogin = useLoginStore()

  return $fetch(api, defu(options || {}, {
    headers: {
      Authorization: `Bearer ${storeLogin.$state.token || ''}`,
    },
  })).catch((error) => {
    if (error?.data?.statusMessage) {
      toast(error?.data?.statusMessage)
    }
    return Promise.reject(error)
  })
}
