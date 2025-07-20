<template>
  <q-expansion-item
    v-for="(store, index) in stores"
    :key="index"
    expand-separator
    icon="list"
    :label="store.name"
    default
    style="text-align: left"
  >
    <div class="row items-center">
      <div class="col-1 column"></div>
      <div class="col-7 column">
        <div><strong>地址</strong>：{{ store.address }}</div>
        <div><strong>電話</strong>：{{ store.phone }}</div>
        <div><strong>優惠內容</strong>：{{ store.discount }}</div>
      </div>
      <div class="col-4 flex flex-left">
        <q-btn flat round size="xl" color="grey-2" class="q-pa-none" @click="goToMap(store.mapUrl)">
          <q-img
            src="/icons/googlemap.png"
            alt="googlemap"
            style="width: 60px; height: 60px"
            fit="contain"
          />
        </q-btn>
      </div>
    </div>
  </q-expansion-item>
</template>

<script lang="ts">
export default {
  data() {
    return {
      stores: [
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
      ],
    };
  },
  methods: {
    goToMap(url: string) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped></style>
