import { NewsType } from '@/lib/enums'
import { newsTypeMap } from '@/lib/map'
import useNewsList from '@/services/useNewsList'
import { format } from 'date-fns'
import { keyBy } from 'lodash'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import Pagination from '../Pagination'
function NewsBox() {
  const popRef = useRef<HTMLDivElement>(null)
  const [category, setCategory] = useState<NewsType>(NewsType.ALL)
  const [page, setPage] = useState(1)
  const { list: newsList, paginator } = useNewsList({
    category,
    page,
    perpage: 5,
  })
  const [currentId, setCurrentId] = useState<string>()
  const newsMap = useMemo(() => {
    return keyBy(newsList, (t) => t.id)
  }, [newsList])

  const news = useMemo(() => {
    if (currentId) return newsMap[currentId]
  }, [newsMap, currentId])

  const showDetail = (id: string) => {
    setCurrentId(id)
    const layer = $('#hw-overlay')
    const layerwrap = layer.find('.hw-layer-wrap')
    layer.fadeIn()
    //屏幕居中
    layerwrap.css({
      'margin-top': -layerwrap.outerHeight() / 2,
    })
  }

  const closeDetail = () => {
    $('#hw-overlay').fadeOut()
  }

  return (
    <div className="content">
      <div className="content-title-box">
        <img
          src="images/news/title_news.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div className="tab-content-box">
        <div className="ranking-box">
          <div className="ranking-box-gold">
            <div className="ranking-box-goldline">
              <div className="ranking-box-black" style={{ padding: '10% 2%' }}>
                <div className="content-box">
                  <div className="tabbox">
                    <div className="tabs tabs-index">
                      <ul className="menubar">
                        {Object.entries(newsTypeMap).map(([key, label]) => (
                          <li
                            key={key}
                            onClick={() => setCategory(+key)}
                            className={+key === category ? 'active' : ''}
                          >
                            <a className="menubtn">{label}</a>
                          </li>
                        ))}
                      </ul>
                      <hr className="float-none" />
                      <hr />
                      <div className="frame_content_all">
                        {/*TAB1最新*/}
                        <div id="tab-1" className="tab-content">
                          <table>
                            <tbody>
                              {newsList.map((t) => (
                                <tr key={t.id}>
                                  <td>
                                    <p>【{newsTypeMap[t.category]}】</p>
                                  </td>
                                  <td>
                                    <a
                                      className="show-layer"
                                      onClick={() => showDetail(t.id)}
                                    >
                                      {t.title}
                                    </a>
                                  </td>
                                  <td>
                                    <p>
                                      {format(
                                        new Date(t.createTimeMs),
                                        'yyyy/MM/dd',
                                      )}
                                    </p>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <Pagination
                            page={page}
                            onPageChange={setPage}
                            totalPage={paginator?.totalPage || 1}
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="float-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="float-none" />
      {newsList.length && (
        <div
          className="hw-overlay"
          id="hw-overlay"
          ref={popRef}
          onClick={() => closeDetail()}
        >
          <div className="hw-layer-wrap">
            <span className="glyphicon glyphicon-remove hwLayer-close" />
            <div
              className="hw-content"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <h6>
                {news?.createTimeMs
                  ? format(new Date(news?.createTimeMs), 'yyyy/MM/dd')
                  : ''}
              </h6>
              <hr />
              <h1>{news?.title}</h1>
              <hr />
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: news?.content || '' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(NewsBox)
