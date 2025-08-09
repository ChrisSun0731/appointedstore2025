<template>
  <div class="stores-container">
    <div v-for="category in categories" :key="category.name" class="category-section">
      <div v-if="category.stores.length > 0">
        <div class="category-header q-pa-md">
          <div class="category-icon-wrapper">
            <q-icon :name="category.icon" class="category-icon" />
          </div>
          <span class="category-title">{{ category.name }}</span>
          <div class="category-badge">{{ category.stores.length }}</div>
        </div>

        <div class="stores-grid q-px-md">
          <q-card
            v-for="(store, index) in category.stores"
            :key="`${category.key}-${index}`"
            class="store-card q-pa-md"
            @click="toggleStore(`${category.key}-${index}`)"
          >
            <div class="store-header row items-center no-wrap">
              <div class="store-icon q-mr-md">
                <q-icon :name="category.icon" />
              </div>
              <div class="col">
                <div class="store-name">{{ store.name }}</div>
                <div class="store-category">{{ category.name }}</div>
              </div>
              <div
                class="expand-indicator"
                :class="{ expanded: expandedStore === `${category.key}-${index}` }"
              >
                <q-icon name="keyboard_arrow_down" />
              </div>
            </div>

            <div
              class="store-content"
              :class="{ expanded: expandedStore === `${category.key}-${index}` }"
            >
              <q-separator class="q-my-md" />

              <div class="store-details">
                <div class="detail-row q-mb-sm">
                  <q-icon name="location_on" class="detail-icon q-mr-sm" />
                  <div>
                    <div class="detail-label">地址</div>
                    <div class="detail-value">{{ store.address }}</div>
                  </div>
                </div>

                <div class="detail-row q-mb-sm">
                  <q-icon name="phone" class="detail-icon q-mr-sm" />
                  <div>
                    <div class="detail-label">電話</div>
                    <div class="detail-value">{{ store.phone }}</div>
                  </div>
                </div>

                <div class="detail-row q-mb-sm">
                  <q-icon name="local_offer" class="detail-icon q-mr-sm" />
                  <div class="col">
                    <div class="detail-label">優惠內容</div>
                    <div class="detail-value discount-content">{{ store.discount }}</div>
                  </div>
                </div>

                <div class="detail-row q-mb-sm">
                  <q-icon name="merge_type" class="detail-icon q-mr-sm" />
                  <div>
                    <div class="detail-label">可與其他優惠並用</div>
                    {{ store.concurrent ? '是' : '否' }}
                  </div>
                </div>

                <div v-if="store.rule" class="detail-row">
                  <q-icon name="info" class="detail-icon q-mr-sm" />
                  <div class="col">
                    <div class="detail-label">其他條款</div>
                    <div class="detail-value">{{ store.rule }}</div>
                  </div>
                </div>
              </div>

              <q-btn
                unelevated
                class="full-width q-mt-md map-button"
                style="border-radius: 20px"
                @click.stop="goToMap(store.mapUrl)"
              >
                <q-icon name="map" class="q-mr-sm" />
                查看地圖
              </q-btn>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { stores, getStoresByCategory, getOtherStores, goToMap } from './ts/OtherStore';

export default {
  data() {
    return {
      stores,
      expandedStore: null as string | null,
    };
  },
  computed: {
    categories() {
      return [
        {
          name: '熱食類',
          key: 'hot',
          icon: 'restaurant',
          stores: getStoresByCategory('熱食'),
        },
        {
          name: '早午餐類',
          key: 'breakfast',
          icon: 'free_breakfast',
          stores: getStoresByCategory('早午餐'),
        },
        {
          name: '速食類',
          key: 'fastfood',
          icon: 'fastfood',
          stores: getStoresByCategory('速食'),
        },
        {
          name: '飲料類',
          key: 'drink',
          icon: 'local_drink',
          stores: getStoresByCategory('飲料'),
        },
        {
          name: '甜點類',
          key: 'dessert',
          icon: 'cake',
          stores: getStoresByCategory('甜點'),
        },
        {
          name: '點心類',
          key: 'snack',
          icon: 'local_cafe',
          stores: getStoresByCategory('點心'),
        },
        {
          name: '其他類',
          key: 'other',
          icon: 'more_horiz',
          stores: getOtherStores(),
        },
      ];
    },
  },
  methods: {
    toggleStore(storeId: string) {
      this.expandedStore = this.expandedStore === storeId ? null : storeId;
    },
    goToMap,
  },
};
</script>

<style>
@import '../../css/pages.scss';
</style>
