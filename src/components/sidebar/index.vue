<template>
  <div>
    <el-menu :collapse="isCollapse" :default-active="activeMenu" :unique-opened="false" :default-openeds="opendMenus">
      <sidebar-item v-for="route in getMenuList" :key="route.path" :item="route" :base-path="active"/>
    </el-menu>
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
    <!-- </el-scrollbar> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from "./SidebarItem"
export default {
  props: {
    // route object
    active: {
      type: String,
      default: ''
    }
  },
  components:{
    SidebarItem
  },
  data() {
    return {
      defatu_active:'',
      opendMenus:[]
    }
  },
  computed: {
    ...mapGetters([
        'permission_routers',
        'sidebar',
        'user'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    getMenuList:function(){
      console.log(this.permission_routers)
      var all = []
      this.permission_routers.forEach(element => {
        console.log(element)
          if (element.meta.hidden == false) {
              if(element.name=='task'){
                  if(this.user.deptName=='研发中心'){
                      all.push(element)
                  }
              }else{
                  all.push(element)
              }
          }
      });
      console.log(all)
      return all;
    }
  },
  methods:{
    handleSelect(val) {
        // var url = key+'?pid='+this.pid
        this.$router.push(val)
    }
  },
  mounted(){
      this.defatu_active = this.$route.path.split('/')[this.$route.path.split('/').length - 1];
    // this.$route.path.replace('/'+this.active+'/','')
  }
}
</script>

<style scoped>
.user-panel {
    position: relative;
    padding: 10px 7px;
    overflow: hidden;
    border-bottom: solid 1px #f5f7fa;
}

.el-avatar--large{
  margin-top: 2px;
  width: 45px!important;
  height: 45px!important;
}
.img-circle {
    border-radius: 50%;
}
img {
    vertical-align: middle;
}
.user-panel>.info {
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px;
}
.user-panel>.info>p {
    font-weight: 600;
    margin-bottom: 9px;
}
  .title{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
  .desc{
    font-size: 12px;
    line-height: 20px;
  }
</style>
