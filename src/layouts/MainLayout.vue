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

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      behavior="mobile"
      class="refined-drawer"
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

    <q-page-container class="refined-container">
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
.refined-layout {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
}

.refined-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.body--dark .refined-header {
  background: rgba(28, 28, 30, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.refined-toolbar {
  height: 52px;
  padding: 0 20px;
}

.menu-btn {
  color: #1d1d1f;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.menu-btn:hover {
  background: rgba(0, 0, 0, 0.06);
}

.body--dark .menu-btn {
  color: #f5f5f7;
}

.body--dark .menu-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.toolbar-title {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  margin: 0 20px;
}

.brand-avatar {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-main {
  font-size: 15px;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.022em;
  line-height: 1.2;
}

.body--dark .brand-main {
  color: #f5f5f7;
}

.theme-btn {
  color: #1d1d1f;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.theme-btn:hover {
  background: rgba(0, 0, 0, 0.06);
}

.body--dark .theme-btn {
  color: #f5f5f7;
}

.body--dark .theme-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.refined-drawer {
  background: #f9f9f9;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  width: 280px;
}

.body--dark .refined-drawer {
  background: #1c1c1e;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.drawer-list {
  padding: 20px 0;
}

.drawer-header {
  background: transparent;
  color: #86868b;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 24px 12px;
  margin: 0;
}

.body--dark .drawer-header {
  color: #98989d;
}

.refined-link :deep(.q-item) {
  border-radius: 12px;
  margin: 3px 16px;
  padding: 12px 16px;
  transition: all 0.15s ease;
  color: #1d1d1f;
  min-height: 48px;
}

.refined-link :deep(.q-item:hover) {
  background: rgba(0, 0, 0, 0.04);
  transform: translateX(2px);
}

.refined-link :deep(.q-item.q-router-link--active) {
  background: #007aff;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
}

.refined-link :deep(.q-item.q-router-link--active:hover) {
  background: #0056b3;
  transform: translateX(2px);
}

.body--dark .refined-link :deep(.q-item) {
  color: #f5f5f7;
}

.body--dark .refined-link :deep(.q-item:hover) {
  background: rgba(255, 255, 255, 0.06);
}

.body--dark .refined-link :deep(.q-item.q-router-link--active) {
  background: #0a84ff;
}

.body--dark .refined-link :deep(.q-item.q-router-link--active:hover) {
  background: #409cff;
}

.refined-link :deep(.q-item__section--avatar) {
  min-width: 40px;
}

.refined-link :deep(.q-icon) {
  font-size: 20px;
}

.refined-link :deep(.q-item__label) {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.refined-container {
  background: #ffffff;
}

.body--dark .refined-container {
  background: #000000;
}

@media (max-width: 600px) {
  .refined-toolbar {
    padding: 0 16px;
  }

  .toolbar-title {
    margin: 0 16px;
  }

  .brand-main {
    font-size: 16px;
  }
}
</style>
