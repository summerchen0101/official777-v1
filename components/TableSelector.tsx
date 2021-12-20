import { Goods } from '@/services/useGoodsList'
import { toCurrency } from '@/utils'
import React, { forwardRef, ReactFragment } from 'react'
import LoadingCover from './LoadingCover'

type Props = {
  list?: Goods[]
  value: number
  onChange: (val: number) => void
  isLoading?: boolean
}

function TableSelector({ isLoading, list = [], value, onChange }: Props) {
  return (
    <LoadingCover isLoading={isLoading}>
      <table className="w-full rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th></th>
            <th>金額</th>
            <th>金幣數量</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((t) => (
            <tr
              key={t.ItemId}
              onClick={(e) => onChange(t.ItemId)}
              className="cursor-pointer"
            >
              <td>
                <input
                  type="radio"
                  checked={value === t.ItemId}
                  onChange={() => {}}
                />
              </td>
              <td>${toCurrency(t.Price)}</td>
              <td>{toCurrency(t.UseValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </LoadingCover>
  )
}

export default TableSelector