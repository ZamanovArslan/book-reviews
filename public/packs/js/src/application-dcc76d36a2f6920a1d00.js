/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/src/application.scss");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/src/application.scss":
/*!***************************************************!*\
  !*** ./app/javascript/packs/src/application.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/packs/src/application.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true,"sourceMap":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./app/javascript/packs/src/application.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./app/javascript/packs/src/application.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".review-wrap {\n  position: relative;\n  height: 300px; }\n\n.crud-review-buttons {\n  position: absolute;\n  bottom: 25px; }\n\n.crud-review-buttons .btn {\n  margin-right: 10px; }\n\n.emp-profile {\n  margin-top: 3%;\n  margin-bottom: 3%;\n  padding: 3%;\n  border-radius: .5rem;\n  background: #fff; }\n\n.profile-img {\n  max-height: 250px;\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 10px;\n  background: #ececec;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  color: #0062cc;\n  font-weight: 600; }\n\n/*\n * This is a manifest file that'll be compiled into application.css, which will include all the files\n * listed below.\n *\n * Any CSS and SCSS file within this directory, lib/assets/stylesheets, or any plugin's\n * vendor/assets/stylesheets directory can be referenced here using a relative path.\n *\n * You're free to add application-wide styles to this file and they'll appear at the bottom of the\n * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS\n * files in this directory. Styles in this file should be added after the last require_* statement.\n * It is generally better to create a new file per style scope.\n *\n *= require_tree\n *= require_self\n */\n\n/*\n * Specific styles of signin component\n */\n\n/*\n * General styles\n */\n\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat; }\n\n.card-container.card {\n  width: 500px;\n  padding: 40px 40px; }\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default; }\n\n/*\n * Card component\n */\n\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); }\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%; }\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em; }\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box; }\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px; }\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box; }\n\n.form-signin .form-control:focus {\n  border-color: #6891a2;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2; }\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: #6891a2;\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s; }\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #2980b9; }\n\n.forgot-password {\n  color: #6891a2; }\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #0c6121; }\n\n.delete-acc {\n  padding-top: 20px; }\n\nbody {\n  background-color: #f9f9f9; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\na:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.wrap {\n  padding-top: 70px;\n  background-color: #f9f9f9; }\n\n.comment-box {\n  margin-top: 30px !important; }\n\n.comment-box img {\n  width: 50px;\n  height: 50px; }\n\n.comment-box .media-left {\n  padding-right: 10px;\n  width: 65px; }\n\n.comment-box .media-body p {\n  border: 1px solid #ddd;\n  padding: 10px; }\n\n.comment-box .media-body .media p {\n  margin-bottom: 0; }\n\n.comment-box .media-heading {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  margin-bottom: -1px;\n  padding: 7px 10px;\n  position: relative; }\n\n.comment-box .media-heading::before {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  content: \"\";\n  height: 12px;\n  left: -6px;\n  position: absolute;\n  top: 10px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 12px; }\n", "",{"version":3,"sources":["/home/ars/RubyProjects/book-reviews/app/javascript/packs/src/review.scss","/home/ars/RubyProjects/book-reviews/app/javascript/packs/src/users.scss","/home/ars/RubyProjects/book-reviews/app/javascript/packs/src/devise/form.css","application.scss","/home/ars/RubyProjects/book-reviews/app/javascript/packs/src/application.scss"],"names":[],"mappings":"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","file":"application.scss","sourcesContent":[".review-wrap {\n  position: relative;\n  height: 300px;\n}\n\n.crud-review-buttons {\n  position: absolute;\n  bottom: 25px;\n}\n\n.crud-review-buttons .btn {\n  margin-right: 10px\n}\n",".emp-profile {\n  margin-top: 3%;\n  margin-bottom: 3%;\n  padding: 3%;\n  border-radius: .5rem;\n  background: #fff;\n}\n\n.profile-img {\n  max-height: 250px;\n  text-align: center;\n}\n\n.profile-img img {\n  width: 70%;\n  height: 100%;\n}\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8;\n}\n\n.profile-head h5 {\n  color: #333;\n}\n\n.profile-head h6 {\n  color: #0062cc;\n}\n\n.profile-edit-btn {\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 10px;\n  background: #ececec;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer;\n}\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%;\n}\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc;\n}\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%;\n}\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.profile-work ul {\n  list-style: none;\n}\n\n.profile-tab label {\n  font-weight: 600;\n}\n\n.profile-tab p {\n  color: #0062cc;\n  font-weight: 600;\n}\n","/*\n * This is a manifest file that'll be compiled into application.css, which will include all the files\n * listed below.\n *\n * Any CSS and SCSS file within this directory, lib/assets/stylesheets, or any plugin's\n * vendor/assets/stylesheets directory can be referenced here using a relative path.\n *\n * You're free to add application-wide styles to this file and they'll appear at the bottom of the\n * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS\n * files in this directory. Styles in this file should be added after the last require_* statement.\n * It is generally better to create a new file per style scope.\n *\n *= require_tree\n *= require_self\n */\n/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n}\n\n.card-container.card {\n  width: 500px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: rgb(104, 145, 162);\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: rgb(104, 145, 162);\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  border: none;\n  -o-transition: all 0.218s;\n  -moz-transition: all 0.218s;\n  -webkit-transition: all 0.218s;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #2980b9;\n}\n\n.forgot-password {\n  color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n  color: rgb(12, 97, 33);\n}\n.delete-acc{\n  padding-top: 20px;\n}",".review-wrap {\n  position: relative;\n  height: 300px; }\n\n.crud-review-buttons {\n  position: absolute;\n  bottom: 25px; }\n\n.crud-review-buttons .btn {\n  margin-right: 10px; }\n\n.emp-profile {\n  margin-top: 3%;\n  margin-bottom: 3%;\n  padding: 3%;\n  border-radius: .5rem;\n  background: #fff; }\n\n.profile-img {\n  max-height: 250px;\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 10px;\n  background: #ececec;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  color: #0062cc;\n  font-weight: 600; }\n\n/*\n * This is a manifest file that'll be compiled into application.css, which will include all the files\n * listed below.\n *\n * Any CSS and SCSS file within this directory, lib/assets/stylesheets, or any plugin's\n * vendor/assets/stylesheets directory can be referenced here using a relative path.\n *\n * You're free to add application-wide styles to this file and they'll appear at the bottom of the\n * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS\n * files in this directory. Styles in this file should be added after the last require_* statement.\n * It is generally better to create a new file per style scope.\n *\n *= require_tree\n *= require_self\n */\n/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat; }\n\n.card-container.card {\n  width: 500px;\n  padding: 40px 40px; }\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default; }\n\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); }\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%; }\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em; }\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px; }\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.form-signin .form-control:focus {\n  border-color: #6891a2;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2; }\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: #6891a2;\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  border: none;\n  -o-transition: all 0.218s;\n  -moz-transition: all 0.218s;\n  -webkit-transition: all 0.218s;\n  transition: all 0.218s; }\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #2980b9; }\n\n.forgot-password {\n  color: #6891a2; }\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #0c6121; }\n\n.delete-acc {\n  padding-top: 20px; }\n\nbody {\n  background-color: #f9f9f9; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\na:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.wrap {\n  padding-top: 70px;\n  background-color: #f9f9f9; }\n\n.comment-box {\n  margin-top: 30px !important; }\n\n.comment-box img {\n  width: 50px;\n  height: 50px; }\n\n.comment-box .media-left {\n  padding-right: 10px;\n  width: 65px; }\n\n.comment-box .media-body p {\n  border: 1px solid #ddd;\n  padding: 10px; }\n\n.comment-box .media-body .media p {\n  margin-bottom: 0; }\n\n.comment-box .media-heading {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  margin-bottom: -1px;\n  padding: 7px 10px;\n  position: relative; }\n\n.comment-box .media-heading::before {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  content: \"\";\n  height: 12px;\n  left: -6px;\n  position: absolute;\n  top: 10px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 12px; }\n","@import \"review\";\n@import \"users\";\n@import \"devise/form\";\n\nbody{\n  background-color: #f9f9f9;\n\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\na:hover {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.wrap {\n  padding-top: 70px;\n  background-color: #f9f9f9;\n}\n\n.comment-box {\n  margin-top: 30px !important;\n}\n\n.comment-box img {\n  width: 50px;\n  height: 50px;\n}\n\n.comment-box .media-left {\n  padding-right: 10px;\n  width: 65px;\n}\n\n.comment-box .media-body p {\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.comment-box .media-body .media p {\n  margin-bottom: 0;\n}\n\n.comment-box .media-heading {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  margin-bottom: -1px;\n  padding: 7px 10px;\n  position: relative;\n}\n\n.comment-box .media-heading::before {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  content: \"\";\n  height: 12px;\n  left: -6px;\n  position: absolute;\n  top: 10px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 12px;\n}\n"]}]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ })

/******/ });
//# sourceMappingURL=application-dcc76d36a2f6920a1d00.js.map