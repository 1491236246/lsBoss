(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb1cb720"],{2547:function(e,r,n){"use strict";var m=n("f4df"),t=n.n(m);t.a},a2f8:function(e,r,n){"use strict";n.r(r);var m=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"orderSeting global_div"},[n("content-top",{attrs:{titlename:"订单设置"}}),n("div",{staticClass:"center_div"},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"正常订单超过",prop:"normalEndpayTime"}},[n("el-input",{attrs:{placeholder:"请输入时间"},model:{value:e.ruleForm.normalEndpayTime,callback:function(r){e.$set(e.ruleForm,"normalEndpayTime",r)},expression:"ruleForm.normalEndpayTime"}}),n("span",[e._v("分")]),n("em",[e._v("未付款，订单自动关闭")])],1),n("el-form-item",{attrs:{label:"发货超过",prop:"sendEndTime"}},[n("el-input",{attrs:{placeholder:"请输入时间"},model:{value:e.ruleForm.sendEndTime,callback:function(r){e.$set(e.ruleForm,"sendEndTime",r)},expression:"ruleForm.sendEndTime"}}),n("span",[e._v("天")]),n("em",[e._v("未收货，订单自动完成")])],1),n("el-form-item",{attrs:{label:"最终评论时间",prop:"commentEndTime"}},[n("el-input",{attrs:{placeholder:"请输入时间"},model:{value:e.ruleForm.commentEndTime,callback:function(r){e.$set(e.ruleForm,"commentEndTime",r)},expression:"ruleForm.commentEndTime"}}),n("span",[e._v("天")]),n("em",[e._v("好评并完成")])],1),n("el-form-item",{attrs:{label:"完成收货后",prop:"finalEndTime"}},[n("el-input",{attrs:{placeholder:"请输入时间"},model:{value:e.ruleForm.finalEndTime,callback:function(r){e.$set(e.ruleForm,"finalEndTime",r)},expression:"ruleForm.finalEndTime"}}),n("span",[e._v("天")]),n("em",[e._v("不能申请售后")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")])],1)],1)],1)],1)},t=[],i=n("5c96"),l={name:"orderseting",data(){return{id:null,ruleForm:{normalEndpayTime:"",sendEndTime:"",commentEndTime:"",finalEndTime:""},rules:{normalEndpayTime:[{required:!0,message:"请输入时间",trigger:"blur"}],sendEndTime:[{required:!0,message:"请输入时间",trigger:"blur"}],commentEndTime:[{required:!0,message:"请输入时间",trigger:"blur"}],finalEndTime:[{required:!0,message:"请输入时间",trigger:"blur"}]}}},created(){this.getList()},methods:{getList(){this.$http.post("/merchant_order_set/queryOrderSet",{merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(e=>{this.ruleForm.normalEndpayTime=e.normalEndpayTime,this.ruleForm.sendEndTime=e.sendEndTime,this.ruleForm.commentEndTime=e.commentEndTime,this.ruleForm.finalEndTime=e.normalEndpayTime,this.id=e.id}).catch(e=>{i["Message"].error(e.error)})},submitForm(e){this.$refs[e].validate(e=>{if(!e)return!1;this.$http.post("/merchant_order_set/add_or_update",{normalEndpayTime:this.ruleForm.normalEndpayTime,sendEndTime:this.ruleForm.sendEndTime,commentEndTime:this.ruleForm.commentEndTime,finalEndTime:this.ruleForm.finalEndTime,id:this.id,merchantId:JSON.parse(localStorage.userInfo).merchantId}).then(e=>{i["Message"].success("提交成功")})})}}},a=l,o=(n("2547"),n("2877")),s=Object(o["a"])(a,m,t,!1,null,"7b9c532e",null);s.options.__file="orderSeting.vue";r["default"]=s.exports},f4df:function(e,r,n){}}]);
//# sourceMappingURL=chunk-cb1cb720.3d1cbf6e.js.map