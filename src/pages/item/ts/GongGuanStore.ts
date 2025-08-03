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
    name: '得正#台北公館計劃',
    address: '100台北市中正區羅斯福路三段316巷10-2號',
    phone: '(02)2368-3130',
    category: '飲料',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=得正+台北公館計劃+台北市中正區羅斯福路三段316巷10-2號',
    cocurrent: true,
  },
  {
    name: '可不可熟成紅茶 台北公館店',
    address: '100台北市中正區汀州路三段174號',
    phone: '(02)2368-0260',
    category: '飲料',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=可不可熟成紅茶+台北公館店+台北市中正區汀州路三段174號',
    cocurrent: true,
  },
  {
    name: '迷客夏Milksha 臺北公館',
    address: '10090台北市中正區羅斯福路三段316巷10之2號1樓',
    phone: '(02)2368-7707',
    category: '飲料',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=迷客夏Milksha+臺北公館+台北市中正區羅斯福路三段316巷10之2號1樓',
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
