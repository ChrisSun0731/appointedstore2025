export interface Store {
  name: string;
  address: string;
  phone: string;
  category: string;
  discount: string;
  mapUrl: string;
}

export const stores: Store[] = [
  {
    name: '十三川日本拉麵定食 公園店',
    address: '台北市中正區公園路18號2樓',
    phone: '0908-181-190',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=十三川日本拉麵定食+台北市中正區公園路18號',
  },
  {
    name: '大立溫州大餛飩',
    address: '台北市中正區公園路20巷2號',
    phone: '(02)2375-9214',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=大立溫州大餛飩+台北市中正區公園路20巷2號',
  },
  {
    name: 'best義pasta食堂',
    address: '台北市中正區南陽街3號2樓',
    phone: '(02)2370-2568',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=best義pasta食堂+台北市中正區南陽街3號',
  },
  {
    name: '玖仰 信陽門市',
    address: '台北市中正區信陽街6-2號',
    phone: '(02)2311-7746',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=玖仰+台北市中正區信陽街6-2號',
  },
  {
    name: '砸鍋賣鐵 中正',
    address: '台北市中正區漢口街一段35號2樓',
    phone: '(02)2388-8301',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=砸鍋賣鐵+台北市中正區漢口街一段35號',
  },
  {
    name: '吉豚屋北車店',
    address: '台北市中正區忠孝西路一段36號B1',
    phone: '(02)2311-3318',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=吉豚屋+台北市中正區忠孝西路一段36號',
  },
  {
    name: '雲客來刀削麵館',
    address: '台北市中正區忠孝西路一段100號',
    phone: '(02)2370-5111',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=雲客來刀削麵館+台北市中正區忠孝西路一段100號',
  },
  {
    name: '洋庭坊義大利麵（重慶店）',
    address: '台北市中正區重慶南路一段63號',
    phone: '(02)2578-5177',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=洋庭坊義大利麵+台北市中正區重慶南路一段63號',
  },
  {
    name: '丸龜製麵 台北地下街店',
    address: '台北市大同區忠孝西路一段 K區地下街47號',
    phone: '0800-000-063',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=丸龜製麵+台北地下街+K區47號',
  },
  {
    name: '得正#北車信陽計劃',
    address: '台北市中正區信陽街13之1號',
    phone: '(02)2311-0977',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=得正+台北市中正區信陽街13之1號',
  },
  {
    name: '可不可熟成紅茶-台北站前店',
    address: '台北市中正區南陽街34號',
    phone: '(02)2370-0600',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=可不可熟成紅茶+台北市中正區南陽街34號',
  },
  {
    name: 'COMEBUY_台北南陽店',
    address: '台北市中正區許昌街26-2號',
    phone: '(02)2361-1255',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=COMEBUY+台北市中正區許昌街26-2號',
  },
  {
    name: '咕咕鬆餅屋',
    address: '台北市中正區開封街一段2-52號',
    phone: '(02)2382-2782',
    category: '甜點',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=咕咕鬆餅屋+台北市中正區開封街一段2-52號',
  },
  {
    name: '小山之丘麵包台北站前店',
    address: '台北市中正區許昌街8號',
    phone: '(02)2331-7978',
    category: '點心',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=小山之丘麵包+台北市中正區許昌街8號',
  },
  {
    name: '三民書局 (重南店)',
    address: '台北市中正區重慶南路一段61號',
    phone: '(02)2361-7511',
    category: '其他',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=三民書局+台北市中正區重慶南路一段61號',
  },
  {
    name: 'K書會館',
    address: '台北市中正區南陽街20號2樓',
    phone: '(02)2375-4033',
    category: '其他',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=K書會館+台北市中正區南陽街20號',
  },
  {
    name: '卯時設計有限公司',
    address: '台北市大同區太原路8巷3號',
    phone: '(02)2311-0357',
    category: '服飾',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=卯時設計+台北市大同區太原路8巷3號',
  },
  {
    name: '服麗社團禮服',
    address: '台北市中正區懷寧街17號5樓',
    phone: '(02)2331-5750',
    category: '服飾',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=服麗社團禮服+台北市中正區懷寧街17號',
  },
  {
    name: '服麗社團禮服',
    address: '台北市中正區懷寧街17號5樓',
    phone: '(02)2331-5750',
    category: '服飾',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=服麗社團禮服+台北市中正區懷寧街17號',
  },
  {
    name: '五大唱片台北站前店',
    address: '台北市中正區南陽街1號2樓',
    phone: '(02)2388-9202',
    category: '音樂',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=五大唱片+台北市中正區南陽街1號',
  },
  {
    name: '北車0.3熱門音樂中心',
    address: '台北市中正區忠孝西路一段7號1樓',
    phone: '(02)2383-1780',
    category: '音樂',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=北車0.3熱門音樂中心+台北市中正區忠孝西路一段7號',
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
