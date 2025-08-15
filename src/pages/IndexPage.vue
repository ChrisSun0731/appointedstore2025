<template>
  <q-page>
    <br />
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 91%">
      <q-card-section class="column items-center">
        <q-img src="/icons/logo.png" alt="logo" class="LogoStyle" fit="contain" />
        <div class="text-h4 text-center q-mt-md">
          <span v-if="$q.screen.gt.xs" class="q-pl-sm">
            <strong>建北中成四校聯合特約商店</strong>
          </span>
          <span v-else>
            <strong>四校特約商店</strong>
          </span>
          <br />
          <br />
        </div>
      </q-card-section>

      <q-separator spaced />
      <q-card-section class="q-pa-xs">
        <div class="text-center q-mt-md" style="font-size: 20px">
          <strong>關於四校特約</strong>
        </div>
        <div class="info text-center q-mb-md" style="font-size: 13px">
          CKSC X TFGSC X ZSCA X CGCRA 2025~2026
        </div>
        <div class="text-body1">
          經過建北中成班代聯全體夥伴們的努力、學長姐們的幫助，以及特約店家的共同合作，促成了此四校特約的誕生，感謝同學們一直以來的支持。
          <br />
          今年四校班代聯繼續在各商圈拜訪店家，努力爭取店家和我們續約，同時也竭力與許多新店家簽訂團體及外送優惠，為師生爭取權益。
          <br />
          整理相關資料的過程中，四校班代聯成員皆以最嚴謹的態度，力求資料的完整性。若有任何疏忽之處與建議，歡迎您私訊粉亦或投稿至意見箱告訴我們，您的意見與支持是我們最大的動力。
          <br />
          本次特約連結將公告於班代聯粉專主頁，歡迎老師及同學們多加使用本次特約，我們在此獻上最高的謝意。
          <br />
          <br />
          <br />
          <div style="text-align: right">
            建國中學班聯會80屆<br />北一女中班聯會85屆<br />中山女高班聯會37屆<br />成功高中代聯會70屆
          </div>
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="content-section guidelines-section">
        <div class="section-header">
          <h2 class="section-title">特約商店使用準則</h2>
        </div>

        <div class="guidelines-content">
          <div class="guideline-item">
            <span class="guideline-number">1.</span>
            <span class="guideline-text"
              >特約店家將於店家明顯處，張貼四校特約專用貼紙，以供辨識。</span
            >
          </div>

          <div class="guideline-item">
            <span class="guideline-number">2.</span>
            <span class="guideline-text"
              >使用特約時，請記得出示學生證或教師證，店家得以拒絕僅穿著制服者。</span
            >
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
@import '../css/pages.scss';
</style>
