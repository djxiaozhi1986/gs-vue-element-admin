<template>
    <v-chart theme="chart-theme" :auto-resize="true" :watchShallow="true" :style="{height:'300px',width:'100%'}" :options="options"></v-chart>
</template>
<script>
import 'echarts/lib/chart/line'
export default {
    data() {
        return {
            options:{
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['Upcomming','In Progress','Completed'],
                    width:'100%',
                    bottom:"10"
                },
                
                grid: {
                    bottom: "55"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日'],
                        splitLine: {
                            show: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series : [
                    {
                        name:'Upcomming',
                        type:'bar',
                        barWidth:8,
                        stack: 'interviews',
                        itemStyle: {
                            barBorderRadius: 5, 
                            color:"#6672FB"
                        },
                        data:[2, 1, 0, 0, 2, 1, 0]
                    },
                    {
                        name:'In Progress',
                        type:'bar',
                        barWidth: 20,
                        stack: 'interviews',
                        itemStyle: {
                            barBorderRadius: 5, 
                            color:"#F8B849"
                        },
                        data:[10, 7, 6, 5, 10, 2, 6]
                    },
                    {
                        name:'Completed',
                        type:'bar',
                        barWidth: 8,
                        stack: 'interviews',
                        itemStyle: {
                            barBorderRadius: 5, 
                            color:"#909399"
                        },
                        data:[1, 2, 3, 2, 0, 0, 0]
                    }
                
                ]
            }
        }
    }
}
</script>