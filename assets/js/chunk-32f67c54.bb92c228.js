(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32f67c54"],{4655:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVDhPzZQhT8NAFMd33ZJWIBATTTMxgUAgEAgkhoQPgIAERAVZlxSNYanBY5q0mykJJJAg+Ajg+ACIIZowgZiYmECwNmn5v9tbQ1JSRlPBL7nee9d3/3t3fVdRA57ntYUQ62ma6nBH3W73KQgCbTabPWN8k2IWICZE20XMyHXdlXq9vg9/gj7sdDqvSr/fP8CkIWIfFEVx0M5oYhzHTYxvkP0djK3xwjUSoznob+G++L5/JPAYIiiEwKFt2x8UuIAyR0ctAwJjyoRdCe0miqJLmFsCGcZJkpxgC1fz1+XA4jtY7FGB3ZgPVQMJVkouO3mwQlyzWwg+Ts+yrAt2JXSGKc7QrPIMK+WnLVvYsqzFJbhBCfXYluQEVVW9M03TZ7cQHFeTzYzcliE2ZfNXkN2EzYxcho7jNHRdb7FbiKZpYyTwya4kl6FhGOf4Wm/LNFw3j6dl/P+yqV4Q12eKultlvzTQ0GSPQqaf4x7aKcTfafCvkBhfhrYYDAYtCN3D2ZZvSwIN/HRrx1+FIaFGdjeWgwAAAABJRU5ErkJggg=="},c0be:function(t,e,s){},c3a15:function(t,e,s){"use strict";var a=s("c0be"),n=s.n(a);n.a},f124:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderReturn global_div"},[s("content-top",{attrs:{titlename:"退货申请"}}),s("div",{staticClass:"center_div"},[s("el-button",{class:{bakc_el:"all"==t.status},on:{click:function(e){t.status="all"}}},[t._v("全部申请("+t._s(t.all)+")")]),s("el-button",{class:{bakc_el:1==t.status},on:{click:function(e){t.status=1}}},[t._v("待处理("),s("span",{staticClass:"spa_red"},[t._v(t._s(t.dfk))]),t._v(")")]),s("el-button",{class:{bakc_el:2==t.status},on:{click:function(e){t.status=2}}},[t._v("退货中("),s("span",{staticClass:"spa_red"},[t._v(t._s(t.dfh))]),t._v(")")]),s("el-button",{class:{bakc_el:6==t.status},on:{click:function(e){t.status=6}}},[t._v("已完成("),s("span",{staticClass:"spa_red"},[t._v(t._s(t.yfh))]),t._v(")")]),s("el-button",{class:{bakc_el:3==t.status},on:{click:function(e){t.status=3}}},[t._v("已拒绝("),s("span",{staticClass:"spa_red"},[t._v(t._s(t.ywc))]),t._v(")")]),s("div",{staticClass:"list_head"},[s("div",{staticClass:"div_search"},[t._m(0),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:t.visibleSearch,expression:"visibleSearch"}],staticClass:"spa_cur",on:{click:function(e){t.visibleSearch=!1}}},[s("i",{staticClass:"el-icon-arrow-up"}),t._v("\r\n                收起筛选\r\n                ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.visibleSearch,expression:"!visibleSearch"}],staticClass:"spa_cur",on:{click:function(e){t.visibleSearch=!0}}},[s("i",{staticClass:"el-icon-arrow-down"}),t._v("\r\n                打开筛选\r\n                ")]),s("el-button",{on:{click:function(e){t.getStatus(1,"")}}},[t._v("查询结果")])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleSearch,expression:"visibleSearch"}],staticClass:"div_center"},[s("span",{staticClass:"list_conditions"},[t._v("输入搜索:")]),s("el-input",{staticClass:"search_input",attrs:{placeholder:"订单编号",clearable:""},model:{value:t.searchcode,callback:function(e){t.searchcode=e},expression:"searchcode"}}),s("span",{staticClass:"list_conditions"},[t._v("用户账号:")]),s("el-input",{staticClass:"search_input",attrs:{placeholder:"收货人姓名",clearable:""},model:{value:t.receiver,callback:function(e){t.receiver=e},expression:"receiver"}}),s("span",{staticClass:"list_conditions"},[t._v("提交时间:")]),s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]),s("div",{staticClass:"list_title"},[t._m(1),s("el-button",{staticClass:"button-fr",on:{click:t.exportExcel}},[t._v("\r\n            导出订单\r\n        ")])],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"mall-table",attrs:{id:"aaa",data:t.tableData3},on:{"selection-change":t.tableSelection}},[s("el-table-column",{attrs:{type:"selection",width:"55",selectable:t.checkboxT,disabled:"true"}}),s("el-table-column",{attrs:{label:"服务单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.code))]}}])}),s("el-table-column",{attrs:{label:"申请时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.creatTime))]}}])}),s("el-table-column",{attrs:{label:"用户账号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.mobilePhone))]}}])}),s("el-table-column",{attrs:{label:"退款金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.applicationReturnMoney))]}}])}),s("el-table-column",{attrs:{label:"申请状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?s("span",[t._v("待处理")]):2==e.row.status?s("span",[t._v("同意退货")]):3==e.row.status?s("span",[t._v("拒绝退货")]):4==e.row.status?s("span",[t._v("收到货确认退款")]):5==e.row.status?s("span",[t._v("收到货拒绝退款")]):s("span",[t._v("完成")])]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?s("span",{staticClass:"table-btn",on:{click:function(s){t.$router.push("/order/returnGoods/returnGoodsDetail?id="+e.row.id)}}},[t._v("查看详情")]):3==e.row.status?s("span",{staticClass:"table-btn",on:{click:function(s){t.remove([e.row.id])}}},[t._v("删除")]):t._e()]}}])})],1),s("div",{staticClass:"list_footer"},[s("div",{staticClass:"lists_wrap"},[s("el-checkbox",{on:{change:function(e){t.toggleSelection(t.tableData3)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")]),t._v(" \r\n                "),s("el-select",{attrs:{placeholder:"批量操作",size:"mini"},model:{value:t.operation,callback:function(e){t.operation=e},expression:"operation"}},[s("el-option",{attrs:{label:"删除",value:"删除"}})],1),t._v(" \r\n                "),s("el-button",{attrs:{size:"mini"},on:{click:t.deleteEre}},[t._v("确定")])],1),s("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":1,layout:"total,prev, pager, next, jumper",total:t.total},on:{"current-change":t.getStatus}})],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"el-icon-search"}),t._v("\r\n                筛选查询\r\n            ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("img",{attrs:{src:s("4655")}}),t._v(" 数据列表\r\n        ")])}],l=s("5c96"),o={name:"orderreturn",data(){return{checked:!1,visibleSearch:!1,status:"all",orderData:{},all:"",dfk:"",dfh:"",yfh:"",ywc:"",ygb:"",loading:!1,pageSize:10,receiver:"",searchcode:"",value1:"",tableData3:[],total:null,checkItemId:[],idList:[],operation:""}},created(){this.onload(),this.getStatus(1,"")},methods:{remove(t){this.$confirm("确认删除吗?").then(()=>{this.$http.post("/merchant_return_goods/delete",{ids:t}).then(()=>{l["Message"].success("删除成功"),this.getStatus(1,this.status),this.onlond()},t=>{l["Message"].error(t.msg)})})},deleDates(t){this.$confirm("确定删除订单嘛","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(e=>{this.$http.post("/merchant_return_goods/delete",{id:t,status:20,merchantId:JSON.parse(this.$store.getters.userInfo).merchantId}).then(t=>{this.getStatus(1,""),l["Message"].success("删除成功")})})},tableSelection(t){this.idList=t},deleteEre(){if(""==this.operation||""==this.idList)l["Message"].warning("未选择操作项");else{let t=this.idList.map(t=>{return t.id});this.deleDates(t)}},getStatus(t,e){this.loading=!0,this.$http.post("/merchant_return_goods/query_for_page",{currentPage:t,pageSize:this.pageSize,contact:this.receiver,code:this.searchcode,creatTime:this.value1,status:e,merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(t=>{this.total=t.totalCount,this.tableData3=t.list,this.loading=!1},t=>{l["Message"].error(t.msg)})},onload(){this.$http.post("/merchant_return_goods/getCountByStatus",{status:"",merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(t=>{this.all=t}),this.$http.post("/merchant_return_goods/getCountByStatus",{status:1,merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(t=>{this.dfk=t}),this.$http.post("/merchant_return_goods/getCountByStatus",{status:2,merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(t=>{this.dfh=t,console.log(t)}),this.$http.post("/merchant_return_goods/getCountByStatus",{status:6,merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(t=>{this.ywc=t}),this.$http.post("/merchant_return_goods/getCountByStatus",{status:3,merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(t=>{this.ygb=t})}},watch:{status:function(t){console.log(t),this.getStatus(1,t)}}},c=o,r=(s("c3a15"),s("2877")),i=Object(r["a"])(c,a,n,!1,null,"12be8739",null);i.options.__file="orderReturn.vue";e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-32f67c54.bb92c228.js.map