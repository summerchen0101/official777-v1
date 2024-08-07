import useMyAxios from '@/hooks/useMyAxios'
import { NewsType, SitePlatform } from '@/lib/enums'
import { useStore } from '@/store/useStore'
import { ListReqBase } from '@/types'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export type News = {
  id: string
  title: string
  content: string
  start_at: string | null
  end_at: string | null
  created_at: string
  updated_at: string
  type: string
  is_active: boolean
  platform: string
  link: null | string
  is_new_win: boolean
  is_top: boolean
  sort: number
} & { date: string }

export interface Paginator {
  page: number
  perpage: number
  total: number
}

export interface NewsListRes {
  items: News[]
  paginator: Paginator
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
  const myAxios = useMyAxios()
  const type = _type !== NewsType.ALL ? _type : null
  const platform = canRecharge ? SitePlatform.MAIN : SitePlatform.SECONDARY
  // const { data, isValidating } = useSWR<AxiosResponse<NewsListRes>>(
  //   ['public/announcements', type, platform, page, perpage],
  //   (url, type, platform, page, perpage) =>
  //     myAxios.get(url, {
  //       params: { type, platform, page, perpage },
  //     }),
  // )

  const data = {
    items: [
      {
        id: 'clywon73r3934600sob9gxpfuvu',
        title: '一億獎金大挑戰',
        content:
          '<p>《活動時間》<br>8/7(三)00:00 - 9/7(六)23:59</p>\n<p>&nbsp;</p>\n<p>《指定遊戲》<br>全老虎機</p>\n<p>&nbsp;</p>\n<p><br>《活動說明》<br>活動期間遊玩老虎機，依下注總額排名，前一百名可獲得對應獎勵。</p>\n<p>&nbsp;</p>\n<p>《活動獎項》</p>\n<p><span data-sheets-root="1">第一名 - 1,500萬金幣<br>&rarr;得獎者：<br>第二名 - 1,200萬金幣<br>&rarr;得獎者：<br>第三名 - 1,000萬金幣<br>&rarr;得獎者：<br>第四名 - 850萬金幣<br>&rarr;得獎者：<br>第五名 - 750萬金幣<br>&rarr;得獎者：<br>第六名 - 600萬金幣<br>&rarr;得獎者：<br>第七名 - 500萬金幣<br>&rarr;得獎者：<br>第八名 - 400萬金幣<br>&rarr;得獎者：<br>第九名 - 300萬金幣<br>&rarr;得獎者：<br>第十名 - 200萬金幣<br>&rarr;得獎者：<br>第十一~一百名 - 30萬金幣<br></span>&rarr;得獎者：</p>\n<p>&nbsp;</p>\n<p><br>《注意事項》<br>1.獎項將於9/10(二)18:00前派發。<br>2.本活動七七七娛樂城保有最終解釋權。</p>',
        start_at: '2024-08-06T14:00:35.000Z',
        end_at: '2024-09-10T15:59:43.000Z',
        created_at: '2024-07-22T07:45:56.151Z',
        updated_at: '2024-07-22T07:50:52.758Z',
        type: 'GAME',
        is_active: true,
        platform: 'ALL',
        link: '',
        is_new_win: false,
        is_top: true,
        sort: -1,
      },
      {
        id: 'clzaqjg2c4836170sob9ztkr0d4',
        title: '官將首 倍率賽',
        content:
          '<p>《活動時間》<br>8/4(日)13:00 - 9/2(一)23:59</p>\n<p>&nbsp;</p>\n<p>《指定遊戲》<br>官將首</p>\n<p>&nbsp;</p>\n<p><br>《活動說明》<br>活動期間遊玩官將首SLOT，押分100(含)以上，中獎為連續777、888倍率，即可獲得對應獎勵。</p>\n<p>&nbsp;</p>\n<p>《活動獎項》</p>\n<p>中獎為連續777、888倍率 - 獲得加碼贏分30% <br>*每人一個倍率限領一次</p>\n<p><br>《注意事項》<br>1.獎項將於9/9(一)18:00前派發。<br>2.本活動七七七娛樂城保有最終解釋權。</p>',
        start_at: '2024-08-04T05:00:21.000Z',
        end_at: '2024-09-02T15:59:32.000Z',
        created_at: '2024-08-01T03:47:46.836Z',
        updated_at: '2024-08-01T03:48:01.424Z',
        type: 'GAME',
        is_active: true,
        platform: 'ALL',
        link: '',
        is_new_win: false,
        is_top: true,
        sort: -1,
      },
      {
        id: 'clywoszkk3936090sob0blumce6',
        title: '大玩特玩7PK  挑戰倍率送道具卡(更新第一週得獎者)',
        content:
          '<div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">\n<p dir="auto">&nbsp;</p>\n<p dir="auto">《活動時間》<br>第一週8/2(五)13:00 - 8/4(日)23:59<br>第二週8/9(五)13:00 - 8/11(日)23:59<br>第三週8/16(五)13:00 - 8/18(日)23:59<br>第四週8/23(五)13:00 - 8/25(日)23:59<br><br></p>\n<p dir="auto">《指定遊戲》<br>7PK<br><br></p>\n<p dir="auto">《活動說明》<br>活動期間使用押分2000(含)以上，上競賽榜排名且獲得同花順(Straight Flush)、5條(5 Of A Kind)、同花大順(Royal Flush)牌型，即可獲得對應獎勵。<br><br><br>《活動獎項》三星超級卡 - 符合條件者 <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; *每人一個週期限領一次<br><br>第一週8/2(五)13:00 - 8/4(日)23:59<br>&rarr;得獎者：<br><span style="color: rgb(241, 196, 15);">就愛玩怎樣</span><br><span style="color: rgb(241, 196, 15);">哇拎哥哥啦</span><br><span style="color: rgb(241, 196, 15);">瘋馬</span><br><span style="color: rgb(241, 196, 15);">小樓夜雨</span><br><span style="color: rgb(241, 196, 15);">善良有好運</span><br><span style="color: rgb(241, 196, 15);">米可</span><br><span style="color: rgb(241, 196, 15);">贏神哥</span><br><span style="color: rgb(241, 196, 15);">財源滾滾</span><br><span style="color: rgb(241, 196, 15);">阿任1</span><br><span style="color: rgb(241, 196, 15);">樓下姐姐好美</span><br><span style="color: rgb(241, 196, 15);">跨殺毀</span><br><span style="color: rgb(241, 196, 15);">烏克蘭放任惠君</span><br><span style="color: rgb(241, 196, 15);">菸廠路童顏志豪</span><br><span style="color: rgb(241, 196, 15);">百寶財</span><br><span style="color: rgb(241, 196, 15);">癡華</span><br><span style="color: rgb(241, 196, 15);">Sky</span><br><span style="color: rgb(241, 196, 15);">大麥克天使</span><br><span style="color: rgb(241, 196, 15);">小小頭家</span><br><br><br><br><br>《注意事項》</p>\n</div>\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\n<p dir="auto"><span class="html-span xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs x3nfvp2 x1j61x8r x1fcty0u xdj266r xat24cr xgzva0m xhhsvwb xxymvpz xlup9mm x1kky2od">1.須高於120倍(含)以上之得分倍率即會顯示榜中</span>。<br>2.得獎名單及獎勵派發時間：於遊戲及官網公布。<br>第一週8/7(三)18:00前派發。<br>第二週8/14(三)18:00前派發。<br>第三週8/21(三)18:00前派發。<br>第四週8/28(三)18:00前派發。<br><span class="html-span xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs x3nfvp2 x1j61x8r x1fcty0u xdj266r xat24cr xgzva0m xhhsvwb xxymvpz xlup9mm x1kky2od">3.</span>本活動七七七娛樂城保有最終解釋權。<br><br></p>\n</div>',
        start_at: '2024-08-02T05:00:05.000Z',
        end_at: '2024-08-28T15:59:14.000Z',
        created_at: '2024-07-22T07:50:26.324Z',
        updated_at: '2024-08-05T03:53:41.270Z',
        type: 'GAME',
        is_active: true,
        platform: 'ALL',
        link: '',
        is_new_win: false,
        is_top: true,
        sort: -1,
      },
      {
        id: 'clywooy1i3935570sobbpbgk847',
        title: '幸運樂透-加碼贏分',
        content:
          '<div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">\n<p dir="auto">&nbsp;</p>\n<p dir="auto">《活動時間》<br>8/1(四)13:00-8/31(六)18:00<br><br></p>\n<p dir="auto">《指定遊戲》<br>幸運樂透<br><br></p>\n<p dir="auto">《活動說明》</p>\n<p dir="auto">活動期間內中5個號碼可獲得加碼贏分倍率20%。<br><br><br><br>《注意事項》</p>\n</div>\n<div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">\n<p dir="auto"><span class="html-span xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs x3nfvp2 x1j61x8r x1fcty0u xdj266r xat24cr xgzva0m xhhsvwb xxymvpz xlup9mm x1kky2od">1.</span>加碼贏分倍率獎勵已含在中獎獎勵內。</p>\n<p dir="auto"><span class="html-span xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs x3nfvp2 x1j61x8r x1fcty0u xdj266r xat24cr xgzva0m xhhsvwb xxymvpz xlup9mm x1kky2od">2.</span>本活動七七七娛樂城保有最終解釋權。<br><br></p>\n</div>',
        start_at: '2024-08-01T05:00:58.000Z',
        end_at: '2024-08-31T10:00:08.000Z',
        created_at: '2024-07-22T07:47:17.718Z',
        updated_at: '2024-07-22T07:51:14.871Z',
        type: 'GAME',
        is_active: true,
        platform: 'ALL',
        link: '',
        is_new_win: false,
        is_top: true,
        sort: -1,
      },
      {
        id: 'clu9h5nd4149480sob4d3kmxet',
        title: '【官網儲值】最划算最高回饋20%',
        content:
          '<p>活動時間:</p>\n<p>&nbsp;2024/03/27~不限日期</p>\n<p>&nbsp;</p>\n<p>活動方式:&nbsp;</p>\n<p>&nbsp;</p>\n<p>活動期間，至七七七官網首頁【儲值/序號】&rarr;【銀行轉帳/信用卡】</p>\n<p>使用官網儲值指定面額，並成功儲值至遊戲帳號內，</p>\n<p>最高加碼回饋20%頭家點數</p>\n<p>&nbsp;</p>\n<p>◆官網儲值指定面額:</p>\n<p>&nbsp;</p>\n<p>儲值100送5% &nbsp;頭家點數<br>儲值300送8% &nbsp;頭家點數<br>儲值500送10% &nbsp;頭家點數<br>儲值1000送12% &nbsp;頭家點數<br>儲值2000送14% &nbsp;頭家點數<br>儲值3000送16% &nbsp;頭家點數<br>儲值5000送18% &nbsp;頭家點數<br>儲值10,000送20% &nbsp;頭家點數<br>儲值20,000送20% &nbsp;頭家點數<br>儲值30,000送20% &nbsp;頭家點數<br>儲值40,000送20% &nbsp;頭家點數</p>\n<p>&nbsp;</p>\n<p><br>《注意事項》</p>\n<p>1.本次活動限定官網【銀行轉帳/信用卡】<br>2.官網【銀行轉帳/信用卡】儲值前請確認儲值金額、金幣是否正確<br>3.本活動七七七娛樂城保有最終解釋權。</p>',
        start_at: '2024-03-27T07:18:26.000Z',
        end_at: '2024-12-30T16:00:32.000Z',
        created_at: '2024-03-27T07:18:48.712Z',
        updated_at: '2024-07-10T09:23:19.769Z',
        type: 'EVENT',
        is_active: true,
        platform: 'MAIN',
        link: '',
        is_new_win: false,
        is_top: true,
        sort: -1,
      },
    ],
    paginator: {
      page: 1,
      perpage: 5,
      total: 13,
    },
  }

  return {
    list:
      data?.items.map((t) => ({
        ...t,
        date: t.start_at || t.created_at,
      })) || [],
    paginator: {
      page: data?.paginator.page,
      perPage: data?.paginator.perpage,
      totalCount: data?.paginator.total,
      totalPage:
        Math.ceil(data?.paginator.total! / data?.paginator.perpage!) || 1,
    },
    isLoading: false,
  }
}

export default useNewsList
