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
        <div class="text-h6 text-center q-mt-md">
          <br />
          <strong>如有任何問題，歡迎聯繫各校班代聯</strong>
          <!--之後換成各校班聯ｌｏｇｏ-->
          <br /><br />
        </div>
        <div class="row items-center">
          <div class="col-6 text-center">
            <q-btn flat round size="xl" color="grey-2" class="q-pa-none" @click="goTocksc">
              <q-img
                src="../../public/icons/ckhslogo.png"
                alt="cksc"
                style="width: 150px; height: 150px"
                fit="contain"
              />
            </q-btn>
            <br />
            <h5><strong>建中班聯會</strong></h5>
          </div>
          <div class="col-6 text-center">
            <q-btn flat round size="xl" color="grey-2" class="q-pa-none" @click="goTotfgsc">
              <q-img
                src="../../public/icons/tfglogo.png"
                alt="cksc"
                style="width: 150px; height: 150px"
                fit="contain"
              />
            </q-btn>
            <br />
            <h5><strong>北一班聯會</strong></h5>
          </div>
          <br />
          <div class="col-6 text-center">
            <q-btn flat round size="xl" color="grey-2" class="q-pa-none" @click="goTozsca">
              <q-img
                src="../../public/icons/zsghlogo.png"
                alt="cksc"
                style="width: 150px; height: 150px"
                fit="contain"
              />
            </q-btn>
            <br />
            <h5><strong>中山班聯會</strong></h5>
          </div>
          <div class="col-6 text-center">
            <q-btn flat round size="xl" color="grey-2" class="q-pa-none" @click="goTocgcra">
              <q-img
                src="../../public/icons/cghslogo.png"
                alt="cksc"
                style="width: 150px; height: 150px"
                fit="contain"
              />
            </q-btn>
            <br />
            <h5><strong>成功代聯會</strong></h5>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
export default {
  methods: {
    goTocksc() {
      window.open('https://www.instagram.com/cksc79th/', '_blank');
    },
    goTotfgsc() {
      window.open('https://www.instagram.com/tfgsc85_/', '_blank');
    },
    goTozsca() {
      window.open('https://www.instagram.com/zsca36th/', '_blank');
    },
    goTocgcra() {
      window.open('https://www.instagram.com/cgcra69_official/', '_blank');
    },
  },
};
</script>

<style scoped></style>
