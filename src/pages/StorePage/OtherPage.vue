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
          <strong>特約商店-其他篇</strong>
          <br /><br />
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="q-pa-md text-center" fit="contain">
        <div class="text-center" style="font-size: 20px">
          <strong>點選查看商店</strong><br /><br />
        </div>
        <otherstore />
        <q-list bordered class="rounded-borders"> </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import otherstore from '../item/OtherStore.vue';
</script>

<style scoped></style>
