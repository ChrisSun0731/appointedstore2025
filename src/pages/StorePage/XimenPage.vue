<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 100%">
      <q-card-section class="column items-center">
        <q-img
          src="../../../public/icons/testlogo.svg"
          alt="testlogo"
          style="max-width: 40%; max-height: 40%"
          fit="contain"
        />
        <div class="text-h4 text-center q-mt-md">
          <br />
          <span v-if="$q.screen.gt.xs" class="q-pl-sm"><strong>特約商店-西門篇</strong></span>
          <span v-else><strong>西門篇</strong></span>
          <br />
        </div>
      </q-card-section>
    </q-card>

    <div class="q-pa-md text-center" fit="contain">
      <div class="text-center" style="font-size: 20px">
        <strong>點選查看商店</strong><br /><br />
      </div>
      <ximenstore />
      <q-list bordered class="rounded-borders"> </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ximenstore from '../item/XiMenStore.vue';
</script>

<style scoped>
@import '../../css/pages.scss';
</style>
