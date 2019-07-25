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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/comment.jst.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/comment.jst.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/comment.jst.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/ars/RubyProjects/book-reviews/app/javascript/packs/comment.jst.js: Identifier 'comment' has already been declared (647:5)\n\n  645 |     var __jst = '';\n  646 | \n> 647 |  let comment = comment[\"data\"]\n      |      ^\n  648 |     __jst += '<div class=\"media comment-box\"> <div class=\"media-left\"> a href=\"#\" img.img-responsive.user-photo src=\"https://ssl.gstatic.com/accounts/ui/avatar_2x.png\" / </div> <div class=\"media-body\"> <h4 class=\".media-heading\">' + filter.html(comment[\"user\"][\"email\"]) + '</h4><div class=\"float-right\">' + filter.html(comment.created_at) + '</div> <p>' + filter.html(comment.text) + '</p> <a data-confirm=\"Are you sure?\" class=\"btn btn-danger\" rel=\"nofollow\" data-method=\"delete\" href=\"/reviews/\" +' + filter.html(comment.review_id) + '+ \"/comments/\" +' + filter.html(comment.id) + '+ \">Delete comment</a> </div> </div>';\n  649 | \n  650 |     return __jst;\n    at Parser.raise (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:6344:17)\n    at ScopeHandler.checkRedeclarationInScope (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:3757:12)\n    at ScopeHandler.declareName (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:3723:12)\n    at Parser.checkLVal (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8034:22)\n    at Parser.parseVarId (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10465:10)\n    at Parser.parseVar (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10436:12)\n    at Parser.parseVarStatement (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10258:10)\n    at Parser.parseStatementContent (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9855:21)\n    at Parser.parseStatement (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Parser.parseBlockBody (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10351:10)\n    at Parser.parseBlock (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10335:10)\n    at Parser.parseFunctionBody (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9408:24)\n    at Parser.parseFunctionBodyAndFinish (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9378:10)\n    at withTopicForbiddingContext (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10498:12)\n    at Parser.withTopicForbiddingContext (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9683:14)\n    at Parser.parseFunction (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10497:10)\n    at Parser.parseFunctionExpression (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8864:17)\n    at Parser.parseExprAtom (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8777:21)\n    at Parser.parseExprSubscripts (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Parser.parseMaybeUnary (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Parser.parseExprOps (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Parser.parseMaybeConditional (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8253:23)\n    at Parser.parseMaybeAssign (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8200:21)\n    at Parser.parseMaybeAssign (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8239:25)\n    at Parser.parseExpression (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:8148:23)\n    at Parser.parseStatementContent (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9917:23)\n    at Parser.parseStatement (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:9788:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10364:25)\n    at Parser.parseBlockBody (/home/ars/RubyProjects/book-reviews/node_modules/@babel/parser/lib/index.js:10351:10)");

/***/ })

/******/ });
//# sourceMappingURL=comment-4a0343d65cd0d6a9b829.js.map