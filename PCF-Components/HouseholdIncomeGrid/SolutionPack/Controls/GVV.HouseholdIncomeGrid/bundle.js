/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./HouseholdIncomeGrid/index.ts"
/*!**************************************!*\
  !*** ./HouseholdIncomeGrid/index.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HouseholdIncomeGrid: () => (/* binding */ HouseholdIncomeGrid)\n/* harmony export */ });\nclass HouseholdIncomeGrid {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._members = [];\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    var rawData = context.parameters.householdData.raw;\n    try {\n      this._members = rawData ? JSON.parse(rawData) : [];\n    } catch (_a) {\n      this._members = [];\n    }\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.border = \"1px solid #e2e8f0\";\n    wrapper.style.borderRadius = \"8px\";\n    wrapper.style.overflow = \"hidden\";\n    var headerRow = document.createElement(\"div\");\n    headerRow.style.display = \"flex\";\n    headerRow.style.backgroundColor = \"#f8fafc\";\n    headerRow.style.padding = \"10px 16px\";\n    headerRow.style.borderBottom = \"1px solid #e2e8f0\";\n    headerRow.style.fontWeight = \"bold\";\n    headerRow.style.fontSize = \"14px\";\n    headerRow.style.color = \"#334155\";\n    var createCell = (text, flex) => {\n      var cell = document.createElement(\"div\");\n      cell.innerText = text;\n      cell.style.flex = flex;\n      return cell;\n    };\n    headerRow.appendChild(createCell(\"Name\", \"2\"));\n    headerRow.appendChild(createCell(\"Relation\", \"2\"));\n    headerRow.appendChild(createCell(\"Income\", \"1\"));\n    headerRow.appendChild(createCell(\"\", \"0.5\")); // Delete button column\n    wrapper.appendChild(headerRow);\n    this._members.forEach((member, index) => {\n      var row = document.createElement(\"div\");\n      row.style.display = \"flex\";\n      row.style.padding = \"10px 16px\";\n      row.style.borderBottom = \"1px solid #f1f5f9\";\n      row.style.alignItems = \"center\";\n      row.style.fontSize = \"14px\";\n      row.appendChild(createCell(member.name, \"2\"));\n      row.appendChild(createCell(member.relation, \"2\"));\n      row.appendChild(createCell(\"$\".concat(member.income), \"1\"));\n      var delCell = document.createElement(\"div\");\n      delCell.style.flex = \"0.5\";\n      delCell.style.textAlign = \"right\";\n      var delBtn = document.createElement(\"button\");\n      delBtn.innerText = \"✖\";\n      delBtn.style.background = \"none\";\n      delBtn.style.border = \"none\";\n      delBtn.style.color = \"#ef4444\";\n      delBtn.style.cursor = \"pointer\";\n      delBtn.onclick = () => {\n        this._members.splice(index, 1);\n        this._notifyOutputChanged();\n        this.renderControl();\n      };\n      delCell.appendChild(delBtn);\n      row.appendChild(delCell);\n      wrapper.appendChild(row);\n    });\n    var addRow = document.createElement(\"div\");\n    addRow.style.display = \"flex\";\n    addRow.style.padding = \"10px 16px\";\n    addRow.style.backgroundColor = \"#f8fafc\";\n    addRow.style.gap = \"8px\";\n    var nameInput = document.createElement(\"input\");\n    nameInput.placeholder = \"Name\";\n    nameInput.style.flex = \"2\";\n    nameInput.style.padding = \"4px 8px\";\n    var relInput = document.createElement(\"input\");\n    relInput.placeholder = \"Relation\";\n    relInput.style.flex = \"2\";\n    relInput.style.padding = \"4px 8px\";\n    var incInput = document.createElement(\"input\");\n    incInput.type = \"number\";\n    incInput.placeholder = \"Income\";\n    incInput.style.flex = \"1\";\n    incInput.style.padding = \"4px 8px\";\n    var addBtn = document.createElement(\"button\");\n    addBtn.innerText = \"Add\";\n    addBtn.style.flex = \"0.5\";\n    addBtn.style.backgroundColor = \"#4f46e5\";\n    addBtn.style.color = \"white\";\n    addBtn.style.border = \"none\";\n    addBtn.style.borderRadius = \"4px\";\n    addBtn.style.cursor = \"pointer\";\n    addBtn.onclick = () => {\n      if (nameInput.value) {\n        this._members.push({\n          name: nameInput.value,\n          relation: relInput.value || \"Self\",\n          income: parseFloat(incInput.value) || 0\n        });\n        this._notifyOutputChanged();\n        this.renderControl();\n      }\n    };\n    addRow.appendChild(nameInput);\n    addRow.appendChild(relInput);\n    addRow.appendChild(incInput);\n    addRow.appendChild(addBtn);\n    wrapper.appendChild(addRow);\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {\n      householdData: JSON.stringify(this._members)\n    };\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./HouseholdIncomeGrid/index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./HouseholdIncomeGrid/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.HouseholdIncomeGrid', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.HouseholdIncomeGrid);
} else {
	var GVV = GVV || {};
	GVV.HouseholdIncomeGrid = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.HouseholdIncomeGrid;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}