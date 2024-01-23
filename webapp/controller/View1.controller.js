sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("a.controller.View1", {
            onInit: function () {

            },
            onCollapseExpandPress: function () {
                var oSideNavigation = this.byId("sideNavigation");
                var bExpanded = oSideNavigation.getVisible();
    
                oSideNavigation.setVisible(!bExpanded);
            },
    
            onHideShowSubItemPress: function () {
                var oNavListItem = this.byId("subItem3");
                oNavListItem.setVisible(!oNavListItem.getVisible());
            }
        });
    });
