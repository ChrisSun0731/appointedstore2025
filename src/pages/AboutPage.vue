<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-lg q-mx-auto" style="max-width: 700px; width: 100%">
      <q-card-section class="column items-center">
        <q-img
          src="../../public/icons/testlogo.svg"
          alt="cglogo"
          style="max-width: 40%; max-height: 40%"
          fit="contain"
        />
        <br />
        <h4 class="text-center"><strong>建北中成四校聯合特約商店</strong></h4>
      </q-card-section>

      <q-separator spaced />

      <q-card-section>
        <div class="q-pb-xs text-center">
          此平台是由建國中學班聯會80屆上主席暨班級代表大會79屆下副議長孫逢邦所製。
        </div>
        <div class="q-pb-xs text-center">
          此平台仍於開發階段，尚有不足之處，希望各界能提供意見與建議，以利改進。
        </div>
        <div class="q-pb-xs text-center">聯絡方式：chris20090731@gmail.com</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AboutPage',
});
</script>
