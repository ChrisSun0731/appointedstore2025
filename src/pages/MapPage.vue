<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 100%">
      <q-card-section class="column items-center">
        <q-img
          src="/icons/testlogo.svg"
          alt="testlogo"
          style="max-width: 40%; max-height: 40%"
          fit="contain"
        />
        <div class="text-h4 text-center q-mt-md">
          <span v-if="$q.screen.gt.xs" class="q-pl-sm"
            ><strong>建北中成四校聯合特約商店地圖</strong></span
          >
          <span v-else><strong>特約地圖</strong></span>
          <br />
          <br />
        </div>
      </q-card-section>

      <q-separator spaced />
      <q-card-section class="q-pa-md">
        <div class="q-gutter-md">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1L5C5220pdnkEFRYWXg4yKGdhB8Ic2co&ehbc=2E312F"
            width="100%"
            height="600"
            style="max-width: 100%; max-height: 100%; border: none; border-radius: 3%"
            fit="contain"
          ></iframe>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped></style>
