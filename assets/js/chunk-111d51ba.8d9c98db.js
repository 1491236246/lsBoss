(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-111d51ba"],{"2eb3":function(e,t,r){},"53ba":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Addadvert global_div"},[r("div",{staticClass:"center_div"},[r("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"广告名称: ",prop:"adName"}},[r("el-input",{model:{value:e.ruleForm.adName,callback:function(t){e.$set(e.ruleForm,"adName",t)},expression:"ruleForm.adName"}})],1),r("el-form-item",{attrs:{label:"广告位置: ",prop:"adPosition"}},[r("el-select",{attrs:{placeholder:"请选择广告位置"},model:{value:e.ruleForm.adPosition,callback:function(t){e.$set(e.ruleForm,"adPosition",t)},expression:"ruleForm.adPosition"}},e._l(e.adPositionList,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),r("el-form-item",{attrs:{label:"上线/下线: ",prop:"online"}},[r("el-radio-group",{model:{value:e.ruleForm.online,callback:function(t){e.$set(e.ruleForm,"online",t)},expression:"ruleForm.online"}},[r("el-radio",{attrs:{label:"1"}},[e._v("上线")]),r("el-radio",{attrs:{label:"0"}},[e._v("下线")])],1)],1),r("el-form-item",{attrs:{label:"广告图片: ",prop:"adPicture"}},[e.ruleForm.adPicture?r("img",{staticClass:"form-img",attrs:{src:e.ruleForm.adPicture,alt:""}}):e._e(),r("div",{staticClass:"upload-btn-wrap"},[r("label",{attrs:{for:"upload"}},[r("el-button",{attrs:{type:"primary",size:"small"}},[e._v("上传图片")])],1),r("input",{staticClass:"upload-input",attrs:{id:"upload",type:"file",accept:"image/jpeg, image/png"},on:{change:e.uploadadPicture}}),r("p",{staticClass:"form-tips"},[e._v("只能上传jpg/png格式文件，文件不能超过50kb")])])]),r("el-form-item",{attrs:{label:"广告指定商品: ",prop:"adLink"}},[r("el-select",{attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入商品名","remote-method":e.searchGoods},on:{change:e.handleGoods},model:{value:e.ruleForm.adLink,callback:function(t){e.$set(e.ruleForm,"adLink",t)},expression:"ruleForm.adLink"}},e._l(e.goodsList,function(e){return r("el-option",{attrs:{label:e.goodsName,value:e.id}})}),1)],1),r("el-form-item",{attrs:{label:"广告备注: ",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),r("el-button",{on:{click:e.back}},[e._v("返回")])],1)],1)],1)])},i=[],s={name:"Addadvert",data(){let e=(e,t,r)=>{this.ruleForm.adPicture?r():r(new Error("请上传广告图片"))};return{loading:!1,adPositionList:{1:"APP首页轮播",2:"分类轮播"},adLink:"",goodsList:[],ruleForm:{adName:"",adPosition:"",adPicture:"",adLink:"",online:"1",remark:""},rules:{adName:[{required:!0,message:"请输入广告名称",trigger:"blur"},{max:30,message:"长度必须小于30个字符",trigger:"blur"}],adPosition:[{required:!0,message:"请选择广告位置",trigger:"change"}],online:[{required:!0,message:"请选择广告是否上线",trigger:"change"}],adPicture:[{validator:e,required:!0,trigger:"change"}],adLink:[{required:!0,message:"请选择广告商品",trigger:"change"}]}}},created(){this.$route.query.id&&(this.loading=!0,this.$http.post("merchant_ad/get_single_merchant_ad",{id:this.$route.query.id}).then(e=>{this.isAdd=!1,this.$set(this.ruleForm,"adName",e.adName),this.$set(this.ruleForm,"adPosition",String(e.adPosition)),this.$set(this.ruleForm,"adPicture",e.adPicture),this.$set(this.ruleForm,"online",e.online),this.$set(this.ruleForm,"remark",e.remark),this.adLink=e.adLink,this.$http.post("merchantGoods/merchant_goods_by_id",{id:e.adLink}).then(e=>{this.$set(this.ruleForm,"adLink",e.goodsName),this.loading=!1})},e=>{Message.error(e.msg)}))},methods:{uploadadPicture(e){this.uploadFile(e).then(e=>{this.$set(this.ruleForm,"adPicture",e.imgUrl)})},submitForm(e){this.$refs[e].validate(e=>{if(!e)return!1;this.isAdd?this.addEdit("merchant_ad/add_merchant_ad"):(this.$set(this.ruleForm,"id",this.$route.query.id),this.$set(this.ruleForm,"adLink",this.adLink),this.addEdit("merchant_ad/change_merchant_ad"))})},addEdit(e){let t=Object.assign({},this.ruleForm);this.$http.post(e,t).then(()=>{this.$msgSuc("提交成功"),setTimeout(()=>{this.$router.push("/operate/advertising")},500)},e=>{this.$msgErr(e.msg)})},searchGoods(e){this.$http.post("merchantGoods/merchant_goods_list_page",{currentPage:1,pageSize:100,goodsName:e}).then(e=>{this.goodsList=e.list})},handleGoods(e){e&&(this.adLink=e.toString())}}},o=s,l=(r("ea2c"),r("2877")),d=Object(l["a"])(o,a,i,!1,null,"6470f37b",null);d.options.__file="Addadvert.vue";t["default"]=d.exports},ea2c:function(e,t,r){"use strict";var a=r("2eb3"),i=r.n(a);i.a}}]);
//# sourceMappingURL=chunk-111d51ba.8d9c98db.js.map