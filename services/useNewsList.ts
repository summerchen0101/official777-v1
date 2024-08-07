import useMyAxios from '@/hooks/useMyAxios'
import useRequest from '@/hooks/useRequest'
import { NewsType, SitePlatform } from '@/lib/enums'
import { useStore } from '@/store/useStore'
import { ListReqBase, Pagination, ResBase } from '@/types'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export type News = {
  id: string
  title: string
  content: string
  category: number
  createTimeMs: number
  isRedirect: number
}

export interface Meta {
  pagination: Pagination
}

export interface NewsListRes extends ResBase {
  news: News[]
  meta: Meta
}

export interface NewsListReq extends ListReqBase {
  category?: NewsType
}

function useNewsList({ category, page, perpage }: NewsListReq) {
  const request = useRequest()
  const { data, isValidating } = useSWR(
    ['public/apis/v1/news/list', category, page, perpage],
    (url, category, page, perpage) =>
      request<NewsListRes>({
        url,
        method: 'get',
        config: {
          params: { category, page, perpage },
        },
      }),
  )

  return {
    list: data?.news || [],
    paginator: data?.meta?.pagination,
    isLoading: isValidating,
  }
}

export default useNewsList
