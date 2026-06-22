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

/***/ "./EligibilityCalculator/index.ts"
/*!****************************************!*\
  !*** ./EligibilityCalculator/index.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EligibilityCalculator: () => (/* binding */ EligibilityCalculator)\n/* harmony export */ });\nclass EligibilityCalculator {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._income = 0;\n    this._householdSize = 1;\n    this._requestedAmount = 0;\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    this._income = context.parameters.householdIncome.raw || 0;\n    this._householdSize = context.parameters.householdSize.raw || 1;\n    this._requestedAmount = context.parameters.requestedAmount.raw || 0;\n    if (this._householdSize < 1) this._householdSize = 1;\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.padding = \"16px\";\n    wrapper.style.border = \"1px solid #e2e8f0\";\n    wrapper.style.borderRadius = \"12px\";\n    wrapper.style.backgroundColor = \"#ffffff\";\n    wrapper.style.boxShadow = \"0 2px 4px rgba(0,0,0,0.05)\";\n    var title = document.createElement(\"h4\");\n    title.innerText = \"Eligibility Projection\";\n    title.style.margin = \"0 0 12px 0\";\n    title.style.color = \"#334155\";\n    title.style.fontSize = \"14px\";\n    title.style.textTransform = \"uppercase\";\n    title.style.fontWeight = \"bold\";\n    wrapper.appendChild(title);\n    var perCapita = this._income / this._householdSize;\n    var score = 0;\n    var category = \"Ineligible\";\n    var color = \"#ef4444\"; // red\n    var bg = \"#fee2e2\";\n    if (perCapita < 10000) {\n      score = 100;\n      category = \"Highly Eligible\";\n      color = \"#10b981\"; // emerald\n      bg = \"#d1fae5\";\n    } else if (perCapita <= 25000) {\n      score = 75;\n      category = \"Moderately Eligible\";\n      color = \"#f59e0b\"; // amber\n      bg = \"#fef3c7\";\n    } else {\n      score = 20;\n    }\n    var statGrid = document.createElement(\"div\");\n    statGrid.style.display = \"grid\";\n    statGrid.style.gridTemplateColumns = \"1fr 1fr\";\n    statGrid.style.gap = \"8px\";\n    statGrid.style.marginBottom = \"16px\";\n    var createStat = (label, value) => {\n      var d = document.createElement(\"div\");\n      d.innerHTML = \"<div style=\\\"font-size:12px;color:#64748b;\\\">\".concat(label, \"</div><div style=\\\"font-size:16px;font-weight:600;color:#0f172a;\\\">\").concat(value, \"</div>\");\n      return d;\n    };\n    statGrid.appendChild(createStat(\"Income Per Capita\", \"$\".concat(perCapita.toLocaleString(undefined, {\n      minimumFractionDigits: 2,\n      maximumFractionDigits: 2\n    }))));\n    statGrid.appendChild(createStat(\"Requested\", \"$\".concat(this._requestedAmount.toLocaleString(undefined, {\n      minimumFractionDigits: 2,\n      maximumFractionDigits: 2\n    }))));\n    wrapper.appendChild(statGrid);\n    var resultBox = document.createElement(\"div\");\n    resultBox.style.padding = \"12px\";\n    resultBox.style.borderRadius = \"8px\";\n    resultBox.style.backgroundColor = bg;\n    resultBox.style.color = color;\n    resultBox.style.display = \"flex\";\n    resultBox.style.alignItems = \"center\";\n    resultBox.style.justifyContent = \"space-between\";\n    var catDiv = document.createElement(\"div\");\n    catDiv.style.fontWeight = \"bold\";\n    catDiv.innerText = category;\n    resultBox.appendChild(catDiv);\n    var scoreDiv = document.createElement(\"div\");\n    scoreDiv.style.fontSize = \"20px\";\n    scoreDiv.style.fontWeight = \"bold\";\n    scoreDiv.innerText = \"\".concat(score, \"/100\");\n    resultBox.appendChild(scoreDiv);\n    wrapper.appendChild(resultBox);\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./EligibilityCalculator/index.ts?\n}");

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
/******/ 	__webpack_modules__["./EligibilityCalculator/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.EligibilityCalculator', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.EligibilityCalculator);
} else {
	var GVV = GVV || {};
	GVV.EligibilityCalculator = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.EligibilityCalculator;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}