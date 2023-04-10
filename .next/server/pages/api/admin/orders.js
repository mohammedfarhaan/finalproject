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
exports.id = "pages/api/admin/orders";
exports.ids = ["pages/api/admin/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\",\n        required: true\n    },\n    orderItems: [\n        {\n            name: {\n                type: String,\n                required: true\n            },\n            quantity: {\n                type: Number,\n                required: true\n            },\n            image: {\n                type: String,\n                required: true\n            },\n            price: {\n                type: Number,\n                required: true\n            }\n        }\n    ],\n    shippingAddress: {\n        fullName: {\n            type: String,\n            required: true\n        },\n        address: {\n            type: String,\n            required: true\n        },\n        city: {\n            type: String,\n            required: true\n        },\n        postalCode: {\n            type: String,\n            required: true\n        },\n        country: {\n            type: String,\n            required: true\n        }\n    },\n    paymentMethod: {\n        type: String,\n        required: true\n    },\n    paymentResult: {\n        id: String,\n        status: String,\n        email_address: String\n    },\n    itemsPrice: {\n        type: Number,\n        required: true\n    },\n    shippingPrice: {\n        type: Number,\n        required: true\n    },\n    taxPrice: {\n        type: Number,\n        required: true\n    },\n    totalPrice: {\n        type: Number,\n        required: true\n    },\n    isPaid: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    isDelivered: {\n        type: Boolean,\n        required: true,\n        default: false\n    },\n    paidAt: {\n        type: Date\n    },\n    deliveredAt: {\n        type: Date\n    }\n}, {\n    timestamps: true\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FDckM7SUFDRUcsTUFBTTtRQUFFQyxNQUFNSix1RUFBOEI7UUFBRU8sS0FBSztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUMxRUMsWUFBWTtRQUNWO1lBQ0VDLE1BQU07Z0JBQUVOLE1BQU1PO2dCQUFRSCxVQUFVLElBQUk7WUFBQztZQUNyQ0ksVUFBVTtnQkFBRVIsTUFBTVM7Z0JBQVFMLFVBQVUsSUFBSTtZQUFDO1lBQ3pDTSxPQUFPO2dCQUFFVixNQUFNTztnQkFBUUgsVUFBVSxJQUFJO1lBQUM7WUFDdENPLE9BQU87Z0JBQUVYLE1BQU1TO2dCQUFRTCxVQUFVLElBQUk7WUFBQztRQUN4QztLQUNEO0lBQ0RRLGlCQUFpQjtRQUNmQyxVQUFVO1lBQUViLE1BQU1PO1lBQVFILFVBQVUsSUFBSTtRQUFDO1FBQ3pDVSxTQUFTO1lBQUVkLE1BQU1PO1lBQVFILFVBQVUsSUFBSTtRQUFDO1FBQ3hDVyxNQUFNO1lBQUVmLE1BQU1PO1lBQVFILFVBQVUsSUFBSTtRQUFDO1FBQ3JDWSxZQUFZO1lBQUVoQixNQUFNTztZQUFRSCxVQUFVLElBQUk7UUFBQztRQUMzQ2EsU0FBUztZQUFFakIsTUFBTU87WUFBUUgsVUFBVSxJQUFJO1FBQUM7SUFDMUM7SUFDQWMsZUFBZTtRQUFFbEIsTUFBTU87UUFBUUgsVUFBVSxJQUFJO0lBQUM7SUFDOUNlLGVBQWU7UUFBRUMsSUFBSWI7UUFBUWMsUUFBUWQ7UUFBUWUsZUFBZWY7SUFBTztJQUNuRWdCLFlBQVk7UUFBRXZCLE1BQU1TO1FBQVFMLFVBQVUsSUFBSTtJQUFDO0lBQzNDb0IsZUFBZTtRQUFFeEIsTUFBTVM7UUFBUUwsVUFBVSxJQUFJO0lBQUM7SUFDOUNxQixVQUFVO1FBQUV6QixNQUFNUztRQUFRTCxVQUFVLElBQUk7SUFBQztJQUN6Q3NCLFlBQVk7UUFBRTFCLE1BQU1TO1FBQVFMLFVBQVUsSUFBSTtJQUFDO0lBQzNDdUIsUUFBUTtRQUFFM0IsTUFBTTRCO1FBQVN4QixVQUFVLElBQUk7UUFBRXlCLFNBQVMsS0FBSztJQUFDO0lBQ3hEQyxhQUFhO1FBQUU5QixNQUFNNEI7UUFBU3hCLFVBQVUsSUFBSTtRQUFFeUIsU0FBUyxLQUFLO0lBQUM7SUFDN0RFLFFBQVE7UUFBRS9CLE1BQU1nQztJQUFLO0lBQ3JCQyxhQUFhO1FBQUVqQyxNQUFNZ0M7SUFBSztBQUM1QixHQUNBO0lBQ0VFLFlBQVksSUFBSTtBQUNsQjtBQUdGLE1BQU1DLFFBQVF2Qyw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTQztBQUMvRCxpRUFBZXNDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWdnaWVzLy4vbW9kZWxzL09yZGVyLmpzP2ViMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICB1c2VyOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcicsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBvcmRlckl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBzaGlwcGluZ0FkZHJlc3M6IHtcclxuICAgICAgZnVsbE5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBhZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgY2l0eTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIHBvc3RhbENvZGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBjb3VudHJ5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIH0sXHJcbiAgICBwYXltZW50TWV0aG9kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBheW1lbnRSZXN1bHQ6IHsgaWQ6IFN0cmluZywgc3RhdHVzOiBTdHJpbmcsIGVtYWlsX2FkZHJlc3M6IFN0cmluZyB9LFxyXG4gICAgaXRlbXNQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzaGlwcGluZ1ByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRheFByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRvdGFsUHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaXNQYWlkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgaXNEZWxpdmVyZWQ6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICBwYWlkQXQ6IHsgdHlwZTogRGF0ZSB9LFxyXG4gICAgZGVsaXZlcmVkQXQ6IHsgdHlwZTogRGF0ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBPcmRlciA9IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbCgnT3JkZXInLCBvcmRlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJvcmRlclNjaGVtYSIsIlNjaGVtYSIsInVzZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwib3JkZXJJdGVtcyIsIm5hbWUiLCJTdHJpbmciLCJxdWFudGl0eSIsIk51bWJlciIsImltYWdlIiwicHJpY2UiLCJzaGlwcGluZ0FkZHJlc3MiLCJmdWxsTmFtZSIsImFkZHJlc3MiLCJjaXR5IiwicG9zdGFsQ29kZSIsImNvdW50cnkiLCJwYXltZW50TWV0aG9kIiwicGF5bWVudFJlc3VsdCIsImlkIiwic3RhdHVzIiwiZW1haWxfYWRkcmVzcyIsIml0ZW1zUHJpY2UiLCJzaGlwcGluZ1ByaWNlIiwidGF4UHJpY2UiLCJ0b3RhbFByaWNlIiwiaXNQYWlkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc0RlbGl2ZXJlZCIsInBhaWRBdCIsIkRhdGUiLCJkZWxpdmVyZWRBdCIsInRpbWVzdGFtcHMiLCJPcmRlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/admin/orders/index.js":
/*!*****************************************!*\
  !*** ./pages/api/admin/orders/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Order */ \"(api)/./models/Order.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)({\n        req\n    });\n    if (!session || session && !session.user.isAdmin) {\n        return res.status(401).send(\"signin required\");\n    }\n    if (req.method === \"GET\") {\n        await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n        const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}).populate(\"user\", \"name\");\n        await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].disconnect();\n        res.send(orders);\n    } else {\n        return res.status(400).send({\n            message: \"Method not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBQ1A7QUFDaUI7QUFFN0MsTUFBTUcsVUFBVSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2xDLE1BQU1DLFVBQVUsTUFBTUosMkRBQVVBLENBQUM7UUFBRUU7SUFBSTtJQUN2QyxJQUFJLENBQUNFLFdBQVlBLFdBQVcsQ0FBQ0EsUUFBUUMsSUFBSSxDQUFDQyxPQUFPLEVBQUc7UUFDbEQsT0FBT0gsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSU4sSUFBSU8sTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTVYseURBQVU7UUFDaEIsTUFBTVksU0FBUyxNQUFNYiwwREFBVSxDQUFDLENBQUMsR0FBR2UsUUFBUSxDQUFDLFFBQVE7UUFDckQsTUFBTWQsNERBQWE7UUFDbkJJLElBQUlLLElBQUksQ0FBQ0c7SUFDWCxPQUFPO1FBQ0wsT0FBT1IsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFTyxTQUFTO1FBQXFCO0lBQzlELENBQUM7QUFDSDtBQUVBLGlFQUFlZCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVnZ2llcy8uL3BhZ2VzL2FwaS9hZG1pbi9vcmRlcnMvaW5kZXguanM/OWJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXIgZnJvbSAnQC9tb2RlbHMvT3JkZXInO1xyXG5pbXBvcnQgZGIgZnJvbSAnQC91dGlscy9kYic7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gIGlmICghc2Vzc2lvbiB8fCAoc2Vzc2lvbiAmJiAhc2Vzc2lvbi51c2VyLmlzQWRtaW4pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ3NpZ25pbiByZXF1aXJlZCcpO1xyXG4gIH1cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoe30pLnBvcHVsYXRlKCd1c2VyJywgJ25hbWUnKTtcclxuICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICAgIHJlcy5zZW5kKG9yZGVycyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJPcmRlciIsImRiIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwidXNlciIsImlzQWRtaW4iLCJzdGF0dXMiLCJzZW5kIiwibWV0aG9kIiwiY29ubmVjdCIsIm9yZGVycyIsImZpbmQiLCJwb3B1bGF0ZSIsImRpc2Nvbm5lY3QiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/orders/index.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log(\"Already connected\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log(\"Use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"new connection \");\n    connection.isConnected = db.connections[0].readyState;\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"not disconnected\");\n        }\n    }\n}\nfunction convertDocToObj(doc) {\n    doc._id = doc._id.toString();\n    doc.createdAt = doc.createdAt.toString();\n    doc.updatedAt = doc.updatedAt.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    disconnect,\n    convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLGVBQWVDLFVBQVU7SUFDdkIsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGLENBQUM7SUFDRCxJQUFJTCxvRUFBMkIsR0FBRyxHQUFHO1FBQ25DQyxXQUFXRSxXQUFXLEdBQUdILDJFQUFrQztRQUMzRCxJQUFJQyxXQUFXRSxXQUFXLEtBQUssR0FBRztZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRixDQUFDO1FBQ0QsTUFBTUwsMERBQW1CO0lBQzNCLENBQUM7SUFDRCxNQUFNVSxLQUFLLE1BQU1WLHVEQUFnQixDQUFDVyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDekRULFFBQVFDLEdBQUcsQ0FBQztJQUNaSixXQUFXRSxXQUFXLEdBQUdPLEdBQUdKLFdBQVcsQ0FBQyxFQUFFLENBQUNFLFVBQVU7QUFDdkQ7QUFFQSxlQUFlQyxhQUFhO0lBQzFCLElBQUlSLFdBQVdFLFdBQVcsRUFBRTtRQUMxQixJQUFJUSxLQUF5QixFQUFjLEVBRzFDLE1BQU07WUFDTFAsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7QUFDSDtBQUVBLFNBQVNTLGdCQUFnQkMsR0FBRyxFQUFFO0lBQzVCQSxJQUFJQyxHQUFHLEdBQUdELElBQUlDLEdBQUcsQ0FBQ0MsUUFBUTtJQUMxQkYsSUFBSUcsU0FBUyxHQUFHSCxJQUFJRyxTQUFTLENBQUNELFFBQVE7SUFDdENGLElBQUlJLFNBQVMsR0FBR0osSUFBSUksU0FBUyxDQUFDRixRQUFRO0lBQ3RDLE9BQU9GO0FBQ1Q7QUFDQSxNQUFNTCxLQUFLO0lBQUVSO0lBQVNPO0lBQVlLO0FBQWdCO0FBQ2xELGlFQUFlSixFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVnZ2llcy8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnVXNlIHByZXZpb3VzIGNvbm5lY3Rpb24nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gIGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbiAnKTtcclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydERvY1RvT2JqKGRvYykge1xyXG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKCk7XHJcbiAgZG9jLmNyZWF0ZWRBdCA9IGRvYy5jcmVhdGVkQXQudG9TdHJpbmcoKTtcclxuICBkb2MudXBkYXRlZEF0ID0gZG9jLnVwZGF0ZWRBdC50b1N0cmluZygpO1xyXG4gIHJldHVybiBkb2M7XHJcbn1cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsImxlbmd0aCIsInJlYWR5U3RhdGUiLCJkaXNjb25uZWN0IiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb252ZXJ0RG9jVG9PYmoiLCJkb2MiLCJfaWQiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/orders/index.js"));
module.exports = __webpack_exports__;

})();