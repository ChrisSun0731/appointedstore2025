<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img alt="favicon" src="icons/testlogo.svg" height="50px" width="50px" />
          </q-avatar>
          <span v-if="$q.screen.gt.xs" class="q-pl-sm">建北中成四校聯合特約商店</span>
          <span v-else class="q-pl-sm">四校聯合特約商店</span>
        </q-toolbar-title>
        <q-btn
          :icon="Dark.isActive ? 'dark_mode' : 'nights_stay'"
          flat
          @click="toggleDark"
          aria-label="切換暗色模式"
        />
      </q-toolbar>
    </q-header>

    <div class="drawer-wrapper">
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        behavior="mobile"
        class="custom-drawer"
      >
        <q-list>
          <q-item-label header style="background-color: #7b68ee; color: white">選單</q-item-label>
          <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
        </q-list>
      </q-drawer>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Dark, LocalStorage } from 'quasar';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const leftDrawerOpen = ref(true);

const linksList: EssentialLinkProps[] = [
  { title: '首頁', icon: 'home', link: '/' },
  { title: '地圖', icon: 'map', link: '/map' },
  { title: '特約本', icon: 'book', link: '/book' },
  { title: '建中', icon: 'img:icons/ckhslogo.png', link: '/ckhs' },
  { title: '中山', icon: 'img:icons/zsghlogo.png', link: '/zsgh' },
  { title: '成功', icon: 'img:icons/cghslogo.png', link: '/cghs' },
  { title: '北車', icon: 'train', link: '/taipeimainstation' },
  { title: '西門', icon: 'store', link: '/ximen' },
  { title: '公館', icon: 'local_mall', link: '/gongguan' },
  { title: '其他', icon: 'other_houses', link: '/other' },
  { title: '聯絡我們', icon: 'mail', link: '/contact' },
  { title: '關於本平台', icon: 'info', link: '/about' },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleDark() {
  Dark.toggle();
  LocalStorage.set('dark', Dark.isActive);
}

onMounted(() => {
  const saved = LocalStorage.getItem('dark');
  if (saved === true || saved === false) {
    Dark.set(saved);
  } else {
    Dark.set(true);
    LocalStorage.set('dark', true);
  }
});
</script>

<style scoped>
.drawer-wrapper {
  position: absolute;
  top: 64px;
  left: 0;
  height: 120px;
  width: 260px;
  z-index: 999;
  overflow: hidden;
}

.custom-drawer {
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}
</style>
