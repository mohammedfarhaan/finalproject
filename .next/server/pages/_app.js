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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__.PayPalScriptProvider, {\n                deferLoading: true,\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    adminOnly: Component.auth.adminOnly,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children , adminOnly  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\try\\\\finalproject\\\\pages\\\\_app.js\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, this);\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized?message=admin login required\");\n    }\n    return children;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0M7QUFDaEI7QUFDTjtBQUN1QjtBQUVoRCxTQUFTSyxJQUFJLEVBQzFCQyxVQUFTLEVBQ1RDLFdBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdELFdBQVcsR0FDckMsRUFBRTtJQUNELHFCQUNFLDhEQUFDUCw0REFBZUE7UUFBQ1EsU0FBU0E7a0JBQ3hCLDRFQUFDTix1REFBYUE7c0JBQ1osNEVBQUNFLHlFQUFvQkE7Z0JBQUNLLGNBQWMsSUFBSTswQkFDckNILFVBQVVJLElBQUksaUJBQ2IsOERBQUNDO29CQUFLQyxXQUFXTixVQUFVSSxJQUFJLENBQUNFLFNBQVM7OEJBQ3ZDLDRFQUFDTjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7O3lDQUcxQiw4REFBQ0Q7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7d0JBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztBQUVELFNBQVNJLEtBQUssRUFBRUUsU0FBUSxFQUFFRCxVQUFTLEVBQUUsRUFBRTtJQUNyQyxNQUFNRSxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxPQUFNLEVBQUVDLE1BQU1SLFFBQU8sRUFBRSxHQUFHUCwyREFBVUEsQ0FBQztRQUMzQ2dCLFVBQVUsSUFBSTtRQUNkQyxxQkFBb0I7WUFDbEJKLE9BQU9LLElBQUksQ0FBQztRQUNkO0lBQ0Y7SUFDQSxJQUFJSixXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNLO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBQ0QsSUFBSVIsYUFBYSxDQUFDSixRQUFRYSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUN0Q1IsT0FBT0ssSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU9OO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWdnaWVzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tICdAL3V0aWxzL1N0b3JlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFBheVBhbFNjcmlwdFByb3ZpZGVyIH0gZnJvbSAnQHBheXBhbC9yZWFjdC1wYXlwYWwtanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoe1xuICBDb21wb25lbnQsXG4gIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxQYXlQYWxTY3JpcHRQcm92aWRlciBkZWZlckxvYWRpbmc9e3RydWV9PlxuICAgICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcbiAgICAgICAgICAgIDxBdXRoIGFkbWluT25seT17Q29tcG9uZW50LmF1dGguYWRtaW5Pbmx5fT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9BdXRoPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYXlQYWxTY3JpcHRQcm92aWRlcj5cbiAgICAgIDwvU3RvcmVQcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuLCBhZG1pbk9ubHkgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG9uVW5hdXRoZW50aWNhdGVkKCkge1xuICAgICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZCcpO1xuICAgIH0sXG4gIH0pO1xuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGlmIChhZG1pbk9ubHkgJiYgIXNlc3Npb24udXNlci5pc0FkbWluKSB7XG4gICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1hZG1pbiBsb2dpbiByZXF1aXJlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJTdG9yZVByb3ZpZGVyIiwidXNlUm91dGVyIiwiUGF5UGFsU2NyaXB0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiZGVmZXJMb2FkaW5nIiwiYXV0aCIsIkF1dGgiLCJhZG1pbk9ubHkiLCJjaGlsZHJlbiIsInJvdXRlciIsInN0YXR1cyIsImRhdGEiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwicHVzaCIsImRpdiIsInVzZXIiLCJpc0FkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {}\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_RESET\":\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: \"\"\n                }\n            };\n        case \"CART_CLEAR_ITEMS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case \"SAVE_SHIPPING_ADDRESS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\try\\\\finalproject\\\\utils\\\\Store.js\",\n        lineNumber: 71,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWdnaWVzLy4vdXRpbHMvU3RvcmUuanM/OGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2UsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgY2FydDogQ29va2llcy5nZXQoJ2NhcnQnKVxyXG4gICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdjYXJ0JykpXHJcbiAgICA6IHsgY2FydEl0ZW1zOiBbXSwgc2hpcHBpbmdBZGRyZXNzOiB7fSB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnQ0FSVF9BRERfSVRFTSc6IHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IG5ld0l0ZW0uc2x1Z1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBleGlzdEl0ZW1cclxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgaXRlbS5uYW1lID09PSBleGlzdEl0ZW0ubmFtZSA/IG5ld0l0ZW0gOiBpdGVtXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xyXG4gICAgICBDb29raWVzLnNldCgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0NBUlRfUkVNT1ZFX0lURU0nOiB7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnICE9PSBhY3Rpb24ucGF5bG9hZC5zbHVnXHJcbiAgICAgICk7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnQ0FSVF9SRVNFVCc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgY2FydEl0ZW1zOiBbXSxcclxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcclxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdDQVJUX0NMRUFSX0lURU1TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zOiBbXSB9IH07XHJcbiAgICBjYXNlICdTQVZFX1NISVBQSU5HX0FERFJFU1MnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXHJcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnU0FWRV9QQVlNRU5UX01FVEhPRCc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcclxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBTdG9yZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcclxuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlIiwidXNlUmVkdWNlciIsIkNvb2tpZXMiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJjYXJ0SXRlbXMiLCJzaGlwcGluZ0FkZHJlc3MiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3SXRlbSIsInBheWxvYWQiLCJleGlzdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInNsdWciLCJtYXAiLCJuYW1lIiwic2V0Iiwic3RyaW5naWZ5IiwiZmlsdGVyIiwibG9jYXRpb24iLCJwYXltZW50TWV0aG9kIiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();