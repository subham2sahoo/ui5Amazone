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
            //     const carsol = that.byId("car");
            //     carsol.setModel(new sap.ui.model.json.JSONModel(
            //         {
            //        item: [
            //             {
            //                 src:"https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/January/BAU/Antifog_3000x1200._CB584948772_.jpg"
            //             },
            //             {
            //                 src:"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Nov/One/Deals-PC-3000-Unrec-Onecard._CB571754517_.jpg"
            //             },
            //             {
            //                 src:"https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/citi/pc-1_2x._CB584618827_.jpg"
            //             },
            //             {
            //                 src:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/Winter_Blankets_GW_PC_3000x1200_UNREC._CB584967333_.jpg"
            //             }
            //         ]
            // })
            // )

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
                

            }
        });
    });
