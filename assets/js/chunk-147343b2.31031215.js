(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-147343b2"],{"2feb":function(e,t,a){"use strict";var l=a("9dc2"),s=a.n(l);s.a},"40fd":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"global_div proOrder"},[a("content-top",{attrs:{titlename:"订单管理"}}),a("div",{staticClass:"center_div"},[a("div",{staticClass:"list_head"},[a("div",{staticClass:"div_search"},[e._m(0),a("div",[a("span",{directives:[{name:"show",rawName:"v-show",value:e.visibleSearch,expression:"visibleSearch"}],staticClass:"spa_cur",on:{click:function(t){e.visibleSearch=!1}}},[a("i",{staticClass:"el-icon-arrow-up"}),e._v("\n              收起筛选\n              ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.visibleSearch,expression:"!visibleSearch"}],staticClass:"spa_cur",on:{click:function(t){e.visibleSearch=!0}}},[a("i",{staticClass:"el-icon-arrow-down"}),e._v("\n              打开筛选\n              ")]),a("el-button",{on:{click:function(t){e.getStatepage(1)}}},[e._v("查询结果")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleSearch,expression:"visibleSearch"}],staticClass:"div_center"},[a("span",{staticClass:"list_conditions"},[e._v("商品名称:")]),a("el-input",{staticClass:"search_input",attrs:{placeholder:"请输入商品名称",clearable:""},model:{value:e.navName,callback:function(t){e.navName=t},expression:"navName"}}),a("span",{staticClass:"list_conditions"},[e._v("订单编号:")]),a("el-input",{staticClass:"search_input",attrs:{placeholder:"请输入订单编号",clearable:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),a("span",{staticClass:"list_conditions"},[e._v("订单状态:")]),a("el-select",{staticClass:"search-input",attrs:{placeholder:"请选择拼单状态",clearable:""},model:{value:e.groupStatus,callback:function(t){e.groupStatus=t},expression:"groupStatus"}},[a("el-option",{attrs:{label:"已关闭",value:"0"}}),a("el-option",{attrs:{label:"待付款",value:"1"}}),a("el-option",{attrs:{label:"待发货",value:"2"}}),a("el-option",{attrs:{label:"待收货",value:"3"}}),a("el-option",{attrs:{label:"待评价",value:"4"}}),a("el-option",{attrs:{label:"已完成",value:"5"}}),a("el-option",{attrs:{label:"拼团中",value:"6"}}),a("el-option",{attrs:{label:"拼团成功",value:"7"}}),a("el-option",{attrs:{label:"拼团取消",value:"8"}}),a("el-option",{attrs:{label:"拼团失败",value:"9"}}),a("el-option",{attrs:{label:"后台取消",value:"10"}}),a("el-option",{attrs:{label:"已删除",value:"20"}})],1),a("span",{staticClass:"list_conditions"},[e._v("拼团状态:")]),a("el-select",{staticClass:"search-input",attrs:{placeholder:"请选择拼团状态",clearable:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("el-option",{attrs:{label:"拼团成功",value:"1"}}),a("el-option",{attrs:{label:"拼团失败",value:"2"}}),a("el-option",{attrs:{label:"后台取消",value:"3"}}),a("el-option",{attrs:{label:"拼团中",value:"4"}})],1)],1)]),a("div",{staticClass:"list_content"},[e._m(1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark",border:""}},[a("el-table-column",{attrs:{prop:"code",label:"订单编号"}}),a("el-table-column",{attrs:{prop:"groupManageId",label:"拼团编号"}}),a("el-table-column",{attrs:{label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.details[0].goodsName))]}}])}),a("el-table-column",{attrs:{label:"拼团状态",prop:"groupSpec"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("getPromotionStatus")(t.row.groupStatus)))]}}])}),a("el-table-column",{attrs:{label:"订单金额",prop:"totalMoeny"}}),a("el-table-column",{attrs:{prop:"groupNum",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("getPromotionOrderStatus")(t.row.status)))]}}])}),a("el-table-column",{attrs:{prop:"mobilePhone",label:"用户名"}}),a("el-table-column",{attrs:{prop:"receiver",label:"收货人"}}),a("el-table-column",{attrs:{prop:"phone",label:"收货人手机"}}),a("el-table-column",{attrs:{prop:"address",label:"收货地址"}}),a("el-table-column",{attrs:{label:"支付方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("微信支付")]}}])}),a("el-table-column",{attrs:{label:"已取消退款状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0==t.row.returnStatus?"未退款":"已退款"))]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.status?a("span",{staticClass:"table-btn",on:{click:function(a){e.ruleForm.id=t.row.id,e.dialogVisible=!0}}},[e._v("发货")]):e._e()]}}])})],1),a("div",{staticClass:"list_footer"},[a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.currentPage,layout:"total,prev, pager, next, jumper",total:e.total},on:{"current-change":e.getStatepage}})],1),a("el-dialog",{attrs:{title:"拼团发货",visible:e.dialogVisible,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-form-item",{attrs:{label:"快递公司",prop:"sendCompany"}},[a("el-input",{model:{value:e.ruleForm.sendCompany,callback:function(t){e.$set(e.ruleForm,"sendCompany",t)},expression:"ruleForm.sendCompany"}})],1),a("el-form-item",{attrs:{label:"快递单号",prop:"sendCode"}},[a("el-input",{model:{value:e.ruleForm.sendCode,callback:function(t){e.$set(e.ruleForm,"sendCode",t)},expression:"ruleForm.sendCode"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.sendGoods}},[e._v("确 定")])],1)],1)],1)])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"el-icon-search"}),e._v("\n              筛选查询\n          ")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"list_title"},[l("span",[l("img",{attrs:{src:a("4655")}}),e._v(" 数据列表\n              ")])])}],o=a("5c96"),r={name:"proOrder",data(){return{dialogVisible:!1,total:null,visibleSearch:!1,navName:"",id:"",status:"",currentPage:1,gropuStatus:"",tableData3:[],loading:!0,groupManageId:"",ruleForm:{sendCompany:"",sendCode:""},rules:{sendCompany:[{required:!0,message:"请输入快递公司",trigger:"blur"}],sendCode:[{required:!0,message:"请输入快递单号",trigger:"blur"}]}}},created(){this.$route.query.id&&(this.groupManageId=this.$route.query.id),this.getStatepage(1)},methods:{getStatepage(e){this.loading=!0,this.$http.post("merchant_order/groupOrderList",{currentPage:e,pageSize:10,goodName:this.navName||null,code:this.id||null,groupStatus:this.groupStatus||null,status:this.status||null,groupManageId:this.groupManageId||null,merchantId:JSON.parse(localStorage.getItem("userInfo")).merchantId}).then(e=>{this.tableData3=e.list,this.total=e.totalCount,this.loading=!1})}},sendGoods(){let e=Object.assign({merchantId:JSON.parse(localStorage.getItem("userInfo")).merchantId,status:3},this.ruleForm);this.$refs["ruleForm"].validate(t=>{if(!t)return!1;this.$http.post("merchant_order/update",e).then(()=>{o["Message"].success("发货成功"),this.dialogVisible=!1,this.ruleForm={sendCompany:"",sendCode:""}},e=>{o["Message"].error(e.msg)})})},filters:{getPromotionStatus(e){let t={1:"拼团成功",2:"拼团失败",3:"后台取消",4:"拼团中"};return t[e]},getPromotionOrderStatus(e){let t={0:"已关闭",1:"待付款",2:"待发货",3:"待收货",4:"待评价",5:"已完成",6:"拼团中",7:"拼团成功",8:"拼团取消",9:"拼团失败",10:"后台取消",20:"已删除"};return t[e]}}},n=r,i=(a("2feb"),a("2877")),u=Object(i["a"])(n,l,s,!1,null,"5347beab",null);u.options.__file="proOrder.vue";t["default"]=u.exports},4655:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVDhPzZQhT8NAFMd33ZJWIBATTTMxgUAgEAgkhoQPgIAERAVZlxSNYanBY5q0mykJJJAg+Ajg+ACIIZowgZiYmECwNmn5v9tbQ1JSRlPBL7nee9d3/3t3fVdRA57ntYUQ62ma6nBH3W73KQgCbTabPWN8k2IWICZE20XMyHXdlXq9vg9/gj7sdDqvSr/fP8CkIWIfFEVx0M5oYhzHTYxvkP0djK3xwjUSoznob+G++L5/JPAYIiiEwKFt2x8UuIAyR0ctAwJjyoRdCe0miqJLmFsCGcZJkpxgC1fz1+XA4jtY7FGB3ZgPVQMJVkouO3mwQlyzWwg+Ts+yrAt2JXSGKc7QrPIMK+WnLVvYsqzFJbhBCfXYluQEVVW9M03TZ7cQHFeTzYzcliE2ZfNXkN2EzYxcho7jNHRdb7FbiKZpYyTwya4kl6FhGOf4Wm/LNFw3j6dl/P+yqV4Q12eKultlvzTQ0GSPQqaf4x7aKcTfafCvkBhfhrYYDAYtCN3D2ZZvSwIN/HRrx1+FIaFGdjeWgwAAAABJRU5ErkJggg=="},"9dc2":function(e,t,a){}}]);
//# sourceMappingURL=chunk-147343b2.31031215.js.map