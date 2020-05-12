const echartInitOptions = {
    renderer: 'svg'
};
const DATEOPTIONS = {
    rangeDatePicker:{
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
    },
    rangeTimePicker:{
        shortcuts: [{
            text: '最近一周',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近一个月',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
            }
        }, {
            text: '最近三个月',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
            }
        }]
    }

}
/**
 * 接口返回常量
 */
const API_RESULT = {
    SUCCESS:'000000',
    ERROR:'0600000',
    TOKEN_ERROR:'009010'
}
const DATE_FORMAT = {
    LONG:'YYYY年MM月DD日',
    LONGFULL:'YYYY年MM月DD日 HH:mm',
    MEDIUM:'YYYY/MM/DD',
    MEDIUMFULL:'YYYY/MM/DD HH:mm'
}
const CHART_COLORS = [
    "#ff8f68",
    "#7890ff",
    "#00d493",
    "#ff6069",
    "#bc8dee",
    "#89c3f8",
    "#ffa897"
]

export default{
    echartInitOptions,
    DATEOPTIONS,
    API_RESULT,
    DATE_FORMAT,
    CHART_COLORS
}
