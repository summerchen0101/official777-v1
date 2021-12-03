import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

function Rules() {
  return (
    <section className="rule">
      <div className="lg:w-[860px] mx-auto">
        <div className="">
          <p className="title">服務條款</p>
          <p>
            歡迎來到香港商MEGA GAME GLOBAL TECH
            LIMITED公司【大頭家娛樂城】遊戲平台（以下簡稱本遊戲），為保障您的權益，請於註冊成為本遊戲會員並開始使用本遊戲之服務前，詳細閱讀本服務條款之所有內容。
          </p>
          <p>提醒您，務必先行審閱，再按下【我同意】鍵。</p>
          <p>當事人：</p>
          <p>消費者（以下簡稱「甲方」，請依會員註冊流程填寫）</p>
          <p>
            企業經營者名稱：香港商MEGA GAME GLOBAL TECH
            LIMITED公司（以下簡稱「乙方」）
          </p>
          <p>電子郵件： support@online539.com</p>
          <p>
            營業所地址： UNIT 2202 22/F West Exchange Tower 332 DES VOEUX Road,
            Central Sheung Wan
          </p>
          <p>統一編號： 73031517-000-05-21-0</p>
          <p>
            <strong>第一條　契約之依據</strong>
          </p>
          <ol>
            <li>
              甲方開始使用本遊戲的任何部分、透過程式或本遊戲官網創立使用者帳號（包含以第三方提供之身分驗證機制創立之帳號），視為甲方理解並同意接受本服務條款之拘束，並以之作為甲乙雙方契約關係之內容依據。
            </li>
            <li>
              甲方為限制行為能力人者，本服務條款訂定時，應經甲方之法定代理人同意，本服務條款始生拘束力；甲方為無行為能力人者，其同意應由甲方之法定代理人代為之。
            </li>
            <li>
              乙方於本遊戲官網(https://www.facebook.com/Online539/）首頁、遊戲登入頁面或購買頁面以明顯標示本服務條款，若甲方為限制行為能力人或無行為能力人，除應符合第一項規定外，並應於甲方之法定代理人閱讀、瞭解並同意本服務條款之所有內容後，方得使用本遊戲服務。本服務條款嗣後有變更時亦同。
            </li>
            <li>
              乙方得隨時修改本服務條款。所有修改將公告於本遊戲之官網首頁、本遊戲之登入頁面或遊戲中使用者購買頁面，並於修改後甲方第一次登入時提示。若甲方未於乙方公告後十五日內為反對之表示，乙方依修改後之服務條款繼續提供服務。若甲方不同意乙方修改後之服務條款，依乙方終止契約方式處理。甲方未經本條款規定進行公告及通知，本服務條款之修改無效。
            </li>
          </ol>
          <p>
            <strong>第二條　契約之內容</strong>
          </p>
          <ol>
            <li>除本服務條款外，以下視為甲方及乙方間契約內容之一部分：</li>
          </ol>
          <p>一、乙方有關本遊戲服務之廣告或宣傳內容。</p>
          <p>二、乙方之隱私權政策。</p>
          <ol>
            <li>本服務條款如有疑義時，應為甲方有利之解釋。</li>
          </ol>
          <p>
            <strong>第三條　服務範圍與限制</strong>
          </p>
          <ol>
            <li>
              本遊戲之服務，係由乙方指定之伺服器，讓甲方透過網際網路連線登入使用本遊戲服務。但不包括甲方向網際網路接取服務業者申請網際網路之服務，及提供上網所需之各項硬體設備。
            </li>
            <li>
              甲方認知且同意，訪問和/或使用本遊戲（包括本遊戲應用程式上提供的任何或全部服務或產品）在某些國家/地區可能是非法或受限制的。乙方對於甲方使用本遊戲在甲方所在地之合法性不提供任何形式之保證與擔保。
            </li>
            <li>
              甲方理解並同意必須遵守提供本遊戲下載之平台業者（如Google Play、App
              Store等提供者，下稱「平台業者」）之條款以使用本遊戲。
            </li>
            <li>
              甲方理解且同意乙方利用第三方所提供之技術或服務儲存或處理甲方透過本遊戲提供之個人資料以及本遊戲所蒐集之其他資訊，該儲存地或處理地可能與甲方實際所在地之國家/區域不同
            </li>
          </ol>
          <p>
            <strong>第四條　遊戲登錄</strong>
          </p>
          <ol>
            <li>
              甲方申請使用本遊戲服務，應依申請流程，於遊戲網站登錄與身分證明文件相符之個人資料或其他必要資訊。
            </li>
            <li>
              為確保甲方使用本遊戲服務之權益，甲方應保證其提供之資料為真實、正確，且提供之資料應可驗證身分，若有不正確或已變更時，應立即通知乙方更新，若甲方提供之資料有未即時更新、不正確或偽造、變造之情形，其衍生之所有責任由甲方自行負擔。如乙方無法依據甲方留存之個人資料確認甲方身分，乙方有權拒絕甲方提供服務之要求。
            </li>
            <li>
              乙方若有為提供本遊戲服務與甲方聯絡之必要，而甲方未提供正確之個人資料或原提供之資料不符合真實且未更新，乙方得於甲方提供真實資料或更新資料前，暫停甲方遊戲進行及遊戲歷程查詢之服務。
            </li>
          </ol>
          <p>
            <strong>第五條　契約解除權規定</strong>
          </p>
          <ol>
            <li>
              甲方得於開始遊戲後七日內，以書面告知乙方解除本契約，甲方無需說明理由及負擔任何費用。
            </li>
            <li>前項情形，甲方得就未使用之付費購買點數向乙方請求退費。</li>
          </ol>
          <p>
            <strong>第六條　計費方式</strong>
          </p>
          <ol>
            <li>
              甲方註冊本遊戲，收費計算方式為：
              <br />■ 免費制
            </li>
            <li>
              本遊戲服務內（例如：遊戲商城、線上商店等）有提供需甲方額外付費購買之點數、商品或其他服務（例如：虛擬貨幣或寶物、進階道具等），乙方在本遊戲官網首頁、遊戲登入頁面或購買頁面公告載明付款方式及商品資訊。
            </li>
            <li>
              費率調整時，乙方應於預定調整生效日三十日前於官網首頁、遊戲登入頁面或購買頁面公告。
            </li>
            <li>
              費率如有調整時，應自調整生效日起按新費率計收；若新費率高於舊費率時，甲方在新費率生效日前已於官網中登錄之付費購買點數或遊戲費用應依舊費率計收。
            </li>
            <li>
              甲方於本遊戲中所取得之虛擬遊戲幣或其他虛擬商品，無論係甲方透過儲值點數或其他付款方式有償取得，或無償取得，均僅供進行本遊戲所提供遊戲之娛樂用途，不具任何交易價值。乙方保留對虛擬遊戲幣或其他虛擬商品銷售價格與發放方式之決定權。
            </li>
            <li>
              除法律或平台業者之條款另有規定外，乙方不會將已撥入甲方帳號之虛擬遊戲幣或虛擬商品兌換為金錢或其他有價值之物品，甲方亦不得以任何方式請求乙方或任何人將虛擬遊戲幣或虛擬商品兌換為金錢或其他有價值之物品。
            </li>
          </ol>
          <p>
            <strong>第七條　本遊戲服務之資訊</strong>
          </p>
          <p>
            乙方於官網首頁、遊戲登入頁面或購買頁面及遊戲套件包裝上載明以下事項：
          </p>
          <p>
            一、依遊戲軟體分級管理辦法規定標示，本遊戲為【限制】級，甲方須為18歲以上方得註冊進行本遊戲。
          </p>
          <p>二、進行本遊戲服務之最低軟硬體需求</p>
          <p>IOS系統：10以上</p>
          <p>
            Android系統：&nbsp;8.0以上
            <br /> CPU：雙核以上
          </p>
          <p>記憶體：2G以上</p>
          <p>內存空間：1G以上</p>
          <p>三、有提供安全裝置者，其免費或付費資訊。</p>
          <p>
            四、有提供付費購買之機會中獎商品或活動，其活動內容、獎項及中獎等資訊，並應記載「此為機會中獎商品，消費者購買或參與活動不代表即可獲得特定商品」等提示。
          </p>
          <p>
            <strong>第八條　帳號與密碼之使用</strong>
          </p>
          <ol>
            <li>甲方完成註冊程序後取得之帳號及密碼，限供甲方使用。</li>
            <li>
              前項之密碼得依乙方提供之修改機制進行變更。乙方人員（含客服人員、遊戲管理員）不得主動詢問甲方之密碼。出於記錄管理的需求，乙方於契約終止後三十日內，保留甲方之帳號及附隨於該帳號之電磁紀錄。
            </li>
            <li>
              本契約非因可歸責甲方之事由而終止者，甲方於終止期間內辦理續用後，有權繼續使用帳號及附隨於該帳號之電磁紀錄；終止期間屆滿時，甲方仍未辦理續用，乙方得刪除該帳號及附隨於該帳號之所有資料，但法令另有規定者不在此限。
            </li>
            <li>
              甲方同意，為符合法令規定或其他監管需求，乙方得隨時進行相關身分、信用及其他方面之查核，甲方並同意提供與該查核有關的所有資料。根據查核結果，乙方得透過適當方式凍結或限制甲方帳號，直至相關查核確認通過。
            </li>
          </ol>
          <p>
            <strong>第九條　帳號密碼遭非法使用之通知與處理</strong>
          </p>
          <ol>
            <li>
              當事人一方如發現帳號、密碼被非法使用時，應立即通知對方並由乙方進行查證，經乙方確認有前述情事後，得暫停該組帳號或密碼之使用權，更換帳號或密碼予甲方，立即限制第三人就本遊戲服務之使用權利，並將相關處理方式揭載於遊戲管理規則。
            </li>
            <li>
              於暫時限制遊戲使用權利之時起，乙方得透過官網公告、簡訊、電子郵件、推播或其他雙方約定之方式通知前項第三人提出說明。第三人不同意乙方前項之處理時，甲方得依報案程序，循司法途徑處理。
            </li>
            <li>
              乙方依第一項規定限制甲方或第三人之使用權時，在限制使用期間內，乙方不得向甲方或第三人收取費用。
            </li>
            <li>
              甲方如有申告不實之情形致生乙方或第三人權利受損時，應負一切法律責任。
            </li>
          </ol>
          <p>
            <strong>第十條　遊戲歷程之保存與查詢</strong>
          </p>
          <ol>
            <li>
              乙方保存甲方之個人遊戲歷程紀錄，且保存期間為三十日，以供甲方查詢。
            </li>
            <li>
              甲方得以書面、網路，或親至乙方之服務中心申請調閱甲方之個人遊戲歷程，且須提出與身分證明文件相符之個人資料以供查驗，查詢費用如下，由甲方負擔：■__200_元。
            </li>
            <li>
              乙方接獲甲方之查詢申請，應提供第一項所列之甲方個人遊戲歷程，並於七日內以儲存媒介或書面、電子郵件方式提供資料。
            </li>
          </ol>
          <p>
            <strong>第十一條　個人資料</strong>
          </p>
          <p>關於個人資料之保護，依乙方隱私權政策及相關法律規定處理。</p>
          <p>
            <strong>第十二條 　電磁紀錄</strong>
          </p>
          <p>
            本遊戲之所有電磁紀錄均屬乙方所有，乙方並應維持甲方相關電磁紀錄之完整。
            <br />
            甲方對於前項電磁紀錄有使用支配之權利。但不包括本遊戲服務範圍外之移轉、收益行為。
          </p>
          <p>
            <strong>第十三條 　資訊公開</strong>
          </p>
          <p>
            乙方應於遊戲網站上提供本遊戲服務之伺服器可容納人數、同時上線人數與連線狀況等相關資訊，並定期更新。
          </p>
          <p>
            <strong>第十四條　連線品質與系統設備</strong>
          </p>
          <ol>
            <li>
              乙方為維護本遊戲服務相關系統及軟硬體設備而預先規劃暫停本遊戲服務之全部或一部時，得於七日前於官網首頁、遊戲登入頁面或購買頁面公告。但因臨時性、急迫性或不可歸責於乙方之事由者，不在此限。
            </li>
            <li>
              因可歸責乙方事由，致甲方不能連線使用本遊戲服務時，乙方應立即更正或修復。對於甲方於無法使用期間遭扣除遊戲費用或遊戲內商品，乙方應返還遊戲費用或商品，無法返還時則應提供其他合理之補償。
            </li>
            <li>
              倘甲方未依本遊戲所需之最低軟硬體需求使用本遊戲，乙方將無法確保本遊戲可以正確無誤地運行，或是乙方所提供的服務不會受到任何干擾。對於因甲方自身設備、網路連接或網路/通訊服務商而造成的任何故障或問題，乙方概不承擔任何責任，且遊戲進行結果之判定皆以乙方所接收到並儲存之資料為準。
            </li>
            <li>
              乙方為維護本遊戲相關系統及軟硬體設備而預先規畫暫停本遊戲之全部或一部時，應於7日前於本遊戲官網、遊戲登入頁面或購買頁面公告。
            </li>
            <li>
              因臨時性、急迫性等不可歸責於乙方之事由，例如因網路品質不良、電信設備故障、網路壅塞、斷電、天災、不可抗力之非人為因素或其他不可歸責於乙方之因素導致本遊戲全部或一部暫停，甲方因此所生的損失、交易錯誤、無法傳送、接收、時間延遲或發生任何資料流失，以及交易無法適切完成等結果，乙方概不負責。
            </li>
            <li>
              因可歸責於乙方之事由，致甲方不能連線使用本遊戲時，乙方應立即更正或修復。對於甲方因此所生之損失，乙方應予回復之，無法回復則提供其他合理補償。
            </li>
          </ol>
          <p>
            <strong>第十五條　企業經營者及消費者責任</strong>
          </p>
          <ol>
            <li>
              乙方應依本服務條款之規定負有於提供本服務時，維護其自身電腦系統，符合當時科技或專業水準可合理期待之安全性。
            </li>
            <li>
              電腦系統或電磁紀錄受到破壞，或電腦系統運作異常時，乙方應於採取合理之措施後儘速予以回復。
            </li>
            <li>
              甲方因共用帳號、委託他人付費購買點數衍生與第三人間之糾紛，乙方得不予協助處理。
            </li>
            <li>
              甲方同意自行承擔因使用本遊戲而產生的風險，甲方理解本遊戲僅以「現狀」（AS-IS）提供，除法令規定外，乙方概無任何明示或默示擔保，包括但不限於所有權擔保及無侵權、適售性、適用性等默示擔保。
            </li>
            <li>
              乙方對本遊戲所提供之服務與遊戲內所提供之虛擬遊戲幣與虛擬商品全部或一部之正確性、完整性、即時性、相容性、無瑕疵性、無中斷性、精確性及無損害性不負任何明示或默示之擔保
            </li>
          </ol>
          <p>
            <strong>第十六條　遊戲規則與違規處理</strong>
          </p>
          <ol>
            <li>甲方理解並遵守下列遊戲規則：</li>
            <ol>
              <li>
                乙方有權隨時以任何方式修改遊戲規則，但修改內容不影響修改前已實際知悉的爭議。
              </li>
              <li>
                遊戲規則若有修改，乙方將以下列方式提出通知：1)
                於本遊戲官網或本遊戲公告修改內容；或 2)
                寄發條款修改通知，並於其中提供本遊戲官網的公告連結。若甲方收到乙方已於本遊戲官網公告之修改內容，且在通知後繼續使用本遊戲，即代表接受修改內容。
              </li>
              <li>
                若甲方在使用本遊戲時違反遊戲規則，乙方有權終止甲方存取本遊戲。
              </li>
              <li>
                除另以書面指明者外，本遊戲所含資料均為乙方所有、控制或授權，並受法律保護，未經授權不得使用。本遊戲所含內容均依相關法令受智慧財產權保護。乙方及本遊戲內容之相關標誌及所有遊戲名稱，未經乙方明示書面同意不得使用。甲方不因使用本遊戲、向本遊戲下載或上傳資料或購買虛擬商品而取得任何授權或所有權。
              </li>
              <li>
                乙方係授予甲方一非專屬、不可轉讓、可撤銷的有限授權，供甲方基於個人非商業目的，透過其本身為主要使用者的機器，使用與展示本遊戲及相關軟體
                (不含原始碼及目標碼)。除乙方另有明示許可者外，甲方不可基於其他目的使用本遊戲，或複製、散佈、公開、或以其他方式利用本遊戲之內容或資料。
              </li>
              <li>
                本遊戲可能含有遊戲內的虛擬貨幣，甲方不可將虛擬貨幣或虛擬商品向乙方或其他任何人交易或轉換為金錢、商品或具有金錢價值的其他項目。
              </li>
              <li>
                甲方理解乙方嚴禁轉讓虛擬貨幣及虛擬商品。甲方不可使用實際金錢或其他有價項目，在遊戲外買賣或交換虛擬貨幣或虛擬商品。意圖進行此類行為應屬違反本條款，乙方得不提供本遊戲服務，並採取法律行動。
              </li>
              <li>
                除可在本遊戲中使用虛擬商品或虛擬貨幣外，對於本遊戲出現或產生的虛擬商品、虛擬貨幣及其他與使用本遊戲相關、儲存於本遊戲的項目，甲方無其他權利。
              </li>
              <li>
                乙方得全權以其認定為適當的方式管理、規範、控制、修改、刪除虛擬貨幣及虛擬商品。
              </li>
              <li>
                甲方於本遊戲使用聊天室、部落格、留言板、線上論壇及其他功能，製作、提交、張貼、展示、傳送、執行、公開、散佈或廣播內容和資料，包括但不限於訊息、文章、照片、圖片、意見、建議、個人身分識別資訊及其他資料
                (合稱「使用者內容」)，應保證其所傳送之使用者內容均屬合法、非機密之資訊，且乙方不因此對第三方負擔任何責任或義務。
              </li>
              <li>
                乙方無義務接受、展示、審查、監控或維護使用者內容；甲方應對其使用者內容負完全責任。
              </li>
              <li>
                為本遊戲營運之需要，乙方得將使用者內容自本遊戲中刪除，或進行移動、格式調整、編輯、更改、形狀調整、移除或拒絕利用。
              </li>
              <li>
                甲方使用本遊戲及與本遊戲有關的行為不得違法，且甲方之使用者內容不得：
              </li>
              <ol>
                <li>
                  含有涉及種族、原國籍、性別、性取向或肢體殘障的攻擊性意見。
                </li>
                <li>
                  含有褻瀆、猥褻、淫穢、色情、性或其他爭議性質的內容或語言。
                </li>
                <li>
                  誹謗、詆毀、嘲笑、愚弄、貶抑、威脅、騷擾、恐嚇或辱罵任何人。
                </li>
                <li>煽動暴力或描述如何採取暴力行動。</li>
                <li>
                  違反任何人的契約、個人、智慧財產或其他權利，或煽動、構成違法行為。
                </li>
                <li>違反本服務條款或遊戲規則。</li>
                <li>
                  洩露他人的個人資訊，包括他人的地址、電話號碼、電子郵件信箱、信用卡號碼或可用於追蹤、聯絡或假冒他人的任何資訊。
                </li>
                <li>試圖假冒他人。</li>
                <li>
                  以自動方法、虛構身分開設使用者帳戶，或使他人誤認通訊來源。
                </li>
                <li>
                  欺騙、詐騙或誤導乙方或其他使用者，特別是試圖取得密碼等敏感性帳戶資訊。
                </li>
                <li>
                  不當使用乙方本遊戲之服務，或提交虛構的濫用或不當行為報告。
                </li>
                <li>
                  從事商業活動，包括但不限於試圖為任何人募款或宣傳、推銷產品、服務、網站、層壓式推銷或其他多層次傳銷計畫。
                </li>
                <li>貶抑、詆毀或以其他方式傷害乙方或本遊戲。</li>
                <li>
                  違反本服務條款或相關法規國際或地方法規，或乙方於本服務條款發佈的其他規定或限制。
                </li>
                <li>
                  散佈或傳輸病毒、蠕蟲、特洛伊木馬、鍵盤側錄、間諜程式、廣告軟體、清除器或其他惡意、侵略性程式碼或程式。
                </li>
                <li>
                  上傳或傳輸 (或試圖上傳或傳輸)
                  病毒、特洛伊木馬或其他資料，包括過度使用大寫字體及發佈垃圾訊息
                  (持續發佈重複內容)
                  達到影響他人持續使用本遊戲或使用者內容的程度，或修改、損害、中斷、更動或干擾本遊戲或使用者內容之使用、特性、功能、運作或維護。
                </li>
                <li>
                  針對本遊戲、本遊戲官網、或其他產品、程序，進行反向還原工程、解編、拆解、修改或試圖發現其內容。
                </li>
                <li>
                  掩飾甲方提交至本遊戲的使用者內容或其他資訊之來源，或使用工具
                  (例如匿名伺服器) 隱藏甲方存取本遊戲的網路位址。
                </li>
                <li>
                  干擾或規避本服務的安全功能或執行本遊戲、合作內容或使用者內容使用限制的各類功能。
                </li>
                <li>
                  出售本遊戲或其中任何部份
                  (包括但不限於虛擬商品、虛擬貨幣、使用者帳戶及存取途徑)，以換取真實貨幣或具有金錢價值的其他項目。
                </li>
              </ol>
            </ol>
            <li>
              若甲方有違反乙方上述規定之情形，乙方得於官網首頁、遊戲登入頁面或購買頁面公告，並依甲方登錄之通訊資料通知甲方。
            </li>
            <li>
              甲方第一次違反本遊戲規則，乙方應通知甲方於一定期間內改善。經乙方通知改善而未改善者，乙方得按其情節輕重限制甲方之遊戲使用權利。如甲方因同一事由再次違反遊戲規則時，乙方得立即依遊戲規則限制甲方進行遊戲之權利。
            </li>
          </ol>
          <p>
            <strong>第十七條　申訴權利</strong>
          </p>
          <ol>
            <li>
              甲方不滿意乙方提供之連線品質、遊戲管理、費用計費、其他相關之服務品質，或對乙方依遊戲規則之處置不服時，得於收到通知之翌日起七日內至乙方之服務中心或以電子郵件或書面提出申訴，乙方應於接獲申訴後，於十五日內回覆處理之結果。
            </li>
            <li>
              乙方應於官網或本遊戲中明示服務專線（02-87761077）、電子郵件（
              <a href="about:blank">
                support@online539.com）或郵寄地址（台北市信義區松仁路101號12
              </a>
              樓）等相關申訴管道。
            </li>
          </ol>
          <p>
            <strong>第十八條　契約之終止與退費</strong>
          </p>
          <ol>
            <li>甲方得隨時關閉帳號並終止契約，並聯繫乙方辦理後續。</li>
            <li>
              乙方保留在任何時間以任何原因關閉或凍結甲方使用者帳號以及終止本契約的權利。
            </li>
            <li>
              於不影響前述條款效力之前提，遇下列任一情況，乙方有權在通知甲方後關閉或凍結使用者帳號以及終止本契約：
            </li>
            <ol>
              <li>
                甲方超過一年未登入使用本遊戲，且甲方通知乙方應於15日內登入後，甲方仍未登入使用時
              </li>
              <li>
                乙方認為甲方在使用本遊戲時存在冒名、詐欺或其他違反遊戲規則、服務條款或法令規定之行為
              </li>
              <li>甲方出於非法或不正當目的而購買虛擬點數或遊戲內商品</li>
              <li>
                乙方認為甲方在使用本遊戲時利用外掛程式、病毒程式、遊戲程式漏洞或以其他違反遊戲常態設定或公平合理之方式進行遊戲
              </li>
              <li>因同一事由違反遊戲規則達三次以上，經通知改善而未改善者</li>
              <li>依檢警單位、任何監管機構或法庭之要求</li>
            </ol>
            <li>
              契約終止時，乙方於扣除必要成本後，應於三十日內以現金、信用卡、匯票或掛號寄發支票方式退還甲方未使用之付費購買之點數或遊戲費用，或依雙方同意之方式處理前述點數或費用。
            </li>
          </ol>
          <p>
            <strong>第十九條　停止營運</strong>
          </p>
          <ol>
            <li>
              因乙方停止本遊戲服務之營運而終止契約者，應於停止終止前三十日公告於官網首頁、遊戲登錄頁面或購買頁面，並依甲方登錄之電子郵件信箱通知甲方。
            </li>
            <li>
              乙方未依前項期間公告並通知，除應退還甲方未使用之付費購買點數或遊戲費用且不得扣除必要成本外，並應提供其他合理之補償。
            </li>
          </ol>
          <p>
            <strong>第二十條　送達</strong>
          </p>
          <ol>
            <li>
              有關本契約所有事項之通知，甲方同意乙方得依甲方登錄之電子郵件信箱為送達。
            </li>
            <li>
              前項登錄資料若有變更，甲方應即通知乙方。乙方應依變更後之通訊資料為送達。
            </li>
            <li>
              乙方依甲方登錄之通訊資料所為之通知發出後，以書面通知到達甲方，或電子郵件進入甲方之電子郵件伺服器中，推定為已送達。
            </li>
            <li>
              因甲方之故意或過失致乙方無法為送達者，乙方對甲方因無法送達所致之損害不負賠償責任。
            </li>
          </ol>
          <p>
            <strong>第二十一條　準據法</strong>
          </p>
          <p>本契約以中華民國法律為準據法。</p>
          <p>
            <strong>第二十二條　管轄法院</strong>
          </p>
          <p>因本契約而生之事件，雙方合意以台北地方法院為第一審管轄法院。</p>
        </div>

        <div className="mt-8">
          <p className="title">遊戲管理規章</p>
          <p>
            親愛的大頭家娛樂城玩家您好，為了提供廣大使用者更健康的服務，本公司所制定的相關規範（以下簡稱「本規章」），也需要各位玩家一起遵守規章內容，讓各位玩家帶來更良好的遊戲環境。
          </p>
          <p>
            當註冊進入遊戲時，視同每一位玩家都同意接受遊戲條款和遊戲規則。若玩家違反下述規則，本公司得視情節輕重，進行永久或暫時中止會員之全部或部份網路服務使用權及回收相關電磁紀錄。玩家應於系統寄送停權通知之日起7天內聯絡官方客服信箱或大頭家娛樂城Facebook粉絲團提出申訴，爾後經查證停權理由屬實者，將不予復權且該案件不得再提申訴；逾期未提出申訴者，將依本規章辦理，由使用者自行承擔遊戲帳號連帶之所有相關損失、損害與責任，以及一切大頭家娛樂城中所使用點數等損失，本公司將不負任何賠償及退還相關費用或法律責任。
          </p>
          <p>一、使用者登錄資料正確性</p>
          <ol>
            <li>
              使用者資料需確實登記，帳號登錄以手機門號驗證為同一者認定，在本公司網站註冊之個人基本資料（以下簡稱註冊資料）與實際狀況不符時，本公司將不對其帳號提供服務（例如：帳號、密碼查詢、申請遊戲歷程、活動領獎等），並得將該違規帳號或其相關連帳號規定處理。
            </li>
            <li>
              若使用者於註冊帳號時，使用不實之註冊資料或將其「遊戲帳號」、「密碼」或「遊戲相關資料」洩漏，或以有償、無償方式轉讓予他人時，本公司有權依照本規章規定與該違規帳號或其相關連帳號終止契約之處理，並由使用者自行承擔所有相關之損失與損害，如讓本公司受有其他損害者需賠償本公司之損害，本公司亦保留所有法律追訴之權利。
            </li>
          </ol>
          <p>二、違規罰則規範</p>
          <p>違規項目罰則說明</p>
          <ol>
            <li>
              使用不當名稱與帳號
              <p>
                給予3日更換期限，若未改善將視情節嚴重程度處以【永久禁言】(強制更換)或【終止契約】
              </p>
            </li>

            <li>
              遊戲中進行不當發言
              <p>惡意洗頻 (含表情符號、斷字句、指令)</p>
              <p>初犯：禁言3日</p>
              <p>累犯：禁言7日</p>
              <p>視情節嚴重程度將處以【永久禁言】或【終止契約】</p>
            </li>

            <li>
              遊戲中使用不當頭像
              <p>
                給予3日更換期限，若未改善將視情節嚴重程度處以【永久禁言並強制更換】或【終止契約】
              </p>
            </li>

            <li>
              遊戲中以不當方式取得遊戲利益 <p>查證期間將處以【暫時凍結】</p>
              <p>查證屬實將處以【終止契約】</p>
              <p>
                視情節嚴重程度將處分相關帳號、降低信用評分，並採法律途徑處理，且須賠償官方損失。
              </p>
            </li>

            <li>
              遊戲中進行廣告廠商行為、利用遊戲平台散佈、宣傳具商業廣告、或刊登援交色情之資料、網站，或從事仲介行為
              <p>初犯：禁言3日</p>
              <p>累犯：禁言7日</p>
              <p>
                視情節嚴重程度將降低活躍度評分，並處以【永久禁言】或【終止契約】
              </p>
            </li>

            <li>
              有意或無意利用遊戲之BUG、惡意透過遊戲網站程式漏洞散佈或使用外掛程式，或擅自修改所獲取之不當遊戲幣
              <p>
                帳號（含所有相關帳號）將先處以【暫時凍結】，經查證屬實將【終止契約】，視情節嚴重程度將處分相關帳號、降低信用評分，並採法律途徑處理，且須賠償官方損失。
              </p>
            </li>

            <li>
              販售、購買、收受、轉讓遊戲點數、遊戲幣、虛擬物品（非遊戲內正常使用），或販售、購買、收受、轉讓遊戲帳號
              <p>查證屬實將處以【終止契約】</p>
              <p>
                視情節嚴重程度將處分相關帳號、降低活躍度評分，並採法律途徑處理，且須賠償官方損失。
              </p>
            </li>

            <li>
              疑似／使用虛偽不正之方式進行儲值
              <p>
                帳號將先處以停權7日進行調查，嚴重者將處以【終止契約】，視情節嚴重程度將處分相關帳號、降低活躍度，並採法律途徑處理，且須賠償官方損失。
              </p>
            </li>

            <li>
              惡意申訴回報／蓄意妨礙GM查緝／影響GM及客服中心作業
              <p>
                使用者假冒官方人員名義造成誤認為客服人員或遊戲管理員之暱稱，與使用者進行任何互動
              </p>
              <p>初犯：禁言三日並降低信用評分</p>
              <p>累犯：停權七日</p>
              <p>情節嚴重者，將處以【終止契約】</p>
            </li>

            <li>
              大量（一個自然人持有5個以上）新申請帳號破壞遊戲秩序、同一段期間內同IP或同裝置被5個以上帳號登入等
              <p>
                一經發現或檢舉將回收帳號（含所有相關帳號）所得之不當得利、降低信用評分或【終止契約】處置，情節嚴重者本公司將採取法律途徑處理。
              </p>
            </li>

            <li>
              大量（一個自然人持有5個以上）註冊帳號利用遊戲取得不當得益、同一IP帳號或同裝置下的任何不當使用或濫用資助行為，明知遊戲幣、道具是違法或不當取得仍作收受之行為
            </li>
            <p>
              一經發現或檢舉將回收帳號（含所有相關帳號）所得之不當得利、降低信用評分或【終止契約】處置，情節嚴重者本公司將採取法律途徑處理。
            </p>

            <li>
              利用遊戲平台提及、散佈、宣傳中華民國法令所不允許之言論或引誘他人犯罪之言論。（例如：硬的、軟的、男生、女生、買賣糖果等所有販毒代名詞）
              <p>查證屬實將處以【終止契約】</p>
              <p>視情節嚴重程度將採法律途徑處理，且須賠償官方損失。</p>
            </li>

            <li>
              盜（冒）用他人帳號、暱稱、頭像等可直接或間接識別出特定個人的資料之行為，主管機關來函要求鎖定、或經司法機關查獲、或查證使用者疑似從事不法之行為
              <p>查證屬實將處以【終止契約】</p>
              <p>
                視情節嚴重程度將處分相關帳號、降低活躍度，並採法律途徑處理，且須賠償官方損失。
              </p>
            </li>
          </ol>
          <p>註：</p>
          <ol>
            <li>
              本公司得視使用者違反上列各點事項之情狀、次數及嚴重程度等因素，於基本處罰方式以外採取任何本公司認為適當之處置，違規之使用者不得異議。
            </li>
            <li>
              使用者同意於本公司處以終止契約等處置後，使用者均不得以已儲值且使用（如：兌換成遊戲幣或虛擬商品等）之點數，向本公司或原儲值平台要求退費或請求損害賠償。
            </li>
          </ol>
          <p>※以上部份管理與處罰事項，於下方【違規事項說明】內詳述。</p>
          <p>
            <br />
            <br />
          </p>
          <p>違規罰則規範說明：違規事項屬於不當行為（應包含但不限以下行為）</p>
          <p>
            （一）若查明屬實確有以不當方式來進行遊戲，例：人為操作、蓄意偽造、使用不實或虛偽身份、多開（重）帳號、短時間異常多筆參與行為、透過任何電腦程式參與活動、詐欺、任何違反本遊戲服務條款或遊戲規章之情事者、使用本公司服務或藉由本公司服務從事不當行為者，造成其他使用者線上虛擬財產（包含但不限於金幣/遊戲道具等）損失或競賽不公，本公司得按其情節輕重限制其遊戲使用權利，因上述情形所獲得之活動資格及獎項，本公司得一概取消之。以維護其他使用者權益與大頭家娛樂城遊戲環境。遊戲中禁止販售、購買遊戲幣或其他虛擬物品。除此之外，所有參與或協助違反本遊戲管理規章行為之使用者帳號，本公司亦將以相同條例處理之。
          </p>
          <p>（二）不當行為應包含但不限於以下行為：</p>
          <p>
            (1)
            惡意利用遊戲之BUG、惡意透過遊戲網站程式漏洞散佈或使用外掛程式，或擅自修改所獲取之不當遊戲幣，或以任何形式之非遊戲所附程式（舉例：侵入、攔截、破壞、修改遊戲資料、封包值、按鍵精靈），或任何更改原始程式及系統上的鎖定與解除鎖定系統設定等不正當方式，或其他違反遊戲常態設定或公平合理之方式進行遊戲，或透過非法軟體、程式進行任何可能破壞遊戲內平衡性、影響其他玩家權益、造成遊戲不公等影響遊戲系統之行為，來取得遊戲中不當遊戲戰績、影響遊戲公平性者。
          </p>
          <p>
            (2)
            以他人帳號進行交易、利用遊戲獲取不當得益或其他違反公平合理之方式使用本服務者。
          </p>
          <p>
            (3)
            利用大頭家娛樂城遊戲平台上或大頭家娛樂城各款遊戲中的機制，刻意造成金幣等遊戲資產不當流向。
          </p>
          <p>(4) 於遊戲中進行買賣遊戲幣、遊戲點數或其他相關虛擬物品。</p>
          <p>
            (5)
            利用大頭家娛樂城遊戲平台提及、散佈、宣傳具商業廣告或刊登援交色情之資料、網站，或從事仲介行為。
          </p>
          <p>(6) 傷及第三人權益與隱私之行為。（例如：違反個人資料保護法）</p>
          <p>
            (7) 干擾、影響遊戲或活動進行，且經線上管理人員勸告仍不聽從改善。
          </p>
          <p>
            (8)
            冒用本公司遊戲客服人員或遊戲管理員之身分、使用其他容易造成誤認為官方人員之暱稱，或申請容易造成誤認為客服人員或遊戲管理員之暱稱，與使用者進行任何互動。
          </p>
          <p>
            (9)
            利用大頭家娛樂城遊戲平台中的聊天系統，以毀謗、不實、威脅、不雅、猥褻、不法、人身攻擊、或以含淫穢之意（含音似者）、種族歧視之言語攻擊其他使用者或連續性發言。
          </p>
          <p>(10) 於大頭家娛樂城遊戲大廳中惡意洗頻。</p>
          <p>
            (11)
            於大頭家娛樂城遊戲內儲值平台上，儲值後退款或使用其它虛偽不正之方式取得不當利益。
          </p>
          <p>(12) 明知遊戲幣、道具是違法或不當取得仍作收受之行為</p>
          <p>
            (13)
            利用遊戲漏洞獲得益處，或大量新申請帳號破壞遊戲秩序者，及大量註冊帳號利用遊戲取得不當得益。
          </p>
          <p>(14) 同一IP帳號或同裝置下的任何不當使用或濫用資助行為。</p>
          <p>(15) 同IP或同裝置短時間內被5個以上帳號登入。</p>
          <p>（三）發言不當</p>
          <p>
            為保持遊戲的善良風氣及所有使用者都可正常觀看與使用遊戲頻道，請使用者遵守網路禮儀，以維持乾淨單純的遊戲空間。使用者於大頭家娛樂城遊戲平台的發言中，包含利用『直接、間接、影射、方言、俚語、錯字（注音文）、錯別字、數字或圖形等代替一般的髒話、諧音、解剖學名辭、污辱及這類相關字詞的正、反向書寫等方式，與文字組合後具有下述定義的字眼與內容皆為不被允許情形』。大頭家娛樂城遊戲平台上若有以下狀況，客服人員有權於無事先告知的情況，依各式情形直接進行處分，若於頻道上所發表之言論是不被允許，但未被列於以下限制說明，將由客服人員依道德社會觀念之公正認定進行裁決處以【禁言】處分：
          </p>
          <p>
            (1)
            使用者於大頭家娛樂城遊戲平台或遊戲公開頻道中發送含有低級、褻瀆、粗魯、辱罵、誹謗、人身攻擊、威脅、挑釁、種族與性別歧視、不雅文字、猥褻及含煽情淫穢、具有色情內容或含意、有違社會善良風俗的慣用詞彙之言詞內容，影響其他使用者進行遊戲。
          </p>
          <p>
            (2)
            使用者於大頭家娛樂城遊戲平台中，遊戲言詞內容假冒官方人員，或是自稱官方代表、遊戲管理者等。蓄意妨礙、辱罵或欺騙官方人員。
          </p>
          <p>
            (3)
            於大頭家娛樂城遊戲平台散佈對於公司未經證實或無具體事實根據之不實言論，包含惡意以文字或圖片形式公開、未公開之訊息，或是純屬使用者個人揣測等。企圖影響其他使用者進行遊戲之觀感，若因此造成本公司損害，本公司保留一切法律追訴之權利請求相關損害賠償。
          </p>
          <p>
            (4)
            於大頭家娛樂城遊戲平台公開頻道（三人以上即屬公開頻道）洗頻或重複發言多次，造成使用者無法正常觀看頻道之情形，例如持續發送無意義的內容（如英數字、亂碼、符號、表情、指令、系統預設文字），或使用相同循環之文字進行重覆且有頻率的方式發言，皆構成洗頻。
          </p>
          <p>
            (5)
            使用者於公開頻道上處理私人糾紛或互相謾罵，以及試圖散佈並影響其他使用者加入紛爭，干擾其他使用者進行遊戲。
          </p>
          <p>
            (6)在遊戲內、官網及粉絲團中隱喻或聲稱將會尋找並且傷害任何個人（例如玩家、遊戲團隊或遊戲相關者）是嚴格禁止的。
          </p>
          <p>
            (7)
            於大頭家娛樂城遊戲平台上，違反保護個人隱私資料之情事，例如：透露其他使用者之大頭家娛樂城個人資料。
          </p>
          <p>
            (8)
            於大頭家娛樂城遊戲平台上進行商業廣告之行為與內容（如兜售與非遊戲相關商品、涉及現實有價物交易之廣告行為）。
          </p>
          <p>
            (9)
            於大頭家娛樂城遊戲平台上，放送買賣、收售遊戲幣、遊戲點數、遊戲道具或其他相關等言論。
          </p>
          <p>（四）不當名稱與非法頭像（含遊戲內暱稱、大頭貼）</p>
          <p>
            遊戲內的角色名稱及個人簽名檔為使用者可自行輸入的內容，使用者角色及個人簽名檔，有違反命名規定的不當內容將無需事先告知的情況下執行停權的處置。若有以下狀況，系統將優先告知玩家限期更改，若未限期改善則處以永久禁言或終止契約處分，但未列於以下限制說明，將由客服人員依道德社會觀念之公正認定進行裁決，網站及各式名稱不得與官方工作人員名稱類似、假冒本公司相關組織名稱，及容易與工作人員混淆之名稱，包含中間僅以普通使用者可能無法辨識之特殊字形區隔之以上類似組合。
          </p>
          <p>
            例如：客服、GM等皆屬本公司官方人員。有影射、褻瀆、粗魯、辱罵、誹謗、人身攻擊、威脅、挑釁遊戲公司或所屬從業人員含意之使用者暱稱。例如：虎嘎甲賽。
          </p>
          <p>
            遊戲角色名稱含有種族與性別歧視、不雅文字、猥褻及含煽情淫穢、具有色情內容或含意、有違社會善良風俗的慣用詞彙之言詞。例如：一夜情、優質妹。遊戲角色名稱含中華民國法律所定之不法行為或誘人犯罪文字。（例如：販毒，言詞中含販毒之名稱）。
          </p>
          <p>（五）利用程式錯誤（BUG）進行遊戲（含提及、宣傳、散播相關消息）</p>
          <p>
            使用者不可利用遊戲中非自然、非刻意之錯誤BUG、遊戲漏洞，或以違反公平合理之方式、手段進行遊戲（未公告BUG之部份將以本公司認定為主）；
          </p>
          <p>
            甚至造成加重伺服器負擔或當機等，讓自己受惠及牟利他人，導致遊戲失衡之行為，使用者在發現遊戲的BUG後，應及時向遊戲管理人員反映。如使用者利用遊戲程式BUG、漏洞或規則未盡完善之處及其他任何非正常方式而取得之不當利益等等，導致遊戲造成不平衡等損失，與影響其他使用者權益，及不屬於原先設計範圍效果，所有關係者經查證屬實後之一切資料，本公司將遊戲帳號採取【暫時凍結】方式，並回收使用者利用BUG進行遊戲而直接或間接獲得之非法利益，但若發生過於重大而具無法正確回收非法利益之情節，或該非法利益可能連帶產生其他無法回溯之情況，本公司將直接【終止契約】，並採法律途徑處理且須賠償官方損失。
          </p>
          <p>（六）惡意篡改遊戲程式</p>
          <p>
            使用者不得侵入、攔截、破壞遊戲程式，或對遊戲進行修改、編譯、修改遊戲程式記憶體編碼或解除遊戲程式加密，或以任何方式篡改、複製更改封包及數值等，或其他違反遊戲常態設定或公平合理之方式進行遊戲，或透過非官方授權軟體、程式進行任何可能破壞遊戲內平衡性、影響其他玩家權益、造成活動比賽不公等影響遊戲系統之行為來變更遊戲程式內容資料，而取得之不當利益增加等，導致遊戲造成不平衡等損失，與影響其他使用者權益及造成不屬於原先設計範圍效果，所有關係者經查證屬實後之一切資料，本公司經查證屬實者，將回收使用者惡意篡改遊戲程式進行遊戲而直接或間接獲得之非法利益，本公司有權於無事先告知之情況，立即對所有相關帳號【終止契約】，其非法所得之遊戲幣、道具等將一併回收，且本公司將保留法律追溯權。
          </p>
          <p>
            （七）遊戲內不允許以不當使用或濫用贈禮系統，當贈禮時涉及資助之玩家遊戲帳號皆將受到審查，若經發現有濫用贈禮系統的現象，本公司有權於無事先告知之情況，立即對所有相關帳號【終止契約】，其非法所得之遊戲幣、道具等將一併回收，且本公司將保留法律追溯權。
          </p>
          <p>（八）非法行為應包含但不限於以下行為：</p>
          <p>
            (1)
            違規事項皆屬非法作為，應包含但不限於以下行為：於大頭家娛樂城遊戲平台上進行販賣毒品、槍械等不法物品或涉及刊登援交、色情等不法廣告。大頭家娛樂城遊戲平台上散佈具有犯罪行為或教唆犯罪之內容。大頭家娛樂城遊戲平台提及、散佈、宣傳中華民國法律所定之不法行為誘人犯罪（例如：販毒、言詞中含販毒之名稱）。
          </p>
          <p>
            (2)
            大頭家娛樂城遊戲平台上盜（冒）用他人帳號、資料、其它違反中華民國法令之行為、接獲主管機關來函要求鎖定、經司法機關查獲，或查證使用者疑似從事不法之行為。
          </p>
          <p>三、舉發『駭客』、『舞弊』</p>
          <ol>
            <li>
              為落實維護遊戲公平性與協助本公司取締可能以『駭客』和『舞弊』之行為的使用者，您同意大頭家娛樂城無須向您通知即可從您的電腦及其元件中包括但不限於獲得某些資訊，包括您的IP位址、裝置ID、Cookies等相關資訊，其中包含是否同時有與大頭家娛樂城同時運行之『未經許可的第三方程式』。前述資訊僅用於保護使用者、維護遊戲品質及找出惡意不當，或違法行為之使用者等及追溯資料。
            </li>
            <li>
              上述所稱『未經許可的第三方程式』意指未經本公司同意使用之程式，包括但不限於本公司獨自判定：（1）能進行或提供任何舞弊；（2）能修改或侵入遊戲介面、環境；（3）攔截、挖掘或以其他方式或通過遊戲收集資訊的任何第三方軟體。
            </li>
          </ol>
          <p>四、虛擬物品及遊戲幣相關規定</p>
          <ol>
            <li>
              使用者於本應用程式中所取得之虛擬遊戲幣或其他虛擬商品，無論為使用者透過儲值點數或其他付款方式有償取得，或透過應用程式無償取得，均僅為進行應用程式中所提供遊戲之娛樂用途，不具任何交易價值。
            </li>
            <li>
              除法律或平台業者之條款另有規定者外，本公司不會將已撥入使用者帳號之虛擬遊戲幣或虛擬商品進行兌換為金錢或其他有價值之物品，使用者亦不得以任何方式請求本公司或任何人將虛擬遊戲幣或虛擬商品進行兌換為金錢或其他有價值之物品，若使用者帳號私下有其他交易行為而造成個人損失，本公司將不負責賠償或其他法律責任。
            </li>
            <li>
              遊戲中所提供之虛擬物品，只針對特殊活動與單一帳號進行發放，使用者帳號不得要求本公司將真實身分下之所有遊戲帳號與個別虛擬物品集中或轉移到特定遊戲帳號。
            </li>
            <li>
              大頭家娛樂城提供虛擬遊戲幣互相贈與功能系統，但僅提供正常轉換機制，嚴禁遊戲幣買賣交易之行為，如使用者仍不聽從規勸，大頭家娛樂城則不承擔使用者帳號間私下交易之相關問題處理，且使用者不得以私下交易的結果要求本公司取消已完成轉換之虛擬物品或遊戲幣。
            </li>
            <li>
              使用者帳號若於現實生活中與他人具涉及本遊戲之人物以及其他各項電磁記錄之交易或互易行為，因此所產生之糾紛皆與本公司無任何關聯。
            </li>
            <li>
              因天災、不可抗力或其他非人為因素而導致使用者遊戲資料或紀錄的毀損或滅失，本公司則無須負賠償責任。
            </li>
            <li>
              使用者所購買的點數卡一經儲值後，即表示使用者已經確認系統下各項服務之消費規範並視為已經進行使用；存入使用者帳號的遊戲點數，將無法轉讓給第三者，也不得請求本公司或原儲值平台退費或請求損害賠償。
            </li>
            <li>
              使用者發現遊戲帳號遭人非法使用，或有任何異常破壞使用安全之情形，應立即通知本公司；若因可歸責於使用者而導致帳號、密碼、遊戲資料遭他人非法使用所造成之損失，本公司則不負責處理相關糾紛及賠償。
            </li>
            <li>
              因遊戲版本更新造成部分使用者出現遊戲版本不正確，或任何因使用者帳號個人因素而無法繼續進行遊戲（同時段內非所有的使用者帳號無法登入大頭家娛樂城遊戲伺服器），則本公司將盡力提供諮詢服務，協助使用者帳號繼續使用本公司之服務，但該處理時段內因使用者帳號個人電腦設備問題、自身與其他協力廠商、相關電信業者網路系統軟硬體設備之故障或失靈造成無法遊戲的損失，本公司將不負損害賠償責任。
            </li>
            <li>
              除了大頭家娛樂城舉辦之活動與遊戲程式本身之問題外，使用者帳號間任何私下交易之結果皆與本公司無關。
            </li>
          </ol>
          <p>五、競賽活動規範、其他特殊活動辦法與管理</p>
          <p>
            舉凡本公司因功能需求或針對不同主題所舉辦之特殊活動，本公司將提供該項功能/活動的使用說明與規範，若使用者對於新增的服務內容或遊戲活動比賽方式有不同意之處，請勿使用該項功能或請勿參與該項活動比賽。
          </p>
          <ol>
            <li>
              舉凡本公司與有獎競賽相關的各活動，無論為常態或不定期舉辦，使用者一旦經由遊戲管理員查明屬實，確於各項競賽活動中從事本遊戲管理規範中所明訂禁止之行為，或其他未列舉而影響遊戲公平性的非正當遊戲方式，本公司將按照本規章從嚴處置，並判定喪失繼續參賽與獲獎資格。
            </li>
            <li>
              如有任何因手機、平板、電腦、網路、電話等之軟硬體技術問題或因使用者設備網路不穩、未依遊戲設定完整操作、伺服器維護導致斷線、連接失敗等不可歸責於本公司之事由，而使系統誤送活動訊息或得獎通知，或致使用者所寄出或登錄之資料有延遲、遺失、錯誤、無法辨識或毀損之情況，進而影響活動參與，本公司均無須承擔相關之責，並活動照常舉行，且不另作補償。
            </li>
            <li>
              參賽玩家若於活動獎項贈出前違反任何服務條款或遊戲規章並經官方認定屬實，將失去參與活動/領獎之資格。開獎時若抽出上述違規玩家之遊戲帳號/獎券號碼，則視為無效/無效券號碼，並其獎項保留續抽；如得獎後始違規者，其抽中之獎項一律取消，不得異議。
            </li>
            <li>
              各競賽活動若有其他未在本規章訂定範圍內之條文，將在各競賽活動之相關網頁中另行訂定，並自其公告日起生效實施。
            </li>
          </ol>
          <p>六、本公司之客服及遊戲管理員（GM）不予受理之情事</p>
          <ol>
            <li>
              持續發送空白或毫無意義之訊息給遊戲管理員（GM）內容，以致於影響其他使用者諮詢，經遊戲管理員（GM）告知無效後，將暫時拒絕提供該使用者線上諮詢服務。
            </li>
            <li>
              在特定活動或競賽的相關規定期限後，逾期詢問虛擬或實體贈品、獎品之兌獎領獎事宜。
            </li>
            <li>
              點數卡若經開卡儲值後，要求本公司進行回復、轉讓、更改配點設定。
            </li>
            <li>
              本公司禁止使用者利用大頭家娛樂城服務進行任何商業行為。若使用者之間有任何私下交易，不得以結果或糾紛要求本公司取消或回復已完成的虛擬遊戲幣/虛擬物品之轉匯，惟使用者違反服務條款或遊戲規章時，本公司將依照相關規範進行處理。
            </li>
            <li>
              使用者之間私人恩怨、糾紛，遊戲管理員（GM）不介入處理，但不得於公開頻道發送低級、褻瀆、粗魯、辱罵、誹謗、人身攻擊、威脅、挑釁、種族與性別歧視、不雅文字、猥褻及含煽情淫穢、具有色情內容或含意、有違社會善良風俗的慣用詞彙之言詞內容，影響其他使用者進行遊戲之觀感。
            </li>
            <li>
              詢問關於公司內部、系統方面、遊戲內部數值設定或是GM私人問題，與其他使用者的個人資料等非相關遊戲進行之問題，為保護公司內部機密資訊與運作之機密資料，及保持高品質的服務並保障所有使用者的權益，本公司將不受理使用者詢問，敬請使用者配合。
            </li>
            <li>
              使用者間發生虛擬幣/虛擬物品轉移糾紛時，需請雙方自行調解，遊戲管理員不擔任仲裁的角色亦不受理類似的相關問題。
            </li>
          </ol>
          <p>七、本公司不進行損失補償之情形</p>
          <ol>
            <li>
              使用者若因本身網路服務業者網路斷線、自動離線、電腦程式錯誤，發生斷線之情形，而造成遊戲資料或記錄有所損失，如戰績與點數。
            </li>
            <li>
              因戰爭、天災、其他不可抗力因素或其他不可歸責於本公司之因素，導致使用者於遊戲中途被迫離線，係屬無法事先防範之事實災害。因此使用者當日所損失的遊戲資料，如成就與點數，本公司將不另作損失補償。
            </li>
          </ol>
          <p>八、相關風險與責任，需由使用者自行負擔之情形</p>
          <ol>
            <li>本公司之各項使用者服務可能發生下列情形：</li>
          </ol>
          <p>（一）網站設備進行必要之保養。</p>
          <p>
            （二）自身與其他協力廠商或相關電信業者網路系統軟硬體設備之故障或失靈。
          </p>
          <p>
            （三）因人為操作上之疏失而造成中斷、暫時無法使用、遲延、資料傳輸或儲存上之錯誤。
          </p>
          <p>（四）遭第三人侵入系統篡改或偽造變造資料。</p>
          <p>
            （五）因戰爭、天災、其他不可抗力因素或其他非人為因素，致使本公司設備無法正常運作。
          </p>
          <ol>
            <li>
              上述情形，本公司將不擔保各項服務之正確、完整、安全、可靠、合適、時效、穩定、不會斷線及出錯。
            </li>
            <li>
              使用者需明白使用本服務之所有風險及可能致生之任何損害，不得因此而要求任何補償或賠償，並且同意本公司對於使用者所傳送之電子郵件、檔案及其他資料做備份。若因使用者所為之傳送過程而造成電子郵件、檔案及其他資料之遺失，本公司則不負任何擔保責任。
            </li>
            <li>
              使用者在本公司遊戲中或網站上傳之資料（如談話、指令等），其內容限制如下：
            </li>
          </ol>
          <p>（一）禁止侵犯任何第三者之智慧財產權、版權或公眾/私人權利。</p>
          <p>（二）禁止違反任何法律或善良風俗。</p>
          <p>
            （三）禁止任何毀謗他人，性騷擾，種族歧視或對孩童有不良影響的內容。
          </p>
          <ol>
            <li>
              以上均屬於使用者之個人行為，一旦發生，使用者須自行負擔所有相關法律責任。
            </li>
          </ol>
          <p>九、交易或購買使用非法儲值序號</p>
          <ol>
            <li>
              線上購買來路不明的遊戲儲值序號/幣值/遊戲物品有可能受騙，使用者不得與他人私下進行遊戲點數交易，若因此購買到利用線上付費機制（如信用卡、電信小額付費）盜刷或退款而得的遊戲儲值序號，本公司不負賠償責任。
            </li>
            <li>
              本公司禁止使用者利用大頭家娛樂城服務進行任何商業行為。若使用者之間有任何私下交易，其結果或糾紛本公司皆一概不負責任。
            </li>
            <li>
              使用者有義務妥善保管在大頭家娛樂城之遊戲帳號、密碼及相關資訊，不洩露、出借、轉讓，或提供予第三人知悉。
            </li>
            <li>
              若發現遊戲帳號或密碼遭他人盜用、非法使用或有任何異常破壞使用安全之情形，應立即通知本公司，並須證明為遊戲帳號持有人，以利本公司採取相關措施。但不得將本公司所採取之措施解釋為本公司有明示、默示或暗示擔保或賠償之責任。對於玩家的遊戲帳號及密碼遭他人非法使用，本公司將不負任何相關與賠償責任，但可於30日內申請遊戲歷程至各地警察局電腦犯罪偵查組報案，依照法律程序起訴處理。
            </li>
          </ol>
          <p>十、網路犯罪報案（所有資訊以單位網站公布之資訊為主）</p>
          <p>
            目前針對網路遊戲上使用者帳號遭盜用或詐騙，司法單位在實行網路犯罪報案程序時，第一時間需要遊戲帳號持有者提出該帳號持有證明及相關報案必備資料。
          </p>
          <p>
            此時，使用者可與本公司聯絡以申請遊戲帳號證明書及遊戲歷程；當相關文件完成，本公司將優先以傳真或E-mail方式寄送該遊戲帳號所屬『遊戲歷程』。
          </p>
          <p>
            本公司依據相關法令而恕不能主動為您提出網路犯罪相關的控訴，由於大部分的詐騙行為是誘導使用者以交易方式達成目的，以達到留下銀貨兩訖的確認交換動作，以官方立場依據記錄是難以判斷任何交易糾紛，並且無法依照單面說詞而為使用者強制回收財物，或告知對方資料及對此類問題予以裁奪，敬請使用者特別注意。
          </p>
          <p>
            如使用者不幸發生欺詐事件，因上述行為產生涉及法律行為之糾紛，被害者可儘快與客服聯繫，並依正確客服流程申請相關報案必備資料，請至鄰近縣市警察局報案，當本公司收到相關機關所發函之協助調查公文時，本公司將依法提供司法單位所需之數據資料以供查詢佐證，且盡力協助警方偵辦。
          </p>
          <p>網路犯罪檢舉專線：（02）2764-4490、（02）2764-4434</p>
          <p>北部：台北市刑警大隊：（02）2381-7263</p>
          <p>中部：台中市警察總局：（04）2328-9100</p>
          <p>南部：高雄市警察總局：（07）212-0800</p>
          <p>11、條款變更權利聲明</p>
          <p>
            本公司保有增減、編修或變更本規章條款之權利，且使用者同意大頭家娛樂城遊戲網站之使用皆受本規章最新版本的拘束，前述公佈各項規範並視為構成對使用者的有效通知。
          </p>
        </div>
      </div>
    </section>
  )
}

function RulesPage() {
  const router = useRouter()
  if (router.query.layout) {
    return (
      <Layout>
        <PageBanner />
        <Rules />
      </Layout>
    )
  }
  return <Rules />
}

export default RulesPage
