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
import * as React from 'react';
import SVGLike from './icons/js/Like';
import styled from 'styled-components';
var Avatar = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 54px;\n  height: 54px;\n  border-radius: 26px;\n  position: absolute;\n"], ["\n  width: 54px;\n  height: 54px;\n  border-radius: 26px;\n  position: absolute;\n"])));
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 567px;\n  margin-bottom: 10px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  opacity: 1;\n  padding: 24px 34px 24px 24px;\n  transition: 0.3s;\n  &:hover {\n    box-shadow: 0px 3px 6px #00000033;\n    transition: 0.3s;\n  }\n"], ["\n  width: 567px;\n  margin-bottom: 10px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  opacity: 1;\n  padding: 24px 34px 24px 24px;\n  transition: 0.3s;\n  &:hover {\n    box-shadow: 0px 3px 6px #00000033;\n    transition: 0.3s;\n  }\n"])));
var Title = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 20px;\n  text-align: left;\n  font: Bold 20px/27px Open Sans;\n  letter-spacing: 0;\n  color: #222222;\n  opacity: 1;\n  margin-bottom: 12px;\n"], ["\n  font-size: 20px;\n  text-align: left;\n  font: Bold 20px/27px Open Sans;\n  letter-spacing: 0;\n  color: #222222;\n  opacity: 1;\n  margin-bottom: 12px;\n"])));
var Text = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 20px;\n  text-align: left;\n  font: Regular 20px/27px Open Sans;\n  letter-spacing: 0;\n  color: #666666;\n  opacity: 1;\n"], ["\n  font-size: 20px;\n  text-align: left;\n  font: Regular 20px/27px Open Sans;\n  letter-spacing: 0;\n  color: #666666;\n  opacity: 1;\n"])));
var ActionButton = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-align: left;\n  font: Regular 16px/22px Open Sans;\n  letter-spacing: 0;\n  color: #287fb8;\n  opacity: 1;\n  margin-right: 24px;\n"], ["\n  text-align: left;\n  font: Regular 16px/22px Open Sans;\n  letter-spacing: 0;\n  color: #287fb8;\n  opacity: 1;\n  margin-right: 24px;\n"])));
var LikeCount = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  float: right;\n  text-align: right;\n  margin-right: 10px;\n  font: Regular 16px/22px Open Sans;\n  letter-spacing: 0;\n  color: #707070;\n  opacity: 1;\n  .icon {\n    margin-left: 5px;\n  }\n  display: flex;\n  align-items: center;\n"], ["\n  float: right;\n  text-align: right;\n  margin-right: 10px;\n  font: Regular 16px/22px Open Sans;\n  letter-spacing: 0;\n  color: #707070;\n  opacity: 1;\n  .icon {\n    margin-left: 5px;\n  }\n  display: flex;\n  align-items: center;\n"])));
var CommentWrapper = /** @class */ (function (_super) {
    __extends(CommentWrapper, _super);
    function CommentWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentWrapper.prototype.render = function () {
        var _a = this.props, avatarURL = _a.avatarURL, title = _a.title, text = _a.text, likesCount = _a.likesCount;
        return (React.createElement(Wrapper, null,
            React.createElement(Avatar, { src: avatarURL }),
            React.createElement("div", { style: { marginLeft: 78, marginTop: 12 } },
                React.createElement(LikeCount, null,
                    likesCount,
                    React.createElement(SVGLike, { style: { verticalAlign: 'middle' }, class: "icon" })),
                React.createElement(Title, null, title),
                React.createElement(Text, null, text),
                React.createElement("div", { style: { marginTop: 24 } },
                    React.createElement(ActionButton, null, "Reply"),
                    React.createElement(ActionButton, null, "Share")))));
    };
    return CommentWrapper;
}(React.Component));
export { CommentWrapper };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=CommentWrapper.js.map