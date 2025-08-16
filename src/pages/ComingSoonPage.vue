<template>
  <q-page>
    <br />
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 91%">
      <q-card-section class="column items-center">
        <q-img src="../../public/icons/logo.png" alt="logo" class="LogoStyle" fit="contain" />
        <div class="text-h4 text-center q-mt-md">
          <br />
          <span v-if="$q.screen.gt.xs" class="q-pl-sm">
            <strong>建北中成四校聯合特約商店</strong>
          </span>
          <span v-else><strong>四校特約商店</strong></span>
          <br />
          <br />
          <div style="font-style: italic; font-family: Brush Script MT">Coming Soon</div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
@import '../css/pages.scss';
</style>
