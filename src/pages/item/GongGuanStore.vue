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
          name: '得正#台北公館計劃',
          address: '100台北市中正區羅斯福路三段316巷10-2號',
          phone: '(02)2368-3130',
          category: '飲料',
          discount: 'unknown',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=得正+台北公館計劃+台北市中正區羅斯福路三段316巷10-2號',
        },
        {
          name: '可不可熟成紅茶 台北公館店',
          address: '100台北市中正區汀州路三段174號',
          phone: '(02)2368-0260',
          category: '飲料',
          discount: 'unknown',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=可不可熟成紅茶+台北公館店+台北市中正區汀州路三段174號',
        },
        {
          name: '迷客夏Milksha 臺北公館',
          address: '10090台北市中正區羅斯福路三段316巷10之2號1樓',
          phone: '(02)2368-7707',
          category: '飲料',
          discount: 'unknown',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=迷客夏Milksha+臺北公館+台北市中正區羅斯福路三段316巷10之2號1樓',
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
