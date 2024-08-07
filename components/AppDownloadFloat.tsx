import React from 'react'
import { showAppPopup } from '@/utils'
import { useStore } from '@/store/useStore'

function AppDownloadFloat() {
  const { canRecharge } = useStore((s) => s.clientEnv)
  return (
    <>
      <div
        className="window-box hidden-xs wow fadeInRight flex items-start justify-center pt-8"
        data-wow-delay="0.4s"
        data-wow-duration="1s"
      >
        <div className="icon-box">
          <img
            src="/images/window_icon.png"
            alt=""
            className="img-responsive center-block"
          />
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/window_apple.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src="/images/window_google.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          {canRecharge ? (
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/images/window_apk.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          ) : null}

          <img
            src="/images/window_qr.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
      </div>
      <div className="window-box-download hidden visible-xs">
        <a className="show-layer" onClick={() => showAppPopup()}>
          <img
            src="/images/btn_download.png"
            alt=""
            className="img-responsive pull-right"
          />
        </a>
      </div>
    </>
  )
}

export default AppDownloadFloat
