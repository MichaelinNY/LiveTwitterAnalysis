jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/corp/test/integration/NavigationJourneyPhone",
		"com/corp/test/integration/NotFoundJourneyPhone",
		"com/corp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});