import useMyAxios from '@/hooks/useMyAxios'
import useRequest from '@/hooks/useRequest'
import { NewsType, SitePlatform } from '@/lib/enums'
import { useStore } from '@/store/useStore'
import { ListReqBase, Pagination, ResBase } from '@/types'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export type News = {
  id: number
  title: string
  content: string
  startAtMs: number
  endAtMs: number
  type: string
  isActive: boolean
  platform: number
  link: string
  isNewWin: boolean
  isTop: boolean
  sort: number
}

export interface Meta {
  pagination: Pagination
}

export interface NewsListRes extends ResBase {
  data: News[]
  meta: Meta
}

export interface NewsListReq extends ListReqBase {
  // keyword?: string
  // start_at?: number
  // end_at?: number
  // is_active?: boolean
  type?: NewsType
}

function useNewsList({ type: _type, page, perpage }: NewsListReq) {
  const { canRecharge } = useStore((s) => s.clientEnv)
  const request = useRequest()
  const type = _type !== NewsType.ALL ? _type : undefined
  const platform = canRecharge ? SitePlatform.MAIN : SitePlatform.SECONDARY
  const { data, isValidating } = useSWR(
    ['public/apis/v1/news/list', type, platform, page, perpage],
    (url, type, platform, page, perpage) =>
      request<NewsListRes>({
        url,
        method: 'get',
        config: {
          params: { typeIn: type, platform, page, perpage },
        },
      }),
  )

  return {
    list: data?.data || [],
    paginator: data?.meta?.pagination,
    isLoading: isValidating,
  }
}

export default useNewsList
