sap.ui.define(["sap/ui/core/UIComponent"],function(e){"use strict";return e.extend("testplugin.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);console.log("ccaa");setTimeout(()=>{sap.m.MessageToast.show("secondPlugIn")},2e3);this._oShellContainer=jQuery.sap.getObject("sap.ushell.Container");const t=this._oShellContainer.getRenderer();if(!t)return sap.m.MessageToast.show("not find shell Container");t.addHeaderEndItem({id:"myTestButton",icon:"sap-icon://hello-world",text:"hello world",press:()=>{sap.m.MessageToast.show("hello world22")}},true)}})});