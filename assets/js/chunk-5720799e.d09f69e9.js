(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5720799e"],{"0952":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"proHeader global_div"},[a("content-top",{attrs:{titlename:"类目列表"}}),a("div",{staticClass:"center_div"},[a("div",{staticClass:"list_head"},[a("div",{staticClass:"div_search"},[e._m(0),a("div",[a("span",{directives:[{name:"show",rawName:"v-show",value:e.visibleSearch,expression:"visibleSearch"}],staticClass:"spa_cur",on:{click:function(t){e.visibleSearch=!1}}},[a("i",{staticClass:"el-icon-arrow-up"}),e._v("\n              收起筛选\n              ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.visibleSearch,expression:"!visibleSearch"}],staticClass:"spa_cur",on:{click:function(t){e.visibleSearch=!0}}},[a("i",{staticClass:"el-icon-arrow-down"}),e._v("\n              打开筛选\n              ")]),a("el-button",{on:{click:e.getStatepage}},[e._v("查询结果")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleSearch,expression:"visibleSearch"}],staticClass:"div_center"},[a("span",{staticClass:"list_conditions"},[e._v("类目名称:")]),a("el-input",{staticClass:"search_input",attrs:{placeholder:"请输入类目名称",clearable:""},model:{value:e.navName,callback:function(t){e.navName=t},expression:"navName"}}),a("span",{staticClass:"list_conditions"},[e._v("类目状态:")]),a("el-select",{staticClass:"search-input",attrs:{placeholder:"请选择类目状态",clearable:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("el-option",{attrs:{label:"推荐中",value:"0"}}),a("el-option",{attrs:{label:"为推荐",value:"2"}})],1)],1)]),a("div",{staticClass:"list_content"},[a("div",{staticClass:"list_title"},[e._m(1),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.second,expression:"second"}],staticClass:"el_left",on:{click:function(t){e.switchQuery(0,"")}}},[e._v("返回")]),a("el-button",{staticClass:"el_left"},[e._v("添加商品")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"编号"}}),a("el-table-column",{attrs:{prop:"navName",label:"类目名称"}}),e.second?e._e():a("el-table-column",{attrs:{label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:e._f("imgSrc")(t.row.navIcon),alt:""}})]}}])}),a("el-table-column",{attrs:{label:"级别"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s("0"==t.row.parentId?"一级":"二级"))]}}])}),a("el-table-column",{attrs:{label:"是否推荐"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":0,"inactive-value":2,"active-color":"#5BC0BF","inactive-color":"#dedede"},on:{change:function(a){e.handleShow(t.row.status,t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{label:"排序"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"text-center",attrs:{size:"small"},on:{blur:function(a){e.handleNavSort(a,t.row)}},model:{value:t.row.navSort,callback:function(a){e.$set(t.row,"navSort",a)},expression:"scope.row.navSort"}})]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(2==t.row.status?"未推荐":"推荐中"))]}}])}),e.second?e._e():a("el-table-column",{attrs:{label:"设置",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col_span",on:{click:function(a){e.$router.push("/promotion/addHeader?parentId="+t.row.id)}}},[e._v("新增下级")]),a("span",{staticClass:"col_span",on:{click:function(a){e.switchQuery(!0,t.row.id)}}},[e._v("查看下级")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col_span",on:{click:function(a){e.setTop(t.row.id,t.row.navTop)}}},[e._v(e._s(0==t.row.navTop?"置顶":"取消置顶"))]),a("span",{staticClass:"col_span",on:{click:function(a){e.remove([t.row.id])}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"list_footer"},[a("div",{staticClass:"lists_wrap"},[a("el-checkbox",{on:{change:function(t){e.toggleSelection(e.tableData3)}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("全选")]),e._v(" \n              "),a("el-select",{attrs:{placeholder:"批量操作",size:"mini"},model:{value:e.operation,callback:function(t){e.operation=t},expression:"operation"}},[a("el-option",{attrs:{label:"删除",value:"删除"}})],1),e._v(" \n              "),a("el-button",{attrs:{size:"mini"},on:{click:e.deleteEre}},[e._v("确定")])],1),a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.currentPage,layout:"total,prev, pager, next, jumper",total:e.total},on:{"current-change":e.getStatepage}})],1)],1)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"el-icon-search"}),e._v("\n              筛选查询\n          ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("img",{attrs:{src:a("4655")}}),e._v(" 数据列表\n              ")])}],i=a("5c96"),l={name:"proheader",data(){return{second:!1,currentPage:1,visibleSearch:!1,goodsName:"",typeId:"",categoryList:[],tableData3:[],loading:!1,idList:[],checked:"",operation:"",total:null,headerId:0,navName:"",status:""}},created(){this.getStatepage()},methods:{handleShow(e,t){let a={id:t.id,navName:t.navName,parentId:t.parentId,navSort:t.navSort,status:e,navIcon:t.navIcon,navDesc:t.navDesc};this.$http.post("merchantNavigation/merchant_navigation_update",a).then(()=>{i["Message"].success("操作成功")},e=>{i["Message"].success(e.msg)})},switchQuery(e,t){this.currentPage=1,e?(this.second=!0,this.headerId=t):(this.second=!1,this.headerId=0),this.getStatepage()},getStatepage(){this.loading=!0,this.$http.post("merchantNavigation/merchant_navigation_list_page",{currentPage:this.currentPage,pageSize:10,parentId:this.headerId,navName:this.navName,status:this.status}).then(e=>{this.tableData3=e.list,this.total=e.totalCount,this.loading=!1})},remove(e){this.$confirm("确认删除吗?").then(()=>{this.$http.post("merchantNavigation/merchant_nav_batch",{ids:e,oprate:1}).then(()=>{i["Message"].success("删除成功"),this.getStatepage()},e=>{i["Message"].error(e.msg)})})},setTop(e,t){this.$http.post("merchantNavigation/set_nav_top",{id:e,navTop:0==t?"":0}).then(()=>{i["Message"].success("操作成功"),this.getStatepage()},e=>{i["Message"].error(e.msg)})},deleteEre(){if(""==this.operation||""==this.idList)i["Message"].warning("未选择操作项");else{let e=this.idList.map(e=>{return e.id});this.$http.post("merchantNavigation/merchant_nav_batch",e).then(e=>{i["Message"].success("删除成功"),this.getStatepage()},e=>{i["Message"].error(e)})}},handleSelectionChange(e){this.idList=e},toggleSelection(e){e?e.forEach(e=>{this.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleNavSort(e,t){if(e.target.value<0||e.target.value>999)return void this.$msgWar("排序在0 - 999之间");let a={id:t.id,navName:t.navName,parentId:t.parentId,navSort:e.target.value,status:t.status,navIcon:t.navIcon,navDesc:t.navDesc};this.$http.post("merchantNavigation/merchant_navigation_update",a).then(()=>{i["Message"].success("操作成功"),this.getStatepage()},e=>{i["Message"].success(e.msg)})}},filters:{imgSrc(e){return e.split(",")[0]}}},o=l,c=(a("0fc4"),a("2877")),r=Object(c["a"])(o,s,n,!1,null,"0e5c7749",null);r.options.__file="proHeader.vue";t["default"]=r.exports},"0fc4":function(e,t,a){"use strict";var s=a("6e90"),n=a.n(s);n.a},4655:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVDhPzZQhT8NAFMd33ZJWIBATTTMxgUAgEAgkhoQPgIAERAVZlxSNYanBY5q0mykJJJAg+Ajg+ACIIZowgZiYmECwNmn5v9tbQ1JSRlPBL7nee9d3/3t3fVdRA57ntYUQ62ma6nBH3W73KQgCbTabPWN8k2IWICZE20XMyHXdlXq9vg9/gj7sdDqvSr/fP8CkIWIfFEVx0M5oYhzHTYxvkP0djK3xwjUSoznob+G++L5/JPAYIiiEwKFt2x8UuIAyR0ctAwJjyoRdCe0miqJLmFsCGcZJkpxgC1fz1+XA4jtY7FGB3ZgPVQMJVkouO3mwQlyzWwg+Ts+yrAt2JXSGKc7QrPIMK+WnLVvYsqzFJbhBCfXYluQEVVW9M03TZ7cQHFeTzYzcliE2ZfNXkN2EzYxcho7jNHRdb7FbiKZpYyTwya4kl6FhGOf4Wm/LNFw3j6dl/P+yqV4Q12eKultlvzTQ0GSPQqaf4x7aKcTfafCvkBhfhrYYDAYtCN3D2ZZvSwIN/HRrx1+FIaFGdjeWgwAAAABJRU5ErkJggg=="},"6e90":function(e,t,a){}}]);
//# sourceMappingURL=chunk-5720799e.d09f69e9.js.map