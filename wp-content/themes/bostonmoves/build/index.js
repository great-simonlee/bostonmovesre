/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/email/career.js":
/*!*****************************!*\
  !*** ./src/email/career.js ***!
  \*****************************/
/***/ (function() {

if (window.location.pathname === '/career/') {
  window.addEventListener('DOMContentLoaded', () => {
    emailjs.init('XfVl5KseF47HmnaJr');
    const emailForm = document.querySelector('#career-submission');
    const confirmDiv = document.querySelector('#career-confirm-msg');
    const emailSendBtn = document.querySelector('#careerEmailBtn'); // const emailName = document.querySelector('#sellEmailName');
    // const emailEmail = document.querySelector('#sellEmailEmail');
    // const emailPhone = document.querySelector('#sellEmailPhone');
    // const emailZip = document.querySelector('#sellEmailZip');
    // const emailDesc = document.querySelector('#sellEmailDesc');

    emailSendBtn.addEventListener('click', event => {
      event.preventDefault(); // console.log(emailName.value);
      // console.log(emailEmail.value);
      // console.log(emailPhone.value);
      // console.log(emailZip.value);
      // console.log(emailDesc.value);
      // console.log('Confirmed');

      emailjs.sendForm('service_jojfbg8', 'template_xhuuo2e', emailForm).then(function () {
        console.log('SUCCESS!');
        emailForm.style.display = 'none';
        confirmDiv.style.display = 'flex';
      }, function (error) {
        console.log('FAILED...', error);
      });
      window.scrollTo({
        bottom: 0,
        behavior: 'smooth'
      });
    });
  });
}

/***/ }),

/***/ "./src/email/onlineSchool.js":
/*!***********************************!*\
  !*** ./src/email/onlineSchool.js ***!
  \***********************************/
/***/ (function() {

if (window.location.pathname === '/online-school/') {
  window.addEventListener('DOMContentLoaded', () => {
    emailjs.init('XfVl5KseF47HmnaJr');
    const emailForm = document.querySelector('#os-submission');
    const confirmDiv = document.querySelector('#os-confirm-msg');
    const emailSendBtn = document.querySelector('#osEmailBtn'); // const emailName = document.querySelector('#sellEmailName');
    // const emailEmail = document.querySelector('#sellEmailEmail');
    // const emailPhone = document.querySelector('#sellEmailPhone');
    // const emailZip = document.querySelector('#sellEmailZip');
    // const emailDesc = document.querySelector('#sellEmailDesc');

    emailSendBtn.addEventListener('click', event => {
      event.preventDefault(); // console.log(emailName.value);
      // console.log(emailEmail.value);
      // console.log(emailPhone.value);
      // console.log(emailZip.value);
      // console.log(emailDesc.value);
      // console.log('Confirmed');

      emailjs.sendForm('service_jojfbg8', 'template_xhuuo2e', emailForm).then(function () {
        console.log('SUCCESS!');
        emailForm.style.display = 'none';
        confirmDiv.style.display = 'flex';
      }, function (error) {
        console.log('FAILED...', error);
      });
      window.scrollTo({
        bottom: 0,
        behavior: 'smooth'
      });
    });
  });
}

/***/ }),

/***/ "./src/email/sell.js":
/*!***************************!*\
  !*** ./src/email/sell.js ***!
  \***************************/
/***/ (function() {

if (window.location.pathname === '/sell/') {
  window.addEventListener('DOMContentLoaded', () => {
    emailjs.init('XfVl5KseF47HmnaJr');
    const emailForm = document.querySelector('#sell-submission');
    const confirmDiv = document.querySelector('#sell-confirm-msg');
    const emailSendBtn = document.querySelector('#sellEmailBtn'); // const emailName = document.querySelector('#sellEmailName');
    // const emailEmail = document.querySelector('#sellEmailEmail');
    // const emailPhone = document.querySelector('#sellEmailPhone');
    // const emailZip = document.querySelector('#sellEmailZip');
    // const emailDesc = document.querySelector('#sellEmailDesc');

    emailSendBtn.addEventListener('click', event => {
      event.preventDefault(); // console.log(emailName.value);
      // console.log(emailEmail.value);
      // console.log(emailPhone.value);
      // console.log(emailZip.value);
      // console.log(emailDesc.value);
      // console.log('Confirmed');

      emailjs.sendForm('service_jojfbg8', 'template_xhuuo2e', emailForm).then(function () {
        console.log('SUCCESS!');
        emailForm.style.display = 'none';
        confirmDiv.style.display = 'flex';
      }, function (error) {
        console.log('FAILED...', error);
      });
      window.scrollTo({
        bottom: 0,
        behavior: 'smooth'
      });
    });
  });
}

/***/ }),

/***/ "./src/header/mobileMenu.js":
/*!**********************************!*\
  !*** ./src/header/mobileMenu.js ***!
  \**********************************/
/***/ (function() {

// if (window.location.pathname === '/detail/') {
//   window.addEventListener('DOMContentLoaded', () => {})}
window.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('#navMobileToggle');
  const mobileMenuCont = document.querySelector('#navMobileMenuCont');
  let mobileMenu = false;
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu = !mobileMenu;

    if (mobileMenu) {
      mobileMenuCont.style.display = 'flex';
    } else {
      mobileMenuCont.style.display = 'none';
    }
  });
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _header_mobileMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/mobileMenu.js */ "./src/header/mobileMenu.js");
/* harmony import */ var _header_mobileMenu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_mobileMenu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _email_sell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email/sell.js */ "./src/email/sell.js");
/* harmony import */ var _email_sell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_email_sell_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _email_onlineSchool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email/onlineSchool.js */ "./src/email/onlineSchool.js");
/* harmony import */ var _email_onlineSchool_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_email_onlineSchool_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _email_career_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email/career.js */ "./src/email/career.js");
/* harmony import */ var _email_career_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_email_career_js__WEBPACK_IMPORTED_MODULE_4__);
// CSS
 // JS






/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbostonmoves"] = self["webpackChunkbostonmoves"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map