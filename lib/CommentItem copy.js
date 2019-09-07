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
import { CommentWrapper } from './CommentWrapper';
var CommentItem = /** @class */ (function (_super) {
    __extends(CommentItem, _super);
    function CommentItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentItem.prototype.render = function () {
        return (React.createElement(CommentWrapper, null,
            React.createElement("p", { className: "comment-text" }, this.props.text),
            React.createElement("div", { className: "bottom-comment" },
                React.createElement("div", { className: "comment-date" }, "Aug 24, 2014 @ 2:35 PM"),
                React.createElement("ul", { className: "comment-actions" },
                    React.createElement("li", { className: "complain" }, "Complain"),
                    React.createElement("li", { className: "reply" }, "Reply")))));
    };
    return CommentItem;
}(React.Component));
export { CommentItem };
//# sourceMappingURL=CommentItem copy.js.map