import { Injectable } from '@angular/core';

import { NewsItem } from './news-item';

const NEWS:NewsItem[] = [
{
    number: 1,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170319095334&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/19/paikshow_mxJ11V3Ap02.jpg",
    desc: "BBC 인터뷰 방송사고 패러디 ‘스타워즈’ 폭..."
},
{
    number: 2,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170319103410&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/19/yong2_2LbVz1BU130yBn.jpg",
    desc: "MS, 최신 PC에 윈도 구버전 설치 제한"
},
{
    number: 3,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170318125505&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/18/sontech_7DmAcBk8S23n.jpg",
    desc: "네이버 쇼핑도 쓰는 딥러닝 CNN을 아시나요"
},
{
    number: 4,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170319095310&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/19/lejj_dBs3Ohdq7ajx1v0.jpg",
    desc: "삼성 ‘퀀텀닷’ 킬러 LG ‘나노셀’ 출격"
},
{
    number: 5,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170320065252&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/20/hohocho_X9LALcDp7DKn.jpg",
    desc: "삼성 갤럭시S8, 세 종류 색상 출시",
},
{
    number: 6, 
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170320101924&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/20/sontech_htwdYxBIzIzL.jpg",
    desc: "일주일 만에 '랩하는 AI' 만든 美 10대 소년"
},
{
    number: 7,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170320085016&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/20/guyer73_27pY4A56LkVU.jpg",
    desc: "현대차, '2017 아반떼' 출시...1천570만원부터"
},
{
    number: 8,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170319161356&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/19/yong2_xYShYnLDhZ0QvP.jpg",
    desc: "구글, JPEG 압축률 35% 높인 인코더 공개"
},
{
    number: 9,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170318214121&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/18/imc_crxyOftG7lMojMnb.jpg",
    desc: "인텔CPU·MS오피스 해킹하면 상금 탄다"
},
{
    number: 10,
    href: "http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170316173706&amp;lo=z45",
    img: "http://image.zdnet.co.kr/2017/03/17/yong2_f0vIkD3wFSJfWi.jpg",
    desc: "IT 개발자?…부품과 다를 바 없어요"
}
]

@Injectable()
export class NewsService {
    constructor() { }

    getNews(): Promise<NewsItem[]> {
        return Promise.resolve(NEWS);
    }

    getNewsSlowly(): Promise<NewsItem[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getNews()), 2000);
        });
    }
}

