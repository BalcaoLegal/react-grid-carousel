'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var styled = require('styled-components');
var debounce = require('lodash.debounce');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

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
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useRefProp = function (input) {
    var ref = react.useRef(input);
    ref.current = input;
    return ref;
};

var ButtonWrapper = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"], ["\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"])), function (_a) {
    var mobileBreakpoint = _a.mobileBreakpoint;
    return mobileBreakpoint;
});
var Button = styled__default["default"].span(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: absolute;\n  top: calc(50% - 12px);\n  height: 24px;\n  width: 24px;\n  background: #f7f7f7;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\n  z-index: 10;\n  cursor: pointer;\n  font-size: 10px;\n  transition: opacity 0.25s;\n  left: ", ";\n  right: ", ";\n\n  &:hover {\n    background: #fff;\n  }\n\n  &::before {\n    content: '';\n    height: 8px;\n    width: 8px;\n    background: transparent;\n    border-top: 1.5px solid #777;\n    border-right: 1.5px solid #777;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ", ";\n  }\n"], ["\n  position: absolute;\n  top: calc(50% - 12px);\n  height: 24px;\n  width: 24px;\n  background: #f7f7f7;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\n  z-index: 10;\n  cursor: pointer;\n  font-size: 10px;\n  transition: opacity 0.25s;\n  left: ", ";\n  right: ", ";\n\n  &:hover {\n    background: #fff;\n  }\n\n  &::before {\n    content: '';\n    height: 8px;\n    width: 8px;\n    background: transparent;\n    border-top: 1.5px solid #777;\n    border-right: 1.5px solid #777;\n    display: inline-block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: ", ";\n  }\n"])), function (_a) {
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
    var type = _a.type, _b = _a.mobileBreakpoint, mobileBreakpoint = _b === void 0 ? 1 : _b, _c = _a.hidden, hidden = _c === void 0 ? false : _c, CustomBtn = _a.CustomBtn, onClick = _a.onClick;
    var renderButton = function () {
        if (CustomBtn) {
            if (typeof CustomBtn === 'function') {
                return jsxRuntime.jsx(CustomBtn, {});
            }
            else {
                return CustomBtn;
            }
        }
        else {
            return jsxRuntime.jsx(Button, { type: type });
        }
    };
    return (jsxRuntime.jsx(ButtonWrapper, { mobileBreakpoint: mobileBreakpoint, hidden: hidden, onClick: onClick, children: renderButton() }));
};
var templateObject_1$2, templateObject_2$2;

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
    return (jsxRuntime.jsx(DotWrapper, { onClick: handleClick, children: DotCustom ? (jsxRuntime.jsx(DotCustom, { isActive: isActive })) : (jsxRuntime.jsx(DotDefault, { color: isActive ? dotColorActive : dotColorInactive })) }));
};
var templateObject_1$1, templateObject_2$1;

/**
* Hook that returns the current breakpoint setting based on the window width.
* @param {UseResponsiveLayoutProps} props - The props for the hook.
* @returns {CurrentBreakpointSetting} - The current breakpoint setting.
*/
var useResponsiveLayout = function (props) {
    if (props === void 0) { props = {}; }
    var _a = react.useState(), currentBreakpointSetting = _a[0], setCurrentBreakpointSetting = _a[1];
    var sortedBreakpointList = react.useMemo(function () {
        var _a;
        var breakpoints = __spreadArray([], (_a = props.breakpointList) !== null && _a !== void 0 ? _a : [], true);
        breakpoints.sort(function (a, b) { return b.breakpoint - a.breakpoint; });
        return breakpoints;
    }, [props.breakpointList]);
    var handleResize = react.useCallback(function () {
        var windowWidth = window.innerWidth;
        var matchedSetting;
        sortedBreakpointList.some(function (setting) {
            if (windowWidth <= setting.breakpoint) {
                matchedSetting = setting;
                return true;
            }
            return false;
        });
        setCurrentBreakpointSetting(matchedSetting);
    }, [sortedBreakpointList]);
    react.useEffect(function () {
        var _a;
        if ((_a = props.breakpointList) === null || _a === void 0 ? void 0 : _a.length) {
            handleResize();
            var resizeHandler_1 = function () { return handleResize(); };
            window.addEventListener("resize", resizeHandler_1);
            return function () {
                window.removeEventListener("resize", resizeHandler_1);
            };
        }
    }, [props.breakpointList, handleResize]);
    return currentBreakpointSetting;
};

var HANDLER_NAME_SPACE = '__react-grid-carousle-resize-handler';
var handleResize = debounce__default["default"](function (e) {
    Object.values(window[HANDLER_NAME_SPACE]).forEach(function (handler) {
        if (typeof handler === 'function') {
            handler(e);
        }
    });
}, 16);
var setupListener = function () {
    window.addEventListener('resize', handleResize);
};
var removeListener = function () {
    window.removeEventListener('resize', handleResize);
};
var addResizeHandler = function (key, handler) {
    if (typeof window[HANDLER_NAME_SPACE] !== 'object') {
        window[HANDLER_NAME_SPACE] = {};
        setupListener();
    }
    window[HANDLER_NAME_SPACE][key] = handler;
};
var removeResizeHandler = function (key) {
    delete window[HANDLER_NAME_SPACE][key];
    if (!Object.keys(window[HANDLER_NAME_SPACE])) {
        delete window[HANDLER_NAME_SPACE];
        removeListener();
    }
};

var Container = styled__default["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RailWrapper = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  overflow: hidden;\n  margin: ", ";\n\n  @media screen and (max-width: ", "px) {\n    overflow-x: auto;\n    margin: 0;\n    scroll-snap-type: ", ";\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n"], ["\n  overflow: hidden;\n  margin: ", ";\n\n  @media screen and (max-width: ", "px) {\n    overflow-x: auto;\n    margin: 0;\n    scroll-snap-type: ", ";\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var showDots = _a.showDots;
    return (showDots ? '0 20px 15px 20px' : '0 20px');
}, function (_a) {
    var mobileBreakpoint = _a.mobileBreakpoint;
    return mobileBreakpoint;
}, function (_a) {
    var scrollSnap = _a.scrollSnap;
    return (scrollSnap ? 'x mandatory' : '');
});
var Rail = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-column-gap: ", ";\n  position: relative;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;\n  grid-template-columns: ", ";\n  transform: ", ";\n\n  @media screen and (max-width: ", "px) {\n    padding-left: ", ";\n    grid-template-columns: ", ";\n    grid-column-gap: ", ";\n    transform: translateX(0);\n  }\n"], ["\n  display: grid;\n  grid-column-gap: ", ";\n  position: relative;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s;\n  grid-template-columns: ", ";\n  transform: ", ";\n\n  @media screen and (max-width: ", "px) {\n    padding-left: ", ";\n    grid-template-columns: ", ";\n    grid-column-gap: ", ";\n    transform: translateX(0);\n  }\n"])), function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
}, function (_a) {
    var page = _a.page;
    return "repeat(".concat(page, ", 100%)");
}, function (_a) {
    var currentPage = _a.currentPage, gap = _a.gap;
    return "translateX(calc(".concat(-100 * currentPage, "% - ").concat((gap !== null && gap !== void 0 ? gap : 10) * currentPage, "px))");
}, function (_a) {
    var mobileBreakpoint = _a.mobileBreakpoint;
    return mobileBreakpoint;
}, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
}, function (_a) {
    var page = _a.page;
    return "repeat(".concat(page, ", 90%)");
}, function (_a) {
    var cols = _a.cols, rows = _a.rows, gap = _a.gap;
    return "calc(".concat(((cols !== null && cols !== void 0 ? cols : 1) * (rows !== null && rows !== void 0 ? rows : 1) - 1) * 90, "% + ").concat((cols !== null && cols !== void 0 ? cols : 1) * (rows !== null && rows !== void 0 ? rows : 1) * (gap !== null && gap !== void 0 ? gap : 10), "px)");
});
var Item = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  scroll-snap-align: ", ";\n"], ["\n  scroll-snap-align: ", ";\n"])), function (_a) {
    var scrollSnap = _a.scrollSnap;
    return (scrollSnap ? 'start' : '');
});
var ItemSet = styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-gap: ", ";\n\n  @media screen and (max-width: ", "px) {\n    grid-template-columns: ", ";\n    grid-template-rows: 1fr;\n\n    &:last-of-type > ", ":last-of-type {\n      padding-right: ", ";\n      margin-right: ", ";\n    }\n  }\n"], ["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-gap: ", ";\n\n  @media screen and (max-width: ", "px) {\n    grid-template-columns: ", ";\n    grid-template-rows: 1fr;\n\n    &:last-of-type > " /* sc-sel */, ":last-of-type {\n      padding-right: ", ";\n      margin-right: ", ";\n    }\n  }\n"])), function (_a) {
    var cols = _a.cols;
    return "repeat(".concat(cols, ", 1fr)");
}, function (_a) {
    var rows = _a.rows;
    return "repeat(".concat(rows, ", 1fr)");
}, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
}, function (_a) {
    var mobileBreakpoint = _a.mobileBreakpoint;
    return mobileBreakpoint;
}, function (_a) {
    var cols = _a.cols, rows = _a.rows;
    return "repeat(".concat((cols !== null && cols !== void 0 ? cols : 1) * (rows !== null && rows !== void 0 ? rows : 1), ", 100%)");
}, /* sc-sel */ Item, function (_a) {
    var gap = _a.gap;
    return "".concat(gap, "px");
}, function (_a) {
    var gap = _a.gap;
    return "-".concat(gap, "px");
});
var Dots = styled__default["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -12px;\n  height: 10px;\n  width: 100%;\n  line-height: 10px;\n  text-align: center;\n\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: -12px;\n  height: 10px;\n  width: 100%;\n  line-height: 10px;\n  text-align: center;\n\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"])), function (_a) {
    var mobileBreakpoint = _a.mobileBreakpoint;
    return mobileBreakpoint;
});
var CAROUSEL_ITEM = 'CAROUSEL_ITEM';
function Carousel(_a) {
    var _b = _a.cols, colsProp = _b === void 0 ? 1 : _b, _c = _a.rows, rowsProp = _c === void 0 ? 1 : _c, _d = _a.gap, gapProp = _d === void 0 ? 10 : _d, _e = _a.loop, loopProp = _e === void 0 ? false : _e, _f = _a.scrollable, scrollable = _f === void 0 ? false : _f, _g = _a.scrollSnap, scrollSnap = _g === void 0 ? true : _g, _h = _a.hideArrow, hideArrow = _h === void 0 ? false : _h, autoplayProp = _a.autoplay, arrowLeft = _a.arrowLeft, arrowRight = _a.arrowRight, containerClassName = _a.containerClassName, containerStyle = _a.containerStyle, children = _a.children, _j = _a.startPage, startPage = _j === void 0 ? 0 : _j, onPageChanged = _a.onPageChanged, onTotalPagesChanged = _a.onTotalPagesChanged, showDots = _a.showDots, _k = _a.dotColorActive, dotColorActive = _k === void 0 ? '#795548' : _k, _l = _a.dotColorInactive, dotColorInactive = _l === void 0 ? '#ccc' : _l, responsiveLayout = _a.responsiveLayout, _m = _a.mobileBreakpoint, mobileBreakpoint = _m === void 0 ? 767 : _m;
    var _o = react.useState(startPage), currentPage = _o[0], setCurrentPage = _o[1];
    var _p = react.useState(false), isHover = _p[0], setIsHover = _p[1];
    var _q = react.useState(false), isTouch = _q[0], setIsTouch = _q[1];
    var _r = react.useState(colsProp), cols = _r[0], setCols = _r[1];
    var _s = react.useState(rowsProp), rows = _s[0], setRows = _s[1];
    var _t = react.useState(0), gap = _t[0], setGap = _t[1];
    var _u = react.useState(loopProp), loop = _u[0], setLoop = _u[1];
    var _v = react.useState(autoplayProp), autoplay = _v[0], setAutoplay = _v[1];
    var railWrapperRef = react.useRef(null);
    var _w = react.useState(0), railWrapperWidth = _w[0], setRailWrapperWidth = _w[1];
    var onPageChangedRef = useRefProp(onPageChanged);
    var onTotalPagesChangedRef = useRefProp(onTotalPagesChanged);
    var breakpointSetting = useResponsiveLayout(responsiveLayout);
    var randomKey = react.useMemo(function () { return "".concat(Math.random(), "-").concat(Math.random()); }, []);
    var _x = react.useState(false), hasSetResizeHandler = _x[0], setHasSetResizeHandler = _x[1];
    var autoplayIntervalRef = react.useRef(null);
    var itemList = react.useMemo(function () { return react.Children.toArray(children).filter(function (child) { var _a; return ((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.displayName) === CAROUSEL_ITEM; }); }, [children]);
    var handleRailWrapperResize = react.useCallback(function () {
        railWrapperRef.current && setRailWrapperWidth(railWrapperRef.current.offsetWidth);
    }, [railWrapperRef]);
    var setResizeHandler = react.useCallback(function () {
        addResizeHandler("gapCalculator-".concat(randomKey), handleRailWrapperResize);
        setHasSetResizeHandler(true);
    }, [randomKey, handleRailWrapperResize]);
    var rmResizeHandler = react.useCallback(function () {
        removeResizeHandler("gapCalculator-".concat(randomKey));
        setHasSetResizeHandler(false);
    }, [randomKey]);
    var parseGap = react.useCallback(function (gap) {
        var parsed = gap;
        hasSetResizeHandler && rmResizeHandler();
        return parsed;
    }, [
        railWrapperWidth,
        railWrapperRef,
        hasSetResizeHandler,
        setResizeHandler,
        rmResizeHandler
    ]);
    react.useEffect(function () {
        var _a = breakpointSetting !== null && breakpointSetting !== void 0 ? breakpointSetting : {}, cols = _a.cols, rows = _a.rows, gap = _a.gap, loop = _a.loop, autoplay = _a.autoplay;
        setCols(cols !== null && cols !== void 0 ? cols : colsProp);
        setRows(rows !== null && rows !== void 0 ? rows : rowsProp);
        setGap(parseGap(gap !== null && gap !== void 0 ? gap : gapProp));
        setLoop(loop !== null && loop !== void 0 ? loop : loopProp);
        setAutoplay(autoplay !== null && autoplay !== void 0 ? autoplay : autoplayProp);
        setCurrentPage(0);
    }, [breakpointSetting, colsProp, rowsProp, gapProp, loopProp, parseGap]);
    var itemAmountPerSet = cols * rows;
    var itemSetList = react.useMemo(function () {
        return itemList.reduce(function (result, item, i) {
            var itemComponent = (jsxRuntime.jsx(Item, { scrollSnap: scrollSnap, children: item }, i));
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
    var handleNext = react.useCallback(function (isMobile) {
        if (isMobile === void 0) { isMobile = false; }
        var railWrapper = railWrapperRef.current;
        if (isMobile && railWrapper) {
            if (!scrollSnap) {
                return;
            }
            var scrollLeft = railWrapper.scrollLeft, offsetWidth = railWrapper.offsetWidth, scrollWidth = railWrapper.scrollWidth;
            railWrapper.scrollBy({
                top: 0,
                left: loop && scrollLeft + offsetWidth >= scrollWidth
                    ? -scrollLeft
                    : scrollLeft === 0
                        ? gap +
                            (offsetWidth - gap) * 0.9 -
                            (offsetWidth * 0.1 - gap * 1.1) / 2
                        : (offsetWidth - gap) * 0.9 + gap,
                behavior: 'smooth'
            });
        }
        else {
            setCurrentPage(function (p) {
                var nextPage = p + 1;
                if (nextPage >= page) {
                    return loop ? 0 : p;
                }
                return nextPage;
            });
        }
    }, [loop, page, gap, railWrapperRef, scrollSnap]);
    var startAutoplayInterval = react.useCallback(function () {
        if (autoplayIntervalRef.current === null) {
            autoplayIntervalRef.current = setInterval(function () {
                handleNext(window.innerWidth <= mobileBreakpoint);
            }, autoplay);
        }
    }, [autoplay, autoplayIntervalRef, handleNext, mobileBreakpoint]);
    react.useEffect(function () {
        startAutoplayInterval();
        return function () {
            if (autoplayIntervalRef.current !== null) {
                clearInterval(autoplayIntervalRef.current);
                autoplayIntervalRef.current = null;
            }
        };
    }, [startAutoplayInterval, autoplayIntervalRef]);
    var handleHover = react.useCallback(function () {
        setIsHover(function (hover) { return !hover; });
    }, []);
    var handleTouch = react.useCallback(function () {
        setIsTouch(function (touch) { return !touch; });
    }, []);
    react.useEffect(function () {
        if (isHover || isTouch) {
            clearInterval(autoplayIntervalRef.current);
            autoplayIntervalRef.current = null;
        }
        else {
            startAutoplayInterval();
        }
    }, [isHover, isTouch, autoplayIntervalRef, startAutoplayInterval]);
    var turnToPage = react.useCallback(function (page) {
        setCurrentPage(page);
    }, []);
    return (jsxRuntime.jsxs(Container, { className: containerClassName, style: containerStyle, onMouseEnter: handleHover, onMouseLeave: handleHover, onTouchStart: handleTouch, onTouchEnd: handleTouch, children: [jsxRuntime.jsx(ArrowButton, { type: "prev", mobileBreakpoint: mobileBreakpoint, hidden: (hideArrow || (!loop && currentPage <= 0)), CustomBtn: arrowLeft, onClick: handlePrev }), jsxRuntime.jsx(RailWrapper, { showDots: showDots, mobileBreakpoint: mobileBreakpoint, gap: gap, scrollable: scrollable, scrollSnap: scrollSnap, ref: railWrapperRef, children: scrollable ? (itemSetList.map(function (sets, i) { return jsxRuntime.jsx(react.Fragment, { children: sets }, i); })) : (jsxRuntime.jsx(Rail, { cols: cols, rows: rows, page: page, gap: gap, currentPage: currentPage, mobileBreakpoint: mobileBreakpoint, children: itemSetList.map(function (sets, i) { return (jsxRuntime.jsx(ItemSet, { cols: cols, rows: rows, gap: gap, mobileBreakpoint: mobileBreakpoint, children: sets }, i)); }) })) }), showDots && (jsxRuntime.jsx(Dots, { mobileBreakpoint: mobileBreakpoint, children: __spreadArray([], Array(page), true).map(function (_, i) { return (jsxRuntime.jsx(Dot, { index: i, isActive: i === currentPage, dotColorInactive: dotColorInactive, dotColorActive: dotColorActive, onClick: turnToPage }, i)); }) })), jsxRuntime.jsx(ArrowButton, { type: "next", mobileBreakpoint: mobileBreakpoint, hidden: (hideArrow || (!loop && currentPage === page - 1)), CustomBtn: arrowRight, onClick: handleNext.bind(null, false) })] }));
}
var CarouselItem = function (_a) {
    var children = _a.children;
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
};
Carousel.Item = CarouselItem;
Carousel.Item.displayName = CAROUSEL_ITEM;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

module.exports = Carousel;
