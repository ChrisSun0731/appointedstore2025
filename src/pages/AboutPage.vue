<template>
  <q-page>
    <br />
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 91%">
      <q-card-section class="column items-center">
        <q-img src="../../public/icons/logo.png" alt="logo" class="LogoStyle" fit="contain" />
        <br />
        <span v-if="$q.screen.gt.xs" class="q-pl-sm">
          <h4><strong>關於本平台與使用條款</strong></h4>
        </span>
        <span v-else>
          <h4><strong>關於與使用條款</strong></h4>
        </span>
      </q-card-section>

      <q-separator spaced />

      <q-card-section>
        <div class="q-pb-xs text-center">
          此平台係由建國中學班聯會80屆上主席暨班級代表大會79屆下副議長孫逢邦所製。
          <br />
          其目標在於推廣四校特約商店，以利班代聯會員快速查詢相關內容。
          <br />
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

      <q-separator spaced />

      <q-card-section>
        <div class="text-center">
          <span v-if="$q.screen.gt.xs" class="q-pl-sm">
            <h5><strong>四校特約商店平台使用條款</strong></h5>
          </span>
          <span v-else>
            <h5><strong>平台使用條款</strong></h5>
          </span>
        </div>
        歡迎您使用四校特約商店平台（以下簡稱「本平台」）。為保障使用者權益並維護本平台運作秩序，請您在使用本平台前，詳閱以下使用者條款。當您使用本平台，即表示您已閱讀、瞭解並同意遵守本條款之所有內容。
        <br />
        <br />
        <div style="font-size: larger"><strong>一、使用者責任</strong></div>
        <br />
        1.
        您應保證所提供之使用者內容不違反中華民國法律、臺北市立建國高級中學校規、臺北市立第一女子高級中學校規、臺北市立中山女子高級中學校規、臺北市立成功高級中學校規、臺北市立建國高級中學班聯會內法、臺北市立第一女子高級中學班聯會內法、臺北市立中山女子高級中學班聯會內法及臺北市立成功高級中學代聯會內法。<br />
        2.
        您不得利用本平台從事任何違法、不當或侵害他人權益之行為，包括但不限於散布不實資訊、侵害隱私、散播惡意程式等。<br />
        3. 若您違反本條款，您應自行承擔一切法律責任，並賠償本平台及第三人因此所受之損害。<br />
        <br />
        <div style="font-size: larger"><strong>二、平台責任免除與內容管理</strong></div>
        <br />
        1. 本平台為開放性平台，對使用者內容不負預審義務，亦不保證其正確性、完整性或合法性。<br />
        2. 對於任何因使用者內容所生之錯誤、遺漏、違法事項或損害，本平台不負任何責任。<br />
        3.
        本平台保留隨時審查、移除、限制或封鎖任何違反本條款或相關法規之內容或帳號之權利，無須事先通知。<br />
        <br />
        <div style="font-size: larger"><strong>三、條款修改</strong></div>
        <br />
        1. 本平台有權隨時修改本使用者條款，並將更新內容公告於平台，標註最後更新日期。<br />
        2.
        條款更新後，您繼續使用本平台即視為同意更新內容。如您不同意修改內容，請立即停止使用本平台。<br />
        <br />
        <div style="font-size: larger"><strong>四、準據法與管轄法院</strong></div>
        <br />
        1. 本條款之解釋與適用，悉依中華民國法律為準據法。<br />
        2. 因本條款或使用本平台所生之任何爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。<br />
        <br />
        最後更新日期：2025年7月16日
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
