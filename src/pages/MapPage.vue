<template>
  <q-page class="q-pa-none column">
    <div class="q-pa-md q-pt-xl q-pb-none flex flex-center column">
      <div class="text-h4 text-center q-mt-md">
        <span v-if="$q.screen.gt.xs" class="q-pl-sm">
          <strong>建北中成四校聯合特約商店地圖</strong>
        </span>
        <span v-else><strong>特約地圖</strong></span>
      </div>
    </div>

    <q-separator spaced />

    <div class="q-mx-sm" style="flex: 1; overflow: hidden">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1L5C5220pdnkEFRYWXg4yKGdhB8Ic2co&ehbc=2E312F"
        width="100%"
        height="100%"
        style="border: none; border-radius: 6px"
      ></iframe>
    </div>
    <div><br /><br /></div>
  </q-page>
</template>

<style scoped>
.q-page {
  height: 100vh;
}
</style>

<style scoped>
@import '../css/pages.scss';
</style>
