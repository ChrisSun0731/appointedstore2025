export interface Store {
  name: string;
  address: string;
  phone: string;
  category: string;
  discount: string;
  mapUrl: string;
  concurrent: boolean;
}

export const stores: Store[] = [
  {
    name: 'GET POWER 給力盒子-北商店',
    address: '100台北市中正區青島東路33-2號',
    phone: '(02)2322-2088',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=GET+POWER+給力盒子-北商店+台北市中正區青島東路33-2號',
    concurrent: true,
  },
  {
    name: '莫名福州乾拌麵',
    address: '100台北市中正區青島東路33-3號',
    phone: '(02)2394-9788',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=莫名福州乾拌麵+台北市中正區青島東路33-3號',
    concurrent: true,
  },
  {
    name: '八方雲集善導寺店',
    address: '100台北市中正區忠孝東路一段11號',
    phone: '(02)2393-6188',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=八方雲集善導寺店+台北市中正區忠孝東路一段11號',
    concurrent: true,
  },
  {
    name: 'すき家林森南路',
    address: '100台北市中正區林森南路12號',
    phone: '0800-031131',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=すき家林森南路+台北市中正區林森南路12號',
    concurrent: true,
  },
  {
    name: '何家大碗公涼麵',
    address: '台北市中正區青島東路21之9號',
    phone: '(02)2321-8827',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=何家大碗公涼麵+台北市中正區青島東路21之9號',
    concurrent: true,
  },
  {
    name: '饌玉豐 青島店',
    address: '100台灣台北市中正區青島東路7-1號',
    phone: '(02)2391-9538',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=饌玉豐+青島店+台北市中正區青島東路7-1號',
    concurrent: true,
  },
  {
    name: '順口牛肉麵',
    address: '100台灣台北市中正區濟南路一段9號',
    phone: '(02)2351-5768',
    category: '熱食',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=順口牛肉麵+台北市中正區濟南路一段9號',
    concurrent: true,
  },
  {
    name: '麒玲 義大利麵店',
    address: '100台灣台北市中正區忠孝東路一段82號',
    phone: '(02)2391-0158',
    category: '熱食',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=麒玲+義大利麵店+台北市中正區忠孝東路一段82號',
    concurrent: true,
  },
  {
    name: 'CoCo都可 青島店',
    address: '100台北市中正區青島東路21之10號',
    phone: '(02)2395-2803',
    category: '飲料',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=CoCo都可+青島店+台北市中正區青島東路21之10號',
    concurrent: true,
  },
  {
    name: '舞動陽光-成功高中運動中心',
    address: '100台北市中正區濟南路一段71號',
    phone: '(02)2321-8222',
    category: '運動',
    discount: 'unknown',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=舞動陽光-成功高中運動中心+台北市中正區濟南路一段71號',
    concurrent: true,
  },
  {
    name: '左轉有書',
    address: '100台灣台北市中正區鎮江街3-1號',
    phone: '(02)3322-1096',
    category: '其他',
    discount: 'unknown',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=左轉有書+台北市中正區鎮江街3-1號',
    concurrent: true,
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
