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

/***/ "./BudgetAllocator/index.ts"
/*!**********************************!*\
  !*** ./BudgetAllocator/index.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BudgetAllocator: () => (/* binding */ BudgetAllocator)\n/* harmony export */ });\nclass BudgetAllocator {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._totalAmount = 0;\n    this._tuitionAlloc = 0;\n    this._housingAlloc = 0;\n    this._booksAlloc = 0;\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    this._totalAmount = context.parameters.totalAmount.raw || 1000;\n    // Only update local allocs if they aren't initialized or if context has newer values\n    if (context.parameters.tuitionAlloc.raw !== null) this._tuitionAlloc = context.parameters.tuitionAlloc.raw;\n    if (context.parameters.housingAlloc.raw !== null) this._housingAlloc = context.parameters.housingAlloc.raw;\n    if (context.parameters.booksAlloc.raw !== null) this._booksAlloc = context.parameters.booksAlloc.raw;\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.padding = \"20px\";\n    wrapper.style.backgroundColor = \"#ffffff\";\n    wrapper.style.border = \"1px solid #e2e8f0\";\n    wrapper.style.borderRadius = \"12px\";\n    var remaining = this._totalAmount - (this._tuitionAlloc + this._housingAlloc + this._booksAlloc);\n    var header = document.createElement(\"div\");\n    header.style.display = \"flex\";\n    header.style.justifyContent = \"space-between\";\n    header.style.marginBottom = \"20px\";\n    var title = document.createElement(\"h4\");\n    title.innerText = \"Budget Allocator\";\n    title.style.margin = \"0\";\n    var remainBadge = document.createElement(\"div\");\n    remainBadge.innerText = \"Remaining: $\".concat(remaining);\n    remainBadge.style.fontWeight = \"bold\";\n    remainBadge.style.color = remaining < 0 ? \"#ef4444\" : remaining === 0 ? \"#10b981\" : \"#f59e0b\";\n    header.appendChild(title);\n    header.appendChild(remainBadge);\n    wrapper.appendChild(header);\n    var createSlider = (label, value, max, onChange) => {\n      var row = document.createElement(\"div\");\n      row.style.marginBottom = \"12px\";\n      var labelRow = document.createElement(\"div\");\n      labelRow.style.display = \"flex\";\n      labelRow.style.justifyContent = \"space-between\";\n      labelRow.style.fontSize = \"14px\";\n      labelRow.style.marginBottom = \"4px\";\n      var name = document.createElement(\"span\");\n      name.innerText = label;\n      var valText = document.createElement(\"span\");\n      valText.innerText = \"$\".concat(value);\n      valText.style.fontWeight = \"bold\";\n      labelRow.appendChild(name);\n      labelRow.appendChild(valText);\n      row.appendChild(labelRow);\n      var input = document.createElement(\"input\");\n      input.type = \"range\";\n      input.min = \"0\";\n      input.max = max.toString();\n      input.value = value.toString();\n      input.step = \"50\";\n      input.style.width = \"100%\";\n      input.style.accentColor = \"#4f46e5\";\n      input.addEventListener(\"input\", e => {\n        var newVal = parseInt(e.target.value, 10);\n        onChange(newVal);\n      });\n      row.appendChild(input);\n      return row;\n    };\n    wrapper.appendChild(createSlider(\"Tuition\", this._tuitionAlloc, this._totalAmount, v => {\n      this._tuitionAlloc = v;\n      this._notifyOutputChanged();\n      this.renderControl();\n    }));\n    wrapper.appendChild(createSlider(\"Housing\", this._housingAlloc, this._totalAmount, v => {\n      this._housingAlloc = v;\n      this._notifyOutputChanged();\n      this.renderControl();\n    }));\n    wrapper.appendChild(createSlider(\"Books & Supplies\", this._booksAlloc, this._totalAmount, v => {\n      this._booksAlloc = v;\n      this._notifyOutputChanged();\n      this.renderControl();\n    }));\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {\n      tuitionAlloc: this._tuitionAlloc,\n      housingAlloc: this._housingAlloc,\n      booksAlloc: this._booksAlloc\n    };\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./BudgetAllocator/index.ts?\n}");

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
/******/ 	__webpack_modules__["./BudgetAllocator/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.BudgetAllocator', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.BudgetAllocator);
} else {
	var GVV = GVV || {};
	GVV.BudgetAllocator = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.BudgetAllocator;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}