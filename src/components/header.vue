<template>
    <div>
        <div class="fl logo">
            <div class="fl">
                <img alt="logo" src="../assets/logo.png">
            </div>
            <div class="fl title">
                <p>HR</p>
                <p>Management</p>
            </div>
        </div>
        <div class="fl m-t-12">
            <el-input class="m-l-20 header-input" prefix-icon="el-icon-search" placeholder="请输入想搜索的内容">

            </el-input>
        </div>
        <div class="fr m-t-16">
            <el-dropdown>
                <span class="el-dropdown-link v-center font-normal">
                    <el-badge is-dot type="success" class="item">
                        <el-avatar src="https://fastdfs.netconcepts.cn/group1/M00/00/00/CgknIV6VuwmAA-A9AAHYZMFZJoI778.png"></el-avatar>
                    </el-badge> 
                    Gavin Wang <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-user">Profile</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-key">Edit Password</el-dropdown-item>
                    <el-dropdown-item divided icon="el-icon-back">Logout</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #6672FB;
}
.el-icon-arrow-down {
font-size: 16px;
}
</style>