<template>
    <el-container>
        <el-header>
            <cus-header></cus-header>
        </el-header>
        <el-container>
            <el-aside width="250px" :class="{'sidebar-container scroll-pane scroll-container':true,'hide-sidebar':!$store.state.app.sidebar.opened}" :style="'height:'+($store.state.app.height-72)+'px'">
                <cus-nav class="m-t-20"></cus-nav>
            </el-aside>
            <el-container :style="'height:'+($store.state.app.height-72)+'px'">
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import CusNav from "@/components/sidebar";
import CusHeader from "@/components/header";
export default {
    components:{
        CusNav,
        CusHeader
    },
    mounted(){
        const that = this;
        that.$store.dispatch("setHeight",(window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight));
        // window.onresize =()  =>{
        //     return (()=>{
        //         that.$store.dispatch("setHeight",(window.innerHeight ||
        //         document.documentElement.clientHeight ||
        //         document.body.clientHeight));
        //         if(typeof(that.$refs.header.callResize) == 'function' ){
        //             that.$refs.header.callResize();
        //         }
        //     })()
        // };
    }
}
</script>