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
      <q-card-section class="q-pa-md">
        <div class="text-center q-mt-md" style="font-size: 20px">
          <strong>關於四校特約</strong>
        </div>
        <div class="info text-center q-mb-md" style="font-size: 13px">
          CKSC X TFGSC X CGCRA X ZSCA 2025~2026
        </div>
        <div class="text-body1">
          <div class="text-center"><strong>【2025四校聯合特約商店】</strong><br /></div>
          經過建北中成班代聯全體夥伴們的努力、學長姐們的幫助，以及特約店家的共同合作，促成了此四校特約的誕生，感謝同學們一直以來的支持。
          <br />
          今年四校班代聯繼續在各商圈拜訪店家，努力爭取店家和我們續約，同時也竭力與許多新店家簽訂團體及外送優惠，為師生爭取權益。
          <br />
          簽署特約過程中，四校班代聯成員皆以最嚴謹的態度，力求資料的完整性。若有任何疏忽之處與建議，歡迎您私訊粉專抑或投稿意見箱告訴我們，您的意見與支持是我們最大的動力。
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
.info {
  font-size: 0.9rem;
  color: #000000;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.body--dark .info {
  color: #9ca3af;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  text-align: center;
}

.guidelines-content {
  max-width: 680px;
  margin: 0 auto;
}

.guideline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

.body--dark .guideline-item {
  background: rgba(255, 255, 255, 0.05);
}

.guideline-item:last-child {
  margin-bottom: 0;
}

.guideline-number {
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 1rem;
  flex-shrink: 0;
}

.guideline-text {
  line-height: 1.6;
  color: #000000;
  text-align: justify;
}

.body--dark .guideline-text {
  color: #d1d5db;
}
@media (max-width: 600px) {
  .content-section {
    padding: 2rem 1.5rem;
  }

  .signature-section {
    padding: 1rem;
    text-align: center;
  }

  .guideline-item {
    padding: 0.8rem;
  }

  .guideline-number {
    margin-right: 0.8rem;
  }
}
</style>
