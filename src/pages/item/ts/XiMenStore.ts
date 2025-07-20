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
    name: '道樂商店拉麵',
    address: '台北市萬華區成都路27巷12號',
    phone: '(02)2381-5557',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=道樂商店拉麵+台北市萬華區成都路27巷12號',
  },
  {
    name: '福勝亭（西門店）',
    address: '台北市萬華區峨嵋街40.42號2樓',
    phone: '(02)2361-4463',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=福勝亭+台北市萬華區峨嵋街40號',
  },
  {
    name: '樂麵屋 西門店',
    address: '台北市萬華區昆明街25號',
    phone: '(02)2381-9989',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=樂麵屋+台北市萬華區昆明街25號',
  },
  {
    name: '鴨肉扁土鵝專賣店',
    address: '台北市萬華區中華路一段98之2號',
    phone: '(02)2371-3918',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=鴨肉扁土鵝專賣店+台北市萬華區中華路一段98之2號',
  },
  {
    name: '一支麥冰品店',
    address: '台北市萬華區中華路一段114巷12號',
    phone: '(02)2331-0016',
    category: '甜點',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=一支麥冰品店+台北市萬華區中華路一段114巷12號',
  },
  {
    name: 'COMEBUYTEA_西門生活店',
    address: '台北市萬華區峨眉街52號1樓L104',
    phone: '(02)2331-5515',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=COMEBUYTEA+台北市萬華區峨眉街52號',
  },
  {
    name: 'Louisa Coffee 路易莎咖啡(昆明門市)',
    address: '台北市萬華區昆明街86號',
    phone: '(02)2388-1086',
    category: '飲料',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=路易莎咖啡+台北市萬華區昆明街86號',
  },
  {
    name: '海派服飾設計',
    address: '台北市萬華區中華路一段144-1號',
    phone: '(02)2314-1690',
    category: '服飾',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=海派服飾設計+台北市萬華區中華路一段144-1號',
  },
  {
    name: '久大文具連鎖 西門町店',
    address: '台北市萬華區中華路一段152號b1',
    phone: '(02)2311-5499',
    category: '其他',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=久大文具+台北市萬華區中華路一段152號',
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
