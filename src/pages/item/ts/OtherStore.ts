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
    name: 'らあめん花月嵐 信義威秀店',
    address: '台北市信義區松壽路20號2樓',
    phone: '(02)2729-2128',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=らあめん花月嵐+信義威秀店+台北市信義區松壽路20號2樓',
  },
  {
    name: '演色—捷運古亭',
    address: '台北市中正區羅斯福路二段50號一樓',
    phone: '(02)2327-8022',
    category: '服飾',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=演色—捷運古亭+台北市中正區羅斯福路二段50號一樓',
  },
  {
    name: '宥朋團體服紀念品',
    address: '新北市三重區永福街216號1樓',
    phone: '0989-800765',
    category: '服飾',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=宥朋團體服紀念品+新北市三重區永福街216號1樓',
  },
  {
    name: '采豐數位股份有限公司',
    address: '新北市中和區宜安路112號7樓',
    phone: '(02)8945-8912',
    category: '服飾',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=采豐數位股份有限公司+新北市中和區宜安路112號7樓',
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
