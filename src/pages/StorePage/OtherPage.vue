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
          <span v-if="$q.screen.gt.xs" class="q-pl-sm"><strong>特約商店-其他篇</strong></span>
          <span v-else><strong>其他篇</strong></span>
          <br /><br />
        </div>
      </q-card-section>
    </q-card>

    <div class="q-pa-md text-center" fit="contain">
      <div class="text-center" style="font-size: 20px">
        <strong>點選查看商店</strong><br /><br />
      </div>
      <otherstore />
      <q-list bordered class="rounded-borders"> </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import otherstore from '../item/OtherStore.vue';
</script>

<style scoped></style>
