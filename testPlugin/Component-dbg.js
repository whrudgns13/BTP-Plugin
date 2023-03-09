/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent"
    ],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("testplugin.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                console.log("ccaa");
                setTimeout(()=>{
                    sap.m.MessageToast.show("secondPlugIn");
                },2000);
                this._oShellContainer = jQuery.sap.getObject("sap.ushell.Container");
                const oRenderer = this._oShellContainer.getRenderer();
                if(!oRenderer) return sap.m.MessageToast.show("not find shell Container");

                oRenderer.addHeaderEndItem({
                    id: "myTestButton",
                    icon: "sap-icon://hello-world",
                    text: "hello world",
                    press: ()=>{
                        sap.m.MessageToast.show("hello world22");
                    }
                }, true);
            }
        });
    }
);