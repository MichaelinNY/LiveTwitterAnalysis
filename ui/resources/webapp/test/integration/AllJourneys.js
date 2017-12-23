jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Clusters in the list
// * All 3 Clusters have at least one Users

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/corp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/corp/test/integration/pages/App",
	"com/corp/test/integration/pages/Browser",
	"com/corp/test/integration/pages/Master",
	"com/corp/test/integration/pages/Detail",
	"com/corp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.corp.view."
	});

	sap.ui.require([
		"com/corp/test/integration/MasterJourney",
		"com/corp/test/integration/NavigationJourney",
		"com/corp/test/integration/NotFoundJourney",
		"com/corp/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});