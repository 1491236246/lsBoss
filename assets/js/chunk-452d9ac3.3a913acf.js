(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452d9ac3"],{"17c1":function(r,e,t){"use strict";t.r(e);var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"addBrand global_div"},[t("content-top",{attrs:{titlename:"添加属性"}}),t("div",{staticClass:"center_div"},[t("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:r.ruleForm,rules:r.rules,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"品牌名称: ",prop:"name"}},[t("el-input",{model:{value:r.ruleForm.name,callback:function(e){r.$set(r.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"品牌首字母: ",prop:"firstChar"}},[t("el-input",{model:{value:r.ruleForm.firstChar,callback:function(e){r.$set(r.ruleForm,"firstChar",e)},expression:"ruleForm.firstChar"}})],1),t("el-form-item",{attrs:{label:"品牌LOGO: ",prop:"logo"}},[r.ruleForm.logo?t("img",{staticClass:"form-img",attrs:{src:r.ruleForm.logo,alt:""}}):r._e(),t("div",{staticClass:"upload-btn-wrap"},[t("label",{attrs:{for:"upload"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[r._v("上传图片")])],1),t("input",{staticClass:"upload-input",attrs:{id:"upload",type:"file",accept:"image/jpeg, image/png"},on:{change:r.uploadLogo}}),t("p",{staticClass:"form-tips"},[r._v("只能上传jpg/png格式文件")])])]),t("el-form-item",{attrs:{label:"品牌专区大图: ",prop:"areaLogo"}},[r.ruleForm.areaLogo?t("img",{staticClass:"form-img",attrs:{src:r.ruleForm.areaLogo,alt:""}}):r._e(),t("div",{staticClass:"upload-btn-wrap"},[t("label",{attrs:{for:"upload1"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[r._v("上传图片")])],1),t("input",{staticClass:"upload-input",attrs:{id:"upload1",type:"file",accept:"image/jpeg, image/png"},on:{change:r.uploadAreaLogo}}),t("p",{staticClass:"form-tips"},[r._v("只能上传jpg/png格式文件")])])]),t("el-form-item",{attrs:{label:"排序: ",prop:"sorting"}},[t("el-input",{attrs:{type:"number"},model:{value:r.ruleForm.sorting,callback:function(e){r.$set(r.ruleForm,"sorting",e)},expression:"ruleForm.sorting"}})],1),t("el-form-item",{attrs:{label:"品牌故事: ",prop:"story"}},[t("el-input",{attrs:{type:"textarea"},model:{value:r.ruleForm.story,callback:function(e){r.$set(r.ruleForm,"story",e)},expression:"ruleForm.story"}})],1),t("el-form-item",{attrs:{label:"是否显示: ",prop:"isShow"}},[t("el-radio-group",{model:{value:r.ruleForm.isShow,callback:function(e){r.$set(r.ruleForm,"isShow",e)},expression:"ruleForm.isShow"}},[t("el-radio",{attrs:{label:"1"}},[r._v("是")]),t("el-radio",{attrs:{label:"0"}},[r._v("否")])],1),t("p",{staticClass:"form-tips"},[r._v("当品牌下还没有商品的时候，分类页的品牌区将不会显示该品牌。")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){r.submitForm("ruleForm")}}},[r._v("提交")]),t("el-button",{on:{click:function(e){r.$router.go(-1)}}},[r._v("返回")])],1)],1)],1)],1)},a=[],s=t("5c96"),l={name:"params",data(){let r=(r,e,t)=>{this.ruleForm.logo?t():t(new Error("请上传品牌logo"))};return{ruleForm:{name:"",logo:"",areaLogo:"",story:"",isShow:"1",sorting:"",firstChar:""},rules:{name:[{required:!0,message:"请输入品牌名字",trigger:"blur"},{max:20,message:"长度必须小于20个字符",trigger:"blur"}],logo:[{validator:r,required:!0,trigger:"change"}],isShow:[{required:!0,trigger:"change"}]},isAdd:!0}},created(){this.$route.query.id&&this.$http.post("merchant_goods_brand/query_by_id",{id:this.$route.query.id},{type:"form"}).then(r=>{this.isAdd=!1,this.ruleForm.name=r.name,this.ruleForm.logo=r.logo,this.ruleForm.areaLogo=r.areaLogo,this.ruleForm.story=r.story,this.ruleForm.isShow=String(r.isShow),this.ruleForm.sorting=r.sorting,this.ruleForm.firstChar=r.firstChar},r=>{s["Message"].error(r.msg)})},methods:{submitForm(r){this.$refs[r].validate(r=>{if(!r)return!1;this.isAdd?this.addEdit("merchant_goods_brand/add"):(this.ruleForm.id=this.$route.query.id,this.addEdit("merchant_goods_brand/update"))})},addEdit(r){this.$http.post(r,this.ruleForm).then(()=>{s["Message"].success("提交成功"),setTimeout(()=>{this.$router.push("/goods/brand")},500)},r=>{s["Message"].error(r.msg)})},uploadFile(r){return new Promise((e,t)=>{if(r.target.files.length>0){let o=new FormData;o.append("file",r.target.files[0]),this.$http.post("merchant/upload_file",o,{type:"form",file:"image"}).then(r=>{e({imgUrl:r.imgUrl+r.image})},r=>{s["Message"].error(r.msg),t(r)})}})},uploadLogo(r){this.uploadFile(r).then(r=>{this.ruleForm.logo=r.imgUrl})},uploadAreaLogo(r){this.uploadFile(r).then(r=>{this.ruleForm.areaLogo=r.imgUrl})}}},i=l,m=(t("65eb"),t("2877")),u=Object(m["a"])(i,o,a,!1,null,"08acc580",null);u.options.__file="addBrand.vue";e["default"]=u.exports},"65eb":function(r,e,t){"use strict";var o=t("ecd0"),a=t.n(o);a.a},ecd0:function(r,e,t){}}]);
//# sourceMappingURL=chunk-452d9ac3.3a913acf.js.map