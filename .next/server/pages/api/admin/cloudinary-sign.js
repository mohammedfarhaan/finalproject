"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/cloudinary-sign";
exports.ids = ["pages/api/admin/cloudinary-sign"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "(api)/./pages/api/admin/cloudinary-sign.js":
/*!********************************************!*\
  !*** ./pages/api/admin/cloudinary-sign.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signature)\n/* harmony export */ });\nconst cloudinary = (__webpack_require__(/*! cloudinary */ \"cloudinary\").v2);\nfunction signature(req, res) {\n    const timestamp = Math.round(new Date().getTime() / 1000);\n    const signature = cloudinary.utils.api_sign_request({\n        timestamp: timestamp\n    }, process.env.CLOUDINARY_SECRET);\n    res.statusCode = 200;\n    res.json({\n        signature,\n        timestamp\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vY2xvdWRpbmFyeS1zaWduLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxhQUFhQyx3REFBd0I7QUFFNUIsU0FBU0UsVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDMUMsTUFBTUMsWUFBWUMsS0FBS0MsS0FBSyxDQUFDLElBQUlDLE9BQU9DLE9BQU8sS0FBSztJQUNwRCxNQUFNUCxZQUFZSCxXQUFXVyxLQUFLLENBQUNDLGdCQUFnQixDQUNqRDtRQUNFTixXQUFXQTtJQUNiLEdBQ0FPLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0lBRy9CVixJQUFJVyxVQUFVLEdBQUc7SUFDakJYLElBQUlZLElBQUksQ0FBQztRQUFFZDtRQUFXRztJQUFVO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWdnaWVzLy4vcGFnZXMvYXBpL2FkbWluL2Nsb3VkaW5hcnktc2lnbi5qcz9lNjBhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNsb3VkaW5hcnkgPSByZXF1aXJlKCdjbG91ZGluYXJ5JykudjI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduYXR1cmUocmVxLCByZXMpIHtcclxuICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgY29uc3Qgc2lnbmF0dXJlID0gY2xvdWRpbmFyeS51dGlscy5hcGlfc2lnbl9yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcclxuICAgIH0sXHJcbiAgICBwcm9jZXNzLmVudi5DTE9VRElOQVJZX1NFQ1JFVFxyXG4gICk7XHJcblxyXG4gIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gIHJlcy5qc29uKHsgc2lnbmF0dXJlLCB0aW1lc3RhbXAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJyZXF1aXJlIiwidjIiLCJzaWduYXR1cmUiLCJyZXEiLCJyZXMiLCJ0aW1lc3RhbXAiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwiZ2V0VGltZSIsInV0aWxzIiwiYXBpX3NpZ25fcmVxdWVzdCIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX1NFQ1JFVCIsInN0YXR1c0NvZGUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/cloudinary-sign.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/cloudinary-sign.js"));
module.exports = __webpack_exports__;

})();