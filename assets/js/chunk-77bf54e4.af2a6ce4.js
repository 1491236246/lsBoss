(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77bf54e4"],{"0564":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addProp global_div"},[r("content-top",{attrs:{titlename:"添加属性"}}),r("div",{staticClass:"center_div"},[r("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"属性名称: ",prop:"propertyName"}},[r("el-input",{model:{value:e.ruleForm.propertyName,callback:function(t){e.$set(e.ruleForm,"propertyName",t)},expression:"ruleForm.propertyName"}})],1),r("el-form-item",{attrs:{label:"商品类型: ",prop:"styleId"}},[r("el-select",{staticClass:"search-input",attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.styleId,callback:function(t){e.$set(e.ruleForm,"styleId",t)},expression:"ruleForm.styleId"}},e._l(e.typeList,function(e){return r("el-option",{attrs:{value:e.id,label:e.styleName}})}),1)],1),r("el-form-item",{attrs:{label:"属性是否可选: ",prop:"propertySelect"}},[r("el-radio",{attrs:{label:0,disabled:""},model:{value:e.ruleForm.propertySelect,callback:function(t){e.$set(e.ruleForm,"propertySelect",t)},expression:"ruleForm.propertySelect"}},[e._v("唯一属性")]),r("el-radio",{attrs:{label:1,disabled:""},model:{value:e.ruleForm.propertySelect,callback:function(t){e.$set(e.ruleForm,"propertySelect",t)},expression:"ruleForm.propertySelect"}},[e._v("单选属性")]),r("el-radio",{attrs:{label:2,disabled:""},model:{value:e.ruleForm.propertySelect,callback:function(t){e.$set(e.ruleForm,"propertySelect",t)},expression:"ruleForm.propertySelect"}},[e._v("复选属性")]),r("p",{staticClass:"form-tips"},[e._v('选择"单选/复选属性"时，可以对商品该属性设置多个值，同时还能对不同属性值指定不同的价格加价，用户购买商品时需要选定具体的属性值。选择"唯一属性"时，商品的该属性值只能设置一个值，用户只能查看该值。')])],1),r("el-form-item",{attrs:{label:"属性值: ",prop:"propertyList"}},[e._l(e.dynamicTags,function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){e.handleClose(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])}),e.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleInputConfirm(t):null}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("添加属性值")])],2),r("el-form-item",{attrs:{label:"属性排序: ",prop:"propertyOrder"}},[r("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.propertyOrder,callback:function(t){e.$set(e.ruleForm,"propertyOrder",t)},expression:"ruleForm.propertyOrder"}}),r("p",{staticClass:"form-tips"},[e._v("排序级别最高的属性可单独上传属性图片")])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),r("el-button",{on:{click:function(t){e.$router.go(-1)}}},[e._v("返回")])],1)],1)],1)],1)},l=[],o=r("5c96"),i={name:"addprop",data(){let e=(e,t,r)=>{0==this.dynamicTags.length?r(new Error("请添加属性值")):0==this.ruleForm.propertySelect&&this.dynamicTags.length>1?r(new Error("唯一属性只能添加一个属性值")):r()};return{isAdd:!0,inputValue:"",inputVisible:!1,dynamicTags:[],typeList:[],ruleForm:{propertyName:"",styleId:"",propertySelect:1,propertyList:"",propertyOrder:""},rules:{propertyName:[{required:!0,message:"请输入属性名称",trigger:"blur"},{max:20,message:"长度必须小于20个字符",trigger:"blur"}],styleId:[{required:!0,message:"请选择商品类型",trigger:"change"}],propertyList:[{validator:e,required:!0,trigger:"change"}]}}},created(){this.$http.post("merchantGoodsStyle/merchant_goods_type_list").then(e=>{this.typeList=e,this.$route.query.id&&(this.isAdd=!1,this.$http.post("merchantGoodsProperty/merchant_goods_type_by_id",{id:this.$route.query.id}).then(e=>{this.$set(this.ruleForm,"propertyName",e.propertyName),this.$set(this.ruleForm,"styleId",e.styleId),this.$set(this.ruleForm,"propertySelect",e.propertySelect),this.$set(this.ruleForm,"propertyOrder",e.propertyOrder),e.propertyList.length>0&&(this.dynamicTags=e.propertyList.split(","))}))})},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return!1;this.$set(this.ruleForm,"propertyList",this.dynamicTags.join(",")),this.isAdd?this.addEdit("merchantGoodsProperty/merchant_goods_type_add",this.ruleForm):(this.ruleForm.id=this.$route.query.id,this.addEdit("merchantGoodsProperty/merchant_goods_type_update",this.ruleForm))})},addEdit(e,t){this.$http.post(e,t).then(()=>{o["Message"].success("提交成功"),this.$router.go(-1)},e=>{o["Message"].error(e.msg)})},handleClose(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput(){this.inputVisible=!0,this.$nextTick(e=>{this.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm(){let e=this.inputValue;this.dynamicTags.indexOf(e)<0&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue=""}}},a=i,p=(r("4e0a"),r("2877")),n=Object(p["a"])(a,s,l,!1,null,"f75a7c9c",null);n.options.__file="addProp.vue";t["default"]=n.exports},"4e0a":function(e,t,r){"use strict";var s=r("aa22"),l=r.n(s);l.a},aa22:function(e,t,r){}}]);
//# sourceMappingURL=chunk-77bf54e4.af2a6ce4.js.map