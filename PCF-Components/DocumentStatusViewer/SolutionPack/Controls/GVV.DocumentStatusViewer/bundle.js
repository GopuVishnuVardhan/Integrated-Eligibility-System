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

/***/ "./DocumentStatusViewer/index.ts"
/*!***************************************!*\
  !*** ./DocumentStatusViewer/index.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DocumentStatusViewer: () => (/* binding */ DocumentStatusViewer)\n/* harmony export */ });\nclass DocumentStatusViewer {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._idStatus = false;\n    this._transcriptStatus = false;\n    this._incomeProofStatus = false;\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    this._idStatus = context.parameters.idStatus.raw === \"1\" || context.parameters.idStatus.raw === \"true\";\n    this._transcriptStatus = context.parameters.transcriptStatus.raw === \"1\" || context.parameters.transcriptStatus.raw === \"true\";\n    this._incomeProofStatus = context.parameters.incomeProofStatus.raw === \"1\" || context.parameters.incomeProofStatus.raw === \"true\";\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.padding = \"16px\";\n    wrapper.style.backgroundColor = \"#ffffff\";\n    wrapper.style.border = \"1px solid #e2e8f0\";\n    wrapper.style.borderRadius = \"12px\";\n    var title = document.createElement(\"h4\");\n    title.innerText = \"Required Documents\";\n    title.style.margin = \"0 0 16px 0\";\n    title.style.color = \"#334155\";\n    wrapper.appendChild(title);\n    var createRow = (docName, isVerified) => {\n      var row = document.createElement(\"div\");\n      row.style.display = \"flex\";\n      row.style.justifyContent = \"space-between\";\n      row.style.alignItems = \"center\";\n      row.style.padding = \"8px 0\";\n      row.style.borderBottom = \"1px solid #f1f5f9\";\n      var name = document.createElement(\"span\");\n      name.innerText = docName;\n      name.style.fontSize = \"14px\";\n      name.style.color = \"#475569\";\n      name.style.fontWeight = \"500\";\n      var badge = document.createElement(\"span\");\n      badge.style.padding = \"4px 8px\";\n      badge.style.borderRadius = \"16px\";\n      badge.style.fontSize = \"12px\";\n      badge.style.fontWeight = \"bold\";\n      if (isVerified) {\n        badge.innerText = \"Verified\";\n        badge.style.backgroundColor = \"#dcfce7\";\n        badge.style.color = \"#166534\";\n      } else {\n        badge.innerText = \"Pending\";\n        badge.style.backgroundColor = \"#fef08a\";\n        badge.style.color = \"#854d0e\";\n      }\n      row.appendChild(name);\n      row.appendChild(badge);\n      return row;\n    };\n    wrapper.appendChild(createRow(\"Student ID / Government ID\", this._idStatus));\n    wrapper.appendChild(createRow(\"Official Transcripts\", this._transcriptStatus));\n    wrapper.appendChild(createRow(\"Proof of Income\", this._incomeProofStatus));\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./DocumentStatusViewer/index.ts?\n}");

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
/******/ 	__webpack_modules__["./DocumentStatusViewer/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;