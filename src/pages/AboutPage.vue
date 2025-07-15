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
          此平台係由建國中學班聯會80屆上主席暨班級代表大會79屆下副議長孫逢邦所製。致力於推廣特約商店，使四校班代連會員能詢相關內容。
        </div>
        <div class="q-pb-xs text-center">
          然此平台仍於開發階段，尚有不足之處，希望各界能提供意見與建議，以利改進。
        </div>
        <br />
        <div class="q-pb-xs text-center">
          聯絡方式：
          <br />
          作者信箱：chris20090731@gmail.com
          <br />
          建中班聯會公務信箱：ckhssc@gl.ck.tp.edu.tw
        </div>
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

<style scoped>
@import '../css/pages.scss';
</style>
