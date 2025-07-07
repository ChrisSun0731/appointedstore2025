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
            ><strong>建北中成四校聯合特約商店</strong></span
          >
          <span v-else><strong>四校特約商店</strong></span>
          <br />
          <br />
        </div>
      </q-card-section>

      <q-separator spaced />
      <q-card-section class="q-pa-md">
        <div class="text-center q-mt-md" style="font-size: 20px"><strong>關於四校特約</strong></div>
        <br />
        <br />
        <div>之後可以寫前言</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped></style>
