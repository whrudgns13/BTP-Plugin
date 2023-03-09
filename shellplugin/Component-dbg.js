/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
    ],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("com.shellplugin.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                console.log("Shell-plugIn");
                this._oShellContainer = jQuery.sap.getObject("sap.ushell.Container");
                sap.m.MessageToast.show("Hello Shell PlugIn");
                const oRenderer = this._oShellContainer.getRenderer();
                if(!oRenderer) return sap.m.MessageToast.show("not find shell Container");

                oRenderer.addHeaderEndItem({
                    id: "myTestButton",
                    icon: "sap-icon://hello-world",
                    text: "hello world",
                    press: ()=>{
                        sap.m.MessageToast.show("hello world");
                    }
                }, true);
            }
        });
    }
);