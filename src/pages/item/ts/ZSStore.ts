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
    name: '家廚小館',
    address: '台北市中山區長安東路二段129巷5號',
    phone: '(02)2507-7845',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=家廚小館+台北市中山區長安東路二段129巷5號',
    cocurrent: true,
  },
  {
    name: '小絨越式河粉',
    address: '台北市中山區長安東路二段129巷4號',
    phone: '0939-551001',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=小絨越式河粉+台北市中山區長安東路二段129巷4號',
    cocurrent: true,
  },
  {
    name: '港都手工麵館',
    address: '台北市中山區長安東路二段129巷2號',
    phone: '(02)2504-5405',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=港都手工麵館+台北市中山區長安東路二段129巷2號',
    cocurrent: true,
  },
  {
    name: '蛋室BUT',
    address: '台北市中山區長安東路二段129巷7號',
    phone: '0976-423794',
    category: '早午餐',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=蛋室BUT+台北市中山區長安東路二段129巷7號',
    cocurrent: true,
  },
  {
    name: '呷尚寶中西式速食 - 建安店',
    address: '台北市中山區建國北路一段62號',
    phone: 'unknown',
    category: '早午餐',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=呷尚寶中西式速食+建安店+台北市中山區建國北路一段62號',
    cocurrent: true,
  },
  {
    name: '4+ Break Breakfast',
    address: '台北市中山區松江路53號',
    phone: 'unknown',
    category: '早午餐',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=4%2B+Break+Breakfast+台北市中山區松江路53號',
    cocurrent: true,
  },
  {
    name: 'MEXIGO墨西哥健康餐盒',
    address: '台北市中山區長安東路二段129巷13號',
    phone: '(02)2507-6608',
    category: '早午餐',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=MEXIGO墨西哥健康餐盒+台北市中山區長安東路二段129巷13號',
    cocurrent: true,
  },
  {
    name: '早吧 Morning Bar 伊通店',
    address: '台北市中山區伊通階41號1樓',
    phone: '(02)2515-2737',
    category: '早午餐',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=早吧+Morning+Bar+伊通店+台北市中山區伊通階41號1樓',
    cocurrent: true,
  },
  {
    name: 'SUBWAY長安松江店',
    address: '台北市中山區長安東路二段92號',
    phone: '(02)2517-7667',
    category: '速食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=SUBWAY長安松江店+台北市中山區長安東路二段92號',
    cocurrent: true,
  },
  {
    name: '得正#台北遼寧計劃',
    address: '台北市中山區遼寧街31號',
    phone: '(02)2711-1270',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=得正+台北市中山區遼寧街31號',
    cocurrent: true,
  },
  {
    name: '麻古茶坊 松江南京店',
    address: '台北市中山區南京東路二段192號',
    phone: '(02)2517-6690',
    category: '飲料',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=麻古茶坊+松江南京店+台北市中山區南京東路二段192號',
    cocurrent: true,
  },
  {
    name: '珍煮丹 台北遼寧店',
    address: '台北市中山區遼寧街27號1樓',
    phone: '(02)2776-0727',
    category: '飲料',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=珍煮丹+台北遼寧店+台北市中山區遼寧街27號',
    cocurrent: true,
  },
  {
    name: '凱樂烘焙 Carol Bakery 長安總店',
    address: '台北市中山區長安東路二段131-4號',
    phone: 'unknown',
    category: '甜點',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=凱樂烘焙+Carol+Bakery+長安總店+台北市中山區長安東路二段131-4號',
    cocurrent: true,
  },
  {
    name: '啡卡咖啡',
    address: '台北市中山區伊通街33號',
    phone: 'unknown',
    category: '點心',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=啡卡咖啡+台北市中山區伊通街33號',
    cocurrent: true,
  },
  {
    name: 'Louisa Coffee 路易莎咖啡(南京建國店)',
    address: '台北市中山區南京東路二段206號',
    phone: 'unknown',
    category: '點心',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Louisa+Coffee+路易莎咖啡+南京建國店+台北市中山區南京東路二段206號',
    cocurrent: true,
  },
  {
    name: '93巷人文空間',
    address: '台北市中山區松江路93巷2號',
    phone: '(02)2509-5085',
    category: '其他',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=93巷人文空間+台北市中山區松江路93巷2號',
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
