sap.ui.define([
		"com/corp/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("users").length, 1, "The sorting by users returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("clusterNumber").length, 1, "The sorting by clusterNumber returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("users").length, 1, "The group by users returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to users if the user groupes by users", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("users");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "users", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by clusterNumber and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "users");

		this.oGroupSortState.sort("clusterNumber");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});