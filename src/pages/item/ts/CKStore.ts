export interface Store {
  name: string;
  address: string;
  phone: string;
  category: string;
  discount: string;
  mapUrl: string;
  cocurrent: boolean;
}

export const stores: Store[] = [
  {
    name: '懿品小珍（台北寧波店）',
    address: '台北市中正區寧波西街88之1號',
    phone: '(02)2397-0900',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=懿品小珍+台北市中正區寧波西街88之1號',
    cocurrent: true,
  },
  {
    name: '八方雲集（中正南海店）',
    address: '台北市中正區南海路50—1號',
    phone: '(02)3322-2109',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=八方雲集+台北市中正區南海路50號',
    cocurrent: true,
  },
  {
    name: '昇客雞肉飯',
    address: '台北市中正區寧波西街88號',
    phone: '(02)3393-8141',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=昇客雞肉+台北市中正區寧波西街88號',
    cocurrent: true,
  },
  {
    name: '建中側門抓餅',
    address: '台北市中正區泉州街9號',
    phone: '(02)2303-6907',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=建中側門抓餅+台北市中正區泉州街9號',
    cocurrent: true,
  },
  {
    name: '搭伙',
    address: '台北市中正區泉州街4-1號',
    phone: '(02)2367-3188',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=搭伙+台北市中正區泉州街4-1號',
    cocurrent: true,
  },
  {
    name: '廣東小吃',
    address: '台北市中正區泉州街9號',
    phone: '(02)2307-6310',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=廣東小吃+台北市中正區泉州街9號',
    cocurrent: true,
  },
  {
    name: '金仙快餐便當',
    address: '台北市中正區寧波西街74號',
    phone: '(02)2321-3787',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=金仙快餐便當+台北市中正區寧波西街74號',
    cocurrent: true,
  },
  {
    name: '養鍋 中正店',
    address: '台北市中正區寧波西街81號',
    phone: '(02)2396-9909',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=養鍋+台北市中正區寧波西街81號',
    cocurrent: true,
  },
  {
    name: '三商巧福 南昌門市',
    address: '台北市中正區南昌路一段46號',
    phone: '(02)2396-4135',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=三商巧福+台北市中正區南昌路一段46號',
    cocurrent: true,
  },
  {
    name: '老建中麵店',
    address: '台北市中正區泉州街39號',
    phone: '(02)2337-7968',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=老建中麵店+台北市中正區泉州街39號',
    cocurrent: true,
  },
  {
    name: '南海19(建豆)',
    address: '台北市中正區寧波西街124-2號',
    phone: '(02)2397-4296',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=建豆+台北市中正區寧波西街124-2號',
    cocurrent: true,
  },
  {
    name: '老熊牛肉麵',
    address: '台北市中正區南海路38-2號',
    phone: '(02)2395-7181',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=老熊牛肉麵+台北市中正區南海路38-2號',
    cocurrent: true,
  },
  {
    name: '吉仕達義麵房 南昌店',
    address: '台北市中正區南昌路一段50-2號',
    phone: '(02)2396-8879',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=吉仕達義麵房+台北市中正區南昌路一段50-2號',
    cocurrent: true,
  },
  {
    name: '麵老大 中正區美食',
    address: '台北市中正區寧波西街85-1號',
    phone: '(02)2395-7289',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=麵老大+台北市中正區寧波西街85-1號',
    cocurrent: true,
  },
  {
    name: '福井麵疙瘩',
    address: '台北市中正區寧波西街87-3號',
    phone: '(02)2351-9136',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=福井麵疙瘩+台北市中正區寧波西街87-3號',
    cocurrent: true,
  },
  {
    name: '瑞哥雞肉飯 南海店',
    address: '台北市中正區南海路34號',
    phone: '(02)2396-1255',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=瑞哥雞肉飯+台北市中正區南海路34號',
    cocurrent: true,
  },
  {
    name: 'EBISU KITCHEN',
    address: '台北市中正區寧波西街77號',
    phone: '0966-560-037',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=EBISU+KITCHEN+台北市中正區寧波西街77號',
    cocurrent: true,
  },
  {
    name: '由紀',
    address: '台北市中正區寧波西街76號',
    phone: '0960-843-100',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=由紀+台北市中正區寧波西街76號',
    cocurrent: true,
  },
  {
    name: '雲南小廚',
    address: '台北市中正區泉州街35號-1號',
    phone: '(02)2732-7962',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=雲南小廚+台北市中正區泉州街35號',
    cocurrent: true,
  },
  {
    name: '建中黑砂糖刨冰',
    address: '台北市中正區泉州街35號',
    phone: '(02)2305-4750',
    category: '甜點',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=建中黑砂糖刨冰+台北市中正區泉州街35號',
    cocurrent: true,
  },
  {
    name: '星巴克 南海門市',
    address: '台北市中正區南海路20號',
    phone: '(02)2396-0860',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=星巴克+台北市中正區南海路20號',
    cocurrent: true,
  },
  {
    name: 'CoCo都可 南昌店',
    address: '台北市中正區寧波西街83-2號',
    phone: '(02)2321-3329',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=CoCo都可+台北市中正區寧波西街83-2號',
    cocurrent: true,
  },
  {
    name: 'QBurger 中正寧波店',
    address: '台北市中正區寧波西街100號1樓',
    phone: '(02)2332-5085',
    category: '早午餐',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=QBurger+台北市中正區寧波西街100號',
    cocurrent: true,
  },
  {
    name: '十平方圖書文具館—南海店',
    address: '台北市中正區南海路48號',
    phone: '(02)2356-7768',
    category: '其他',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=十平方圖書文具館+台北市中正區南海路48號',
    cocurrent: true,
  },
  {
    name: '鼎紘影印有限公司',
    address: '台北市中正區寧波西街83號',
    phone: '(02)3393-1312',
    category: '其他',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=鼎紘影印+台北市中正區寧波西街83號',
    cocurrent: true,
  },
  {
    name: '動翅音樂',
    address: '台北市中正區金華街19-1號',
    phone: '(02)2351-0177',
    category: '音樂',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=動翅音樂+台北市中正區金華街19-1號',
    cocurrent: true,
  },
];

export const getStoresByCategory = (category: string): Store[] => {
  return stores.filter((store) => store.category === category);
};

export const getOtherStores = (): Store[] => {
  const otherCategories = ['其他', '運動', '服飾'];
  return stores.filter((store) => otherCategories.includes(store.category));
};

export const goToMap = (url: string): void => {
  window.open(url, '_blank');
};
