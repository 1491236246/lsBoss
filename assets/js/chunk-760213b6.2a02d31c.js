(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-760213b6"],{"1e90":function(e,t,a){},4655:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGLSURBVDhPzZQhT8NAFMd33ZJWIBATTTMxgUAgEAgkhoQPgIAERAVZlxSNYanBY5q0mykJJJAg+Ajg+ACIIZowgZiYmECwNmn5v9tbQ1JSRlPBL7nee9d3/3t3fVdRA57ntYUQ62ma6nBH3W73KQgCbTabPWN8k2IWICZE20XMyHXdlXq9vg9/gj7sdDqvSr/fP8CkIWIfFEVx0M5oYhzHTYxvkP0djK3xwjUSoznob+G++L5/JPAYIiiEwKFt2x8UuIAyR0ctAwJjyoRdCe0miqJLmFsCGcZJkpxgC1fz1+XA4jtY7FGB3ZgPVQMJVkouO3mwQlyzWwg+Ts+yrAt2JXSGKc7QrPIMK+WnLVvYsqzFJbhBCfXYluQEVVW9M03TZ7cQHFeTzYzcliE2ZfNXkN2EzYxcho7jNHRdb7FbiKZpYyTwya4kl6FhGOf4Wm/LNFw3j6dl/P+yqV4Q12eKultlvzTQ0GSPQqaf4x7aKcTfafCvkBhfhrYYDAYtCN3D2ZZvSwIN/HRrx1+FIaFGdjeWgwAAAABJRU5ErkJggg=="},"4f8f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"goodsBrand global_div"},[a("content-top",{attrs:{titlename:"商品评价"}}),a("div",{staticClass:"center_div"},[a("div",{staticClass:"list_head"},[a("div",{staticClass:"div_search"},[e._m(0),a("div",[a("span",{directives:[{name:"show",rawName:"v-show",value:e.visibleSearch,expression:"visibleSearch"}],staticClass:"spa_cur",on:{click:function(t){e.visibleSearch=!1}}},[a("i",{staticClass:"el-icon-arrow-up"}),e._v("\n            收起筛选\n          ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.visibleSearch,expression:"!visibleSearch"}],staticClass:"spa_cur",on:{click:function(t){e.visibleSearch=!0}}},[a("i",{staticClass:"el-icon-arrow-down"}),e._v("\n            打开筛选\n          ")]),a("el-button",{on:{click:e.dataSearch}},[e._v("查询结果")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleSearch,expression:"visibleSearch"}],staticClass:"div_center"},[a("span",{staticClass:"list_conditions"},[e._v("输入搜索:")]),a("el-input",{staticClass:"search_input",attrs:{placeholder:"品牌名称/关键字",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)])]),a("div",{staticClass:"list_content"},[a("div",{staticClass:"list_title"},[e._m(1),a("el-button",{staticClass:"el_right",on:{click:function(t){e.$router.push({name:"addbrand"})}}},[e._v("添加品牌")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData3,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"编号"}}),a("el-table-column",{attrs:{label:"品牌名称",prop:"name"}}),a("el-table-column",{attrs:{prop:"firstChar",label:"品牌首字母"}}),a("el-table-column",{attrs:{label:"排序",prop:"sorting"}}),a("el-table-column",{attrs:{label:"是否显示"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#5BC0BF","inactive-color":"#ff4949"},on:{change:function(a){e.handleShow(t.row.isShow,t.row)}},model:{value:t.row.isShow,callback:function(a){e.$set(t.row,"isShow",a)},expression:"scope.row.isShow"}})]}}])}),a("el-table-column",{attrs:{label:"相关",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("商品: "+e._s(t.row.goodsTotal))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"col_span",on:{click:function(a){e.outGoods(t.row.id)}}},[e._v("编辑")]),e._v(" \n          "),a("span",{staticClass:"col_span",on:{click:function(a){e.deleDates([t.row.id])}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"list_footer"},[a("div",{staticClass:"lists_wrap"},[a("el-checkbox",{on:{change:function(t){e.toggleSelection(e.tableData3)}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("全选")]),e._v(" \n        "),a("el-select",{attrs:{placeholder:"批量操作",size:"mini"},model:{value:e.operation,callback:function(t){e.operation=t},expression:"operation"}},[a("el-option",{attrs:{label:"删除",value:"删除"}}),a("el-option",{attrs:{label:"显示品牌",value:"显示品牌"}}),a("el-option",{attrs:{label:"隐藏品牌",value:"隐藏品牌"}})],1),e._v(" \n        "),a("el-button",{attrs:{size:"mini"},on:{click:e.deleteEre}},[e._v("确定")])],1),a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.currentPage,layout:"total,prev, pager, next, jumper",total:e.totalCount},on:{"current-change":e.getStatepage}})],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",{staticClass:"el-icon-search"}),e._v("\n          筛选查询\n        ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("img",{attrs:{src:a("4655")}}),e._v(" 数据列表\n      ")])}],o=a("5c96"),n={name:"goodsbrand",comments:{},data(){return{checked:!1,visibleSearch:!1,brandId:"",typeId:"",tableData3:[],currentPage:1,pageSize:10,goodsName:"",brandId:"",loading:!0,totalCount:null,operation:"",idList:[],userName:"",name:""}},created(){this.getStatepage(1)},methods:{handleShow(e,t){let a={id:t.id,name:t.name,logo:t.logo,areaLogo:t.areaLogo,story:t.story,isShow:e,sorting:t.sorting,firstChar:t.firstChar};this.$http.post("merchant_goods_brand/update",a).then(()=>{o["Message"].success("操作成功")},e=>{o["Message"].error(e.msg)})},batchShow(e,t){this.$http.post("merchant_goods_brand/hidden_batch",{type:t,ids:e}).then(()=>{this.getStatepage(1),o["Message"].success("操作成功")},e=>{o["Message"].error(e.msg)})},handleStatus(e,t){this.$http.post("/merchantGoodsComment/delete_not_show",{id:e,status:t}).then(e=>{o["Message"].success("操作成功")},e=>{o["Message"].error(e.msg)})},deleDates(e){this.$confirm("确认删除吗?").then(()=>{this.$http.post("merchant_goods_brand/delete_batch",e).then(()=>{this.getList(),o["Message"].success("删除成功")},e=>{o["Message"].error(e.msg)})})},outGoods(e){this.$router.push({name:"addbrand",query:{id:e}})},dataSearch(){if(!this.visibleSearch)return!1;this.loading=!0,this.$http.post("merchant_goods_brand/query_for_page",{currentPage:1,pageSize:10,name:this.name}).then(e=>{this.tableData3=e.list,this.loading=!1})},getStatepage(e){this.$http.post("merchant_goods_brand/query_for_page",{currentPage:e,pageSize:this.pageSize,name:this.name}).then(e=>{console.log(e),this.loading=!1,this.tableData3=e.list,this.totalCount=e.totalCount},e=>{o["Message"].error(e)})},toggleSelection(e){e?e.forEach(e=>{this.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},deleteEre(){if(""==this.operation||""==this.idList)o["Message"].warning("未选择操作项");else{let e=this.idList.map(e=>{return e.id});switch(this.operation){case"删除":this.deleDates(e);break;case"显示品牌":this.batchShow(e,1);break;case"隐藏品牌":this.batchShow(e,0);break}}},handleSelectionChange(e){this.idList=e}}},l=n,r=(a("9979"),a("f52b"),a("2877")),c=Object(r["a"])(l,s,i,!1,null,"5f002150",null);c.options.__file="goodsBrand.vue";t["default"]=c.exports},9979:function(e,t,a){"use strict";var s=a("1e90"),i=a.n(s);i.a},c1aa:function(e,t,a){},f52b:function(e,t,a){"use strict";var s=a("c1aa"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-760213b6.2a02d31c.js.map