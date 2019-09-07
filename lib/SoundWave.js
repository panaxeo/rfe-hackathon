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
import SvgSoundBg from './icons/js/SoundBg';
import SvgSoundProgress from './icons/js/SoundProgress';
var SoundWave = /** @class */ (function (_super) {
    __extends(SoundWave, _super);
    function SoundWave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { progress: 0 };
        return _this;
    }
    SoundWave.prototype.componentDidMount = function () {
        var _this = this;
        setInterval(function () {
            var progress = _this.state.progress + 0.1;
            if (progress > 1) {
                progress = 0;
            }
            _this.setState({ progress: progress });
        }, 1000);
    };
    SoundWave.prototype.render = function () {
        return (React.createElement("div", { style: { position: 'relative' } },
            React.createElement("div", null,
                React.createElement(SvgSoundBg, { style: { position: 'absolute' } }),
                React.createElement("div", { style: {
                        float: 'left',
                        position: 'absolute',
                        overflow: 'hidden',
                        width: this.state.progress * 625.0,
                        transition: 'width 1s linear'
                    } },
                    React.createElement(SvgSoundProgress, null)))));
    };
    return SoundWave;
}(React.Component));
export { SoundWave };
//# sourceMappingURL=SoundWave.js.map