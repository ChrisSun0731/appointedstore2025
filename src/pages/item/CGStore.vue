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
          name: '大立溫州大餛鈍',
          address: '台北市中正區公園路20巷2號',
          phone: '(02)2375-9214',
          discount: '50元以上商品折扣5元',
          mapUrl: 'https://www.google.com/maps?q=台北市中正區公園路20巷2號',
        },
        {
          name: '大立溫州大餛鈍',
          address: '台北市中正區公園路20巷2號',
          phone: '(02)2375-9214',
          discount: '50元以上商品折扣5元',
          mapUrl: 'https://www.google.com/maps?q=台北市中正區公園路20巷2號',
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
