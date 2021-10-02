import { apiPath } from './../utils/useRequest'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface RechargeRecListReq {
  paymentStatus: number
  paymentGateway: number
  createdAtMsStart: number
  createdAtMsEnd: number
  page: number
  perPage: number
}

export interface RechargeRec {
  ID: number
  productCategory: number
  productID: number
  priceAmountMicros: number
  priceCurrencyCode: string
  paymentStatus: number
  paymentGateway: number
  userID: number
  callBackURL: string
}

export interface Meta {
  pagination: Pagination
}

export interface RechargeRecListRes extends ResBase {
  meta: Meta
  data: RechargeRec[]
}

function useRechargeRecList({
  paymentStatus,
  paymentGateway,
  createdAtMsStart,
  createdAtMsEnd,
  page,
  perPage,
}: RechargeRecListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [
      `${apiPath}/payment/list`,
      token,
      paymentStatus,
      paymentGateway,
      createdAtMsStart,
      createdAtMsEnd,
      page,
      perPage,
    ],
    (
      url,
      token,
      paymentStatus,
      paymentGateway,
      createdAtMsStart,
      createdAtMsEnd,
      page,
      perPage,
    ) =>
      request<RechargeRecListRes>({
        url,
        method: 'get',
        config: {
          params: {
            paymentStatus,
            paymentGateway,
            createdAtMsStart,
            createdAtMsEnd,
            page,
            perPage,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.data,
    paginator: data?.meta.pagination,
    isLoading: isValidating,
  }
}

export default useRechargeRecList