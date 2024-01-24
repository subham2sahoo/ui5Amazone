sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var that;
        return Controller.extend("a.controller.View1", {
            onInit: function () {
                that = this;

            },
            onCollapseExpandPress: function () {
                var oSideNavigation = this.byId("sideNavigation");
                var bExpanded = oSideNavigation.getVisible();

                oSideNavigation.setVisible(!bExpanded);
                const master = that.byId("master");
                if(!bExpanded){
                    that.byId("all").addStyleClass("select");
                    master.showMaster();
                }else{
                    that.byId("all").removeStyleClass("select");
                    master.hideMaster();
                }
                

            },

            onHideShowSubItemPress: function () {
                var oNavListItem = this.byId("subItem3");
                oNavListItem.setVisible(!oNavListItem.getVisible());
            }
        });
    });
