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
          <br />
          <span v-if="$q.screen.gt.xs" class="q-pl-sm"
            ><strong>建北中成四校聯合特約商店特約本</strong></span
          >
          <span v-else><strong>特約本</strong></span>
          <br />
          <br />
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="iframe-section">
        <iframe
          src="https://drive.google.com/file/d/10Y1gx2zgEsFyaQ3O2aM_JeHre5uf73-G/preview"
          class="iframe-full"
        ></iframe>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.iframe-section {
  position: relative;
  height: 60vh;
  padding: 0;
  overflow: hidden;
}

.iframe-full {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 3%;
}
</style>
