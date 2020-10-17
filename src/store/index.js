import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upperProfiles: [
      {id: 1, value: "true", text1: "名古屋に住んでいます", text2: "もとは福岡に住んでいました"},
      {id: 2, value: "true", text1: "PHP/HTML/CSSとか", text2: "Ruby/Railsはうろ覚え"},
      {id: 3, value: "true", text1: "仮面ライダーちょい好き芸人", text2: "ここ２年見れてません泣"}
    ],
    rowerProfiles: [
      {id: 1, value: "true", text1: "自社サイトの運用保守", text2: "開発職に憧れています!!"},
      {id: 2, value: "true", text1: "もくもく会したい!!", text2: "本当は無口で人見知り"},
      {id: 3, value: "true", text1: "Twitterで時々つぶやく", text2: "いいね&フォローお願い!!"}
    ],
    modalDatas: [
      {id: 1, value: false, title: "1987年11月9日",text: "大阪で誕生する。<br>この頃は、年季の入った2階建てのアパートに住んでいて、1階に住むじーちゃんによく遊んでもらっていました。子供の頃の私のお気に入りのおもちゃは、「タングラム」という木でできたパズル。自由に組み合わせて矢印の形を作ったり、魚の形を作ったりしていました。", img: require('@/assets/img/01.png')},
      {id: 2, value: false, title: "1992年〜", text: "母の実家のある宮崎に移住する。<br>同じ団地に住むヒロちゃんと毎日遊んでいました。虫取りやザリガニ釣り、裏山に生えている柿をもいで食べたり、今思えば人生で1番アクティブだったのかもしれない。もちろん、ミニ四駆とか同世代の子が経験した遊びもしていました。", img: require('@/assets/img/02.png')},
      {id: 3, value: false, title: "1997年8月頃〜",text: "大都会岡山に移住する。<br>28歳まで住んでいました。岡山に来てからは、自然と触れうことは減り、遊戯王、ポケカ、マジックなどカードゲームにドハマリしていました。ただ弱かったので、毎週末のマジックの大会では友人を応援するばかり。そして勉強はおろそかになってゆく。。", img: require('@/assets/img/03.png')},
      {id: 4, value: false, title: "2006年4月1日〜", text: "地元の私立大学へ進学する。<br>人生で最も退屈を噛みしめていた時期。友達の作り方がわからなくて（いまだにそうだけど）毎日、無言で過ごしていました。誰もいない屋上で空を見ながらMDプレーヤーの音楽を聞いてました。でも大抵屋上って陽キャに見つかるんだよね(泣)", img: require('@/assets/img/04.png')},
      {id: 5, value: false, title: "2007年6月1日〜", text: "イベント企画系のボランティアに入る。<br>地元成人式の実行委員に入り、式典の企画/運営を行いました。これを見ていた当時の市長さんからお声がかかり、その後地元の婚活イベントの企画/運営のボランティアをするようになりました。大学3年生から一気に友だちが増えていきました。やったね!!", img: require('@/assets/img/05.png')},
      {id: 6, value: false, title: "2010年3月〜", text: "就職活動に大苦戦する。<br>70社以上受けましたが、内定はもらえず。意識の高い先輩は履歴書のコピーを「巨大名刺」と言って配りまくっていましたが、私は恥ずかしくて真似できませんでした。結局先輩は地元の大手広告代理店に就職し、私は卒業後も就職活動を続けていました。", img: require('@/assets/img/06.png')},
      {id: 7, value: false, title: "2010年6月1日〜", text: "地元コンサル会社へ就職が決まる。<br>インターン募集で拾っていただき、無事に就職ができました。コンサル会社と言っても私が担当していたのは、職業訓練という制度の講師職。パソコンの基本操作や簿記３級などを担当していました。厳しくもアットホームな会社でした。", img: require('@/assets/img/07.png')},
      {id: 8, value: false, title: "2016年5月2日頃〜", text: "退職し福岡に移住する。<br>28歳にして転職活動を経験することになりました。前職での貯金が少しあったので、思い切って都会の方へ引っ越そうと思い、福岡へ移住。環境が変わったことで多少ストレスもありましたが、転職活動は毎日新鮮でした。しかし３ヶ月経っても内定がもらえず。。。", img: require('@/assets/img/08.png')},
      {id: 9, value: false, title: "2016年7月30日〜", text: "コンビニで働き始める。<br>貯金が減ってきたので、アルバイトしながら転職活動をしようとコンビニで働き始めました。ここで出会ったオーナーさんと意気投合し、結局正社員として働き始めることに。パソコンが使える人な少ない職場だったので、事務補助や販促物制作などを担当しました。", img: require('@/assets/img/09.png')},
      {id: 10, value: false, title: "2020年4月6日〜", text: "プログラミング学習を始める。<br>コンビニでは接客もパソコン業務も経験し、結果パソコンでなにか作ることが向いていると確信しました。オーナーさんに相談しところ、背中を押してもらうことができ退職。当時話題だったTECH CAMPへ入校してエンジニアを目指すことにしました。", img: require('@/assets/img/10.png')},
      {id: 11, value: false, title: "2020年8月31日〜", text: "就職が決まり、名古屋に移住。<br>TECH CAMPを卒業して就職しちゃのは、家具メーカーでした。ここの社内コーダーとして、自社のECサイトの運用/保守を行っています。古いページをモダンに作り変えるという業務を担当しており、今後もまずはフロント系の知識をつけていきたい。", img: require('@/assets/img/11.png')},
      {id: 12, value: false, title: "未来はどうなる？", text: "ポートフォリオを作りたい。<br>30代にして、なんとか転職には成功しましたが、今後はこのような甘い展開はありえません。なので、技術を磨くと同時に転職活動にも耐えうるポートフォリオを作成して行きたいと考えています。在職中に作りきれれば自信にもつながるからです。", img: require('@/assets/img/12.png')}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
