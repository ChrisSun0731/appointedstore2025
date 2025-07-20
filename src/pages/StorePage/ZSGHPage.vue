<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 100%">
      <q-card-section class="column items-center">
        <q-img src="/icons/zscalogo.png" alt="zscalogo" class="LogoStyle" fit="contain" />

        <div class="text-h4 text-center q-mt-md">
          <br />
          <span v-if="$q.screen.gt.xs" class="q-pl-sm"><strong>特約商店-中山篇</strong></span>
          <span v-else><strong>中山篇</strong></span>
          <br />
        </div>
      </q-card-section>
    </q-card>

    <div class="q-pa-md text-center" fit="contain">
      <div class="text-center" style="font-size: 20px">
        <strong>點選查看商店</strong><br /><br />
      </div>
      <zsstore />
      <q-list bordered class="rounded-borders"> </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import zsstore from '../item/ZSStore.vue';

const $q = useQuasar();
</script>

<style scoped>
@import '../../css/pages.scss';
</style>
