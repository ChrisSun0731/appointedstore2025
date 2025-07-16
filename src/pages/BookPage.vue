<template>
  <q-page class="q-pa-none column">
    <div class="q-pa-md q-pt-xl q-pb-none flex flex-center column">
      <div class="text-h4 text-center q-mt-md">
        <br />
        <span v-if="$q.screen.gt.xs" class="q-pl-sm">
          <strong>建北中成四校聯合特約商店特約本</strong>
        </span>
        <span v-else><strong>特約本</strong></span>
        <br />
        <br />
      </div>
    </div>

    <q-separator spaced />

    <div class="q-mx-sm" style="flex: 1; overflow: hidden">
      <iframe
        src="https://drive.google.com/file/d/10Y1gx2zgEsFyaQ3O2aM_JeHre5uf73-G/preview"
        width="100%"
        height="100%"
        style="border: none; border-radius: 6px"
      ></iframe>
    </div>
    <div><br /><br /></div>
  </q-page>
</template>

<style scoped>
@import '../css/pages.scss';
.q-page {
  height: 100vh;
}
</style>
