var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { CommentWrapper } from './CommentWrapper';
import styled from 'styled-components';
import { words } from './badwords-en';
var Div = styled.text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  input,\n  textarea {\n    outline: none;\n    border: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'PT Sans', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial',\n      sans-serif;\n    font-size: 1rem;\n    color: #555f77;\n  }\n  input::-webkit-input-placeholder,\n  textarea::-webkit-input-placeholder {\n    color: #ced2db;\n  }\n  input::-moz-placeholder,\n  textarea::-moz-placeholder {\n    color: #ced2db;\n  }\n  input:-moz-placeholder,\n  textarea:-moz-placeholder {\n    color: #ced2db;\n  }\n  input:-ms-input-placeholder,\n  textarea:-ms-input-placeholder {\n    color: #ced2db;\n  }\n  .comment-block textarea {\n    width: 100%;\n    resize: none;\n  }\n\n  .bottom-comment {\n    color: #acb4c2;\n    font-size: 0.875rem;\n  }\n"], ["\n  input,\n  textarea {\n    outline: none;\n    border: none;\n    display: block;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'PT Sans', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial',\n      sans-serif;\n    font-size: 1rem;\n    color: #555f77;\n  }\n  input::-webkit-input-placeholder,\n  textarea::-webkit-input-placeholder {\n    color: #ced2db;\n  }\n  input::-moz-placeholder,\n  textarea::-moz-placeholder {\n    color: #ced2db;\n  }\n  input:-moz-placeholder,\n  textarea:-moz-placeholder {\n    color: #ced2db;\n  }\n  input:-ms-input-placeholder,\n  textarea:-ms-input-placeholder {\n    color: #ced2db;\n  }\n  .comment-block textarea {\n    width: 100%;\n    resize: none;\n  }\n\n  .bottom-comment {\n    color: #acb4c2;\n    font-size: 0.875rem;\n  }\n"])));
var CommentInput = /** @class */ (function (_super) {
    __extends(CommentInput, _super);
    function CommentInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textarea = React.createRef();
        _this.getRudeWordsSet = function () { return __awaiter(_this, void 0, void 0, function () {
            var set, _i, _a, s;
            return __generator(this, function (_b) {
                set = new Set();
                for (_i = 0, _a = words.split('\n'); _i < _a.length; _i++) {
                    s = _a[_i];
                    set.add(s);
                }
                return [2 /*return*/, set];
            });
        }); };
        _this.checkBadWordExistence = function (text) { return __awaiter(_this, void 0, void 0, function () {
            var words, _i, _a, sentence, _b, _c, word;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getRudeWordsSet()];
                    case 1:
                        words = _d.sent();
                        for (_i = 0, _a = text.split(/\./); _i < _a.length; _i++) {
                            sentence = _a[_i];
                            for (_b = 0, _c = sentence.split(/\s/); _b < _c.length; _b++) {
                                word = _c[_b];
                                if (words.has(word)) {
                                    return [2 /*return*/, { word: word, sentence: sentence }];
                                }
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        }); };
        _this.submitReply = function (text) { return __awaiter(_this, void 0, void 0, function () {
            var existence;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkBadWordExistence(text)];
                    case 1:
                        existence = _a.sent();
                        if (existence) {
                            window.responsiveVoice.speak('Would you really say? ' + existence.sentence);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    CommentInput.prototype.render = function () {
        var _this = this;
        return (React.createElement(CommentWrapper, null,
            React.createElement(Div, null,
                React.createElement("form", { action: "" },
                    React.createElement("textarea", { name: "", id: "input", cols: 30, rows: 3, placeholder: "Add comment...", ref: this.textarea })),
                React.createElement("ul", { className: "comment-actions" },
                    React.createElement("li", { className: "reply", id: "submit-button", onClick: function () {
                            return _this.textarea.current &&
                                _this.submitReply(_this.textarea.current.value);
                        } }, "Send")))));
    };
    return CommentInput;
}(React.Component));
export { CommentInput };
var templateObject_1;
//# sourceMappingURL=CommentInput.js.map