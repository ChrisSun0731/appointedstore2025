<template>
  <q-layout view="lHh Lpr lFf" class="refined-layout">
    <q-header elevated class="refined-header">
      <q-toolbar class="refined-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="menu-btn"
        />
        <q-toolbar-title class="toolbar-title">
          <q-avatar class="brand-avatar">
            <img alt="favicon" src="icons/logo.png" />
          </q-avatar>
          <span v-if="$q.screen.gt.xs" class="brand-text">
            <span class="brand-main">建北中成四校聯合特約商店</span>
          </span>
          <span v-else class="brand-text">
            <span class="brand-main">四校聯合特約商店</span>
          </span>
        </q-toolbar-title>
        <q-btn
          :icon="Dark.isActive ? 'dark_mode' : 'nights_stay'"
          flat
          @click="toggleDark"
          aria-label="切換暗色模式"
          class="theme-btn"
        />
      </q-toolbar>
    </q-header>
    <div class="drawer-wrapper">
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        behavior="mobile"
        class="refined-drawer custom-drawer"
      >
        <q-list class="drawer-list">
          <q-item-label header class="drawer-header">選單</q-item-label>
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
            class="refined-link"
          />
        </q-list>
      </q-drawer>
    </div>
    <q-page-container class="refined-container">
      <router-view />
    </q-page-container>
    <q-footer elevated class="refined-footer">
      <div class="footer-text">
        © {{ new Date().getFullYear() }} 建北中成四校聯合特約商店. All rights reserved.
      </div>
    </q-footer>
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
  { title: '建中', icon: 'school', link: '/ckhs' },
  { title: '中山', icon: 'library_books', link: '/zsgh' },
  { title: '成功', icon: 'local_library', link: '/cghs' },
  { title: '北車', icon: 'train', link: '/taipeimainstation' },
  { title: '西門', icon: 'store', link: '/ximen' },
  { title: '公館', icon: 'local_mall', link: '/gongguan' },
  { title: '古亭', icon: 'shop', link: '/guting' },
  { title: '其他', icon: 'other_houses', link: '/other' },
  { title: '聯絡我們', icon: 'mail', link: '/contact' },
  { title: '關於與條款', icon: 'info', link: '/about' },
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
@import '../css/layout.scss';
</style>
