<template>
  <div>
    <div v-if="getStoresByCategory('熱食').length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="restaurant" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">熱食類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getStoresByCategory('熱食')"
        :key="`hot-${index}`"
        expand-separator
        icon="restaurant"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>

    <div v-if="getStoresByCategory('早午餐').length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="free_breakfast" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">早午餐類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getStoresByCategory('早午餐')"
        :key="`breakfast-${index}`"
        expand-separator
        icon="free_breakfast"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>

    <div v-if="getStoresByCategory('速食').length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="fastfood" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">速食類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getStoresByCategory('速食')"
        :key="`fastfood-${index}`"
        expand-separator
        icon="fastfood"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>

    <div v-if="getStoresByCategory('飲料').length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="local_drink" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">飲料類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getStoresByCategory('飲料')"
        :key="`drink-${index}`"
        expand-separator
        icon="local_drink"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>

    <div v-if="getStoresByCategory('甜點').length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="cake" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">甜點類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getStoresByCategory('甜點')"
        :key="`dessert-${index}`"
        expand-separator
        icon="cake"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>

    <div v-if="getStoresByCategory('點心').length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="local_cafe" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">點心類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getStoresByCategory('點心')"
        :key="`snack-${index}`"
        expand-separator
        icon="local_cafe"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>

    <div v-if="getOtherStores().length > 0" class="category-section">
      <q-separator />
      <div class="category-header q-pa-md">
        <q-icon name="more_horiz" size="md" class="q-mr-sm" />
        <span class="category-title text-h6 text-weight-bold">其他類</span>
      </div>
      <q-expansion-item
        v-for="(store, index) in getOtherStores()"
        :key="`other-${index}`"
        expand-separator
        icon="more_horiz"
        :label="store.name"
        style="text-align: left"
      >
        <div class="row items-center q-pa-md">
          <div class="col-1"></div>
          <div class="col-7">
            <div class="q-mb-xs"><strong>地址</strong>：{{ store.address }}</div>
            <div class="q-mb-xs"><strong>電話</strong>：{{ store.phone }}</div>
            <div><strong>優惠內容</strong>：{{ store.discount }}</div>
            <div>
              <strong>是否可與其他優惠並用</strong>：
              <span v-if="store.concurrent == true">是</span>
              <span v-if="store.concurrent == false">否</span>
            </div>
            <div>
              <span v-if="store.rule == ''"></span>
              <span v-else><strong>其他條款</strong>：{{ store.rule }}</span>
            </div>
          </div>
          <div class="col-4 flex justify-end">
            <q-btn
              flat
              round
              size="xl"
              color="grey-2"
              class="q-pa-none"
              @click="goToMap(store.mapUrl)"
            >
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
    </div>
  </div>
</template>

<script lang="ts">
import { stores, getStoresByCategory, getOtherStores, goToMap } from './ts/OtherStore';

export default {
  data() {
    return {
      stores,
    };
  },
  methods: {
    getStoresByCategory,
    getOtherStores,
    goToMap,
  },
};
</script>
