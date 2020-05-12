<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :span="17">
                <div class="title m-t-16">Welcome Gavin Wang !</div>
                <div class="desc m-t-12 title font-lg">There will be 109 interviews in the near future, including 80 initial, 22 second and 7 final.</div>
            </el-col>
            <el-col :span="7">
                <el-card shadow="never">
                    <el-row class="h-center">
                        <el-col :span="8" class="b-r">
                            <div>First</div>
                            <count-to class="m-t-16 font-xl" prefix="" suffix="" :decimals="0" :start-val="0"
                                  :end-val="80"
                                  :duration="3000"/>
                        </el-col>
                        <el-col :span="8" class="b-r">
                            <div>Second</div>
                            <count-to class="m-t-16 font-xl" prefix="" suffix="" :decimals="0" :start-val="0"
                                  :end-val="22"
                                  :duration="3000"/>
                        </el-col>
                        <el-col :span="8">
                            <div>Last</div>
                            <count-to class="m-t-16 font-xl" prefix="" suffix="" :decimals="0" :start-val="0"
                                  :end-val="7"
                                  :duration="3000"/>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="m-t-20">
            <el-col :span="17">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-card shadow="never">
                            <span class="title font-lg">Total Employees</span>
                            <span class="title fr font-lg">375</span>
                            <div>
                                <v-chart theme="chart-theme" :auto-resize="true" :watchShallow="true" :style="{height:'300px',width:'100%'}" :options="polar"/>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="14">
                        <el-card shadow="never">
                            <span class="title font-lg">Total Interviews</span>
                            <span class="title fr font-lg">109</span>
                            <div>
                                <interviews-line></interviews-line>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card class="m-t-20" shadow="never">
                    <span class="title font-lg">Project Summary</span>
                    <span class="title fr font-lg">
                        <el-button style="margin-top:-5px">Filter<i class="el-icon-set-up el-icon--right"></i></el-button>
                    </span>
                    <el-table class="m-t-20"
                        :data="tableData"
                        style="width: 100%"
                        height="280">
                        <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="province"
                        label="省份"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="city"
                        label="市区"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="地址"
                        width="300">
                        </el-table-column>
                        <el-table-column
                        prop="zip"
                        label="邮编"
                        width="120">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card shadow="never" class="bg-birthday">
                    <div class="fl">
                        <el-avatar :size="42" src="https://fastdfs.netconcepts.cn/group1/M00/00/00/CgknIV6VuwmAA-A9AAHYZMFZJoI778.png"></el-avatar>
                    </div>
                    <div class="fl m-l-20">
                        <h2 class="title font-normal">Jennie Duncan</h2>
                        <h2 class="font-small font-w-400">xxxxxxx Dept</h2>
                        <h2 class="font-small font-w-400">Has birthday today. <el-button type="primary" size="mini" class="m-l-20">More<i class="el-icon-more el-icon--right"></i></el-button></h2>
                    </div>
                </el-card>
                <el-card shadow="never" class="m-t-20">
                    <span class="title font-lg">Employees on holiday</span>
                    <span class="title fr font-lg">2</span>
                    <div class="">
                        <div class="item clearfix m-t-30 p-b-12 b-b">
                            <div class="fl">
                                <el-avatar :size="42" src="https://fastdfs.netconcepts.cn/group1/M00/00/00/CgknIV6VuwmAA-A9AAHYZMFZJoI778.png"></el-avatar>
                            </div>
                            <div class="fl m-l-20">
                                <h2 class="title font-normal">Jennie Duncan</h2>
                                <h2 class="font-small font-w-400">xxxxxxx Dept</h2>
                            </div>
                        </div>
                        <div class="item clearfix m-t-20 p-b-12">
                            <div class="fl">
                                <el-avatar :size="42" src="https://fastdfs.netconcepts.cn/group1/M00/00/00/CgknIV6VuwmAA-A9AAHYZMFZJoI778.png"></el-avatar>
                            </div>
                            <div class="fl m-l-20">
                                <h2 class="title font-normal">Jennie Duncan</h2>
                                <h2 class="font-small font-w-400">xxxxxxx Dept</h2>
                            </div>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="never" class="m-t-20">
                    <div class="bg-help"></div>
                    <div class="title font-lg m-t-20">Need help?</div>
                    <div class="desc font-small m-t-20 font-w-400">Do you have any problem while using the Hr Managemant portal?</div>
                    <div class="m-t-20 h-center">
                        <el-button type="primary">Contract Now</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import CountTo from 'vue-count-to'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import bowen from './components/bowen'
import interviewsLine from './components/interviews-line'
export default {
    components: {
        CountTo,bowen,interviewsLine
    },
    data() {
        let data = []

        for (let i = 0; i <= 360; i++) {
            let t = i / 180 * Math.PI
            let r = Math.sin(2 * t) * Math.cos(2 * t)
            data.push([r, i])
        }
        return {
            polar: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    // orient: 'vertical',
                    itemWidth: 10,
                    itemHeight: 10,
                    data: ['Male', 'Female'],
                    textStyle: {
                        color: '#000',
                        fontSize: '16'
                    },
                    width:'100%',
                    bottom:"10"
                },
                series: [
                    {
                        name:"男女比例",
                        type: 'pie',
                        radius: ['35%', '50%'],
                        clockwise: true,
                        avoidLabelOverlap: true,
                        hoverOffset: 15,
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: true,
                            normal: {
                                length: 10,
                                length2: 20,
                                lineStyle: {
                                    width: 2
                                }
                            }
                        },
                        data: [
                            {value: 267, name: 'Male'},
                            {value: 108, name: 'Female'}
                        ],
                        label: {
                            formatter: '{c|{c}}\n{b|{b}}',
                            // backgroundColor: '#eee',
                            // borderColor: '#aaa',
                            // borderWidth: 1,
                            // borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                b: {
                                    fontSize: 16,
                                    lineHeight: 24,
                                    align: 'left'
                                },
                                c: {
                                    fontSize: 24,
                                    lineHeight: 24,
                                    align: 'left'
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        },
                    }
                ],
                animationDuration: 2000
            },
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
                }
            ]
        }
    }
}
</script>
<style scoped>
.bg-birthday{
    background: url('/img/birthday.png') no-repeat;
    background-size: cover;
    height: 110px;
}
.bg-help{
    background: url('/img/help.png') no-repeat;
    background-size: cover;
    height: 162px;
}
</style>