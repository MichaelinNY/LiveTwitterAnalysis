/*global location */
sap.ui.define([
	"com/corp/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"com/corp/model/formatter"
], function(BaseController, JSONModel, formatter) {
	"use strict";

	return BaseController.extend("com.corp.controller.Chart", {

		onRefresh: function() {
			this.getView().byId("D3Chart").doRefresh();
			this.byId("pullToRefresh").hide();
		},
		onSentimentSelect: function(evt) {
			this.getView().byId("D3Chart").setSentiment(evt.getSource().getSelected());
			this.getView().byId("D3Chart").setType("");
			this.getView().byId("D3Chart").doRefresh();
		}

	});

});