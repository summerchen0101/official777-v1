import useCdnUrl from '@/hooks/useCdnUrl'
import useBodyLock from '@/hooks/useBodyLock'
import cs from 'classnames'
import React, { ReactNode, useEffect, useMemo, useRef } from 'react'

interface Props {
  onClose: () => void
  isShow: boolean
  children?: ReactNode
  className?: string
}
export default function Popup({ onClose, isShow, children, className }: Props) {
  const popupBody = useRef<HTMLDivElement>(null)
  const toCdnUrl = useCdnUrl()
  useBodyLock(isShow)
  useEffect(() => {
    if (!isShow) {
      popupBody.current?.scrollTo({ top: 0 })
    }
  }, [isShow])
  return (
    <div
      className={cs(
        'bg-black/50 fixed top-0 left-0 w-full h-full z-50 transition-all',
        isShow ? 'visible opacity-100 ' : 'invisible opacity-0 translate-y-24',
      )}
      onClick={onClose}
    >
      <div
        className={cs(
          'fixed bottom-0 left-0 w-full h-full bg-purple-900/90 py-4 sm:py-8 text-white overflow-y-auto scroll-padding',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
        ref={popupBody}
      >
        <div
          className="cursor-pointer fixed top-0 right-0 m-3 z-10"
          onClick={onClose}
        >
          <img
            src={toCdnUrl('/btn_close.png')}
            className="h-12 lg:h-16"
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  )
}
