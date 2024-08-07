import { useStore } from '@/store/useStore'
import React from 'react'

function AppDownloadPopup() {
  const { canRecharge } = useStore((s) => s.clientEnv)
  return (
    <div
      className="hw-overlay2"
      id="appPopup"
      onClick={() => {
        $('#appPopup').fadeOut()
      }}
    >
      <div className="hw-layer-wrap2">
        <span className="glyphicon glyphicon-remove hwLayer-close2" />
        <div className="hw-layer-wrap2-header">
          <h1 className="text-center">請選擇遊戲平台</h1>
        </div>
        <div
          className="hw-content2"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="app-box">
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/images/window_apple.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
            <br />
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/images/window_google.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
            {canRecharge ? (
              <>
                <br />
                <a href="#" target="_blank" rel="noreferrer">
                  <img
                    src="/images/window_apk.png"
                    alt=""
                    className="img-responsive center-block"
                  />
                </a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownloadPopup
