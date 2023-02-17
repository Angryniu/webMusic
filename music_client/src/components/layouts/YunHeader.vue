<template>
    <div class="yun-header">
        <!-- 图标 -->
        <div class="header-logo">
            <svg class="icon" aria-hidden="true">
                <use :href="Icon.ERJI"></use>
            </svg>
            <span>{{ musicName }}</span>
        </div>
        <!-- 头部导航 -->
        <ul class="yun-header-nav">
            <li v-for="item in HEADERNAVLIST" :key="item.path" :class="{ active: item.name === activeNavName }" @click="goPage(item.name,item.path)">
                {{item.name}}
            </li>
        </ul>
        <!-- 搜索框 -->
        <div class="header-search">
            <el-input placeholder="搜索" :suffix-icon="Search" v-model="keywords" @keyup.enter="goSearch()" />
        </div>
        <div style="width:1300px"></div>
        <!-- 设置 -->
        <ul class="yun-header-nav">
            <li v-for="item in SIGNLIST" :key="item.path" :class="{ active: item.name === activeNavName }" @click="goPage(item.name,item.path)">
                {{item.name}}
            </li>
        </ul>
        <el-dropdown class="user-wrap" trigger="click">
        <el-image class="user" fit="contain" :src="url" />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="(item, index) in menuList" :key="index" @click.stop="goMenuList(item.path)">{{ item.name }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
        </el-dropdown>
    </div>
</template>

<script lang='ts' setup>
import { getCurrentInstance, computed} from "vue";
import {Icon} from "@/enums/icon"
import {HEADERNAVLIST,SIGNLIST,NavName} from "@/enums/nav"
import {RouterName} from "@/enums/router-name"
import { Search } from "@element-plus/icons-vue";
import mixin from "@/mixins/mixin";
import {useStore} from "vuex"

const store = useStore();
const url = '@/assets/images/user.jpg'
const musicName = "Yun-music";
const { changeIndex, routerManager } = mixin();
const activeNavName = computed(() => store.getters.activeNavName);

function goPage(name,path){
  console.log(name ,path)
  if(!name && !path){
      changeIndex(NavName.Home);
      routerManager(RouterName.Home, { path: RouterName.Home });
  }else{
      changeIndex(name);
      routerManager(path, { path });
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

@media screen and (min-width: $sm) {
  .header-logo {
    margin: 0 1rem;
  }
}

@media screen and (max-width: $sm) {
  .header-logo {
    margin: 0 1rem;
    span {
      display: none;
    }
  }
  .header-search {
    display: none;
  }
}

.yun-header {
  position: fixed;
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  padding: $header-padding;
  margin: $header-margin;
  background-color: $theme-header-color;
  box-shadow: $box-shadow;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
}
/* LOGO */
.header-logo {
  font-size: $font-size-logo;
  font-weight: bold;
  cursor: pointer;
  .icon {
    @include icon(1.9rem, $color-black);
    vertical-align: middle;
  }
  span {
    margin-left: 1rem;
  }
}
.yin-header-nav {
  flex: 1;
}
/*导航*/
li {
  margin: $header-nav-margin;
  padding: $header-nav-padding;
  line-height: 3.3rem;
  color: $color-grey;
  border-bottom: none;
  cursor: pointer;
}

li.active {
  color: $color-black;
  font-weight: 600;
  border-bottom: 5px solid $color-black;
}
/*搜索输入框*/
.header-search {
  margin: 0 20px;
  width: 100%;
  &::v-deep input {
    text-indent: 5px;
    max-width: $header-search-max-width;
    min-width: $header-search-min-width;
    border-radius: $header-search-radius;
    box-shadow: none;
    background-color: $color-light-grey;
    color: $color-black;
  }
}


/*用户*/
.user-wrap {
  position: relative;
  display: flex;
  align-items: center;

  .user {
    width: $header-user-width;
    height: $header-user-width;
    border-radius: $header-user-radius;
    margin-right: $header-user-margin;
    cursor: pointer;
  }
}
</style>