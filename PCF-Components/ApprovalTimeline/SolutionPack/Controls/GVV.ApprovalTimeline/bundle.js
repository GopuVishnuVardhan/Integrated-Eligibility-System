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

/***/ "./ApprovalTimeline/index.ts"
/*!***********************************!*\
  !*** ./ApprovalTimeline/index.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApprovalTimeline: () => (/* binding */ ApprovalTimeline)\n/* harmony export */ });\nclass ApprovalTimeline {\n  // eslint-disable-next-line @typescript-eslint/no-empty-function\n  constructor() {\n    this._currentStage = 1;\n    this._stages = [\"Intake\", \"Under Review\", \"Finance\", \"Approved\"];\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container;\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateView(context) {\n    this.updateData(context);\n    this.renderControl();\n  }\n  updateData(context) {\n    this._currentStage = context.parameters.currentStage.raw || 1;\n  }\n  renderControl() {\n    this._container.innerHTML = \"\";\n    var wrapper = document.createElement(\"div\");\n    wrapper.style.fontFamily = \"Segoe UI, sans-serif\";\n    wrapper.style.padding = \"20px\";\n    wrapper.style.display = \"flex\";\n    wrapper.style.alignItems = \"center\";\n    wrapper.style.justifyContent = \"space-between\";\n    wrapper.style.backgroundColor = \"#ffffff\";\n    wrapper.style.borderRadius = \"12px\";\n    wrapper.style.boxShadow = \"0 1px 3px rgba(0,0,0,0.1)\";\n    this._stages.forEach((stage, index) => {\n      var stepNum = index + 1;\n      var isCompleted = stepNum < this._currentStage;\n      var isActive = stepNum === this._currentStage;\n      var stepContainer = document.createElement(\"div\");\n      stepContainer.style.display = \"flex\";\n      stepContainer.style.flexDirection = \"column\";\n      stepContainer.style.alignItems = \"center\";\n      stepContainer.style.flex = \"1\";\n      stepContainer.style.position = \"relative\";\n      var circle = document.createElement(\"div\");\n      circle.style.width = \"28px\";\n      circle.style.height = \"28px\";\n      circle.style.borderRadius = \"50%\";\n      circle.style.display = \"flex\";\n      circle.style.alignItems = \"center\";\n      circle.style.justifyContent = \"center\";\n      circle.style.fontWeight = \"bold\";\n      circle.style.zIndex = \"1\";\n      circle.style.fontSize = \"12px\";\n      if (isCompleted) {\n        circle.style.backgroundColor = \"#10b981\"; // emerald\n        circle.style.color = \"white\";\n        circle.innerHTML = \"✓\";\n      } else if (isActive) {\n        circle.style.backgroundColor = \"#6366f1\"; // indigo\n        circle.style.color = \"white\";\n        circle.innerHTML = stepNum.toString();\n        circle.style.boxShadow = \"0 0 0 4px rgba(99, 102, 241, 0.2)\";\n      } else {\n        circle.style.backgroundColor = \"#e2e8f0\"; // slate 200\n        circle.style.color = \"#64748b\"; // slate 500\n        circle.innerHTML = stepNum.toString();\n      }\n      var label = document.createElement(\"div\");\n      label.innerText = stage;\n      label.style.marginTop = \"8px\";\n      label.style.fontSize = \"11px\";\n      label.style.fontWeight = isActive ? \"bold\" : \"normal\";\n      label.style.color = isActive ? \"#1e293b\" : \"#64748b\";\n      label.style.textTransform = \"uppercase\";\n      label.style.letterSpacing = \"0.5px\";\n      label.style.textAlign = \"center\";\n      stepContainer.appendChild(circle);\n      stepContainer.appendChild(label);\n      wrapper.appendChild(stepContainer);\n      if (index < this._stages.length - 1) {\n        var line = document.createElement(\"div\");\n        line.style.flex = \"1\";\n        line.style.height = \"2px\";\n        line.style.backgroundColor = isCompleted ? \"#10b981\" : \"#e2e8f0\";\n        line.style.marginTop = \"-24px\"; // Align with circle center\n        wrapper.appendChild(line);\n      }\n    });\n    this._container.appendChild(wrapper);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    this._container.innerHTML = \"\";\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ApprovalTimeline/index.ts?\n}");

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
/******/ 	__webpack_modules__["./ApprovalTimeline/index.ts"](0,__webpack_exports__,__webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('GVV.ApprovalTimeline', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ApprovalTimeline);
} else {
	var GVV = GVV || {};
	GVV.ApprovalTimeline = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ApprovalTimeline;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}