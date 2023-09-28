'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var useRefProp = function (input) {
    var ref = react.useRef(input);
    ref.current = input;
    return ref;
};

var Button = styled__default["default"].span(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  top: calc(50% - 12px);\n  height: 24px;\n  width: 24px;\n  background: #f7f7f7;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\n  z-index: 10;\n  cursor: pointer;\n  font-size: 10px;\n  transition: opacity 0.25s;\n  left: ", ";\n  right: ", ";\n\n  &:hover {\n    background: #fff;\n  }\n\n  &::before {\n    content: '';\n    height: 8px;\n    width: 8px;\n    background: transparent;\n    border-top: 1.5px solid #777;\n    border-right: 1.5px solid #777;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ", ";\n  }\n"], ["\n  position: absolute;\n  top: calc(50% - 12px);\n  height: 24px;\n  width: 24px;\n  background: #f7f7f7;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\n  z-index: 10;\n  cursor: pointer;\n  font-size: 10px;\n  transition: opacity 0.25s;\n  left: ", ";\n  right: ", ";\n\n  &:hover {\n    background: #fff;\n  }\n\n  &::before {\n    content: '';\n    height: 8px;\n    width: 8px;\n    background: transparent;\n    border-top: 1.5px solid #777;\n    border-right: 1.5px solid #777;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ", ";\n  }\n"])), function (_a) {
    var type = _a.type;
    return (type === 'prev' ? '-14px' : 'initial');
}, function (_a) {
    var type = _a.type;
    return (type === 'next' ? '-14px' : 'initial');
}, function (_a) {
    var type = _a.type;
    return type === 'prev' ? 'translate(-25%, -50%) rotate(-135deg)' : 'translate(-75%, -50%) rotate(45deg)';
});
var ArrowButton = function (_a) {
    var type = _a.type, CustomBtn = _a.CustomBtn, props = __rest(_a, ["type", "CustomBtn"]);
    return (jsxRuntime.jsx("div", __assign({}, props, { children: CustomBtn ? typeof CustomBtn === 'function' ? jsxRuntime.jsx(CustomBtn, {}) : CustomBtn : jsxRuntime.jsx(Button, { type: type }) })));
};
var templateObject_1$2;

var DotWrapper = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  margin: 0 5px;\n  cursor: pointer;\n"], ["\n  display: flex;\n  margin: 0 5px;\n  cursor: pointer;\n"])));
var DotDefault = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var Dot = function (_a) {
    var index = _a.index, _b = _a.isActive, isActive = _b === void 0 ? false : _b, dotColorInactive = _a.dotColorInactive, dotColorActive = _a.dotColorActive, DotCustom = _a.dot, onClick = _a.onClick;
    var handleClick = react.useCallback(function () {
        onClick(index);
    }, [index, onClick]);
    return (jsxRuntime.jsx(DotWrapper, __assign({ onClick: handleClick }, { children: DotCustom ? (jsxRuntime.jsx(DotCustom, { isActive: isActive })) : (jsxRuntime.jsx(DotDefault, { color: isActive ? dotColorActive : dotColorInactive })) })));
};
var templateObject_1$1, templateObject_2$1;

var Container = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RailWrapper = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow: hidden;\n  ", "\n"], ["\n  overflow: hidden;\n  ", "\n"])), function (_a) {
    var scrollable = _a.scrollable, scrollSnap = _a.scrollSnap, gap = _a.gap, showDots = _a.showDots;
    return "".concat(scrollable
        ? "\n    gap: ".concat(gap, "px;\n    display: flex;\n    overflow-x: auto;\n    scroll-snap-type: ").concat(scrollSnap ? 'x mandatory' : '', ";\n    scrollbar-width: none;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  ")
        : '', "\n    margin: ").concat(showDots ? '0 0 20px' : 0, ";\n      ");
});
var Rail = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-column-gap: ", ";\n  position: relative;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;\n  grid-template-columns: ", ";\n  transform: ", ";\n"], ["\n  display: grid;\n  grid-column-gap: ", ";\n  position: relative;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;\n  grid-template-columns: ", ";\n  transform: ", ";\n"])), function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
}, function (_a) {
    var page = _a.page;
    return "repeat(".concat(page, ", 100%)");
}, function (_a) {
    var currentPage = _a.currentPage, gap = _a.gap;
    return "translateX(calc(".concat(-100 * currentPage, "% - ").concat(gap * currentPage, "px))");
});
var ItemSet = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-gap: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-gap: ", ";\n"])), function (_a) {
    var cols = _a.cols;
    return "repeat(".concat(cols, ", 1fr)");
}, function (_a) {
    var rows = _a.rows;
    return "repeat(".concat(rows, ", 1fr)");
}, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
});
var Dots = styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -20px;\n  height: 10px;\n  width: 100%;\n  line-height: 10px;\n  text-align: center;\n"], ["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -20px;\n  height: 10px;\n  width: 100%;\n  line-height: 10px;\n  text-align: center;\n"])));
var Item = styled__default["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  scroll-snap-align: ", ";\n"], ["\n  scroll-snap-align: ", ";\n"])), function (_a) {
    var scrollSnap = _a.scrollSnap;
    return (scrollSnap ? 'start' : '');
});
var CAROUSEL_ITEM = 'CAROUSEL_ITEM';
function Carousel(_a) {
    var _b = _a.cols, colsProp = _b === void 0 ? 1 : _b, _c = _a.rows, rowsProp = _c === void 0 ? 1 : _c, _d = _a.gap, gapProp = _d === void 0 ? 10 : _d, _e = _a.loop, loopProp = _e === void 0 ? false : _e, _f = _a.scrollable, scrollable = _f === void 0 ? false : _f, _g = _a.scrollSnap, scrollSnap = _g === void 0 ? true : _g, _h = _a.hideArrow, hideArrow = _h === void 0 ? false : _h, arrowLeft = _a.arrowLeft, arrowRight = _a.arrowRight, containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, children = _a.children, _j = _a.startPage, startPage = _j === void 0 ? 0 : _j, onPageChanged = _a.onPageChanged, onTotalPagesChanged = _a.onTotalPagesChanged, showDots = _a.showDots, _k = _a.dotColorActive, dotColorActive = _k === void 0 ? '#795548' : _k, _l = _a.dotColorInactive, dotColorInactive = _l === void 0 ? '#ccc' : _l;
    var _m = react.useState(startPage), currentPage = _m[0], setCurrentPage = _m[1];
    var _o = react.useState(colsProp), cols = _o[0], setCols = _o[1];
    var _p = react.useState(rowsProp), rows = _p[0], setRows = _p[1];
    var _q = react.useState(0), gap = _q[0], setGap = _q[1];
    var _r = react.useState(loopProp), loop = _r[0], setLoop = _r[1];
    var railWrapperRef = react.useRef(null);
    var onPageChangedRef = useRefProp(onPageChanged);
    var onTotalPagesChangedRef = useRefProp(onTotalPagesChanged);
    react.useEffect(function () {
        setCols(colsProp);
        setRows(rowsProp);
        setGap(gapProp);
        setLoop(loopProp);
        setCurrentPage(0);
    }, [colsProp, rowsProp, gapProp, loopProp]);
    var itemList = react.useMemo(function () { return react.Children.toArray(children).filter(function (child) { var _a; return ((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.displayName) === CAROUSEL_ITEM; }); }, [children]);
    var itemAmountPerSet = cols * rows;
    var itemSetList = react.useMemo(function () {
        return itemList.reduce(function (result, item, i) {
            var itemComponent = (jsxRuntime.jsx(Item, __assign({ scrollSnap: scrollSnap }, { children: item }), i));
            if (i % itemAmountPerSet === 0) {
                result.push([itemComponent]);
            }
            else {
                result[result.length - 1].push(itemComponent);
            }
            return result;
        }, []);
    }, [itemList, itemAmountPerSet, scrollSnap]);
    var page = Math.ceil(itemList.length / itemAmountPerSet);
    react.useEffect(function () {
        var _a;
        if (scrollable)
            return;
        (_a = onPageChangedRef.current) === null || _a === void 0 ? void 0 : _a.call(onPageChangedRef, currentPage);
    }, [scrollable, currentPage]);
    react.useEffect(function () {
        var _a;
        if (scrollable)
            return;
        (_a = onTotalPagesChangedRef.current) === null || _a === void 0 ? void 0 : _a.call(onTotalPagesChangedRef, page);
    }, [scrollable, page]);
    react.useEffect(function () {
        if (page > 0 && currentPage + 1 > page) {
            setCurrentPage(page - 1);
        }
    }, [currentPage, page]);
    var handlePrev = react.useCallback(function () {
        if (scrollable) {
            if (railWrapperRef.current) {
                var left = railWrapperRef.current.scrollLeft;
                var width = railWrapperRef.current.clientWidth;
                railWrapperRef.current.scrollTo({
                    left: Math.max(left - width, 0),
                    behavior: 'smooth',
                });
            }
            return;
        }
        setCurrentPage(function (p) {
            var prevPage = p - 1;
            if (loop && prevPage < 0) {
                return page - 1;
            }
            return prevPage;
        });
    }, [scrollable, loop, page]);
    var handleNext = react.useCallback(function () {
        if (scrollable) {
            if (railWrapperRef.current) {
                var left = railWrapperRef.current.scrollLeft;
                var width = railWrapperRef.current.clientWidth;
                var fullWidth = railWrapperRef.current.scrollWidth;
                railWrapperRef.current.scrollTo({
                    left: Math.min(left + width, fullWidth - width),
                    behavior: 'smooth',
                });
            }
            return;
        }
        setCurrentPage(function (p) {
            var nextPage = p + 1;
            if (nextPage >= page) {
                return loop ? 0 : p;
            }
            return nextPage;
        });
    }, [scrollable, loop, page, gap]);
    var turnToPage = react.useCallback(function (page) {
        setCurrentPage(page);
    }, []);
    return (jsxRuntime.jsxs(Container, __assign({ className: containerClassName, style: containerStyle }, { children: [jsxRuntime.jsx(ArrowButton, { type: "prev", hidden: !scrollable && (hideArrow || (!loop && currentPage <= 0)), CustomBtn: arrowLeft, onClick: handlePrev }), jsxRuntime.jsx(RailWrapper, __assign({ showDots: showDots, gap: gap, scrollable: scrollable, scrollSnap: scrollSnap, ref: railWrapperRef }, { children: scrollable ? (itemSetList.map(function (sets, i) { return jsxRuntime.jsx(react.Fragment, { children: sets }, i); })) : (jsxRuntime.jsx(Rail, __assign({ cols: cols, rows: rows, page: page, gap: gap, currentPage: currentPage }, { children: itemSetList.map(function (sets, i) { return (jsxRuntime.jsx(ItemSet, __assign({ cols: cols, rows: rows, gap: gap }, { children: sets }), i)); }) }))) })), showDots && (jsxRuntime.jsx(Dots, { children: __spreadArray([], Array(page), true).map(function (_, i) { return (jsxRuntime.jsx(Dot, { index: i, isActive: i === currentPage, dotColorInactive: dotColorInactive, dotColorActive: dotColorActive, onClick: turnToPage }, i)); }) })), jsxRuntime.jsx(ArrowButton, { type: "next", hidden: !scrollable && (hideArrow || (!loop && currentPage === page - 1)), CustomBtn: arrowRight, onClick: handleNext })] })));
}
var CarouselItem = function (_a) {
    var children = _a.children;
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
};
Carousel.Item = CarouselItem;
Carousel.Item.displayName = CAROUSEL_ITEM;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

module.exports = Carousel;
