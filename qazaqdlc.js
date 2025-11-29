import {
    r as P,
    R as f,
    F as q
} from './monaco.js';
(function() {
    const T = document['createElement']('link')['relList'];
    if (T && T['supports'] && T['supports']('modulepreload')) return;
    for (const R of document['querySelectorAll']('link[rel=\x22modulepreload\x22]')) w(R);
    new MutationObserver(p => {
        for (const A of p)
            if (A['type'] === 'childList')
                for (const N of A['addedNodes']) N['tagName'] === 'LINK' && N['rel'] === 'modulepreload' && w(N);
    })['observe'](document, {
        'childList': !0x0,
        'subtree': !0x0
    });

    function b(p) {
        const A = {};
        return p['integrity'] && (A['integrity'] = p['integrity']), p['referrerPolicy'] && (A['referrerPolicy'] = p['referrerPolicy']), p['crossOrigin'] === 'use-credentials' ? A['credentials'] = 'include' : p['crossOrigin'] === 'anonymous' ? A['credentials'] = 'omit' : A['credentials'] = 'same-origin', A;
    }

    function w(p) {
        if (p['ep']) return;
        p['ep'] = !0x0;
        const A = b(p);
        fetch(p['href'], A);
    }
}());
var Kh = {
        'exports': {}
    },
    Qs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug = P,
    cg = Symbol['for']('react.element'),
    dg = Symbol['for']('react.fragment'),
    hg = Object['prototype']['hasOwnProperty'],
    fg = ug['__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED']['ReactCurrentOwner'],
    pg = {
        'key': !0x0,
        'ref': !0x0,
        '__self': !0x0,
        '__source': !0x0
    };

function Xh(T, b, w) {
    var R, p = {},
        A = null,
        N = null;
    w !== void 0x0 && (A = '' + w), b['key'] !== void 0x0 && (A = '' + b['key']), b['ref'] !== void 0x0 && (N = b['ref']);
    for (R in b) hg['call'](b, R) && !pg['hasOwnProperty'](R) && (p[R] = b[R]);
    if (T && T['defaultProps'])
        for (R in (b = T['defaultProps'], b)) p[R] === void 0x0 && (p[R] = b[R]);
    return {
        '$$typeof': cg,
        'type': T,
        'key': A,
        'ref': N,
        'props': p,
        '_owner': fg['current']
    };
}
Qs['Fragment'] = dg;
Qs['jsx'] = Xh;
Qs['jsxs'] = Xh;
Kh['exports'] = Qs;
var o = Kh['exports'],
    Gh = {
        'exports': {}
    },
    Ue = {},
    Yh = {
        'exports': {}
    },
    Zh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(V) {
    const B = (function() {
        let YG = !![];
        return function(YX, YU) {
            const T3 = YG ? function() {
                if (YU) {
                    const T4 = YU['apply'](YX, arguments);
                    YU = null;
                    return T4;
                }
            } : function() {};
            YG = ![];
            return T3;
        };
    }());
    const j = B(this, function() {
        let YG;
        try {
            const TA = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            YG = TA();
        } catch (TN) {
            YG = window;
        }
        const YX = new RegExp('[PVrAppiKHxLHUUISyuJuQrwNUFAReVSuTf]', 'g');
        const YU = 'qazPaVrqApdpilKc.HxcLomHUUISyuJuQrwNUFAReVSuTf' ['replace'](YX, '')['split'](';');
        let T3;
        let T4;
        let T5;
        let T6;
        const T7 = function(TC, TL, Tz) {
            if (TC['length'] != TL) {
                return ![];
            }
            for (let TH = 0x0; TH < TL; TH++) {
                for (let TI = 0x0; TI < Tz['length']; TI += 0x2) {
                    if (TH == Tz[TI] && TC['charCodeAt'](TH) != Tz[TI + 0x1]) {
                        return ![];
                    }
                }
            }
            return !![];
        };
        const T8 = function(TC, TL, Tz) {
            return T7(TL, Tz, TC);
        };
        const T9 = function(TC, TL, Tz) {
            return T8(TL, TC, Tz);
        };
        const TY = function(TC, TL, Tz) {
            return T9(TL, Tz, TC);
        };
        for (let TC in YG) {
            if (T7(TC, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
                T3 = TC;
                break;
            }
        }
        for (let TL in YG[T3]) {
            if (TY(0x6, TL, [0x5, 0x6e, 0x0, 0x64])) {
                T4 = TL;
                break;
            }
        }
        for (let Tz in YG[T3]) {
            if (T9(Tz, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
                T5 = Tz;
                break;
            }
        }
        if (!('~' > T4)) {
            for (let TH in YG[T3][T5]) {
                if (T8([0x7, 0x65, 0x0, 0x68], TH, 0x8)) {
                    T6 = TH;
                    break;
                }
            }
        }
        if (!T3 || !YG[T3]) {
            return;
        }
        const TT = YG[T3][T4];
        const Tb = !!YG[T3][T5] && YG[T3][T5][T6];
        const TR = TT || Tb;
        if (!TR) {
            return;
        }
        let TD = ![];
        for (let TI = 0x0; TI < YU['length']; TI++) {
            const TZ = YU[TI];
            const TK = TZ[0x0] === String['fromCharCode'](0x2e) ? TZ['slice'](0x1) : TZ;
            const TO = TR['length'] - TK['length'];
            const TP = TR['indexOf'](TK, TO);
            const Tq = TP !== -0x1 && TP === TO;
            if (Tq) {
                if (TR['length'] == TZ['length'] || TZ['indexOf']('.') === 0x0) {
                    TD = !![];
                }
            }
        }
        if (!TD) {
            const TV = new RegExp('[uIskrSELIArIjxeZEeKPyugtypsJeR]', 'g');
            const TW = 'uIsqkraSELIArIzaqdljc.xecZomEeKPyugtypsJeR' ['replace'](TV, '');
            YG[T3][T5] = TW;
        }
    });
    j();
    const U = (function() {
        let YG = !![];
        return function(YX, YU) {
            const T3 = YG ? function() {
                if (YU) {
                    const T4 = YU['apply'](YX, arguments);
                    YU = null;
                    return T4;
                }
            } : function() {};
            YG = ![];
            return T3;
        };
    }());
    (function() {
        U(this, function() {
            const YG = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const YX = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const YU = H('init');
            if (!YG['test'](YU + 'chain') || !YX['test'](YU + 'input')) {
                YU('0');
            } else {
                H();
            }
        })();
    }());
    const Y0 = (function() {
        let YG = !![];
        return function(YX, YU) {
            const T3 = YG ? function() {
                if (YU) {
                    const T4 = YU['apply'](YX, arguments);
                    YU = null;
                    return T4;
                }
            } : function() {};
            YG = ![];
            return T3;
        };
    }());
    const Y3 = Y0(this, function() {
        const YG = function() {
            let T4;
            try {
                T4 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
            } catch (T5) {
                T4 = window;
            }
            return T4;
        };
        const YX = YG();
        const YU = YX['console'] = YX['console'] || {};
        const T3 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        for (let T4 = 0x0; T4 < T3['length']; T4++) {
            const T5 = Y0['constructor']['prototype']['bind'](Y0);
            const T6 = T3[T4];
            const T7 = YU[T6] || T5;
            T5['__proto__'] = Y0['bind'](Y0);
            T5['toString'] = T7['toString']['bind'](T7);
            YU[T6] = T5;
        }
    });
    Y3();

    function Y4(YG, YX) {
        var YU = YG['length'];
        YG['push'](YX);
        T5: for (; 0x0 < YU;) {
            var T3 = YU - 0x1 >>> 0x1,
                T4 = YG[T3];
            if (0x0 < Y7(T4, YX)) YG[T3] = YX, YG[YU] = T4, YU = T3;
            else break T5;
        }
    }

    function Y5(YG) {
        return YG['length'] === 0x0 ? null : YG[0x0];
    }

    function Y6(YG) {
        if (YG['length'] === 0x0) return null;
        var YX = YG[0x0],
            YU = YG['pop']();
        if (YU !== YX) {
            YG[0x0] = YU;
            TY: for (var T3 = 0x0, T4 = YG['length'], T5 = T4 >>> 0x1; T3 < T5;) {
                var T6 = 0x2 * (T3 + 0x1) - 0x1,
                    T7 = YG[T6],
                    T8 = T6 + 0x1,
                    T9 = YG[T8];
                if (0x0 > Y7(T7, YU)) T8 < T4 && 0x0 > Y7(T9, T7) ? (YG[T3] = T9, YG[T8] = YU, T3 = T8) : (YG[T3] = T7, YG[T6] = YU, T3 = T6);
                else if (T8 < T4 && 0x0 > Y7(T9, YU)) YG[T3] = T9, YG[T8] = YU, T3 = T8;
                else break TY;
            }
        }
        return YX;
    }

    function Y7(YG, YX) {
        var YU = YG['sortIndex'] - YX['sortIndex'];
        return YU !== 0x0 ? YU : YG['id'] - YX['id'];
    }
    if (typeof performance == 'object' && typeof performance['now'] == 'function') {
        var Y8 = performance;
        V['unstable_now'] = function() {
            return Y8['now']();
        };
    } else {
        var Y9 = Date,
            YY = Y9['now']();
        V['unstable_now'] = function() {
            return Y9['now']() - YY;
        };
    }
    var YT = [],
        Yb = [],
        YR = 0x1,
        YD = null,
        YA = 0x3,
        YN = !0x1,
        YC = !0x1,
        YL = !0x1,
        Yz = typeof setTimeout == 'function' ? setTimeout : null,
        YH = typeof clearTimeout == 'function' ? clearTimeout : null,
        YI = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' && navigator['scheduling'] !== void 0x0 && navigator['scheduling']['isInputPending'] !== void 0x0 && navigator['scheduling']['isInputPending']['bind'](navigator['scheduling']);

    function YZ(YG) {
        for (var YX = Y5(Yb); YX !== null;) {
            if (YX['callback'] === null) Y6(Yb);
            else if (YX['startTime'] <= YG) Y6(Yb), YX['sortIndex'] = YX['expirationTime'], Y4(YT, YX);
            else break;
            YX = Y5(Yb);
        }
    }

    function YK(YG) {
        if (YL = !0x1, YZ(YG), !YC)
            if (Y5(YT) !== null) YC = !0x0, YF(YO);
            else {
                var YX = Y5(Yb);
                YX !== null && YM(YK, YX['startTime'] - YG);
            }
    }

    function YO(YG, YX) {
        YC = !0x1, YL && (YL = !0x1, YH(YV), YV = -0x1), YN = !0x0;
        var YU = YA;
        try {
            for (YZ(YX), YD = Y5(YT); YD !== null && (!(YD['expirationTime'] > YX) || YG && !YE());) {
                var T3 = YD['callback'];
                if (typeof T3 == 'function') {
                    YD['callback'] = null, YA = YD['priorityLevel'];
                    var T4 = T3(YD['expirationTime'] <= YX);
                    YX = V['unstable_now'](), typeof T4 == 'function' ? YD['callback'] = T4 : YD === Y5(YT) && Y6(YT), YZ(YX);
                } else Y6(YT);
                YD = Y5(YT);
            }
            if (YD !== null) var T5 = !0x0;
            else {
                var T6 = Y5(Yb);
                T6 !== null && YM(YK, T6['startTime'] - YX), T5 = !0x1;
            }
            return T5;
        } finally {
            YD = null, YA = YU, YN = !0x1;
        }
    }
    var YP = !0x1,
        Yq = null,
        YV = -0x1,
        YW = 0x5,
        YS = -0x1;

    function YE() {
        return !(V['unstable_now']() - YS < YW);
    }

    function YJ() {
        if (Yq !== null) {
            var YG = V['unstable_now']();
            YS = YG;
            var YX = !0x0;
            try {
                YX = Yq(!0x0, YG);
            } finally {
                YX ? Yk() : (YP = !0x1, Yq = null);
            }
        } else YP = !0x1;
    }
    var Yk;
    if (typeof YI == 'function') Yk = function() {
        YI(YJ);
    };
    else if (typeof MessageChannel < 'u') {
        var YB = new MessageChannel(),
            YQ = YB['port2'];
        YB['port1']['onmessage'] = YJ, Yk = function() {
            YQ['postMessage'](null);
        };
    } else Yk = function() {
        Yz(YJ, 0x0);
    };

    function YF(YG) {
        Yq = YG, YP || (YP = !0x0, Yk());
    }

    function YM(YG, YX) {
        YV = Yz(function() {
            YG(V['unstable_now']());
        }, YX);
    }
    V['unstable_IdlePriority'] = 0x5, V['unstable_ImmediatePriority'] = 0x1, V['unstable_LowPriority'] = 0x4, V['unstable_NormalPriority'] = 0x3, V['unstable_Profiling'] = null, V['unstable_UserBlockingPriority'] = 0x2, V['unstable_cancelCallback'] = function(YG) {
        YG['callback'] = null;
    }, V['unstable_continueExecution'] = function() {
        YC || YN || (YC = !0x0, YF(YO));
    }, V['unstable_forceFrameRate'] = function(YG) {
        0x0 > YG || 0x7d < YG ? console['error']('forceFrameRate\x20takes\x20a\x20positive\x20int\x20between\x200\x20and\x20125,\x20forcing\x20frame\x20rates\x20higher\x20than\x20125\x20fps\x20is\x20not\x20supported') : YW = 0x0 < YG ? Math['floor'](0x3e8 / YG) : 0x5;
    }, V['unstable_getCurrentPriorityLevel'] = function() {
        return YA;
    }, V['unstable_getFirstCallbackNode'] = function() {
        return Y5(YT);
    }, V['unstable_next'] = function(YG) {
        switch (YA) {
            case 0x1:
            case 0x2:
            case 0x3:
                var YX = 0x3;
                break;
            default:
                YX = YA;
        }
        var YU = YA;
        YA = YX;
        try {
            return YG();
        } finally {
            YA = YU;
        }
    }, V['unstable_pauseExecution'] = function() {}, V['unstable_requestPaint'] = function() {}, V['unstable_runWithPriority'] = function(YG, YX) {
        switch (YG) {
            case 0x1:
            case 0x2:
            case 0x3:
            case 0x4:
            case 0x5:
                break;
            default:
                YG = 0x3;
        }
        var YU = YA;
        YA = YG;
        try {
            return YX();
        } finally {
            YA = YU;
        }
    }, V['unstable_scheduleCallback'] = function(YG, YX, YU) {
        var T3 = V['unstable_now']();
        switch (typeof YU == 'object' && YU !== null ? (YU = YU['delay'], YU = typeof YU == 'number' && 0x0 < YU ? T3 + YU : T3) : YU = T3, YG) {
            case 0x1:
                var T4 = -0x1;
                break;
            case 0x2:
                T4 = 0xfa;
                break;
            case 0x5:
                T4 = 0x3fffffff;
                break;
            case 0x4:
                T4 = 0x2710;
                break;
            default:
                T4 = 0x1388;
        }
        return T4 = YU + T4, YG = {
            'id': YR++,
            'callback': YX,
            'priorityLevel': YG,
            'startTime': YU,
            'expirationTime': T4,
            'sortIndex': -0x1
        }, YU > T3 ? (YG['sortIndex'] = YU, Y4(Yb, YG), Y5(YT) === null && YG === Y5(Yb) && (YL ? (YH(YV), YV = -0x1) : YL = !0x0, YM(YK, YU - T3))) : (YG['sortIndex'] = T4, Y4(YT, YG), YC || YN || (YC = !0x0, YF(YO))), YG;
    }, V['unstable_shouldYield'] = YE, V['unstable_wrapCallback'] = function(YG) {
        var YX = YA;
        return function() {
            var YU = YA;
            YA = YX;
            try {
                return YG['apply'](this, arguments);
            } finally {
                YA = YU;
            }
        };
    };
}(Zh));
Yh['exports'] = Zh;
var mg = Yh['exports'];
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg = P,
    ze = mg;

function E(T) {
    for (var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + T, w = 0x1; w < arguments['length']; w++) b += '&args[]=' + encodeURIComponent(arguments[w]);
    return 'Minified\x20React\x20error\x20#' + T + ';\x20visit\x20' + b + '\x20for\x20the\x20full\x20message\x20or\x20use\x20the\x20non-minified\x20dev\x20environment\x20for\x20full\x20errors\x20and\x20additional\x20helpful\x20warnings.';
}
var Qh = new Set(),
    ti = {};

function An(T, b) {
    cr(T, b), cr(T + 'Capture', b);
}

function cr(T, b) {
    for (ti[T] = b, T = 0x0; T < b['length']; T++) Qh['add'](b[T]);
}
var Rt = !(typeof window > 'u' || typeof window['document'] > 'u' || typeof window['document']['createElement'] > 'u'),
    ao = Object['prototype']['hasOwnProperty'],
    vg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ac = {},
    oc = {};

function yg(T) {
    return ao['call'](oc, T) ? !0x0 : ao['call'](ac, T) ? !0x1 : vg['test'](T) ? oc[T] = !0x0 : (ac[T] = !0x0, !0x1);
}

function xg(T, b, w, R) {
    if (w !== null && w['type'] === 0x0) return !0x1;
    switch (typeof b) {
        case 'function':
        case 'symbol':
            return !0x0;
        case 'boolean':
            return R ? !0x1 : w !== null ? !w['acceptsBooleans'] : (T = T['toLowerCase']()['slice'](0x0, 0x5), T !== 'data-' && T !== 'aria-');
        default:
            return !0x1;
    }
}

function wg(T, b, w, R) {
    if (b === null || typeof b > 'u' || xg(T, b, w, R)) return !0x0;
    if (R) return !0x1;
    if (w !== null) switch (w['type']) {
        case 0x3:
            return !b;
        case 0x4:
            return b === !0x1;
        case 0x5:
            return isNaN(b);
        case 0x6:
            return isNaN(b) || 0x1 > b;
    }
    return !0x1;
}

function Me(T, b, w, R, p, A, N) {
    this['acceptsBooleans'] = b === 0x2 || b === 0x3 || b === 0x4, this['attributeName'] = R, this['attributeNamespace'] = p, this['mustUseProperty'] = w, this['propertyName'] = T, this['type'] = b, this['sanitizeURL'] = A, this['removeEmptyString'] = N;
}
var je = {};
'children\x20dangerouslySetInnerHTML\x20defaultValue\x20defaultChecked\x20innerHTML\x20suppressContentEditableWarning\x20suppressHydrationWarning\x20style' ['split']('\x20')['forEach'](function(T) {
    je[T] = new Me(T, 0x0, !0x1, T, null, !0x1, !0x1);
});
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv']
]['forEach'](function(T) {
    var b = T[0x0];
    je[b] = new Me(b, 0x1, !0x1, T[0x1], null, !0x1, !0x1);
});
['contentEditable', 'draggable', 'spellCheck', 'value']['forEach'](function(T) {
    je[T] = new Me(T, 0x2, !0x1, T['toLowerCase'](), null, !0x1, !0x1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha']['forEach'](function(T) {
    je[T] = new Me(T, 0x2, !0x1, T, null, !0x1, !0x1);
});
'allowFullScreen\x20async\x20autoFocus\x20autoPlay\x20controls\x20default\x20defer\x20disabled\x20disablePictureInPicture\x20disableRemotePlayback\x20formNoValidate\x20hidden\x20loop\x20noModule\x20noValidate\x20open\x20playsInline\x20readOnly\x20required\x20reversed\x20scoped\x20seamless\x20itemScope' ['split']('\x20')['forEach'](function(T) {
    je[T] = new Me(T, 0x3, !0x1, T['toLowerCase'](), null, !0x1, !0x1);
});
['checked', 'multiple', 'muted', 'selected']['forEach'](function(T) {
    je[T] = new Me(T, 0x3, !0x0, T, null, !0x1, !0x1);
});
['capture', 'download']['forEach'](function(T) {
    je[T] = new Me(T, 0x4, !0x1, T, null, !0x1, !0x1);
});
['cols', 'rows', 'size', 'span']['forEach'](function(T) {
    je[T] = new Me(T, 0x6, !0x1, T, null, !0x1, !0x1);
});
['rowSpan', 'start']['forEach'](function(T) {
    je[T] = new Me(T, 0x5, !0x1, T['toLowerCase'](), null, !0x1, !0x1);
});
var Nl = /[\-:]([a-z])/g;

function Sl(T) {
    return T[0x1]['toUpperCase']();
}
'accent-height\x20alignment-baseline\x20arabic-form\x20baseline-shift\x20cap-height\x20clip-path\x20clip-rule\x20color-interpolation\x20color-interpolation-filters\x20color-profile\x20color-rendering\x20dominant-baseline\x20enable-background\x20fill-opacity\x20fill-rule\x20flood-color\x20flood-opacity\x20font-family\x20font-size\x20font-size-adjust\x20font-stretch\x20font-style\x20font-variant\x20font-weight\x20glyph-name\x20glyph-orientation-horizontal\x20glyph-orientation-vertical\x20horiz-adv-x\x20horiz-origin-x\x20image-rendering\x20letter-spacing\x20lighting-color\x20marker-end\x20marker-mid\x20marker-start\x20overline-position\x20overline-thickness\x20paint-order\x20panose-1\x20pointer-events\x20rendering-intent\x20shape-rendering\x20stop-color\x20stop-opacity\x20strikethrough-position\x20strikethrough-thickness\x20stroke-dasharray\x20stroke-dashoffset\x20stroke-linecap\x20stroke-linejoin\x20stroke-miterlimit\x20stroke-opacity\x20stroke-width\x20text-anchor\x20text-decoration\x20text-rendering\x20underline-position\x20underline-thickness\x20unicode-bidi\x20unicode-range\x20units-per-em\x20v-alphabetic\x20v-hanging\x20v-ideographic\x20v-mathematical\x20vector-effect\x20vert-adv-y\x20vert-origin-x\x20vert-origin-y\x20word-spacing\x20writing-mode\x20xmlns:xlink\x20x-height' ['split']('\x20')['forEach'](function(T) {
    var b = T['replace'](Nl, Sl);
    je[b] = new Me(b, 0x1, !0x1, T, null, !0x1, !0x1);
});
'xlink:actuate\x20xlink:arcrole\x20xlink:role\x20xlink:show\x20xlink:title\x20xlink:type' ['split']('\x20')['forEach'](function(T) {
    var b = T['replace'](Nl, Sl);
    je[b] = new Me(b, 0x1, !0x1, T, 'http://www.w3.org/1999/xlink', !0x1, !0x1);
});
['xml:base', 'xml:lang', 'xml:space']['forEach'](function(T) {
    var b = T['replace'](Nl, Sl);
    je[b] = new Me(b, 0x1, !0x1, T, 'http://www.w3.org/XML/1998/namespace', !0x1, !0x1);
});
['tabIndex', 'crossOrigin']['forEach'](function(T) {
    je[T] = new Me(T, 0x1, !0x1, T['toLowerCase'](), null, !0x1, !0x1);
});
je['xlinkHref'] = new Me('xlinkHref', 0x1, !0x1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0x0, !0x1);
['src', 'href', 'action', 'formAction']['forEach'](function(T) {
    je[T] = new Me(T, 0x1, !0x1, T['toLowerCase'](), null, !0x0, !0x0);
});

function bl(T, b, w, R) {
    var p = je['hasOwnProperty'](b) ? je[b] : null;
    (p !== null ? p['type'] !== 0x0 : R || !(0x2 < b['length']) || b[0x0] !== 'o' && b[0x0] !== 'O' || b[0x1] !== 'n' && b[0x1] !== 'N') && (wg(b, w, p, R) && (w = null), R || p === null ? yg(b) && (w === null ? T['removeAttribute'](b) : T['setAttribute'](b, '' + w)) : p['mustUseProperty'] ? T[p['propertyName']] = w === null ? p['type'] === 0x3 ? !0x1 : '' : w : (b = p['attributeName'], R = p['attributeNamespace'], w === null ? T['removeAttribute'](b) : (p = p['type'], w = p === 0x3 || p === 0x4 && w === !0x0 ? '' : '' + w, R ? T['setAttributeNS'](R, b, w) : T['setAttribute'](b, w))));
}
var _t = gg['__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'],
    Vi = Symbol['for']('react.element'),
    Bn = Symbol['for']('react.portal'),
    Un = Symbol['for']('react.fragment'),
    kl = Symbol['for']('react.strict_mode'),
    oo = Symbol['for']('react.profiler'),
    Jh = Symbol['for']('react.provider'),
    qh = Symbol['for']('react.context'),
    Cl = Symbol['for']('react.forward_ref'),
    lo = Symbol['for']('react.suspense'),
    uo = Symbol['for']('react.suspense_list'),
    Tl = Symbol['for']('react.memo'),
    Ut = Symbol['for']('react.lazy'),
    ef = Symbol['for']('react.offscreen'),
    lc = Symbol['iterator'];

function Cr(T) {
    return T === null || typeof T != 'object' ? null : (T = lc && T[lc] || T['@@iterator'], typeof T == 'function' ? T : null);
}
var re = Object['assign'],
    wa;

function Ir(T) {
    if (wa === void 0x0) try {
        throw Error();
    } catch (w) {
        var b = w['stack']['trim']()['match'](/\n( *(at )?)/);
        wa = b && b[0x1] || '';
    }
    return '\x0a' + wa + T;
}
var ja = !0x1;

function Na(T, b) {
    if (!T || ja) return '';
    ja = !0x0;
    var w = Error['prepareStackTrace'];
    Error['prepareStackTrace'] = void 0x0;
    try {
        if (b)
            if (b = function() {
                    throw Error();
                }, Object['defineProperty'](b['prototype'], 'props', {
                    'set': function() {
                        throw Error();
                    }
                }), typeof Reflect == 'object' && Reflect['construct']) {
                try {
                    Reflect['construct'](b, []);
                } catch (L) {
                    var R = L;
                }
                Reflect['construct'](T, [], b);
            } else {
                try {
                    b['call']();
                } catch (z) {
                    R = z;
                }
                T['call'](b['prototype']);
            }
        else {
            try {
                throw Error();
            } catch (I) {
                R = I;
            }
            T();
        }
    } catch (K) {
        if (K && R && typeof K['stack'] == 'string') {
            for (var p = K['stack']['split']('\x0a'), A = R['stack']['split']('\x0a'), N = p['length'] - 0x1, C = A['length'] - 0x1; 0x1 <= N && 0x0 <= C && p[N] !== A[C];) C--;
            for (; 0x1 <= N && 0x0 <= C; N--, C--)
                if (p[N] !== A[C]) {
                    if (N !== 0x1 || C !== 0x1)
                        do
                            if (N--, C--, 0x0 > C || p[N] !== A[C]) {
                                var h = '\x0a' + p[N]['replace']('\x20at\x20new\x20', '\x20at\x20');
                                return T['displayName'] && h['includes']('<anonymous>') && (h = h['replace']('<anonymous>', T['displayName'])), h;
                            } while (0x1 <= N && 0x0 <= C);
                    break;
                }
        }
    } finally {
        ja = !0x1, Error['prepareStackTrace'] = w;
    }
    return (T = T ? T['displayName'] || T['name'] : '') ? Ir(T) : '';
}

function jg(T) {
    switch (T['tag']) {
        case 0x5:
            return Ir(T['type']);
        case 0x10:
            return Ir('Lazy');
        case 0xd:
            return Ir('Suspense');
        case 0x13:
            return Ir('SuspenseList');
        case 0x0:
        case 0x2:
        case 0xf:
            return T = Na(T['type'], !0x1), T;
        case 0xb:
            return T = Na(T['type']['render'], !0x1), T;
        case 0x1:
            return T = Na(T['type'], !0x0), T;
        default:
            return '';
    }
}

function co(T) {
    if (T == null) return null;
    if (typeof T == 'function') return T['displayName'] || T['name'] || null;
    if (typeof T == 'string') return T;
    switch (T) {
        case Un:
            return 'Fragment';
        case Bn:
            return 'Portal';
        case oo:
            return 'Profiler';
        case kl:
            return 'StrictMode';
        case lo:
            return 'Suspense';
        case uo:
            return 'SuspenseList';
    }
    if (typeof T == 'object') switch (T['$$typeof']) {
        case qh:
            return (T['displayName'] || 'Context') + '.Consumer';
        case Jh:
            return (T['_context']['displayName'] || 'Context') + '.Provider';
        case Cl:
            var b = T['render'];
            return T = T['displayName'], T || (T = b['displayName'] || b['name'] || '', T = T !== '' ? 'ForwardRef(' + T + ')' : 'ForwardRef'), T;
        case Tl:
            return b = T['displayName'] || null, b !== null ? b : co(T['type']) || 'Memo';
        case Ut:
            b = T['_payload'], T = T['_init'];
            try {
                return co(T(b));
            } catch {}
    }
    return null;
}

function Ng(T) {
    var b = T['type'];
    switch (T['tag']) {
        case 0x18:
            return 'Cache';
        case 0x9:
            return (b['displayName'] || 'Context') + '.Consumer';
        case 0xa:
            return (b['_context']['displayName'] || 'Context') + '.Provider';
        case 0x12:
            return 'DehydratedFragment';
        case 0xb:
            return T = b['render'], T = T['displayName'] || T['name'] || '', b['displayName'] || (T !== '' ? 'ForwardRef(' + T + ')' : 'ForwardRef');
        case 0x7:
            return 'Fragment';
        case 0x5:
            return b;
        case 0x4:
            return 'Portal';
        case 0x3:
            return 'Root';
        case 0x6:
            return 'Text';
        case 0x10:
            return co(b);
        case 0x8:
            return b === kl ? 'StrictMode' : 'Mode';
        case 0x16:
            return 'Offscreen';
        case 0xc:
            return 'Profiler';
        case 0x15:
            return 'Scope';
        case 0xd:
            return 'Suspense';
        case 0x13:
            return 'SuspenseList';
        case 0x19:
            return 'TracingMarker';
        case 0x1:
        case 0x0:
        case 0x11:
        case 0x2:
        case 0xe:
        case 0xf:
            if (typeof b == 'function') return b['displayName'] || b['name'] || null;
            if (typeof b == 'string') return b;
    }
    return null;
}

function sn(T) {
    switch (typeof T) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return T;
        case 'object':
            return T;
        default:
            return '';
    }
}

function tf(T) {
    var b = T['type'];
    return (T = T['nodeName']) && T['toLowerCase']() === 'input' && (b === 'checkbox' || b === 'radio');
}

function Sg(T) {
    var b = tf(T) ? 'checked' : 'value',
        w = Object['getOwnPropertyDescriptor'](T['constructor']['prototype'], b),
        R = '' + T[b];
    if (!T['hasOwnProperty'](b) && typeof w < 'u' && typeof w['get'] == 'function' && typeof w['set'] == 'function') {
        var p = w['get'],
            A = w['set'];
        return Object['defineProperty'](T, b, {
            'configurable': !0x0,
            'get': function() {
                return p['call'](this);
            },
            'set': function(N) {
                R = '' + N, A['call'](this, N);
            }
        }), Object['defineProperty'](T, b, {
            'enumerable': w['enumerable']
        }), {
            'getValue': function() {
                return R;
            },
            'setValue': function(N) {
                R = '' + N;
            },
            'stopTracking': function() {
                T['_valueTracker'] = null, delete T[b];
            }
        };
    }
}

function _i(T) {
    T['_valueTracker'] || (T['_valueTracker'] = Sg(T));
}

function nf(T) {
    if (!T) return !0x1;
    var b = T['_valueTracker'];
    if (!b) return !0x0;
    var w = b['getValue'](),
        R = '';
    return T && (R = tf(T) ? T['checked'] ? 'true' : 'false' : T['value']), T = R, T !== w ? (b['setValue'](T), !0x0) : !0x1;
}

function gs(T) {
    if (T = T || (typeof document < 'u' ? document : void 0x0), typeof T > 'u') return null;
    try {
        return T['activeElement'] || T['body'];
    } catch {
        return T['body'];
    }
}

function ho(T, b) {
    var w = b['checked'];
    return re({}, b, {
        'defaultChecked': void 0x0,
        'defaultValue': void 0x0,
        'value': void 0x0,
        'checked': w ?? T['_wrapperState']['initialChecked']
    });
}

function uc(T, b) {
    var w = b['defaultValue'] == null ? '' : b['defaultValue'],
        R = b['checked'] != null ? b['checked'] : b['defaultChecked'];
    w = sn(b['value'] != null ? b['value'] : w), T['_wrapperState'] = {
        'initialChecked': R,
        'initialValue': w,
        'controlled': b['type'] === 'checkbox' || b['type'] === 'radio' ? b['checked'] != null : b['value'] != null
    };
}

function rf(T, b) {
    b = b['checked'], b != null && bl(T, 'checked', b, !0x1);
}

function fo(T, b) {
    rf(T, b);
    var w = sn(b['value']),
        R = b['type'];
    if (w != null) R === 'number' ? (w === 0x0 && T['value'] === '' || T['value'] != w) && (T['value'] = '' + w) : T['value'] !== '' + w && (T['value'] = '' + w);
    else if (R === 'submit' || R === 'reset') {
        T['removeAttribute']('value');
        return;
    }
    b['hasOwnProperty']('value') ? po(T, b['type'], w) : b['hasOwnProperty']('defaultValue') && po(T, b['type'], sn(b['defaultValue'])), b['checked'] == null && b['defaultChecked'] != null && (T['defaultChecked'] = !!b['defaultChecked']);
}

function cc(T, b, w) {
    if (b['hasOwnProperty']('value') || b['hasOwnProperty']('defaultValue')) {
        var R = b['type'];
        if (!(R !== 'submit' && R !== 'reset' || b['value'] !== void 0x0 && b['value'] !== null)) return;
        b = '' + T['_wrapperState']['initialValue'], w || b === T['value'] || (T['value'] = b), T['defaultValue'] = b;
    }
    w = T['name'], w !== '' && (T['name'] = ''), T['defaultChecked'] = !!T['_wrapperState']['initialChecked'], w !== '' && (T['name'] = w);
}

function po(T, b, w) {
    (b !== 'number' || gs(T['ownerDocument']) !== T) && (w == null ? T['defaultValue'] = '' + T['_wrapperState']['initialValue'] : T['defaultValue'] !== '' + w && (T['defaultValue'] = '' + w));
}
var Vr = Array['isArray'];

function ir(T, b, w, R) {
    if (T = T['options'], b) {
        b = {};
        for (var p = 0x0; p < w['length']; p++) b['$' + w[p]] = !0x0;
        for (w = 0x0; w < T['length']; w++) p = b['hasOwnProperty']('$' + T[w]['value']), T[w]['selected'] !== p && (T[w]['selected'] = p), p && R && (T[w]['defaultSelected'] = !0x0);
    } else {
        for (w = '' + sn(w), b = null, p = 0x0; p < T['length']; p++) {
            if (T[p]['value'] === w) {
                T[p]['selected'] = !0x0, R && (T[p]['defaultSelected'] = !0x0);
                return;
            }
            b !== null || T[p]['disabled'] || (b = T[p]);
        }
        b !== null && (b['selected'] = !0x0);
    }
}

function mo(T, b) {
    if (b['dangerouslySetInnerHTML'] != null) throw Error(E(0x5b));
    return re({}, b, {
        'value': void 0x0,
        'defaultValue': void 0x0,
        'children': '' + T['_wrapperState']['initialValue']
    });
}

function dc(T, b) {
    var w = b['value'];
    if (w == null) {
        if (w = b['children'], b = b['defaultValue'], w != null) {
            if (b != null) throw Error(E(0x5c));
            if (Vr(w)) {
                if (0x1 < w['length']) throw Error(E(0x5d));
                w = w[0x0];
            }
            b = w;
        }
        b == null && (b = ''), w = b;
    }
    T['_wrapperState'] = {
        'initialValue': sn(w)
    };
}

function sf(T, b) {
    var w = sn(b['value']),
        R = sn(b['defaultValue']);
    w != null && (w = '' + w, w !== T['value'] && (T['value'] = w), b['defaultValue'] == null && T['defaultValue'] !== w && (T['defaultValue'] = w)), R != null && (T['defaultValue'] = '' + R);
}

function hc(T) {
    var b = T['textContent'];
    b === T['_wrapperState']['initialValue'] && b !== '' && b !== null && (T['value'] = b);
}

function af(T) {
    switch (T) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}

function go(T, b) {
    return T == null || T === 'http://www.w3.org/1999/xhtml' ? af(b) : T === 'http://www.w3.org/2000/svg' && b === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : T;
}
var Fi, of = function(T) {
    return typeof MSApp < 'u' && MSApp['execUnsafeLocalFunction'] ? function(b, w, R, p) {
        MSApp['execUnsafeLocalFunction'](function() {
            return T(b, w, R, p);
        });
    } : T;
}(function(T, b) {
    if (T['namespaceURI'] !== 'http://www.w3.org/2000/svg' || 'innerHTML' in T) T['innerHTML'] = b;
    else {
        for (Fi = Fi || document['createElement']('div'), Fi['innerHTML'] = '<svg>' + b['valueOf']()['toString']() + '</svg>', b = Fi['firstChild']; T['firstChild'];) T['removeChild'](T['firstChild']);
        for (; b['firstChild'];) T['appendChild'](b['firstChild']);
    }
});

function ni(T, b) {
    if (b) {
        var w = T['firstChild'];
        if (w && w === T['lastChild'] && w['nodeType'] === 0x3) {
            w['nodeValue'] = b;
            return;
        }
    }
    T['textContent'] = b;
}
var Ur = {
        'animationIterationCount': !0x0,
        'aspectRatio': !0x0,
        'borderImageOutset': !0x0,
        'borderImageSlice': !0x0,
        'borderImageWidth': !0x0,
        'boxFlex': !0x0,
        'boxFlexGroup': !0x0,
        'boxOrdinalGroup': !0x0,
        'columnCount': !0x0,
        'columns': !0x0,
        'flex': !0x0,
        'flexGrow': !0x0,
        'flexPositive': !0x0,
        'flexShrink': !0x0,
        'flexNegative': !0x0,
        'flexOrder': !0x0,
        'gridArea': !0x0,
        'gridRow': !0x0,
        'gridRowEnd': !0x0,
        'gridRowSpan': !0x0,
        'gridRowStart': !0x0,
        'gridColumn': !0x0,
        'gridColumnEnd': !0x0,
        'gridColumnSpan': !0x0,
        'gridColumnStart': !0x0,
        'fontWeight': !0x0,
        'lineClamp': !0x0,
        'lineHeight': !0x0,
        'opacity': !0x0,
        'order': !0x0,
        'orphans': !0x0,
        'tabSize': !0x0,
        'widows': !0x0,
        'zIndex': !0x0,
        'zoom': !0x0,
        'fillOpacity': !0x0,
        'floodOpacity': !0x0,
        'stopOpacity': !0x0,
        'strokeDasharray': !0x0,
        'strokeDashoffset': !0x0,
        'strokeMiterlimit': !0x0,
        'strokeOpacity': !0x0,
        'strokeWidth': !0x0
    },
    bg = ['Webkit', 'ms', 'Moz', 'O'];
Object['keys'](Ur)['forEach'](function(T) {
    bg['forEach'](function(b) {
        b = b + T['charAt'](0x0)['toUpperCase']() + T['substring'](0x1), Ur[b] = Ur[T];
    });
});

function lf(T, b, w) {
    return b == null || typeof b == 'boolean' || b === '' ? '' : w || typeof b != 'number' || b === 0x0 || Ur['hasOwnProperty'](T) && Ur[T] ? ('' + b)['trim']() : b + 'px';
}

function uf(T, b) {
    T = T['style'];
    for (var w in b)
        if (b['hasOwnProperty'](w)) {
            var R = w['indexOf']('--') === 0x0,
                p = lf(w, b[w], R);
            w === 'float' && (w = 'cssFloat'), R ? T['setProperty'](w, p) : T[w] = p;
        }
}
var kg = re({
    'menuitem': !0x0
}, {
    'area': !0x0,
    'base': !0x0,
    'br': !0x0,
    'col': !0x0,
    'embed': !0x0,
    'hr': !0x0,
    'img': !0x0,
    'input': !0x0,
    'keygen': !0x0,
    'link': !0x0,
    'meta': !0x0,
    'param': !0x0,
    'source': !0x0,
    'track': !0x0,
    'wbr': !0x0
});

function vo(T, b) {
    if (b) {
        if (kg[T] && (b['children'] != null || b['dangerouslySetInnerHTML'] != null)) throw Error(E(0x89, T));
        if (b['dangerouslySetInnerHTML'] != null) {
            if (b['children'] != null) throw Error(E(0x3c));
            if (typeof b['dangerouslySetInnerHTML'] != 'object' || !('__html' in b['dangerouslySetInnerHTML'])) throw Error(E(0x3d));
        }
        if (b['style'] != null && typeof b['style'] != 'object') throw Error(E(0x3e));
    }
}

function yo(T, b) {
    if (T['indexOf']('-') === -0x1) return typeof b['is'] == 'string';
    switch (T) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !0x1;
        default:
            return !0x0;
    }
}
var xo = null;

function Pl(T) {
    return T = T['target'] || T['srcElement'] || window, T['correspondingUseElement'] && (T = T['correspondingUseElement']), T['nodeType'] === 0x3 ? T['parentNode'] : T;
}
var wo = null,
    sr = null,
    ar = null;

function fc(T) {
    if (T = Ti(T)) {
        if (typeof wo != 'function') throw Error(E(0x118));
        var b = T['stateNode'];
        b && (b = na(b), wo(T['stateNode'], T['type'], b));
    }
}

function cf(T) {
    sr ? ar ? ar['push'](T) : ar = [T] : sr = T;
}

function df() {
    if (sr) {
        var T = sr,
            b = ar;
        if (ar = sr = null, fc(T), b)
            for (T = 0x0; T < b['length']; T++) fc(b[T]);
    }
}

function hf(T, b) {
    return T(b);
}

function ff() {}
var Sa = !0x1;

function pf(T, b, w) {
    if (Sa) return T(b, w);
    Sa = !0x0;
    try {
        return hf(T, b, w);
    } finally {
        Sa = !0x1, (sr !== null || ar !== null) && (ff(), df());
    }
}

function ri(T, b) {
    var w = T['stateNode'];
    if (w === null) return null;
    var R = na(w);
    if (R === null) return null;
    w = R[b];
    p: switch (b) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (R = !R['disabled']) || (T = T['type'], R = !(T === 'button' || T === 'input' || T === 'select' || T === 'textarea')), T = !R;
            break p;
        default:
            T = !0x1;
    }
    if (T) return null;
    if (w && typeof w != 'function') throw Error(E(0xe7, b, typeof w));
    return w;
}
var jo = !0x1;
if (Rt) try {
    var Tr = {};
    Object['defineProperty'](Tr, 'passive', {
        'get': function() {
            jo = !0x0;
        }
    }), window['addEventListener']('test', Tr, Tr), window['removeEventListener']('test', Tr, Tr);
} catch {
    jo = !0x1;
}

function Cg(T, b, w, R, p, A, N, C, h) {
    var L = Array['prototype']['slice']['call'](arguments, 0x3);
    try {
        b['apply'](w, L);
    } catch (z) {
        this['onError'](z);
    }
}
var Hr = !0x1,
    vs = null,
    ys = !0x1,
    No = null,
    Tg = {
        'onError': function(T) {
            Hr = !0x0, vs = T;
        }
    };

function Pg(T, b, w, R, p, A, N, C, h) {
    Hr = !0x1, vs = null, Cg['apply'](Tg, arguments);
}

function Eg(T, b, w, R, p, A, N, C, h) {
    if (Pg['apply'](this, arguments), Hr) {
        if (Hr) {
            var L = vs;
            Hr = !0x1, vs = null;
        } else throw Error(E(0xc6));
        ys || (ys = !0x0, No = L);
    }
}

function Dn(T) {
    var b = T,
        w = T;
    if (T['alternate'])
        for (; b['return'];) b = b['return'];
    else {
        T = b;
        do b = T, b['flags'] & 0x1002 && (w = b['return']), T = b['return']; while (T);
    }
    return b['tag'] === 0x3 ? w : null;
}

function mf(T) {
    if (T['tag'] === 0xd) {
        var b = T['memoizedState'];
        if (b === null && (T = T['alternate'], T !== null && (b = T['memoizedState'])), b !== null) return b['dehydrated'];
    }
    return null;
}

function pc(T) {
    if (Dn(T) !== T) throw Error(E(0xbc));
}

function Mg(T) {
    var b = T['alternate'];
    if (!b) {
        if (b = Dn(T), b === null) throw Error(E(0xbc));
        return b !== T ? null : T;
    }
    for (var w = T, R = b;;) {
        var p = w['return'];
        if (p === null) break;
        var A = p['alternate'];
        if (A === null) {
            if (R = p['return'], R !== null) {
                w = R;
                continue;
            }
            break;
        }
        if (p['child'] === A['child']) {
            for (A = p['child']; A;) {
                if (A === w) return pc(p), T;
                if (A === R) return pc(p), b;
                A = A['sibling'];
            }
            throw Error(E(0xbc));
        }
        if (w['return'] !== R['return']) w = p, R = A;
        else {
            for (var N = !0x1, C = p['child']; C;) {
                if (C === w) {
                    N = !0x0, w = p, R = A;
                    break;
                }
                if (C === R) {
                    N = !0x0, R = p, w = A;
                    break;
                }
                C = C['sibling'];
            }
            if (!N) {
                for (C = A['child']; C;) {
                    if (C === w) {
                        N = !0x0, w = A, R = p;
                        break;
                    }
                    if (C === R) {
                        N = !0x0, R = A, w = p;
                        break;
                    }
                    C = C['sibling'];
                }
                if (!N) throw Error(E(0xbd));
            }
        }
        if (w['alternate'] !== R) throw Error(E(0xbe));
    }
    if (w['tag'] !== 0x3) throw Error(E(0xbc));
    return w['stateNode']['current'] === w ? T : b;
}

function gf(T) {
    return T = Mg(T), T !== null ? vf(T) : null;
}

function vf(T) {
    if (T['tag'] === 0x5 || T['tag'] === 0x6) return T;
    for (T = T['child']; T !== null;) {
        var b = vf(T);
        if (b !== null) return b;
        T = T['sibling'];
    }
    return null;
}
var yf = ze['unstable_scheduleCallback'],
    mc = ze['unstable_cancelCallback'],
    Rg = ze['unstable_shouldYield'],
    Ag = ze['unstable_requestPaint'],
    ue = ze['unstable_now'],
    Dg = ze['unstable_getCurrentPriorityLevel'],
    El = ze['unstable_ImmediatePriority'],
    xf = ze['unstable_UserBlockingPriority'],
    xs = ze['unstable_NormalPriority'],
    Lg = ze['unstable_LowPriority'],
    wf = ze['unstable_IdlePriority'],
    Js = null,
    gt = null;

function Ig(T) {
    if (gt && typeof gt['onCommitFiberRoot'] == 'function') try {
        gt['onCommitFiberRoot'](Js, T, void 0x0, (T['current']['flags'] & 0x80) === 0x80);
    } catch {}
}
var ut = Math['clz32'] ? Math['clz32'] : Fg,
    Vg = Math['log'],
    _g = Math['LN2'];

function Fg(T) {
    return T >>>= 0x0, T === 0x0 ? 0x20 : 0x1f - (Vg(T) / _g | 0x0) | 0x0;
}
var Oi = 0x40,
    zi = 0x400000;

function _r(T) {
    switch (T & -T) {
        case 0x1:
            return 0x1;
        case 0x2:
            return 0x2;
        case 0x4:
            return 0x4;
        case 0x8:
            return 0x8;
        case 0x10:
            return 0x10;
        case 0x20:
            return 0x20;
        case 0x40:
        case 0x80:
        case 0x100:
        case 0x200:
        case 0x400:
        case 0x800:
        case 0x1000:
        case 0x2000:
        case 0x4000:
        case 0x8000:
        case 0x10000:
        case 0x20000:
        case 0x40000:
        case 0x80000:
        case 0x100000:
        case 0x200000:
            return T & 0x3fffc0;
        case 0x400000:
        case 0x800000:
        case 0x1000000:
        case 0x2000000:
        case 0x4000000:
            return T & 0x7c00000;
        case 0x8000000:
            return 0x8000000;
        case 0x10000000:
            return 0x10000000;
        case 0x20000000:
            return 0x20000000;
        case 0x40000000:
            return 0x40000000;
        default:
            return T;
    }
}

function ws(T, b) {
    var w = T['pendingLanes'];
    if (w === 0x0) return 0x0;
    var R = 0x0,
        p = T['suspendedLanes'],
        A = T['pingedLanes'],
        N = w & 0xfffffff;
    if (N !== 0x0) {
        var C = N & ~p;
        C !== 0x0 ? R = _r(C) : (A &= N, A !== 0x0 && (R = _r(A)));
    } else N = w & ~p, N !== 0x0 ? R = _r(N) : A !== 0x0 && (R = _r(A));
    if (R === 0x0) return 0x0;
    if (b !== 0x0 && b !== R && !(b & p) && (p = R & -R, A = b & -b, p >= A || p === 0x10 && (A & 0x3fffc0) !== 0x0)) return b;
    if (R & 0x4 && (R |= w & 0x10), b = T['entangledLanes'], b !== 0x0)
        for (T = T['entanglements'], b &= R; 0x0 < b;) w = 0x1f - ut(b), p = 0x1 << w, R |= T[w], b &= ~p;
    return R;
}

function Og(T, b) {
    switch (T) {
        case 0x1:
        case 0x2:
        case 0x4:
            return b + 0xfa;
        case 0x8:
        case 0x10:
        case 0x20:
        case 0x40:
        case 0x80:
        case 0x100:
        case 0x200:
        case 0x400:
        case 0x800:
        case 0x1000:
        case 0x2000:
        case 0x4000:
        case 0x8000:
        case 0x10000:
        case 0x20000:
        case 0x40000:
        case 0x80000:
        case 0x100000:
        case 0x200000:
            return b + 0x1388;
        case 0x400000:
        case 0x800000:
        case 0x1000000:
        case 0x2000000:
        case 0x4000000:
            return -0x1;
        case 0x8000000:
        case 0x10000000:
        case 0x20000000:
        case 0x40000000:
            return -0x1;
        default:
            return -0x1;
    }
}

function zg(T, b) {
    for (var w = T['suspendedLanes'], R = T['pingedLanes'], p = T['expirationTimes'], A = T['pendingLanes']; 0x0 < A;) {
        var N = 0x1f - ut(A),
            C = 0x1 << N,
            h = p[N];
        h === -0x1 ? (!(C & w) || C & R) && (p[N] = Og(C, b)) : h <= b && (T['expiredLanes'] |= C), A &= ~C;
    }
}

function So(T) {
    return T = T['pendingLanes'] & -0x40000001, T !== 0x0 ? T : T & 0x40000000 ? 0x40000000 : 0x0;
}

function jf() {
    var T = Oi;
    return Oi <<= 0x1, !(Oi & 0x3fffc0) && (Oi = 0x40), T;
}

function ba(T) {
    for (var b = [], w = 0x0; 0x1f > w; w++) b['push'](T);
    return b;
}

function ki(T, b, w) {
    T['pendingLanes'] |= b, b !== 0x20000000 && (T['suspendedLanes'] = 0x0, T['pingedLanes'] = 0x0), T = T['eventTimes'], b = 0x1f - ut(b), T[b] = w;
}

function Bg(T, b) {
    var w = T['pendingLanes'] & ~b;
    T['pendingLanes'] = b, T['suspendedLanes'] = 0x0, T['pingedLanes'] = 0x0, T['expiredLanes'] &= b, T['mutableReadLanes'] &= b, T['entangledLanes'] &= b, b = T['entanglements'];
    var R = T['eventTimes'];
    for (T = T['expirationTimes']; 0x0 < w;) {
        var p = 0x1f - ut(w),
            A = 0x1 << p;
        b[p] = 0x0, R[p] = -0x1, T[p] = -0x1, w &= ~A;
    }
}

function Ml(T, b) {
    var w = T['entangledLanes'] |= b;
    for (T = T['entanglements']; w;) {
        var R = 0x1f - ut(w),
            p = 0x1 << R;
        p & b | T[R] & b && (T[R] |= b), w &= ~p;
    }
}
var $ = 0x0;

function Nf(T) {
    return T &= -T, 0x1 < T ? 0x4 < T ? T & 0xfffffff ? 0x10 : 0x20000000 : 0x4 : 0x1;
}
var Sf, Rl, bf, kf, Cf, bo = !0x1,
    Bi = [],
    Yt = null,
    Zt = null,
    Qt = null,
    ii = new Map(),
    si = new Map(),
    Wt = [],
    Ug = 'mousedown\x20mouseup\x20touchcancel\x20touchend\x20touchstart\x20auxclick\x20dblclick\x20pointercancel\x20pointerdown\x20pointerup\x20dragend\x20dragstart\x20drop\x20compositionend\x20compositionstart\x20keydown\x20keypress\x20keyup\x20input\x20textInput\x20copy\x20cut\x20paste\x20click\x20change\x20contextmenu\x20reset\x20submit' ['split']('\x20');

function gc(T, b) {
    switch (T) {
        case 'focusin':
        case 'focusout':
            Yt = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Zt = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Qt = null;
            break;
        case 'pointerover':
        case 'pointerout':
            ii['delete'](b['pointerId']);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            si['delete'](b['pointerId']);
    }
}

function Pr(T, b, w, R, p, A) {
    return T === null || T['nativeEvent'] !== A ? (T = {
        'blockedOn': b,
        'domEventName': w,
        'eventSystemFlags': R,
        'nativeEvent': A,
        'targetContainers': [p]
    }, b !== null && (b = Ti(b), b !== null && Rl(b)), T) : (T['eventSystemFlags'] |= R, b = T['targetContainers'], p !== null && b['indexOf'](p) === -0x1 && b['push'](p), T);
}

function Hg(T, b, w, R, p) {
    switch (b) {
        case 'focusin':
            return Yt = Pr(Yt, T, b, w, R, p), !0x0;
        case 'dragenter':
            return Zt = Pr(Zt, T, b, w, R, p), !0x0;
        case 'mouseover':
            return Qt = Pr(Qt, T, b, w, R, p), !0x0;
        case 'pointerover':
            var A = p['pointerId'];
            return ii['set'](A, Pr(ii['get'](A) || null, T, b, w, R, p)), !0x0;
        case 'gotpointercapture':
            return A = p['pointerId'], si['set'](A, Pr(si['get'](A) || null, T, b, w, R, p)), !0x0;
    }
    return !0x1;
}

function Tf(T) {
    var b = xn(T['target']);
    if (b !== null) {
        var w = Dn(b);
        if (w !== null) {
            if (b = w['tag'], b === 0xd) {
                if (b = mf(w), b !== null) {
                    T['blockedOn'] = b, Cf(T['priority'], function() {
                        bf(w);
                    });
                    return;
                }
            } else if (b === 0x3 && w['stateNode']['current']['memoizedState']['isDehydrated']) {
                T['blockedOn'] = w['tag'] === 0x3 ? w['stateNode']['containerInfo'] : null;
                return;
            }
        }
    }
    T['blockedOn'] = null;
}

function ns(T) {
    if (T['blockedOn'] !== null) return !0x1;
    for (var b = T['targetContainers']; 0x0 < b['length'];) {
        var w = ko(T['domEventName'], T['eventSystemFlags'], b[0x0], T['nativeEvent']);
        if (w === null) {
            w = T['nativeEvent'];
            var R = new w['constructor'](w['type'], w);
            xo = R, w['target']['dispatchEvent'](R), xo = null;
        } else return b = Ti(w), b !== null && Rl(b), T['blockedOn'] = w, !0x1;
        b['shift']();
    }
    return !0x0;
}

function vc(T, b, w) {
    ns(T) && w['delete'](b);
}

function Wg() {
    bo = !0x1, Yt !== null && ns(Yt) && (Yt = null), Zt !== null && ns(Zt) && (Zt = null), Qt !== null && ns(Qt) && (Qt = null), ii['forEach'](vc), si['forEach'](vc);
}

function Er(T, b) {
    T['blockedOn'] === b && (T['blockedOn'] = null, bo || (bo = !0x0, ze['unstable_scheduleCallback'](ze['unstable_NormalPriority'], Wg)));
}

function ai(T) {
    function b(p) {
        return Er(p, T);
    }
    if (0x0 < Bi['length']) {
        Er(Bi[0x0], T);
        for (var w = 0x1; w < Bi['length']; w++) {
            var R = Bi[w];
            R['blockedOn'] === T && (R['blockedOn'] = null);
        }
    }
    for (Yt !== null && Er(Yt, T), Zt !== null && Er(Zt, T), Qt !== null && Er(Qt, T), ii['forEach'](b), si['forEach'](b), w = 0x0; w < Wt['length']; w++) R = Wt[w], R['blockedOn'] === T && (R['blockedOn'] = null);
    for (; 0x0 < Wt['length'] && (w = Wt[0x0], w['blockedOn'] === null);) Tf(w), w['blockedOn'] === null && Wt['shift']();
}
var or = _t['ReactCurrentBatchConfig'],
    js = !0x0;

function $g(T, b, w, R) {
    var p = $,
        A = or['transition'];
    or['transition'] = null;
    try {
        $ = 0x1, Al(T, b, w, R);
    } finally {
        $ = p, or['transition'] = A;
    }
}

function Kg(T, b, w, R) {
    var p = $,
        A = or['transition'];
    or['transition'] = null;
    try {
        $ = 0x4, Al(T, b, w, R);
    } finally {
        $ = p, or['transition'] = A;
    }
}

function Al(T, b, w, R) {
    if (js) {
        var p = ko(T, b, w, R);
        if (p === null) La(T, b, R, Ns, w), gc(T, R);
        else if (Hg(p, T, b, w, R)) R['stopPropagation']();
        else if (gc(T, R), b & 0x4 && -0x1 < Ug['indexOf'](T)) {
            for (; p !== null;) {
                var A = Ti(p);
                if (A !== null && Sf(A), A = ko(T, b, w, R), A === null && La(T, b, R, Ns, w), A === p) break;
                p = A;
            }
            p !== null && R['stopPropagation']();
        } else La(T, b, R, null, w);
    }
}
var Ns = null;

function ko(T, b, w, R) {
    if (Ns = null, T = Pl(R), T = xn(T), T !== null)
        if (b = Dn(T), b === null) T = null;
        else if (w = b['tag'], w === 0xd) {
        if (T = mf(b), T !== null) return T;
        T = null;
    } else if (w === 0x3) {
        if (b['stateNode']['current']['memoizedState']['isDehydrated']) return b['tag'] === 0x3 ? b['stateNode']['containerInfo'] : null;
        T = null;
    } else b !== T && (T = null);
    return Ns = T, null;
}

function Pf(T) {
    switch (T) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 0x1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 0x4;
        case 'message':
            switch (Dg()) {
                case El:
                    return 0x1;
                case xf:
                    return 0x4;
                case xs:
                case Lg:
                    return 0x10;
                case wf:
                    return 0x20000000;
                default:
                    return 0x10;
            }
        default:
            return 0x10;
    }
}
var Kt = null,
    Dl = null,
    rs = null;

function Ef() {
    if (rs) return rs;
    var T, b = Dl,
        w = b['length'],
        R, p = 'value' in Kt ? Kt['value'] : Kt['textContent'],
        A = p['length'];
    for (T = 0x0; T < w && b[T] === p[T]; T++);
    var N = w - T;
    for (R = 0x1; R <= N && b[w - R] === p[A - R]; R++);
    return rs = p['slice'](T, 0x1 < R ? 0x1 - R : void 0x0);
}

function is(T) {
    var b = T['keyCode'];
    return 'charCode' in T ? (T = T['charCode'], T === 0x0 && b === 0xd && (T = 0xd)) : T = b, T === 0xa && (T = 0xd), 0x20 <= T || T === 0xd ? T : 0x0;
}

function Ui() {
    return !0x0;
}

function yc() {
    return !0x1;
}

function He(T) {
    function b(w, R, p, A, N) {
        this['_reactName'] = w, this['_targetInst'] = p, this['type'] = R, this['nativeEvent'] = A, this['target'] = N, this['currentTarget'] = null;
        for (var C in T) T['hasOwnProperty'](C) && (w = T[C], this[C] = w ? w(A) : A[C]);
        return this['isDefaultPrevented'] = (A['defaultPrevented'] != null ? A['defaultPrevented'] : A['returnValue'] === !0x1) ? Ui : yc, this['isPropagationStopped'] = yc, this;
    }
    return re(b['prototype'], {
        'preventDefault': function() {
            this['defaultPrevented'] = !0x0;
            var w = this['nativeEvent'];
            w && (w['preventDefault'] ? w['preventDefault']() : typeof w['returnValue'] != 'unknown' && (w['returnValue'] = !0x1), this['isDefaultPrevented'] = Ui);
        },
        'stopPropagation': function() {
            var w = this['nativeEvent'];
            w && (w['stopPropagation'] ? w['stopPropagation']() : typeof w['cancelBubble'] != 'unknown' && (w['cancelBubble'] = !0x0), this['isPropagationStopped'] = Ui);
        },
        'persist': function() {},
        'isPersistent': Ui
    }), b;
}
var wr = {
        'eventPhase': 0x0,
        'bubbles': 0x0,
        'cancelable': 0x0,
        'timeStamp': function(T) {
            return T['timeStamp'] || Date['now']();
        },
        'defaultPrevented': 0x0,
        'isTrusted': 0x0
    },
    Ll = He(wr),
    Ci = re({}, wr, {
        'view': 0x0,
        'detail': 0x0
    }),
    Xg = He(Ci),
    ka, Ca, Mr, qs = re({}, Ci, {
        'screenX': 0x0,
        'screenY': 0x0,
        'clientX': 0x0,
        'clientY': 0x0,
        'pageX': 0x0,
        'pageY': 0x0,
        'ctrlKey': 0x0,
        'shiftKey': 0x0,
        'altKey': 0x0,
        'metaKey': 0x0,
        'getModifierState': Il,
        'button': 0x0,
        'buttons': 0x0,
        'relatedTarget': function(T) {
            return T['relatedTarget'] === void 0x0 ? T['fromElement'] === T['srcElement'] ? T['toElement'] : T['fromElement'] : T['relatedTarget'];
        },
        'movementX': function(T) {
            return 'movementX' in T ? T['movementX'] : (T !== Mr && (Mr && T['type'] === 'mousemove' ? (ka = T['screenX'] - Mr['screenX'], Ca = T['screenY'] - Mr['screenY']) : Ca = ka = 0x0, Mr = T), ka);
        },
        'movementY': function(T) {
            return 'movementY' in T ? T['movementY'] : Ca;
        }
    }),
    xc = He(qs),
    Gg = re({}, qs, {
        'dataTransfer': 0x0
    }),
    Yg = He(Gg),
    Zg = re({}, Ci, {
        'relatedTarget': 0x0
    }),
    Ta = He(Zg),
    Qg = re({}, wr, {
        'animationName': 0x0,
        'elapsedTime': 0x0,
        'pseudoElement': 0x0
    }),
    Jg = He(Qg),
    qg = re({}, wr, {
        'clipboardData': function(T) {
            return 'clipboardData' in T ? T['clipboardData'] : window['clipboardData'];
        }
    }),
    ev = He(qg),
    tv = re({}, wr, {
        'data': 0x0
    }),
    wc = He(tv),
    nv = {
        'Esc': 'Escape',
        'Spacebar': '\x20',
        'Left': 'ArrowLeft',
        'Up': 'ArrowUp',
        'Right': 'ArrowRight',
        'Down': 'ArrowDown',
        'Del': 'Delete',
        'Win': 'OS',
        'Menu': 'ContextMenu',
        'Apps': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'MozPrintableKey': 'Unidentified'
    },
    rv = {
        0x8: 'Backspace',
        0x9: 'Tab',
        0xc: 'Clear',
        0xd: 'Enter',
        0x10: 'Shift',
        0x11: 'Control',
        0x12: 'Alt',
        0x13: 'Pause',
        0x14: 'CapsLock',
        0x1b: 'Escape',
        0x20: '\x20',
        0x21: 'PageUp',
        0x22: 'PageDown',
        0x23: 'End',
        0x24: 'Home',
        0x25: 'ArrowLeft',
        0x26: 'ArrowUp',
        0x27: 'ArrowRight',
        0x28: 'ArrowDown',
        0x2d: 'Insert',
        0x2e: 'Delete',
        0x70: 'F1',
        0x71: 'F2',
        0x72: 'F3',
        0x73: 'F4',
        0x74: 'F5',
        0x75: 'F6',
        0x76: 'F7',
        0x77: 'F8',
        0x78: 'F9',
        0x79: 'F10',
        0x7a: 'F11',
        0x7b: 'F12',
        0x90: 'NumLock',
        0x91: 'ScrollLock',
        0xe0: 'Meta'
    },
    iv = {
        'Alt': 'altKey',
        'Control': 'ctrlKey',
        'Meta': 'metaKey',
        'Shift': 'shiftKey'
    };

function sv(T) {
    var b = this['nativeEvent'];
    return b['getModifierState'] ? b['getModifierState'](T) : (T = iv[T]) ? !!b[T] : !0x1;
}

function Il() {
    return sv;
}
var av = re({}, Ci, {
        'key': function(T) {
            if (T['key']) {
                var b = nv[T['key']] || T['key'];
                if (b !== 'Unidentified') return b;
            }
            return T['type'] === 'keypress' ? (T = is(T), T === 0xd ? 'Enter' : String['fromCharCode'](T)) : T['type'] === 'keydown' || T['type'] === 'keyup' ? rv[T['keyCode']] || 'Unidentified' : '';
        },
        'code': 0x0,
        'location': 0x0,
        'ctrlKey': 0x0,
        'shiftKey': 0x0,
        'altKey': 0x0,
        'metaKey': 0x0,
        'repeat': 0x0,
        'locale': 0x0,
        'getModifierState': Il,
        'charCode': function(T) {
            return T['type'] === 'keypress' ? is(T) : 0x0;
        },
        'keyCode': function(T) {
            return T['type'] === 'keydown' || T['type'] === 'keyup' ? T['keyCode'] : 0x0;
        },
        'which': function(T) {
            return T['type'] === 'keypress' ? is(T) : T['type'] === 'keydown' || T['type'] === 'keyup' ? T['keyCode'] : 0x0;
        }
    }),
    ov = He(av),
    lv = re({}, qs, {
        'pointerId': 0x0,
        'width': 0x0,
        'height': 0x0,
        'pressure': 0x0,
        'tangentialPressure': 0x0,
        'tiltX': 0x0,
        'tiltY': 0x0,
        'twist': 0x0,
        'pointerType': 0x0,
        'isPrimary': 0x0
    }),
    jc = He(lv),
    uv = re({}, Ci, {
        'touches': 0x0,
        'targetTouches': 0x0,
        'changedTouches': 0x0,
        'altKey': 0x0,
        'metaKey': 0x0,
        'ctrlKey': 0x0,
        'shiftKey': 0x0,
        'getModifierState': Il
    }),
    cv = He(uv),
    dv = re({}, wr, {
        'propertyName': 0x0,
        'elapsedTime': 0x0,
        'pseudoElement': 0x0
    }),
    hv = He(dv),
    fv = re({}, qs, {
        'deltaX': function(T) {
            return 'deltaX' in T ? T['deltaX'] : 'wheelDeltaX' in T ? -T['wheelDeltaX'] : 0x0;
        },
        'deltaY': function(T) {
            return 'deltaY' in T ? T['deltaY'] : 'wheelDeltaY' in T ? -T['wheelDeltaY'] : 'wheelDelta' in T ? -T['wheelDelta'] : 0x0;
        },
        'deltaZ': 0x0,
        'deltaMode': 0x0
    }),
    pv = He(fv),
    mv = [0x9, 0xd, 0x1b, 0x20],
    Vl = Rt && 'CompositionEvent' in window,
    Wr = null;
Rt && 'documentMode' in document && (Wr = document['documentMode']);
var gv = Rt && 'TextEvent' in window && !Wr,
    Mf = Rt && (!Vl || Wr && 0x8 < Wr && 0xb >= Wr),
    Nc = '\x20',
    Sc = !0x1;

function Rf(T, b) {
    switch (T) {
        case 'keyup':
            return mv['indexOf'](b['keyCode']) !== -0x1;
        case 'keydown':
            return b['keyCode'] !== 0xe5;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0x0;
        default:
            return !0x1;
    }
}

function Af(T) {
    return T = T['detail'], typeof T == 'object' && 'data' in T ? T['data'] : null;
}
var Hn = !0x1;

function vv(T, b) {
    switch (T) {
        case 'compositionend':
            return Af(b);
        case 'keypress':
            return b['which'] !== 0x20 ? null : (Sc = !0x0, Nc);
        case 'textInput':
            return T = b['data'], T === Nc && Sc ? null : T;
        default:
            return null;
    }
}

function yv(T, b) {
    if (Hn) return T === 'compositionend' || !Vl && Rf(T, b) ? (T = Ef(), rs = Dl = Kt = null, Hn = !0x1, T) : null;
    switch (T) {
        case 'paste':
            return null;
        case 'keypress':
            if (!(b['ctrlKey'] || b['altKey'] || b['metaKey']) || b['ctrlKey'] && b['altKey']) {
                if (b['char'] && 0x1 < b['char']['length']) return b['char'];
                if (b['which']) return String['fromCharCode'](b['which']);
            }
            return null;
        case 'compositionend':
            return Mf && b['locale'] !== 'ko' ? null : b['data'];
        default:
            return null;
    }
}
var xv = {
    'color': !0x0,
    'date': !0x0,
    'datetime': !0x0,
    'datetime-local': !0x0,
    'email': !0x0,
    'month': !0x0,
    'number': !0x0,
    'password': !0x0,
    'range': !0x0,
    'search': !0x0,
    'tel': !0x0,
    'text': !0x0,
    'time': !0x0,
    'url': !0x0,
    'week': !0x0
};

function bc(T) {
    var b = T && T['nodeName'] && T['nodeName']['toLowerCase']();
    return b === 'input' ? !!xv[T['type']] : b === 'textarea';
}

function Df(T, b, w, R) {
    cf(R), b = Ss(b, 'onChange'), 0x0 < b['length'] && (w = new Ll('onChange', 'change', null, w, R), T['push']({
        'event': w,
        'listeners': b
    }));
}
var $r = null,
    oi = null;

function wv(T) {
    Wf(T, 0x0);
}

function ea(T) {
    var b = Kn(T);
    if (nf(b)) return T;
}

function jv(T, b) {
    if (T === 'change') return b;
}
var Lf = !0x1;
if (Rt) {
    var Pa;
    if (Rt) {
        var Ea = 'oninput' in document;
        if (!Ea) {
            var kc = document['createElement']('div');
            kc['setAttribute']('oninput', 'return;'), Ea = typeof kc['oninput'] == 'function';
        }
        Pa = Ea;
    } else Pa = !0x1;
    Lf = Pa && (!document['documentMode'] || 0x9 < document['documentMode']);
}

function Cc() {
    $r && ($r['detachEvent']('onpropertychange', If), oi = $r = null);
}

function If(T) {
    if (T['propertyName'] === 'value' && ea(oi)) {
        var b = [];
        Df(b, oi, T, Pl(T)), pf(wv, b);
    }
}

function Nv(T, b, w) {
    T === 'focusin' ? (Cc(), $r = b, oi = w, $r['attachEvent']('onpropertychange', If)) : T === 'focusout' && Cc();
}

function Sv(T) {
    if (T === 'selectionchange' || T === 'keyup' || T === 'keydown') return ea(oi);
}

function bv(T, b) {
    if (T === 'click') return ea(b);
}

function kv(T, b) {
    if (T === 'input' || T === 'change') return ea(b);
}

function Cv(T, b) {
    return T === b && (T !== 0x0 || 0x1 / T === 0x1 / b) || T !== T && b !== b;
}
var dt = typeof Object['is'] == 'function' ? Object['is'] : Cv;

function li(T, b) {
    if (dt(T, b)) return !0x0;
    if (typeof T != 'object' || T === null || typeof b != 'object' || b === null) return !0x1;
    var w = Object['keys'](T),
        R = Object['keys'](b);
    if (w['length'] !== R['length']) return !0x1;
    for (R = 0x0; R < w['length']; R++) {
        var p = w[R];
        if (!ao['call'](b, p) || !dt(T[p], b[p])) return !0x1;
    }
    return !0x0;
}

function Tc(T) {
    for (; T && T['firstChild'];) T = T['firstChild'];
    return T;
}

function Pc(T, b) {
    var w = Tc(T);
    T = 0x0;
    for (var R; w;) {
        if (w['nodeType'] === 0x3) {
            if (R = T + w['textContent']['length'], T <= b && R >= b) return {
                'node': w,
                'offset': b - T
            };
            T = R;
        }
        p: {
            for (; w;) {
                if (w['nextSibling']) {
                    w = w['nextSibling'];
                    break p;
                }
                w = w['parentNode'];
            }
            w = void 0x0;
        }
        w = Tc(w);
    }
}

function Vf(T, b) {
    return T && b ? T === b ? !0x0 : T && T['nodeType'] === 0x3 ? !0x1 : b && b['nodeType'] === 0x3 ? Vf(T, b['parentNode']) : 'contains' in T ? T['contains'](b) : T['compareDocumentPosition'] ? !!(T['compareDocumentPosition'](b) & 0x10) : !0x1 : !0x1;
}

function _f() {
    for (var T = window, b = gs(); b instanceof T['HTMLIFrameElement'];) {
        try {
            var w = typeof b['contentWindow']['location']['href'] == 'string';
        } catch {
            w = !0x1;
        }
        if (w) T = b['contentWindow'];
        else break;
        b = gs(T['document']);
    }
    return b;
}

function _l(T) {
    var b = T && T['nodeName'] && T['nodeName']['toLowerCase']();
    return b && (b === 'input' && (T['type'] === 'text' || T['type'] === 'search' || T['type'] === 'tel' || T['type'] === 'url' || T['type'] === 'password') || b === 'textarea' || T['contentEditable'] === 'true');
}

function Tv(T) {
    var b = _f(),
        w = T['focusedElem'],
        R = T['selectionRange'];
    if (b !== w && w && w['ownerDocument'] && Vf(w['ownerDocument']['documentElement'], w)) {
        if (R !== null && _l(w)) {
            if (b = R['start'], T = R['end'], T === void 0x0 && (T = b), 'selectionStart' in w) w['selectionStart'] = b, w['selectionEnd'] = Math['min'](T, w['value']['length']);
            else if (T = (b = w['ownerDocument'] || document) && b['defaultView'] || window, T['getSelection']) {
                T = T['getSelection']();
                var p = w['textContent']['length'],
                    A = Math['min'](R['start'], p);
                R = R['end'] === void 0x0 ? A : Math['min'](R['end'], p), !T['extend'] && A > R && (p = R, R = A, A = p), p = Pc(w, A);
                var N = Pc(w, R);
                p && N && (T['rangeCount'] !== 0x1 || T['anchorNode'] !== p['node'] || T['anchorOffset'] !== p['offset'] || T['focusNode'] !== N['node'] || T['focusOffset'] !== N['offset']) && (b = b['createRange'](), b['setStart'](p['node'], p['offset']), T['removeAllRanges'](), A > R ? (T['addRange'](b), T['extend'](N['node'], N['offset'])) : (b['setEnd'](N['node'], N['offset']), T['addRange'](b)));
            }
        }
        for (b = [], T = w; T = T['parentNode'];) T['nodeType'] === 0x1 && b['push']({
            'element': T,
            'left': T['scrollLeft'],
            'top': T['scrollTop']
        });
        for (typeof w['focus'] == 'function' && w['focus'](), w = 0x0; w < b['length']; w++) T = b[w], T['element']['scrollLeft'] = T['left'], T['element']['scrollTop'] = T['top'];
    }
}
var Pv = Rt && 'documentMode' in document && 0xb >= document['documentMode'],
    Wn = null,
    Co = null,
    Kr = null,
    To = !0x1;

function Ec(T, b, w) {
    var R = w['window'] === w ? w['document'] : w['nodeType'] === 0x9 ? w : w['ownerDocument'];
    To || Wn == null || Wn !== gs(R) || (R = Wn, 'selectionStart' in R && _l(R) ? R = {
        'start': R['selectionStart'],
        'end': R['selectionEnd']
    } : (R = (R['ownerDocument'] && R['ownerDocument']['defaultView'] || window)['getSelection'](), R = {
        'anchorNode': R['anchorNode'],
        'anchorOffset': R['anchorOffset'],
        'focusNode': R['focusNode'],
        'focusOffset': R['focusOffset']
    }), Kr && li(Kr, R) || (Kr = R, R = Ss(Co, 'onSelect'), 0x0 < R['length'] && (b = new Ll('onSelect', 'select', null, b, w), T['push']({
        'event': b,
        'listeners': R
    }), b['target'] = Wn)));
}

function Hi(T, b) {
    var w = {};
    return w[T['toLowerCase']()] = b['toLowerCase'](), w['Webkit' + T] = 'webkit' + b, w['Moz' + T] = 'moz' + b, w;
}
var $n = {
        'animationend': Hi('Animation', 'AnimationEnd'),
        'animationiteration': Hi('Animation', 'AnimationIteration'),
        'animationstart': Hi('Animation', 'AnimationStart'),
        'transitionend': Hi('Transition', 'TransitionEnd')
    },
    Ma = {},
    Ff = {};
Rt && (Ff = document['createElement']('div')['style'], 'AnimationEvent' in window || (delete $n['animationend']['animation'], delete $n['animationiteration']['animation'], delete $n['animationstart']['animation']), 'TransitionEvent' in window || delete $n['transitionend']['transition']);

function ta(T) {
    if (Ma[T]) return Ma[T];
    if (!$n[T]) return T;
    var b = $n[T],
        w;
    for (w in b)
        if (b['hasOwnProperty'](w) && w in Ff) return Ma[T] = b[w];
    return T;
}
var Of = ta('animationend'),
    zf = ta('animationiteration'),
    Bf = ta('animationstart'),
    Uf = ta('transitionend'),
    Hf = new Map(),
    Mc = 'abort\x20auxClick\x20cancel\x20canPlay\x20canPlayThrough\x20click\x20close\x20contextMenu\x20copy\x20cut\x20drag\x20dragEnd\x20dragEnter\x20dragExit\x20dragLeave\x20dragOver\x20dragStart\x20drop\x20durationChange\x20emptied\x20encrypted\x20ended\x20error\x20gotPointerCapture\x20input\x20invalid\x20keyDown\x20keyPress\x20keyUp\x20load\x20loadedData\x20loadedMetadata\x20loadStart\x20lostPointerCapture\x20mouseDown\x20mouseMove\x20mouseOut\x20mouseOver\x20mouseUp\x20paste\x20pause\x20play\x20playing\x20pointerCancel\x20pointerDown\x20pointerMove\x20pointerOut\x20pointerOver\x20pointerUp\x20progress\x20rateChange\x20reset\x20resize\x20seeked\x20seeking\x20stalled\x20submit\x20suspend\x20timeUpdate\x20touchCancel\x20touchEnd\x20touchStart\x20volumeChange\x20scroll\x20toggle\x20touchMove\x20waiting\x20wheel' ['split']('\x20');

function cn(T, b) {
    Hf['set'](T, b), An(b, [T]);
}
for (var Ra = 0x0; Ra < Mc['length']; Ra++) {
    var Aa = Mc[Ra],
        Ev = Aa['toLowerCase'](),
        Mv = Aa[0x0]['toUpperCase']() + Aa['slice'](0x1);
    cn(Ev, 'on' + Mv);
}
cn(Of, 'onAnimationEnd');
cn(zf, 'onAnimationIteration');
cn(Bf, 'onAnimationStart');
cn('dblclick', 'onDoubleClick');
cn('focusin', 'onFocus');
cn('focusout', 'onBlur');
cn(Uf, 'onTransitionEnd');
cr('onMouseEnter', ['mouseout', 'mouseover']);
cr('onMouseLeave', ['mouseout', 'mouseover']);
cr('onPointerEnter', ['pointerout', 'pointerover']);
cr('onPointerLeave', ['pointerout', 'pointerover']);
An('onChange', 'change\x20click\x20focusin\x20focusout\x20input\x20keydown\x20keyup\x20selectionchange' ['split']('\x20'));
An('onSelect', 'focusout\x20contextmenu\x20dragend\x20focusin\x20keydown\x20keyup\x20mousedown\x20mouseup\x20selectionchange' ['split']('\x20'));
An('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
An('onCompositionEnd', 'compositionend\x20focusout\x20keydown\x20keypress\x20keyup\x20mousedown' ['split']('\x20'));
An('onCompositionStart', 'compositionstart\x20focusout\x20keydown\x20keypress\x20keyup\x20mousedown' ['split']('\x20'));
An('onCompositionUpdate', 'compositionupdate\x20focusout\x20keydown\x20keypress\x20keyup\x20mousedown' ['split']('\x20'));
var Fr = 'abort\x20canplay\x20canplaythrough\x20durationchange\x20emptied\x20encrypted\x20ended\x20error\x20loadeddata\x20loadedmetadata\x20loadstart\x20pause\x20play\x20playing\x20progress\x20ratechange\x20resize\x20seeked\x20seeking\x20stalled\x20suspend\x20timeupdate\x20volumechange\x20waiting' ['split']('\x20'),
    Rv = new Set('cancel\x20close\x20invalid\x20load\x20scroll\x20toggle' ['split']('\x20')['concat'](Fr));

function Rc(T, b, w) {
    var R = T['type'] || 'unknown-event';
    T['currentTarget'] = w, Eg(R, b, void 0x0, T), T['currentTarget'] = null;
}

function Wf(T, b) {
    b = (b & 0x4) !== 0x0;
    for (var w = 0x0; w < T['length']; w++) {
        var R = T[w],
            p = R['event'];
        R = R['listeners'];
        z: {
            var A = void 0x0;
            if (b)
                for (var N = R['length'] - 0x1; 0x0 <= N; N--) {
                    var C = R[N],
                        h = C['instance'],
                        L = C['currentTarget'];
                    if (C = C['listener'], h !== A && p['isPropagationStopped']()) break z;
                    Rc(p, C, L), A = h;
                } else
                    for (N = 0x0; N < R['length']; N++) {
                        if (C = R[N], h = C['instance'], L = C['currentTarget'], C = C['listener'], h !== A && p['isPropagationStopped']()) break z;
                        Rc(p, C, L), A = h;
                    }
        }
    }
    if (ys) throw T = No, ys = !0x1, No = null, T;
}

function G(T, b) {
    var w = b[Ao];
    w === void 0x0 && (w = b[Ao] = new Set());
    var R = T + '__bubble';
    w['has'](R) || ($f(b, T, 0x2, !0x1), w['add'](R));
}

function Da(T, b, w) {
    var R = 0x0;
    b && (R |= 0x4), $f(w, T, R, b);
}
var Wi = '_reactListening' + Math['random']()['toString'](0x24)['slice'](0x2);

function ui(T) {
    if (!T[Wi]) {
        T[Wi] = !0x0, Qh['forEach'](function(w) {
            w !== 'selectionchange' && (Rv['has'](w) || Da(w, !0x1, T), Da(w, !0x0, T));
        });
        var b = T['nodeType'] === 0x9 ? T : T['ownerDocument'];
        b === null || b[Wi] || (b[Wi] = !0x0, Da('selectionchange', !0x1, b));
    }
}

function $f(T, b, w, R) {
    switch (Pf(b)) {
        case 0x1:
            var p = $g;
            break;
        case 0x4:
            p = Kg;
            break;
        default:
            p = Al;
    }
    w = p['bind'](null, b, w, T), p = void 0x0, !jo || b !== 'touchstart' && b !== 'touchmove' && b !== 'wheel' || (p = !0x0), R ? p !== void 0x0 ? T['addEventListener'](b, w, {
        'capture': !0x0,
        'passive': p
    }) : T['addEventListener'](b, w, !0x0) : p !== void 0x0 ? T['addEventListener'](b, w, {
        'passive': p
    }) : T['addEventListener'](b, w, !0x1);
}

function La(T, b, w, R, p) {
    var A = R;
    if (!(b & 0x1) && !(b & 0x2) && R !== null) L: for (;;) {
        if (R === null) return;
        var N = R['tag'];
        if (N === 0x3 || N === 0x4) {
            var C = R['stateNode']['containerInfo'];
            if (C === p || C['nodeType'] === 0x8 && C['parentNode'] === p) break;
            if (N === 0x4)
                for (N = R['return']; N !== null;) {
                    var h = N['tag'];
                    if ((h === 0x3 || h === 0x4) && (h = N['stateNode']['containerInfo'], h === p || h['nodeType'] === 0x8 && h['parentNode'] === p)) return;
                    N = N['return'];
                }
            for (; C !== null;) {
                if (N = xn(C), N === null) return;
                if (h = N['tag'], h === 0x5 || h === 0x6) {
                    R = A = N;
                    continue L;
                }
                C = C['parentNode'];
            }
        }
        R = R['return'];
    }
    pf(function() {
        var L = A,
            z = Pl(w),
            I = [];
        Y7: {
            var K = Hf['get'](T);
            if (K !== void 0x0) {
                var O = Ll,
                    V = T;
                switch (T) {
                    case 'keypress':
                        if (is(w) === 0x0) break Y7;
                    case 'keydown':
                    case 'keyup':
                        O = ov;
                        break;
                    case 'focusin':
                        V = 'focus', O = Ta;
                        break;
                    case 'focusout':
                        V = 'blur', O = Ta;
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        O = Ta;
                        break;
                    case 'click':
                        if (w['button'] === 0x2) break Y7;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        O = xc;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        O = Yg;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        O = cv;
                        break;
                    case Of:
                    case zf:
                    case Bf:
                        O = Jg;
                        break;
                    case Uf:
                        O = hv;
                        break;
                    case 'scroll':
                        O = Xg;
                        break;
                    case 'wheel':
                        O = pv;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        O = ev;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        O = jc;
                }
                var J = (b & 0x4) !== 0x0,
                    B = !J && T === 'scroll',
                    j = J ? K !== null ? K + 'Capture' : null : K;
                J = [];
                for (var M = L, U; M !== null;) {
                    U = M;
                    var Y0 = U['stateNode'];
                    if (U['tag'] === 0x5 && Y0 !== null && (U = Y0, j !== null && (Y0 = ri(M, j), Y0 != null && J['push'](ci(M, Y0, U)))), B) break;
                    M = M['return'];
                }
                0x0 < J['length'] && (K = new O(K, V, null, w, z), I['push']({
                    'event': K,
                    'listeners': J
                }));
            }
        }
        if (!(b & 0x7)) {
            Y8: {
                if (K = T === 'mouseover' || T === 'pointerover', O = T === 'mouseout' || T === 'pointerout', K && w !== xo && (V = w['relatedTarget'] || w['fromElement']) && (xn(V) || V[At])) break Y8;
                if ((O || K) && (K = z['window'] === z ? z : (K = z['ownerDocument']) ? K['defaultView'] || K['parentWindow'] : window, O ? (V = w['relatedTarget'] || w['toElement'], O = L, V = V ? xn(V) : null, V !== null && (B = Dn(V), V !== B || V['tag'] !== 0x5 && V['tag'] !== 0x6) && (V = null)) : (O = null, V = L), O !== V)) {
                    if (J = xc, Y0 = 'onMouseLeave', j = 'onMouseEnter', M = 'mouse', (T === 'pointerout' || T === 'pointerover') && (J = jc, Y0 = 'onPointerLeave', j = 'onPointerEnter', M = 'pointer'), B = O == null ? K : Kn(O), U = V == null ? K : Kn(V), K = new J(Y0, M + 'leave', O, w, z), K['target'] = B, K['relatedTarget'] = U, Y0 = null, xn(z) === L && (J = new J(j, M + 'enter', V, w, z), J['target'] = U, J['relatedTarget'] = B, Y0 = J), B = Y0, O && V) Y9: {
                        for (J = O, j = V, M = 0x0, U = J; U; U = zn(U)) M++;
                        for (U = 0x0, Y0 = j; Y0; Y0 = zn(Y0)) U++;
                        for (; 0x0 < M - U;) J = zn(J),
                        M--;
                        for (; 0x0 < U - M;) j = zn(j),
                        U--;
                        for (; M--;) {
                            if (J === j || j !== null && J === j['alternate']) break Y9;
                            J = zn(J), j = zn(j);
                        }
                        J = null;
                    }
                    else J = null;
                    O !== null && Ac(I, K, O, J, !0x1), V !== null && B !== null && Ac(I, B, V, J, !0x0);
                }
            }
            YY: {
                if (K = L ? Kn(L) : window, O = K['nodeName'] && K['nodeName']['toLowerCase'](), O === 'select' || O === 'input' && K['type'] === 'file') var Y3 = jv;
                else if (bc(K))
                    if (Lf) Y3 = kv;
                    else {
                        Y3 = Sv;
                        var Y4 = Nv;
                    }
                else(O = K['nodeName']) && O['toLowerCase']() === 'input' && (K['type'] === 'checkbox' || K['type'] === 'radio') && (Y3 = bv);
                if (Y3 && (Y3 = Y3(T, L))) {
                    Df(I, Y3, w, z);
                    break YY;
                }
                Y4 && Y4(T, K, L),
                T === 'focusout' && (Y4 = K['_wrapperState']) && Y4['controlled'] && K['type'] === 'number' && po(K, 'number', K['value']);
            }
            switch (Y4 = L ? Kn(L) : window, T) {
                case 'focusin':
                    (bc(Y4) || Y4['contentEditable'] === 'true') && (Wn = Y4, Co = L, Kr = null);
                    break;
                case 'focusout':
                    Kr = Co = Wn = null;
                    break;
                case 'mousedown':
                    To = !0x0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    To = !0x1, Ec(I, w, z);
                    break;
                case 'selectionchange':
                    if (Pv) break;
                case 'keydown':
                case 'keyup':
                    Ec(I, w, z);
            }
            var Y5;
            if (Vl) YT: {
                switch (T) {
                    case 'compositionstart':
                        var Y6 = 'onCompositionStart';
                        break YT;
                    case 'compositionend':
                        Y6 = 'onCompositionEnd';
                        break YT;
                    case 'compositionupdate':
                        Y6 = 'onCompositionUpdate';
                        break YT;
                }
                Y6 = void 0x0;
            }
            else Hn ? Rf(T, w) && (Y6 = 'onCompositionEnd') : T === 'keydown' && w['keyCode'] === 0xe5 && (Y6 = 'onCompositionStart');Y6 && (Mf && w['locale'] !== 'ko' && (Hn || Y6 !== 'onCompositionStart' ? Y6 === 'onCompositionEnd' && Hn && (Y5 = Ef()) : (Kt = z, Dl = 'value' in Kt ? Kt['value'] : Kt['textContent'], Hn = !0x0)), Y4 = Ss(L, Y6), 0x0 < Y4['length'] && (Y6 = new wc(Y6, T, null, w, z), I['push']({
                'event': Y6,
                'listeners': Y4
            }), Y5 ? Y6['data'] = Y5 : (Y5 = Af(w), Y5 !== null && (Y6['data'] = Y5)))),
            (Y5 = gv ? vv(T, w) : yv(T, w)) && (L = Ss(L, 'onBeforeInput'), 0x0 < L['length'] && (z = new wc('onBeforeInput', 'beforeinput', null, w, z), I['push']({
                'event': z,
                'listeners': L
            }), z['data'] = Y5));
        }
        Wf(I, b);
    });
}

function ci(T, b, w) {
    return {
        'instance': T,
        'listener': b,
        'currentTarget': w
    };
}

function Ss(T, b) {
    for (var w = b + 'Capture', R = []; T !== null;) {
        var p = T,
            A = p['stateNode'];
        p['tag'] === 0x5 && A !== null && (p = A, A = ri(T, w), A != null && R['unshift'](ci(T, A, p)), A = ri(T, b), A != null && R['push'](ci(T, A, p))), T = T['return'];
    }
    return R;
}

function zn(T) {
    if (T === null) return null;
    do T = T['return']; while (T && T['tag'] !== 0x5);
    return T || null;
}

function Ac(T, b, w, R, p) {
    for (var A = b['_reactName'], N = []; w !== null && w !== R;) {
        var C = w,
            h = C['alternate'],
            L = C['stateNode'];
        if (h !== null && h === R) break;
        C['tag'] === 0x5 && L !== null && (C = L, p ? (h = ri(w, A), h != null && N['unshift'](ci(w, h, C))) : p || (h = ri(w, A), h != null && N['push'](ci(w, h, C)))), w = w['return'];
    }
    N['length'] !== 0x0 && T['push']({
        'event': b,
        'listeners': N
    });
}
var Av = /\r\n?/g,
    Dv = /\u0000|\uFFFD/g;

function Dc(T) {
    return (typeof T == 'string' ? T : '' + T)['replace'](Av, '\x0a')['replace'](Dv, '');
}

function $i(T, b, w) {
    if (b = Dc(b), Dc(T) !== b && w) throw Error(E(0x1a9));
}

function bs() {}
var Po = null,
    Eo = null;

function Mo(T, b) {
    return T === 'textarea' || T === 'noscript' || typeof b['children'] == 'string' || typeof b['children'] == 'number' || typeof b['dangerouslySetInnerHTML'] == 'object' && b['dangerouslySetInnerHTML'] !== null && b['dangerouslySetInnerHTML']['__html'] != null;
}
var Ro = typeof setTimeout == 'function' ? setTimeout : void 0x0,
    Lv = typeof clearTimeout == 'function' ? clearTimeout : void 0x0,
    Lc = typeof Promise == 'function' ? Promise : void 0x0,
    Iv = typeof queueMicrotask == 'function' ? queueMicrotask : typeof Lc < 'u' ? function(T) {
        return Lc['resolve'](null)['then'](T)['catch'](Vv);
    } : Ro;

function Vv(T) {
    setTimeout(function() {
        throw T;
    });
}

function Ia(T, b) {
    var w = b,
        R = 0x0;
    do {
        var p = w['nextSibling'];
        if (T['removeChild'](w), p && p['nodeType'] === 0x8)
            if (w = p['data'], w === '/$') {
                if (R === 0x0) {
                    T['removeChild'](p), ai(b);
                    return;
                }
                R--;
            } else w !== '$' && w !== '$?' && w !== '$!' || R++;
        w = p;
    } while (w);
    ai(b);
}

function Jt(T) {
    for (; T != null; T = T['nextSibling']) {
        var b = T['nodeType'];
        if (b === 0x1 || b === 0x3) break;
        if (b === 0x8) {
            if (b = T['data'], b === '$' || b === '$!' || b === '$?') break;
            if (b === '/$') return null;
        }
    }
    return T;
}

function Ic(T) {
    T = T['previousSibling'];
    for (var b = 0x0; T;) {
        if (T['nodeType'] === 0x8) {
            var w = T['data'];
            if (w === '$' || w === '$!' || w === '$?') {
                if (b === 0x0) return T;
                b--;
            } else w === '/$' && b++;
        }
        T = T['previousSibling'];
    }
    return null;
}
var jr = Math['random']()['toString'](0x24)['slice'](0x2),
    mt = '__reactFiber$' + jr,
    di = '__reactProps$' + jr,
    At = '__reactContainer$' + jr,
    Ao = '__reactEvents$' + jr,
    _v = '__reactListeners$' + jr,
    Fv = '__reactHandles$' + jr;

function xn(T) {
    var b = T[mt];
    if (b) return b;
    for (var w = T['parentNode']; w;) {
        if (b = w[At] || w[mt]) {
            if (w = b['alternate'], b['child'] !== null || w !== null && w['child'] !== null)
                for (T = Ic(T); T !== null;) {
                    if (w = T[mt]) return w;
                    T = Ic(T);
                }
            return b;
        }
        T = w, w = T['parentNode'];
    }
    return null;
}

function Ti(T) {
    return T = T[mt] || T[At], !T || T['tag'] !== 0x5 && T['tag'] !== 0x6 && T['tag'] !== 0xd && T['tag'] !== 0x3 ? null : T;
}

function Kn(T) {
    if (T['tag'] === 0x5 || T['tag'] === 0x6) return T['stateNode'];
    throw Error(E(0x21));
}

function na(T) {
    return T[di] || null;
}
var Do = [],
    Xn = -0x1;

function dn(T) {
    return {
        'current': T
    };
}

function Y(T) {
    0x0 > Xn || (T['current'] = Do[Xn], Do[Xn] = null, Xn--);
}

function X(T, b) {
    Xn++, Do[Xn] = T['current'], T['current'] = b;
}
var an = {},
    Te = dn(an),
    De = dn(!0x1),
    Cn = an;

function dr(T, b) {
    var w = T['type']['contextTypes'];
    if (!w) return an;
    var R = T['stateNode'];
    if (R && R['__reactInternalMemoizedUnmaskedChildContext'] === b) return R['__reactInternalMemoizedMaskedChildContext'];
    var p = {},
        A;
    for (A in w) p[A] = b[A];
    return R && (T = T['stateNode'], T['__reactInternalMemoizedUnmaskedChildContext'] = b, T['__reactInternalMemoizedMaskedChildContext'] = p), p;
}

function Le(T) {
    return T = T['childContextTypes'], T != null;
}

function ks() {
    Y(De), Y(Te);
}

function Vc(T, b, w) {
    if (Te['current'] !== an) throw Error(E(0xa8));
    X(Te, b), X(De, w);
}

function Kf(T, b, w) {
    var R = T['stateNode'];
    if (b = b['childContextTypes'], typeof R['getChildContext'] != 'function') return w;
    R = R['getChildContext']();
    for (var p in R)
        if (!(p in b)) throw Error(E(0x6c, Ng(T) || 'Unknown', p));
    return re({}, w, R);
}

function Cs(T) {
    return T = (T = T['stateNode']) && T['__reactInternalMemoizedMergedChildContext'] || an, Cn = Te['current'], X(Te, T), X(De, De['current']), !0x0;
}

function _c(T, b, w) {
    var R = T['stateNode'];
    if (!R) throw Error(E(0xa9));
    w ? (T = Kf(T, b, Cn), R['__reactInternalMemoizedMergedChildContext'] = T, Y(De), Y(Te), X(Te, T)) : Y(De), X(De, w);
}
var bt = null,
    ra = !0x1,
    Va = !0x1;

function Xf(T) {
    bt === null ? bt = [T] : bt['push'](T);
}

function Ov(T) {
    ra = !0x0, Xf(T);
}

function hn() {
    if (!Va && bt !== null) {
        Va = !0x0;
        var T = 0x0,
            b = $;
        try {
            var w = bt;
            for ($ = 0x1; T < w['length']; T++) {
                var R = w[T];
                do R = R(!0x0); while (R !== null);
            }
            bt = null, ra = !0x1;
        } catch (p) {
            throw bt !== null && (bt = bt['slice'](T + 0x1)), yf(El, hn), p;
        } finally {
            $ = b, Va = !0x1;
        }
    }
    return null;
}
var Gn = [],
    Yn = 0x0,
    Ts = null,
    Ps = 0x0,
    Ye = [],
    Ze = 0x0,
    Tn = null,
    kt = 0x1,
    Ct = '';

function mn(T, b) {
    Gn[Yn++] = Ps, Gn[Yn++] = Ts, Ts = T, Ps = b;
}

function Gf(T, b, w) {
    Ye[Ze++] = kt, Ye[Ze++] = Ct, Ye[Ze++] = Tn, Tn = T;
    var R = kt;
    T = Ct;
    var p = 0x20 - ut(R) - 0x1;
    R &= ~(0x1 << p), w += 0x1;
    var A = 0x20 - ut(b) + p;
    if (0x1e < A) {
        var N = p - p % 0x5;
        A = (R & (0x1 << N) - 0x1)['toString'](0x20), R >>= N, p -= N, kt = 0x1 << 0x20 - ut(b) + p | w << p | R, Ct = A + T;
    } else kt = 0x1 << A | w << p | R, Ct = T;
}

function Fl(T) {
    T['return'] !== null && (mn(T, 0x1), Gf(T, 0x1, 0x0));
}

function Ol(T) {
    for (; T === Ts;) Ts = Gn[--Yn], Gn[Yn] = null, Ps = Gn[--Yn], Gn[Yn] = null;
    for (; T === Tn;) Tn = Ye[--Ze], Ye[Ze] = null, Ct = Ye[--Ze], Ye[Ze] = null, kt = Ye[--Ze], Ye[Ze] = null;
}
var Fe = null,
    _e = null,
    Q = !0x1,
    lt = null;

function Yf(T, b) {
    var w = Qe(0x5, null, null, 0x0);
    w['elementType'] = 'DELETED', w['stateNode'] = b, w['return'] = T, b = T['deletions'], b === null ? (T['deletions'] = [w], T['flags'] |= 0x10) : b['push'](w);
}

function Fc(T, b) {
    switch (T['tag']) {
        case 0x5:
            var w = T['type'];
            return b = b['nodeType'] !== 0x1 || w['toLowerCase']() !== b['nodeName']['toLowerCase']() ? null : b, b !== null ? (T['stateNode'] = b, Fe = T, _e = Jt(b['firstChild']), !0x0) : !0x1;
        case 0x6:
            return b = T['pendingProps'] === '' || b['nodeType'] !== 0x3 ? null : b, b !== null ? (T['stateNode'] = b, Fe = T, _e = null, !0x0) : !0x1;
        case 0xd:
            return b = b['nodeType'] !== 0x8 ? null : b, b !== null ? (w = Tn !== null ? {
                'id': kt,
                'overflow': Ct
            } : null, T['memoizedState'] = {
                'dehydrated': b,
                'treeContext': w,
                'retryLane': 0x40000000
            }, w = Qe(0x12, null, null, 0x0), w['stateNode'] = b, w['return'] = T, T['child'] = w, Fe = T, _e = null, !0x0) : !0x1;
        default:
            return !0x1;
    }
}

function Lo(T) {
    return (T['mode'] & 0x1) !== 0x0 && (T['flags'] & 0x80) === 0x0;
}

function Io(T) {
    if (Q) {
        var b = _e;
        if (b) {
            var w = b;
            if (!Fc(T, b)) {
                if (Lo(T)) throw Error(E(0x1a2));
                b = Jt(w['nextSibling']);
                var R = Fe;
                b && Fc(T, b) ? Yf(R, w) : (T['flags'] = T['flags'] & -0x1001 | 0x2, Q = !0x1, Fe = T);
            }
        } else {
            if (Lo(T)) throw Error(E(0x1a2));
            T['flags'] = T['flags'] & -0x1001 | 0x2, Q = !0x1, Fe = T;
        }
    }
}

function Oc(T) {
    for (T = T['return']; T !== null && T['tag'] !== 0x5 && T['tag'] !== 0x3 && T['tag'] !== 0xd;) T = T['return'];
    Fe = T;
}

function Ki(T) {
    if (T !== Fe) return !0x1;
    if (!Q) return Oc(T), Q = !0x0, !0x1;
    var b;
    if ((b = T['tag'] !== 0x3) && !(b = T['tag'] !== 0x5) && (b = T['type'], b = b !== 'head' && b !== 'body' && !Mo(T['type'], T['memoizedProps'])), b && (b = _e)) {
        if (Lo(T)) throw Zf(), Error(E(0x1a2));
        for (; b;) Yf(T, b), b = Jt(b['nextSibling']);
    }
    if (Oc(T), T['tag'] === 0xd) {
        if (T = T['memoizedState'], T = T !== null ? T['dehydrated'] : null, !T) throw Error(E(0x13d));
        R: {
            for (T = T['nextSibling'], b = 0x0; T;) {
                if (T['nodeType'] === 0x8) {
                    var w = T['data'];
                    if (w === '/$') {
                        if (b === 0x0) {
                            _e = Jt(T['nextSibling']);
                            break R;
                        }
                        b--;
                    } else w !== '$' && w !== '$!' && w !== '$?' || b++;
                }
                T = T['nextSibling'];
            }
            _e = null;
        }
    } else _e = Fe ? Jt(T['stateNode']['nextSibling']) : null;
    return !0x0;
}

function Zf() {
    for (var T = _e; T;) T = Jt(T['nextSibling']);
}

function hr() {
    _e = Fe = null, Q = !0x1;
}

function zl(T) {
    lt === null ? lt = [T] : lt['push'](T);
}
var zv = _t['ReactCurrentBatchConfig'];

function Rr(T, b, w) {
    if (T = w['ref'], T !== null && typeof T != 'function' && typeof T != 'object') {
        if (w['_owner']) {
            if (w = w['_owner'], w) {
                if (w['tag'] !== 0x1) throw Error(E(0x135));
                var R = w['stateNode'];
            }
            if (!R) throw Error(E(0x93, T));
            var p = R,
                A = '' + T;
            return b !== null && b['ref'] !== null && typeof b['ref'] == 'function' && b['ref']['_stringRef'] === A ? b['ref'] : (b = function(N) {
                var C = p['refs'];
                N === null ? delete C[A] : C[A] = N;
            }, b['_stringRef'] = A, b);
        }
        if (typeof T != 'string') throw Error(E(0x11c));
        if (!w['_owner']) throw Error(E(0x122, T));
    }
    return T;
}

function Xi(T, b) {
    throw T = Object['prototype']['toString']['call'](b), Error(E(0x1f, T === '[object\x20Object]' ? 'object\x20with\x20keys\x20{' + Object['keys'](b)['join'](',\x20') + '}' : T));
}

function zc(T) {
    var b = T['_init'];
    return b(T['_payload']);
}

function Qf(T) {
    function b(j, M) {
        if (T) {
            var U = j['deletions'];
            U === null ? (j['deletions'] = [M], j['flags'] |= 0x10) : U['push'](M);
        }
    }

    function R(j, M) {
        if (!T) return null;
        for (; M !== null;) b(j, M), M = M['sibling'];
        return null;
    }

    function p(j, M) {
        for (j = new Map(); M !== null;) M['key'] !== null ? j['set'](M['key'], M) : j['set'](M['index'], M), M = M['sibling'];
        return j;
    }

    function A(j, M) {
        return j = nn(j, M), j['index'] = 0x0, j['sibling'] = null, j;
    }

    function C(j, M, U) {
        return j['index'] = U, T ? (U = j['alternate'], U !== null ? (U = U['index'], U < M ? (j['flags'] |= 0x2, M) : U) : (j['flags'] |= 0x2, M)) : (j['flags'] |= 0x100000, M);
    }

    function L(j) {
        return T && j['alternate'] === null && (j['flags'] |= 0x2), j;
    }

    function z(j, M, U, Y0) {
        return M === null || M['tag'] !== 0x6 ? (M = Ha(U, j['mode'], Y0), M['return'] = j, M) : (M = A(M, U), M['return'] = j, M);
    }

    function I(j, M, U, Y0) {
        var Y3 = U['type'];
        return Y3 === Un ? O(j, M, U['props']['children'], Y0, U['key']) : M !== null && (M['elementType'] === Y3 || typeof Y3 == 'object' && Y3 !== null && Y3['$$typeof'] === Ut && zc(Y3) === M['type']) ? (Y0 = A(M, U['props']), Y0['ref'] = Rr(j, M, U), Y0['return'] = j, Y0) : (Y0 = ds(U['type'], U['key'], U['props'], null, j['mode'], Y0), Y0['ref'] = Rr(j, M, U), Y0['return'] = j, Y0);
    }

    function K(j, M, U, Y0) {
        return M === null || M['tag'] !== 0x4 || M['stateNode']['containerInfo'] !== U['containerInfo'] || M['stateNode']['implementation'] !== U['implementation'] ? (M = Wa(U, j['mode'], Y0), M['return'] = j, M) : (M = A(M, U['children'] || []), M['return'] = j, M);
    }

    function O(j, M, U, Y0, Y3) {
        return M === null || M['tag'] !== 0x7 ? (M = bn(U, j['mode'], Y0, Y3), M['return'] = j, M) : (M = A(M, U), M['return'] = j, M);
    }

    function V(j, M, U) {
        if (typeof M == 'string' && M !== '' || typeof M == 'number') return M = Ha('' + M, j['mode'], U), M['return'] = j, M;
        if (typeof M == 'object' && M !== null) {
            switch (M['$$typeof']) {
                case Vi:
                    return U = ds(M['type'], M['key'], M['props'], null, j['mode'], U), U['ref'] = Rr(j, null, M), U['return'] = j, U;
                case Bn:
                    return M = Wa(M, j['mode'], U), M['return'] = j, M;
                case Ut:
                    var Y0 = M['_init'];
                    return V(j, Y0(M['_payload']), U);
            }
            if (Vr(M) || Cr(M)) return M = bn(M, j['mode'], U, null), M['return'] = j, M;
            Xi(j, M);
        }
        return null;
    }

    function S(j, M, U, Y0) {
        var Y3 = M !== null ? M['key'] : null;
        if (typeof U == 'string' && U !== '' || typeof U == 'number') return Y3 !== null ? null : z(j, M, '' + U, Y0);
        if (typeof U == 'object' && U !== null) {
            switch (U['$$typeof']) {
                case Vi:
                    return U['key'] === Y3 ? I(j, M, U, Y0) : null;
                case Bn:
                    return U['key'] === Y3 ? K(j, M, U, Y0) : null;
                case Ut:
                    return Y3 = U['_init'], S(j, M, Y3(U['_payload']), Y0);
            }
            if (Vr(U) || Cr(U)) return Y3 !== null ? null : O(j, M, U, Y0, null);
            Xi(j, U);
        }
        return null;
    }

    function m(j, M, U, Y0, Y3) {
        if (typeof Y0 == 'string' && Y0 !== '' || typeof Y0 == 'number') return j = j['get'](U) || null, z(M, j, '' + Y0, Y3);
        if (typeof Y0 == 'object' && Y0 !== null) {
            switch (Y0['$$typeof']) {
                case Vi:
                    return j = j['get'](Y0['key'] === null ? U : Y0['key']) || null, I(M, j, Y0, Y3);
                case Bn:
                    return j = j['get'](Y0['key'] === null ? U : Y0['key']) || null, K(M, j, Y0, Y3);
                case Ut:
                    var Y4 = Y0['_init'];
                    return m(j, M, U, Y4(Y0['_payload']), Y3);
            }
            if (Vr(Y0) || Cr(Y0)) return j = j['get'](U) || null, O(M, j, Y0, Y3, null);
            Xi(M, Y0);
        }
        return null;
    }

    function J(j, U, Y0, Y3) {
        for (var Y4 = null, Y5 = null, Y6 = U, Y7 = U = 0x0, Y8 = null; Y6 !== null && Y7 < Y0['length']; Y7++) {
            Y6['index'] > Y7 ? (Y8 = Y6, Y6 = null) : Y8 = Y6['sibling'];
            var Y9 = S(j, Y6, Y0[Y7], Y3);
            if (Y9 === null) {
                Y6 === null && (Y6 = Y8);
                break;
            }
            T && Y6 && Y9['alternate'] === null && b(j, Y6), U = C(Y9, U, Y7), Y5 === null ? Y4 = Y9 : Y5['sibling'] = Y9, Y5 = Y9, Y6 = Y8;
        }
        if (Y7 === Y0['length']) return R(j, Y6), Q && mn(j, Y7), Y4;
        if (Y6 === null) {
            for (; Y7 < Y0['length']; Y7++) Y6 = V(j, Y0[Y7], Y3), Y6 !== null && (U = C(Y6, U, Y7), Y5 === null ? Y4 = Y6 : Y5['sibling'] = Y6, Y5 = Y6);
            return Q && mn(j, Y7), Y4;
        }
        for (Y6 = p(j, Y6); Y7 < Y0['length']; Y7++) Y8 = m(Y6, j, Y7, Y0[Y7], Y3), Y8 !== null && (T && Y8['alternate'] !== null && Y6['delete'](Y8['key'] === null ? Y7 : Y8['key']), U = C(Y8, U, Y7), Y5 === null ? Y4 = Y8 : Y5['sibling'] = Y8, Y5 = Y8);
        return T && Y6['forEach'](function(YY) {
            return b(j, YY);
        }), Q && mn(j, Y7), Y4;
    }

    function B(j, U, Y0, Y3) {
        var Y4 = Cr(Y0);
        if (typeof Y4 != 'function') throw Error(E(0x96));
        if (Y0 = Y4['call'](Y0), Y0 == null) throw Error(E(0x97));
        for (var Y5 = Y4 = null, Y6 = U, Y7 = U = 0x0, Y8 = null, Y9 = Y0['next'](); Y6 !== null && !Y9['done']; Y7++, Y9 = Y0['next']()) {
            Y6['index'] > Y7 ? (Y8 = Y6, Y6 = null) : Y8 = Y6['sibling'];
            var YY = S(j, Y6, Y9['value'], Y3);
            if (YY === null) {
                Y6 === null && (Y6 = Y8);
                break;
            }
            T && Y6 && YY['alternate'] === null && b(j, Y6), U = C(YY, U, Y7), Y5 === null ? Y4 = YY : Y5['sibling'] = YY, Y5 = YY, Y6 = Y8;
        }
        if (Y9['done']) return R(j, Y6), Q && mn(j, Y7), Y4;
        if (Y6 === null) {
            for (; !Y9['done']; Y7++, Y9 = Y0['next']()) Y9 = V(j, Y9['value'], Y3), Y9 !== null && (U = C(Y9, U, Y7), Y5 === null ? Y4 = Y9 : Y5['sibling'] = Y9, Y5 = Y9);
            return Q && mn(j, Y7), Y4;
        }
        for (Y6 = p(j, Y6); !Y9['done']; Y7++, Y9 = Y0['next']()) Y9 = m(Y6, j, Y7, Y9['value'], Y3), Y9 !== null && (T && Y9['alternate'] !== null && Y6['delete'](Y9['key'] === null ? Y7 : Y9['key']), U = C(Y9, U, Y7), Y5 === null ? Y4 = Y9 : Y5['sibling'] = Y9, Y5 = Y9);
        return T && Y6['forEach'](function(YT) {
            return b(j, YT);
        }), Q && mn(j, Y7), Y4;
    }

    function g(j, M, U, Y0) {
        if (typeof U == 'object' && U !== null && U['type'] === Un && U['key'] === null && (U = U['props']['children']), typeof U == 'object' && U !== null) {
            switch (U['$$typeof']) {
                case Vi:
                    Y5: {
                        for (var Y3 = U['key'], Y4 = M; Y4 !== null;) {
                            if (Y4['key'] === Y3) {
                                if (Y3 = U['type'], Y3 === Un) {
                                    if (Y4['tag'] === 0x7) {
                                        R(j, Y4['sibling']), M = A(Y4, U['props']['children']), M['return'] = j, j = M;
                                        break Y5;
                                    }
                                } else if (Y4['elementType'] === Y3 || typeof Y3 == 'object' && Y3 !== null && Y3['$$typeof'] === Ut && zc(Y3) === Y4['type']) {
                                    R(j, Y4['sibling']), M = A(Y4, U['props']), M['ref'] = Rr(j, Y4, U), M['return'] = j, j = M;
                                    break Y5;
                                }
                                R(j, Y4);
                                break;
                            } else b(j, Y4);
                            Y4 = Y4['sibling'];
                        }
                        U['type'] === Un ? (M = bn(U['props']['children'], j['mode'], Y0, U['key']), M['return'] = j, j = M) : (Y0 = ds(U['type'], U['key'], U['props'], null, j['mode'], Y0), Y0['ref'] = Rr(j, M, U), Y0['return'] = j, j = Y0);
                    }
                    return L(j);
                case Bn:
                    Y6: {
                        for (Y4 = U['key']; M !== null;) {
                            if (M['key'] === Y4)
                                if (M['tag'] === 0x4 && M['stateNode']['containerInfo'] === U['containerInfo'] && M['stateNode']['implementation'] === U['implementation']) {
                                    R(j, M['sibling']), M = A(M, U['children'] || []), M['return'] = j, j = M;
                                    break Y6;
                                } else {
                                    R(j, M);
                                    break;
                                }
                            else b(j, M);
                            M = M['sibling'];
                        }
                        M = Wa(U, j['mode'], Y0),
                        M['return'] = j,
                        j = M;
                    }
                    return L(j);
                case Ut:
                    return Y4 = U['_init'], g(j, M, Y4(U['_payload']), Y0);
            }
            if (Vr(U)) return J(j, M, U, Y0);
            if (Cr(U)) return B(j, M, U, Y0);
            Xi(j, U);
        }
        return typeof U == 'string' && U !== '' || typeof U == 'number' ? (U = '' + U, M !== null && M['tag'] === 0x6 ? (R(j, M['sibling']), M = A(M, U), M['return'] = j, j = M) : (R(j, M), M = Ha(U, j['mode'], Y0), M['return'] = j, j = M), L(j)) : R(j, M);
    }
    return g;
}
var fr = Qf(!0x0),
    Jf = Qf(!0x1),
    Es = dn(null),
    Ms = null,
    Zn = null,
    Bl = null;

function Ul() {
    Bl = Zn = Ms = null;
}

function Hl(T) {
    var b = Es['current'];
    Y(Es), T['_currentValue'] = b;
}

function Vo(T, b, w) {
    for (; T !== null;) {
        var R = T['alternate'];
        if ((T['childLanes'] & b) !== b ? (T['childLanes'] |= b, R !== null && (R['childLanes'] |= b)) : R !== null && (R['childLanes'] & b) !== b && (R['childLanes'] |= b), T === w) break;
        T = T['return'];
    }
}

function lr(T, b) {
    Ms = T, Bl = Zn = null, T = T['dependencies'], T !== null && T['firstContext'] !== null && (T['lanes'] & b && (Ae = !0x0), T['firstContext'] = null);
}

function qe(T) {
    var b = T['_currentValue'];
    if (Bl !== T)
        if (T = {
                'context': T,
                'memoizedValue': b,
                'next': null
            }, Zn === null) {
            if (Ms === null) throw Error(E(0x134));
            Zn = T, Ms['dependencies'] = {
                'lanes': 0x0,
                'firstContext': T
            };
        } else Zn = Zn['next'] = T;
    return b;
}
var wn = null;

function Wl(T) {
    wn === null ? wn = [T] : wn['push'](T);
}

function qf(T, b, w, R) {
    var p = b['interleaved'];
    return p === null ? (w['next'] = w, Wl(b)) : (w['next'] = p['next'], p['next'] = w), b['interleaved'] = w, Dt(T, R);
}

function Dt(T, b) {
    T['lanes'] |= b;
    var w = T['alternate'];
    for (w !== null && (w['lanes'] |= b), w = T, T = T['return']; T !== null;) T['childLanes'] |= b, w = T['alternate'], w !== null && (w['childLanes'] |= b), w = T, T = T['return'];
    return w['tag'] === 0x3 ? w['stateNode'] : null;
}
var Ht = !0x1;

function $l(T) {
    T['updateQueue'] = {
        'baseState': T['memoizedState'],
        'firstBaseUpdate': null,
        'lastBaseUpdate': null,
        'shared': {
            'pending': null,
            'interleaved': null,
            'lanes': 0x0
        },
        'effects': null
    };
}

function ep(T, b) {
    T = T['updateQueue'], b['updateQueue'] === T && (b['updateQueue'] = {
        'baseState': T['baseState'],
        'firstBaseUpdate': T['firstBaseUpdate'],
        'lastBaseUpdate': T['lastBaseUpdate'],
        'shared': T['shared'],
        'effects': T['effects']
    });
}

function Pt(T, b) {
    return {
        'eventTime': T,
        'lane': b,
        'tag': 0x0,
        'payload': null,
        'callback': null,
        'next': null
    };
}

function qt(T, b, w) {
    var R = T['updateQueue'];
    if (R === null) return null;
    if (R = R['shared'], W & 0x2) {
        var p = R['pending'];
        return p === null ? b['next'] = b : (b['next'] = p['next'], p['next'] = b), R['pending'] = b, Dt(T, w);
    }
    return p = R['interleaved'], p === null ? (b['next'] = b, Wl(R)) : (b['next'] = p['next'], p['next'] = b), R['interleaved'] = b, Dt(T, w);
}

function ss(T, b, w) {
    if (b = b['updateQueue'], b !== null && (b = b['shared'], (w & 0x3fffc0) !== 0x0)) {
        var R = b['lanes'];
        R &= T['pendingLanes'], w |= R, b['lanes'] = w, Ml(T, w);
    }
}

function Bc(T, b) {
    var w = T['updateQueue'],
        R = T['alternate'];
    if (R !== null && (R = R['updateQueue'], w === R)) {
        var p = null,
            A = null;
        if (w = w['firstBaseUpdate'], w !== null) {
            do {
                var N = {
                    'eventTime': w['eventTime'],
                    'lane': w['lane'],
                    'tag': w['tag'],
                    'payload': w['payload'],
                    'callback': w['callback'],
                    'next': null
                };
                A === null ? p = A = N : A = A['next'] = N, w = w['next'];
            } while (w !== null);
            A === null ? p = A = b : A = A['next'] = b;
        } else p = A = b;
        w = {
            'baseState': R['baseState'],
            'firstBaseUpdate': p,
            'lastBaseUpdate': A,
            'shared': R['shared'],
            'effects': R['effects']
        }, T['updateQueue'] = w;
        return;
    }
    T = w['lastBaseUpdate'], T === null ? w['firstBaseUpdate'] = b : T['next'] = b, w['lastBaseUpdate'] = b;
}

function Rs(T, b, R, p) {
    var A = T['updateQueue'];
    Ht = !0x1;
    var N = A['firstBaseUpdate'],
        C = A['lastBaseUpdate'],
        L = A['shared']['pending'];
    if (L !== null) {
        A['shared']['pending'] = null;
        var z = L,
            I = z['next'];
        z['next'] = null, C === null ? N = I : C['next'] = I, C = z;
        var K = T['alternate'];
        K !== null && (K = K['updateQueue'], L = K['lastBaseUpdate'], L !== C && (L === null ? K['firstBaseUpdate'] = I : L['next'] = I, K['lastBaseUpdate'] = z));
    }
    if (N !== null) {
        var O = A['baseState'];
        C = 0x0, K = I = z = null, L = N;
        do {
            var V = L['lane'],
                S = L['eventTime'];
            if ((p & V) === V) {
                K !== null && (K = K['next'] = {
                    'eventTime': S,
                    'lane': 0x0,
                    'tag': L['tag'],
                    'payload': L['payload'],
                    'callback': L['callback'],
                    'next': null
                });
                B: {
                    var m = T,
                        J = L;
                    switch (V = b, S = R, J['tag']) {
                        case 0x1:
                            if (m = J['payload'], typeof m == 'function') {
                                O = m['call'](S, O, V);
                                break B;
                            }
                            O = m;
                            break B;
                        case 0x3:
                            m['flags'] = m['flags'] & -0x10001 | 0x80;
                        case 0x0:
                            if (m = J['payload'], V = typeof m == 'function' ? m['call'](S, O, V) : m, V == null) break B;
                            O = re({}, O, V);
                            break B;
                        case 0x2:
                            Ht = !0x0;
                    }
                }
                L['callback'] !== null && L['lane'] !== 0x0 && (T['flags'] |= 0x40, V = A['effects'], V === null ? A['effects'] = [L] : V['push'](L));
            } else S = {
                'eventTime': S,
                'lane': V,
                'tag': L['tag'],
                'payload': L['payload'],
                'callback': L['callback'],
                'next': null
            }, K === null ? (I = K = S, z = O) : K = K['next'] = S, C |= V;
            if (L = L['next'], L === null) {
                if (L = A['shared']['pending'], L === null) break;
                V = L, L = V['next'], V['next'] = null, A['lastBaseUpdate'] = V, A['shared']['pending'] = null;
            }
        } while (!0x0);
        if (K === null && (z = O), A['baseState'] = z, A['firstBaseUpdate'] = I, A['lastBaseUpdate'] = K, b = A['shared']['interleaved'], b !== null) {
            A = b;
            do C |= A['lane'], A = A['next']; while (A !== b);
        } else N === null && (A['shared']['lanes'] = 0x0);
        En |= C, T['lanes'] = C, T['memoizedState'] = O;
    }
}

function Uc(T, b, w) {
    if (T = b['effects'], b['effects'] = null, T !== null)
        for (b = 0x0; b < T['length']; b++) {
            var R = T[b],
                p = R['callback'];
            if (p !== null) {
                if (R['callback'] = null, R = w, typeof p != 'function') throw Error(E(0xbf, p));
                p['call'](R);
            }
        }
}
var Pi = {},
    vt = dn(Pi),
    hi = dn(Pi),
    fi = dn(Pi);

function jn(T) {
    if (T === Pi) throw Error(E(0xae));
    return T;
}

function Kl(T, b) {
    switch (X(fi, b), X(hi, T), X(vt, Pi), T = b['nodeType'], T) {
        case 0x9:
        case 0xb:
            b = (b = b['documentElement']) ? b['namespaceURI'] : go(null, '');
            break;
        default:
            T = T === 0x8 ? b['parentNode'] : b, b = T['namespaceURI'] || null, T = T['tagName'], b = go(b, T);
    }
    Y(vt), X(vt, b);
}

function pr() {
    Y(vt), Y(hi), Y(fi);
}

function tp(T) {
    jn(fi['current']);
    var b = jn(vt['current']),
        w = go(b, T['type']);
    b !== w && (X(hi, T), X(vt, w));
}

function Xl(T) {
    hi['current'] === T && (Y(vt), Y(hi));
}
var ee = dn(0x0);

function As(T) {
    for (var b = T; b !== null;) {
        if (b['tag'] === 0xd) {
            var w = b['memoizedState'];
            if (w !== null && (w = w['dehydrated'], w === null || w['data'] === '$?' || w['data'] === '$!')) return b;
        } else if (b['tag'] === 0x13 && b['memoizedProps']['revealOrder'] !== void 0x0) {
            if (b['flags'] & 0x80) return b;
        } else if (b['child'] !== null) {
            b['child']['return'] = b, b = b['child'];
            continue;
        }
        if (b === T) break;
        for (; b['sibling'] === null;) {
            if (b['return'] === null || b['return'] === T) return null;
            b = b['return'];
        }
        b['sibling']['return'] = b['return'], b = b['sibling'];
    }
    return null;
}
var _a = [];

function Gl() {
    for (var T = 0x0; T < _a['length']; T++) _a[T]['_workInProgressVersionPrimary'] = null;
    _a['length'] = 0x0;
}
var as = _t['ReactCurrentDispatcher'],
    Fa = _t['ReactCurrentBatchConfig'],
    Pn = 0x0,
    ne = null,
    fe = null,
    me = null,
    Ds = !0x1,
    Xr = !0x1,
    pi = 0x0,
    Bv = 0x0;

function Ne() {
    throw Error(E(0x141));
}

function Yl(T, b) {
    if (b === null) return !0x1;
    for (var w = 0x0; w < b['length'] && w < T['length']; w++)
        if (!dt(T[w], b[w])) return !0x1;
    return !0x0;
}

function Zl(T, b, w, R, p, A) {
    if (Pn = A, ne = b, b['memoizedState'] = null, b['updateQueue'] = null, b['lanes'] = 0x0, as['current'] = T === null || T['memoizedState'] === null ? $v : Kv, T = w(R, p), Xr) {
        A = 0x0;
        do {
            if (Xr = !0x1, pi = 0x0, 0x19 <= A) throw Error(E(0x12d));
            A += 0x1, me = fe = null, b['updateQueue'] = null, as['current'] = Xv, T = w(R, p);
        } while (Xr);
    }
    if (as['current'] = Ls, b = fe !== null && fe['next'] !== null, Pn = 0x0, me = fe = ne = null, Ds = !0x1, b) throw Error(E(0x12c));
    return T;
}

function Ql() {
    var T = pi !== 0x0;
    return pi = 0x0, T;
}

function pt() {
    var T = {
        'memoizedState': null,
        'baseState': null,
        'baseQueue': null,
        'queue': null,
        'next': null
    };
    return me === null ? ne['memoizedState'] = me = T : me = me['next'] = T, me;
}

function et() {
    if (fe === null) {
        var T = ne['alternate'];
        T = T !== null ? T['memoizedState'] : null;
    } else T = fe['next'];
    var b = me === null ? ne['memoizedState'] : me['next'];
    if (b !== null) me = b, fe = T;
    else {
        if (T === null) throw Error(E(0x136));
        fe = T, T = {
            'memoizedState': fe['memoizedState'],
            'baseState': fe['baseState'],
            'baseQueue': fe['baseQueue'],
            'queue': fe['queue'],
            'next': null
        }, me === null ? ne['memoizedState'] = me = T : me = me['next'] = T;
    }
    return me;
}

function mi(T, b) {
    return typeof b == 'function' ? b(T) : b;
}

function Oa(T) {
    var b = et(),
        w = b['queue'];
    if (w === null) throw Error(E(0x137));
    w['lastRenderedReducer'] = T;
    var R = fe,
        p = R['baseQueue'],
        A = w['pending'];
    if (A !== null) {
        if (p !== null) {
            var N = p['next'];
            p['next'] = A['next'], A['next'] = N;
        }
        R['baseQueue'] = p = A, w['pending'] = null;
    }
    if (p !== null) {
        A = p['next'], R = R['baseState'];
        var C = N = null,
            L = null,
            z = A;
        do {
            var I = z['lane'];
            if ((Pn & I) === I) L !== null && (L = L['next'] = {
                'lane': 0x0,
                'action': z['action'],
                'hasEagerState': z['hasEagerState'],
                'eagerState': z['eagerState'],
                'next': null
            }), R = z['hasEagerState'] ? z['eagerState'] : T(R, z['action']);
            else {
                var K = {
                    'lane': I,
                    'action': z['action'],
                    'hasEagerState': z['hasEagerState'],
                    'eagerState': z['eagerState'],
                    'next': null
                };
                L === null ? (C = L = K, N = R) : L = L['next'] = K, ne['lanes'] |= I, En |= I;
            }
            z = z['next'];
        } while (z !== null && z !== A);
        L === null ? N = R : L['next'] = C, dt(R, b['memoizedState']) || (Ae = !0x0), b['memoizedState'] = R, b['baseState'] = N, b['baseQueue'] = L, w['lastRenderedState'] = R;
    }
    if (T = w['interleaved'], T !== null) {
        p = T;
        do A = p['lane'], ne['lanes'] |= A, En |= A, p = p['next']; while (p !== T);
    } else p === null && (w['lanes'] = 0x0);
    return [b['memoizedState'], w['dispatch']];
}

function za(T) {
    var b = et(),
        w = b['queue'];
    if (w === null) throw Error(E(0x137));
    w['lastRenderedReducer'] = T;
    var R = w['dispatch'],
        p = w['pending'],
        A = b['memoizedState'];
    if (p !== null) {
        w['pending'] = null;
        var N = p = p['next'];
        do A = T(A, N['action']), N = N['next']; while (N !== p);
        dt(A, b['memoizedState']) || (Ae = !0x0), b['memoizedState'] = A, b['baseQueue'] === null && (b['baseState'] = A), w['lastRenderedState'] = A;
    }
    return [A, R];
}

function np() {}

function rp(T, b) {
    var w = ne,
        R = et(),
        p = b(),
        A = !dt(R['memoizedState'], p);
    if (A && (R['memoizedState'] = p, Ae = !0x0), R = R['queue'], Jl(ap['bind'](null, w, R, T), [T]), R['getSnapshot'] !== b || A || me !== null && me['memoizedState']['tag'] & 0x1) {
        if (w['flags'] |= 0x800, gi(0x9, sp['bind'](null, w, R, p, b), void 0x0, null), ge === null) throw Error(E(0x15d));
        Pn & 0x1e || ip(w, b, p);
    }
    return p;
}

function ip(T, b, w) {
    T['flags'] |= 0x4000, T = {
        'getSnapshot': b,
        'value': w
    }, b = ne['updateQueue'], b === null ? (b = {
        'lastEffect': null,
        'stores': null
    }, ne['updateQueue'] = b, b['stores'] = [T]) : (w = b['stores'], w === null ? b['stores'] = [T] : w['push'](T));
}

function sp(T, b, w, R) {
    b['value'] = w, b['getSnapshot'] = R, op(b) && lp(T);
}

function ap(T, b, w) {
    return w(function() {
        op(b) && lp(T);
    });
}

function op(T) {
    var b = T['getSnapshot'];
    T = T['value'];
    try {
        var w = b();
        return !dt(T, w);
    } catch {
        return !0x0;
    }
}

function lp(T) {
    var b = Dt(T, 0x1);
    b !== null && ct(b, T, 0x1, -0x1);
}

function Hc(T) {
    var b = pt();
    return typeof T == 'function' && (T = T()), b['memoizedState'] = b['baseState'] = T, T = {
        'pending': null,
        'interleaved': null,
        'lanes': 0x0,
        'dispatch': null,
        'lastRenderedReducer': mi,
        'lastRenderedState': T
    }, b['queue'] = T, T = T['dispatch'] = Wv['bind'](null, ne, T), [b['memoizedState'], T];
}

function gi(T, b, w, R) {
    return T = {
        'tag': T,
        'create': b,
        'destroy': w,
        'deps': R,
        'next': null
    }, b = ne['updateQueue'], b === null ? (b = {
        'lastEffect': null,
        'stores': null
    }, ne['updateQueue'] = b, b['lastEffect'] = T['next'] = T) : (w = b['lastEffect'], w === null ? b['lastEffect'] = T['next'] = T : (R = w['next'], w['next'] = T, T['next'] = R, b['lastEffect'] = T)), T;
}

function up() {
    return et()['memoizedState'];
}

function os(T, b, w, R) {
    var p = pt();
    ne['flags'] |= T, p['memoizedState'] = gi(0x1 | b, w, void 0x0, R === void 0x0 ? null : R);
}

function ia(T, b, w, R) {
    var p = et();
    R = R === void 0x0 ? null : R;
    var A = void 0x0;
    if (fe !== null) {
        var N = fe['memoizedState'];
        if (A = N['destroy'], R !== null && Yl(R, N['deps'])) {
            p['memoizedState'] = gi(b, w, A, R);
            return;
        }
    }
    ne['flags'] |= T, p['memoizedState'] = gi(0x1 | b, w, A, R);
}

function Wc(T, b) {
    return os(0x800800, 0x8, T, b);
}

function Jl(T, b) {
    return ia(0x800, 0x8, T, b);
}

function cp(T, b) {
    return ia(0x4, 0x2, T, b);
}

function dp(T, b) {
    return ia(0x4, 0x4, T, b);
}

function hp(T, b) {
    if (typeof b == 'function') return T = T(), b(T),
        function() {
            b(null);
        };
    if (b != null) return T = T(), b['current'] = T,
        function() {
            b['current'] = null;
        };
}

function fp(T, b, w) {
    return w = w != null ? w['concat']([T]) : null, ia(0x4, 0x4, hp['bind'](null, b, T), w);
}

function ql() {}

function pp(T, b) {
    var w = et();
    b = b === void 0x0 ? null : b;
    var R = w['memoizedState'];
    return R !== null && b !== null && Yl(b, R[0x1]) ? R[0x0] : (w['memoizedState'] = [T, b], T);
}

function mp(T, b) {
    var w = et();
    b = b === void 0x0 ? null : b;
    var R = w['memoizedState'];
    return R !== null && b !== null && Yl(b, R[0x1]) ? R[0x0] : (T = T(), w['memoizedState'] = [T, b], T);
}

function gp(T, b, w) {
    return Pn & 0x15 ? (dt(w, b) || (w = jf(), ne['lanes'] |= w, En |= w, T['baseState'] = !0x0), b) : (T['baseState'] && (T['baseState'] = !0x1, Ae = !0x0), T['memoizedState'] = w);
}

function Uv(T, b) {
    var w = $;
    $ = w !== 0x0 && 0x4 > w ? w : 0x4, T(!0x0);
    var R = Fa['transition'];
    Fa['transition'] = {};
    try {
        T(!0x1), b();
    } finally {
        $ = w, Fa['transition'] = R;
    }
}

function vp() {
    return et()['memoizedState'];
}

function Hv(T, b, w) {
    var R = tn(T);
    if (w = {
            'lane': R,
            'action': w,
            'hasEagerState': !0x1,
            'eagerState': null,
            'next': null
        }, yp(T)) xp(b, w);
    else if (w = qf(T, b, w, R), w !== null) {
        var p = Ee();
        ct(w, T, R, p), wp(w, b, R);
    }
}

function Wv(T, b, w) {
    var R = tn(T),
        p = {
            'lane': R,
            'action': w,
            'hasEagerState': !0x1,
            'eagerState': null,
            'next': null
        };
    if (yp(T)) xp(b, p);
    else {
        var A = T['alternate'];
        if (T['lanes'] === 0x0 && (A === null || A['lanes'] === 0x0) && (A = b['lastRenderedReducer'], A !== null)) try {
            var N = b['lastRenderedState'],
                C = A(N, w);
            if (p['hasEagerState'] = !0x0, p['eagerState'] = C, dt(C, N)) {
                var h = b['interleaved'];
                h === null ? (p['next'] = p, Wl(b)) : (p['next'] = h['next'], h['next'] = p), b['interleaved'] = p;
                return;
            }
        } catch {} finally {}
        w = qf(T, b, p, R), w !== null && (p = Ee(), ct(w, T, R, p), wp(w, b, R));
    }
}

function yp(T) {
    var b = T['alternate'];
    return T === ne || b !== null && b === ne;
}

function xp(T, b) {
    Xr = Ds = !0x0;
    var w = T['pending'];
    w === null ? b['next'] = b : (b['next'] = w['next'], w['next'] = b), T['pending'] = b;
}

function wp(T, b, w) {
    if (w & 0x3fffc0) {
        var R = b['lanes'];
        R &= T['pendingLanes'], w |= R, b['lanes'] = w, Ml(T, w);
    }
}
var Ls = {
        'readContext': qe,
        'useCallback': Ne,
        'useContext': Ne,
        'useEffect': Ne,
        'useImperativeHandle': Ne,
        'useInsertionEffect': Ne,
        'useLayoutEffect': Ne,
        'useMemo': Ne,
        'useReducer': Ne,
        'useRef': Ne,
        'useState': Ne,
        'useDebugValue': Ne,
        'useDeferredValue': Ne,
        'useTransition': Ne,
        'useMutableSource': Ne,
        'useSyncExternalStore': Ne,
        'useId': Ne,
        'unstable_isNewReconciler': !0x1
    },
    $v = {
        'readContext': qe,
        'useCallback': function(T, b) {
            return pt()['memoizedState'] = [T, b === void 0x0 ? null : b], T;
        },
        'useContext': qe,
        'useEffect': Wc,
        'useImperativeHandle': function(T, b, w) {
            return w = w != null ? w['concat']([T]) : null, os(0x400004, 0x4, hp['bind'](null, b, T), w);
        },
        'useLayoutEffect': function(T, b) {
            return os(0x400004, 0x4, T, b);
        },
        'useInsertionEffect': function(T, b) {
            return os(0x4, 0x2, T, b);
        },
        'useMemo': function(T, b) {
            var w = pt();
            return b = b === void 0x0 ? null : b, T = T(), w['memoizedState'] = [T, b], T;
        },
        'useReducer': function(T, b, w) {
            var R = pt();
            return b = w !== void 0x0 ? w(b) : b, R['memoizedState'] = R['baseState'] = b, T = {
                'pending': null,
                'interleaved': null,
                'lanes': 0x0,
                'dispatch': null,
                'lastRenderedReducer': T,
                'lastRenderedState': b
            }, R['queue'] = T, T = T['dispatch'] = Hv['bind'](null, ne, T), [R['memoizedState'], T];
        },
        'useRef': function(T) {
            var b = pt();
            return T = {
                'current': T
            }, b['memoizedState'] = T;
        },
        'useState': Hc,
        'useDebugValue': ql,
        'useDeferredValue': function(T) {
            return pt()['memoizedState'] = T;
        },
        'useTransition': function() {
            var T = Hc(!0x1),
                b = T[0x0];
            return T = Uv['bind'](null, T[0x1]), pt()['memoizedState'] = T, [b, T];
        },
        'useMutableSource': function() {},
        'useSyncExternalStore': function(T, b, w) {
            var R = ne,
                p = pt();
            if (Q) {
                if (w === void 0x0) throw Error(E(0x197));
                w = w();
            } else {
                if (w = b(), ge === null) throw Error(E(0x15d));
                Pn & 0x1e || ip(R, b, w);
            }
            p['memoizedState'] = w;
            var A = {
                'value': w,
                'getSnapshot': b
            };
            return p['queue'] = A, Wc(ap['bind'](null, R, A, T), [T]), R['flags'] |= 0x800, gi(0x9, sp['bind'](null, R, A, w, b), void 0x0, null), w;
        },
        'useId': function() {
            var T = pt(),
                b = ge['identifierPrefix'];
            if (Q) {
                var w = Ct,
                    R = kt;
                w = (R & ~(0x1 << 0x20 - ut(R) - 0x1))['toString'](0x20) + w, b = ':' + b + 'R' + w, w = pi++, 0x0 < w && (b += 'H' + w['toString'](0x20)), b += ':';
            } else w = Bv++, b = ':' + b + 'r' + w['toString'](0x20) + ':';
            return T['memoizedState'] = b;
        },
        'unstable_isNewReconciler': !0x1
    },
    Kv = {
        'readContext': qe,
        'useCallback': pp,
        'useContext': qe,
        'useEffect': Jl,
        'useImperativeHandle': fp,
        'useInsertionEffect': cp,
        'useLayoutEffect': dp,
        'useMemo': mp,
        'useReducer': Oa,
        'useRef': up,
        'useState': function() {
            return Oa(mi);
        },
        'useDebugValue': ql,
        'useDeferredValue': function(T) {
            var b = et();
            return gp(b, fe['memoizedState'], T);
        },
        'useTransition': function() {
            var T = Oa(mi)[0x0],
                b = et()['memoizedState'];
            return [T, b];
        },
        'useMutableSource': np,
        'useSyncExternalStore': rp,
        'useId': vp,
        'unstable_isNewReconciler': !0x1
    },
    Xv = {
        'readContext': qe,
        'useCallback': pp,
        'useContext': qe,
        'useEffect': Jl,
        'useImperativeHandle': fp,
        'useInsertionEffect': cp,
        'useLayoutEffect': dp,
        'useMemo': mp,
        'useReducer': za,
        'useRef': up,
        'useState': function() {
            return za(mi);
        },
        'useDebugValue': ql,
        'useDeferredValue': function(T) {
            var b = et();
            return fe === null ? b['memoizedState'] = T : gp(b, fe['memoizedState'], T);
        },
        'useTransition': function() {
            var T = za(mi)[0x0],
                b = et()['memoizedState'];
            return [T, b];
        },
        'useMutableSource': np,
        'useSyncExternalStore': rp,
        'useId': vp,
        'unstable_isNewReconciler': !0x1
    };

function at(T, b) {
    if (T && T['defaultProps']) {
        b = re({}, b), T = T['defaultProps'];
        for (var w in T) b[w] === void 0x0 && (b[w] = T[w]);
        return b;
    }
    return b;
}

function _o(T, b, w, R) {
    b = T['memoizedState'], w = w(R, b), w = w == null ? b : re({}, b, w), T['memoizedState'] = w, T['lanes'] === 0x0 && (T['updateQueue']['baseState'] = w);
}
var sa = {
    'isMounted': function(T) {
        return (T = T['_reactInternals']) ? Dn(T) === T : !0x1;
    },
    'enqueueSetState': function(T, b, w) {
        T = T['_reactInternals'];
        var R = Ee(),
            p = tn(T),
            A = Pt(R, p);
        A['payload'] = b, w != null && (A['callback'] = w), b = qt(T, A, p), b !== null && (ct(b, T, p, R), ss(b, T, p));
    },
    'enqueueReplaceState': function(T, b, w) {
        T = T['_reactInternals'];
        var R = Ee(),
            p = tn(T),
            A = Pt(R, p);
        A['tag'] = 0x1, A['payload'] = b, w != null && (A['callback'] = w), b = qt(T, A, p), b !== null && (ct(b, T, p, R), ss(b, T, p));
    },
    'enqueueForceUpdate': function(T, b) {
        T = T['_reactInternals'];
        var w = Ee(),
            R = tn(T),
            p = Pt(w, R);
        p['tag'] = 0x2, b != null && (p['callback'] = b), b = qt(T, p, R), b !== null && (ct(b, T, R, w), ss(b, T, R));
    }
};

function $c(T, b, w, R, p, A, N) {
    return T = T['stateNode'], typeof T['shouldComponentUpdate'] == 'function' ? T['shouldComponentUpdate'](R, A, N) : b['prototype'] && b['prototype']['isPureReactComponent'] ? !li(w, R) || !li(p, A) : !0x0;
}

function jp(T, b, w) {
    var R = !0x1,
        p = an,
        A = b['contextType'];
    return typeof A == 'object' && A !== null ? A = qe(A) : (p = Le(b) ? Cn : Te['current'], R = b['contextTypes'], A = (R = R != null) ? dr(T, p) : an), b = new b(w, A), T['memoizedState'] = b['state'] !== null && b['state'] !== void 0x0 ? b['state'] : null, b['updater'] = sa, T['stateNode'] = b, b['_reactInternals'] = T, R && (T = T['stateNode'], T['__reactInternalMemoizedUnmaskedChildContext'] = p, T['__reactInternalMemoizedMaskedChildContext'] = A), b;
}

function Kc(T, b, w, R) {
    T = b['state'], typeof b['componentWillReceiveProps'] == 'function' && b['componentWillReceiveProps'](w, R), typeof b['UNSAFE_componentWillReceiveProps'] == 'function' && b['UNSAFE_componentWillReceiveProps'](w, R), b['state'] !== T && sa['enqueueReplaceState'](b, b['state'], null);
}

function Fo(T, b, w, R) {
    var p = T['stateNode'];
    p['props'] = w, p['state'] = T['memoizedState'], p['refs'] = {}, $l(T);
    var A = b['contextType'];
    typeof A == 'object' && A !== null ? p['context'] = qe(A) : (A = Le(b) ? Cn : Te['current'], p['context'] = dr(T, A)), p['state'] = T['memoizedState'], A = b['getDerivedStateFromProps'], typeof A == 'function' && (_o(T, b, A, w), p['state'] = T['memoizedState']), typeof b['getDerivedStateFromProps'] == 'function' || typeof p['getSnapshotBeforeUpdate'] == 'function' || typeof p['UNSAFE_componentWillMount'] != 'function' && typeof p['componentWillMount'] != 'function' || (b = p['state'], typeof p['componentWillMount'] == 'function' && p['componentWillMount'](), typeof p['UNSAFE_componentWillMount'] == 'function' && p['UNSAFE_componentWillMount'](), b !== p['state'] && sa['enqueueReplaceState'](p, p['state'], null), Rs(T, w, p, R), p['state'] = T['memoizedState']), typeof p['componentDidMount'] == 'function' && (T['flags'] |= 0x400004);
}

function mr(T, b) {
    try {
        var w = '',
            R = b;
        do w += jg(R), R = R['return']; while (R);
        var p = w;
    } catch (A) {
        p = '\x0aError\x20generating\x20stack:\x20' + A['message'] + '\x0a' + A['stack'];
    }
    return {
        'value': T,
        'source': b,
        'stack': p,
        'digest': null
    };
}

function Ba(T, b, w) {
    return {
        'value': T,
        'source': null,
        'stack': w ?? null,
        'digest': b ?? null
    };
}

function Oo(T, b) {
    try {
        console['error'](b['value']);
    } catch (w) {
        setTimeout(function() {
            throw w;
        });
    }
}
var Gv = typeof WeakMap == 'function' ? WeakMap : Map;

function Np(T, b, w) {
    w = Pt(-0x1, w), w['tag'] = 0x3, w['payload'] = {
        'element': null
    };
    var R = b['value'];
    return w['callback'] = function() {
        Vs || (Vs = !0x0, Yo = R), Oo(T, b);
    }, w;
}

function Sp(T, b, w) {
    w = Pt(-0x1, w), w['tag'] = 0x3;
    var R = T['type']['getDerivedStateFromError'];
    if (typeof R == 'function') {
        var p = b['value'];
        w['payload'] = function() {
            return R(p);
        }, w['callback'] = function() {
            Oo(T, b);
        };
    }
    var A = T['stateNode'];
    return A !== null && typeof A['componentDidCatch'] == 'function' && (w['callback'] = function() {
        Oo(T, b), typeof R != 'function' && (en === null ? en = new Set([this]) : en['add'](this));
        var N = b['stack'];
        this['componentDidCatch'](b['value'], {
            'componentStack': N !== null ? N : ''
        });
    }), w;
}

function Xc(T, b, w) {
    var R = T['pingCache'];
    if (R === null) {
        R = T['pingCache'] = new Gv();
        var p = new Set();
        R['set'](b, p);
    } else p = R['get'](b), p === void 0x0 && (p = new Set(), R['set'](b, p));
    p['has'](w) || (p['add'](w), T = ly['bind'](null, T, b, w), b['then'](T, T));
}

function Gc(T) {
    do {
        var b;
        if ((b = T['tag'] === 0xd) && (b = T['memoizedState'], b = b !== null ? b['dehydrated'] !== null : !0x0), b) return T;
        T = T['return'];
    } while (T !== null);
    return null;
}

function Yc(T, b, w, R, p) {
    return T['mode'] & 0x1 ? (T['flags'] |= 0x10000, T['lanes'] = p, T) : (T === b ? T['flags'] |= 0x10000 : (T['flags'] |= 0x80, w['flags'] |= 0x20000, w['flags'] &= -0xce45, w['tag'] === 0x1 && (w['alternate'] === null ? w['tag'] = 0x11 : (b = Pt(-0x1, 0x1), b['tag'] = 0x2, qt(w, b, 0x1))), w['lanes'] |= 0x1), T);
}
var Yv = _t['ReactCurrentOwner'],
    Ae = !0x1;

function Pe(T, b, w, R) {
    b['child'] = T === null ? Jf(b, null, w, R) : fr(b, T['child'], w, R);
}

function Zc(T, b, w, R, p) {
    w = w['render'];
    var A = b['ref'];
    return lr(b, p), R = Zl(T, b, w, R, A, p), w = Ql(), T !== null && !Ae ? (b['updateQueue'] = T['updateQueue'], b['flags'] &= -0x805, T['lanes'] &= ~p, Lt(T, b, p)) : (Q && w && Fl(b), b['flags'] |= 0x1, Pe(T, b, R, p), b['child']);
}

function Qc(T, b, w, R, p) {
    if (T === null) {
        var A = w['type'];
        return typeof A == 'function' && !ou(A) && A['defaultProps'] === void 0x0 && w['compare'] === null && w['defaultProps'] === void 0x0 ? (b['tag'] = 0xf, b['type'] = A, bp(T, b, A, R, p)) : (T = ds(w['type'], null, R, b, b['mode'], p), T['ref'] = b['ref'], T['return'] = b, b['child'] = T);
    }
    if (A = T['child'], !(T['lanes'] & p)) {
        var N = A['memoizedProps'];
        if (w = w['compare'], w = w !== null ? w : li, w(N, R) && T['ref'] === b['ref']) return Lt(T, b, p);
    }
    return b['flags'] |= 0x1, T = nn(A, R), T['ref'] = b['ref'], T['return'] = b, b['child'] = T;
}

function bp(T, b, w, R, p) {
    if (T !== null) {
        var A = T['memoizedProps'];
        if (li(A, R) && T['ref'] === b['ref'])
            if (Ae = !0x1, b['pendingProps'] = R = A, (T['lanes'] & p) !== 0x0) T['flags'] & 0x20000 && (Ae = !0x0);
            else return b['lanes'] = T['lanes'], Lt(T, b, p);
    }
    return zo(T, b, w, R, p);
}

function kp(T, b, w) {
    var R = b['pendingProps'],
        p = R['children'],
        A = T !== null ? T['memoizedState'] : null;
    if (R['mode'] === 'hidden')
        if (!(b['mode'] & 0x1)) b['memoizedState'] = {
            'baseLanes': 0x0,
            'cachePool': null,
            'transitions': null
        }, X(Jn, Ve), Ve |= w;
        else {
            if (!(w & 0x40000000)) return T = A !== null ? A['baseLanes'] | w : w, b['lanes'] = b['childLanes'] = 0x40000000, b['memoizedState'] = {
                'baseLanes': T,
                'cachePool': null,
                'transitions': null
            }, b['updateQueue'] = null, X(Jn, Ve), Ve |= T, null;
            b['memoizedState'] = {
                'baseLanes': 0x0,
                'cachePool': null,
                'transitions': null
            }, R = A !== null ? A['baseLanes'] : w, X(Jn, Ve), Ve |= R;
        }
    else A !== null ? (R = A['baseLanes'] | w, b['memoizedState'] = null) : R = w, X(Jn, Ve), Ve |= R;
    return Pe(T, b, p, w), b['child'];
}

function Cp(T, b) {
    var w = b['ref'];
    (T === null && w !== null || T !== null && T['ref'] !== w) && (b['flags'] |= 0x200, b['flags'] |= 0x200000);
}

function zo(T, b, w, R, p) {
    var A = Le(w) ? Cn : Te['current'];
    return A = dr(b, A), lr(b, p), w = Zl(T, b, w, R, A, p), R = Ql(), T !== null && !Ae ? (b['updateQueue'] = T['updateQueue'], b['flags'] &= -0x805, T['lanes'] &= ~p, Lt(T, b, p)) : (Q && R && Fl(b), b['flags'] |= 0x1, Pe(T, b, w, p), b['child']);
}

function Jc(T, b, R, p, A) {
    if (Le(R)) {
        var N = !0x0;
        Cs(b);
    } else N = !0x1;
    if (lr(b, A), b['stateNode'] === null) ls(T, b), jp(b, R, p), Fo(b, R, p, A), p = !0x0;
    else if (T === null) {
        var C = b['stateNode'],
            L = b['memoizedProps'];
        C['props'] = L;
        var z = C['context'],
            I = R['contextType'];
        typeof I == 'object' && I !== null ? I = qe(I) : (I = Le(R) ? Cn : Te['current'], I = dr(b, I));
        var K = R['getDerivedStateFromProps'],
            O = typeof K == 'function' || typeof C['getSnapshotBeforeUpdate'] == 'function';
        O || typeof C['UNSAFE_componentWillReceiveProps'] != 'function' && typeof C['componentWillReceiveProps'] != 'function' || (L !== p || z !== I) && Kc(b, C, p, I), Ht = !0x1;
        var x = b['memoizedState'];
        C['state'] = x, Rs(b, p, C, A), z = b['memoizedState'], L !== p || x !== z || De['current'] || Ht ? (typeof K == 'function' && (_o(b, R, K, p), z = b['memoizedState']), (L = Ht || $c(b, R, L, p, x, z, I)) ? (O || typeof C['UNSAFE_componentWillMount'] != 'function' && typeof C['componentWillMount'] != 'function' || (typeof C['componentWillMount'] == 'function' && C['componentWillMount'](), typeof C['UNSAFE_componentWillMount'] == 'function' && C['UNSAFE_componentWillMount']()), typeof C['componentDidMount'] == 'function' && (b['flags'] |= 0x400004)) : (typeof C['componentDidMount'] == 'function' && (b['flags'] |= 0x400004), b['memoizedProps'] = p, b['memoizedState'] = z), C['props'] = p, C['state'] = z, C['context'] = I, p = L) : (typeof C['componentDidMount'] == 'function' && (b['flags'] |= 0x400004), p = !0x1);
    } else {
        C = b['stateNode'], ep(T, b), L = b['memoizedProps'], I = b['type'] === b['elementType'] ? L : at(b['type'], L), C['props'] = I, O = b['pendingProps'], x = C['context'], z = R['contextType'], typeof z == 'object' && z !== null ? z = qe(z) : (z = Le(R) ? Cn : Te['current'], z = dr(b, z));
        var V = R['getDerivedStateFromProps'];
        (K = typeof V == 'function' || typeof C['getSnapshotBeforeUpdate'] == 'function') || typeof C['UNSAFE_componentWillReceiveProps'] != 'function' && typeof C['componentWillReceiveProps'] != 'function' || (L !== O || x !== z) && Kc(b, C, p, z), Ht = !0x1, x = b['memoizedState'], C['state'] = x, Rs(b, p, C, A);
        var S = b['memoizedState'];
        L !== O || x !== S || De['current'] || Ht ? (typeof V == 'function' && (_o(b, R, V, p), S = b['memoizedState']), (I = Ht || $c(b, R, I, p, x, S, z) || !0x1) ? (K || typeof C['UNSAFE_componentWillUpdate'] != 'function' && typeof C['componentWillUpdate'] != 'function' || (typeof C['componentWillUpdate'] == 'function' && C['componentWillUpdate'](p, S, z), typeof C['UNSAFE_componentWillUpdate'] == 'function' && C['UNSAFE_componentWillUpdate'](p, S, z)), typeof C['componentDidUpdate'] == 'function' && (b['flags'] |= 0x4), typeof C['getSnapshotBeforeUpdate'] == 'function' && (b['flags'] |= 0x400)) : (typeof C['componentDidUpdate'] != 'function' || L === T['memoizedProps'] && x === T['memoizedState'] || (b['flags'] |= 0x4), typeof C['getSnapshotBeforeUpdate'] != 'function' || L === T['memoizedProps'] && x === T['memoizedState'] || (b['flags'] |= 0x400), b['memoizedProps'] = p, b['memoizedState'] = S), C['props'] = p, C['state'] = S, C['context'] = z, p = I) : (typeof C['componentDidUpdate'] != 'function' || L === T['memoizedProps'] && x === T['memoizedState'] || (b['flags'] |= 0x4), typeof C['getSnapshotBeforeUpdate'] != 'function' || L === T['memoizedProps'] && x === T['memoizedState'] || (b['flags'] |= 0x400), p = !0x1);
    }
    return Bo(T, b, R, p, N, A);
}

function Bo(T, b, w, R, p, A) {
    Cp(T, b);
    var N = (b['flags'] & 0x80) !== 0x0;
    if (!R && !N) return p && _c(b, w, !0x1), Lt(T, b, A);
    R = b['stateNode'], Yv['current'] = b;
    var C = N && typeof w['getDerivedStateFromError'] != 'function' ? null : R['render']();
    return b['flags'] |= 0x1, T !== null && N ? (b['child'] = fr(b, T['child'], null, A), b['child'] = fr(b, null, C, A)) : Pe(T, b, C, A), b['memoizedState'] = R['state'], p && _c(b, w, !0x0), b['child'];
}

function Tp(T) {
    var b = T['stateNode'];
    b['pendingContext'] ? Vc(T, b['pendingContext'], b['pendingContext'] !== b['context']) : b['context'] && Vc(T, b['context'], !0x1), Kl(T, b['containerInfo']);
}

function qc(T, b, w, R, p) {
    return hr(), zl(p), b['flags'] |= 0x100, Pe(T, b, w, R), b['child'];
}
var Uo = {
    'dehydrated': null,
    'treeContext': null,
    'retryLane': 0x0
};

function Ho(T) {
    return {
        'baseLanes': T,
        'cachePool': null,
        'transitions': null
    };
}

function Pp(T, b, w) {
    var R = b['pendingProps'],
        p = ee['current'],
        A = !0x1,
        N = (b['flags'] & 0x80) !== 0x0,
        C;
    if ((C = N) || (C = T !== null && T['memoizedState'] === null ? !0x1 : (p & 0x2) !== 0x0), C ? (A = !0x0, b['flags'] &= -0x81) : (T === null || T['memoizedState'] !== null) && (p |= 0x1), X(ee, p & 0x1), T === null) return Io(b), T = b['memoizedState'], T !== null && (T = T['dehydrated'], T !== null) ? (b['mode'] & 0x1 ? T['data'] === '$!' ? b['lanes'] = 0x8 : b['lanes'] = 0x40000000 : b['lanes'] = 0x1, null) : (N = R['children'], T = R['fallback'], A ? (R = b['mode'], A = b['child'], N = {
        'mode': 'hidden',
        'children': N
    }, !(R & 0x1) && A !== null ? (A['childLanes'] = 0x0, A['pendingProps'] = N) : A = la(N, R, 0x0, null), T = bn(T, R, w, null), A['return'] = b, T['return'] = b, A['sibling'] = T, b['child'] = A, b['child']['memoizedState'] = Ho(w), b['memoizedState'] = Uo, T) : eu(b, N));
    if (p = T['memoizedState'], p !== null && (C = p['dehydrated'], C !== null)) return Zv(T, b, N, R, C, p, w);
    if (A) {
        A = R['fallback'], N = b['mode'], p = T['child'], C = p['sibling'];
        var h = {
            'mode': 'hidden',
            'children': R['children']
        };
        return !(N & 0x1) && b['child'] !== p ? (R = b['child'], R['childLanes'] = 0x0, R['pendingProps'] = h, b['deletions'] = null) : (R = nn(p, h), R['subtreeFlags'] = p['subtreeFlags'] & 0xe00000), C !== null ? A = nn(C, A) : (A = bn(A, N, w, null), A['flags'] |= 0x2), A['return'] = b, R['return'] = b, R['sibling'] = A, b['child'] = R, R = A, A = b['child'], N = T['child']['memoizedState'], N = N === null ? Ho(w) : {
            'baseLanes': N['baseLanes'] | w,
            'cachePool': null,
            'transitions': N['transitions']
        }, A['memoizedState'] = N, A['childLanes'] = T['childLanes'] & ~w, b['memoizedState'] = Uo, R;
    }
    return A = T['child'], T = A['sibling'], R = nn(A, {
        'mode': 'visible',
        'children': R['children']
    }), !(b['mode'] & 0x1) && (R['lanes'] = w), R['return'] = b, R['sibling'] = null, T !== null && (w = b['deletions'], w === null ? (b['deletions'] = [T], b['flags'] |= 0x10) : w['push'](T)), b['child'] = R, b['memoizedState'] = null, R;
}

function eu(T, b) {
    return b = la({
        'mode': 'visible',
        'children': b
    }, T['mode'], 0x0, null), b['return'] = T, T['child'] = b;
}

function Gi(T, b, w, R) {
    return R !== null && zl(R), fr(b, T['child'], null, w), T = eu(b, b['pendingProps']['children']), T['flags'] |= 0x2, b['memoizedState'] = null, T;
}

function Zv(T, b, w, R, p, A, N) {
    if (w) return b['flags'] & 0x100 ? (b['flags'] &= -0x101, R = Ba(Error(E(0x1a6))), Gi(T, b, N, R)) : b['memoizedState'] !== null ? (b['child'] = T['child'], b['flags'] |= 0x80, null) : (A = R['fallback'], p = b['mode'], R = la({
        'mode': 'visible',
        'children': R['children']
    }, p, 0x0, null), A = bn(A, p, N, null), A['flags'] |= 0x2, R['return'] = b, A['return'] = b, R['sibling'] = A, b['child'] = R, b['mode'] & 0x1 && fr(b, T['child'], null, N), b['child']['memoizedState'] = Ho(N), b['memoizedState'] = Uo, A);
    if (!(b['mode'] & 0x1)) return Gi(T, b, N, null);
    if (p['data'] === '$!') {
        if (R = p['nextSibling'] && p['nextSibling']['dataset'], R) var C = R['dgst'];
        return R = C, A = Error(E(0x1a3)), R = Ba(A, R, void 0x0), Gi(T, b, N, R);
    }
    if (C = (N & T['childLanes']) !== 0x0, Ae || C) {
        if (R = ge, R !== null) {
            switch (N & -N) {
                case 0x4:
                    p = 0x2;
                    break;
                case 0x10:
                    p = 0x8;
                    break;
                case 0x40:
                case 0x80:
                case 0x100:
                case 0x200:
                case 0x400:
                case 0x800:
                case 0x1000:
                case 0x2000:
                case 0x4000:
                case 0x8000:
                case 0x10000:
                case 0x20000:
                case 0x40000:
                case 0x80000:
                case 0x100000:
                case 0x200000:
                case 0x400000:
                case 0x800000:
                case 0x1000000:
                case 0x2000000:
                case 0x4000000:
                    p = 0x20;
                    break;
                case 0x20000000:
                    p = 0x10000000;
                    break;
                default:
                    p = 0x0;
            }
            p = p & (R['suspendedLanes'] | N) ? 0x0 : p, p !== 0x0 && p !== A['retryLane'] && (A['retryLane'] = p, Dt(T, p), ct(R, T, p, -0x1));
        }
        return au(), R = Ba(Error(E(0x1a5))), Gi(T, b, N, R);
    }
    return p['data'] === '$?' ? (b['flags'] |= 0x80, b['child'] = T['child'], b = uy['bind'](null, T), p['_reactRetry'] = b, null) : (T = A['treeContext'], _e = Jt(p['nextSibling']), Fe = b, Q = !0x0, lt = null, T !== null && (Ye[Ze++] = kt, Ye[Ze++] = Ct, Ye[Ze++] = Tn, kt = T['id'], Ct = T['overflow'], Tn = b), b = eu(b, R['children']), b['flags'] |= 0x1000, b);
}

function ed(T, b, w) {
    T['lanes'] |= b;
    var R = T['alternate'];
    R !== null && (R['lanes'] |= b), Vo(T['return'], b, w);
}

function Ua(T, b, w, R, p) {
    var A = T['memoizedState'];
    A === null ? T['memoizedState'] = {
        'isBackwards': b,
        'rendering': null,
        'renderingStartTime': 0x0,
        'last': R,
        'tail': w,
        'tailMode': p
    } : (A['isBackwards'] = b, A['rendering'] = null, A['renderingStartTime'] = 0x0, A['last'] = R, A['tail'] = w, A['tailMode'] = p);
}

function Ep(T, b, w) {
    var R = b['pendingProps'],
        p = R['revealOrder'],
        A = R['tail'];
    if (Pe(T, b, R['children'], w), R = ee['current'], R & 0x2) R = R & 0x1 | 0x2, b['flags'] |= 0x80;
    else {
        if (T !== null && T['flags'] & 0x80) N: for (T = b['child']; T !== null;) {
            if (T['tag'] === 0xd) T['memoizedState'] !== null && ed(T, w, b);
            else if (T['tag'] === 0x13) ed(T, w, b);
            else if (T['child'] !== null) {
                T['child']['return'] = T, T = T['child'];
                continue;
            }
            if (T === b) break N;
            for (; T['sibling'] === null;) {
                if (T['return'] === null || T['return'] === b) break N;
                T = T['return'];
            }
            T['sibling']['return'] = T['return'], T = T['sibling'];
        }
        R &= 0x1;
    }
    if (X(ee, R), !(b['mode'] & 0x1)) b['memoizedState'] = null;
    else switch (p) {
        case 'forwards':
            for (w = b['child'], p = null; w !== null;) T = w['alternate'], T !== null && As(T) === null && (p = w), w = w['sibling'];
            w = p, w === null ? (p = b['child'], b['child'] = null) : (p = w['sibling'], w['sibling'] = null), Ua(b, !0x1, p, w, A);
            break;
        case 'backwards':
            for (w = null, p = b['child'], b['child'] = null; p !== null;) {
                if (T = p['alternate'], T !== null && As(T) === null) {
                    b['child'] = p;
                    break;
                }
                T = p['sibling'], p['sibling'] = w, w = p, p = T;
            }
            Ua(b, !0x0, w, null, A);
            break;
        case 'together':
            Ua(b, !0x1, null, null, void 0x0);
            break;
        default:
            b['memoizedState'] = null;
    }
    return b['child'];
}

function ls(T, b) {
    !(b['mode'] & 0x1) && T !== null && (T['alternate'] = null, b['alternate'] = null, b['flags'] |= 0x2);
}

function Lt(T, b, w) {
    if (T !== null && (b['dependencies'] = T['dependencies']), En |= b['lanes'], !(w & b['childLanes'])) return null;
    if (T !== null && b['child'] !== T['child']) throw Error(E(0x99));
    if (b['child'] !== null) {
        for (T = b['child'], w = nn(T, T['pendingProps']), b['child'] = w, w['return'] = b; T['sibling'] !== null;) T = T['sibling'], w = w['sibling'] = nn(T, T['pendingProps']), w['return'] = b;
        w['sibling'] = null;
    }
    return b['child'];
}

function Qv(T, b, w) {
    switch (b['tag']) {
        case 0x3:
            Tp(b), hr();
            break;
        case 0x5:
            tp(b);
            break;
        case 0x1:
            Le(b['type']) && Cs(b);
            break;
        case 0x4:
            Kl(b, b['stateNode']['containerInfo']);
            break;
        case 0xa:
            var R = b['type']['_context'],
                p = b['memoizedProps']['value'];
            X(Es, R['_currentValue']), R['_currentValue'] = p;
            break;
        case 0xd:
            if (R = b['memoizedState'], R !== null) return R['dehydrated'] !== null ? (X(ee, ee['current'] & 0x1), b['flags'] |= 0x80, null) : w & b['child']['childLanes'] ? Pp(T, b, w) : (X(ee, ee['current'] & 0x1), T = Lt(T, b, w), T !== null ? T['sibling'] : null);
            X(ee, ee['current'] & 0x1);
            break;
        case 0x13:
            if (R = (w & b['childLanes']) !== 0x0, T['flags'] & 0x80) {
                if (R) return Ep(T, b, w);
                b['flags'] |= 0x80;
            }
            if (p = b['memoizedState'], p !== null && (p['rendering'] = null, p['tail'] = null, p['lastEffect'] = null), X(ee, ee['current']), R) break;
            return null;
        case 0x16:
        case 0x17:
            return b['lanes'] = 0x0, kp(T, b, w);
    }
    return Lt(T, b, w);
}
var Mp, Wo, Rp, Ap;
Mp = function(T, b) {
    for (var w = b['child']; w !== null;) {
        if (w['tag'] === 0x5 || w['tag'] === 0x6) T['appendChild'](w['stateNode']);
        else if (w['tag'] !== 0x4 && w['child'] !== null) {
            w['child']['return'] = w, w = w['child'];
            continue;
        }
        if (w === b) break;
        for (; w['sibling'] === null;) {
            if (w['return'] === null || w['return'] === b) return;
            w = w['return'];
        }
        w['sibling']['return'] = w['return'], w = w['sibling'];
    }
};
Wo = function() {};
Rp = function(T, b, w, R) {
    var p = T['memoizedProps'];
    if (p !== R) {
        T = b['stateNode'], jn(vt['current']);
        var A = null;
        switch (w) {
            case 'input':
                p = ho(T, p), R = ho(T, R), A = [];
                break;
            case 'select':
                p = re({}, p, {
                    'value': void 0x0
                }), R = re({}, R, {
                    'value': void 0x0
                }), A = [];
                break;
            case 'textarea':
                p = mo(T, p), R = mo(T, R), A = [];
                break;
            default:
                typeof p['onClick'] != 'function' && typeof R['onClick'] == 'function' && (T['onclick'] = bs);
        }
        vo(w, R);
        var N;
        w = null;
        for (L in p)
            if (!R['hasOwnProperty'](L) && p['hasOwnProperty'](L) && p[L] != null)
                if (L === 'style') {
                    var C = p[L];
                    for (N in C) C['hasOwnProperty'](N) && (w || (w = {}), w[N] = '');
                } else L !== 'dangerouslySetInnerHTML' && L !== 'children' && L !== 'suppressContentEditableWarning' && L !== 'suppressHydrationWarning' && L !== 'autoFocus' && (ti['hasOwnProperty'](L) ? A || (A = []) : (A = A || [])['push'](L, null));
        for (L in R) {
            var h = R[L];
            if (C = p != null ? p[L] : void 0x0, R['hasOwnProperty'](L) && h !== C && (h != null || C != null))
                if (L === 'style')
                    if (C) {
                        for (N in C) !C['hasOwnProperty'](N) || h && h['hasOwnProperty'](N) || (w || (w = {}), w[N] = '');
                        for (N in h) h['hasOwnProperty'](N) && C[N] !== h[N] && (w || (w = {}), w[N] = h[N]);
                    } else w || (A || (A = []), A['push'](L, w)), w = h;
            else L === 'dangerouslySetInnerHTML' ? (h = h ? h['__html'] : void 0x0, C = C ? C['__html'] : void 0x0, h != null && C !== h && (A = A || [])['push'](L, h)) : L === 'children' ? typeof h != 'string' && typeof h != 'number' || (A = A || [])['push'](L, '' + h) : L !== 'suppressContentEditableWarning' && L !== 'suppressHydrationWarning' && (ti['hasOwnProperty'](L) ? (h != null && L === 'onScroll' && G('scroll', T), A || C === h || (A = [])) : (A = A || [])['push'](L, h));
        }
        w && (A = A || [])['push']('style', w);
        var L = A;
        (b['updateQueue'] = L) && (b['flags'] |= 0x4);
    }
};
Ap = function(T, b, w, R) {
    w !== R && (b['flags'] |= 0x4);
};

function Ar(T, b) {
    if (!Q) switch (T['tailMode']) {
        case 'hidden':
            b = T['tail'];
            for (var w = null; b !== null;) b['alternate'] !== null && (w = b), b = b['sibling'];
            w === null ? T['tail'] = null : w['sibling'] = null;
            break;
        case 'collapsed':
            w = T['tail'];
            for (var R = null; w !== null;) w['alternate'] !== null && (R = w), w = w['sibling'];
            R === null ? b || T['tail'] === null ? T['tail'] = null : T['tail']['sibling'] = null : R['sibling'] = null;
    }
}

function Se(T) {
    var b = T['alternate'] !== null && T['alternate']['child'] === T['child'],
        w = 0x0,
        R = 0x0;
    if (b)
        for (var p = T['child']; p !== null;) w |= p['lanes'] | p['childLanes'], R |= p['subtreeFlags'] & 0xe00000, R |= p['flags'] & 0xe00000, p['return'] = T, p = p['sibling'];
    else
        for (p = T['child']; p !== null;) w |= p['lanes'] | p['childLanes'], R |= p['subtreeFlags'], R |= p['flags'], p['return'] = T, p = p['sibling'];
    return T['subtreeFlags'] |= R, T['childLanes'] = w, b;
}

function Jv(T, b, w) {
    var R = b['pendingProps'];
    switch (Ol(b), b['tag']) {
        case 0x2:
        case 0x10:
        case 0xf:
        case 0x0:
        case 0xb:
        case 0x7:
        case 0x8:
        case 0xc:
        case 0x9:
        case 0xe:
            return Se(b), null;
        case 0x1:
            return Le(b['type']) && ks(), Se(b), null;
        case 0x3:
            return R = b['stateNode'], pr(), Y(De), Y(Te), Gl(), R['pendingContext'] && (R['context'] = R['pendingContext'], R['pendingContext'] = null), (T === null || T['child'] === null) && (Ki(b) ? b['flags'] |= 0x4 : T === null || T['memoizedState']['isDehydrated'] && !(b['flags'] & 0x100) || (b['flags'] |= 0x400, lt !== null && (Jo(lt), lt = null))), Wo(T, b), Se(b), null;
        case 0x5:
            Xl(b);
            var p = jn(fi['current']);
            if (w = b['type'], T !== null && b['stateNode'] != null) Rp(T, b, w, R, p), T['ref'] !== b['ref'] && (b['flags'] |= 0x200, b['flags'] |= 0x200000);
            else {
                if (!R) {
                    if (b['stateNode'] === null) throw Error(E(0xa6));
                    return Se(b), null;
                }
                if (T = jn(vt['current']), Ki(b)) {
                    R = b['stateNode'], w = b['type'];
                    var A = b['memoizedProps'];
                    switch (R[mt] = b, R[di] = A, T = (b['mode'] & 0x1) !== 0x0, w) {
                        case 'dialog':
                            G('cancel', R), G('close', R);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            G('load', R);
                            break;
                        case 'video':
                        case 'audio':
                            for (p = 0x0; p < Fr['length']; p++) G(Fr[p], R);
                            break;
                        case 'source':
                            G('error', R);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            G('error', R), G('load', R);
                            break;
                        case 'details':
                            G('toggle', R);
                            break;
                        case 'input':
                            uc(R, A), G('invalid', R);
                            break;
                        case 'select':
                            R['_wrapperState'] = {
                                'wasMultiple': !!A['multiple']
                            }, G('invalid', R);
                            break;
                        case 'textarea':
                            dc(R, A), G('invalid', R);
                    }
                    vo(w, A), p = null;
                    for (var N in A)
                        if (A['hasOwnProperty'](N)) {
                            var C = A[N];
                            N === 'children' ? typeof C == 'string' ? R['textContent'] !== C && (A['suppressHydrationWarning'] !== !0x0 && $i(R['textContent'], C, T), p = ['children', C]) : typeof C == 'number' && R['textContent'] !== '' + C && (A['suppressHydrationWarning'] !== !0x0 && $i(R['textContent'], C, T), p = ['children', '' + C]) : ti['hasOwnProperty'](N) && C != null && N === 'onScroll' && G('scroll', R);
                        } switch (w) {
                        case 'input':
                            _i(R), cc(R, A, !0x0);
                            break;
                        case 'textarea':
                            _i(R), hc(R);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof A['onClick'] == 'function' && (R['onclick'] = bs);
                    }
                    R = p, b['updateQueue'] = R, R !== null && (b['flags'] |= 0x4);
                } else {
                    N = p['nodeType'] === 0x9 ? p : p['ownerDocument'], T === 'http://www.w3.org/1999/xhtml' && (T = af(w)), T === 'http://www.w3.org/1999/xhtml' ? w === 'script' ? (T = N['createElement']('div'), T['innerHTML'] = '<script></script>', T = T['removeChild'](T['firstChild'])) : typeof R['is'] == 'string' ? T = N['createElement'](w, {
                        'is': R['is']
                    }) : (T = N['createElement'](w), w === 'select' && (N = T, R['multiple'] ? N['multiple'] = !0x0 : R['size'] && (N['size'] = R['size']))) : T = N['createElementNS'](T, w), T[mt] = b, T[di] = R, Mp(T, b, !0x1, !0x1), b['stateNode'] = T;
                    L: {
                        switch (N = yo(w, R), w) {
                            case 'dialog':
                                G('cancel', T), G('close', T), p = R;
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                G('load', T), p = R;
                                break;
                            case 'video':
                            case 'audio':
                                for (p = 0x0; p < Fr['length']; p++) G(Fr[p], T);
                                p = R;
                                break;
                            case 'source':
                                G('error', T), p = R;
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                G('error', T), G('load', T), p = R;
                                break;
                            case 'details':
                                G('toggle', T), p = R;
                                break;
                            case 'input':
                                uc(T, R), p = ho(T, R), G('invalid', T);
                                break;
                            case 'option':
                                p = R;
                                break;
                            case 'select':
                                T['_wrapperState'] = {
                                    'wasMultiple': !!R['multiple']
                                }, p = re({}, R, {
                                    'value': void 0x0
                                }), G('invalid', T);
                                break;
                            case 'textarea':
                                dc(T, R), p = mo(T, R), G('invalid', T);
                                break;
                            default:
                                p = R;
                        }
                        vo(w, p),
                        C = p;
                        for (A in C)
                            if (C['hasOwnProperty'](A)) {
                                var h = C[A];
                                A === 'style' ? uf(T, h) : A === 'dangerouslySetInnerHTML' ? (h = h ? h['__html'] : void 0x0, h != null && of(T, h)) : A === 'children' ? typeof h == 'string' ? (w !== 'textarea' || h !== '') && ni(T, h) : typeof h == 'number' && ni(T, '' + h) : A !== 'suppressContentEditableWarning' && A !== 'suppressHydrationWarning' && A !== 'autoFocus' && (ti['hasOwnProperty'](A) ? h != null && A === 'onScroll' && G('scroll', T) : h != null && bl(T, A, h, N));
                            } switch (w) {
                            case 'input':
                                _i(T), cc(T, R, !0x1);
                                break;
                            case 'textarea':
                                _i(T), hc(T);
                                break;
                            case 'option':
                                R['value'] != null && T['setAttribute']('value', '' + sn(R['value']));
                                break;
                            case 'select':
                                T['multiple'] = !!R['multiple'], A = R['value'], A != null ? ir(T, !!R['multiple'], A, !0x1) : R['defaultValue'] != null && ir(T, !!R['multiple'], R['defaultValue'], !0x0);
                                break;
                            default:
                                typeof p['onClick'] == 'function' && (T['onclick'] = bs);
                        }
                        switch (w) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                R = !!R['autoFocus'];
                                break L;
                            case 'img':
                                R = !0x0;
                                break L;
                            default:
                                R = !0x1;
                        }
                    }
                    R && (b['flags'] |= 0x4);
                }
                b['ref'] !== null && (b['flags'] |= 0x200, b['flags'] |= 0x200000);
            }
            return Se(b), null;
        case 0x6:
            if (T && b['stateNode'] != null) Ap(T, b, T['memoizedProps'], R);
            else {
                if (typeof R != 'string' && b['stateNode'] === null) throw Error(E(0xa6));
                if (w = jn(fi['current']), jn(vt['current']), Ki(b)) {
                    if (R = b['stateNode'], w = b['memoizedProps'], R[mt] = b, (A = R['nodeValue'] !== w) && (T = Fe, T !== null)) switch (T['tag']) {
                        case 0x3:
                            $i(R['nodeValue'], w, (T['mode'] & 0x1) !== 0x0);
                            break;
                        case 0x5:
                            T['memoizedProps']['suppressHydrationWarning'] !== !0x0 && $i(R['nodeValue'], w, (T['mode'] & 0x1) !== 0x0);
                    }
                    A && (b['flags'] |= 0x4);
                } else R = (w['nodeType'] === 0x9 ? w : w['ownerDocument'])['createTextNode'](R), R[mt] = b, b['stateNode'] = R;
            }
            return Se(b), null;
        case 0xd:
            if (Y(ee), R = b['memoizedState'], T === null || T['memoizedState'] !== null && T['memoizedState']['dehydrated'] !== null) {
                if (Q && _e !== null && b['mode'] & 0x1 && !(b['flags'] & 0x80)) Zf(), hr(), b['flags'] |= 0x18100, A = !0x1;
                else if (A = Ki(b), R !== null && R['dehydrated'] !== null) {
                    if (T === null) {
                        if (!A) throw Error(E(0x13e));
                        if (A = b['memoizedState'], A = A !== null ? A['dehydrated'] : null, !A) throw Error(E(0x13d));
                        A[mt] = b;
                    } else hr(), !(b['flags'] & 0x80) && (b['memoizedState'] = null), b['flags'] |= 0x4;
                    Se(b), A = !0x1;
                } else lt !== null && (Jo(lt), lt = null), A = !0x0;
                if (!A) return b['flags'] & 0x10000 ? b : null;
            }
            return b['flags'] & 0x80 ? (b['lanes'] = w, b) : (R = R !== null, R !== (T !== null && T['memoizedState'] !== null) && R && (b['child']['flags'] |= 0x2000, b['mode'] & 0x1 && (T === null || ee['current'] & 0x1 ? pe === 0x0 && (pe = 0x3) : au())), b['updateQueue'] !== null && (b['flags'] |= 0x4), Se(b), null);
        case 0x4:
            return pr(), Wo(T, b), T === null && ui(b['stateNode']['containerInfo']), Se(b), null;
        case 0xa:
            return Hl(b['type']['_context']), Se(b), null;
        case 0x11:
            return Le(b['type']) && ks(), Se(b), null;
        case 0x13:
            if (Y(ee), A = b['memoizedState'], A === null) return Se(b), null;
            if (R = (b['flags'] & 0x80) !== 0x0, N = A['rendering'], N === null)
                if (R) Ar(A, !0x1);
                else {
                    if (pe !== 0x0 || T !== null && T['flags'] & 0x80)
                        for (T = b['child']; T !== null;) {
                            if (N = As(T), N !== null) {
                                for (b['flags'] |= 0x80, Ar(A, !0x1), R = N['updateQueue'], R !== null && (b['updateQueue'] = R, b['flags'] |= 0x4), b['subtreeFlags'] = 0x0, R = w, w = b['child']; w !== null;) A = w, T = R, A['flags'] &= 0xe00002, N = A['alternate'], N === null ? (A['childLanes'] = 0x0, A['lanes'] = T, A['child'] = null, A['subtreeFlags'] = 0x0, A['memoizedProps'] = null, A['memoizedState'] = null, A['updateQueue'] = null, A['dependencies'] = null, A['stateNode'] = null) : (A['childLanes'] = N['childLanes'], A['lanes'] = N['lanes'], A['child'] = N['child'], A['subtreeFlags'] = 0x0, A['deletions'] = null, A['memoizedProps'] = N['memoizedProps'], A['memoizedState'] = N['memoizedState'], A['updateQueue'] = N['updateQueue'], A['type'] = N['type'], T = N['dependencies'], A['dependencies'] = T === null ? null : {
                                    'lanes': T['lanes'],
                                    'firstContext': T['firstContext']
                                }), w = w['sibling'];
                                return X(ee, ee['current'] & 0x1 | 0x2), b['child'];
                            }
                            T = T['sibling'];
                        }
                    A['tail'] !== null && ue() > gr && (b['flags'] |= 0x80, R = !0x0, Ar(A, !0x1), b['lanes'] = 0x400000);
                }
            else {
                if (!R)
                    if (T = As(N), T !== null) {
                        if (b['flags'] |= 0x80, R = !0x0, w = T['updateQueue'], w !== null && (b['updateQueue'] = w, b['flags'] |= 0x4), Ar(A, !0x0), A['tail'] === null && A['tailMode'] === 'hidden' && !N['alternate'] && !Q) return Se(b), null;
                    } else 0x2 * ue() - A['renderingStartTime'] > gr && w !== 0x40000000 && (b['flags'] |= 0x80, R = !0x0, Ar(A, !0x1), b['lanes'] = 0x400000);
                A['isBackwards'] ? (N['sibling'] = b['child'], b['child'] = N) : (w = A['last'], w !== null ? w['sibling'] = N : b['child'] = N, A['last'] = N);
            }
            return A['tail'] !== null ? (b = A['tail'], A['rendering'] = b, A['tail'] = b['sibling'], A['renderingStartTime'] = ue(), b['sibling'] = null, w = ee['current'], X(ee, R ? w & 0x1 | 0x2 : w & 0x1), b) : (Se(b), null);
        case 0x16:
        case 0x17:
            return su(), R = b['memoizedState'] !== null, T !== null && T['memoizedState'] !== null !== R && (b['flags'] |= 0x2000), R && b['mode'] & 0x1 ? Ve & 0x40000000 && (Se(b), b['subtreeFlags'] & 0x6 && (b['flags'] |= 0x2000)) : Se(b), null;
        case 0x18:
            return null;
        case 0x19:
            return null;
    }
    throw Error(E(0x9c, b['tag']));
}

function qv(T, b) {
    switch (Ol(b), b['tag']) {
        case 0x1:
            return Le(b['type']) && ks(), T = b['flags'], T & 0x10000 ? (b['flags'] = T & -0x10001 | 0x80, b) : null;
        case 0x3:
            return pr(), Y(De), Y(Te), Gl(), T = b['flags'], T & 0x10000 && !(T & 0x80) ? (b['flags'] = T & -0x10001 | 0x80, b) : null;
        case 0x5:
            return Xl(b), null;
        case 0xd:
            if (Y(ee), T = b['memoizedState'], T !== null && T['dehydrated'] !== null) {
                if (b['alternate'] === null) throw Error(E(0x154));
                hr();
            }
            return T = b['flags'], T & 0x10000 ? (b['flags'] = T & -0x10001 | 0x80, b) : null;
        case 0x13:
            return Y(ee), null;
        case 0x4:
            return pr(), null;
        case 0xa:
            return Hl(b['type']['_context']), null;
        case 0x16:
        case 0x17:
            return su(), null;
        case 0x18:
            return null;
        default:
            return null;
    }
}
var Yi = !0x1,
    ke = !0x1,
    ey = typeof WeakSet == 'function' ? WeakSet : Set,
    D = null;

function Qn(T, b) {
    var w = T['ref'];
    if (w !== null)
        if (typeof w == 'function') try {
            w(null);
        } catch (R) {
            ae(T, b, R);
        } else w['current'] = null;
}

function $o(T, b, w) {
    try {
        w();
    } catch (R) {
        ae(T, b, R);
    }
}
var td = !0x1;

function ty(T, R) {
    if (Po = js, T = _f(), _l(T)) {
        if ('selectionStart' in T) var A = {
            'start': T['selectionStart'],
            'end': T['selectionEnd']
        };
        else Y7: {
            A = (A = T['ownerDocument']) && A['defaultView'] || window;
            var C = A['getSelection'] && A['getSelection']();
            if (C && C['rangeCount'] !== 0x0) {
                A = C['anchorNode'];
                var L = C['anchorOffset'],
                    z = C['focusNode'];
                C = C['focusOffset'];
                try {
                    A['nodeType'], z['nodeType'];
                } catch {
                    A = null;
                    break Y7;
                }
                var I = 0x0,
                    K = -0x1,
                    O = -0x1,
                    V = 0x0,
                    S = 0x0,
                    J = T,
                    B = null;
                Y8: for (;;) {
                    for (var j; J !== A || L !== 0x0 && J['nodeType'] !== 0x3 || (K = I + L), J !== z || C !== 0x0 && J['nodeType'] !== 0x3 || (O = I + C), J['nodeType'] === 0x3 && (I += J['nodeValue']['length']), (j = J['firstChild']) !== null;) B = J, J = j;
                    for (;;) {
                        if (J === T) break Y8;
                        if (B === A && ++V === L && (K = I), B === z && ++S === C && (O = I), (j = J['nextSibling']) !== null) break;
                        J = B, B = J['parentNode'];
                    }
                    J = j;
                }
                A = K === -0x1 || O === -0x1 ? null : {
                    'start': K,
                    'end': O
                };
            } else A = null;
        }
        A = A || {
            'start': 0x0,
            'end': 0x0
        };
    } else A = null;
    for (Eo = {
            'focusedElem': T,
            'selectionRange': A
        }, js = !0x1, D = R; D !== null;)
        if (R = D, T = R['child'], (R['subtreeFlags'] & 0x404) !== 0x0 && T !== null) T['return'] = R, D = T;
        else
            for (; D !== null;) {
                R = D;
                try {
                    var M = R['alternate'];
                    if (R['flags'] & 0x400) switch (R['tag']) {
                        case 0x0:
                        case 0xb:
                        case 0xf:
                            break;
                        case 0x1:
                            if (M !== null) {
                                var U = M['memoizedProps'],
                                    Y0 = M['memoizedState'],
                                    Y3 = R['stateNode'],
                                    Y4 = Y3['getSnapshotBeforeUpdate'](R['elementType'] === R['type'] ? U : at(R['type'], U), Y0);
                                Y3['__reactInternalSnapshotBeforeUpdate'] = Y4;
                            }
                            break;
                        case 0x3:
                            var Y5 = R['stateNode']['containerInfo'];
                            Y5['nodeType'] === 0x1 ? Y5['textContent'] = '' : Y5['nodeType'] === 0x9 && Y5['documentElement'] && Y5['removeChild'](Y5['documentElement']);
                            break;
                        case 0x5:
                        case 0x6:
                        case 0x4:
                        case 0x11:
                            break;
                        default:
                            throw Error(E(0xa3));
                    }
                } catch (Y6) {
                    ae(R, R['return'], Y6);
                }
                if (T = R['sibling'], T !== null) {
                    T['return'] = R['return'], D = T;
                    break;
                }
                D = R['return'];
            }
    return M = td, td = !0x1, M;
}

function Gr(T, b, w) {
    var R = b['updateQueue'];
    if (R = R !== null ? R['lastEffect'] : null, R !== null) {
        var p = R = R['next'];
        do {
            if ((p['tag'] & T) === T) {
                var A = p['destroy'];
                p['destroy'] = void 0x0, A !== void 0x0 && $o(b, w, A);
            }
            p = p['next'];
        } while (p !== R);
    }
}

function aa(T, b) {
    if (b = b['updateQueue'], b = b !== null ? b['lastEffect'] : null, b !== null) {
        var w = b = b['next'];
        do {
            if ((w['tag'] & T) === T) {
                var R = w['create'];
                w['destroy'] = R();
            }
            w = w['next'];
        } while (w !== b);
    }
}

function Ko(T) {
    var b = T['ref'];
    if (b !== null) {
        var w = T['stateNode'];
        switch (T['tag']) {
            case 0x5:
                T = w;
                break;
            default:
                T = w;
        }
        typeof b == 'function' ? b(T) : b['current'] = T;
    }
}

function Dp(T) {
    var b = T['alternate'];
    b !== null && (T['alternate'] = null, Dp(b)), T['child'] = null, T['deletions'] = null, T['sibling'] = null, T['tag'] === 0x5 && (b = T['stateNode'], b !== null && (delete b[mt], delete b[di], delete b[Ao], delete b[_v], delete b[Fv])), T['stateNode'] = null, T['return'] = null, T['dependencies'] = null, T['memoizedProps'] = null, T['memoizedState'] = null, T['pendingProps'] = null, T['stateNode'] = null, T['updateQueue'] = null;
}

function Lp(T) {
    return T['tag'] === 0x5 || T['tag'] === 0x3 || T['tag'] === 0x4;
}

function nd(T) {
    b: for (;;) {
        for (; T['sibling'] === null;) {
            if (T['return'] === null || Lp(T['return'])) return null;
            T = T['return'];
        }
        for (T['sibling']['return'] = T['return'], T = T['sibling']; T['tag'] !== 0x5 && T['tag'] !== 0x6 && T['tag'] !== 0x12;) {
            if (T['flags'] & 0x2 || T['child'] === null || T['tag'] === 0x4) continue b;
            T['child']['return'] = T, T = T['child'];
        }
        if (!(T['flags'] & 0x2)) return T['stateNode'];
    }
}

function Xo(T, b, w) {
    var R = T['tag'];
    if (R === 0x5 || R === 0x6) T = T['stateNode'], b ? w['nodeType'] === 0x8 ? w['parentNode']['insertBefore'](T, b) : w['insertBefore'](T, b) : (w['nodeType'] === 0x8 ? (b = w['parentNode'], b['insertBefore'](T, w)) : (b = w, b['appendChild'](T)), w = w['_reactRootContainer'], w != null || b['onclick'] !== null || (b['onclick'] = bs));
    else if (R !== 0x4 && (T = T['child'], T !== null))
        for (Xo(T, b, w), T = T['sibling']; T !== null;) Xo(T, b, w), T = T['sibling'];
}

function Go(T, b, w) {
    var R = T['tag'];
    if (R === 0x5 || R === 0x6) T = T['stateNode'], b ? w['insertBefore'](T, b) : w['appendChild'](T);
    else if (R !== 0x4 && (T = T['child'], T !== null))
        for (Go(T, b, w), T = T['sibling']; T !== null;) Go(T, b, w), T = T['sibling'];
}
var ye = null,
    ot = !0x1;

function zt(T, b, w) {
    for (w = w['child']; w !== null;) Ip(T, b, w), w = w['sibling'];
}

function Ip(T, b, w) {
    if (gt && typeof gt['onCommitFiberUnmount'] == 'function') try {
        gt['onCommitFiberUnmount'](Js, w);
    } catch {}
    switch (w['tag']) {
        case 0x5:
            ke || Qn(w, b);
        case 0x6:
            var R = ye,
                p = ot;
            ye = null, zt(T, b, w), ye = R, ot = p, ye !== null && (ot ? (T = ye, w = w['stateNode'], T['nodeType'] === 0x8 ? T['parentNode']['removeChild'](w) : T['removeChild'](w)) : ye['removeChild'](w['stateNode']));
            break;
        case 0x12:
            ye !== null && (ot ? (T = ye, w = w['stateNode'], T['nodeType'] === 0x8 ? Ia(T['parentNode'], w) : T['nodeType'] === 0x1 && Ia(T, w), ai(T)) : Ia(ye, w['stateNode']));
            break;
        case 0x4:
            R = ye, p = ot, ye = w['stateNode']['containerInfo'], ot = !0x0, zt(T, b, w), ye = R, ot = p;
            break;
        case 0x0:
        case 0xb:
        case 0xe:
        case 0xf:
            if (!ke && (R = w['updateQueue'], R !== null && (R = R['lastEffect'], R !== null))) {
                p = R = R['next'];
                do {
                    var A = p,
                        N = A['destroy'];
                    A = A['tag'], N !== void 0x0 && (A & 0x2 || A & 0x4) && $o(w, b, N), p = p['next'];
                } while (p !== R);
            }
            zt(T, b, w);
            break;
        case 0x1:
            if (!ke && (Qn(w, b), R = w['stateNode'], typeof R['componentWillUnmount'] == 'function')) try {
                R['props'] = w['memoizedProps'], R['state'] = w['memoizedState'], R['componentWillUnmount']();
            } catch (C) {
                ae(w, b, C);
            }
            zt(T, b, w);
            break;
        case 0x15:
            zt(T, b, w);
            break;
        case 0x16:
            w['mode'] & 0x1 ? (ke = (R = ke) || w['memoizedState'] !== null, zt(T, b, w), ke = R) : zt(T, b, w);
            break;
        default:
            zt(T, b, w);
    }
}

function rd(T) {
    var b = T['updateQueue'];
    if (b !== null) {
        T['updateQueue'] = null;
        var w = T['stateNode'];
        w === null && (w = T['stateNode'] = new ey()), b['forEach'](function(R) {
            var p = cy['bind'](null, T, R);
            w['has'](R) || (w['add'](R), R['then'](p, p));
        });
    }
}

function it(T, b) {
    var w = b['deletions'];
    if (w !== null)
        for (var R = 0x0; R < w['length']; R++) {
            var p = w[R];
            try {
                var A = T,
                    N = b,
                    C = N;
                z: for (; C !== null;) {
                    switch (C['tag']) {
                        case 0x5:
                            ye = C['stateNode'], ot = !0x1;
                            break z;
                        case 0x3:
                            ye = C['stateNode']['containerInfo'], ot = !0x0;
                            break z;
                        case 0x4:
                            ye = C['stateNode']['containerInfo'], ot = !0x0;
                            break z;
                    }
                    C = C['return'];
                }
                if (ye === null) throw Error(E(0xa0));
                Ip(A, N, p), ye = null, ot = !0x1;
                var h = p['alternate'];
                h !== null && (h['return'] = null), p['return'] = null;
            } catch (L) {
                ae(p, b, L);
            }
        }
    if (b['subtreeFlags'] & 0x3236)
        for (b = b['child']; b !== null;) Vp(b, T), b = b['sibling'];
}

function Vp(T, b) {
    var R = T['alternate'],
        p = T['flags'];
    switch (T['tag']) {
        case 0x0:
        case 0xb:
        case 0xe:
        case 0xf:
            if (it(b, T), ft(T), p & 0x4) {
                try {
                    Gr(0x3, T, T['return']), aa(0x3, T);
                } catch (J) {
                    ae(T, T['return'], J);
                }
                try {
                    Gr(0x5, T, T['return']);
                } catch (B) {
                    ae(T, T['return'], B);
                }
            }
            break;
        case 0x1:
            it(b, T), ft(T), p & 0x200 && R !== null && Qn(R, R['return']);
            break;
        case 0x5:
            if (it(b, T), ft(T), p & 0x200 && R !== null && Qn(R, R['return']), T['flags'] & 0x20) {
                var A = T['stateNode'];
                try {
                    ni(A, '');
                } catch (g) {
                    ae(T, T['return'], g);
                }
            }
            if (p & 0x4 && (A = T['stateNode'], A != null)) {
                var N = T['memoizedProps'],
                    C = R !== null ? R['memoizedProps'] : N,
                    L = T['type'],
                    z = T['updateQueue'];
                if (T['updateQueue'] = null, z !== null) try {
                    L === 'input' && N['type'] === 'radio' && N['name'] != null && rf(A, N), yo(L, C);
                    var I = yo(L, N);
                    for (C = 0x0; C < z['length']; C += 0x2) {
                        var K = z[C],
                            O = z[C + 0x1];
                        K === 'style' ? uf(A, O) : K === 'dangerouslySetInnerHTML' ? of(A, O) : K === 'children' ? ni(A, O) : bl(A, K, O, I);
                    }
                    switch (L) {
                        case 'input':
                            fo(A, N);
                            break;
                        case 'textarea':
                            sf(A, N);
                            break;
                        case 'select':
                            var V = A['_wrapperState']['wasMultiple'];
                            A['_wrapperState']['wasMultiple'] = !!N['multiple'];
                            var S = N['value'];
                            S != null ? ir(A, !!N['multiple'], S, !0x1) : V !== !!N['multiple'] && (N['defaultValue'] != null ? ir(A, !!N['multiple'], N['defaultValue'], !0x0) : ir(A, !!N['multiple'], N['multiple'] ? [] : '', !0x1));
                    }
                    A[di] = N;
                } catch (j) {
                    ae(T, T['return'], j);
                }
            }
            break;
        case 0x6:
            if (it(b, T), ft(T), p & 0x4) {
                if (T['stateNode'] === null) throw Error(E(0xa2));
                A = T['stateNode'], N = T['memoizedProps'];
                try {
                    A['nodeValue'] = N;
                } catch (M) {
                    ae(T, T['return'], M);
                }
            }
            break;
        case 0x3:
            if (it(b, T), ft(T), p & 0x4 && R !== null && R['memoizedState']['isDehydrated']) try {
                ai(b['containerInfo']);
            } catch (U) {
                ae(T, T['return'], U);
            }
            break;
        case 0x4:
            it(b, T), ft(T);
            break;
        case 0xd:
            it(b, T), ft(T), A = T['child'], A['flags'] & 0x2000 && (N = A['memoizedState'] !== null, A['stateNode']['isHidden'] = N, !N || A['alternate'] !== null && A['alternate']['memoizedState'] !== null || (ru = ue())), p & 0x4 && rd(T);
            break;
        case 0x16:
            if (K = R !== null && R['memoizedState'] !== null, T['mode'] & 0x1 ? (ke = (I = ke) || K, it(b, T), ke = I) : it(b, T), ft(T), p & 0x2000) {
                if (I = T['memoizedState'] !== null, (T['stateNode']['isHidden'] = I) && !K && T['mode'] & 0x1)
                    for (D = T, K = T['child']; K !== null;) {
                        for (O = D = K; D !== null;) {
                            switch (V = D, S = V['child'], V['tag']) {
                                case 0x0:
                                case 0xb:
                                case 0xe:
                                case 0xf:
                                    Gr(0x4, V, V['return']);
                                    break;
                                case 0x1:
                                    Qn(V, V['return']);
                                    var m = V['stateNode'];
                                    if (typeof m['componentWillUnmount'] == 'function') {
                                        p = V, R = V['return'];
                                        try {
                                            b = p, m['props'] = b['memoizedProps'], m['state'] = b['memoizedState'], m['componentWillUnmount']();
                                        } catch (Y0) {
                                            ae(p, R, Y0);
                                        }
                                    }
                                    break;
                                case 0x5:
                                    Qn(V, V['return']);
                                    break;
                                case 0x16:
                                    if (V['memoizedState'] !== null) {
                                        sd(O);
                                        continue;
                                    }
                            }
                            S !== null ? (S['return'] = V, D = S) : sd(O);
                        }
                        K = K['sibling'];
                    }
                Y5: for (K = null, O = T;;) {
                    if (O['tag'] === 0x5) {
                        if (K === null) {
                            K = O;
                            try {
                                A = O['stateNode'], I ? (N = A['style'], typeof N['setProperty'] == 'function' ? N['setProperty']('display', 'none', 'important') : N['display'] = 'none') : (L = O['stateNode'], z = O['memoizedProps']['style'], C = z != null && z['hasOwnProperty']('display') ? z['display'] : null, L['style']['display'] = lf('display', C));
                            } catch (Y3) {
                                ae(T, T['return'], Y3);
                            }
                        }
                    } else if (O['tag'] === 0x6) {
                        if (K === null) try {
                            O['stateNode']['nodeValue'] = I ? '' : O['memoizedProps'];
                        } catch (Y4) {
                            ae(T, T['return'], Y4);
                        }
                    } else if ((O['tag'] !== 0x16 && O['tag'] !== 0x17 || O['memoizedState'] === null || O === T) && O['child'] !== null) {
                        O['child']['return'] = O, O = O['child'];
                        continue;
                    }
                    if (O === T) break Y5;
                    for (; O['sibling'] === null;) {
                        if (O['return'] === null || O['return'] === T) break Y5;
                        K === O && (K = null), O = O['return'];
                    }
                    K === O && (K = null), O['sibling']['return'] = O['return'], O = O['sibling'];
                }
            }
            break;
        case 0x13:
            it(b, T), ft(T), p & 0x4 && rd(T);
            break;
        case 0x15:
            break;
        default:
            it(b, T), ft(T);
    }
}

function ft(T) {
    var b = T['flags'];
    if (b & 0x2) {
        try {
            L: {
                for (var w = T['return']; w !== null;) {
                    if (Lp(w)) {
                        var R = w;
                        break L;
                    }
                    w = w['return'];
                }
                throw Error(E(0xa0));
            }
            switch (R['tag']) {
                case 0x5:
                    var p = R['stateNode'];
                    R['flags'] & 0x20 && (ni(p, ''), R['flags'] &= -0x21);
                    var A = nd(T);
                    Go(T, A, p);
                    break;
                case 0x3:
                case 0x4:
                    var N = R['stateNode']['containerInfo'],
                        C = nd(T);
                    Xo(T, C, N);
                    break;
                default:
                    throw Error(E(0xa1));
            }
        }
        catch (h) {
            ae(T, T['return'], h);
        }
        T['flags'] &= -0x3;
    }
    b & 0x1000 && (T['flags'] &= -0x1001);
}

function ny(T, b, w) {
    D = T, _p(T);
}

function _p(T, b, w) {
    for (var R = (T['mode'] & 0x1) !== 0x0; D !== null;) {
        var p = D,
            A = p['child'];
        if (p['tag'] === 0x16 && R) {
            var N = p['memoizedState'] !== null || Yi;
            if (!N) {
                var C = p['alternate'],
                    h = C !== null && C['memoizedState'] !== null || ke;
                C = Yi;
                var L = ke;
                if (Yi = N, (ke = h) && !L)
                    for (D = p; D !== null;) N = D, h = N['child'], N['tag'] === 0x16 && N['memoizedState'] !== null ? ad(p) : h !== null ? (h['return'] = N, D = h) : ad(p);
                for (; A !== null;) D = A, _p(A), A = A['sibling'];
                D = p, Yi = C, ke = L;
            }
            id(T);
        } else p['subtreeFlags'] & 0x2244 && A !== null ? (A['return'] = p, D = A) : id(T);
    }
}

function id(T) {
    for (; D !== null;) {
        var b = D;
        if (b['flags'] & 0x2244) {
            var w = b['alternate'];
            try {
                if (b['flags'] & 0x2244) switch (b['tag']) {
                    case 0x0:
                    case 0xb:
                    case 0xf:
                        ke || aa(0x5, b);
                        break;
                    case 0x1:
                        var R = b['stateNode'];
                        if (b['flags'] & 0x4 && !ke)
                            if (w === null) R['componentDidMount']();
                            else {
                                var p = b['elementType'] === b['type'] ? w['memoizedProps'] : at(b['type'], w['memoizedProps']);
                                R['componentDidUpdate'](p, w['memoizedState'], R['__reactInternalSnapshotBeforeUpdate']);
                            } var A = b['updateQueue'];
                        A !== null && Uc(b, A, R);
                        break;
                    case 0x3:
                        var N = b['updateQueue'];
                        if (N !== null) {
                            if (w = null, b['child'] !== null) switch (b['child']['tag']) {
                                case 0x5:
                                    w = b['child']['stateNode'];
                                    break;
                                case 0x1:
                                    w = b['child']['stateNode'];
                            }
                            Uc(b, N, w);
                        }
                        break;
                    case 0x5:
                        var C = b['stateNode'];
                        if (w === null && b['flags'] & 0x4) {
                            w = C;
                            var L = b['memoizedProps'];
                            switch (b['type']) {
                                case 'button':
                                case 'input':
                                case 'select':
                                case 'textarea':
                                    L['autoFocus'] && w['focus']();
                                    break;
                                case 'img':
                                    L['src'] && (w['src'] = L['src']);
                            }
                        }
                        break;
                    case 0x6:
                        break;
                    case 0x4:
                        break;
                    case 0xc:
                        break;
                    case 0xd:
                        if (b['memoizedState'] === null) {
                            var z = b['alternate'];
                            if (z !== null) {
                                var I = z['memoizedState'];
                                if (I !== null) {
                                    var K = I['dehydrated'];
                                    K !== null && ai(K);
                                }
                            }
                        }
                        break;
                    case 0x13:
                    case 0x11:
                    case 0x15:
                    case 0x16:
                    case 0x17:
                    case 0x19:
                        break;
                    default:
                        throw Error(E(0xa3));
                }
                ke || b['flags'] & 0x200 && Ko(b);
            } catch (O) {
                ae(b, b['return'], O);
            }
        }
        if (b === T) {
            D = null;
            break;
        }
        if (w = b['sibling'], w !== null) {
            w['return'] = b['return'], D = w;
            break;
        }
        D = b['return'];
    }
}

function sd(T) {
    for (; D !== null;) {
        var b = D;
        if (b === T) {
            D = null;
            break;
        }
        var w = b['sibling'];
        if (w !== null) {
            w['return'] = b['return'], D = w;
            break;
        }
        D = b['return'];
    }
}

function ad(T) {
    for (; D !== null;) {
        var b = D;
        try {
            switch (b['tag']) {
                case 0x0:
                case 0xb:
                case 0xf:
                    var w = b['return'];
                    try {
                        aa(0x4, b);
                    } catch (h) {
                        ae(b, w, h);
                    }
                    break;
                case 0x1:
                    var R = b['stateNode'];
                    if (typeof R['componentDidMount'] == 'function') {
                        var p = b['return'];
                        try {
                            R['componentDidMount']();
                        } catch (L) {
                            ae(b, p, L);
                        }
                    }
                    var A = b['return'];
                    try {
                        Ko(b);
                    } catch (z) {
                        ae(b, A, z);
                    }
                    break;
                case 0x5:
                    var N = b['return'];
                    try {
                        Ko(b);
                    } catch (I) {
                        ae(b, N, I);
                    }
            }
        } catch (K) {
            ae(b, b['return'], K);
        }
        if (b === T) {
            D = null;
            break;
        }
        var C = b['sibling'];
        if (C !== null) {
            C['return'] = b['return'], D = C;
            break;
        }
        D = b['return'];
    }
}
var ry = Math['ceil'],
    Is = _t['ReactCurrentDispatcher'],
    tu = _t['ReactCurrentOwner'],
    Je = _t['ReactCurrentBatchConfig'],
    W = 0x0,
    ge = null,
    de = null,
    we = 0x0,
    Ve = 0x0,
    Jn = dn(0x0),
    pe = 0x0,
    vi = null,
    En = 0x0,
    oa = 0x0,
    nu = 0x0,
    Yr = null,
    Re = null,
    ru = 0x0,
    gr = 0x1 / 0x0,
    St = null,
    Vs = !0x1,
    Yo = null,
    en = null,
    Zi = !0x1,
    Xt = null,
    _s = 0x0,
    Zr = 0x0,
    Zo = null,
    us = -0x1,
    cs = 0x0;

function Ee() {
    return W & 0x6 ? ue() : us !== -0x1 ? us : us = ue();
}

function tn(T) {
    return T['mode'] & 0x1 ? W & 0x2 && we !== 0x0 ? we & -we : zv['transition'] !== null ? (cs === 0x0 && (cs = jf()), cs) : (T = $, T !== 0x0 || (T = window['event'], T = T === void 0x0 ? 0x10 : Pf(T['type'])), T) : 0x1;
}

function ct(T, b, w, R) {
    if (0x32 < Zr) throw Zr = 0x0, Zo = null, Error(E(0xb9));
    ki(T, w, R), (!(W & 0x2) || T !== ge) && (T === ge && (!(W & 0x2) && (oa |= w), pe === 0x4 && $t(T, we)), Ie(T, R), w === 0x1 && W === 0x0 && !(b['mode'] & 0x1) && (gr = ue() + 0x1f4, ra && hn()));
}

function Ie(T, b) {
    var w = T['callbackNode'];
    zg(T, b);
    var R = ws(T, T === ge ? we : 0x0);
    if (R === 0x0) w !== null && mc(w), T['callbackNode'] = null, T['callbackPriority'] = 0x0;
    else if (b = R & -R, T['callbackPriority'] !== b) {
        if (w != null && mc(w), b === 0x1) T['tag'] === 0x0 ? Ov(od['bind'](null, T)) : Xf(od['bind'](null, T)), Iv(function() {
            !(W & 0x6) && hn();
        }), w = null;
        else {
            switch (Nf(R)) {
                case 0x1:
                    w = El;
                    break;
                case 0x4:
                    w = xf;
                    break;
                case 0x10:
                    w = xs;
                    break;
                case 0x20000000:
                    w = wf;
                    break;
                default:
                    w = xs;
            }
            w = $p(w, Fp['bind'](null, T));
        }
        T['callbackPriority'] = b, T['callbackNode'] = w;
    }
}

function Fp(T, b) {
    if (us = -0x1, cs = 0x0, W & 0x6) throw Error(E(0x147));
    var w = T['callbackNode'];
    if (ur() && T['callbackNode'] !== w) return null;
    var R = ws(T, T === ge ? we : 0x0);
    if (R === 0x0) return null;
    if (R & 0x1e || R & T['expiredLanes'] || b) b = Fs(T, R);
    else {
        b = R;
        var p = W;
        W |= 0x2;
        var A = zp();
        (ge !== T || we !== b) && (St = null, gr = ue() + 0x1f4, Sn(T, b));
        do try {
            ay();
            break;
        } catch (C) {
            Op(T, C);
        }
        while (!0x0);
        Ul(), Is['current'] = A, W = p, de !== null ? b = 0x0 : (ge = null, we = 0x0, b = pe);
    }
    if (b !== 0x0) {
        if (b === 0x2 && (p = So(T), p !== 0x0 && (R = p, b = Qo(T, p))), b === 0x1) throw w = vi, Sn(T, 0x0), $t(T, R), Ie(T, ue()), w;
        if (b === 0x6) $t(T, R);
        else {
            if (p = T['current']['alternate'], !(R & 0x1e) && !iy(p) && (b = Fs(T, R), b === 0x2 && (A = So(T), A !== 0x0 && (R = A, b = Qo(T, A))), b === 0x1)) throw w = vi, Sn(T, 0x0), $t(T, R), Ie(T, ue()), w;
            switch (T['finishedWork'] = p, T['finishedLanes'] = R, b) {
                case 0x0:
                case 0x1:
                    throw Error(E(0x159));
                case 0x2:
                    gn(T, Re, St);
                    break;
                case 0x3:
                    if ($t(T, R), (R & 0x7c00000) === R && (b = ru + 0x1f4 - ue(), 0xa < b)) {
                        if (ws(T, 0x0) !== 0x0) break;
                        if (p = T['suspendedLanes'], (p & R) !== R) {
                            Ee(), T['pingedLanes'] |= T['suspendedLanes'] & p;
                            break;
                        }
                        T['timeoutHandle'] = Ro(gn['bind'](null, T, Re, St), b);
                        break;
                    }
                    gn(T, Re, St);
                    break;
                case 0x4:
                    if ($t(T, R), (R & 0x3fffc0) === R) break;
                    for (b = T['eventTimes'], p = -0x1; 0x0 < R;) {
                        var N = 0x1f - ut(R);
                        A = 0x1 << N, N = b[N], N > p && (p = N), R &= ~A;
                    }
                    if (R = p, R = ue() - R, R = (0x78 > R ? 0x78 : 0x1e0 > R ? 0x1e0 : 0x438 > R ? 0x438 : 0x780 > R ? 0x780 : 0xbb8 > R ? 0xbb8 : 0x10e0 > R ? 0x10e0 : 0x7a8 * ry(R / 0x7a8)) - R, 0xa < R) {
                        T['timeoutHandle'] = Ro(gn['bind'](null, T, Re, St), R);
                        break;
                    }
                    gn(T, Re, St);
                    break;
                case 0x5:
                    gn(T, Re, St);
                    break;
                default:
                    throw Error(E(0x149));
            }
        }
    }
    return Ie(T, ue()), T['callbackNode'] === w ? Fp['bind'](null, T) : null;
}

function Qo(T, b) {
    var w = Yr;
    return T['current']['memoizedState']['isDehydrated'] && (Sn(T, b)['flags'] |= 0x100), T = Fs(T, b), T !== 0x2 && (b = Re, Re = w, b !== null && Jo(b)), T;
}

function Jo(T) {
    Re === null ? Re = T : Re['push']['apply'](Re, T);
}

function iy(T) {
    for (var b = T;;) {
        if (b['flags'] & 0x4000) {
            var w = b['updateQueue'];
            if (w !== null && (w = w['stores'], w !== null))
                for (var R = 0x0; R < w['length']; R++) {
                    var p = w[R],
                        A = p['getSnapshot'];
                    p = p['value'];
                    try {
                        if (!dt(A(), p)) return !0x1;
                    } catch {
                        return !0x1;
                    }
                }
        }
        if (w = b['child'], b['subtreeFlags'] & 0x4000 && w !== null) w['return'] = b, b = w;
        else {
            if (b === T) break;
            for (; b['sibling'] === null;) {
                if (b['return'] === null || b['return'] === T) return !0x0;
                b = b['return'];
            }
            b['sibling']['return'] = b['return'], b = b['sibling'];
        }
    }
    return !0x0;
}

function $t(T, b) {
    for (b &= ~nu, b &= ~oa, T['suspendedLanes'] |= b, T['pingedLanes'] &= ~b, T = T['expirationTimes']; 0x0 < b;) {
        var w = 0x1f - ut(b),
            R = 0x1 << w;
        T[w] = -0x1, b &= ~R;
    }
}

function od(T) {
    if (W & 0x6) throw Error(E(0x147));
    ur();
    var b = ws(T, 0x0);
    if (!(b & 0x1)) return Ie(T, ue()), null;
    var w = Fs(T, b);
    if (T['tag'] !== 0x0 && w === 0x2) {
        var R = So(T);
        R !== 0x0 && (b = R, w = Qo(T, R));
    }
    if (w === 0x1) throw w = vi, Sn(T, 0x0), $t(T, b), Ie(T, ue()), w;
    if (w === 0x6) throw Error(E(0x159));
    return T['finishedWork'] = T['current']['alternate'], T['finishedLanes'] = b, gn(T, Re, St), Ie(T, ue()), null;
}

function iu(T, b) {
    var w = W;
    W |= 0x1;
    try {
        return T(b);
    } finally {
        W = w, W === 0x0 && (gr = ue() + 0x1f4, ra && hn());
    }
}

function Mn(T) {
    Xt !== null && Xt['tag'] === 0x0 && !(W & 0x6) && ur();
    var b = W;
    W |= 0x1;
    var w = Je['transition'],
        R = $;
    try {
        if (Je['transition'] = null, $ = 0x1, T) return T();
    } finally {
        $ = R, Je['transition'] = w, W = b, !(W & 0x6) && hn();
    }
}

function su() {
    Ve = Jn['current'], Y(Jn);
}

function Sn(T, b) {
    T['finishedWork'] = null, T['finishedLanes'] = 0x0;
    var w = T['timeoutHandle'];
    if (w !== -0x1 && (T['timeoutHandle'] = -0x1, Lv(w)), de !== null)
        for (w = de['return']; w !== null;) {
            var R = w;
            switch (Ol(R), R['tag']) {
                case 0x1:
                    R = R['type']['childContextTypes'], R != null && ks();
                    break;
                case 0x3:
                    pr(), Y(De), Y(Te), Gl();
                    break;
                case 0x5:
                    Xl(R);
                    break;
                case 0x4:
                    pr();
                    break;
                case 0xd:
                    Y(ee);
                    break;
                case 0x13:
                    Y(ee);
                    break;
                case 0xa:
                    Hl(R['type']['_context']);
                    break;
                case 0x16:
                case 0x17:
                    su();
            }
            w = w['return'];
        }
    if (ge = T, de = T = nn(T['current'], null), we = Ve = b, pe = 0x0, vi = null, nu = oa = En = 0x0, Re = Yr = null, wn !== null) {
        for (b = 0x0; b < wn['length']; b++)
            if (w = wn[b], R = w['interleaved'], R !== null) {
                w['interleaved'] = null;
                var p = R['next'],
                    A = w['pending'];
                if (A !== null) {
                    var N = A['next'];
                    A['next'] = p, R['next'] = N;
                }
                w['pending'] = R;
            } wn = null;
    }
    return T;
}

function Op(T, R) {
    do {
        var A = de;
        try {
            if (Ul(), as['current'] = Ls, Ds) {
                for (var C = ne['memoizedState']; C !== null;) {
                    var L = C['queue'];
                    L !== null && (L['pending'] = null), C = C['next'];
                }
                Ds = !0x1;
            }
            if (Pn = 0x0, me = fe = ne = null, Xr = !0x1, pi = 0x0, tu['current'] = null, A === null || A['return'] === null) {
                pe = 0x1, vi = R, de = null;
                break;
            }
            Y9: {
                var z = T,
                    I = A['return'],
                    K = A,
                    O = R;
                if (R = we, K['flags'] |= 0x8000, O !== null && typeof O == 'object' && typeof O['then'] == 'function') {
                    var V = O,
                        J = K,
                        B = J['tag'];
                    if (!(J['mode'] & 0x1) && (B === 0x0 || B === 0xb || B === 0xf)) {
                        var j = J['alternate'];
                        j ? (J['updateQueue'] = j['updateQueue'], J['memoizedState'] = j['memoizedState'], J['lanes'] = j['lanes']) : (J['updateQueue'] = null, J['memoizedState'] = null);
                    }
                    var M = Gc(I);
                    if (M !== null) {
                        M['flags'] &= -0x101, Yc(M, I, K, z, R), M['mode'] & 0x1 && Xc(z, V, R), R = M, O = V;
                        var U = R['updateQueue'];
                        if (U === null) {
                            var Y0 = new Set();
                            Y0['add'](O), R['updateQueue'] = Y0;
                        } else U['add'](O);
                        break Y9;
                    } else {
                        if (!(R & 0x1)) {
                            Xc(z, V, R), au();
                            break Y9;
                        }
                        O = Error(E(0x1aa));
                    }
                } else if (Q && K['mode'] & 0x1) {
                    var Y3 = Gc(I);
                    if (Y3 !== null) {
                        !(Y3['flags'] & 0x10000) && (Y3['flags'] |= 0x100), Yc(Y3, I, K, z, R), zl(mr(O, K));
                        break Y9;
                    }
                }
                z = O = mr(O, K),
                pe !== 0x4 && (pe = 0x2),
                Yr === null ? Yr = [z] : Yr['push'](z),
                z = I;do {
                    switch (z['tag']) {
                        case 0x3:
                            z['flags'] |= 0x10000, R &= -R, z['lanes'] |= R;
                            var Y4 = Np(z, O, R);
                            Bc(z, Y4);
                            break Y9;
                        case 0x1:
                            K = O;
                            var Y5 = z['type'],
                                Y6 = z['stateNode'];
                            if (!(z['flags'] & 0x80) && (typeof Y5['getDerivedStateFromError'] == 'function' || Y6 !== null && typeof Y6['componentDidCatch'] == 'function' && (en === null || !en['has'](Y6)))) {
                                z['flags'] |= 0x10000, R &= -R, z['lanes'] |= R;
                                var Y7 = Sp(z, K, R);
                                Bc(z, Y7);
                                break Y9;
                            }
                    }
                    z = z['return'];
                } while (z !== null);
            }
            Up(A);
        } catch (Y8) {
            R = Y8, de === A && A !== null && (de = A = A['return']);
            continue;
        }
        break;
    } while (!0x0);
}

function zp() {
    var T = Is['current'];
    return Is['current'] = Ls, T === null ? Ls : T;
}

function au() {
    (pe === 0x0 || pe === 0x3 || pe === 0x2) && (pe = 0x4), ge === null || !(En & 0xfffffff) && !(oa & 0xfffffff) || $t(ge, we);
}

function Fs(T, b) {
    var w = W;
    W |= 0x2;
    var R = zp();
    (ge !== T || we !== b) && (St = null, Sn(T, b));
    do try {
        sy();
        break;
    } catch (p) {
        Op(T, p);
    }
    while (!0x0);
    if (Ul(), W = w, Is['current'] = R, de !== null) throw Error(E(0x105));
    return ge = null, we = 0x0, pe;
}

function sy() {
    for (; de !== null;) Bp(de);
}

function ay() {
    for (; de !== null && !Rg();) Bp(de);
}

function Bp(T) {
    var b = Wp(T['alternate'], T, Ve);
    T['memoizedProps'] = T['pendingProps'], b === null ? Up(T) : de = b, tu['current'] = null;
}

function Up(T) {
    var b = T;
    do {
        var w = b['alternate'];
        if (T = b['return'], b['flags'] & 0x8000) {
            if (w = qv(w, b), w !== null) {
                w['flags'] &= 0x7fff, de = w;
                return;
            }
            if (T !== null) T['flags'] |= 0x8000, T['subtreeFlags'] = 0x0, T['deletions'] = null;
            else {
                pe = 0x6, de = null;
                return;
            }
        } else if (w = Jv(w, b, Ve), w !== null) {
            de = w;
            return;
        }
        if (b = b['sibling'], b !== null) {
            de = b;
            return;
        }
        de = b = T;
    } while (b !== null);
    pe === 0x0 && (pe = 0x5);
}

function gn(T, b, w) {
    var R = $,
        p = Je['transition'];
    try {
        Je['transition'] = null, $ = 0x1, oy(T, b, w, R);
    } finally {
        Je['transition'] = p, $ = R;
    }
    return null;
}

function oy(T, b, w, R) {
    do ur(); while (Xt !== null);
    if (W & 0x6) throw Error(E(0x147));
    w = T['finishedWork'];
    var p = T['finishedLanes'];
    if (w === null) return null;
    if (T['finishedWork'] = null, T['finishedLanes'] = 0x0, w === T['current']) throw Error(E(0xb1));
    T['callbackNode'] = null, T['callbackPriority'] = 0x0;
    var A = w['lanes'] | w['childLanes'];
    if (Bg(T, A), T === ge && (de = ge = null, we = 0x0), !(w['subtreeFlags'] & 0x810) && !(w['flags'] & 0x810) || Zi || (Zi = !0x0, $p(xs, function() {
            return ur(), null;
        })), A = (w['flags'] & 0x3e76) !== 0x0, w['subtreeFlags'] & 0x3e76 || A) {
        A = Je['transition'], Je['transition'] = null;
        var N = $;
        $ = 0x1;
        var C = W;
        W |= 0x4, tu['current'] = null, ty(T, w), Vp(w, T), Tv(Eo), js = !!Po, Eo = Po = null, T['current'] = w, ny(w), Ag(), W = C, $ = N, Je['transition'] = A;
    } else T['current'] = w;
    if (Zi && (Zi = !0x1, Xt = T, _s = p), A = T['pendingLanes'], A === 0x0 && (en = null), Ig(w['stateNode']), Ie(T, ue()), b !== null)
        for (R = T['onRecoverableError'], w = 0x0; w < b['length']; w++) p = b[w], R(p['value'], {
            'componentStack': p['stack'],
            'digest': p['digest']
        });
    if (Vs) throw Vs = !0x1, T = Yo, Yo = null, T;
    return _s & 0x1 && T['tag'] !== 0x0 && ur(), A = T['pendingLanes'], A & 0x1 ? T === Zo ? Zr++ : (Zr = 0x0, Zo = T) : Zr = 0x0, hn(), null;
}

function ur() {
    if (Xt !== null) {
        var T = Nf(_s),
            R = Je['transition'],
            A = $;
        try {
            if (Je['transition'] = null, $ = 0x10 > T ? 0x10 : T, Xt === null) var C = !0x1;
            else {
                if (T = Xt, Xt = null, _s = 0x0, W & 0x6) throw Error(E(0x14b));
                var L = W;
                for (W |= 0x4, D = T['current']; D !== null;) {
                    var z = D,
                        I = z['child'];
                    if (D['flags'] & 0x10) {
                        var K = z['deletions'];
                        if (K !== null) {
                            for (var O = 0x0; O < K['length']; O++) {
                                var V = K[O];
                                for (D = V; D !== null;) {
                                    var J = D;
                                    switch (J['tag']) {
                                        case 0x0:
                                        case 0xb:
                                        case 0xf:
                                            Gr(0x8, J, z);
                                    }
                                    var B = J['child'];
                                    if (B !== null) B['return'] = J, D = B;
                                    else
                                        for (; D !== null;) {
                                            J = D;
                                            var j = J['sibling'],
                                                M = J['return'];
                                            if (Dp(J), J === V) {
                                                D = null;
                                                break;
                                            }
                                            if (j !== null) {
                                                j['return'] = M, D = j;
                                                break;
                                            }
                                            D = M;
                                        }
                                }
                            }
                            var U = z['alternate'];
                            if (U !== null) {
                                var Y0 = U['child'];
                                if (Y0 !== null) {
                                    U['child'] = null;
                                    do {
                                        var Y3 = Y0['sibling'];
                                        Y0['sibling'] = null, Y0 = Y3;
                                    } while (Y0 !== null);
                                }
                            }
                            D = z;
                        }
                    }
                    if (z['subtreeFlags'] & 0x810 && I !== null) I['return'] = z, D = I;
                    else Y9: for (; D !== null;) {
                        if (z = D, z['flags'] & 0x800) switch (z['tag']) {
                            case 0x0:
                            case 0xb:
                            case 0xf:
                                Gr(0x9, z, z['return']);
                        }
                        var Y4 = z['sibling'];
                        if (Y4 !== null) {
                            Y4['return'] = z['return'], D = Y4;
                            break Y9;
                        }
                        D = z['return'];
                    }
                }
                var Y5 = T['current'];
                for (D = Y5; D !== null;) {
                    I = D;
                    var Y6 = I['child'];
                    if (I['subtreeFlags'] & 0x810 && Y6 !== null) Y6['return'] = I, D = Y6;
                    else YY: for (I = Y5; D !== null;) {
                        if (K = D, K['flags'] & 0x800) try {
                            switch (K['tag']) {
                                case 0x0:
                                case 0xb:
                                case 0xf:
                                    aa(0x9, K);
                            }
                        } catch (Y8) {
                            ae(K, K['return'], Y8);
                        }
                        if (K === I) {
                            D = null;
                            break YY;
                        }
                        var Y7 = K['sibling'];
                        if (Y7 !== null) {
                            Y7['return'] = K['return'], D = Y7;
                            break YY;
                        }
                        D = K['return'];
                    }
                }
                if (W = L, hn(), gt && typeof gt['onPostCommitFiberRoot'] == 'function') try {
                    gt['onPostCommitFiberRoot'](Js, T);
                } catch {}
                C = !0x0;
            }
            return C;
        } finally {
            $ = A, Je['transition'] = R;
        }
    }
    return !0x1;
}

function ld(T, b, w) {
    b = mr(w, b), b = Np(T, b, 0x1), T = qt(T, b, 0x1), b = Ee(), T !== null && (ki(T, 0x1, b), Ie(T, b));
}

function ae(T, b, w) {
    if (T['tag'] === 0x3) ld(T, T, w);
    else
        for (; b !== null;) {
            if (b['tag'] === 0x3) {
                ld(b, T, w);
                break;
            } else if (b['tag'] === 0x1) {
                var R = b['stateNode'];
                if (typeof b['type']['getDerivedStateFromError'] == 'function' || typeof R['componentDidCatch'] == 'function' && (en === null || !en['has'](R))) {
                    T = mr(w, T), T = Sp(b, T, 0x1), b = qt(b, T, 0x1), T = Ee(), b !== null && (ki(b, 0x1, T), Ie(b, T));
                    break;
                }
            }
            b = b['return'];
        }
}

function ly(T, b, w) {
    var R = T['pingCache'];
    R !== null && R['delete'](b), b = Ee(), T['pingedLanes'] |= T['suspendedLanes'] & w, ge === T && (we & w) === w && (pe === 0x4 || pe === 0x3 && (we & 0x7c00000) === we && 0x1f4 > ue() - ru ? Sn(T, 0x0) : nu |= w), Ie(T, b);
}

function Hp(T, b) {
    b === 0x0 && (T['mode'] & 0x1 ? (b = zi, zi <<= 0x1, !(zi & 0x7c00000) && (zi = 0x400000)) : b = 0x1);
    var w = Ee();
    T = Dt(T, b), T !== null && (ki(T, b, w), Ie(T, w));
}

function uy(T) {
    var b = T['memoizedState'],
        w = 0x0;
    b !== null && (w = b['retryLane']), Hp(T, w);
}

function cy(T, b) {
    var w = 0x0;
    switch (T['tag']) {
        case 0xd:
            var R = T['stateNode'],
                p = T['memoizedState'];
            p !== null && (w = p['retryLane']);
            break;
        case 0x13:
            R = T['stateNode'];
            break;
        default:
            throw Error(E(0x13a));
    }
    R !== null && R['delete'](b), Hp(T, w);
}
var Wp;
Wp = function(T, b, w) {
    if (T !== null)
        if (T['memoizedProps'] !== b['pendingProps'] || De['current']) Ae = !0x0;
        else {
            if (!(T['lanes'] & w) && !(b['flags'] & 0x80)) return Ae = !0x1, Qv(T, b, w);
            Ae = !!(T['flags'] & 0x20000);
        }
    else Ae = !0x1, Q && b['flags'] & 0x100000 && Gf(b, Ps, b['index']);
    switch (b['lanes'] = 0x0, b['tag']) {
        case 0x2:
            var R = b['type'];
            ls(T, b), T = b['pendingProps'];
            var p = dr(b, Te['current']);
            lr(b, w), p = Zl(null, b, R, T, p, w);
            var A = Ql();
            return b['flags'] |= 0x1, typeof p == 'object' && p !== null && typeof p['render'] == 'function' && p['$$typeof'] === void 0x0 ? (b['tag'] = 0x1, b['memoizedState'] = null, b['updateQueue'] = null, Le(R) ? (A = !0x0, Cs(b)) : A = !0x1, b['memoizedState'] = p['state'] !== null && p['state'] !== void 0x0 ? p['state'] : null, $l(b), p['updater'] = sa, b['stateNode'] = p, p['_reactInternals'] = b, Fo(b, R, T, w), b = Bo(null, b, R, !0x0, A, w)) : (b['tag'] = 0x0, Q && A && Fl(b), Pe(null, b, p, w), b = b['child']), b;
        case 0x10:
            R = b['elementType'];
            I: {
                switch (ls(T, b), T = b['pendingProps'], p = R['_init'], R = p(R['_payload']), b['type'] = R, p = b['tag'] = hy(R), T = at(R, T), p) {
                    case 0x0:
                        b = zo(null, b, R, T, w);
                        break I;
                    case 0x1:
                        b = Jc(null, b, R, T, w);
                        break I;
                    case 0xb:
                        b = Zc(null, b, R, T, w);
                        break I;
                    case 0xe:
                        b = Qc(null, b, R, at(R['type'], T), w);
                        break I;
                }
                throw Error(E(0x132, R, ''));
            }
            return b;
        case 0x0:
            return R = b['type'], p = b['pendingProps'], p = b['elementType'] === R ? p : at(R, p), zo(T, b, R, p, w);
        case 0x1:
            return R = b['type'], p = b['pendingProps'], p = b['elementType'] === R ? p : at(R, p), Jc(T, b, R, p, w);
        case 0x3:
            K: {
                if (Tp(b), T === null) throw Error(E(0x183));R = b['pendingProps'],
                A = b['memoizedState'],
                p = A['element'],
                ep(T, b),
                Rs(b, R, null, w);
                var N = b['memoizedState'];
                if (R = N['element'], A['isDehydrated'])
                    if (A = {
                            'element': R,
                            'isDehydrated': !0x1,
                            'cache': N['cache'],
                            'pendingSuspenseBoundaries': N['pendingSuspenseBoundaries'],
                            'transitions': N['transitions']
                        }, b['updateQueue']['baseState'] = A, b['memoizedState'] = A, b['flags'] & 0x100) {
                        p = mr(Error(E(0x1a7)), b), b = qc(T, b, R, w, p);
                        break K;
                    } else if (R !== p) {
                    p = mr(Error(E(0x1a8)), b), b = qc(T, b, R, w, p);
                    break K;
                } else
                    for (_e = Jt(b['stateNode']['containerInfo']['firstChild']), Fe = b, Q = !0x0, lt = null, w = Jf(b, null, R, w), b['child'] = w; w;) w['flags'] = w['flags'] & -0x3 | 0x1000, w = w['sibling'];
                else {
                    if (hr(), R === p) {
                        b = Lt(T, b, w);
                        break K;
                    }
                    Pe(T, b, R, w);
                }
                b = b['child'];
            }
            return b;
        case 0x5:
            return tp(b), T === null && Io(b), R = b['type'], p = b['pendingProps'], A = T !== null ? T['memoizedProps'] : null, N = p['children'], Mo(R, p) ? N = null : A !== null && Mo(R, A) && (b['flags'] |= 0x20), Cp(T, b), Pe(T, b, N, w), b['child'];
        case 0x6:
            return T === null && Io(b), null;
        case 0xd:
            return Pp(T, b, w);
        case 0x4:
            return Kl(b, b['stateNode']['containerInfo']), R = b['pendingProps'], T === null ? b['child'] = fr(b, null, R, w) : Pe(T, b, R, w), b['child'];
        case 0xb:
            return R = b['type'], p = b['pendingProps'], p = b['elementType'] === R ? p : at(R, p), Zc(T, b, R, p, w);
        case 0x7:
            return Pe(T, b, b['pendingProps'], w), b['child'];
        case 0x8:
            return Pe(T, b, b['pendingProps']['children'], w), b['child'];
        case 0xc:
            return Pe(T, b, b['pendingProps']['children'], w), b['child'];
        case 0xa:
            O: {
                if (R = b['type']['_context'], p = b['pendingProps'], A = b['memoizedProps'], N = p['value'], X(Es, R['_currentValue']), R['_currentValue'] = N, A !== null)
                    if (dt(A['value'], N)) {
                        if (A['children'] === p['children'] && !De['current']) {
                            b = Lt(T, b, w);
                            break O;
                        }
                    } else
                        for (A = b['child'], A !== null && (A['return'] = b); A !== null;) {
                            var C = A['dependencies'];
                            if (C !== null) {
                                N = A['child'];
                                for (var h = C['firstContext']; h !== null;) {
                                    if (h['context'] === R) {
                                        if (A['tag'] === 0x1) {
                                            h = Pt(-0x1, w & -w), h['tag'] = 0x2;
                                            var L = A['updateQueue'];
                                            if (L !== null) {
                                                L = L['shared'];
                                                var z = L['pending'];
                                                z === null ? h['next'] = h : (h['next'] = z['next'], z['next'] = h), L['pending'] = h;
                                            }
                                        }
                                        A['lanes'] |= w, h = A['alternate'], h !== null && (h['lanes'] |= w), Vo(A['return'], w, b), C['lanes'] |= w;
                                        break;
                                    }
                                    h = h['next'];
                                }
                            } else if (A['tag'] === 0xa) N = A['type'] === b['type'] ? null : A['child'];
                            else if (A['tag'] === 0x12) {
                                if (N = A['return'], N === null) throw Error(E(0x155));
                                N['lanes'] |= w, C = N['alternate'], C !== null && (C['lanes'] |= w), Vo(N, w, b), N = A['sibling'];
                            } else N = A['child'];
                            if (N !== null) N['return'] = A;
                            else
                                for (N = A; N !== null;) {
                                    if (N === b) {
                                        N = null;
                                        break;
                                    }
                                    if (A = N['sibling'], A !== null) {
                                        A['return'] = N['return'], N = A;
                                        break;
                                    }
                                    N = N['return'];
                                }
                            A = N;
                        }
                Pe(T, b, p['children'], w),
                b = b['child'];
            }
            return b;
        case 0x9:
            return p = b['type'], R = b['pendingProps']['children'], lr(b, w), p = qe(p), R = R(p), b['flags'] |= 0x1, Pe(T, b, R, w), b['child'];
        case 0xe:
            return R = b['type'], p = at(R, b['pendingProps']), p = at(R['type'], p), Qc(T, b, R, p, w);
        case 0xf:
            return bp(T, b, b['type'], b['pendingProps'], w);
        case 0x11:
            return R = b['type'], p = b['pendingProps'], p = b['elementType'] === R ? p : at(R, p), ls(T, b), b['tag'] = 0x1, Le(R) ? (T = !0x0, Cs(b)) : T = !0x1, lr(b, w), jp(b, R, p), Fo(b, R, p, w), Bo(null, b, R, !0x0, T, w);
        case 0x13:
            return Ep(T, b, w);
        case 0x16:
            return kp(T, b, w);
    }
    throw Error(E(0x9c, b['tag']));
};

function $p(T, b) {
    return yf(T, b);
}

function dy(T, b, w, R) {
    this['tag'] = T, this['key'] = w, this['sibling'] = this['child'] = this['return'] = this['stateNode'] = this['type'] = this['elementType'] = null, this['index'] = 0x0, this['ref'] = null, this['pendingProps'] = b, this['dependencies'] = this['memoizedState'] = this['updateQueue'] = this['memoizedProps'] = null, this['mode'] = R, this['subtreeFlags'] = this['flags'] = 0x0, this['deletions'] = null, this['childLanes'] = this['lanes'] = 0x0, this['alternate'] = null;
}

function Qe(T, b, w, R) {
    return new dy(T, b, w, R);
}

function ou(T) {
    return T = T['prototype'], !(!T || !T['isReactComponent']);
}

function hy(T) {
    if (typeof T == 'function') return ou(T) ? 0x1 : 0x0;
    if (T != null) {
        if (T = T['$$typeof'], T === Cl) return 0xb;
        if (T === Tl) return 0xe;
    }
    return 0x2;
}

function nn(T, b) {
    var w = T['alternate'];
    return w === null ? (w = Qe(T['tag'], b, T['key'], T['mode']), w['elementType'] = T['elementType'], w['type'] = T['type'], w['stateNode'] = T['stateNode'], w['alternate'] = T, T['alternate'] = w) : (w['pendingProps'] = b, w['type'] = T['type'], w['flags'] = 0x0, w['subtreeFlags'] = 0x0, w['deletions'] = null), w['flags'] = T['flags'] & 0xe00000, w['childLanes'] = T['childLanes'], w['lanes'] = T['lanes'], w['child'] = T['child'], w['memoizedProps'] = T['memoizedProps'], w['memoizedState'] = T['memoizedState'], w['updateQueue'] = T['updateQueue'], b = T['dependencies'], w['dependencies'] = b === null ? null : {
        'lanes': b['lanes'],
        'firstContext': b['firstContext']
    }, w['sibling'] = T['sibling'], w['index'] = T['index'], w['ref'] = T['ref'], w;
}

function ds(T, b, w, R, p, A) {
    var N = 0x2;
    if (R = T, typeof T == 'function') ou(T) && (N = 0x1);
    else if (typeof T == 'string') N = 0x5;
    else C: switch (T) {
        case Un:
            return bn(w['children'], p, A, b);
        case kl:
            N = 0x8, p |= 0x8;
            break;
        case oo:
            return T = Qe(0xc, w, b, p | 0x2), T['elementType'] = oo, T['lanes'] = A, T;
        case lo:
            return T = Qe(0xd, w, b, p), T['elementType'] = lo, T['lanes'] = A, T;
        case uo:
            return T = Qe(0x13, w, b, p), T['elementType'] = uo, T['lanes'] = A, T;
        case ef:
            return la(w, p, A, b);
        default:
            if (typeof T == 'object' && T !== null) switch (T['$$typeof']) {
                case Jh:
                    N = 0xa;
                    break C;
                case qh:
                    N = 0x9;
                    break C;
                case Cl:
                    N = 0xb;
                    break C;
                case Tl:
                    N = 0xe;
                    break C;
                case Ut:
                    N = 0x10, R = null;
                    break C;
            }
            throw Error(E(0x82, T == null ? T : typeof T, ''));
    }
    return b = Qe(N, w, b, p), b['elementType'] = T, b['type'] = R, b['lanes'] = A, b;
}

function bn(T, b, w, R) {
    return T = Qe(0x7, T, R, b), T['lanes'] = w, T;
}

function la(T, b, w, R) {
    return T = Qe(0x16, T, R, b), T['elementType'] = ef, T['lanes'] = w, T['stateNode'] = {
        'isHidden': !0x1
    }, T;
}

function Ha(T, b, w) {
    return T = Qe(0x6, T, null, b), T['lanes'] = w, T;
}

function Wa(T, b, w) {
    return b = Qe(0x4, T['children'] !== null ? T['children'] : [], T['key'], b), b['lanes'] = w, b['stateNode'] = {
        'containerInfo': T['containerInfo'],
        'pendingChildren': null,
        'implementation': T['implementation']
    }, b;
}

function fy(T, b, w, R, p) {
    this['tag'] = b, this['containerInfo'] = T, this['finishedWork'] = this['pingCache'] = this['current'] = this['pendingChildren'] = null, this['timeoutHandle'] = -0x1, this['callbackNode'] = this['pendingContext'] = this['context'] = null, this['callbackPriority'] = 0x0, this['eventTimes'] = ba(0x0), this['expirationTimes'] = ba(-0x1), this['entangledLanes'] = this['finishedLanes'] = this['mutableReadLanes'] = this['expiredLanes'] = this['pingedLanes'] = this['suspendedLanes'] = this['pendingLanes'] = 0x0, this['entanglements'] = ba(0x0), this['identifierPrefix'] = R, this['onRecoverableError'] = p, this['mutableSourceEagerHydrationData'] = null;
}

function lu(T, b, w, R, p, A, N, C, h) {
    return T = new fy(T, b, w, C, h), b === 0x1 ? (b = 0x1, A === !0x0 && (b |= 0x8)) : b = 0x0, A = Qe(0x3, null, null, b), T['current'] = A, A['stateNode'] = T, A['memoizedState'] = {
        'element': R,
        'isDehydrated': w,
        'cache': null,
        'transitions': null,
        'pendingSuspenseBoundaries': null
    }, $l(A), T;
}

function py(T, b, w) {
    var R = 0x3 < arguments['length'] && arguments[0x3] !== void 0x0 ? arguments[0x3] : null;
    return {
        '$$typeof': Bn,
        'key': R == null ? null : '' + R,
        'children': T,
        'containerInfo': b,
        'implementation': w
    };
}

function Kp(T) {
    if (!T) return an;
    T = T['_reactInternals'];
    R: {
        if (Dn(T) !== T || T['tag'] !== 0x1) throw Error(E(0xaa));
        var b = T;do {
            switch (b['tag']) {
                case 0x3:
                    b = b['stateNode']['context'];
                    break R;
                case 0x1:
                    if (Le(b['type'])) {
                        b = b['stateNode']['__reactInternalMemoizedMergedChildContext'];
                        break R;
                    }
            }
            b = b['return'];
        } while (b !== null);
        throw Error(E(0xab));
    }
    if (T['tag'] === 0x1) {
        var w = T['type'];
        if (Le(w)) return Kf(T, w, b);
    }
    return b;
}

function Xp(T, b, w, R, p, A, N, C, h) {
    return T = lu(w, R, !0x0, T, p, A, N, C, h), T['context'] = Kp(null), w = T['current'], R = Ee(), p = tn(w), A = Pt(R, p), A['callback'] = b ?? null, qt(w, A, p), T['current']['lanes'] = p, ki(T, p, R), Ie(T, R), T;
}

function ua(T, b, w, R) {
    var p = b['current'],
        A = Ee(),
        N = tn(p);
    return w = Kp(w), b['context'] === null ? b['context'] = w : b['pendingContext'] = w, b = Pt(A, N), b['payload'] = {
        'element': T
    }, R = R === void 0x0 ? null : R, R !== null && (b['callback'] = R), T = qt(p, b, N), T !== null && (ct(T, p, N, A), ss(T, p, N)), N;
}

function Os(T) {
    if (T = T['current'], !T['child']) return null;
    switch (T['child']['tag']) {
        case 0x5:
            return T['child']['stateNode'];
        default:
            return T['child']['stateNode'];
    }
}

function ud(T, b) {
    if (T = T['memoizedState'], T !== null && T['dehydrated'] !== null) {
        var w = T['retryLane'];
        T['retryLane'] = w !== 0x0 && w < b ? w : b;
    }
}

function uu(T, b) {
    ud(T, b), (T = T['alternate']) && ud(T, b);
}

function my() {
    return null;
}
var Gp = typeof reportError == 'function' ? reportError : function(T) {
    console['error'](T);
};

function cu(T) {
    this['_internalRoot'] = T;
}
ca['prototype']['render'] = cu['prototype']['render'] = function(T) {
    var b = this['_internalRoot'];
    if (b === null) throw Error(E(0x199));
    ua(T, b, null, null);
};
ca['prototype']['unmount'] = cu['prototype']['unmount'] = function() {
    var T = this['_internalRoot'];
    if (T !== null) {
        this['_internalRoot'] = null;
        var b = T['containerInfo'];
        Mn(function() {
            ua(null, T, null, null);
        }), b[At] = null;
    }
};

function ca(T) {
    this['_internalRoot'] = T;
}
ca['prototype']['unstable_scheduleHydration'] = function(T) {
    if (T) {
        var b = kf();
        T = {
            'blockedOn': null,
            'target': T,
            'priority': b
        };
        for (var w = 0x0; w < Wt['length'] && b !== 0x0 && b < Wt[w]['priority']; w++);
        Wt['splice'](w, 0x0, T), w === 0x0 && Tf(T);
    }
};

function du(T) {
    return !(!T || T['nodeType'] !== 0x1 && T['nodeType'] !== 0x9 && T['nodeType'] !== 0xb);
}

function da(T) {
    return !(!T || T['nodeType'] !== 0x1 && T['nodeType'] !== 0x9 && T['nodeType'] !== 0xb && (T['nodeType'] !== 0x8 || T['nodeValue'] !== '\x20react-mount-point-unstable\x20'));
}

function cd() {}

function gy(T, b, w, R, p) {
    if (p) {
        if (typeof R == 'function') {
            var A = R;
            R = function() {
                var L = Os(N);
                A['call'](L);
            };
        }
        var N = Xp(b, R, T, 0x0, null, !0x1, !0x1, '', cd);
        return T['_reactRootContainer'] = N, T[At] = N['current'], ui(T['nodeType'] === 0x8 ? T['parentNode'] : T), Mn(), N;
    }
    for (; p = T['lastChild'];) T['removeChild'](p);
    if (typeof R == 'function') {
        var C = R;
        R = function() {
            var L = Os(h);
            C['call'](L);
        };
    }
    var h = lu(T, 0x0, !0x1, null, null, !0x1, !0x1, '', cd);
    return T['_reactRootContainer'] = h, T[At] = h['current'], ui(T['nodeType'] === 0x8 ? T['parentNode'] : T), Mn(function() {
        ua(b, h, w, R);
    }), h;
}

function ha(T, b, w, R, p) {
    var A = w['_reactRootContainer'];
    if (A) {
        var N = A;
        if (typeof p == 'function') {
            var C = p;
            p = function() {
                var h = Os(N);
                C['call'](h);
            };
        }
        ua(b, N, T, p);
    } else N = gy(w, b, T, p, R);
    return Os(N);
}
Sf = function(T) {
    switch (T['tag']) {
        case 0x3:
            var b = T['stateNode'];
            if (b['current']['memoizedState']['isDehydrated']) {
                var w = _r(b['pendingLanes']);
                w !== 0x0 && (Ml(b, w | 0x1), Ie(b, ue()), !(W & 0x6) && (gr = ue() + 0x1f4, hn()));
            }
            break;
        case 0xd:
            Mn(function() {
                var R = Dt(T, 0x1);
                if (R !== null) {
                    var p = Ee();
                    ct(R, T, 0x1, p);
                }
            }), uu(T, 0x1);
    }
};
Rl = function(T) {
    if (T['tag'] === 0xd) {
        var b = Dt(T, 0x8000000);
        if (b !== null) {
            var w = Ee();
            ct(b, T, 0x8000000, w);
        }
        uu(T, 0x8000000);
    }
};
bf = function(T) {
    if (T['tag'] === 0xd) {
        var b = tn(T),
            w = Dt(T, b);
        if (w !== null) {
            var R = Ee();
            ct(w, T, b, R);
        }
        uu(T, b);
    }
};
kf = function() {
    return $;
};
Cf = function(T, b) {
    var w = $;
    try {
        return $ = T, b();
    } finally {
        $ = w;
    }
};
wo = function(T, b, w) {
    switch (b) {
        case 'input':
            if (fo(T, w), b = w['name'], w['type'] === 'radio' && b != null) {
                for (w = T; w['parentNode'];) w = w['parentNode'];
                for (w = w['querySelectorAll']('input[name=' + JSON['stringify']('' + b) + '][type=\x22radio\x22]'), b = 0x0; b < w['length']; b++) {
                    var R = w[b];
                    if (R !== T && R['form'] === T['form']) {
                        var p = na(R);
                        if (!p) throw Error(E(0x5a));
                        nf(R), fo(R, p);
                    }
                }
            }
            break;
        case 'textarea':
            sf(T, w);
            break;
        case 'select':
            b = w['value'], b != null && ir(T, !!w['multiple'], b, !0x1);
    }
};
hf = iu;
ff = Mn;
var vy = {
        'usingClientEntryPoint': !0x1,
        'Events': [Ti, Kn, na, cf, df, iu]
    },
    Dr = {
        'findFiberByHostInstance': xn,
        'bundleType': 0x0,
        'version': '18.3.1',
        'rendererPackageName': 'react-dom'
    },
    yy = {
        'bundleType': Dr['bundleType'],
        'version': Dr['version'],
        'rendererPackageName': Dr['rendererPackageName'],
        'rendererConfig': Dr['rendererConfig'],
        'overrideHookState': null,
        'overrideHookStateDeletePath': null,
        'overrideHookStateRenamePath': null,
        'overrideProps': null,
        'overridePropsDeletePath': null,
        'overridePropsRenamePath': null,
        'setErrorHandler': null,
        'setSuspenseHandler': null,
        'scheduleUpdate': null,
        'currentDispatcherRef': _t['ReactCurrentDispatcher'],
        'findHostInstanceByFiber': function(T) {
            return T = gf(T), T === null ? null : T['stateNode'];
        },
        'findFiberByHostInstance': Dr['findFiberByHostInstance'] || my,
        'findHostInstancesForRefresh': null,
        'scheduleRefresh': null,
        'scheduleRoot': null,
        'setRefreshHandler': null,
        'getCurrentFiber': null,
        'reconcilerVersion': '18.3.1-next-f1338f8080-20240426'
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qi['isDisabled'] && Qi['supportsFiber']) try {
        Js = Qi['inject'](yy), gt = Qi;
    } catch {}
}
Ue['__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'] = vy;
Ue['createPortal'] = function(T, b) {
    var w = 0x2 < arguments['length'] && arguments[0x2] !== void 0x0 ? arguments[0x2] : null;
    if (!du(b)) throw Error(E(0xc8));
    return py(T, b, null, w);
};
Ue['createRoot'] = function(T, b) {
    if (!du(T)) throw Error(E(0x12b));
    var w = !0x1,
        R = '',
        p = Gp;
    return b != null && (b['unstable_strictMode'] === !0x0 && (w = !0x0), b['identifierPrefix'] !== void 0x0 && (R = b['identifierPrefix']), b['onRecoverableError'] !== void 0x0 && (p = b['onRecoverableError'])), b = lu(T, 0x1, !0x1, null, null, w, !0x1, R, p), T[At] = b['current'], ui(T['nodeType'] === 0x8 ? T['parentNode'] : T), new cu(b);
};
Ue['findDOMNode'] = function(T) {
    if (T == null) return null;
    if (T['nodeType'] === 0x1) return T;
    var b = T['_reactInternals'];
    if (b === void 0x0) throw typeof T['render'] == 'function' ? Error(E(0xbc)) : (T = Object['keys'](T)['join'](','), Error(E(0x10c, T)));
    return T = gf(b), T = T === null ? null : T['stateNode'], T;
};
Ue['flushSync'] = function(T) {
    return Mn(T);
};
Ue['hydrate'] = function(T, b, w) {
    if (!da(b)) throw Error(E(0xc8));
    return ha(null, T, b, !0x0, w);
};
Ue['hydrateRoot'] = function(T, b, w) {
    if (!du(T)) throw Error(E(0x195));
    var R = w != null && w['hydratedSources'] || null,
        p = !0x1,
        A = '',
        N = Gp;
    if (w != null && (w['unstable_strictMode'] === !0x0 && (p = !0x0), w['identifierPrefix'] !== void 0x0 && (A = w['identifierPrefix']), w['onRecoverableError'] !== void 0x0 && (N = w['onRecoverableError'])), b = Xp(b, null, T, 0x1, w ?? null, p, !0x1, A, N), T[At] = b['current'], ui(T), R)
        for (T = 0x0; T < R['length']; T++) w = R[T], p = w['_getVersion'], p = p(w['_source']), b['mutableSourceEagerHydrationData'] == null ? b['mutableSourceEagerHydrationData'] = [w, p] : b['mutableSourceEagerHydrationData']['push'](w, p);
    return new ca(b);
};
Ue['render'] = function(T, b, w) {
    if (!da(b)) throw Error(E(0xc8));
    return ha(null, T, b, !0x1, w);
};
Ue['unmountComponentAtNode'] = function(T) {
    if (!da(T)) throw Error(E(0x28));
    return T['_reactRootContainer'] ? (Mn(function() {
        ha(null, null, T, !0x1, function() {
            T['_reactRootContainer'] = null, T[At] = null;
        });
    }), !0x0) : !0x1;
};
Ue['unstable_batchedUpdates'] = iu;
Ue['unstable_renderSubtreeIntoContainer'] = function(T, b, w, R) {
    if (!da(w)) throw Error(E(0xc8));
    if (T == null || T['_reactInternals'] === void 0x0) throw Error(E(0x26));
    return ha(T, b, w, !0x1, R);
};
Ue['version'] = '18.3.1-next-f1338f8080-20240426';

function Yp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__['checkDCE'] != 'function')) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__['checkDCE'](Yp);
    } catch (T) {
        console['error'](T);
    }
}
Yp(), Gh['exports'] = Ue;
var xy = Gh['exports'],
    Zp, dd = xy;
Zp = dd['createRoot'], dd['hydrateRoot'];
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yi() {
    return yi = Object['assign'] ? Object['assign']['bind']() : function(T) {
        for (var b = 0x1; b < arguments['length']; b++) {
            var w = arguments[b];
            for (var R in w) Object['prototype']['hasOwnProperty']['call'](w, R) && (T[R] = w[R]);
        }
        return T;
    }, yi['apply'](this, arguments);
}
var Gt;
(function(T) {
    T['Pop'] = 'POP', T['Push'] = 'PUSH', T['Replace'] = 'REPLACE';
}(Gt || (Gt = {})));
const hd = 'popstate';

function wy(T) {
    T === void 0x0 && (T = {});

    function b(R, p) {
        let {
            pathname: A,
            search: N,
            hash: C
        } = R['location'];
        return qo('', {
            'pathname': A,
            'search': N,
            'hash': C
        }, p['state'] && p['state']['usr'] || null, p['state'] && p['state']['key'] || 'default');
    }

    function w(R, p) {
        return typeof p == 'string' ? p : zs(p);
    }
    return Ny(b, w, null, T);
}

function he(T, b) {
    if (T === !0x1 || T === null || typeof T > 'u') throw new Error(b);
}

function Qp(T, b) {
    if (!T) {
        typeof console < 'u' && console['warn'](b);
        try {
            throw new Error(b);
        } catch {}
    }
}

function jy() {
    return Math['random']()['toString'](0x24)['substr'](0x2, 0x8);
}

function fd(T, b) {
    return {
        'usr': T['state'],
        'key': T['key'],
        'idx': b
    };
}

function qo(T, b, w, R) {
    return w === void 0x0 && (w = null), yi({
        'pathname': typeof T == 'string' ? T : T['pathname'],
        'search': '',
        'hash': ''
    }, typeof b == 'string' ? Nr(b) : b, {
        'state': w,
        'key': b && b['key'] || R || jy()
    });
}

function zs(T) {
    let {
        pathname: b = '/',
        search: w = '',
        hash: R = ''
    } = T;
    return w && w !== '?' && (b += w['charAt'](0x0) === '?' ? w : '?' + w), R && R !== '#' && (b += R['charAt'](0x0) === '#' ? R : '#' + R), b;
}

function Nr(T) {
    let b = {};
    if (T) {
        let w = T['indexOf']('#');
        w >= 0x0 && (b['hash'] = T['substr'](w), T = T['substr'](0x0, w));
        let R = T['indexOf']('?');
        R >= 0x0 && (b['search'] = T['substr'](R), T = T['substr'](0x0, R)), T && (b['pathname'] = T);
    }
    return b;
}

function Ny(T, b, R, p) {
    p === void 0x0 && (p = {});
    let {
        window: A = document['defaultView'],
        v5Compat: N = !0x1
    } = p, C = A['history'], L = Gt['Pop'], z = null, I = K();
    I == null && (I = 0x0, C['replaceState'](yi({}, C['state'], {
        'idx': I
    }), ''));

    function K() {
        return (C['state'] || {
            'idx': null
        })['idx'];
    }

    function O() {
        L = Gt['Pop'];
        let B = K(),
            g = B == null ? null : B - I;
        I = B, z && z({
            'action': L,
            'location': J['location'],
            'delta': g
        });
    }

    function V(B, j) {
        L = Gt['Push'];
        let M = qo(J['location'], B, j);
        I = K() + 0x1;
        let U = fd(M, I),
            Y0 = J['createHref'](M);
        try {
            C['pushState'](U, '', Y0);
        } catch (Y3) {
            if (Y3 instanceof DOMException && Y3['name'] === 'DataCloneError') throw Y3;
            A['location']['assign'](Y0);
        }
        N && z && z({
            'action': L,
            'location': J['location'],
            'delta': 0x1
        });
    }

    function S(B, j) {
        L = Gt['Replace'];
        let M = qo(J['location'], B, j);
        I = K();
        let U = fd(M, I),
            Y0 = J['createHref'](M);
        C['replaceState'](U, '', Y0), N && z && z({
            'action': L,
            'location': J['location'],
            'delta': 0x0
        });
    }

    function m(B) {
        let g = A['location']['origin'] !== 'null' ? A['location']['origin'] : A['location']['href'],
            j = typeof B == 'string' ? B : zs(B);
        return j = j['replace'](/ $/, '%20'), he(g, 'No\x20window.location.(origin|href)\x20available\x20to\x20create\x20URL\x20for\x20href:\x20' + j), new URL(j, g);
    }
    let J = {
        get 'action'() {
            return L;
        },
        get 'location'() {
            return T(A, C);
        },
        'listen'(B) {
            if (z) throw new Error('A\x20history\x20only\x20accepts\x20one\x20active\x20listener');
            return A['addEventListener'](hd, O), z = B, () => {
                A['removeEventListener'](hd, O), z = null;
            };
        },
        'createHref'(B) {
            return b(A, B);
        },
        'createURL': m,
        'encodeLocation'(B) {
            let g = m(B);
            return {
                'pathname': g['pathname'],
                'search': g['search'],
                'hash': g['hash']
            };
        },
        'push': V,
        'replace': S,
        'go'(B) {
            return C['go'](B);
        }
    };
    return J;
}
var pd;
(function(T) {
    T['data'] = 'data', T['deferred'] = 'deferred', T['redirect'] = 'redirect', T['error'] = 'error';
}(pd || (pd = {})));

function Sy(T, b, w) {
    return w === void 0x0 && (w = '/'), by(T, b, w, !0x1);
}

function by(T, b, w, R) {
    let p = typeof b == 'string' ? Nr(b) : b,
        A = hu(p['pathname'] || '/', w);
    if (A == null) return null;
    let N = Jp(T);
    ky(N);
    let C = null;
    for (let h = 0x0; C == null && h < N['length']; ++h) {
        let L = Vy(A);
        C = Ly(N[h], L, R);
    }
    return C;
}

function Jp(T, b, w, R) {
    b === void 0x0 && (b = []), w === void 0x0 && (w = []), R === void 0x0 && (R = '');
    let p = (A, N, C) => {
        let h = {
            'relativePath': C === void 0x0 ? A['path'] || '' : C,
            'caseSensitive': A['caseSensitive'] === !0x0,
            'childrenIndex': N,
            'route': A
        };
        h['relativePath']['startsWith']('/') && (he(h['relativePath']['startsWith'](R), 'Absolute\x20route\x20path\x20\x22' + h['relativePath'] + '\x22\x20nested\x20under\x20path\x20' + ('\x22' + R + '\x22\x20is\x20not\x20valid.\x20An\x20absolute\x20child\x20route\x20path\x20') + 'must\x20start\x20with\x20the\x20combined\x20path\x20of\x20all\x20its\x20parent\x20routes.'), h['relativePath'] = h['relativePath']['slice'](R['length']));
        let L = rn([R, h['relativePath']]),
            z = w['concat'](h);
        A['children'] && A['children']['length'] > 0x0 && (he(A['index'] !== !0x0, 'Index\x20routes\x20must\x20not\x20have\x20child\x20routes.\x20Please\x20remove\x20' + ('all\x20child\x20routes\x20from\x20route\x20path\x20\x22' + L + '\x22.')), Jp(A['children'], b, z, L)), !(A['path'] == null && !A['index']) && b['push']({
            'path': L,
            'score': Ay(L, A['index']),
            'routesMeta': z
        });
    };
    return T['forEach']((A, N) => {
        var C;
        if (A['path'] === '' || !((C = A['path']) != null && C['includes']('?'))) p(A, N);
        else
            for (let h of qp(A['path'])) p(A, N, h);
    }), b;
}

function qp(T) {
    let b = T['split']('/');
    if (b['length'] === 0x0) return [];
    let [w, ...R] = b, p = w['endsWith']('?'), A = w['replace'](/\?$/, '');
    if (R['length'] === 0x0) return p ? [A, ''] : [A];
    let N = qp(R['join']('/')),
        C = [];
    return C['push'](...N['map'](h => h === '' ? A : [A, h]['join']('/'))), p && C['push'](...N), C['map'](h => T['startsWith']('/') && h === '' ? '/' : h);
}

function ky(T) {
    T['sort']((b, w) => b['score'] !== w['score'] ? w['score'] - b['score'] : Dy(b['routesMeta']['map'](R => R['childrenIndex']), w['routesMeta']['map'](R => R['childrenIndex'])));
}
const Cy = /^:[\w-]+$/,
    Ty = 0x3,
    Py = 0x2,
    Ey = 0x1,
    My = 0xa,
    Ry = -0x2,
    md = T => T === '*';

function Ay(T, b) {
    let w = T['split']('/'),
        R = w['length'];
    return w['some'](md) && (R += Ry), b && (R += Py), w['filter'](p => !md(p))['reduce']((p, A) => p + (Cy['test'](A) ? Ty : A === '' ? Ey : My), R);
}

function Dy(T, b) {
    return T['length'] === b['length'] && T['slice'](0x0, -0x1)['every']((w, R) => w === b[R]) ? T[T['length'] - 0x1] - b[b['length'] - 0x1] : 0x0;
}

function Ly(T, b, w) {
    let {
        routesMeta: R
    } = T, p = {}, A = '/', N = [];
    for (let C = 0x0; C < R['length']; ++C) {
        let L = R[C],
            z = C === R['length'] - 0x1,
            I = A === '/' ? b : b['slice'](A['length']) || '/',
            K = gd({
                'path': L['relativePath'],
                'caseSensitive': L['caseSensitive'],
                'end': z
            }, I),
            O = L['route'];
        if (!K && z && w && !R[R['length'] - 0x1]['route']['index'] && (K = gd({
                'path': L['relativePath'],
                'caseSensitive': L['caseSensitive'],
                'end': !0x1
            }, I)), !K) return null;
        Object['assign'](p, K['params']), N['push']({
            'params': p,
            'pathname': rn([A, K['pathname']]),
            'pathnameBase': zy(rn([A, K['pathnameBase']])),
            'route': O
        }), K['pathnameBase'] !== '/' && (A = rn([A, K['pathnameBase']]));
    }
    return N;
}

function gd(T, b) {
    typeof T == 'string' && (T = {
        'path': T,
        'caseSensitive': !0x1,
        'end': !0x0
    });
    let [w, R] = Iy(T['path'], T['caseSensitive'], T['end']), p = b['match'](w);
    if (!p) return null;
    let A = p[0x0],
        N = A['replace'](/(.)\/+$/, '$1'),
        C = p['slice'](0x1);
    return {
        'params': R['reduce']((L, z, I) => {
            let {
                paramName: K,
                isOptional: u
            } = z;
            if (K === '*') {
                let V = C[I] || '';
                N = A['slice'](0x0, A['length'] - V['length'])['replace'](/(.)\/+$/, '$1');
            }
            const O = C[I];
            return u && !O ? L[K] = void 0x0 : L[K] = (O || '')['replace'](/%2F/g, '/'), L;
        }, {}),
        'pathname': A,
        'pathnameBase': N,
        'pattern': T
    };
}

function Iy(T, b, w) {
    b === void 0x0 && (b = !0x1), w === void 0x0 && (w = !0x0), Qp(T === '*' || !T['endsWith']('*') || T['endsWith']('/*'), 'Route\x20path\x20\x22' + T + '\x22\x20will\x20be\x20treated\x20as\x20if\x20it\x20were\x20' + ('\x22' + T['replace'](/\*$/, '/*') + '\x22\x20because\x20the\x20`*`\x20character\x20must\x20') + 'always\x20follow\x20a\x20`/`\x20in\x20the\x20pattern.\x20To\x20get\x20rid\x20of\x20this\x20warning,\x20' + ('please\x20change\x20the\x20route\x20path\x20to\x20\x22' + T['replace'](/\*$/, '/*') + '\x22.'));
    let R = [],
        p = '^' + T['replace'](/\/*\*?$/, '')['replace'](/^\/*/, '/')['replace'](/[\\.*+^${}|()[\]]/g, '\x5c$&')['replace'](/\/:([\w-]+)(\?)?/g, (A, N, C) => (R['push']({
            'paramName': N,
            'isOptional': C != null
        }), C ? '/?([^\x5c/]+)?' : '/([^\x5c/]+)'));
    return T['endsWith']('*') ? (R['push']({
        'paramName': '*'
    }), p += T === '*' || T === '/*' ? '(.*)$' : '(?:\x5c/(.+)|\x5c/*)$') : w ? p += '\x5c/*$' : T !== '' && T !== '/' && (p += '(?:(?=\x5c/|$))'), [new RegExp(p, b ? void 0x0 : 'i'), R];
}

function Vy(T) {
    try {
        return T['split']('/')['map'](b => decodeURIComponent(b)['replace'](/\//g, '%2F'))['join']('/');
    } catch (b) {
        return Qp(!0x1, 'The\x20URL\x20path\x20\x22' + T + '\x22\x20could\x20not\x20be\x20decoded\x20because\x20it\x20is\x20is\x20a\x20malformed\x20URL\x20segment.\x20This\x20is\x20probably\x20due\x20to\x20a\x20bad\x20percent\x20' + ('encoding\x20(' + b + ').')), T;
    }
}

function hu(T, b) {
    if (b === '/') return T;
    if (!T['toLowerCase']()['startsWith'](b['toLowerCase']())) return null;
    let w = b['endsWith']('/') ? b['length'] - 0x1 : b['length'],
        R = T['charAt'](w);
    return R && R !== '/' ? null : T['slice'](w) || '/';
}

function _y(T, b) {
    b === void 0x0 && (b = '/');
    let {
        pathname: w,
        search: R = '',
        hash: p = ''
    } = typeof T == 'string' ? Nr(T) : T;
    return {
        'pathname': w ? w['startsWith']('/') ? w : Fy(w, b) : b,
        'search': By(R),
        'hash': Uy(p)
    };
}

function Fy(T, b) {
    let w = b['replace'](/\/+$/, '')['split']('/');
    return T['split']('/')['forEach'](R => {
        R === '..' ? w['length'] > 0x1 && w['pop']() : R !== '.' && w['push'](R);
    }), w['length'] > 0x1 ? w['join']('/') : '/';
}

function $a(T, b, w, R) {
    return 'Cannot\x20include\x20a\x20\x27' + T + '\x27\x20character\x20in\x20a\x20manually\x20specified\x20' + ('`to.' + b + '`\x20field\x20[' + JSON['stringify'](R) + '].\x20\x20Please\x20separate\x20it\x20out\x20to\x20the\x20') + ('`to.' + w + '`\x20field.\x20Alternatively\x20you\x20may\x20provide\x20the\x20full\x20path\x20as\x20') + 'a\x20string\x20in\x20<Link\x20to=\x22...\x22>\x20and\x20the\x20router\x20will\x20parse\x20it\x20for\x20you.';
}

function Oy(T) {
    return T['filter']((b, w) => w === 0x0 || b['route']['path'] && b['route']['path']['length'] > 0x0);
}

function em(T, b) {
    let w = Oy(T);
    return b ? w['map']((R, p) => p === w['length'] - 0x1 ? R['pathname'] : R['pathnameBase']) : w['map'](R => R['pathnameBase']);
}

function tm(T, b, w, R) {
    R === void 0x0 && (R = !0x1);
    let p;
    typeof T == 'string' ? p = Nr(T) : (p = yi({}, T), he(!p['pathname'] || !p['pathname']['includes']('?'), $a('?', 'pathname', 'search', p)), he(!p['pathname'] || !p['pathname']['includes']('#'), $a('#', 'pathname', 'hash', p)), he(!p['search'] || !p['search']['includes']('#'), $a('#', 'search', 'hash', p)));
    let A = T === '' || p['pathname'] === '',
        N = A ? '/' : p['pathname'],
        C;
    if (N == null) C = w;
    else {
        let K = b['length'] - 0x1;
        if (!R && N['startsWith']('..')) {
            let O = N['split']('/');
            for (; O[0x0] === '..';) O['shift'](), K -= 0x1;
            p['pathname'] = O['join']('/');
        }
        C = K >= 0x0 ? b[K] : '/';
    }
    let L = _y(p, C),
        z = N && N !== '/' && N['endsWith']('/'),
        I = (A || N === '.') && w['endsWith']('/');
    return !L['pathname']['endsWith']('/') && (z || I) && (L['pathname'] += '/'), L;
}
const rn = T => T['join']('/')['replace'](/\/\/+/g, '/'),
    zy = T => T['replace'](/\/+$/, '')['replace'](/^\/*/, '/'),
    By = T => !T || T === '?' ? '' : T['startsWith']('?') ? T : '?' + T,
    Uy = T => !T || T === '#' ? '' : T['startsWith']('#') ? T : '#' + T;

function Hy(T) {
    return T != null && typeof T['status'] == 'number' && typeof T['statusText'] == 'string' && typeof T['internal'] == 'boolean' && 'data' in T;
}
const nm = ['post', 'put', 'patch', 'delete'];
new Set(nm);
const Wy = ['get', ...nm];
new Set(Wy);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xi() {
    return xi = Object['assign'] ? Object['assign']['bind']() : function(T) {
        for (var b = 0x1; b < arguments['length']; b++) {
            var w = arguments[b];
            for (var R in w) Object['prototype']['hasOwnProperty']['call'](w, R) && (T[R] = w[R]);
        }
        return T;
    }, xi['apply'](this, arguments);
}
const fu = P['createContext'](null),
    $y = P['createContext'](null),
    Ln = P['createContext'](null),
    fa = P['createContext'](null),
    In = P['createContext']({
        'outlet': null,
        'matches': [],
        'isDataRoute': !0x1
    }),
    rm = P['createContext'](null);

function Ky(T, b) {
    let {
        relative: w
    } = b === void 0x0 ? {} : b;
    Ei() || he(!0x1);
    let {
        basename: R,
        navigator: p
    } = P['useContext'](Ln), {
        hash: A,
        pathname: N,
        search: C
    } = sm(T, {
        'relative': w
    }), h = N;
    return R !== '/' && (h = N === '/' ? R : rn([R, N])), p['createHref']({
        'pathname': h,
        'search': C,
        'hash': A
    });
}

function Ei() {
    return P['useContext'](fa) != null;
}

function Vn() {
    return Ei() || he(!0x1), P['useContext'](fa)['location'];
}

function im(T) {
    P['useContext'](Ln)['static'] || P['useLayoutEffect'](T);
}

function pu() {
    let {
        isDataRoute: T
    } = P['useContext'](In);
    return T ? sx() : Xy();
}

function Xy() {
    Ei() || he(!0x1);
    let T = P['useContext'](fu),
        {
            basename: b,
            future: w,
            navigator: R
        } = P['useContext'](Ln),
        {
            matches: p
        } = P['useContext'](In),
        {
            pathname: A
        } = Vn(),
        N = JSON['stringify'](em(p, w['v7_relativeSplatPath'])),
        C = P['useRef'](!0x1);
    return im(() => {
        C['current'] = !0x0;
    }), P['useCallback'](function(L, z) {
        if (z === void 0x0 && (z = {}), !C['current']) return;
        if (typeof L == 'number') {
            R['go'](L);
            return;
        }
        let I = tm(L, JSON['parse'](N), A, z['relative'] === 'path');
        T == null && b !== '/' && (I['pathname'] = I['pathname'] === '/' ? b : rn([b, I['pathname']])), (z['replace'] ? R['replace'] : R['push'])(I, z['state'], z);
    }, [b, R, N, A, T]);
}

function sm(T, b) {
    let {
        relative: w
    } = b === void 0x0 ? {} : b, {
        future: R
    } = P['useContext'](Ln), {
        matches: p
    } = P['useContext'](In), {
        pathname: A
    } = Vn(), N = JSON['stringify'](em(p, R['v7_relativeSplatPath']));
    return P['useMemo'](() => tm(T, JSON['parse'](N), A, w === 'path'), [T, N, A, w]);
}

function Gy(T, b) {
    return Yy(T, b);
}

function Yy(T, b, R, p) {
    Ei() || he(!0x1);
    let {
        navigator: A
    } = P['useContext'](Ln), {
        matches: C
    } = P['useContext'](In), L = C[C['length'] - 0x1], z = L ? L['params'] : {};
    L && L['pathname'];
    let I = L ? L['pathnameBase'] : '/';
    L && L['route'];
    let K = Vn(),
        O;
    if (b) {
        var V;
        let g = typeof b == 'string' ? Nr(b) : b;
        I === '/' || (V = g['pathname']) != null && V['startsWith'](I) || he(!0x1), O = g;
    } else O = K;
    let S = O['pathname'] || '/',
        m = S;
    if (I !== '/') {
        let j = I['replace'](/^\//, '')['split']('/');
        m = '/' + S['replace'](/^\//, '')['split']('/')['slice'](j['length'])['join']('/');
    }
    let J = Sy(T, {
            'pathname': m
        }),
        B = ex(J && J['map'](M => Object['assign']({}, M, {
            'params': Object['assign']({}, z, M['params']),
            'pathname': rn([I, A['encodeLocation'] ? A['encodeLocation'](M['pathname'])['pathname'] : M['pathname']]),
            'pathnameBase': M['pathnameBase'] === '/' ? I : rn([I, A['encodeLocation'] ? A['encodeLocation'](M['pathnameBase'])['pathname'] : M['pathnameBase']])
        })), C, R, p);
    return b && B ? P['createElement'](fa['Provider'], {
        'value': {
            'location': xi({
                'pathname': '/',
                'search': '',
                'hash': '',
                'state': null,
                'key': 'default'
            }, O),
            'navigationType': Gt['Pop']
        }
    }, B) : B;
}

function Zy() {
    let T = ix(),
        b = Hy(T) ? T['status'] + '\x20' + T['statusText'] : T instanceof Error ? T['message'] : JSON['stringify'](T),
        w = T instanceof Error ? T['stack'] : null,
        R = {
            'padding': '0.5rem',
            'backgroundColor': 'rgba(200,200,200,\x200.5)'
        };
    return P['createElement'](P['Fragment'], null, P['createElement']('h2', null, 'Unexpected\x20Application\x20Error!'), P['createElement']('h3', {
        'style': {
            'fontStyle': 'italic'
        }
    }, b), w ? P['createElement']('pre', {
        'style': R
    }, w) : null, null);
}
const Qy = P['createElement'](Zy, null);
class Jy extends P['Component'] {
    constructor(T) {
        super(T), this['state'] = {
            'location': T['location'],
            'revalidation': T['revalidation'],
            'error': T['error']
        };
    }
    static['getDerivedStateFromError'](T) {
        return {
            'error': T
        };
    }
    static['getDerivedStateFromProps'](T, b) {
        return b['location'] !== T['location'] || b['revalidation'] !== 'idle' && T['revalidation'] === 'idle' ? {
            'error': T['error'],
            'location': T['location'],
            'revalidation': T['revalidation']
        } : {
            'error': T['error'] !== void 0x0 ? T['error'] : b['error'],
            'location': b['location'],
            'revalidation': T['revalidation'] || b['revalidation']
        };
    } ['componentDidCatch'](T, b) {
        console['error']('React\x20Router\x20caught\x20the\x20following\x20error\x20during\x20render', T, b);
    } ['render']() {
        return this['state']['error'] !== void 0x0 ? P['createElement'](In['Provider'], {
            'value': this['props']['routeContext']
        }, P['createElement'](rm['Provider'], {
            'value': this['state']['error'],
            'children': this['props']['component']
        })) : this['props']['children'];
    }
}

function qy(T) {
    let {
        routeContext: b,
        match: w,
        children: R
    } = T, p = P['useContext'](fu);
    return p && p['static'] && p['staticContext'] && (w['route']['errorElement'] || w['route']['ErrorBoundary']) && (p['staticContext']['_deepestRenderedBoundaryId'] = w['route']['id']), P['createElement'](In['Provider'], {
        'value': b
    }, R);
}

function ex(T, b, R, p) {
    var A;
    if (b === void 0x0 && (b = []), R === void 0x0 && (R = null), p === void 0x0 && (p = null), T == null) {
        var N;
        if (!R) return null;
        if (R['errors']) T = R['matches'];
        else if ((N = p) != null && N['v7_partialHydration'] && b['length'] === 0x0 && !R['initialized'] && R['matches']['length'] > 0x0) T = R['matches'];
        else return null;
    }
    let C = T,
        L = (A = R) == null ? void 0x0 : A['errors'];
    if (L != null) {
        let K = C['findIndex'](O => O['route']['id'] && (L == null ? void 0x0 : L[O['route']['id']]) !== void 0x0);
        K >= 0x0 || he(!0x1), C = C['slice'](0x0, Math['min'](C['length'], K + 0x1));
    }
    let z = !0x1,
        I = -0x1;
    if (R && p && p['v7_partialHydration'])
        for (let O = 0x0; O < C['length']; O++) {
            let x = C[O];
            if ((x['route']['HydrateFallback'] || x['route']['hydrateFallbackElement']) && (I = O), x['route']['id']) {
                let {
                    loaderData: V,
                    errors: S
                } = R, m = x['route']['loader'] && V[x['route']['id']] === void 0x0 && (!S || S[x['route']['id']] === void 0x0);
                if (x['route']['lazy'] || m) {
                    z = !0x0, I >= 0x0 ? C = C['slice'](0x0, I + 0x1) : C = [C[0x0]];
                    break;
                }
            }
        }
    return C['reduceRight']((J, B, g) => {
        let j, M = !0x1,
            U = null,
            Y0 = null;
        R && (j = L && B['route']['id'] ? L[B['route']['id']] : void 0x0, U = B['route']['errorElement'] || Qy, z && (I < 0x0 && g === 0x0 ? (M = !0x0, Y0 = null) : I === g && (M = !0x0, Y0 = B['route']['hydrateFallbackElement'] || null)));
        let Y3 = b['concat'](C['slice'](0x0, g + 0x1)),
            Y4 = () => {
                let Y5;
                return j ? Y5 = U : M ? Y5 = Y0 : B['route']['Component'] ? Y5 = P['createElement'](B['route']['Component'], null) : B['route']['element'] ? Y5 = B['route']['element'] : Y5 = J, P['createElement'](qy, {
                    'match': B,
                    'routeContext': {
                        'outlet': J,
                        'matches': Y3,
                        'isDataRoute': R != null
                    },
                    'children': Y5
                });
            };
        return R && (B['route']['ErrorBoundary'] || B['route']['errorElement'] || g === 0x0) ? P['createElement'](Jy, {
            'location': R['location'],
            'revalidation': R['revalidation'],
            'component': U,
            'error': j,
            'children': Y4(),
            'routeContext': {
                'outlet': null,
                'matches': Y3,
                'isDataRoute': !0x0
            }
        }) : Y4();
    }, null);
}
var am = function(T) {
        return T['UseBlocker'] = 'useBlocker', T['UseRevalidator'] = 'useRevalidator', T['UseNavigateStable'] = 'useNavigate', T;
    }(am || {}),
    Bs = function(T) {
        return T['UseBlocker'] = 'useBlocker', T['UseLoaderData'] = 'useLoaderData', T['UseActionData'] = 'useActionData', T['UseRouteError'] = 'useRouteError', T['UseNavigation'] = 'useNavigation', T['UseRouteLoaderData'] = 'useRouteLoaderData', T['UseMatches'] = 'useMatches', T['UseRevalidator'] = 'useRevalidator', T['UseNavigateStable'] = 'useNavigate', T['UseRouteId'] = 'useRouteId', T;
    }(Bs || {});

function tx(T) {
    let b = P['useContext'](fu);
    return b || he(!0x1), b;
}

function nx(T) {
    let b = P['useContext']($y);
    return b || he(!0x1), b;
}

function rx(T) {
    let b = P['useContext'](In);
    return b || he(!0x1), b;
}

function om(T) {
    let b = rx(),
        w = b['matches'][b['matches']['length'] - 0x1];
    return w['route']['id'] || he(!0x1), w['route']['id'];
}

function ix() {
    var T;
    let b = P['useContext'](rm),
        w = nx(Bs['UseRouteError']),
        R = om(Bs['UseRouteError']);
    return b !== void 0x0 ? b : (T = w['errors']) == null ? void 0x0 : T[R];
}

function sx() {
    let {
        router: T
    } = tx(am['UseNavigateStable']), b = om(Bs['UseNavigateStable']), w = P['useRef'](!0x1);
    return im(() => {
        w['current'] = !0x0;
    }), P['useCallback'](function(R, p) {
        p === void 0x0 && (p = {}), w['current'] && (typeof R == 'number' ? T['navigate'](R) : T['navigate'](R, xi({
            'fromRouteId': b
        }, p)));
    }, [T, b]);
}
const vd = {};

function ax(T, b) {
    vd[b] || (vd[b] = !0x0, console['warn'](b));
}
const yd = (T, b, w) => ax(T, 'вљ\x20пёЏ\x20React\x20Router\x20Future\x20Flag\x20Warning:\x20' + b + '.\x20' + ('You\x20can\x20use\x20the\x20`' + T + '`\x20future\x20flag\x20to\x20opt-in\x20early.\x20') + ('For\x20more\x20information,\x20see\x20' + w + '.'));

function ox(T, b) {
    (T == null ? void 0x0 : T['v7_startTransition']) === void 0x0 && yd('v7_startTransition', 'React\x20Router\x20will\x20begin\x20wrapping\x20state\x20updates\x20in\x20`React.startTransition`\x20in\x20v7', 'https://reactrouter.com/v6/upgrading/future#v7_starttransition'), (T == null ? void 0x0 : T['v7_relativeSplatPath']) === void 0x0 && !b && yd('v7_relativeSplatPath', 'Relative\x20route\x20resolution\x20within\x20Splat\x20routes\x20is\x20changing\x20in\x20v7', 'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath');
}

function Xe(T) {
    he(!0x1);
}

function lx(T) {
    let {
        basename: b = '/',
        children: R = null,
        location: p,
        navigationType: A = Gt['Pop'],
        navigator: N,
        static: C = !0x1,
        future: L
    } = T;
    Ei() && he(!0x1);
    let z = b['replace'](/^\/*/, '/'),
        I = P['useMemo'](() => ({
            'basename': z,
            'navigator': N,
            'static': C,
            'future': xi({
                'v7_relativeSplatPath': !0x1
            }, L)
        }), [z, L, N, C]);
    typeof p == 'string' && (p = Nr(p));
    let {
        pathname: K = '/',
        search: O = '',
        hash: V = '',
        state: S = null,
        key: m = 'default'
    } = p, J = P['useMemo'](() => {
        let B = hu(K, z);
        return B == null ? null : {
            'location': {
                'pathname': B,
                'search': O,
                'hash': V,
                'state': S,
                'key': m
            },
            'navigationType': A
        };
    }, [z, K, O, V, S, m, A]);
    return J == null ? null : P['createElement'](Ln['Provider'], {
        'value': I
    }, P['createElement'](fa['Provider'], {
        'children': R,
        'value': J
    }));
}

function ux(T) {
    let {
        children: b,
        location: w
    } = T;
    return Gy(el(b), w);
}
new Promise(() => {});

function el(T, b) {
    b === void 0x0 && (b = []);
    let w = [];
    return P['Children']['forEach'](T, (R, p) => {
        if (!P['isValidElement'](R)) return;
        let A = [...b, p];
        if (R['type'] === P['Fragment']) {
            w['push']['apply'](w, el(R['props']['children'], A));
            return;
        }
        R['type'] !== Xe && he(!0x1), !R['props']['index'] || !R['props']['children'] || he(!0x1);
        let N = {
            'id': R['props']['id'] || A['join']('-'),
            'caseSensitive': R['props']['caseSensitive'],
            'element': R['props']['element'],
            'Component': R['props']['Component'],
            'index': R['props']['index'],
            'path': R['props']['path'],
            'loader': R['props']['loader'],
            'action': R['props']['action'],
            'errorElement': R['props']['errorElement'],
            'ErrorBoundary': R['props']['ErrorBoundary'],
            'hasErrorBoundary': R['props']['ErrorBoundary'] != null || R['props']['errorElement'] != null,
            'shouldRevalidate': R['props']['shouldRevalidate'],
            'handle': R['props']['handle'],
            'lazy': R['props']['lazy']
        };
        R['props']['children'] && (N['children'] = el(R['props']['children'], A)), w['push'](N);
    }), w;
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tl() {
    return tl = Object['assign'] ? Object['assign']['bind']() : function(T) {
        for (var b = 0x1; b < arguments['length']; b++) {
            var w = arguments[b];
            for (var R in w) Object['prototype']['hasOwnProperty']['call'](w, R) && (T[R] = w[R]);
        }
        return T;
    }, tl['apply'](this, arguments);
}

function cx(T, b) {
    if (T == null) return {};
    var w = {},
        R = Object['keys'](T),
        p, A;
    for (A = 0x0; A < R['length']; A++) p = R[A], !(b['indexOf'](p) >= 0x0) && (w[p] = T[p]);
    return w;
}

function dx(T) {
    return !!(T['metaKey'] || T['altKey'] || T['ctrlKey'] || T['shiftKey']);
}

function hx(T, b) {
    return T['button'] === 0x0 && (!b || b === '_self') && !dx(T);
}
const fx = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'viewTransition'],
    px = '6';
try {
    window['__reactRouterVersion'] = px;
} catch {}
const mx = 'startTransition',
    xd = f[mx];

function gx(T) {
    let {
        basename: b,
        children: w,
        future: R,
        window: p
    } = T, A = P['useRef']();
    A['current'] == null && (A['current'] = wy({
        'window': p,
        'v5Compat': !0x0
    }));
    let N = A['current'],
        [C, h] = P['useState']({
            'action': N['action'],
            'location': N['location']
        }),
        {
            v7_startTransition: L
        } = R || {},
        z = P['useCallback'](I => {
            L && xd ? xd(() => h(I)) : h(I);
        }, [h, L]);
    return P['useLayoutEffect'](() => N['listen'](z), [N, z]), P['useEffect'](() => ox(R), [R]), P['createElement'](lx, {
        'basename': b,
        'children': w,
        'location': C['location'],
        'navigationType': C['action'],
        'navigator': N,
        'future': R
    });
}
const vx = typeof window < 'u' && typeof window['document'] < 'u' && typeof window['document']['createElement'] < 'u',
    yx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Tt = P['forwardRef'](function(T, R) {
        let {
            onClick: A,
            relative: C,
            reloadDocument: L,
            replace: z,
            state: I,
            target: K,
            to: O,
            preventScrollReset: V,
            viewTransition: J
        } = T, B = cx(T, fx), {
            basename: j
        } = P['useContext'](Ln), M, U = !0x1;
        if (typeof O == 'string' && yx['test'](O) && (M = O, vx)) try {
            let Y5 = new URL(window['location']['href']),
                Y6 = O['startsWith']('//') ? new URL(Y5['protocol'] + O) : new URL(O),
                Y7 = hu(Y6['pathname'], j);
            Y6['origin'] === Y5['origin'] && Y7 != null ? O = Y7 + Y6['search'] + Y6['hash'] : U = !0x0;
        } catch {}
        let Y0 = Ky(O, {
                'relative': C
            }),
            Y3 = xx(O, {
                'replace': z,
                'state': I,
                'target': K,
                'preventScrollReset': V,
                'relative': C,
                'viewTransition': J
            });

        function Y4(Y8) {
            A && A(Y8), Y8['defaultPrevented'] || Y3(Y8);
        }
        return P['createElement']('a', tl({}, B, {
            'href': M || Y0,
            'onClick': U || L ? A : Y4,
            'ref': R,
            'target': K
        }));
    });
var wd;
(function(T) {
    T['UseScrollRestoration'] = 'useScrollRestoration', T['UseSubmit'] = 'useSubmit', T['UseSubmitFetcher'] = 'useSubmitFetcher', T['UseFetcher'] = 'useFetcher', T['useViewTransitionState'] = 'useViewTransitionState';
}(wd || (wd = {})));
var jd;
(function(T) {
    T['UseFetcher'] = 'useFetcher', T['UseFetchers'] = 'useFetchers', T['UseScrollRestoration'] = 'useScrollRestoration';
}(jd || (jd = {})));

function xx(T, b) {
    let {
        target: w,
        replace: R,
        state: p,
        preventScrollReset: A,
        relative: N,
        viewTransition: C
    } = b === void 0x0 ? {} : b, h = pu(), L = Vn(), z = sm(T, {
        'relative': N
    });
    return P['useCallback'](I => {
        if (hx(I, w)) {
            I['preventDefault']();
            let K = R !== void 0x0 ? R : zs(L) === zs(z);
            h(T, {
                'replace': K,
                'state': p,
                'preventScrollReset': A,
                'relative': N,
                'viewTransition': C
            });
        }
    }, [L, h, z, R, p, w, T, A, N, C]);
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wx = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'width': 0x18,
    'height': 0x18,
    'viewBox': '0\x200\x2024\x2024',
    'fill': 'none',
    'stroke': 'currentColor',
    'strokeWidth': 0x2,
    'strokeLinecap': 'round',
    'strokeLinejoin': 'round'
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = T => T['replace'](/([a-z0-9])([A-Z])/g, '$1-$2')['toLowerCase']()['trim'](),
    F = (T, b) => {
        const w = P['forwardRef'](({
            color: R = 'currentColor',
            size: p = 0x18,
            strokeWidth: A = 0x2,
            absoluteStrokeWidth: N,
            className: C = '',
            children: h,
            ...L
        }, z) => P['createElement']('svg', {
            'ref': z,
            ...wx,
            'width': p,
            'height': p,
            'stroke': R,
            'strokeWidth': N ? Number(A) * 0x18 / Number(p) : A,
            'className': ['lucide', 'lucide-' + jx(T), C]['join']('\x20'),
            ...L
        }, [...b['map'](([I, K]) => P['createElement'](I, K)), ...Array['isArray'](h) ? h : [h]]));
        return w['displayName'] = '' + T, w;
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = F('AlertCircle', [
    ['circle', {
        'cx': '12',
        'cy': '12',
        'r': '10',
        'key': '1mglay'
    }],
    ['line', {
        'x1': '12',
        'x2': '12',
        'y1': '8',
        'y2': '12',
        'key': '1pkeuh'
    }],
    ['line', {
        'x1': '12',
        'x2': '12.01',
        'y1': '16',
        'y2': '16',
        'key': '4dfq90'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nx = F('ArrowLeft', [
    ['path', {
        'd': 'm12\x2019-7-7\x207-7',
        'key': '1l729n'
    }],
    ['path', {
        'd': 'M19\x2012H5',
        'key': 'x3x0zl'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = F('ArrowRight', [
    ['path', {
        'd': 'M5\x2012h14',
        'key': '1ays0h'
    }],
    ['path', {
        'd': 'm12\x205\x207\x207-7\x207',
        'key': 'xquz4c'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sx = F('Award', [
    ['circle', {
        'cx': '12',
        'cy': '8',
        'r': '6',
        'key': '1vp47v'
    }],
    ['path', {
        'd': 'M15.477\x2012.89\x2017\x2022l-5-3-5\x203\x201.523-9.11',
        'key': 'em7aur'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = F('Brain', [
    ['path', {
        'd': 'M12\x205a3\x203\x200\x201\x200-5.997.125\x204\x204\x200\x200\x200-2.526\x205.77\x204\x204\x200\x200\x200\x20.556\x206.588A4\x204\x200\x201\x200\x2012\x2018Z',
        'key': 'l5xja'
    }],
    ['path', {
        'd': 'M12\x205a3\x203\x200\x201\x201\x205.997.125\x204\x204\x200\x200\x201\x202.526\x205.77\x204\x204\x200\x200\x201-.556\x206.588A4\x204\x200\x201\x201\x2012\x2018Z',
        'key': 'ep3f8r'
    }],
    ['path', {
        'd': 'M15\x2013a4.5\x204.5\x200\x200\x201-3-4\x204.5\x204.5\x200\x200\x201-3\x204',
        'key': '1p4c4q'
    }],
    ['path', {
        'd': 'M17.599\x206.5a3\x203\x200\x200\x200\x20.399-1.375',
        'key': 'tmeiqw'
    }],
    ['path', {
        'd': 'M6.003\x205.125A3\x203\x200\x200\x200\x206.401\x206.5',
        'key': '105sqy'
    }],
    ['path', {
        'd': 'M3.477\x2010.896a4\x204\x200\x200\x201\x20.585-.396',
        'key': 'ql3yin'
    }],
    ['path', {
        'd': 'M19.938\x2010.5a4\x204\x200\x200\x201\x20.585.396',
        'key': '1qfode'
    }],
    ['path', {
        'd': 'M6\x2018a4\x204\x200\x200\x201-1.967-.516',
        'key': '2e4loj'
    }],
    ['path', {
        'd': 'M19.967\x2017.484A4\x204\x200\x200\x201\x2018\x2018',
        'key': '159ez6'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = F('CheckCircle', [
    ['path', {
        'd': 'M22\x2011.08V12a10\x2010\x200\x201\x201-5.93-9.14',
        'key': 'g774vq'
    }],
    ['path', {
        'd': 'm9\x2011\x203\x203L22\x204',
        'key': '1pflzl'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = F('Check', [
    ['path', {
        'd': 'M20\x206\x209\x2017l-5-5',
        'key': '1gmf2c'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = F('ChevronDown', [
    ['path', {
        'd': 'm6\x209\x206\x206\x206-6',
        'key': 'qrunsl'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = F('Code', [
    ['polyline', {
        'points': '16\x2018\x2022\x2012\x2016\x206',
        'key': 'z7tu5w'
    }],
    ['polyline', {
        'points': '8\x206\x202\x2012\x208\x2018',
        'key': '1eg1df'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = F('Copy', [
    ['rect', {
        'width': '14',
        'height': '14',
        'x': '8',
        'y': '8',
        'rx': '2',
        'ry': '2',
        'key': '17jyea'
    }],
    ['path', {
        'd': 'M4\x2016c-1.1\x200-2-.9-2-2V4c0-1.1.9-2\x202-2h10c1.1\x200\x202\x20.9\x202\x202',
        'key': 'zix9uf'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = F('Cpu', [
    ['rect', {
        'x': '4',
        'y': '4',
        'width': '16',
        'height': '16',
        'rx': '2',
        'key': '1vbyd7'
    }],
    ['rect', {
        'x': '9',
        'y': '9',
        'width': '6',
        'height': '6',
        'key': 'o3kz5p'
    }],
    ['path', {
        'd': 'M15\x202v2',
        'key': '13l42r'
    }],
    ['path', {
        'd': 'M15\x2020v2',
        'key': '15mkzm'
    }],
    ['path', {
        'd': 'M2\x2015h2',
        'key': '1gxd5l'
    }],
    ['path', {
        'd': 'M2\x209h2',
        'key': '1bbxkp'
    }],
    ['path', {
        'd': 'M20\x2015h2',
        'key': '19e6y8'
    }],
    ['path', {
        'd': 'M20\x209h2',
        'key': '19tzq7'
    }],
    ['path', {
        'd': 'M9\x202v2',
        'key': '165o2o'
    }],
    ['path', {
        'd': 'M9\x2020v2',
        'key': 'i2bqo8'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Px = F('Crown', [
    ['path', {
        'd': 'm2\x204\x203\x2012h14l3-12-6\x207-4-7-4\x207-6-7zm3\x2016h14',
        'key': 'zkxr6b'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = F('Download', [
    ['path', {
        'd': 'M21\x2015v4a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2v-4',
        'key': 'ih7n3h'
    }],
    ['polyline', {
        'points': '7\x2010\x2012\x2015\x2017\x2010',
        'key': '2ggqvy'
    }],
    ['line', {
        'x1': '12',
        'x2': '12',
        'y1': '15',
        'y2': '3',
        'key': '1vk2je'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = F('ExternalLink', [
    ['path', {
        'd': 'M15\x203h6v6',
        'key': '1q9fwt'
    }],
    ['path', {
        'd': 'M10\x2014\x2021\x203',
        'key': 'gplh6r'
    }],
    ['path', {
        'd': 'M18\x2013v6a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2V8a2\x202\x200\x200\x201\x202-2h6',
        'key': 'a6xqqp'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ex = F('Eye', [
    ['path', {
        'd': 'M2\x2012s3-7\x2010-7\x2010\x207\x2010\x207-3\x207-10\x207-10-7-10-7Z',
        'key': 'rwhkz3'
    }],
    ['circle', {
        'cx': '12',
        'cy': '12',
        'r': '3',
        'key': '1v7zrd'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = F('FileCode2', [
    ['path', {
        'd': 'M4\x2022h14a2\x202\x200\x200\x200\x202-2V7l-5-5H6a2\x202\x200\x200\x200-2\x202v4',
        'key': '1pf5j1'
    }],
    ['path', {
        'd': 'M14\x202v4a2\x202\x200\x200\x200\x202\x202h4',
        'key': 'tnqrlb'
    }],
    ['path', {
        'd': 'm5\x2012-3\x203\x203\x203',
        'key': 'oke12k'
    }],
    ['path', {
        'd': 'm9\x2018\x203-3-3-3',
        'key': '112psh'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = F('FileText', [
    ['path', {
        'd': 'M15\x202H6a2\x202\x200\x200\x200-2\x202v16a2\x202\x200\x200\x200\x202\x202h12a2\x202\x200\x200\x200\x202-2V7Z',
        'key': '1rqfz7'
    }],
    ['path', {
        'd': 'M14\x202v4a2\x202\x200\x200\x200\x202\x202h4',
        'key': 'tnqrlb'
    }],
    ['path', {
        'd': 'M10\x209H8',
        'key': 'b1mrlr'
    }],
    ['path', {
        'd': 'M16\x2013H8',
        'key': 't4e002'
    }],
    ['path', {
        'd': 'M16\x2017H8',
        'key': 'z1uh3a'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = F('Fingerprint', [
    ['path', {
        'd': 'M2\x2012C2\x206.5\x206.5\x202\x2012\x202a10\x2010\x200\x200\x201\x208\x204',
        'key': '1jc9o5'
    }],
    ['path', {
        'd': 'M5\x2019.5C5.5\x2018\x206\x2015\x206\x2012c0-.7.12-1.37.34-2',
        'key': '1mxgy1'
    }],
    ['path', {
        'd': 'M17.29\x2021.02c.12-.6.43-2.3.5-3.02',
        'key': 'ptglia'
    }],
    ['path', {
        'd': 'M12\x2010a2\x202\x200\x200\x200-2\x202c0\x201.02-.1\x202.51-.26\x204',
        'key': '1nerag'
    }],
    ['path', {
        'd': 'M8.65\x2022c.21-.66.45-1.32.57-2',
        'key': '13wd9y'
    }],
    ['path', {
        'd': 'M14\x2013.12c0\x202.38\x200\x206.38-1\x208.88',
        'key': 'o46ks0'
    }],
    ['path', {
        'd': 'M2\x2016h.01',
        'key': '1gqxmh'
    }],
    ['path', {
        'd': 'M21.8\x2016c.2-2\x20.131-5.354\x200-6',
        'key': 'drycrb'
    }],
    ['path', {
        'd': 'M9\x206.8a6\x206\x200\x200\x201\x209\x205.2c0\x20.47\x200\x201.17-.02\x202',
        'key': '1fgabc'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = F('FolderOpen', [
    ['path', {
        'd': 'm6\x2014\x201.5-2.9A2\x202\x200\x200\x201\x209.24\x2010H20a2\x202\x200\x200\x201\x201.94\x202.5l-1.54\x206a2\x202\x200\x200\x201-1.95\x201.5H4a2\x202\x200\x200\x201-2-2V5a2\x202\x200\x200\x201\x202-2h3.9a2\x202\x200\x200\x201\x201.69.9l.81\x201.2a2\x202\x200\x200\x200\x201.67.9H18a2\x202\x200\x200\x201\x202\x202v2',
        'key': 'usdka0'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = F('Gift', [
    ['rect', {
        'x': '3',
        'y': '8',
        'width': '18',
        'height': '4',
        'rx': '1',
        'key': 'bkv52'
    }],
    ['path', {
        'd': 'M12\x208v13',
        'key': '1c76mn'
    }],
    ['path', {
        'd': 'M19\x2012v7a2\x202\x200\x200\x201-2\x202H7a2\x202\x200\x200\x201-2-2v-7',
        'key': '6wjy6b'
    }],
    ['path', {
        'd': 'M7.5\x208a2.5\x202.5\x200\x200\x201\x200-5A4.8\x208\x200\x200\x201\x2012\x208a4.8\x208\x200\x200\x201\x204.5-5\x202.5\x202.5\x200\x200\x201\x200\x205',
        'key': '1ihvrl'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = F('Github', [
    ['path', {
        'd': 'M15\x2022v-4a4.8\x204.8\x200\x200\x200-1-3.5c3\x200\x206-2\x206-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35\x200-3.5\x200\x200-1\x200-3\x201.5-2.64-.5-5.36-.5-8\x200C6\x202\x205\x202\x205\x202c-.3\x201.15-.3\x202.35\x200\x203.5A5.403\x205.403\x200\x200\x200\x204\x209c0\x203.5\x203\x205.5\x206\x205.5-.39.49-.68\x201.05-.85\x201.65-.17.6-.22\x201.23-.15\x201.85v4',
        'key': 'tonef'
    }],
    ['path', {
        'd': 'M9\x2018c-4.51\x202-5-2-7-2',
        'key': '9comsn'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = F('Globe', [
    ['circle', {
        'cx': '12',
        'cy': '12',
        'r': '10',
        'key': '1mglay'
    }],
    ['path', {
        'd': 'M12\x202a14.5\x2014.5\x200\x200\x200\x200\x2020\x2014.5\x2014.5\x200\x200\x200\x200-20',
        'key': '13o1zl'
    }],
    ['path', {
        'd': 'M2\x2012h20',
        'key': '9i4pu4'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = F('HelpCircle', [
    ['circle', {
        'cx': '12',
        'cy': '12',
        'r': '10',
        'key': '1mglay'
    }],
    ['path', {
        'd': 'M9.09\x209a3\x203\x200\x200\x201\x205.83\x201c0\x202-3\x203-3\x203',
        'key': '1u773s'
    }],
    ['path', {
        'd': 'M12\x2017h.01',
        'key': 'p32p05'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = F('Home', [
    ['path', {
        'd': 'm3\x209\x209-7\x209\x207v11a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z',
        'key': 'y5dka4'
    }],
    ['polyline', {
        'points': '9\x2022\x209\x2012\x2015\x2012\x2015\x2022',
        'key': 'e2us08'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = F('Key', [
    ['circle', {
        'cx': '7.5',
        'cy': '15.5',
        'r': '5.5',
        'key': 'yqb3hr'
    }],
    ['path', {
        'd': 'm21\x202-9.6\x209.6',
        'key': '1j0ho8'
    }],
    ['path', {
        'd': 'm15.5\x207.5\x203\x203L22\x207l-3-3',
        'key': '1rn1fs'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = F('Loader2', [
    ['path', {
        'd': 'M21\x2012a9\x209\x200\x201\x201-6.219-8.56',
        'key': '13zald'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = F('Mail', [
    ['rect', {
        'width': '20',
        'height': '16',
        'x': '2',
        'y': '4',
        'rx': '2',
        'key': '18n3k1'
    }],
    ['path', {
        'd': 'm22\x207-8.97\x205.7a1.94\x201.94\x200\x200\x201-2.06\x200L2\x207',
        'key': '1ocrg3'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = F('Menu', [
    ['line', {
        'x1': '4',
        'x2': '20',
        'y1': '12',
        'y2': '12',
        'key': '1e0a9i'
    }],
    ['line', {
        'x1': '4',
        'x2': '20',
        'y1': '6',
        'y2': '6',
        'key': '1owob3'
    }],
    ['line', {
        'x1': '4',
        'x2': '20',
        'y1': '18',
        'y2': '18',
        'key': 'yk5zj1'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = F('Minus', [
    ['path', {
        'd': 'M5\x2012h14',
        'key': '1ays0h'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = F('PanelsTopLeft', [
    ['rect', {
        'width': '18',
        'height': '18',
        'x': '3',
        'y': '3',
        'rx': '2',
        'key': 'afitv7'
    }],
    ['path', {
        'd': 'M3\x209h18',
        'key': '1pudct'
    }],
    ['path', {
        'd': 'M9\x2021V9',
        'key': '1oto5p'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bx = F('Pen', [
    ['path', {
        'd': 'M17\x203a2.85\x202.83\x200\x201\x201\x204\x204L7.5\x2020.5\x202\x2022l1.5-5.5Z',
        'key': '5qss01'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = F('Play', [
    ['polygon', {
        'points': '5\x203\x2019\x2012\x205\x2021\x205\x203',
        'key': '191637'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = F('Plus', [
    ['path', {
        'd': 'M5\x2012h14',
        'key': '1ays0h'
    }],
    ['path', {
        'd': 'M12\x205v14',
        'key': 's699le'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = F('Save', [
    ['path', {
        'd': 'M19\x2021H5a2\x202\x200\x200\x201-2-2V5a2\x202\x200\x200\x201\x202-2h11l5\x205v11a2\x202\x200\x200\x201-2\x202z',
        'key': '1owoqh'
    }],
    ['polyline', {
        'points': '17\x2021\x2017\x2013\x207\x2013\x207\x2021',
        'key': '1md35c'
    }],
    ['polyline', {
        'points': '7\x203\x207\x208\x2015\x208',
        'key': '8nz8an'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hx = F('Search', [
    ['circle', {
        'cx': '11',
        'cy': '11',
        'r': '8',
        'key': '4ej97u'
    }],
    ['path', {
        'd': 'm21\x2021-4.3-4.3',
        'key': '1qie3q'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = F('Settings2', [
    ['path', {
        'd': 'M20\x207h-9',
        'key': '3s1dr2'
    }],
    ['path', {
        'd': 'M14\x2017H5',
        'key': 'gfn3mx'
    }],
    ['circle', {
        'cx': '17',
        'cy': '17',
        'r': '3',
        'key': '18b49y'
    }],
    ['circle', {
        'cx': '7',
        'cy': '7',
        'r': '3',
        'key': 'dfmy0x'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = F('Shield', [
    ['path', {
        'd': 'M20\x2013c0\x205-3.5\x207.5-7.66\x208.95a1\x201\x200\x200\x201-.67-.01C7.5\x2020.5\x204\x2018\x204\x2013V6a1\x201\x200\x200\x201\x201-1c2\x200\x204.5-1.2\x206.24-2.72a1.17\x201.17\x200\x200\x201\x201.52\x200C14.51\x203.81\x2017\x205\x2019\x205a1\x201\x200\x200\x201\x201\x201z',
        'key': 'oel41y'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = F('Sparkles', [
    ['path', {
        'd': 'm12\x203-1.912\x205.813a2\x202\x200\x200\x201-1.275\x201.275L3\x2012l5.813\x201.912a2\x202\x200\x200\x201\x201.275\x201.275L12\x2021l1.912-5.813a2\x202\x200\x200\x201\x201.275-1.275L21\x2012l-5.813-1.912a2\x202\x200\x200\x201-1.275-1.275L12\x203Z',
        'key': '17u4zn'
    }],
    ['path', {
        'd': 'M5\x203v4',
        'key': 'bklmnn'
    }],
    ['path', {
        'd': 'M19\x2017v4',
        'key': 'iiml17'
    }],
    ['path', {
        'd': 'M3\x205h4',
        'key': 'nem4j1'
    }],
    ['path', {
        'd': 'M17\x2019h4',
        'key': 'lbex7p'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = F('Star', [
    ['polygon', {
        'points': '12\x202\x2015.09\x208.26\x2022\x209.27\x2017\x2014.14\x2018.18\x2021.02\x2012\x2017.77\x205.82\x2021.02\x207\x2014.14\x202\x209.27\x208.91\x208.26\x2012\x202',
        'key': '8f66p6'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = F('Terminal', [
    ['polyline', {
        'points': '4\x2017\x2010\x2011\x204\x205',
        'key': 'akl6gq'
    }],
    ['line', {
        'x1': '12',
        'x2': '20',
        'y1': '19',
        'y2': '19',
        'key': 'q2wloq'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = F('ThumbsDown', [
    ['path', {
        'd': 'M17\x2014V2',
        'key': '8ymqnk'
    }],
    ['path', {
        'd': 'M9\x2018.12\x2010\x2014H4.17a2\x202\x200\x200\x201-1.92-2.56l2.33-8A2\x202\x200\x200\x201\x206.5\x202H20a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202h-2.76a2\x202\x200\x200\x200-1.79\x201.11L12\x2022h0a3.13\x203.13\x200\x200\x201-3-3.88Z',
        'key': 's6e0r'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = F('ThumbsUp', [
    ['path', {
        'd': 'M7\x2010v12',
        'key': '1qc93n'
    }],
    ['path', {
        'd': 'M15\x205.88\x2014\x2010h5.83a2\x202\x200\x200\x201\x201.92\x202.56l-2.33\x208A2\x202\x200\x200\x201\x2017.5\x2022H4a2\x202\x200\x200\x201-2-2v-8a2\x202\x200\x200\x201\x202-2h2.76a2\x202\x200\x200\x200\x201.79-1.11L12\x202h0a3.13\x203.13\x200\x200\x201\x203\x203.88Z',
        'key': 'y3tblf'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = F('Trash2', [
    ['path', {
        'd': 'M3\x206h18',
        'key': 'd0wm0j'
    }],
    ['path', {
        'd': 'M19\x206v14c0\x201-1\x202-2\x202H7c-1\x200-2-1-2-2V6',
        'key': '4alrt4'
    }],
    ['path', {
        'd': 'M8\x206V4c0-1\x201-2\x202-2h4c1\x200\x202\x201\x202\x202v2',
        'key': 'v07s0e'
    }],
    ['line', {
        'x1': '10',
        'x2': '10',
        'y1': '11',
        'y2': '17',
        'key': '1uufr5'
    }],
    ['line', {
        'x1': '14',
        'x2': '14',
        'y1': '11',
        'y2': '17',
        'key': 'xtxkd'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kx = F('Users', [
    ['path', {
        'd': 'M16\x2021v-2a4\x204\x200\x200\x200-4-4H6a4\x204\x200\x200\x200-4\x204v2',
        'key': '1yyitq'
    }],
    ['circle', {
        'cx': '9',
        'cy': '7',
        'r': '4',
        'key': 'nufk8'
    }],
    ['path', {
        'd': 'M22\x2021v-2a4\x204\x200\x200\x200-3-3.87',
        'key': 'kshegd'
    }],
    ['path', {
        'd': 'M16\x203.13a4\x204\x200\x200\x201\x200\x207.75',
        'key': '1da9ce'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = F('XCircle', [
    ['circle', {
        'cx': '12',
        'cy': '12',
        'r': '10',
        'key': '1mglay'
    }],
    ['path', {
        'd': 'm15\x209-6\x206',
        'key': '1uzhvr'
    }],
    ['path', {
        'd': 'm9\x209\x206\x206',
        'key': 'z0biqf'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = F('X', [
    ['path', {
        'd': 'M18\x206\x206\x2018',
        'key': '1bl5f8'
    }],
    ['path', {
        'd': 'm6\x206\x2012\x2012',
        'key': 'd8bk6v'
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = F('Zap', [
        ['polygon', {
            'points': '13\x202\x203\x2014\x2012\x2014\x2011\x2022\x2021\x2010\x2012\x2010\x2013\x202',
            'key': '45s27k'
        }]
    ]),
    gu = P['createContext']({});

function vu(T) {
    const b = P['useRef'](null);
    return b['current'] === null && (b['current'] = T()), b['current'];
}
const pa = P['createContext'](null),
    yu = P['createContext']({
        'transformPagePoint': T => T,
        'isStatic': !0x1,
        'reducedMotion': 'never'
    });
class Gx extends P['Component'] {
    ['getSnapshotBeforeUpdate'](T) {
        const b = this['props']['childRef']['current'];
        if (b && T['isPresent'] && !this['props']['isPresent']) {
            const w = this['props']['sizeRef']['current'];
            w['height'] = b['offsetHeight'] || 0x0, w['width'] = b['offsetWidth'] || 0x0, w['top'] = b['offsetTop'], w['left'] = b['offsetLeft'];
        }
        return null;
    } ['componentDidUpdate']() {} ['render']() {
        return this['props']['children'];
    }
}

function Yx({
    children: T,
    isPresent: b
}) {
    const w = P['useId'](),
        R = P['useRef'](null),
        p = P['useRef']({
            'width': 0x0,
            'height': 0x0,
            'top': 0x0,
            'left': 0x0
        }),
        {
            nonce: A
        } = P['useContext'](yu);
    return P['useInsertionEffect'](() => {
        const {
            width: N,
            height: C,
            top: h,
            left: L
        } = p['current'];
        if (b || !R['current'] || !N || !C) return;
        R['current']['dataset']['motionPopId'] = w;
        const z = document['createElement']('style');
        return A && (z['nonce'] = A), document['head']['appendChild'](z), z['sheet'] && z['sheet']['insertRule']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-motion-pop-id=\x22' + w + '\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20' + N + 'px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20' + C + 'px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20' + h + 'px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20' + L + 'px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20'), () => {
            document['head']['removeChild'](z);
        };
    }, [b]), o['jsx'](Gx, {
        'isPresent': b,
        'childRef': R,
        'sizeRef': p,
        'children': P['cloneElement'](T, {
            'ref': R
        })
    });
}
const Zx = ({
    children: T,
    initial: b,
    isPresent: w,
    onExitComplete: R,
    custom: p,
    presenceAffectsLayout: A,
    mode: N
}) => {
    const C = vu(Qx),
        h = P['useId'](),
        L = P['useCallback'](I => {
            C['set'](I, !0x0);
            for (const K of C['values']())
                if (!K) return;
            R && R();
        }, [C, R]),
        z = P['useMemo'](() => ({
            'id': h,
            'initial': b,
            'isPresent': w,
            'custom': p,
            'onExitComplete': L,
            'register': I => (C['set'](I, !0x1), () => C['delete'](I))
        }), A ? [Math['random'](), L] : [w, L]);
    return P['useMemo'](() => {
        C['forEach']((I, K) => C['set'](K, !0x1));
    }, [w]), P['useEffect'](() => {
        !w && !C['size'] && R && R();
    }, [w]), N === 'popLayout' && (T = o['jsx'](Yx, {
        'isPresent': w,
        'children': T
    })), o['jsx'](pa['Provider'], {
        'value': z,
        'children': T
    });
};

function Qx() {
    return new Map();
}

function mm(T = !0x0) {
    const b = P['useContext'](pa);
    if (b === null) return [!0x0, null];
    const {
        isPresent: w,
        onExitComplete: R,
        register: p
    } = b, A = P['useId']();
    P['useEffect'](() => {
        T && p(A);
    }, [T]);
    const N = P['useCallback'](() => T && R && R(A), [A, R, T]);
    return !w && R ? [!0x1, N] : [!0x0];
}
const Ji = T => T['key'] || '';

function Cd(T) {
    const b = [];
    return P['Children']['forEach'](T, w => {
        P['isValidElement'](w) && b['push'](w);
    }), b;
}
const xu = typeof window < 'u',
    gm = xu ? P['useLayoutEffect'] : P['useEffect'],
    It = ({
        children: T,
        custom: R,
        initial: A = !0x0,
        onExitComplete: L,
        presenceAffectsLayout: z = !0x0,
        mode: I = 'sync',
        propagate: K = !0x1
    }) => {
        const [O, V] = mm(K), J = P['useMemo'](() => Cd(T), [T]), B = K && !O ? [] : J['map'](Ji), j = P['useRef'](!0x0), M = P['useRef'](J), U = vu(() => new Map()), [Y0, Y3] = P['useState'](J), [Y4, Y5] = P['useState'](J);
        gm(() => {
            j['current'] = !0x1, M['current'] = J;
            for (let Y8 = 0x0; Y8 < Y4['length']; Y8++) {
                const Y9 = Ji(Y4[Y8]);
                B['includes'](Y9) ? U['delete'](Y9) : U['get'](Y9) !== !0x0 && U['set'](Y9, !0x1);
            }
        }, [Y4, B['length'], B['join']('-')]);
        const Y6 = [];
        if (J !== Y0) {
            let Y8 = [...J];
            for (let Y9 = 0x0; Y9 < Y4['length']; Y9++) {
                const YY = Y4[Y9],
                    YT = Ji(YY);
                B['includes'](YT) || (Y8['splice'](Y9, 0x0, YY), Y6['push'](YY));
            }
            I === 'wait' && Y6['length'] && (Y8 = Y6), Y5(Cd(Y8)), Y3(J);
            return;
        }
        const {
            forceRender: Y7
        } = P['useContext'](gu);
        return o['jsx'](o['Fragment'], {
            'children': Y4['map'](Yb => {
                const YR = Ji(Yb),
                    YD = K && !O ? !0x1 : J === Y4 || B['includes'](YR),
                    YA = () => {
                        if (U['has'](YR)) U['set'](YR, !0x0);
                        else return;
                        let YN = !0x0;
                        U['forEach'](YC => {
                            YC || (YN = !0x1);
                        }), YN && (Y7 == null || Y7(), Y5(M['current']), K && (V == null || V()), L && L());
                    };
                return o['jsx'](Zx, {
                    'isPresent': YD,
                    'initial': !j['current'] || A ? void 0x0 : !0x1,
                    'custom': YD ? void 0x0 : R,
                    'presenceAffectsLayout': z,
                    'mode': I,
                    'onExitComplete': YD ? void 0x0 : YA,
                    'children': Yb
                }, YR);
            })
        });
    },
    Oe = T => T;
let sl = Oe;

function wu(T) {
    let b;
    return () => (b === void 0x0 && (b = T()), b);
}
const vr = (T, b, w) => {
        const R = b - T;
        return R === 0x0 ? 0x1 : (w - T) / R;
    },
    Et = T => T * 0x3e8,
    Mt = T => T / 0x3e8,
    Jx = {
        'skipAnimations': !0x1,
        'useManualTiming': !0x1
    };

function qx(T) {
    let b = new Set(),
        w = new Set(),
        R = !0x1,
        p = !0x1;
    const A = new WeakSet();
    let N = {
        'delta': 0x0,
        'timestamp': 0x0,
        'isProcessing': !0x1
    };

    function C(L) {
        A['has'](L) && (h['schedule'](L), T()), L(N);
    }
    const h = {
        'schedule': (L, z = !0x1, I = !0x1) => {
            const K = I && R ? b : w;
            return z && A['add'](L), K['has'](L) || K['add'](L), L;
        },
        'cancel': L => {
            w['delete'](L), A['delete'](L);
        },
        'process': L => {
            if (N = L, R) {
                p = !0x0;
                return;
            }
            R = !0x0, [b, w] = [w, b], b['forEach'](C), b['clear'](), R = !0x1, p && (p = !0x1, h['process'](L));
        }
    };
    return h;
}
const qi = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'],
    e1 = 0x28;

function vm(T, b) {
    let R = !0x1,
        p = !0x0;
    const A = {
            'delta': 0x0,
            'timestamp': 0x0,
            'isProcessing': !0x1
        },
        N = () => R = !0x0,
        C = qi['reduce']((J, B) => (J[B] = qx(N), J), {}),
        {
            read: L,
            resolveKeyframes: z,
            update: I,
            preRender: K,
            render: O,
            postRender: x
        } = C,
        V = () => {
            const J = performance['now']();
            R = !0x1, A['delta'] = p ? 0x3e8 / 0x3c : Math['max'](Math['min'](J - A['timestamp'], e1), 0x1), A['timestamp'] = J, A['isProcessing'] = !0x0, L['process'](A), z['process'](A), I['process'](A), K['process'](A), O['process'](A), x['process'](A), A['isProcessing'] = !0x1, R && b && (p = !0x1, T(V));
        },
        S = () => {
            R = !0x0, p = !0x0, A['isProcessing'] || T(V);
        };
    return {
        'schedule': qi['reduce']((J, B) => {
            const j = C[B];
            return J[B] = (M, U = !0x1, Y0 = !0x1) => (R || S(), j['schedule'](M, U, Y0)), J;
        }, {}),
        'cancel': J => {
            for (let B = 0x0; B < qi['length']; B++) C[qi[B]]['cancel'](J);
        },
        'state': A,
        'steps': C
    };
}
const {
    schedule: Z,
    cancel: ln,
    state: xe,
    steps: Xa
} = vm(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Oe, !0x0), ym = P['createContext']({
    'strict': !0x1
}), Td = {
    'animation': ['animate', 'variants', 'whileHover', 'whileTap', 'exit', 'whileInView', 'whileFocus', 'whileDrag'],
    'exit': ['exit'],
    'drag': ['drag', 'dragControls'],
    'focus': ['whileFocus'],
    'hover': ['whileHover', 'onHoverStart', 'onHoverEnd'],
    'tap': ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    'pan': ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    'inView': ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    'layout': ['layout', 'layoutId']
}, yr = {};
for (const e in Td) yr[e] = {
    'isEnabled': T => Td[e]['some'](b => !!T[b])
};

function t1(T) {
    for (const b in T) yr[b] = {
        ...yr[b],
        ...T[b]
    };
}
const n1 = new Set(['animate', 'exit', 'variants', 'initial', 'style', 'values', 'variants', 'transition', 'transformTemplate', 'custom', 'inherit', 'onBeforeLayoutMeasure', 'onAnimationStart', 'onAnimationComplete', 'onUpdate', 'onDragStart', 'onDrag', 'onDragEnd', 'onMeasureDragConstraints', 'onDirectionLock', 'onDragTransitionEnd', '_dragX', '_dragY', 'onHoverStart', 'onHoverEnd', 'onViewportEnter', 'onViewportLeave', 'globalTapTarget', 'ignoreStrict', 'viewport']);

function Ws(T) {
    return T['startsWith']('while') || T['startsWith']('drag') && T !== 'draggable' || T['startsWith']('layout') || T['startsWith']('onTap') || T['startsWith']('onPan') || T['startsWith']('onLayout') || n1['has'](T);
}
let xm = T => !Ws(T);

function r1(T) {
    T && (xm = b => b['startsWith']('on') ? !Ws(b) : T(b));
}
try {
    r1(require('@emotion/is-prop-valid')['default']);
} catch {}

function i1(T, b, w) {
    const R = {};
    for (const p in T) p === 'values' && typeof T['values'] == 'object' || (xm(p) || w === !0x0 && Ws(p) || !b && !Ws(p) || T['draggable'] && p['startsWith']('onDrag')) && (R[p] = T[p]);
    return R;
}

function s1(T) {
    if (typeof Proxy > 'u') return T;
    const b = new Map(),
        w = (...R) => T(...R);
    return new Proxy(w, {
        'get': (R, p) => p === 'create' ? T : (b['has'](p) || b['set'](p, T(p)), b['get'](p))
    });
}
const ma = P['createContext']({});

function wi(T) {
    return typeof T == 'string' || Array['isArray'](T);
}

function ga(T) {
    return T !== null && typeof T == 'object' && typeof T['start'] == 'function';
}
const ju = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
    Nu = ['initial', ...ju];

function va(T) {
    return ga(T['animate']) || Nu['some'](b => wi(T[b]));
}

function wm(T) {
    return !!(va(T) || T['variants']);
}

function a1(T, b) {
    if (va(T)) {
        const {
            initial: w,
            animate: R
        } = T;
        return {
            'initial': w === !0x1 || wi(w) ? w : void 0x0,
            'animate': wi(R) ? R : void 0x0
        };
    }
    return T['inherit'] !== !0x1 ? b : {};
}

function o1(T) {
    const {
        initial: b,
        animate: w
    } = a1(T, P['useContext'](ma));
    return P['useMemo'](() => ({
        'initial': b,
        'animate': w
    }), [Pd(b), Pd(w)]);
}

function Pd(T) {
    return Array['isArray'](T) ? T['join']('\x20') : T;
}
const l1 = Symbol['for']('motionComponentSymbol');

function qn(T) {
    return T && typeof T == 'object' && Object['prototype']['hasOwnProperty']['call'](T, 'current');
}

function u1(T, b, w) {
    return P['useCallback'](R => {
        R && T['onMount'] && T['onMount'](R), b && (R ? b['mount'](R) : b['unmount']()), w && (typeof w == 'function' ? w(R) : qn(w) && (w['current'] = R));
    }, [b]);
}
const Su = T => T['replace'](/([a-z])([A-Z])/gu, '$1-$2')['toLowerCase'](),
    c1 = 'framerAppearId',
    jm = 'data-' + Su(c1),
    {
        schedule: bu,
        cancel: WN
    } = vm(queueMicrotask, !0x1),
    Nm = P['createContext']({});

function d1(T, b, R, p, A) {
    var C, L;
    const {
        visualElement: z
    } = P['useContext'](ma), I = P['useContext'](ym), K = P['useContext'](pa), O = P['useContext'](yu)['reducedMotion'], V = P['useRef'](null);
    p = p || I['renderer'], !V['current'] && p && (V['current'] = p(T, {
        'visualState': b,
        'parent': z,
        'props': R,
        'presenceContext': K,
        'blockInitialAnimation': K ? K['initial'] === !0x1 : !0x1,
        'reducedMotionConfig': O
    }));
    const S = V['current'],
        m = P['useContext'](Nm);
    S && !S['projection'] && A && (S['type'] === 'html' || S['type'] === 'svg') && h1(V['current'], R, A, m);
    const J = P['useRef'](!0x1);
    P['useInsertionEffect'](() => {
        S && J['current'] && S['update'](R, K);
    });
    const B = R[jm],
        g = P['useRef'](!!B && !(!((C = window['MotionHandoffIsComplete']) === null || C === void 0x0) && C['call'](window, B)) && ((L = window['MotionHasOptimisedAnimation']) === null || L === void 0x0 ? void 0x0 : L['call'](window, B)));
    return gm(() => {
        S && (J['current'] = !0x0, window['MotionIsMounted'] = !0x0, S['updateFeatures'](), bu['render'](S['render']), g['current'] && S['animationState'] && S['animationState']['animateChanges']());
    }), P['useEffect'](() => {
        S && (!g['current'] && S['animationState'] && S['animationState']['animateChanges'](), g['current'] && (queueMicrotask(() => {
            var j;
            (j = window['MotionHandoffMarkAsComplete']) === null || j === void 0x0 || j['call'](window, B);
        }), g['current'] = !0x1));
    }), S;
}

function h1(T, b, w, R) {
    const {
        layoutId: p,
        layout: A,
        drag: N,
        dragConstraints: C,
        layoutScroll: h,
        layoutRoot: L
    } = b;
    T['projection'] = new w(T['latestValues'], b['data-framer-portal-id'] ? void 0x0 : Sm(T['parent'])), T['projection']['setOptions']({
        'layoutId': p,
        'layout': A,
        'alwaysMeasureLayout': !!N || C && qn(C),
        'visualElement': T,
        'animationType': typeof A == 'string' ? A : 'both',
        'initialPromotionConfig': R,
        'layoutScroll': h,
        'layoutRoot': L
    });
}

function Sm(T) {
    if (T) return T['options']['allowProjection'] !== !0x1 ? T['projection'] : Sm(T['parent']);
}

function f1({
    preloadedFeatures: T,
    createVisualElement: b,
    useRender: w,
    useVisualState: R,
    Component: p
}) {
    var A, N;
    T && t1(T);

    function C(L, z) {
        let I;
        const K = {
                ...P['useContext'](yu),
                ...L,
                'layoutId': p1(L)
            },
            {
                isStatic: O
            } = K,
            V = o1(L),
            S = R(L, O);
        if (!O && xu) {
            m1();
            const m = g1(K);
            I = m['MeasureLayout'], V['visualElement'] = d1(p, S, K, b, m['ProjectionNode']);
        }
        return o['jsxs'](ma['Provider'], {
            'value': V,
            'children': [I && V['visualElement'] ? o['jsx'](I, {
                'visualElement': V['visualElement'],
                ...K
            }) : null, w(p, L, u1(S, V['visualElement'], z), S, O, V['visualElement'])]
        });
    }
    C['displayName'] = 'motion.' + (typeof p == 'string' ? p : 'create(' + ((N = (A = p['displayName']) !== null && A !== void 0x0 ? A : p['name']) !== null && N !== void 0x0 ? N : '') + ')');
    const h = P['forwardRef'](C);
    return h[l1] = p, h;
}

function p1({
    layoutId: T
}) {
    const b = P['useContext'](gu)['id'];
    return b && T !== void 0x0 ? b + '-' + T : T;
}

function m1(T, b) {
    P['useContext'](ym)['strict'];
}

function g1(T) {
    const {
        drag: b,
        layout: w
    } = yr;
    if (!b && !w) return {};
    const R = {
        ...b,
        ...w
    };
    return {
        'MeasureLayout': b != null && b['isEnabled'](T) || w != null && w['isEnabled'](T) ? R['MeasureLayout'] : void 0x0,
        'ProjectionNode': R['ProjectionNode']
    };
}
const v1 = ['animate', 'circle', 'defs', 'desc', 'ellipse', 'g', 'image', 'line', 'filter', 'marker', 'mask', 'metadata', 'path', 'pattern', 'polygon', 'polyline', 'rect', 'stop', 'switch', 'symbol', 'svg', 'text', 'tspan', 'use', 'view'];

function ku(T) {
    return typeof T != 'string' || T['includes']('-') ? !0x1 : !!(v1['indexOf'](T) > -0x1 || /[A-Z]/u ['test'](T));
}

function Ed(T) {
    const b = [{}, {}];
    return T == null || T['values']['forEach']((w, R) => {
        b[0x0][R] = w['get'](), b[0x1][R] = w['getVelocity']();
    }), b;
}

function Cu(T, b, w, R) {
    if (typeof b == 'function') {
        const [p, A] = Ed(R);
        b = b(w !== void 0x0 ? w : T['custom'], p, A);
    }
    if (typeof b == 'string' && (b = T['variants'] && T['variants'][b]), typeof b == 'function') {
        const [N, C] = Ed(R);
        b = b(w !== void 0x0 ? w : T['custom'], N, C);
    }
    return b;
}
const al = T => Array['isArray'](T),
    y1 = T => !!(T && typeof T == 'object' && T['mix'] && T['toValue']),
    x1 = T => al(T) ? T[T['length'] - 0x1] || 0x0 : T,
    Ce = T => !!(T && T['getVelocity']);

function fs(T) {
    const b = Ce(T) ? T['get']() : T;
    return y1(b) ? b['toValue']() : b;
}

function w1({
    scrapeMotionValuesFromProps: T,
    createRenderState: b,
    onUpdate: w
}, R, p, A) {
    const N = {
        'latestValues': j1(R, p, A, T),
        'renderState': b()
    };
    return w && (N['onMount'] = C => w({
        'props': R,
        'current': C,
        ...N
    }), N['onUpdate'] = C => w(C)), N;
}
const bm = T => (b, w) => {
    const R = P['useContext'](ma),
        p = P['useContext'](pa),
        A = () => w1(T, b, R, p);
    return w ? A() : vu(A);
};

function j1(T, R, A, C) {
    const L = {},
        z = C(T, {});
    for (const B in z) L[B] = fs(z[B]);
    let {
        initial: I,
        animate: K
    } = T;
    const O = va(T),
        V = wm(T);
    R && V && !O && T['inherit'] !== !0x1 && (I === void 0x0 && (I = R['initial']), K === void 0x0 && (K = R['animate']));
    let S = A ? A['initial'] === !0x1 : !0x1;
    S = S || I === !0x1;
    const J = S ? K : I;
    if (J && typeof J != 'boolean' && !ga(J)) {
        const j = Array['isArray'](J) ? J : [J];
        for (let M = 0x0; M < j['length']; M++) {
            const U = Cu(T, j[M]);
            if (U) {
                const {
                    transitionEnd: Y0,
                    transition: Y3,
                    ...Y4
                } = U;
                for (const Y5 in Y4) {
                    let Y6 = Y4[Y5];
                    if (Array['isArray'](Y6)) {
                        const Y7 = S ? Y6['length'] - 0x1 : 0x0;
                        Y6 = Y6[Y7];
                    }
                    Y6 !== null && (L[Y5] = Y6);
                }
                for (const Y8 in Y0) L[Y8] = Y0[Y8];
            }
        }
    }
    return L;
}
const Sr = ['transformPerspective', 'x', 'y', 'z', 'translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY'],
    _n = new Set(Sr),
    km = T => b => typeof b == 'string' && b['startsWith'](T),
    Cm = km('--'),
    N1 = km('var(--'),
    Tu = T => N1(T) ? S1['test'](T['split']('/*')[0x0]['trim']()) : !0x1,
    S1 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Tm = (T, b) => b && typeof T == 'number' ? b['transform'](T) : T,
    Vt = (T, b, w) => w > b ? b : w < T ? T : w,
    br = {
        'test': T => typeof T == 'number',
        'parse': parseFloat,
        'transform': T => T
    },
    ji = {
        ...br,
        'transform': T => Vt(0x0, 0x1, T)
    },
    es = {
        ...br,
        'default': 0x1
    },
    Mi = T => ({
        'test': b => typeof b == 'string' && b['endsWith'](T) && b['split']('\x20')['length'] === 0x1,
        'parse': parseFloat,
        'transform': b => '' + b + T
    }),
    Bt = Mi('deg'),
    yt = Mi('%'),
    _ = Mi('px'),
    b1 = Mi('vh'),
    k1 = Mi('vw'),
    Md = {
        ...yt,
        'parse': T => yt['parse'](T) / 0x64,
        'transform': T => yt['transform'](T * 0x64)
    },
    C1 = {
        'borderWidth': _,
        'borderTopWidth': _,
        'borderRightWidth': _,
        'borderBottomWidth': _,
        'borderLeftWidth': _,
        'borderRadius': _,
        'radius': _,
        'borderTopLeftRadius': _,
        'borderTopRightRadius': _,
        'borderBottomRightRadius': _,
        'borderBottomLeftRadius': _,
        'width': _,
        'maxWidth': _,
        'height': _,
        'maxHeight': _,
        'top': _,
        'right': _,
        'bottom': _,
        'left': _,
        'padding': _,
        'paddingTop': _,
        'paddingRight': _,
        'paddingBottom': _,
        'paddingLeft': _,
        'margin': _,
        'marginTop': _,
        'marginRight': _,
        'marginBottom': _,
        'marginLeft': _,
        'backgroundPositionX': _,
        'backgroundPositionY': _
    },
    T1 = {
        'rotate': Bt,
        'rotateX': Bt,
        'rotateY': Bt,
        'rotateZ': Bt,
        'scale': es,
        'scaleX': es,
        'scaleY': es,
        'scaleZ': es,
        'skew': Bt,
        'skewX': Bt,
        'skewY': Bt,
        'distance': _,
        'translateX': _,
        'translateY': _,
        'translateZ': _,
        'x': _,
        'y': _,
        'z': _,
        'perspective': _,
        'transformPerspective': _,
        'opacity': ji,
        'originX': Md,
        'originY': Md,
        'originZ': _
    },
    Rd = {
        ...br,
        'transform': Math['round']
    },
    Pu = {
        ...C1,
        ...T1,
        'zIndex': Rd,
        'size': _,
        'fillOpacity': ji,
        'strokeOpacity': ji,
        'numOctaves': Rd
    },
    P1 = {
        'x': 'translateX',
        'y': 'translateY',
        'z': 'translateZ',
        'transformPerspective': 'perspective'
    },
    E1 = Sr['length'];

function M1(T, b, w) {
    let R = '',
        p = !0x0;
    for (let A = 0x0; A < E1; A++) {
        const N = Sr[A],
            C = T[N];
        if (C === void 0x0) continue;
        let h = !0x0;
        if (typeof C == 'number' ? h = C === (N['startsWith']('scale') ? 0x1 : 0x0) : h = parseFloat(C) === 0x0, !h || w) {
            const L = Tm(C, Pu[N]);
            if (!h) {
                p = !0x1;
                const z = P1[N] || N;
                R += z + '(' + L + ')\x20';
            }
            w && (b[N] = L);
        }
    }
    return R = R['trim'](), w ? R = w(b, p ? '' : R) : p && (R = 'none'), R;
}

function Eu(T, b, w) {
    const {
        style: R,
        vars: p,
        transformOrigin: A
    } = T;
    let N = !0x1,
        C = !0x1;
    for (const h in b) {
        const L = b[h];
        if (_n['has'](h)) {
            N = !0x0;
            continue;
        } else if (Cm(h)) {
            p[h] = L;
            continue;
        } else {
            const z = Tm(L, Pu[h]);
            h['startsWith']('origin') ? (C = !0x0, A[h] = z) : R[h] = z;
        }
    }
    if (b['transform'] || (N || w ? R['transform'] = M1(b, T['transform'], w) : R['transform'] && (R['transform'] = 'none')), C) {
        const {
            originX: I = '50%',
            originY: K = '50%',
            originZ: O = 0x0
        } = A;
        R['transformOrigin'] = I + '\x20' + K + '\x20' + O;
    }
}
const R1 = {
        'offset': 'stroke-dashoffset',
        'array': 'stroke-dasharray'
    },
    A1 = {
        'offset': 'strokeDashoffset',
        'array': 'strokeDasharray'
    };

function D1(T, b, w = 0x1, R = 0x0, p = !0x0) {
    T['pathLength'] = 0x1;
    const A = p ? R1 : A1;
    T[A['offset']] = _['transform'](-R);
    const N = _['transform'](b),
        C = _['transform'](w);
    T[A['array']] = N + '\x20' + C;
}

function Ad(T, b, w) {
    return typeof T == 'string' ? T : _['transform'](b + w * T);
}

function L1(T, b, w) {
    const R = Ad(b, T['x'], T['width']),
        p = Ad(w, T['y'], T['height']);
    return R + '\x20' + p;
}

function Mu(T, {
    attrX: b,
    attrY: R,
    attrScale: p,
    originX: A,
    originY: N,
    pathLength: C,
    pathSpacing: L = 0x1,
    pathOffset: z = 0x0,
    ...I
}, K, O) {
    if (Eu(T, I, O), K) {
        T['style']['viewBox'] && (T['attrs']['viewBox'] = T['style']['viewBox']);
        return;
    }
    T['attrs'] = T['style'], T['style'] = {};
    const {
        attrs: x,
        style: V,
        dimensions: S
    } = T;
    x['transform'] && (S && (V['transform'] = x['transform']), delete x['transform']), S && (A !== void 0x0 || N !== void 0x0 || V['transform']) && (V['transformOrigin'] = L1(S, A !== void 0x0 ? A : 0.5, N !== void 0x0 ? N : 0.5)), b !== void 0x0 && (x['x'] = b), R !== void 0x0 && (x['y'] = R), p !== void 0x0 && (x['scale'] = p), C !== void 0x0 && D1(x, C, L, z, !0x1);
}
const Ru = () => ({
        'style': {},
        'transform': {},
        'transformOrigin': {},
        'vars': {}
    }),
    Pm = () => ({
        ...Ru(),
        'attrs': {}
    }),
    Au = T => typeof T == 'string' && T['toLowerCase']() === 'svg';

function Em(T, {
    style: b,
    vars: w
}, R, p) {
    Object['assign'](T['style'], b, p && p['getProjectionStyles'](R));
    for (const A in w) T['style']['setProperty'](A, w[A]);
}
const Mm = new Set(['baseFrequency', 'diffuseConstant', 'kernelMatrix', 'kernelUnitLength', 'keySplines', 'keyTimes', 'limitingConeAngle', 'markerHeight', 'markerWidth', 'numOctaves', 'targetX', 'targetY', 'surfaceScale', 'specularConstant', 'specularExponent', 'stdDeviation', 'tableValues', 'viewBox', 'gradientTransform', 'pathLength', 'startOffset', 'textLength', 'lengthAdjust']);

function Rm(T, b, w, R) {
    Em(T, b, void 0x0, R);
    for (const p in b['attrs']) T['setAttribute'](Mm['has'](p) ? p : Su(p), b['attrs'][p]);
}
const $s = {};

function I1(T) {
    Object['assign']($s, T);
}

function Am(T, {
    layout: b,
    layoutId: w
}) {
    return _n['has'](T) || T['startsWith']('origin') || (b || w !== void 0x0) && (!!$s[T] || T === 'opacity');
}

function Du(T, b, w) {
    var R;
    const {
        style: p
    } = T, A = {};
    for (const N in p)(Ce(p[N]) || b['style'] && Ce(b['style'][N]) || Am(N, T) || ((R = w == null ? void 0x0 : w['getValue'](N)) === null || R === void 0x0 ? void 0x0 : R['liveStyle']) !== void 0x0) && (A[N] = p[N]);
    return A;
}

function Dm(T, b, w) {
    const R = Du(T, b, w);
    for (const p in T)
        if (Ce(T[p]) || Ce(b[p])) {
            const A = Sr['indexOf'](p) !== -0x1 ? 'attr' + p['charAt'](0x0)['toUpperCase']() + p['substring'](0x1) : p;
            R[A] = T[p];
        } return R;
}

function V1(T, b) {
    try {
        b['dimensions'] = typeof T['getBBox'] == 'function' ? T['getBBox']() : T['getBoundingClientRect']();
    } catch {
        b['dimensions'] = {
            'x': 0x0,
            'y': 0x0,
            'width': 0x0,
            'height': 0x0
        };
    }
}
const Dd = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
    _1 = {
        'useVisualState': bm({
            'scrapeMotionValuesFromProps': Dm,
            'createRenderState': Pm,
            'onUpdate': ({
                props: T,
                prevProps: b,
                current: w,
                renderState: R,
                latestValues: p
            }) => {
                if (!w) return;
                let A = !!T['drag'];
                if (!A) {
                    for (const C in p)
                        if (_n['has'](C)) {
                            A = !0x0;
                            break;
                        }
                }
                if (!A) return;
                let N = !b;
                if (b)
                    for (let h = 0x0; h < Dd['length']; h++) {
                        const L = Dd[h];
                        T[L] !== b[L] && (N = !0x0);
                    }
                N && Z['read'](() => {
                    V1(w, R), Z['render'](() => {
                        Mu(R, p, Au(w['tagName']), T['transformTemplate']), Rm(w, R);
                    });
                });
            }
        })
    },
    F1 = {
        'useVisualState': bm({
            'scrapeMotionValuesFromProps': Du,
            'createRenderState': Ru
        })
    };

function Lm(T, b, w) {
    for (const R in b) !Ce(b[R]) && !Am(R, w) && (T[R] = b[R]);
}

function O1({
    transformTemplate: T
}, b) {
    return P['useMemo'](() => {
        const w = Ru();
        return Eu(w, b, T), Object['assign']({}, w['vars'], w['style']);
    }, [b]);
}

function z1(T, b) {
    const w = T['style'] || {},
        R = {};
    return Lm(R, w, T), Object['assign'](R, O1(T, b)), R;
}

function B1(T, b) {
    const w = {},
        R = z1(T, b);
    return T['drag'] && T['dragListener'] !== !0x1 && (w['draggable'] = !0x1, R['userSelect'] = R['WebkitUserSelect'] = R['WebkitTouchCallout'] = 'none', R['touchAction'] = T['drag'] === !0x0 ? 'none' : 'pan-' + (T['drag'] === 'x' ? 'y' : 'x')), T['tabIndex'] === void 0x0 && (T['onTap'] || T['onTapStart'] || T['whileTap']) && (w['tabIndex'] = 0x0), w['style'] = R, w;
}

function U1(T, b, w, R) {
    const p = P['useMemo'](() => {
        const A = Pm();
        return Mu(A, b, Au(R), T['transformTemplate']), {
            ...A['attrs'],
            'style': {
                ...A['style']
            }
        };
    }, [b]);
    if (T['style']) {
        const A = {};
        Lm(A, T['style'], T), p['style'] = {
            ...A,
            ...p['style']
        };
    }
    return p;
}

function H1(T = !0x1) {
    return (b, w, R, {
        latestValues: p
    }, A) => {
        const N = (ku(b) ? U1 : B1)(w, p, A, b),
            C = i1(w, typeof b == 'string', T),
            L = b !== P['Fragment'] ? {
                ...C,
                ...N,
                'ref': R
            } : {},
            {
                children: z
            } = w,
            I = P['useMemo'](() => Ce(z) ? z['get']() : z, [z]);
        return P['createElement'](b, {
            ...L,
            'children': I
        });
    };
}

function W1(T, b) {
    return function(w, {
        forwardMotionProps: R
    } = {
        'forwardMotionProps': !0x1
    }) {
        const p = {
            ...ku(w) ? _1 : F1,
            'preloadedFeatures': T,
            'useRender': H1(R),
            'createVisualElement': b,
            'Component': w
        };
        return f1(p);
    };
}

function Im(T, b) {
    if (!Array['isArray'](b)) return !0x1;
    const w = b['length'];
    if (w !== T['length']) return !0x1;
    for (let R = 0x0; R < w; R++)
        if (b[R] !== T[R]) return !0x1;
    return !0x0;
}

function ya(T, b, w) {
    const R = T['getProps']();
    return Cu(R, b, w !== void 0x0 ? w : R['custom'], T);
}
const $1 = wu(() => window['ScrollTimeline'] !== void 0x0);
class K1 {
    constructor(T) {
        this['stop'] = () => this['runAll']('stop'), this['animations'] = T['filter'](Boolean);
    }
    get['finished']() {
        return Promise['all'](this['animations']['map'](T => 'finished' in T ? T['finished'] : T));
    } ['getAll'](T) {
        return this['animations'][0x0][T];
    } ['setAll'](T, b) {
        for (let w = 0x0; w < this['animations']['length']; w++) this['animations'][w][T] = b;
    } ['attachTimeline'](T, b) {
        const w = this['animations']['map'](R => {
            if ($1() && R['attachTimeline']) return R['attachTimeline'](T);
            if (typeof b == 'function') return b(R);
        });
        return () => {
            w['forEach']((R, p) => {
                R && R(), this['animations'][p]['stop']();
            });
        };
    }
    get['time']() {
        return this['getAll']('time');
    }
    set['time'](T) {
        this['setAll']('time', T);
    }
    get['speed']() {
        return this['getAll']('speed');
    }
    set['speed'](T) {
        this['setAll']('speed', T);
    }
    get['startTime']() {
        return this['getAll']('startTime');
    }
    get['duration']() {
        let T = 0x0;
        for (let b = 0x0; b < this['animations']['length']; b++) T = Math['max'](T, this['animations'][b]['duration']);
        return T;
    } ['runAll'](T) {
        this['animations']['forEach'](b => b[T]());
    } ['flatten']() {
        this['runAll']('flatten');
    } ['play']() {
        this['runAll']('play');
    } ['pause']() {
        this['runAll']('pause');
    } ['cancel']() {
        this['runAll']('cancel');
    } ['complete']() {
        this['runAll']('complete');
    }
}
class X1 extends K1 {
    ['then'](T, b) {
        return Promise['all'](this['animations'])['then'](T)['catch'](b);
    }
}

function Lu(T, b) {
    return T ? T[b] || T['default'] || T : void 0x0;
}
const ol = 0x4e20;

function Vm(T) {
    let b = 0x0;
    const w = 0x32;
    let R = T['next'](b);
    for (; !R['done'] && b < ol;) b += w, R = T['next'](b);
    return b >= ol ? 0x1 / 0x0 : b;
}

function Iu(T) {
    return typeof T == 'function';
}

function Ld(T, b) {
    T['timeline'] = b, T['onfinish'] = null;
}
const Vu = T => Array['isArray'](T) && typeof T[0x0] == 'number',
    G1 = {
        'linearEasing': void 0x0
    };

function Y1(T, b) {
    const w = wu(T);
    return () => {
        var R;
        return (R = G1[b]) !== null && R !== void 0x0 ? R : w();
    };
}
const Ks = Y1(() => {
        try {
            document['createElement']('div')['animate']({
                'opacity': 0x0
            }, {
                'easing': 'linear(0,\x201)'
            });
        } catch {
            return !0x1;
        }
        return !0x0;
    }, 'linearEasing'),
    _m = (T, b, w = 0xa) => {
        let R = '';
        const p = Math['max'](Math['round'](b / w), 0x2);
        for (let A = 0x0; A < p; A++) R += T(vr(0x0, p - 0x1, A)) + ',\x20';
        return 'linear(' + R['substring'](0x0, R['length'] - 0x2) + ')';
    };

function Fm(T) {
    return !!(typeof T == 'function' && Ks() || !T || typeof T == 'string' && (T in ll || Ks()) || Vu(T) || Array['isArray'](T) && T['every'](Fm));
}
const Or = ([T, b, w, R]) => 'cubic-bezier(' + T + ',\x20' + b + ',\x20' + w + ',\x20' + R + ')',
    ll = {
        'linear': 'linear',
        'ease': 'ease',
        'easeIn': 'ease-in',
        'easeOut': 'ease-out',
        'easeInOut': 'ease-in-out',
        'circIn': Or([0x0, 0.65, 0.55, 0x1]),
        'circOut': Or([0.55, 0x0, 0x1, 0.45]),
        'backIn': Or([0.31, 0.01, 0.66, -0.59]),
        'backOut': Or([0.33, 1.53, 0.69, 0.99])
    };

function Om(T, b) {
    if (T) return typeof T == 'function' && Ks() ? _m(T, b) : Vu(T) ? Or(T) : Array['isArray'](T) ? T['map'](w => Om(w, b) || ll['easeOut']) : ll[T];
}
const st = {
    'x': !0x1,
    'y': !0x1
};

function zm() {
    return st['x'] || st['y'];
}

function Z1(T, b, w) {
    var R;
    if (T instanceof Element) return [T];
    if (typeof T == 'string') {
        let p = document;
        const A = (R = void 0x0) !== null && R !== void 0x0 ? R : p['querySelectorAll'](T);
        return A ? Array['from'](A) : [];
    }
    return Array['from'](T);
}

function Bm(T, b) {
    const w = Z1(T),
        R = new AbortController(),
        p = {
            'passive': !0x0,
            ...b,
            'signal': R['signal']
        };
    return [w, p, () => R['abort']()];
}

function Id(T) {
    return b => {
        b['pointerType'] === 'touch' || zm() || T(b);
    };
}

function Q1(T, b, w = {}) {
    const [R, p, A] = Bm(T, w), N = Id(C => {
        const {
            target: h
        } = C, L = b(C);
        if (typeof L != 'function' || !h) return;
        const z = Id(I => {
            L(I), h['removeEventListener']('pointerleave', z);
        });
        h['addEventListener']('pointerleave', z, p);
    });
    return R['forEach'](C => {
        C['addEventListener']('pointerenter', N, p);
    }), A;
}
const Um = (T, b) => b ? T === b ? !0x0 : Um(T, b['parentElement']) : !0x1,
    _u = T => T['pointerType'] === 'mouse' ? typeof T['button'] != 'number' || T['button'] <= 0x0 : T['isPrimary'] !== !0x1,
    J1 = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);

function q1(T) {
    return J1['has'](T['tagName']) || T['tabIndex'] !== -0x1;
}
const zr = new WeakSet();

function Vd(T) {
    return b => {
        b['key'] === 'Enter' && T(b);
    };
}

function Ga(T, b) {
    T['dispatchEvent'](new PointerEvent('pointer' + b, {
        'isPrimary': !0x0,
        'bubbles': !0x0
    }));
}
const ew = (T, b) => {
    const w = T['currentTarget'];
    if (!w) return;
    const R = Vd(() => {
        if (zr['has'](w)) return;
        Ga(w, 'down');
        const p = Vd(() => {
                Ga(w, 'up');
            }),
            A = () => Ga(w, 'cancel');
        w['addEventListener']('keyup', p, b), w['addEventListener']('blur', A, b);
    });
    w['addEventListener']('keydown', R, b), w['addEventListener']('blur', () => w['removeEventListener']('keydown', R), b);
};

function _d(T) {
    return _u(T) && !zm();
}

function tw(T, b, w = {}) {
    const [R, p, A] = Bm(T, w), N = C => {
        const L = C['currentTarget'];
        if (!_d(C) || zr['has'](L)) return;
        zr['add'](L);
        const z = b(C),
            I = (x, V) => {
                window['removeEventListener']('pointerup', K), window['removeEventListener']('pointercancel', O), !(!_d(x) || !zr['has'](L)) && (zr['delete'](L), typeof z == 'function' && z(x, {
                    'success': V
                }));
            },
            K = x => {
                I(x, w['useGlobalTarget'] || Um(L, x['target']));
            },
            O = x => {
                I(x, !0x1);
            };
        window['addEventListener']('pointerup', K, p), window['addEventListener']('pointercancel', O, p);
    };
    return R['forEach'](C => {
        !q1(C) && C['getAttribute']('tabindex') === null && (C['tabIndex'] = 0x0), (w['useGlobalTarget'] ? window : C)['addEventListener']('pointerdown', N, p), C['addEventListener']('focus', h => ew(h, p), p);
    }), A;
}

function nw(T) {
    return T === 'x' || T === 'y' ? st[T] ? null : (st[T] = !0x0, () => {
        st[T] = !0x1;
    }) : st['x'] || st['y'] ? null : (st['x'] = st['y'] = !0x0, () => {
        st['x'] = st['y'] = !0x1;
    });
}
const Hm = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', ...Sr]);
let ps;

function rw() {
    ps = void 0x0;
}
const xt = {
    'now': () => (ps === void 0x0 && xt['set'](xe['isProcessing'] || Jx['useManualTiming'] ? xe['timestamp'] : performance['now']()), ps),
    'set': T => {
        ps = T, queueMicrotask(rw);
    }
};

function Fu(T, b) {
    T['indexOf'](b) === -0x1 && T['push'](b);
}

function Ou(T, b) {
    const w = T['indexOf'](b);
    w > -0x1 && T['splice'](w, 0x1);
}
class zu {
    constructor() {
        this['subscriptions'] = [];
    } ['add'](T) {
        return Fu(this['subscriptions'], T), () => Ou(this['subscriptions'], T);
    } ['notify'](T, b, w) {
        const R = this['subscriptions']['length'];
        if (R)
            if (R === 0x1) this['subscriptions'][0x0](T, b, w);
            else
                for (let p = 0x0; p < R; p++) {
                    const A = this['subscriptions'][p];
                    A && A(T, b, w);
                }
    } ['getSize']() {
        return this['subscriptions']['length'];
    } ['clear']() {
        this['subscriptions']['length'] = 0x0;
    }
}

function Wm(T, b) {
    return b ? T * (0x3e8 / b) : 0x0;
}
const Fd = 0x1e,
    iw = T => !isNaN(parseFloat(T));
class sw {
    constructor(T, b = {}) {
        this['version'] = '11.18.2', this['canTrackVelocity'] = null, this['events'] = {}, this['updateAndNotify'] = (w, R = !0x0) => {
            const p = xt['now']();
            this['updatedAt'] !== p && this['setPrevFrameValue'](), this['prev'] = this['current'], this['setCurrent'](w), this['current'] !== this['prev'] && this['events']['change'] && this['events']['change']['notify'](this['current']), R && this['events']['renderRequest'] && this['events']['renderRequest']['notify'](this['current']);
        }, this['hasAnimated'] = !0x1, this['setCurrent'](T), this['owner'] = b['owner'];
    } ['setCurrent'](T) {
        this['current'] = T, this['updatedAt'] = xt['now'](), this['canTrackVelocity'] === null && T !== void 0x0 && (this['canTrackVelocity'] = iw(this['current']));
    } ['setPrevFrameValue'](T = this['current']) {
        this['prevFrameValue'] = T, this['prevUpdatedAt'] = this['updatedAt'];
    } ['onChange'](T) {
        return this['on']('change', T);
    } ['on'](T, b) {
        this['events'][T] || (this['events'][T] = new zu());
        const w = this['events'][T]['add'](b);
        return T === 'change' ? () => {
            w(), Z['read'](() => {
                this['events']['change']['getSize']() || this['stop']();
            });
        } : w;
    } ['clearListeners']() {
        for (const T in this['events']) this['events'][T]['clear']();
    } ['attach'](T, b) {
        this['passiveEffect'] = T, this['stopPassiveEffect'] = b;
    } ['set'](T, b = !0x0) {
        !b || !this['passiveEffect'] ? this['updateAndNotify'](T, b) : this['passiveEffect'](T, this['updateAndNotify']);
    } ['setWithVelocity'](T, b, w) {
        this['set'](b), this['prev'] = void 0x0, this['prevFrameValue'] = T, this['prevUpdatedAt'] = this['updatedAt'] - w;
    } ['jump'](T, b = !0x0) {
        this['updateAndNotify'](T), this['prev'] = T, this['prevUpdatedAt'] = this['prevFrameValue'] = void 0x0, b && this['stop'](), this['stopPassiveEffect'] && this['stopPassiveEffect']();
    } ['get']() {
        return this['current'];
    } ['getPrevious']() {
        return this['prev'];
    } ['getVelocity']() {
        const T = xt['now']();
        if (!this['canTrackVelocity'] || this['prevFrameValue'] === void 0x0 || T - this['updatedAt'] > Fd) return 0x0;
        const b = Math['min'](this['updatedAt'] - this['prevUpdatedAt'], Fd);
        return Wm(parseFloat(this['current']) - parseFloat(this['prevFrameValue']), b);
    } ['start'](T) {
        return this['stop'](), new Promise(b => {
            this['hasAnimated'] = !0x0, this['animation'] = T(b), this['events']['animationStart'] && this['events']['animationStart']['notify']();
        })['then'](() => {
            this['events']['animationComplete'] && this['events']['animationComplete']['notify'](), this['clearAnimation']();
        });
    } ['stop']() {
        this['animation'] && (this['animation']['stop'](), this['events']['animationCancel'] && this['events']['animationCancel']['notify']()), this['clearAnimation']();
    } ['isAnimating']() {
        return !!this['animation'];
    } ['clearAnimation']() {
        delete this['animation'];
    } ['destroy']() {
        this['clearListeners'](), this['stop'](), this['stopPassiveEffect'] && this['stopPassiveEffect']();
    }
}

function Ni(T, b) {
    return new sw(T, b);
}

function aw(T, b, w) {
    T['hasValue'](b) ? T['getValue'](b)['set'](w) : T['addValue'](b, Ni(w));
}

function ow(T, b) {
    const w = ya(T, b);
    let {
        transitionEnd: R = {},
        transition: p = {},
        ...A
    } = w || {};
    A = {
        ...A,
        ...R
    };
    for (const N in A) {
        const C = x1(A[N]);
        aw(T, N, C);
    }
}

function lw(T) {
    return !!(Ce(T) && T['add']);
}

function ul(T, b) {
    const w = T['getValue']('willChange');
    if (lw(w)) return w['add'](b);
}

function $m(T) {
    return T['props'][jm];
}
const Km = (T, b, w) => (((0x1 - 0x3 * w + 0x3 * b) * T + (0x3 * w - 0x6 * b)) * T + 0x3 * b) * T,
    uw = 1e-7,
    cw = 0xc;

function dw(T, b, w, R, p) {
    let A, N, C = 0x0;
    do N = b + (w - b) / 0x2, A = Km(N, R, p) - T, A > 0x0 ? w = N : b = N; while (Math['abs'](A) > uw && ++C < cw);
    return N;
}

function Ri(T, b, w, R) {
    if (T === b && w === R) return Oe;
    const p = A => dw(A, 0x0, 0x1, T, w);
    return A => A === 0x0 || A === 0x1 ? A : Km(p(A), b, R);
}
const Xm = T => b => b <= 0.5 ? T(0x2 * b) / 0x2 : (0x2 - T(0x2 * (0x1 - b))) / 0x2,
    Gm = T => b => 0x1 - T(0x1 - b),
    Ym = Ri(0.33, 1.53, 0.69, 0.99),
    Bu = Gm(Ym),
    Zm = Xm(Bu),
    Qm = T => (T *= 0x2) < 0x1 ? 0.5 * Bu(T) : 0.5 * (0x2 - Math['pow'](0x2, -0xa * (T - 0x1))),
    Uu = T => 0x1 - Math['sin'](Math['acos'](T)),
    Jm = Gm(Uu),
    qm = Xm(Uu),
    e0 = T => /^0[^.\s]+$/u ['test'](T);

function hw(T) {
    return typeof T == 'number' ? T === 0x0 : T !== null ? T === 'none' || T === '0' || e0(T) : !0x0;
}
const Qr = T => Math['round'](T * 0x186a0) / 0x186a0,
    Hu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function fw(T) {
    return T == null;
}
const pw = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Wu = (T, b) => w => !!(typeof w == 'string' && pw['test'](w) && w['startsWith'](T) || b && !fw(w) && Object['prototype']['hasOwnProperty']['call'](w, b)),
    t0 = (T, b, w) => R => {
        if (typeof R != 'string') return R;
        const [p, A, N, C] = R['match'](Hu);
        return {
            [T]: parseFloat(p),
            [b]: parseFloat(A),
            [w]: parseFloat(N),
            'alpha': C !== void 0x0 ? parseFloat(C) : 0x1
        };
    },
    mw = T => Vt(0x0, 0xff, T),
    Ya = {
        ...br,
        'transform': T => Math['round'](mw(T))
    },
    Nn = {
        'test': Wu('rgb', 'red'),
        'parse': t0('red', 'green', 'blue'),
        'transform': ({
            red: T,
            green: b,
            blue: w,
            alpha: R = 0x1
        }) => 'rgba(' + Ya['transform'](T) + ',\x20' + Ya['transform'](b) + ',\x20' + Ya['transform'](w) + ',\x20' + Qr(ji['transform'](R)) + ')'
    };

function gw(T) {
    let b = '',
        w = '',
        R = '',
        p = '';
    return T['length'] > 0x5 ? (b = T['substring'](0x1, 0x3), w = T['substring'](0x3, 0x5), R = T['substring'](0x5, 0x7), p = T['substring'](0x7, 0x9)) : (b = T['substring'](0x1, 0x2), w = T['substring'](0x2, 0x3), R = T['substring'](0x3, 0x4), p = T['substring'](0x4, 0x5), b += b, w += w, R += R, p += p), {
        'red': parseInt(b, 0x10),
        'green': parseInt(w, 0x10),
        'blue': parseInt(R, 0x10),
        'alpha': p ? parseInt(p, 0x10) / 0xff : 0x1
    };
}
const cl = {
        'test': Wu('#'),
        'parse': gw,
        'transform': Nn['transform']
    },
    er = {
        'test': Wu('hsl', 'hue'),
        'parse': t0('hue', 'saturation', 'lightness'),
        'transform': ({
            hue: T,
            saturation: b,
            lightness: w,
            alpha: R = 0x1
        }) => 'hsla(' + Math['round'](T) + ',\x20' + yt['transform'](Qr(b)) + ',\x20' + yt['transform'](Qr(w)) + ',\x20' + Qr(ji['transform'](R)) + ')'
    },
    be = {
        'test': T => Nn['test'](T) || cl['test'](T) || er['test'](T),
        'parse': T => Nn['test'](T) ? Nn['parse'](T) : er['test'](T) ? er['parse'](T) : cl['parse'](T),
        'transform': T => typeof T == 'string' ? T : T['hasOwnProperty']('red') ? Nn['transform'](T) : er['transform'](T)
    },
    vw = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function yw(T) {
    var b, w;
    return isNaN(T) && typeof T == 'string' && (((b = T['match'](Hu)) === null || b === void 0x0 ? void 0x0 : b['length']) || 0x0) + (((w = T['match'](vw)) === null || w === void 0x0 ? void 0x0 : w['length']) || 0x0) > 0x0;
}
const n0 = 'number',
    r0 = 'color',
    xw = 'var',
    ww = 'var(',
    Od = '${}',
    jw = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Si(T) {
    const b = T['toString'](),
        w = [],
        R = {
            'color': [],
            'number': [],
            'var': []
        },
        p = [];
    let A = 0x0;
    const N = b['replace'](jw, C => (be['test'](C) ? (R['color']['push'](A), p['push'](r0), w['push'](be['parse'](C))) : C['startsWith'](ww) ? (R['var']['push'](A), p['push'](xw), w['push'](C)) : (R['number']['push'](A), p['push'](n0), w['push'](parseFloat(C))), ++A, Od))['split'](Od);
    return {
        'values': w,
        'split': N,
        'indexes': R,
        'types': p
    };
}

function i0(T) {
    return Si(T)['values'];
}

function s0(T) {
    const {
        split: b,
        types: w
    } = Si(T), R = b['length'];
    return p => {
        let A = '';
        for (let N = 0x0; N < R; N++)
            if (A += b[N], p[N] !== void 0x0) {
                const C = w[N];
                C === n0 ? A += Qr(p[N]) : C === r0 ? A += be['transform'](p[N]) : A += p[N];
            } return A;
    };
}
const Nw = T => typeof T == 'number' ? 0x0 : T;

function Sw(T) {
    const b = i0(T);
    return s0(T)(b['map'](Nw));
}
const un = {
        'test': yw,
        'parse': i0,
        'createTransformer': s0,
        'getAnimatableNone': Sw
    },
    bw = new Set(['brightness', 'contrast', 'saturate', 'opacity']);

function kw(T) {
    const [b, w] = T['slice'](0x0, -0x1)['split']('(');
    if (b === 'drop-shadow') return T;
    const [R] = w['match'](Hu) || [];
    if (!R) return T;
    const p = w['replace'](R, '');
    let A = bw['has'](b) ? 0x1 : 0x0;
    return R !== w && (A *= 0x64), b + '(' + A + p + ')';
}
const Cw = /\b([a-z-]*)\(.*?\)/gu,
    dl = {
        ...un,
        'getAnimatableNone': T => {
            const b = T['match'](Cw);
            return b ? b['map'](kw)['join']('\x20') : T;
        }
    },
    Tw = {
        ...Pu,
        'color': be,
        'backgroundColor': be,
        'outlineColor': be,
        'fill': be,
        'stroke': be,
        'borderColor': be,
        'borderTopColor': be,
        'borderRightColor': be,
        'borderBottomColor': be,
        'borderLeftColor': be,
        'filter': dl,
        'WebkitFilter': dl
    },
    $u = T => Tw[T];

function a0(T, b) {
    let w = $u(T);
    return w !== dl && (w = un), w['getAnimatableNone'] ? w['getAnimatableNone'](b) : void 0x0;
}
const Pw = new Set(['auto', 'none', '0']);

function Ew(T, b, w) {
    let R = 0x0,
        p;
    for (; R < T['length'] && !p;) {
        const A = T[R];
        typeof A == 'string' && !Pw['has'](A) && Si(A)['values']['length'] && (p = T[R]), R++;
    }
    if (p && w)
        for (const N of b) T[N] = a0(w, p);
}
const zd = T => T === br || T === _,
    Bd = (T, b) => parseFloat(T['split'](',\x20')[b]),
    Ud = (T, b) => (w, {
        transform: R
    }) => {
        if (R === 'none' || !R) return 0x0;
        const p = R['match'](/^matrix3d\((.+)\)$/u);
        if (p) return Bd(p[0x1], b);
        {
            const A = R['match'](/^matrix\((.+)\)$/u);
            return A ? Bd(A[0x1], T) : 0x0;
        }
    },
    Mw = new Set(['x', 'y', 'z']),
    Rw = Sr['filter'](T => !Mw['has'](T));

function Aw(T) {
    const b = [];
    return Rw['forEach'](w => {
        const R = T['getValue'](w);
        R !== void 0x0 && (b['push']([w, R['get']()]), R['set'](w['startsWith']('scale') ? 0x1 : 0x0));
    }), b;
}
const xr = {
    'width': ({
        x: T
    }, {
        paddingLeft: b = '0',
        paddingRight: w = '0'
    }) => T['max'] - T['min'] - parseFloat(b) - parseFloat(w),
    'height': ({
        y: T
    }, {
        paddingTop: b = '0',
        paddingBottom: w = '0'
    }) => T['max'] - T['min'] - parseFloat(b) - parseFloat(w),
    'top': (T, {
        top: b
    }) => parseFloat(b),
    'left': (T, {
        left: b
    }) => parseFloat(b),
    'bottom': ({
        y: T
    }, {
        top: b
    }) => parseFloat(b) + (T['max'] - T['min']),
    'right': ({
        x: T
    }, {
        left: b
    }) => parseFloat(b) + (T['max'] - T['min']),
    'x': Ud(0x4, 0xd),
    'y': Ud(0x5, 0xe)
};
xr['translateX'] = xr['x'];
xr['translateY'] = xr['y'];
const kn = new Set();
let hl = !0x1,
    fl = !0x1;

function o0() {
    if (fl) {
        const T = Array['from'](kn)['filter'](R => R['needsMeasurement']),
            b = new Set(T['map'](R => R['element'])),
            w = new Map();
        b['forEach'](R => {
            const p = Aw(R);
            p['length'] && (w['set'](R, p), R['render']());
        }), T['forEach'](R => R['measureInitialState']()), b['forEach'](R => {
            R['render']();
            const p = w['get'](R);
            p && p['forEach'](([A, N]) => {
                var C;
                (C = R['getValue'](A)) === null || C === void 0x0 || C['set'](N);
            });
        }), T['forEach'](R => R['measureEndState']()), T['forEach'](R => {
            R['suspendedScrollY'] !== void 0x0 && window['scrollTo'](0x0, R['suspendedScrollY']);
        });
    }
    fl = !0x1, hl = !0x1, kn['forEach'](R => R['complete']()), kn['clear']();
}

function l0() {
    kn['forEach'](T => {
        T['readKeyframes'](), T['needsMeasurement'] && (fl = !0x0);
    });
}

function Dw() {
    l0(), o0();
}
class Ku {
    constructor(T, b, w, R, p, A = !0x1) {
        this['isComplete'] = !0x1, this['isAsync'] = !0x1, this['needsMeasurement'] = !0x1, this['isScheduled'] = !0x1, this['unresolvedKeyframes'] = [...T], this['onComplete'] = b, this['name'] = w, this['motionValue'] = R, this['element'] = p, this['isAsync'] = A;
    } ['scheduleResolve']() {
        this['isScheduled'] = !0x0, this['isAsync'] ? (kn['add'](this), hl || (hl = !0x0, Z['read'](l0), Z['resolveKeyframes'](o0))) : (this['readKeyframes'](), this['complete']());
    } ['readKeyframes']() {
        const {
            unresolvedKeyframes: T,
            name: b,
            element: w,
            motionValue: R
        } = this;
        for (let p = 0x0; p < T['length']; p++)
            if (T[p] === null)
                if (p === 0x0) {
                    const A = R == null ? void 0x0 : R['get'](),
                        N = T[T['length'] - 0x1];
                    if (A !== void 0x0) T[0x0] = A;
                    else if (w && b) {
                        const C = w['readValue'](b, N);
                        C != null && (T[0x0] = C);
                    }
                    T[0x0] === void 0x0 && (T[0x0] = N), R && A === void 0x0 && R['set'](T[0x0]);
                } else T[p] = T[p - 0x1];
    } ['setFinalKeyframe']() {} ['measureInitialState']() {} ['renderEndStyles']() {} ['measureEndState']() {} ['complete']() {
        this['isComplete'] = !0x0, this['onComplete'](this['unresolvedKeyframes'], this['finalKeyframe']), kn['delete'](this);
    } ['cancel']() {
        this['isComplete'] || (this['isScheduled'] = !0x1, kn['delete'](this));
    } ['resume']() {
        this['isComplete'] || this['scheduleResolve']();
    }
}
const u0 = T => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u ['test'](T),
    Lw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Iw(T) {
    const b = Lw['exec'](T);
    if (!b) return [, ];
    const [, w, R, p] = b;
    return ['--' + (w ?? R), p];
}

function c0(T, b, w = 0x1) {
    const [R, p] = Iw(T);
    if (!R) return;
    const A = window['getComputedStyle'](b)['getPropertyValue'](R);
    if (A) {
        const N = A['trim']();
        return u0(N) ? parseFloat(N) : N;
    }
    return Tu(p) ? c0(p, b, w + 0x1) : p;
}
const d0 = T => b => b['test'](T),
    Vw = {
        'test': T => T === 'auto',
        'parse': T => T
    },
    h0 = [br, _, yt, Bt, k1, b1, Vw],
    Hd = T => h0['find'](d0(T));
class f0 extends Ku {
    constructor(T, b, w, R, p) {
        super(T, b, w, R, p, !0x0);
    } ['readKeyframes']() {
        const {
            unresolvedKeyframes: T,
            element: b,
            name: w
        } = this;
        if (!b || !b['current']) return;
        super['readKeyframes']();
        for (let C = 0x0; C < T['length']; C++) {
            let h = T[C];
            if (typeof h == 'string' && (h = h['trim'](), Tu(h))) {
                const L = c0(h, b['current']);
                L !== void 0x0 && (T[C] = L), C === T['length'] - 0x1 && (this['finalKeyframe'] = h);
            }
        }
        if (this['resolveNoneKeyframes'](), !Hm['has'](w) || T['length'] !== 0x2) return;
        const [R, p] = T, A = Hd(R), N = Hd(p);
        if (A !== N)
            if (zd(A) && zd(N))
                for (let z = 0x0; z < T['length']; z++) {
                    const I = T[z];
                    typeof I == 'string' && (T[z] = parseFloat(I));
                } else this['needsMeasurement'] = !0x0;
    } ['resolveNoneKeyframes']() {
        const {
            unresolvedKeyframes: T,
            name: b
        } = this, w = [];
        for (let R = 0x0; R < T['length']; R++) hw(T[R]) && w['push'](R);
        w['length'] && Ew(T, w, b);
    } ['measureInitialState']() {
        const {
            element: T,
            unresolvedKeyframes: b,
            name: w
        } = this;
        if (!T || !T['current']) return;
        w === 'height' && (this['suspendedScrollY'] = window['pageYOffset']), this['measuredOrigin'] = xr[w](T['measureViewportBox'](), window['getComputedStyle'](T['current'])), b[0x0] = this['measuredOrigin'];
        const R = b[b['length'] - 0x1];
        R !== void 0x0 && T['getValue'](w, R)['jump'](R, !0x1);
    } ['measureEndState']() {
        var T;
        const {
            element: b,
            name: w,
            unresolvedKeyframes: R
        } = this;
        if (!b || !b['current']) return;
        const p = b['getValue'](w);
        p && p['jump'](this['measuredOrigin'], !0x1);
        const A = R['length'] - 0x1,
            N = R[A];
        R[A] = xr[w](b['measureViewportBox'](), window['getComputedStyle'](b['current'])), N !== null && this['finalKeyframe'] === void 0x0 && (this['finalKeyframe'] = N), !((T = this['removedTransforms']) === null || T === void 0x0) && T['length'] && this['removedTransforms']['forEach'](([C, h]) => {
            b['getValue'](C)['set'](h);
        }), this['resolveNoneKeyframes']();
    }
}
const Wd = (T, b) => b === 'zIndex' ? !0x1 : !!(typeof T == 'number' || Array['isArray'](T) || typeof T == 'string' && (un['test'](T) || T === '0') && !T['startsWith']('url('));

function _w(T) {
    const b = T[0x0];
    if (T['length'] === 0x1) return !0x0;
    for (let w = 0x0; w < T['length']; w++)
        if (T[w] !== b) return !0x0;
}

function Fw(T, b, w, R) {
    const p = T[0x0];
    if (p === null) return !0x1;
    if (b === 'display' || b === 'visibility') return !0x0;
    const A = T[T['length'] - 0x1],
        N = Wd(p, b),
        C = Wd(A, b);
    return !N || !C ? !0x1 : _w(T) || (w === 'spring' || Iu(w)) && R;
}
const Ow = T => T !== null;

function xa(T, {
    repeat: b,
    repeatType: w = 'loop'
}, R) {
    const p = T['filter'](Ow),
        A = b && w !== 'loop' && b % 0x2 === 0x1 ? 0x0 : p['length'] - 0x1;
    return !A || R === void 0x0 ? p[A] : R;
}
const zw = 0x28;
class p0 {
    constructor({
        autoplay: T = !0x0,
        delay: b = 0x0,
        type: w = 'keyframes',
        repeat: R = 0x0,
        repeatDelay: p = 0x0,
        repeatType: A = 'loop',
        ...N
    }) {
        this['isStopped'] = !0x1, this['hasAttemptedResolve'] = !0x1, this['createdAt'] = xt['now'](), this['options'] = {
            'autoplay': T,
            'delay': b,
            'type': w,
            'repeat': R,
            'repeatDelay': p,
            'repeatType': A,
            ...N
        }, this['updateFinishedPromise']();
    } ['calcStartTime']() {
        return this['resolvedAt'] ? this['resolvedAt'] - this['createdAt'] > zw ? this['resolvedAt'] : this['createdAt'] : this['createdAt'];
    }
    get['resolved']() {
        return !this['_resolved'] && !this['hasAttemptedResolve'] && Dw(), this['_resolved'];
    } ['onKeyframesResolved'](T, b) {
        this['resolvedAt'] = xt['now'](), this['hasAttemptedResolve'] = !0x0;
        const {
            name: w,
            type: R,
            velocity: p,
            delay: A,
            onComplete: N,
            onUpdate: C,
            isGenerator: h
        } = this['options'];
        if (!h && !Fw(T, w, R, p))
            if (A) this['options']['duration'] = 0x0;
            else {
                C && C(xa(T, this['options'], b)), N && N(), this['resolveFinishedPromise']();
                return;
            } const L = this['initPlayback'](T, b);
        L !== !0x1 && (this['_resolved'] = {
            'keyframes': T,
            'finalKeyframe': b,
            ...L
        }, this['onPostResolved']());
    } ['onPostResolved']() {} ['then'](T, b) {
        return this['currentFinishedPromise']['then'](T, b);
    } ['flatten']() {
        this['options']['type'] = 'keyframes', this['options']['ease'] = 'linear';
    } ['updateFinishedPromise']() {
        this['currentFinishedPromise'] = new Promise(T => {
            this['resolveFinishedPromise'] = T;
        });
    }
}
const te = (T, b, w) => T + (b - T) * w;

function Za(T, b, w) {
    return w < 0x0 && (w += 0x1), w > 0x1 && (w -= 0x1), w < 0x1 / 0x6 ? T + (b - T) * 0x6 * w : w < 0x1 / 0x2 ? b : w < 0x2 / 0x3 ? T + (b - T) * (0x2 / 0x3 - w) * 0x6 : T;
}

function Bw({
    hue: T,
    saturation: b,
    lightness: w,
    alpha: R
}) {
    T /= 0x168, b /= 0x64, w /= 0x64;
    let p = 0x0,
        A = 0x0,
        N = 0x0;
    if (!b) p = A = N = w;
    else {
        const C = w < 0.5 ? w * (0x1 + b) : w + b - w * b,
            h = 0x2 * w - C;
        p = Za(h, C, T + 0x1 / 0x3), A = Za(h, C, T), N = Za(h, C, T - 0x1 / 0x3);
    }
    return {
        'red': Math['round'](p * 0xff),
        'green': Math['round'](A * 0xff),
        'blue': Math['round'](N * 0xff),
        'alpha': R
    };
}

function Xs(T, b) {
    return w => w > 0x0 ? b : T;
}
const Qa = (T, b, w) => {
        const R = T * T,
            p = w * (b * b - R) + R;
        return p < 0x0 ? 0x0 : Math['sqrt'](p);
    },
    Uw = [cl, Nn, er],
    Hw = T => Uw['find'](b => b['test'](T));

function $d(T) {
    const b = Hw(T);
    if (!b) return !0x1;
    let w = b['parse'](T);
    return b === er && (w = Bw(w)), w;
}
const Kd = (T, b) => {
        const w = $d(T),
            R = $d(b);
        if (!w || !R) return Xs(T, b);
        const p = {
            ...w
        };
        return A => (p['red'] = Qa(w['red'], R['red'], A), p['green'] = Qa(w['green'], R['green'], A), p['blue'] = Qa(w['blue'], R['blue'], A), p['alpha'] = te(w['alpha'], R['alpha'], A), Nn['transform'](p));
    },
    Ww = (T, b) => w => b(T(w)),
    Ai = (...T) => T['reduce'](Ww),
    pl = new Set(['none', 'hidden']);

function $w(T, b) {
    return pl['has'](T) ? w => w <= 0x0 ? T : b : w => w >= 0x1 ? b : T;
}

function Kw(T, b) {
    return w => te(T, b, w);
}

function Xu(T) {
    return typeof T == 'number' ? Kw : typeof T == 'string' ? Tu(T) ? Xs : be['test'](T) ? Kd : Yw : Array['isArray'](T) ? m0 : typeof T == 'object' ? be['test'](T) ? Kd : Xw : Xs;
}

function m0(T, b) {
    const w = [...T],
        R = w['length'],
        p = T['map']((A, N) => Xu(A)(A, b[N]));
    return A => {
        for (let N = 0x0; N < R; N++) w[N] = p[N](A);
        return w;
    };
}

function Xw(T, b) {
    const w = {
            ...T,
            ...b
        },
        R = {};
    for (const p in w) T[p] !== void 0x0 && b[p] !== void 0x0 && (R[p] = Xu(T[p])(T[p], b[p]));
    return A => {
        for (const N in R) w[N] = R[N](A);
        return w;
    };
}

function Gw(T, b) {
    var w;
    const R = [],
        p = {
            'color': 0x0,
            'var': 0x0,
            'number': 0x0
        };
    for (let A = 0x0; A < b['values']['length']; A++) {
        const N = b['types'][A],
            C = T['indexes'][N][p[N]],
            h = (w = T['values'][C]) !== null && w !== void 0x0 ? w : 0x0;
        R[A] = h, p[N]++;
    }
    return R;
}
const Yw = (T, b) => {
    const w = un['createTransformer'](b),
        R = Si(T),
        p = Si(b);
    return R['indexes']['var']['length'] === p['indexes']['var']['length'] && R['indexes']['color']['length'] === p['indexes']['color']['length'] && R['indexes']['number']['length'] >= p['indexes']['number']['length'] ? pl['has'](T) && !p['values']['length'] || pl['has'](b) && !R['values']['length'] ? $w(T, b) : Ai(m0(Gw(R, p), p['values']), w) : Xs(T, b);
};

function g0(T, b, w) {
    return typeof T == 'number' && typeof b == 'number' && typeof w == 'number' ? te(T, b, w) : Xu(T)(T, b);
}
const Zw = 0x5;

function v0(T, b, w) {
    const R = Math['max'](b - Zw, 0x0);
    return Wm(w - T(R), b - R);
}
const se = {
        'stiffness': 0x64,
        'damping': 0xa,
        'mass': 0x1,
        'velocity': 0x0,
        'duration': 0x320,
        'bounce': 0.3,
        'visualDuration': 0.3,
        'restSpeed': {
            'granular': 0.01,
            'default': 0x2
        },
        'restDelta': {
            'granular': 0.005,
            'default': 0.5
        },
        'minDuration': 0.01,
        'maxDuration': 0xa,
        'minDamping': 0.05,
        'maxDamping': 0x1
    },
    Ja = 0.001;

function Qw({
    duration: T = se['duration'],
    bounce: b = se['bounce'],
    velocity: w = se['velocity'],
    mass: R = se['mass']
}) {
    let p, A, N = 0x1 - b;
    N = Vt(se['minDamping'], se['maxDamping'], N), T = Vt(se['minDuration'], se['maxDuration'], Mt(T)), N < 0x1 ? (p = L => {
        const z = L * N,
            I = z * T,
            K = z - w,
            O = ml(L, N),
            x = Math['exp'](-I);
        return Ja - K / O * x;
    }, A = L => {
        const z = L * N * T,
            I = z * w + w,
            K = Math['pow'](N, 0x2) * Math['pow'](L, 0x2) * T,
            O = Math['exp'](-z),
            V = ml(Math['pow'](L, 0x2), N);
        return (-p(L) + Ja > 0x0 ? -0x1 : 0x1) * ((I - K) * O) / V;
    }) : (p = L => {
        const z = Math['exp'](-L * T),
            I = (L - w) * T + 0x1;
        return -Ja + z * I;
    }, A = L => {
        const z = Math['exp'](-L * T),
            I = (w - L) * (T * T);
        return z * I;
    });
    const C = 0x5 / T,
        h = qw(p, A, C);
    if (T = Et(T), isNaN(h)) return {
        'stiffness': se['stiffness'],
        'damping': se['damping'],
        'duration': T
    };
    {
        const L = Math['pow'](h, 0x2) * R;
        return {
            'stiffness': L,
            'damping': N * 0x2 * Math['sqrt'](R * L),
            'duration': T
        };
    }
}
const Jw = 0xc;

function qw(T, b, w) {
    let R = w;
    for (let p = 0x1; p < Jw; p++) R = R - T(R) / b(R);
    return R;
}

function ml(T, b) {
    return T * Math['sqrt'](0x1 - b * b);
}
const e2 = ['duration', 'bounce'],
    t2 = ['stiffness', 'damping', 'mass'];

function Xd(T, b) {
    return b['some'](w => T[w] !== void 0x0);
}

function n2(T) {
    let b = {
        'velocity': se['velocity'],
        'stiffness': se['stiffness'],
        'damping': se['damping'],
        'mass': se['mass'],
        'isResolvedFromDuration': !0x1,
        ...T
    };
    if (!Xd(T, t2) && Xd(T, e2))
        if (T['visualDuration']) {
            const w = T['visualDuration'],
                R = 0x2 * Math['PI'] / (w * 1.2),
                p = R * R,
                A = 0x2 * Vt(0.05, 0x1, 0x1 - (T['bounce'] || 0x0)) * Math['sqrt'](p);
            b = {
                ...b,
                'mass': se['mass'],
                'stiffness': p,
                'damping': A
            };
        } else {
            const N = Qw(T);
            b = {
                ...b,
                ...N,
                'mass': se['mass']
            }, b['isResolvedFromDuration'] = !0x0;
        } return b;
}

function y0(T = se['visualDuration'], R = se['bounce']) {
    const A = typeof T != 'object' ? {
        'visualDuration': T,
        'keyframes': [0x0, 0x1],
        'bounce': R
    } : T;
    let {
        restSpeed: C,
        restDelta: L
    } = A;
    const z = A['keyframes'][0x0],
        I = A['keyframes'][A['keyframes']['length'] - 0x1],
        K = {
            'done': !0x1,
            'value': z
        },
        {
            stiffness: O,
            damping: V,
            mass: J,
            duration: B,
            velocity: j,
            isResolvedFromDuration: M
        } = n2({
            ...A,
            'velocity': -Mt(A['velocity'] || 0x0)
        }),
        U = j || 0x0,
        Y0 = V / (0x2 * Math['sqrt'](O * J)),
        Y3 = I - z,
        Y4 = Mt(Math['sqrt'](O / J)),
        Y5 = Math['abs'](Y3) < 0x5;
    C || (C = Y5 ? se['restSpeed']['granular'] : se['restSpeed']['default']), L || (L = Y5 ? se['restDelta']['granular'] : se['restDelta']['default']);
    let Y6;
    if (Y0 < 0x1) {
        const Y8 = ml(Y4, Y0);
        Y6 = Y9 => {
            const YY = Math['exp'](-Y0 * Y4 * Y9);
            return I - YY * ((U + Y0 * Y4 * Y3) / Y8 * Math['sin'](Y8 * Y9) + Y3 * Math['cos'](Y8 * Y9));
        };
    } else if (Y0 === 0x1) Y6 = Y9 => I - Math['exp'](-Y4 * Y9) * (Y3 + (U + Y4 * Y3) * Y9);
    else {
        const Y9 = Y4 * Math['sqrt'](Y0 * Y0 - 0x1);
        Y6 = YY => {
            const YT = Math['exp'](-Y0 * Y4 * YY),
                Yb = Math['min'](Y9 * YY, 0x12c);
            return I - YT * ((U + Y0 * Y4 * Y3) * Math['sinh'](Yb) + Y9 * Y3 * Math['cosh'](Yb)) / Y9;
        };
    }
    const Y7 = {
        'calculatedDuration': M && B || null,
        'next': YY => {
            const YT = Y6(YY);
            if (M) K['done'] = YY >= B;
            else {
                let Yb = 0x0;
                Y0 < 0x1 && (Yb = YY === 0x0 ? Et(U) : v0(Y6, YY, YT));
                const YR = Math['abs'](Yb) <= C,
                    YD = Math['abs'](I - YT) <= L;
                K['done'] = YR && YD;
            }
            return K['value'] = K['done'] ? I : YT, K;
        },
        'toString': () => {
            const YY = Math['min'](Vm(Y7), ol),
                YT = _m(Yb => Y7['next'](YY * Yb)['value'], YY, 0x1e);
            return YY + 'ms\x20' + YT;
        }
    };
    return Y7;
}

function Gd({
    keyframes: T,
    velocity: R = 0x0,
    power: A = 0.8,
    timeConstant: L = 0x145,
    bounceDamping: z = 0xa,
    bounceStiffness: I = 0x1f4,
    modifyTarget: K,
    min: O,
    max: V,
    restDelta: J = 0.5,
    restSpeed: B
}) {
    const j = T[0x0],
        M = {
            'done': !0x1,
            'value': j
        },
        U = Yb => O !== void 0x0 && Yb < O || V !== void 0x0 && Yb > V,
        Y0 = Yb => O === void 0x0 ? V : V === void 0x0 || Math['abs'](O - Yb) < Math['abs'](V - Yb) ? O : V;
    let Y3 = A * R;
    const Y4 = j + Y3,
        Y5 = K === void 0x0 ? Y4 : K(Y4);
    Y5 !== Y4 && (Y3 = Y5 - j);
    const Y6 = Yb => -Y3 * Math['exp'](-Yb / L),
        Y7 = Yb => Y5 + Y6(Yb),
        Y8 = Yb => {
            const YR = Y6(Yb),
                YD = Y7(Yb);
            M['done'] = Math['abs'](YR) <= J, M['value'] = M['done'] ? Y5 : YD;
        };
    let Y9, YY;
    const YT = Yb => {
        U(M['value']) && (Y9 = Yb, YY = y0({
            'keyframes': [M['value'], Y0(M['value'])],
            'velocity': v0(Y7, Yb, M['value']),
            'damping': z,
            'stiffness': I,
            'restDelta': J,
            'restSpeed': B
        }));
    };
    return YT(0x0), {
        'calculatedDuration': null,
        'next': Yb => {
            let YR = !0x1;
            return !YY && Y9 === void 0x0 && (YR = !0x0, Y8(Yb), YT(Yb)), Y9 !== void 0x0 && Yb >= Y9 ? YY['next'](Yb - Y9) : (!YR && Y8(Yb), M);
        }
    };
}
const r2 = Ri(0.42, 0x0, 0x1, 0x1),
    i2 = Ri(0x0, 0x0, 0.58, 0x1),
    x0 = Ri(0.42, 0x0, 0.58, 0x1),
    s2 = T => Array['isArray'](T) && typeof T[0x0] != 'number',
    Yd = {
        'linear': Oe,
        'easeIn': r2,
        'easeInOut': x0,
        'easeOut': i2,
        'circIn': Uu,
        'circInOut': qm,
        'circOut': Jm,
        'backIn': Bu,
        'backInOut': Zm,
        'backOut': Ym,
        'anticipate': Qm
    },
    Zd = T => {
        if (Vu(T)) {
            sl(T['length'] === 0x4);
            const [b, w, R, p] = T;
            return Ri(b, w, R, p);
        } else if (typeof T == 'string') return sl(Yd[T] !== void 0x0), Yd[T];
        return T;
    };

function a2(T, b, w) {
    const R = [],
        p = w || g0,
        A = T['length'] - 0x1;
    for (let N = 0x0; N < A; N++) {
        let C = p(T[N], T[N + 0x1]);
        if (b) {
            const h = Array['isArray'](b) ? b[N] || Oe : b;
            C = Ai(h, C);
        }
        R['push'](C);
    }
    return R;
}

function o2(T, b, {
    clamp: w = !0x0,
    ease: R,
    mixer: p
} = {}) {
    const A = T['length'];
    if (sl(A === b['length']), A === 0x1) return () => b[0x0];
    if (A === 0x2 && b[0x0] === b[0x1]) return () => b[0x1];
    const N = T[0x0] === T[0x1];
    T[0x0] > T[A - 0x1] && (T = [...T]['reverse'](), b = [...b]['reverse']());
    const C = a2(b, R, p),
        h = C['length'],
        L = z => {
            if (N && z < T[0x0]) return b[0x0];
            let I = 0x0;
            if (h > 0x1)
                for (; I < T['length'] - 0x2 && !(z < T[I + 0x1]); I++);
            const K = vr(T[I], T[I + 0x1], z);
            return C[I](K);
        };
    return w ? z => L(Vt(T[0x0], T[A - 0x1], z)) : L;
}

function l2(T, b) {
    const w = T[T['length'] - 0x1];
    for (let R = 0x1; R <= b; R++) {
        const p = vr(0x0, b, R);
        T['push'](te(w, 0x1, p));
    }
}

function u2(T) {
    const b = [0x0];
    return l2(b, T['length'] - 0x1), b;
}

function c2(T, b) {
    return T['map'](w => w * b);
}

function d2(T, b) {
    return T['map'](() => b || x0)['splice'](0x0, T['length'] - 0x1);
}

function Gs({
    duration: T = 0x12c,
    keyframes: b,
    times: w,
    ease: R = 'easeInOut'
}) {
    const p = s2(R) ? R['map'](Zd) : Zd(R),
        A = {
            'done': !0x1,
            'value': b[0x0]
        },
        N = c2(w && w['length'] === b['length'] ? w : u2(b), T),
        C = o2(N, b, {
            'ease': Array['isArray'](p) ? p : d2(b, p)
        });
    return {
        'calculatedDuration': T,
        'next': h => (A['value'] = C(h), A['done'] = h >= T, A)
    };
}
const h2 = T => {
        const b = ({
            timestamp: w
        }) => T(w);
        return {
            'start': () => Z['update'](b, !0x0),
            'stop': () => ln(b),
            'now': () => xe['isProcessing'] ? xe['timestamp'] : xt['now']()
        };
    },
    f2 = {
        'decay': Gd,
        'inertia': Gd,
        'tween': Gs,
        'keyframes': Gs,
        'spring': y0
    },
    p2 = T => T / 0x64;
class Gu extends p0 {
    constructor(T) {
        super(T), this['holdTime'] = null, this['cancelTime'] = null, this['currentTime'] = 0x0, this['playbackSpeed'] = 0x1, this['pendingPlayState'] = 'running', this['startTime'] = null, this['state'] = 'idle', this['stop'] = () => {
            if (this['resolver']['cancel'](), this['isStopped'] = !0x0, this['state'] === 'idle') return;
            this['teardown']();
            const {
                onStop: C
            } = this['options'];
            C && C();
        };
        const {
            name: b,
            motionValue: w,
            element: R,
            keyframes: p
        } = this['options'], A = (R == null ? void 0x0 : R['KeyframeResolver']) || Ku, N = (C, h) => this['onKeyframesResolved'](C, h);
        this['resolver'] = new A(p, N, b, w, R), this['resolver']['scheduleResolve']();
    } ['flatten']() {
        super['flatten'](), this['_resolved'] && Object['assign'](this['_resolved'], this['initPlayback'](this['_resolved']['keyframes']));
    } ['initPlayback'](T) {
        const {
            type: b = 'keyframes',
            repeat: w = 0x0,
            repeatDelay: R = 0x0,
            repeatType: p,
            velocity: A = 0x0
        } = this['options'], N = Iu(b) ? b : f2[b] || Gs;
        let C, L;
        N !== Gs && typeof T[0x0] != 'number' && (C = Ai(p2, g0(T[0x0], T[0x1])), T = [0x0, 0x64]);
        const z = N({
            ...this['options'],
            'keyframes': T
        });
        p === 'mirror' && (L = N({
            ...this['options'],
            'keyframes': [...T]['reverse'](),
            'velocity': -A
        })), z['calculatedDuration'] === null && (z['calculatedDuration'] = Vm(z));
        const {
            calculatedDuration: I
        } = z, K = I + R, O = K * (w + 0x1) - R;
        return {
            'generator': z,
            'mirroredGenerator': L,
            'mapPercentToKeyframes': C,
            'calculatedDuration': I,
            'resolvedDuration': K,
            'totalDuration': O
        };
    } ['onPostResolved']() {
        const {
            autoplay: T = !0x0
        } = this['options'];
        this['play'](), this['pendingPlayState'] === 'paused' || !T ? this['pause']() : this['state'] = this['pendingPlayState'];
    } ['tick'](R, A = !0x1) {
        const {
            resolved: z
        } = this;
        if (!z) {
            const {
                keyframes: YD
            } = this['options'];
            return {
                'done': !0x0,
                'value': YD[YD['length'] - 0x1]
            };
        }
        const {
            finalKeyframe: I,
            generator: K,
            mirroredGenerator: O,
            mapPercentToKeyframes: V,
            keyframes: J,
            calculatedDuration: B,
            totalDuration: j,
            resolvedDuration: U
        } = z;
        if (this['startTime'] === null) return K['next'](0x0);
        const {
            delay: Y0,
            repeat: Y3,
            repeatType: Y4,
            repeatDelay: Y5,
            onUpdate: Y6
        } = this['options'];
        this['speed'] > 0x0 ? this['startTime'] = Math['min'](this['startTime'], R) : this['speed'] < 0x0 && (this['startTime'] = Math['min'](R - j / this['speed'], this['startTime'])), A ? this['currentTime'] = R : this['holdTime'] !== null ? this['currentTime'] = this['holdTime'] : this['currentTime'] = Math['round'](R - this['startTime']) * this['speed'];
        const Y7 = this['currentTime'] - Y0 * (this['speed'] >= 0x0 ? 0x1 : -0x1),
            Y8 = this['speed'] >= 0x0 ? Y7 < 0x0 : Y7 > j;
        this['currentTime'] = Math['max'](Y7, 0x0), this['state'] === 'finished' && this['holdTime'] === null && (this['currentTime'] = j);
        let Y9 = this['currentTime'],
            YY = K;
        if (Y3) {
            const YA = Math['min'](this['currentTime'], j) / U;
            let YN = Math['floor'](YA),
                YC = YA % 0x1;
            !YC && YA >= 0x1 && (YC = 0x1), YC === 0x1 && YN--, YN = Math['min'](YN, Y3 + 0x1), !!(YN % 0x2) && (Y4 === 'reverse' ? (YC = 0x1 - YC, Y5 && (YC -= Y5 / U)) : Y4 === 'mirror' && (YY = O)), Y9 = Vt(0x0, 0x1, YC) * U;
        }
        const YT = Y8 ? {
            'done': !0x1,
            'value': J[0x0]
        } : YY['next'](Y9);
        V && (YT['value'] = V(YT['value']));
        let {
            done: Yb
        } = YT;
        !Y8 && B !== null && (Yb = this['speed'] >= 0x0 ? this['currentTime'] >= j : this['currentTime'] <= 0x0);
        const YR = this['holdTime'] === null && (this['state'] === 'finished' || this['state'] === 'running' && Yb);
        return YR && I !== void 0x0 && (YT['value'] = xa(J, this['options'], I)), Y6 && Y6(YT['value']), YR && this['finish'](), YT;
    }
    get['duration']() {
        const {
            resolved: T
        } = this;
        return T ? Mt(T['calculatedDuration']) : 0x0;
    }
    get['time']() {
        return Mt(this['currentTime']);
    }
    set['time'](T) {
        T = Et(T), this['currentTime'] = T, this['holdTime'] !== null || this['speed'] === 0x0 ? this['holdTime'] = T : this['driver'] && (this['startTime'] = this['driver']['now']() - T / this['speed']);
    }
    get['speed']() {
        return this['playbackSpeed'];
    }
    set['speed'](T) {
        const b = this['playbackSpeed'] !== T;
        this['playbackSpeed'] = T, b && (this['time'] = Mt(this['currentTime']));
    } ['play']() {
        if (this['resolver']['isScheduled'] || this['resolver']['resume'](), !this['_resolved']) {
            this['pendingPlayState'] = 'running';
            return;
        }
        if (this['isStopped']) return;
        const {
            driver: T = h2,
            onPlay: b,
            startTime: w
        } = this['options'];
        this['driver'] || (this['driver'] = T(p => this['tick'](p))), b && b();
        const R = this['driver']['now']();
        this['holdTime'] !== null ? this['startTime'] = R - this['holdTime'] : this['startTime'] ? this['state'] === 'finished' && (this['startTime'] = R) : this['startTime'] = w ?? this['calcStartTime'](), this['state'] === 'finished' && this['updateFinishedPromise'](), this['cancelTime'] = this['startTime'], this['holdTime'] = null, this['state'] = 'running', this['driver']['start']();
    } ['pause']() {
        var T;
        if (!this['_resolved']) {
            this['pendingPlayState'] = 'paused';
            return;
        }
        this['state'] = 'paused', this['holdTime'] = (T = this['currentTime']) !== null && T !== void 0x0 ? T : 0x0;
    } ['complete']() {
        this['state'] !== 'running' && this['play'](), this['pendingPlayState'] = this['state'] = 'finished', this['holdTime'] = null;
    } ['finish']() {
        this['teardown'](), this['state'] = 'finished';
        const {
            onComplete: T
        } = this['options'];
        T && T();
    } ['cancel']() {
        this['cancelTime'] !== null && this['tick'](this['cancelTime']), this['teardown'](), this['updateFinishedPromise']();
    } ['teardown']() {
        this['state'] = 'idle', this['stopDriver'](), this['resolveFinishedPromise'](), this['updateFinishedPromise'](), this['startTime'] = this['cancelTime'] = null, this['resolver']['cancel']();
    } ['stopDriver']() {
        this['driver'] && (this['driver']['stop'](), this['driver'] = void 0x0);
    } ['sample'](T) {
        return this['startTime'] = 0x0, this['tick'](T, !0x0);
    }
}
const m2 = new Set(['opacity', 'clipPath', 'filter', 'transform']);

function g2(T, b, w, {
    delay: R = 0x0,
    duration: p = 0x12c,
    repeat: A = 0x0,
    repeatType: N = 'loop',
    ease: C = 'easeInOut',
    times: h
} = {}) {
    const L = {
        [b]: w
    };
    h && (L['offset'] = h);
    const z = Om(C, p);
    return Array['isArray'](z) && (L['easing'] = z), T['animate'](L, {
        'delay': R,
        'duration': p,
        'easing': Array['isArray'](z) ? 'linear' : z,
        'fill': 'both',
        'iterations': A + 0x1,
        'direction': N === 'reverse' ? 'alternate' : 'normal'
    });
}
const v2 = wu(() => Object['hasOwnProperty']['call'](Element['prototype'], 'animate')),
    Ys = 0xa,
    y2 = 0x4e20;

function x2(T) {
    return Iu(T['type']) || T['type'] === 'spring' || !Fm(T['ease']);
}

function w2(T, b) {
    const w = new Gu({
        ...b,
        'keyframes': T,
        'repeat': 0x0,
        'delay': 0x0,
        'isGenerator': !0x0
    });
    let R = {
        'done': !0x1,
        'value': T[0x0]
    };
    const p = [];
    let A = 0x0;
    for (; !R['done'] && A < y2;) R = w['sample'](A), p['push'](R['value']), A += Ys;
    return {
        'times': void 0x0,
        'keyframes': p,
        'duration': A - Ys,
        'ease': 'linear'
    };
}
const w0 = {
    'anticipate': Qm,
    'backInOut': Zm,
    'circInOut': qm
};

function j2(T) {
    return T in w0;
}
class Qd extends p0 {
    constructor(T) {
        super(T);
        const {
            name: b,
            motionValue: w,
            element: R,
            keyframes: p
        } = this['options'];
        this['resolver'] = new f0(p, (A, N) => this['onKeyframesResolved'](A, N), b, w, R), this['resolver']['scheduleResolve']();
    } ['initPlayback'](T, b) {
        let {
            duration: R = 0x12c,
            times: p,
            ease: A,
            type: C,
            motionValue: L,
            name: z,
            startTime: I
        } = this['options'];
        if (!L['owner'] || !L['owner']['current']) return !0x1;
        if (typeof A == 'string' && Ks() && j2(A) && (A = w0[A]), x2(this['options'])) {
            const {
                onComplete: O,
                onUpdate: V,
                motionValue: S,
                element: m,
                ...J
            } = this['options'], B = w2(T, J);
            T = B['keyframes'], T['length'] === 0x1 && (T[0x1] = T[0x0]), R = B['duration'], p = B['times'], A = B['ease'], C = 'keyframes';
        }
        const K = g2(L['owner']['current'], z, T, {
            ...this['options'],
            'duration': R,
            'times': p,
            'ease': A
        });
        return K['startTime'] = I ?? this['calcStartTime'](), this['pendingTimeline'] ? (Ld(K, this['pendingTimeline']), this['pendingTimeline'] = void 0x0) : K['onfinish'] = () => {
            const {
                onComplete: g
            } = this['options'];
            L['set'](xa(T, this['options'], b)), g && g(), this['cancel'](), this['resolveFinishedPromise']();
        }, {
            'animation': K,
            'duration': R,
            'times': p,
            'type': C,
            'ease': A,
            'keyframes': T
        };
    }
    get['duration']() {
        const {
            resolved: T
        } = this;
        if (!T) return 0x0;
        const {
            duration: b
        } = T;
        return Mt(b);
    }
    get['time']() {
        const {
            resolved: T
        } = this;
        if (!T) return 0x0;
        const {
            animation: b
        } = T;
        return Mt(b['currentTime'] || 0x0);
    }
    set['time'](T) {
        const {
            resolved: b
        } = this;
        if (!b) return;
        const {
            animation: w
        } = b;
        w['currentTime'] = Et(T);
    }
    get['speed']() {
        const {
            resolved: T
        } = this;
        if (!T) return 0x1;
        const {
            animation: b
        } = T;
        return b['playbackRate'];
    }
    set['speed'](T) {
        const {
            resolved: b
        } = this;
        if (!b) return;
        const {
            animation: w
        } = b;
        w['playbackRate'] = T;
    }
    get['state']() {
        const {
            resolved: T
        } = this;
        if (!T) return 'idle';
        const {
            animation: b
        } = T;
        return b['playState'];
    }
    get['startTime']() {
        const {
            resolved: T
        } = this;
        if (!T) return null;
        const {
            animation: b
        } = T;
        return b['startTime'];
    } ['attachTimeline'](T) {
        if (!this['_resolved']) this['pendingTimeline'] = T;
        else {
            const {
                resolved: b
            } = this;
            if (!b) return Oe;
            const {
                animation: w
            } = b;
            Ld(w, T);
        }
        return Oe;
    } ['play']() {
        if (this['isStopped']) return;
        const {
            resolved: T
        } = this;
        if (!T) return;
        const {
            animation: b
        } = T;
        b['playState'] === 'finished' && this['updateFinishedPromise'](), b['play']();
    } ['pause']() {
        const {
            resolved: T
        } = this;
        if (!T) return;
        const {
            animation: b
        } = T;
        b['pause']();
    } ['stop']() {
        if (this['resolver']['cancel'](), this['isStopped'] = !0x0, this['state'] === 'idle') return;
        this['resolveFinishedPromise'](), this['updateFinishedPromise']();
        const {
            resolved: T
        } = this;
        if (!T) return;
        const {
            animation: b,
            keyframes: R,
            duration: p,
            type: A,
            ease: N,
            times: C
        } = T;
        if (b['playState'] === 'idle' || b['playState'] === 'finished') return;
        if (this['time']) {
            const {
                motionValue: z,
                onUpdate: I,
                onComplete: K,
                element: O,
                ...V
            } = this['options'], S = new Gu({
                ...V,
                'keyframes': R,
                'duration': p,
                'type': A,
                'ease': N,
                'times': C,
                'isGenerator': !0x0
            }), m = Et(this['time']);
            z['setWithVelocity'](S['sample'](m - Ys)['value'], S['sample'](m)['value'], Ys);
        }
        const {
            onStop: L
        } = this['options'];
        L && L(), this['cancel']();
    } ['complete']() {
        const {
            resolved: T
        } = this;
        T && T['animation']['finish']();
    } ['cancel']() {
        const {
            resolved: T
        } = this;
        T && T['animation']['cancel']();
    }
    static['supports'](T) {
        const {
            motionValue: b,
            name: w,
            repeatDelay: R,
            repeatType: p,
            damping: A,
            type: N
        } = T;
        if (!b || !b['owner'] || !(b['owner']['current'] instanceof HTMLElement)) return !0x1;
        const {
            onUpdate: C,
            transformTemplate: h
        } = b['owner']['getProps']();
        return v2() && w && m2['has'](w) && !C && !h && !R && p !== 'mirror' && A !== 0x0 && N !== 'inertia';
    }
}
const N2 = {
        'type': 'spring',
        'stiffness': 0x1f4,
        'damping': 0x19,
        'restSpeed': 0xa
    },
    S2 = T => ({
        'type': 'spring',
        'stiffness': 0x226,
        'damping': T === 0x0 ? 0x2 * Math['sqrt'](0x226) : 0x1e,
        'restSpeed': 0xa
    }),
    b2 = {
        'type': 'keyframes',
        'duration': 0.8
    },
    k2 = {
        'type': 'keyframes',
        'ease': [0.25, 0.1, 0.35, 0x1],
        'duration': 0.3
    },
    C2 = (T, {
        keyframes: b
    }) => b['length'] > 0x2 ? b2 : _n['has'](T) ? T['startsWith']('scale') ? S2(b[0x1]) : N2 : k2;

function T2({
    when: T,
    delay: b,
    delayChildren: w,
    staggerChildren: R,
    staggerDirection: p,
    repeat: A,
    repeatType: N,
    repeatDelay: C,
    from: h,
    elapsed: L,
    ...z
}) {
    return !!Object['keys'](z)['length'];
}
const Yu = (T, b, w, R = {}, p, A) => N => {
    const C = Lu(R, T) || {},
        L = C['delay'] || R['delay'] || 0x0;
    let {
        elapsed: z = 0x0
    } = R;
    z = z - Et(L);
    let I = {
        'keyframes': Array['isArray'](w) ? w : [null, w],
        'ease': 'easeOut',
        'velocity': b['getVelocity'](),
        ...C,
        'delay': -z,
        'onUpdate': O => {
            b['set'](O), C['onUpdate'] && C['onUpdate'](O);
        },
        'onComplete': () => {
            N(), C['onComplete'] && C['onComplete']();
        },
        'name': T,
        'motionValue': b,
        'element': A ? void 0x0 : p
    };
    T2(C) || (I = {
        ...I,
        ...C2(T, I)
    }), I['duration'] && (I['duration'] = Et(I['duration'])), I['repeatDelay'] && (I['repeatDelay'] = Et(I['repeatDelay'])), I['from'] !== void 0x0 && (I['keyframes'][0x0] = I['from']);
    let K = !0x1;
    if ((I['type'] === !0x1 || I['duration'] === 0x0 && !I['repeatDelay']) && (I['duration'] = 0x0, I['delay'] === 0x0 && (K = !0x0)), K && !A && b['get']() !== void 0x0) {
        const O = xa(I['keyframes'], C);
        if (O !== void 0x0) return Z['update'](() => {
            I['onUpdate'](O), I['onComplete']();
        }), new X1([]);
    }
    return !A && Qd['supports'](I) ? new Qd(I) : new Gu(I);
};

function P2({
    protectedKeys: T,
    needsAnimating: b
}, w) {
    const R = T['hasOwnProperty'](w) && b[w] !== !0x0;
    return b[w] = !0x1, R;
}

function j0(T, b, {
    delay: R = 0x0,
    transitionOverride: A,
    type: C
} = {}) {
    var L;
    let {
        transition: z = T['getDefaultTransition'](),
        transitionEnd: I,
        ...K
    } = b;
    A && (z = A);
    const O = [],
        V = C && T['animationState'] && T['animationState']['getState']()[C];
    for (const S in K) {
        const J = T['getValue'](S, (L = T['latestValues'][S]) !== null && L !== void 0x0 ? L : null),
            B = K[S];
        if (B === void 0x0 || V && P2(V, S)) continue;
        const g = {
            'delay': R,
            ...Lu(z || {}, S)
        };
        let j = !0x1;
        if (window['MotionHandoffAnimation']) {
            const U = $m(T);
            if (U) {
                const Y0 = window['MotionHandoffAnimation'](U, S, Z);
                Y0 !== null && (g['startTime'] = Y0, j = !0x0);
            }
        }
        ul(T, S), J['start'](Yu(S, J, B, T['shouldReduceMotion'] && Hm['has'](S) ? {
            'type': !0x1
        } : g, T, j));
        const M = J['animation'];
        M && O['push'](M);
    }
    return I && Promise['all'](O)['then'](() => {
        Z['update'](() => {
            I && ow(T, I);
        });
    }), O;
}

function gl(T, b, w = {}) {
    var R;
    const p = ya(T, b, w['type'] === 'exit' ? (R = T['presenceContext']) === null || R === void 0x0 ? void 0x0 : R['custom'] : void 0x0);
    let {
        transition: A = T['getDefaultTransition']() || {}
    } = p || {};
    w['transitionOverride'] && (A = w['transitionOverride']);
    const N = p ? () => Promise['all'](j0(T, p, w)) : () => Promise['resolve'](),
        C = T['variantChildren'] && T['variantChildren']['size'] ? (L = 0x0) => {
            const {
                delayChildren: z = 0x0,
                staggerChildren: I,
                staggerDirection: K
            } = A;
            return E2(T, b, z + L, I, K, w);
        } : () => Promise['resolve'](),
        {
            when: h
        } = A;
    if (h) {
        const [L, z] = h === 'beforeChildren' ? [N, C] : [C, N];
        return L()['then'](() => z());
    } else return Promise['all']([N(), C(w['delay'])]);
}

function E2(T, b, w = 0x0, R = 0x0, p = 0x1, A) {
    const N = [],
        C = (T['variantChildren']['size'] - 0x1) * R,
        h = p === 0x1 ? (L = 0x0) => L * R : (L = 0x0) => C - L * R;
    return Array['from'](T['variantChildren'])['sort'](M2)['forEach']((L, z) => {
        L['notify']('AnimationStart', b), N['push'](gl(L, b, {
            ...A,
            'delay': w + h(z)
        })['then'](() => L['notify']('AnimationComplete', b)));
    }), Promise['all'](N);
}

function M2(T, b) {
    return T['sortNodePosition'](b);
}

function R2(T, b, w = {}) {
    T['notify']('AnimationStart', b);
    let R;
    if (Array['isArray'](b)) {
        const p = b['map'](A => gl(T, A, w));
        R = Promise['all'](p);
    } else if (typeof b == 'string') R = gl(T, b, w);
    else {
        const A = typeof b == 'function' ? ya(T, b, w['custom']) : b;
        R = Promise['all'](j0(T, A, w));
    }
    return R['then'](() => {
        T['notify']('AnimationComplete', b);
    });
}
const A2 = Nu['length'];

function N0(T) {
    if (!T) return;
    if (!T['isControllingVariants']) {
        const w = T['parent'] ? N0(T['parent']) || {} : {};
        return T['props']['initial'] !== void 0x0 && (w['initial'] = T['props']['initial']), w;
    }
    const b = {};
    for (let R = 0x0; R < A2; R++) {
        const p = Nu[R],
            A = T['props'][p];
        (wi(A) || A === !0x1) && (b[p] = A);
    }
    return b;
}
const D2 = [...ju]['reverse'](),
    L2 = ju['length'];

function I2(T) {
    return b => Promise['all'](b['map'](({
        animation: w,
        options: R
    }) => R2(T, w, R)));
}

function V2(T) {
    let b = I2(T),
        w = Jd(),
        R = !0x0;
    const p = h => (L, z) => {
        var I;
        const K = ya(T, z, h === 'exit' ? (I = T['presenceContext']) === null || I === void 0x0 ? void 0x0 : I['custom'] : void 0x0);
        if (K) {
            const {
                transition: O,
                transitionEnd: V,
                ...S
            } = K;
            L = {
                ...L,
                ...S,
                ...V
            };
        }
        return L;
    };

    function A(h) {
        b = h(T);
    }

    function N(K) {
        const {
            props: O
        } = T, B = N0(T['parent']) || {}, j = [], U = new Set();
        let Y0 = {},
            Y3 = 0x1 / 0x0;
        for (let Y5 = 0x0; Y5 < L2; Y5++) {
            const Y6 = D2[Y5],
                Y7 = w[Y6],
                Y8 = O[Y6] !== void 0x0 ? O[Y6] : B[Y6],
                Y9 = wi(Y8),
                YY = Y6 === K ? Y7['isActive'] : null;
            YY === !0x1 && (Y3 = Y5);
            let YT = Y8 === B[Y6] && Y8 !== O[Y6] && Y9;
            if (YT && R && T['manuallyAnimateOnMount'] && (YT = !0x1), Y7['protectedKeys'] = {
                    ...Y0
                }, !Y7['isActive'] && YY === null || !Y8 && !Y7['prevProp'] || ga(Y8) || typeof Y8 == 'boolean') continue;
            const Yb = _2(Y7['prevProp'], Y8);
            let YR = Yb || Y6 === K && Y7['isActive'] && !YT && Y9 || Y5 > Y3 && Y9,
                YD = !0x1;
            const YA = Array['isArray'](Y8) ? Y8 : [Y8];
            let YN = YA['reduce'](p(Y6), {});
            YY === !0x1 && (YN = {});
            const {
                prevResolvedValues: YC = {}
            } = Y7, YL = {
                ...YC,
                ...YN
            }, Yz = YH => {
                YR = !0x0, U['has'](YH) && (YD = !0x0, U['delete'](YH)), Y7['needsAnimating'][YH] = !0x0;
                const YI = T['getValue'](YH);
                YI && (YI['liveStyle'] = !0x1);
            };
            for (const YH in YL) {
                const YI = YN[YH],
                    YZ = YC[YH];
                if (Y0['hasOwnProperty'](YH)) continue;
                let YK = !0x1;
                al(YI) && al(YZ) ? YK = !Im(YI, YZ) : YK = YI !== YZ, YK ? YI != null ? Yz(YH) : U['add'](YH) : YI !== void 0x0 && U['has'](YH) ? Yz(YH) : Y7['protectedKeys'][YH] = !0x0;
            }
            Y7['prevProp'] = Y8, Y7['prevResolvedValues'] = YN, Y7['isActive'] && (Y0 = {
                ...Y0,
                ...YN
            }), R && T['blockInitialAnimation'] && (YR = !0x1), YR && (!(YT && Yb) || YD) && j['push'](...YA['map'](YO => ({
                'animation': YO,
                'options': {
                    'type': Y6
                }
            })));
        }
        if (U['size']) {
            const YO = {};
            U['forEach'](YP => {
                const Yq = T['getBaseTarget'](YP),
                    YV = T['getValue'](YP);
                YV && (YV['liveStyle'] = !0x0), YO[YP] = Yq ?? null;
            }), j['push']({
                'animation': YO
            });
        }
        let Y4 = !!j['length'];
        return R && (O['initial'] === !0x1 || O['initial'] === O['animate']) && !T['manuallyAnimateOnMount'] && (Y4 = !0x1), R = !0x1, Y4 ? b(j) : Promise['resolve']();
    }

    function C(L, z) {
        var I;
        if (w[L]['isActive'] === z) return Promise['resolve']();
        (I = T['variantChildren']) === null || I === void 0x0 || I['forEach'](O => {
            var x;
            return (x = O['animationState']) === null || x === void 0x0 ? void 0x0 : x['setActive'](L, z);
        }), w[L]['isActive'] = z;
        const K = N(L);
        for (const O in w) w[O]['protectedKeys'] = {};
        return K;
    }
    return {
        'animateChanges': N,
        'setActive': C,
        'setAnimateFunction': A,
        'getState': () => w,
        'reset': () => {
            w = Jd(), R = !0x0;
        }
    };
}

function _2(T, b) {
    return typeof b == 'string' ? b !== T : Array['isArray'](b) ? !Im(b, T) : !0x1;
}

function pn(T = !0x1) {
    return {
        'isActive': T,
        'protectedKeys': {},
        'needsAnimating': {},
        'prevResolvedValues': {}
    };
}

function Jd() {
    return {
        'animate': pn(!0x0),
        'whileInView': pn(),
        'whileHover': pn(),
        'whileTap': pn(),
        'whileDrag': pn(),
        'whileFocus': pn(),
        'exit': pn()
    };
}
class fn {
    constructor(T) {
        this['isMounted'] = !0x1, this['node'] = T;
    } ['update']() {}
}
class F2 extends fn {
    constructor(T) {
        super(T), T['animationState'] || (T['animationState'] = V2(T));
    } ['updateAnimationControlsSubscription']() {
        const {
            animate: T
        } = this['node']['getProps']();
        ga(T) && (this['unmountControls'] = T['subscribe'](this['node']));
    } ['mount']() {
        this['updateAnimationControlsSubscription']();
    } ['update']() {
        const {
            animate: T
        } = this['node']['getProps'](), {
            animate: b
        } = this['node']['prevProps'] || {};
        T !== b && this['updateAnimationControlsSubscription']();
    } ['unmount']() {
        var T;
        this['node']['animationState']['reset'](), (T = this['unmountControls']) === null || T === void 0x0 || T['call'](this);
    }
}
let O2 = 0x0;
class z2 extends fn {
    constructor() {
        super(...arguments), this['id'] = O2++;
    } ['update']() {
        if (!this['node']['presenceContext']) return;
        const {
            isPresent: T,
            onExitComplete: b
        } = this['node']['presenceContext'], {
            isPresent: w
        } = this['node']['prevPresenceContext'] || {};
        if (!this['node']['animationState'] || T === w) return;
        const R = this['node']['animationState']['setActive']('exit', !T);
        b && !T && R['then'](() => b(this['id']));
    } ['mount']() {
        const {
            register: T
        } = this['node']['presenceContext'] || {};
        T && (this['unmount'] = T(this['id']));
    } ['unmount']() {}
}
const B2 = {
    'animation': {
        'Feature': F2
    },
    'exit': {
        'Feature': z2
    }
};

function bi(T, b, w, R = {
    'passive': !0x0
}) {
    return T['addEventListener'](b, w, R), () => T['removeEventListener'](b, w);
}

function Di(T) {
    return {
        'point': {
            'x': T['pageX'],
            'y': T['pageY']
        }
    };
}
const U2 = T => b => _u(b) && T(b, Di(b));

function Jr(T, b, w, R) {
    return bi(T, b, U2(w), R);
}
const qd = (T, b) => Math['abs'](T - b);

function H2(T, b) {
    const w = qd(T['x'], b['x']),
        R = qd(T['y'], b['y']);
    return Math['sqrt'](w ** 0x2 + R ** 0x2);
}
class S0 {
    constructor(T, b, {
        transformPagePoint: w,
        contextWindow: R,
        dragSnapToOrigin: p = !0x1
    } = {}) {
        if (this['startEvent'] = null, this['lastMoveEvent'] = null, this['lastMoveEventInfo'] = null, this['handlers'] = {}, this['contextWindow'] = window, this['updatePoint'] = () => {
                if (!(this['lastMoveEvent'] && this['lastMoveEventInfo'])) return;
                const z = eo(this['lastMoveEventInfo'], this['history']),
                    I = this['startEvent'] !== null,
                    K = H2(z['offset'], {
                        'x': 0x0,
                        'y': 0x0
                    }) >= 0x3;
                if (!I && !K) return;
                const {
                    point: O
                } = z, {
                    timestamp: V
                } = xe;
                this['history']['push']({
                    ...O,
                    'timestamp': V
                });
                const {
                    onStart: S,
                    onMove: J
                } = this['handlers'];
                I || (S && S(this['lastMoveEvent'], z), this['startEvent'] = this['lastMoveEvent']), J && J(this['lastMoveEvent'], z);
            }, this['handlePointerMove'] = (z, I) => {
                this['lastMoveEvent'] = z, this['lastMoveEventInfo'] = qa(I, this['transformPagePoint']), Z['update'](this['updatePoint'], !0x0);
            }, this['handlePointerUp'] = (z, I) => {
                this['end']();
                const {
                    onEnd: K,
                    onSessionEnd: O,
                    resumeAnimation: V
                } = this['handlers'];
                if (this['dragSnapToOrigin'] && V && V(), !(this['lastMoveEvent'] && this['lastMoveEventInfo'])) return;
                const S = eo(z['type'] === 'pointercancel' ? this['lastMoveEventInfo'] : qa(I, this['transformPagePoint']), this['history']);
                this['startEvent'] && K && K(z, S), O && O(z, S);
            }, !_u(T)) return;
        this['dragSnapToOrigin'] = p, this['handlers'] = b, this['transformPagePoint'] = w, this['contextWindow'] = R || window;
        const A = Di(T),
            N = qa(A, this['transformPagePoint']),
            {
                point: C
            } = N,
            {
                timestamp: h
            } = xe;
        this['history'] = [{
            ...C,
            'timestamp': h
        }];
        const {
            onSessionStart: L
        } = b;
        L && L(T, eo(N, this['history'])), this['removeListeners'] = Ai(Jr(this['contextWindow'], 'pointermove', this['handlePointerMove']), Jr(this['contextWindow'], 'pointerup', this['handlePointerUp']), Jr(this['contextWindow'], 'pointercancel', this['handlePointerUp']));
    } ['updateHandlers'](T) {
        this['handlers'] = T;
    } ['end']() {
        this['removeListeners'] && this['removeListeners'](), ln(this['updatePoint']);
    }
}

function qa(T, b) {
    return b ? {
        'point': b(T['point'])
    } : T;
}

function eh(T, b) {
    return {
        'x': T['x'] - b['x'],
        'y': T['y'] - b['y']
    };
}

function eo({
    point: T
}, b) {
    return {
        'point': T,
        'delta': eh(T, b0(b)),
        'offset': eh(T, W2(b)),
        'velocity': $2(b, 0.1)
    };
}

function W2(T) {
    return T[0x0];
}

function b0(T) {
    return T[T['length'] - 0x1];
}

function $2(T, b) {
    if (T['length'] < 0x2) return {
        'x': 0x0,
        'y': 0x0
    };
    let w = T['length'] - 0x1,
        R = null;
    const p = b0(T);
    for (; w >= 0x0 && (R = T[w], !(p['timestamp'] - R['timestamp'] > Et(b)));) w--;
    if (!R) return {
        'x': 0x0,
        'y': 0x0
    };
    const A = Mt(p['timestamp'] - R['timestamp']);
    if (A === 0x0) return {
        'x': 0x0,
        'y': 0x0
    };
    const N = {
        'x': (p['x'] - R['x']) / A,
        'y': (p['y'] - R['y']) / A
    };
    return N['x'] === 0x1 / 0x0 && (N['x'] = 0x0), N['y'] === 0x1 / 0x0 && (N['y'] = 0x0), N;
}
const k0 = 0.0001,
    K2 = 0x1 - k0,
    X2 = 0x1 + k0,
    C0 = 0.01,
    G2 = 0x0 - C0,
    Y2 = 0x0 + C0;

function Be(T) {
    return T['max'] - T['min'];
}

function Z2(T, b, w) {
    return Math['abs'](T - b) <= w;
}

function th(T, b, w, R = 0.5) {
    T['origin'] = R, T['originPoint'] = te(b['min'], b['max'], T['origin']), T['scale'] = Be(w) / Be(b), T['translate'] = te(w['min'], w['max'], T['origin']) - T['originPoint'], (T['scale'] >= K2 && T['scale'] <= X2 || isNaN(T['scale'])) && (T['scale'] = 0x1), (T['translate'] >= G2 && T['translate'] <= Y2 || isNaN(T['translate'])) && (T['translate'] = 0x0);
}

function qr(T, b, w, R) {
    th(T['x'], b['x'], w['x'], R ? R['originX'] : void 0x0), th(T['y'], b['y'], w['y'], R ? R['originY'] : void 0x0);
}

function nh(T, b, w) {
    T['min'] = w['min'] + b['min'], T['max'] = T['min'] + Be(b);
}

function Q2(T, b, w) {
    nh(T['x'], b['x'], w['x']), nh(T['y'], b['y'], w['y']);
}

function rh(T, b, w) {
    T['min'] = b['min'] - w['min'], T['max'] = T['min'] + Be(b);
}

function ei(T, b, w) {
    rh(T['x'], b['x'], w['x']), rh(T['y'], b['y'], w['y']);
}

function J2(T, {
    min: b,
    max: w
}, R) {
    return b !== void 0x0 && T < b ? T = R ? te(b, T, R['min']) : Math['max'](T, b) : w !== void 0x0 && T > w && (T = R ? te(w, T, R['max']) : Math['min'](T, w)), T;
}

function ih(T, b, w) {
    return {
        'min': b !== void 0x0 ? T['min'] + b : void 0x0,
        'max': w !== void 0x0 ? T['max'] + w - (T['max'] - T['min']) : void 0x0
    };
}

function q2(T, {
    top: b,
    left: w,
    bottom: R,
    right: p
}) {
    return {
        'x': ih(T['x'], w, p),
        'y': ih(T['y'], b, R)
    };
}

function sh(T, b) {
    let w = b['min'] - T['min'],
        R = b['max'] - T['max'];
    return b['max'] - b['min'] < T['max'] - T['min'] && ([w, R] = [R, w]), {
        'min': w,
        'max': R
    };
}

function ej(T, b) {
    return {
        'x': sh(T['x'], b['x']),
        'y': sh(T['y'], b['y'])
    };
}

function tj(T, b) {
    let w = 0.5;
    const R = Be(T),
        p = Be(b);
    return p > R ? w = vr(b['min'], b['max'] - R, T['min']) : R > p && (w = vr(T['min'], T['max'] - p, b['min'])), Vt(0x0, 0x1, w);
}

function nj(T, b) {
    const w = {};
    return b['min'] !== void 0x0 && (w['min'] = b['min'] - T['min']), b['max'] !== void 0x0 && (w['max'] = b['max'] - T['min']), w;
}
const vl = 0.35;

function rj(T = vl) {
    return T === !0x1 ? T = 0x0 : T === !0x0 && (T = vl), {
        'x': ah(T, 'left', 'right'),
        'y': ah(T, 'top', 'bottom')
    };
}

function ah(T, b, w) {
    return {
        'min': oh(T, b),
        'max': oh(T, w)
    };
}

function oh(T, b) {
    return typeof T == 'number' ? T : T[b] || 0x0;
}
const lh = () => ({
        'translate': 0x0,
        'scale': 0x1,
        'origin': 0x0,
        'originPoint': 0x0
    }),
    tr = () => ({
        'x': lh(),
        'y': lh()
    }),
    uh = () => ({
        'min': 0x0,
        'max': 0x0
    }),
    le = () => ({
        'x': uh(),
        'y': uh()
    });

function Ge(T) {
    return [T('x'), T('y')];
}

function T0({
    top: T,
    left: b,
    right: w,
    bottom: R
}) {
    return {
        'x': {
            'min': b,
            'max': w
        },
        'y': {
            'min': T,
            'max': R
        }
    };
}

function ij({
    x: T,
    y: b
}) {
    return {
        'top': b['min'],
        'right': T['max'],
        'bottom': b['max'],
        'left': T['min']
    };
}

function sj(T, b) {
    if (!b) return T;
    const w = b({
            'x': T['left'],
            'y': T['top']
        }),
        R = b({
            'x': T['right'],
            'y': T['bottom']
        });
    return {
        'top': w['y'],
        'left': w['x'],
        'bottom': R['y'],
        'right': R['x']
    };
}

function to(T) {
    return T === void 0x0 || T === 0x1;
}

function yl({
    scale: T,
    scaleX: b,
    scaleY: w
}) {
    return !to(T) || !to(b) || !to(w);
}

function vn(T) {
    return yl(T) || P0(T) || T['z'] || T['rotate'] || T['rotateX'] || T['rotateY'] || T['skewX'] || T['skewY'];
}

function P0(T) {
    return ch(T['x']) || ch(T['y']);
}

function ch(T) {
    return T && T !== '0%';
}

function Zs(T, b, w) {
    const R = T - w,
        p = b * R;
    return w + p;
}

function dh(T, b, w, R, p) {
    return p !== void 0x0 && (T = Zs(T, p, R)), Zs(T, w, R) + b;
}

function xl(T, b = 0x0, w = 0x1, R, p) {
    T['min'] = dh(T['min'], b, w, R, p), T['max'] = dh(T['max'], b, w, R, p);
}

function E0(T, {
    x: b,
    y: w
}) {
    xl(T['x'], b['translate'], b['scale'], b['originPoint']), xl(T['y'], w['translate'], w['scale'], w['originPoint']);
}
const hh = 0.999999999999,
    fh = 1.0000000000001;

function aj(T, b, w, R = !0x1) {
    const p = w['length'];
    if (!p) return;
    b['x'] = b['y'] = 0x1;
    let A, N;
    for (let C = 0x0; C < p; C++) {
        A = w[C], N = A['projectionDelta'];
        const {
            visualElement: h
        } = A['options'];
        h && h['props']['style'] && h['props']['style']['display'] === 'contents' || (R && A['options']['layoutScroll'] && A['scroll'] && A !== A['root'] && rr(T, {
            'x': -A['scroll']['offset']['x'],
            'y': -A['scroll']['offset']['y']
        }), N && (b['x'] *= N['x']['scale'], b['y'] *= N['y']['scale'], E0(T, N)), R && vn(A['latestValues']) && rr(T, A['latestValues']));
    }
    b['x'] < fh && b['x'] > hh && (b['x'] = 0x1), b['y'] < fh && b['y'] > hh && (b['y'] = 0x1);
}

function nr(T, b) {
    T['min'] = T['min'] + b, T['max'] = T['max'] + b;
}

function ph(T, b, w, R, p = 0.5) {
    const A = te(T['min'], T['max'], p);
    xl(T, b, w, A, R);
}

function rr(T, b) {
    ph(T['x'], b['x'], b['scaleX'], b['scale'], b['originX']), ph(T['y'], b['y'], b['scaleY'], b['scale'], b['originY']);
}

function M0(T, b) {
    return T0(sj(T['getBoundingClientRect'](), b));
}

function oj(T, b, w) {
    const R = M0(T, w),
        {
            scroll: p
        } = b;
    return p && (nr(R['x'], p['offset']['x']), nr(R['y'], p['offset']['y'])), R;
}
const R0 = ({
        current: T
    }) => T ? T['ownerDocument']['defaultView'] : null,
    lj = new WeakMap();
class uj {
    constructor(T) {
        this['openDragLock'] = null, this['isDragging'] = !0x1, this['currentDirection'] = null, this['originPoint'] = {
            'x': 0x0,
            'y': 0x0
        }, this['constraints'] = !0x1, this['hasMutatedConstraints'] = !0x1, this['elastic'] = le(), this['visualElement'] = T;
    } ['start'](T, {
        snapToCursor: b = !0x1
    } = {}) {
        const {
            presenceContext: w
        } = this['visualElement'];
        if (w && w['isPresent'] === !0x1) return;
        const R = L => {
                const {
                    dragSnapToOrigin: z
                } = this['getProps']();
                z ? this['pauseAnimation']() : this['stopAnimation'](), b && this['snapToCursor'](Di(L)['point']);
            },
            p = (L, z) => {
                const {
                    drag: I,
                    dragPropagation: K,
                    onDragStart: O
                } = this['getProps']();
                if (I && !K && (this['openDragLock'] && this['openDragLock'](), this['openDragLock'] = nw(I), !this['openDragLock'])) return;
                this['isDragging'] = !0x0, this['currentDirection'] = null, this['resolveConstraints'](), this['visualElement']['projection'] && (this['visualElement']['projection']['isAnimationBlocked'] = !0x0, this['visualElement']['projection']['target'] = void 0x0), Ge(S => {
                    let J = this['getAxisMotionValue'](S)['get']() || 0x0;
                    if (yt['test'](J)) {
                        const {
                            projection: B
                        } = this['visualElement'];
                        if (B && B['layout']) {
                            const j = B['layout']['layoutBox'][S];
                            j && (J = Be(j) * (parseFloat(J) / 0x64));
                        }
                    }
                    this['originPoint'][S] = J;
                }), O && Z['postRender'](() => O(L, z)), ul(this['visualElement'], 'transform');
                const {
                    animationState: V
                } = this['visualElement'];
                V && V['setActive']('whileDrag', !0x0);
            },
            A = (L, z) => {
                const {
                    dragPropagation: I,
                    dragDirectionLock: K,
                    onDirectionLock: O,
                    onDrag: V
                } = this['getProps']();
                if (!I && !this['openDragLock']) return;
                const {
                    offset: S
                } = z;
                if (K && this['currentDirection'] === null) {
                    this['currentDirection'] = cj(S), this['currentDirection'] !== null && O && O(this['currentDirection']);
                    return;
                }
                this['updateAxis']('x', z['point'], S), this['updateAxis']('y', z['point'], S), this['visualElement']['render'](), V && V(L, z);
            },
            N = (L, z) => this['stop'](L, z),
            C = () => Ge(L => {
                var z;
                return this['getAnimationState'](L) === 'paused' && ((z = this['getAxisMotionValue'](L)['animation']) === null || z === void 0x0 ? void 0x0 : z['play']());
            }),
            {
                dragSnapToOrigin: h
            } = this['getProps']();
        this['panSession'] = new S0(T, {
            'onSessionStart': R,
            'onStart': p,
            'onMove': A,
            'onSessionEnd': N,
            'resumeAnimation': C
        }, {
            'transformPagePoint': this['visualElement']['getTransformPagePoint'](),
            'dragSnapToOrigin': h,
            'contextWindow': R0(this['visualElement'])
        });
    } ['stop'](T, b) {
        const w = this['isDragging'];
        if (this['cancel'](), !w) return;
        const {
            velocity: R
        } = b;
        this['startAnimation'](R);
        const {
            onDragEnd: p
        } = this['getProps']();
        p && Z['postRender'](() => p(T, b));
    } ['cancel']() {
        this['isDragging'] = !0x1;
        const {
            projection: T,
            animationState: b
        } = this['visualElement'];
        T && (T['isAnimationBlocked'] = !0x1), this['panSession'] && this['panSession']['end'](), this['panSession'] = void 0x0;
        const {
            dragPropagation: w
        } = this['getProps']();
        !w && this['openDragLock'] && (this['openDragLock'](), this['openDragLock'] = null), b && b['setActive']('whileDrag', !0x1);
    } ['updateAxis'](T, b, w) {
        const {
            drag: R
        } = this['getProps']();
        if (!w || !ts(T, R, this['currentDirection'])) return;
        const p = this['getAxisMotionValue'](T);
        let A = this['originPoint'][T] + w[T];
        this['constraints'] && this['constraints'][T] && (A = J2(A, this['constraints'][T], this['elastic'][T])), p['set'](A);
    } ['resolveConstraints']() {
        var T;
        const {
            dragConstraints: b,
            dragElastic: w
        } = this['getProps'](), R = this['visualElement']['projection'] && !this['visualElement']['projection']['layout'] ? this['visualElement']['projection']['measure'](!0x1) : (T = this['visualElement']['projection']) === null || T === void 0x0 ? void 0x0 : T['layout'], p = this['constraints'];
        b && qn(b) ? this['constraints'] || (this['constraints'] = this['resolveRefConstraints']()) : b && R ? this['constraints'] = q2(R['layoutBox'], b) : this['constraints'] = !0x1, this['elastic'] = rj(w), p !== this['constraints'] && R && this['constraints'] && !this['hasMutatedConstraints'] && Ge(A => {
            this['constraints'] !== !0x1 && this['getAxisMotionValue'](A) && (this['constraints'][A] = nj(R['layoutBox'][A], this['constraints'][A]));
        });
    } ['resolveRefConstraints']() {
        const {
            dragConstraints: T,
            onMeasureDragConstraints: b
        } = this['getProps']();
        if (!T || !qn(T)) return !0x1;
        const w = T['current'],
            {
                projection: R
            } = this['visualElement'];
        if (!R || !R['layout']) return !0x1;
        const p = oj(w, R['root'], this['visualElement']['getTransformPagePoint']());
        let A = ej(R['layout']['layoutBox'], p);
        if (b) {
            const N = b(ij(A));
            this['hasMutatedConstraints'] = !!N, N && (A = T0(N));
        }
        return A;
    } ['startAnimation'](T) {
        const {
            drag: b,
            dragMomentum: w,
            dragElastic: R,
            dragTransition: p,
            dragSnapToOrigin: A,
            onDragTransitionEnd: N
        } = this['getProps'](), C = this['constraints'] || {}, h = Ge(L => {
            if (!ts(L, b, this['currentDirection'])) return;
            let z = C && C[L] || {};
            A && (z = {
                'min': 0x0,
                'max': 0x0
            });
            const I = R ? 0xc8 : 0xf4240,
                K = R ? 0x28 : 0x989680,
                O = {
                    'type': 'inertia',
                    'velocity': w ? T[L] : 0x0,
                    'bounceStiffness': I,
                    'bounceDamping': K,
                    'timeConstant': 0x2ee,
                    'restDelta': 0x1,
                    'restSpeed': 0xa,
                    ...p,
                    ...z
                };
            return this['startAxisValueAnimation'](L, O);
        });
        return Promise['all'](h)['then'](N);
    } ['startAxisValueAnimation'](T, b) {
        const w = this['getAxisMotionValue'](T);
        return ul(this['visualElement'], T), w['start'](Yu(T, w, 0x0, b, this['visualElement'], !0x1));
    } ['stopAnimation']() {
        Ge(T => this['getAxisMotionValue'](T)['stop']());
    } ['pauseAnimation']() {
        Ge(T => {
            var b;
            return (b = this['getAxisMotionValue'](T)['animation']) === null || b === void 0x0 ? void 0x0 : b['pause']();
        });
    } ['getAnimationState'](T) {
        var b;
        return (b = this['getAxisMotionValue'](T)['animation']) === null || b === void 0x0 ? void 0x0 : b['state'];
    } ['getAxisMotionValue'](T) {
        const b = '_drag' + T['toUpperCase'](),
            w = this['visualElement']['getProps'](),
            R = w[b];
        return R || this['visualElement']['getValue'](T, (w['initial'] ? w['initial'][T] : void 0x0) || 0x0);
    } ['snapToCursor'](T) {
        Ge(b => {
            const {
                drag: w
            } = this['getProps']();
            if (!ts(b, w, this['currentDirection'])) return;
            const {
                projection: R
            } = this['visualElement'], p = this['getAxisMotionValue'](b);
            if (R && R['layout']) {
                const {
                    min: A,
                    max: N
                } = R['layout']['layoutBox'][b];
                p['set'](T[b] - te(A, N, 0.5));
            }
        });
    } ['scalePositionWithinConstraints']() {
        if (!this['visualElement']['current']) return;
        const {
            drag: T,
            dragConstraints: b
        } = this['getProps'](), {
            projection: w
        } = this['visualElement'];
        if (!qn(b) || !w || !this['constraints']) return;
        this['stopAnimation']();
        const R = {
            'x': 0x0,
            'y': 0x0
        };
        Ge(A => {
            const N = this['getAxisMotionValue'](A);
            if (N && this['constraints'] !== !0x1) {
                const C = N['get']();
                R[A] = tj({
                    'min': C,
                    'max': C
                }, this['constraints'][A]);
            }
        });
        const {
            transformTemplate: p
        } = this['visualElement']['getProps']();
        this['visualElement']['current']['style']['transform'] = p ? p({}, '') : 'none', w['root'] && w['root']['updateScroll'](), w['updateLayout'](), this['resolveConstraints'](), Ge(A => {
            if (!ts(A, T, null)) return;
            const N = this['getAxisMotionValue'](A),
                {
                    min: C,
                    max: h
                } = this['constraints'][A];
            N['set'](te(C, h, R[A]));
        });
    } ['addListeners']() {
        if (!this['visualElement']['current']) return;
        lj['set'](this['visualElement'], this);
        const T = this['visualElement']['current'],
            b = Jr(T, 'pointerdown', C => {
                const {
                    drag: h,
                    dragListener: L = !0x0
                } = this['getProps']();
                h && L && this['start'](C);
            }),
            w = () => {
                const {
                    dragConstraints: C
                } = this['getProps']();
                qn(C) && C['current'] && (this['constraints'] = this['resolveRefConstraints']());
            },
            {
                projection: R
            } = this['visualElement'],
            p = R['addEventListener']('measure', w);
        R && !R['layout'] && (R['root'] && R['root']['updateScroll'](), R['updateLayout']()), Z['read'](w);
        const A = bi(window, 'resize', () => this['scalePositionWithinConstraints']()),
            N = R['addEventListener']('didUpdate', ({
                delta: C,
                hasLayoutChanged: h
            }) => {
                this['isDragging'] && h && (Ge(L => {
                    const z = this['getAxisMotionValue'](L);
                    z && (this['originPoint'][L] += C[L]['translate'], z['set'](z['get']() + C[L]['translate']));
                }), this['visualElement']['render']());
            });
        return () => {
            A(), b(), p(), N && N();
        };
    } ['getProps']() {
        const T = this['visualElement']['getProps'](),
            {
                drag: b = !0x1,
                dragDirectionLock: w = !0x1,
                dragPropagation: R = !0x1,
                dragConstraints: p = !0x1,
                dragElastic: A = vl,
                dragMomentum: N = !0x0
            } = T;
        return {
            ...T,
            'drag': b,
            'dragDirectionLock': w,
            'dragPropagation': R,
            'dragConstraints': p,
            'dragElastic': A,
            'dragMomentum': N
        };
    }
}

function ts(T, b, w) {
    return (b === !0x0 || b === T) && (w === null || w === T);
}

function cj(T, b = 0xa) {
    let w = null;
    return Math['abs'](T['y']) > b ? w = 'y' : Math['abs'](T['x']) > b && (w = 'x'), w;
}
class dj extends fn {
    constructor(T) {
        super(T), this['removeGroupControls'] = Oe, this['removeListeners'] = Oe, this['controls'] = new uj(T);
    } ['mount']() {
        const {
            dragControls: T
        } = this['node']['getProps']();
        T && (this['removeGroupControls'] = T['subscribe'](this['controls'])), this['removeListeners'] = this['controls']['addListeners']() || Oe;
    } ['unmount']() {
        this['removeGroupControls'](), this['removeListeners']();
    }
}
const mh = T => (b, w) => {
    T && Z['postRender'](() => T(b, w));
};
class hj extends fn {
    constructor() {
        super(...arguments), this['removePointerDownListener'] = Oe;
    } ['onPointerDown'](T) {
        this['session'] = new S0(T, this['createPanHandlers'](), {
            'transformPagePoint': this['node']['getTransformPagePoint'](),
            'contextWindow': R0(this['node'])
        });
    } ['createPanHandlers']() {
        const {
            onPanSessionStart: T,
            onPanStart: b,
            onPan: w,
            onPanEnd: R
        } = this['node']['getProps']();
        return {
            'onSessionStart': mh(T),
            'onStart': mh(b),
            'onMove': w,
            'onEnd': (p, A) => {
                delete this['session'], R && Z['postRender'](() => R(p, A));
            }
        };
    } ['mount']() {
        this['removePointerDownListener'] = Jr(this['node']['current'], 'pointerdown', T => this['onPointerDown'](T));
    } ['update']() {
        this['session'] && this['session']['updateHandlers'](this['createPanHandlers']());
    } ['unmount']() {
        this['removePointerDownListener'](), this['session'] && this['session']['end']();
    }
}
const ms = {
    'hasAnimatedSinceResize': !0x0,
    'hasEverUpdated': !0x1
};

function gh(T, b) {
    return b['max'] === b['min'] ? 0x0 : T / (b['max'] - b['min']) * 0x64;
}
const Lr = {
        'correct': (T, b) => {
            if (!b['target']) return T;
            if (typeof T == 'string')
                if (_['test'](T)) T = parseFloat(T);
                else return T;
            const w = gh(T, b['target']['x']),
                R = gh(T, b['target']['y']);
            return w + '%\x20' + R + '%';
        }
    },
    fj = {
        'correct': (T, {
            treeScale: b,
            projectionDelta: w
        }) => {
            const R = T,
                p = un['parse'](T);
            if (p['length'] > 0x5) return R;
            const A = un['createTransformer'](T),
                N = typeof p[0x0] != 'number' ? 0x1 : 0x0,
                C = w['x']['scale'] * b['x'],
                h = w['y']['scale'] * b['y'];
            p[0x0 + N] /= C, p[0x1 + N] /= h;
            const L = te(C, h, 0.5);
            return typeof p[0x2 + N] == 'number' && (p[0x2 + N] /= L), typeof p[0x3 + N] == 'number' && (p[0x3 + N] /= L), A(p);
        }
    };
class pj extends P['Component'] {
    ['componentDidMount']() {
        const {
            visualElement: T,
            layoutGroup: b,
            switchLayoutGroup: w,
            layoutId: R
        } = this['props'], {
            projection: p
        } = T;
        I1(mj), p && (b['group'] && b['group']['add'](p), w && w['register'] && R && w['register'](p), p['root']['didUpdate'](), p['addEventListener']('animationComplete', () => {
            this['safeToRemove']();
        }), p['setOptions']({
            ...p['options'],
            'onExitComplete': () => this['safeToRemove']()
        })), ms['hasEverUpdated'] = !0x0;
    } ['getSnapshotBeforeUpdate'](T) {
        const {
            layoutDependency: b,
            visualElement: w,
            drag: R,
            isPresent: p
        } = this['props'], A = w['projection'];
        return A && (A['isPresent'] = p, R || T['layoutDependency'] !== b || b === void 0x0 ? A['willUpdate']() : this['safeToRemove'](), T['isPresent'] !== p && (p ? A['promote']() : A['relegate']() || Z['postRender'](() => {
            const N = A['getStack']();
            (!N || !N['members']['length']) && this['safeToRemove']();
        }))), null;
    } ['componentDidUpdate']() {
        const {
            projection: T
        } = this['props']['visualElement'];
        T && (T['root']['didUpdate'](), bu['postRender'](() => {
            !T['currentAnimation'] && T['isLead']() && this['safeToRemove']();
        }));
    } ['componentWillUnmount']() {
        const {
            visualElement: T,
            layoutGroup: b,
            switchLayoutGroup: w
        } = this['props'], {
            projection: R
        } = T;
        R && (R['scheduleCheckAfterUnmount'](), b && b['group'] && b['group']['remove'](R), w && w['deregister'] && w['deregister'](R));
    } ['safeToRemove']() {
        const {
            safeToRemove: T
        } = this['props'];
        T && T();
    } ['render']() {
        return null;
    }
}

function A0(T) {
    const [b, w] = mm(), R = P['useContext'](gu);
    return o['jsx'](pj, {
        ...T,
        'layoutGroup': R,
        'switchLayoutGroup': P['useContext'](Nm),
        'isPresent': b,
        'safeToRemove': w
    });
}
const mj = {
    'borderRadius': {
        ...Lr,
        'applyTo': ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius']
    },
    'borderTopLeftRadius': Lr,
    'borderTopRightRadius': Lr,
    'borderBottomLeftRadius': Lr,
    'borderBottomRightRadius': Lr,
    'boxShadow': fj
};

function gj(T, b, w) {
    const R = Ce(T) ? T : Ni(T);
    return R['start'](Yu('', R, b, w)), R['animation'];
}

function vj(T) {
    return T instanceof SVGElement && T['tagName'] !== 'svg';
}
const yj = (T, b) => T['depth'] - b['depth'];
class xj {
    constructor() {
        this['children'] = [], this['isDirty'] = !0x1;
    } ['add'](T) {
        Fu(this['children'], T), this['isDirty'] = !0x0;
    } ['remove'](T) {
        Ou(this['children'], T), this['isDirty'] = !0x0;
    } ['forEach'](T) {
        this['isDirty'] && this['children']['sort'](yj), this['isDirty'] = !0x1, this['children']['forEach'](T);
    }
}

function wj(T, b) {
    const w = xt['now'](),
        R = ({
            timestamp: p
        }) => {
            const A = p - w;
            A >= b && (ln(R), T(A - b));
        };
    return Z['read'](R, !0x0), () => ln(R);
}
const D0 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
    jj = D0['length'],
    vh = T => typeof T == 'string' ? parseFloat(T) : T,
    yh = T => typeof T == 'number' || _['test'](T);

function Nj(T, b, w, R, p, A) {
    p ? (T['opacity'] = te(0x0, w['opacity'] !== void 0x0 ? w['opacity'] : 0x1, Sj(R)), T['opacityExit'] = te(b['opacity'] !== void 0x0 ? b['opacity'] : 0x1, 0x0, bj(R))) : A && (T['opacity'] = te(b['opacity'] !== void 0x0 ? b['opacity'] : 0x1, w['opacity'] !== void 0x0 ? w['opacity'] : 0x1, R));
    for (let N = 0x0; N < jj; N++) {
        const C = 'border' + D0[N] + 'Radius';
        let h = xh(b, C),
            L = xh(w, C);
        if (h === void 0x0 && L === void 0x0) continue;
        h || (h = 0x0), L || (L = 0x0), h === 0x0 || L === 0x0 || yh(h) === yh(L) ? (T[C] = Math['max'](te(vh(h), vh(L), R), 0x0), (yt['test'](L) || yt['test'](h)) && (T[C] += '%')) : T[C] = L;
    }(b['rotate'] || w['rotate']) && (T['rotate'] = te(b['rotate'] || 0x0, w['rotate'] || 0x0, R));
}

function xh(T, b) {
    return T[b] !== void 0x0 ? T[b] : T['borderRadius'];
}
const Sj = L0(0x0, 0.5, Jm),
    bj = L0(0.5, 0.95, Oe);

function L0(T, b, w) {
    return R => R < T ? 0x0 : R > b ? 0x1 : w(vr(T, b, R));
}

function wh(T, b) {
    T['min'] = b['min'], T['max'] = b['max'];
}

function Ke(T, b) {
    wh(T['x'], b['x']), wh(T['y'], b['y']);
}

function jh(T, b) {
    T['translate'] = b['translate'], T['scale'] = b['scale'], T['originPoint'] = b['originPoint'], T['origin'] = b['origin'];
}

function Nh(T, b, w, R, p) {
    return T -= b, T = Zs(T, 0x1 / w, R), p !== void 0x0 && (T = Zs(T, 0x1 / p, R)), T;
}

function kj(T, b = 0x0, w = 0x1, R = 0.5, p, A = T, N = T) {
    if (yt['test'](b) && (b = parseFloat(b), b = te(N['min'], N['max'], b / 0x64) - N['min']), typeof b != 'number') return;
    let C = te(A['min'], A['max'], R);
    T === A && (C -= b), T['min'] = Nh(T['min'], b, w, C, p), T['max'] = Nh(T['max'], b, w, C, p);
}

function Sh(T, b, [w, R, p], A, N) {
    kj(T, b[w], b[R], b[p], b['scale'], A, N);
}
const Cj = ['x', 'scaleX', 'originX'],
    Tj = ['y', 'scaleY', 'originY'];

function bh(T, b, w, R) {
    Sh(T['x'], b, Cj, w ? w['x'] : void 0x0, R ? R['x'] : void 0x0), Sh(T['y'], b, Tj, w ? w['y'] : void 0x0, R ? R['y'] : void 0x0);
}

function kh(T) {
    return T['translate'] === 0x0 && T['scale'] === 0x1;
}

function I0(T) {
    return kh(T['x']) && kh(T['y']);
}

function Ch(T, b) {
    return T['min'] === b['min'] && T['max'] === b['max'];
}

function Pj(T, b) {
    return Ch(T['x'], b['x']) && Ch(T['y'], b['y']);
}

function Th(T, b) {
    return Math['round'](T['min']) === Math['round'](b['min']) && Math['round'](T['max']) === Math['round'](b['max']);
}

function V0(T, b) {
    return Th(T['x'], b['x']) && Th(T['y'], b['y']);
}

function Ph(T) {
    return Be(T['x']) / Be(T['y']);
}

function Eh(T, b) {
    return T['translate'] === b['translate'] && T['scale'] === b['scale'] && T['originPoint'] === b['originPoint'];
}
class Ej {
    constructor() {
        this['members'] = [];
    } ['add'](T) {
        Fu(this['members'], T), T['scheduleRender']();
    } ['remove'](T) {
        if (Ou(this['members'], T), T === this['prevLead'] && (this['prevLead'] = void 0x0), T === this['lead']) {
            const b = this['members'][this['members']['length'] - 0x1];
            b && this['promote'](b);
        }
    } ['relegate'](T) {
        const b = this['members']['findIndex'](R => T === R);
        if (b === 0x0) return !0x1;
        let w;
        for (let R = b; R >= 0x0; R--) {
            const p = this['members'][R];
            if (p['isPresent'] !== !0x1) {
                w = p;
                break;
            }
        }
        return w ? (this['promote'](w), !0x0) : !0x1;
    } ['promote'](T, b) {
        const w = this['lead'];
        if (T !== w && (this['prevLead'] = w, this['lead'] = T, T['show'](), w)) {
            w['instance'] && w['scheduleRender'](), T['scheduleRender'](), T['resumeFrom'] = w, b && (T['resumeFrom']['preserveOpacity'] = !0x0), w['snapshot'] && (T['snapshot'] = w['snapshot'], T['snapshot']['latestValues'] = w['animationValues'] || w['latestValues']), T['root'] && T['root']['isUpdating'] && (T['isLayoutDirty'] = !0x0);
            const {
                crossfade: R
            } = T['options'];
            R === !0x1 && w['hide']();
        }
    } ['exitAnimationComplete']() {
        this['members']['forEach'](T => {
            const {
                options: b,
                resumingFrom: w
            } = T;
            b['onExitComplete'] && b['onExitComplete'](), w && w['options']['onExitComplete'] && w['options']['onExitComplete']();
        });
    } ['scheduleRender']() {
        this['members']['forEach'](T => {
            T['instance'] && T['scheduleRender'](!0x1);
        });
    } ['removeLeadSnapshot']() {
        this['lead'] && this['lead']['snapshot'] && (this['lead']['snapshot'] = void 0x0);
    }
}

function Mj(T, b, R) {
    let p = '';
    const A = T['x']['translate'] / b['x'],
        N = T['y']['translate'] / b['y'],
        C = (R == null ? void 0x0 : R['z']) || 0x0;
    if ((A || N || C) && (p = 'translate3d(' + A + 'px,\x20' + N + 'px,\x20' + C + 'px)\x20'), (b['x'] !== 0x1 || b['y'] !== 0x1) && (p += 'scale(' + 0x1 / b['x'] + ',\x20' + 0x1 / b['y'] + ')\x20'), R) {
        const {
            transformPerspective: I,
            rotate: K,
            rotateX: O,
            rotateY: x,
            skewX: V,
            skewY: S
        } = R;
        I && (p = 'perspective(' + I + 'px)\x20' + p), K && (p += 'rotate(' + K + 'deg)\x20'), O && (p += 'rotateX(' + O + 'deg)\x20'), x && (p += 'rotateY(' + x + 'deg)\x20'), V && (p += 'skewX(' + V + 'deg)\x20'), S && (p += 'skewY(' + S + 'deg)\x20');
    }
    const L = T['x']['scale'] * b['x'],
        z = T['y']['scale'] * b['y'];
    return (L !== 0x1 || z !== 0x1) && (p += 'scale(' + L + ',\x20' + z + ')'), p || 'none';
}
const yn = {
        'type': 'projectionFrame',
        'totalNodes': 0x0,
        'resolvedTargetDeltas': 0x0,
        'recalculatedProjection': 0x0
    },
    Br = typeof window < 'u' && window['MotionDebug'] !== void 0x0,
    no = ['', 'X', 'Y', 'Z'],
    Rj = {
        'visibility': 'hidden'
    },
    Mh = 0x3e8;
let Aj = 0x0;

function ro(T, b, w, R) {
    const {
        latestValues: p
    } = b;
    p[T] && (w[T] = p[T], b['setStaticValue'](T, 0x0), R && (R[T] = 0x0));
}

function _0(T) {
    if (T['hasCheckedOptimisedAppear'] = !0x0, T['root'] === T) return;
    const {
        visualElement: b
    } = T['options'];
    if (!b) return;
    const w = $m(b);
    if (window['MotionHasOptimisedAnimation'](w, 'transform')) {
        const {
            layout: p,
            layoutId: A
        } = T['options'];
        window['MotionCancelOptimisedAnimation'](w, 'transform', Z, !(p || A));
    }
    const {
        parent: R
    } = T;
    R && !R['hasCheckedOptimisedAppear'] && _0(R);
}

function F0({
    attachResizeListener: T,
    defaultParent: b,
    measureScroll: w,
    checkIsScrollRoot: R,
    resetTransform: p
}) {
    return class {
        constructor(A = {}, N = b == null ? void 0x0 : b()) {
            this['id'] = Aj++, this['animationId'] = 0x0, this['children'] = new Set(), this['options'] = {}, this['isTreeAnimating'] = !0x1, this['isAnimationBlocked'] = !0x1, this['isLayoutDirty'] = !0x1, this['isProjectionDirty'] = !0x1, this['isSharedProjectionDirty'] = !0x1, this['isTransformDirty'] = !0x1, this['updateManuallyBlocked'] = !0x1, this['updateBlockedByResize'] = !0x1, this['isUpdating'] = !0x1, this['isSVG'] = !0x1, this['needsReset'] = !0x1, this['shouldResetTransform'] = !0x1, this['hasCheckedOptimisedAppear'] = !0x1, this['treeScale'] = {
                'x': 0x1,
                'y': 0x1
            }, this['eventHandlers'] = new Map(), this['hasTreeAnimated'] = !0x1, this['updateScheduled'] = !0x1, this['scheduleUpdate'] = () => this['update'](), this['projectionUpdateScheduled'] = !0x1, this['checkUpdateFailed'] = () => {
                this['isUpdating'] && (this['isUpdating'] = !0x1, this['clearAllSnapshots']());
            }, this['updateProjection'] = () => {
                this['projectionUpdateScheduled'] = !0x1, Br && (yn['totalNodes'] = yn['resolvedTargetDeltas'] = yn['recalculatedProjection'] = 0x0), this['nodes']['forEach'](Ij), this['nodes']['forEach'](zj), this['nodes']['forEach'](Bj), this['nodes']['forEach'](Vj), Br && window['MotionDebug']['record'](yn);
            }, this['resolvedRelativeTargetAt'] = 0x0, this['hasProjected'] = !0x1, this['isVisible'] = !0x0, this['animationProgress'] = 0x0, this['sharedNodes'] = new Map(), this['latestValues'] = A, this['root'] = N ? N['root'] || N : this, this['path'] = N ? [...N['path'], N] : [], this['parent'] = N, this['depth'] = N ? N['depth'] + 0x1 : 0x0;
            for (let C = 0x0; C < this['path']['length']; C++) this['path'][C]['shouldResetTransform'] = !0x0;
            this['root'] === this && (this['nodes'] = new xj());
        } ['addEventListener'](A, N) {
            return this['eventHandlers']['has'](A) || this['eventHandlers']['set'](A, new zu()), this['eventHandlers']['get'](A)['add'](N);
        } ['notifyListeners'](A, ...N) {
            const C = this['eventHandlers']['get'](A);
            C && C['notify'](...N);
        } ['hasListeners'](A) {
            return this['eventHandlers']['has'](A);
        } ['mount'](A, N = this['root']['hasTreeAnimated']) {
            if (this['instance']) return;
            this['isSVG'] = vj(A), this['instance'] = A;
            const {
                layoutId: C,
                layout: L,
                visualElement: z
            } = this['options'];
            if (z && !z['current'] && z['mount'](A), this['root']['nodes']['add'](this), this['parent'] && this['parent']['children']['add'](this), N && (L || C) && (this['isLayoutDirty'] = !0x0), T) {
                let I;
                const K = () => this['root']['updateBlockedByResize'] = !0x1;
                T(A, () => {
                    this['root']['updateBlockedByResize'] = !0x0, I && I(), I = wj(K, 0xfa), ms['hasAnimatedSinceResize'] && (ms['hasAnimatedSinceResize'] = !0x1, this['nodes']['forEach'](Ah));
                });
            }
            C && this['root']['registerSharedNode'](C, this), this['options']['animate'] !== !0x1 && z && (C || L) && this['addEventListener']('didUpdate', ({
                delta: O,
                hasLayoutChanged: V,
                hasRelativeTargetChanged: S,
                layout: J
            }) => {
                if (this['isTreeAnimationBlocked']()) {
                    this['target'] = void 0x0, this['relativeTarget'] = void 0x0;
                    return;
                }
                const B = this['options']['transition'] || z['getDefaultTransition']() || Kj,
                    {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: j
                    } = z['getProps'](),
                    M = !this['targetLayout'] || !V0(this['targetLayout'], J) || S,
                    U = !V && S;
                if (this['options']['layoutRoot'] || this['resumeFrom'] && this['resumeFrom']['instance'] || U || V && (M || !this['currentAnimation'])) {
                    this['resumeFrom'] && (this['resumingFrom'] = this['resumeFrom'], this['resumingFrom']['resumingFrom'] = void 0x0), this['setAnimationOrigin'](O, U);
                    const Y0 = {
                        ...Lu(B, 'layout'),
                        'onPlay': s,
                        'onComplete': j
                    };
                    (z['shouldReduceMotion'] || this['options']['layoutRoot']) && (Y0['delay'] = 0x0, Y0['type'] = !0x1), this['startAnimation'](Y0);
                } else V || Ah(this), this['isLead']() && this['options']['onExitComplete'] && this['options']['onExitComplete']();
                this['targetLayout'] = J;
            });
        } ['unmount']() {
            this['options']['layoutId'] && this['willUpdate'](), this['root']['nodes']['remove'](this);
            const A = this['getStack']();
            A && A['remove'](this), this['parent'] && this['parent']['children']['delete'](this), this['instance'] = void 0x0, ln(this['updateProjection']);
        } ['blockUpdate']() {
            this['updateManuallyBlocked'] = !0x0;
        } ['unblockUpdate']() {
            this['updateManuallyBlocked'] = !0x1;
        } ['isUpdateBlocked']() {
            return this['updateManuallyBlocked'] || this['updateBlockedByResize'];
        } ['isTreeAnimationBlocked']() {
            return this['isAnimationBlocked'] || this['parent'] && this['parent']['isTreeAnimationBlocked']() || !0x1;
        } ['startUpdate']() {
            this['isUpdateBlocked']() || (this['isUpdating'] = !0x0, this['nodes'] && this['nodes']['forEach'](Uj), this['animationId']++);
        } ['getTransformTemplate']() {
            const {
                visualElement: A
            } = this['options'];
            return A && A['getProps']()['transformTemplate'];
        } ['willUpdate'](A = !0x0) {
            if (this['root']['hasTreeAnimated'] = !0x0, this['root']['isUpdateBlocked']()) {
                this['options']['onExitComplete'] && this['options']['onExitComplete']();
                return;
            }
            if (window['MotionCancelOptimisedAnimation'] && !this['hasCheckedOptimisedAppear'] && _0(this), !this['root']['isUpdating'] && this['root']['startUpdate'](), this['isLayoutDirty']) return;
            this['isLayoutDirty'] = !0x0;
            for (let z = 0x0; z < this['path']['length']; z++) {
                const I = this['path'][z];
                I['shouldResetTransform'] = !0x0, I['updateScroll']('snapshot'), I['options']['layoutRoot'] && I['willUpdate'](!0x1);
            }
            const {
                layoutId: N,
                layout: C
            } = this['options'];
            if (N === void 0x0 && !C) return;
            const L = this['getTransformTemplate']();
            this['prevTransformTemplateValue'] = L ? L(this['latestValues'], '') : void 0x0, this['updateSnapshot'](), A && this['notifyListeners']('willUpdate');
        } ['update']() {
            if (this['updateScheduled'] = !0x1, this['isUpdateBlocked']()) {
                this['unblockUpdate'](), this['clearAllSnapshots'](), this['nodes']['forEach'](Rh);
                return;
            }
            this['isUpdating'] || this['nodes']['forEach'](Fj), this['isUpdating'] = !0x1, this['nodes']['forEach'](Oj), this['nodes']['forEach'](Dj), this['nodes']['forEach'](Lj), this['clearAllSnapshots']();
            const A = xt['now']();
            xe['delta'] = Vt(0x0, 0x3e8 / 0x3c, A - xe['timestamp']), xe['timestamp'] = A, xe['isProcessing'] = !0x0, Xa['update']['process'](xe), Xa['preRender']['process'](xe), Xa['render']['process'](xe), xe['isProcessing'] = !0x1;
        } ['didUpdate']() {
            this['updateScheduled'] || (this['updateScheduled'] = !0x0, bu['read'](this['scheduleUpdate']));
        } ['clearAllSnapshots']() {
            this['nodes']['forEach'](_j), this['sharedNodes']['forEach'](Hj);
        } ['scheduleUpdateProjection']() {
            this['projectionUpdateScheduled'] || (this['projectionUpdateScheduled'] = !0x0, Z['preRender'](this['updateProjection'], !0x1, !0x0));
        } ['scheduleCheckAfterUnmount']() {
            Z['postRender'](() => {
                this['isLayoutDirty'] ? this['root']['didUpdate']() : this['root']['checkUpdateFailed']();
            });
        } ['updateSnapshot']() {
            this['snapshot'] || !this['instance'] || (this['snapshot'] = this['measure']());
        } ['updateLayout']() {
            if (!this['instance'] || (this['updateScroll'](), !(this['options']['alwaysMeasureLayout'] && this['isLead']()) && !this['isLayoutDirty'])) return;
            if (this['resumeFrom'] && !this['resumeFrom']['instance'])
                for (let C = 0x0; C < this['path']['length']; C++) this['path'][C]['updateScroll']();
            const A = this['layout'];
            this['layout'] = this['measure'](!0x1), this['layoutCorrected'] = le(), this['isLayoutDirty'] = !0x1, this['projectionDelta'] = void 0x0, this['notifyListeners']('measure', this['layout']['layoutBox']);
            const {
                visualElement: N
            } = this['options'];
            N && N['notify']('LayoutMeasure', this['layout']['layoutBox'], A ? A['layoutBox'] : void 0x0);
        } ['updateScroll'](A = 'measure') {
            let N = !!(this['options']['layoutScroll'] && this['instance']);
            if (this['scroll'] && this['scroll']['animationId'] === this['root']['animationId'] && this['scroll']['phase'] === A && (N = !0x1), N) {
                const C = R(this['instance']);
                this['scroll'] = {
                    'animationId': this['root']['animationId'],
                    'phase': A,
                    'isRoot': C,
                    'offset': w(this['instance']),
                    'wasRoot': this['scroll'] ? this['scroll']['isRoot'] : C
                };
            }
        } ['resetTransform']() {
            if (!p) return;
            const A = this['isLayoutDirty'] || this['shouldResetTransform'] || this['options']['alwaysMeasureLayout'],
                N = this['projectionDelta'] && !I0(this['projectionDelta']),
                C = this['getTransformTemplate'](),
                h = C ? C(this['latestValues'], '') : void 0x0,
                L = h !== this['prevTransformTemplateValue'];
            A && (N || vn(this['latestValues']) || L) && (p(this['instance'], h), this['shouldResetTransform'] = !0x1, this['scheduleRender']());
        } ['measure'](A = !0x0) {
            const N = this['measurePageBox']();
            let C = this['removeElementScroll'](N);
            return A && (C = this['removeTransform'](C)), Xj(C), {
                'animationId': this['root']['animationId'],
                'measuredBox': N,
                'layoutBox': C,
                'latestValues': {},
                'source': this['id']
            };
        } ['measurePageBox']() {
            var A;
            const {
                visualElement: N
            } = this['options'];
            if (!N) return le();
            const C = N['measureViewportBox']();
            if (!(((A = this['scroll']) === null || A === void 0x0 ? void 0x0 : A['wasRoot']) || this['path']['some'](Gj))) {
                const {
                    scroll: h
                } = this['root'];
                h && (nr(C['x'], h['offset']['x']), nr(C['y'], h['offset']['y']));
            }
            return C;
        } ['removeElementScroll'](A) {
            var N;
            const C = le();
            if (Ke(C, A), !((N = this['scroll']) === null || N === void 0x0) && N['wasRoot']) return C;
            for (let L = 0x0; L < this['path']['length']; L++) {
                const z = this['path'][L],
                    {
                        scroll: I,
                        options: K
                    } = z;
                z !== this['root'] && I && K['layoutScroll'] && (I['wasRoot'] && Ke(C, A), nr(C['x'], I['offset']['x']), nr(C['y'], I['offset']['y']));
            }
            return C;
        } ['applyTransform'](A, N = !0x1) {
            const C = le();
            Ke(C, A);
            for (let h = 0x0; h < this['path']['length']; h++) {
                const L = this['path'][h];
                !N && L['options']['layoutScroll'] && L['scroll'] && L !== L['root'] && rr(C, {
                    'x': -L['scroll']['offset']['x'],
                    'y': -L['scroll']['offset']['y']
                }), vn(L['latestValues']) && rr(C, L['latestValues']);
            }
            return vn(this['latestValues']) && rr(C, this['latestValues']), C;
        } ['removeTransform'](A) {
            const N = le();
            Ke(N, A);
            for (let C = 0x0; C < this['path']['length']; C++) {
                const L = this['path'][C];
                if (!L['instance'] || !vn(L['latestValues'])) continue;
                yl(L['latestValues']) && L['updateSnapshot']();
                const z = le(),
                    I = L['measurePageBox']();
                Ke(z, I), bh(N, L['latestValues'], L['snapshot'] ? L['snapshot']['layoutBox'] : void 0x0, z);
            }
            return vn(this['latestValues']) && bh(N, this['latestValues']), N;
        } ['setTargetDelta'](A) {
            this['targetDelta'] = A, this['root']['scheduleUpdateProjection'](), this['isProjectionDirty'] = !0x0;
        } ['setOptions'](A) {
            this['options'] = {
                ...this['options'],
                ...A,
                'crossfade': A['crossfade'] !== void 0x0 ? A['crossfade'] : !0x0
            };
        } ['clearMeasurements']() {
            this['scroll'] = void 0x0, this['layout'] = void 0x0, this['snapshot'] = void 0x0, this['prevTransformTemplateValue'] = void 0x0, this['targetDelta'] = void 0x0, this['target'] = void 0x0, this['isLayoutDirty'] = !0x1;
        } ['forceRelativeParentToResolveTarget']() {
            this['relativeParent'] && this['relativeParent']['resolvedRelativeTargetAt'] !== xe['timestamp'] && this['relativeParent']['resolveTargetDelta'](!0x0);
        } ['resolveTargetDelta'](A = !0x1) {
            var N;
            const C = this['getLead']();
            this['isProjectionDirty'] || (this['isProjectionDirty'] = C['isProjectionDirty']), this['isTransformDirty'] || (this['isTransformDirty'] = C['isTransformDirty']), this['isSharedProjectionDirty'] || (this['isSharedProjectionDirty'] = C['isSharedProjectionDirty']);
            const L = !!this['resumingFrom'] || this !== C;
            if (!(A || L && this['isSharedProjectionDirty'] || this['isProjectionDirty'] || !((N = this['parent']) === null || N === void 0x0) && N['isProjectionDirty'] || this['attemptToResolveRelativeTarget'] || this['root']['updateBlockedByResize'])) return;
            const {
                layout: z,
                layoutId: I
            } = this['options'];
            if (!(!this['layout'] || !(z || I))) {
                if (this['resolvedRelativeTargetAt'] = xe['timestamp'], !this['targetDelta'] && !this['relativeTarget']) {
                    const K = this['getClosestProjectingParent']();
                    K && K['layout'] && this['animationProgress'] !== 0x1 ? (this['relativeParent'] = K, this['forceRelativeParentToResolveTarget'](), this['relativeTarget'] = le(), this['relativeTargetOrigin'] = le(), ei(this['relativeTargetOrigin'], this['layout']['layoutBox'], K['layout']['layoutBox']), Ke(this['relativeTarget'], this['relativeTargetOrigin'])) : this['relativeParent'] = this['relativeTarget'] = void 0x0;
                }
                if (!(!this['relativeTarget'] && !this['targetDelta'])) {
                    if (this['target'] || (this['target'] = le(), this['targetWithTransforms'] = le()), this['relativeTarget'] && this['relativeTargetOrigin'] && this['relativeParent'] && this['relativeParent']['target'] ? (this['forceRelativeParentToResolveTarget'](), Q2(this['target'], this['relativeTarget'], this['relativeParent']['target'])) : this['targetDelta'] ? (this['resumingFrom'] ? this['target'] = this['applyTransform'](this['layout']['layoutBox']) : Ke(this['target'], this['layout']['layoutBox']), E0(this['target'], this['targetDelta'])) : Ke(this['target'], this['layout']['layoutBox']), this['attemptToResolveRelativeTarget']) {
                        this['attemptToResolveRelativeTarget'] = !0x1;
                        const O = this['getClosestProjectingParent']();
                        O && !!O['resumingFrom'] == !!this['resumingFrom'] && !O['options']['layoutScroll'] && O['target'] && this['animationProgress'] !== 0x1 ? (this['relativeParent'] = O, this['forceRelativeParentToResolveTarget'](), this['relativeTarget'] = le(), this['relativeTargetOrigin'] = le(), ei(this['relativeTargetOrigin'], this['target'], O['target']), Ke(this['relativeTarget'], this['relativeTargetOrigin'])) : this['relativeParent'] = this['relativeTarget'] = void 0x0;
                    }
                    Br && yn['resolvedTargetDeltas']++;
                }
            }
        } ['getClosestProjectingParent']() {
            if (!(!this['parent'] || yl(this['parent']['latestValues']) || P0(this['parent']['latestValues']))) return this['parent']['isProjecting']() ? this['parent'] : this['parent']['getClosestProjectingParent']();
        } ['isProjecting']() {
            return !!((this['relativeTarget'] || this['targetDelta'] || this['options']['layoutRoot']) && this['layout']);
        } ['calcProjection']() {
            var A;
            const N = this['getLead'](),
                C = !!this['resumingFrom'] || this !== N;
            let L = !0x0;
            if ((this['isProjectionDirty'] || !((A = this['parent']) === null || A === void 0x0) && A['isProjectionDirty']) && (L = !0x1), C && (this['isSharedProjectionDirty'] || this['isTransformDirty']) && (L = !0x1), this['resolvedRelativeTargetAt'] === xe['timestamp'] && (L = !0x1), L) return;
            const {
                layout: z,
                layoutId: I
            } = this['options'];
            if (this['isTreeAnimating'] = !!(this['parent'] && this['parent']['isTreeAnimating'] || this['currentAnimation'] || this['pendingAnimation']), this['isTreeAnimating'] || (this['targetDelta'] = this['relativeTarget'] = void 0x0), !this['layout'] || !(z || I)) return;
            Ke(this['layoutCorrected'], this['layout']['layoutBox']);
            const K = this['treeScale']['x'],
                O = this['treeScale']['y'];
            aj(this['layoutCorrected'], this['treeScale'], this['path'], C), N['layout'] && !N['target'] && (this['treeScale']['x'] !== 0x1 || this['treeScale']['y'] !== 0x1) && (N['target'] = N['layout']['layoutBox'], N['targetWithTransforms'] = le());
            const {
                target: x
            } = N;
            if (!x) {
                this['prevProjectionDelta'] && (this['createProjectionDeltas'](), this['scheduleRender']());
                return;
            }!this['projectionDelta'] || !this['prevProjectionDelta'] ? this['createProjectionDeltas']() : (jh(this['prevProjectionDelta']['x'], this['projectionDelta']['x']), jh(this['prevProjectionDelta']['y'], this['projectionDelta']['y'])), qr(this['projectionDelta'], this['layoutCorrected'], x, this['latestValues']), (this['treeScale']['x'] !== K || this['treeScale']['y'] !== O || !Eh(this['projectionDelta']['x'], this['prevProjectionDelta']['x']) || !Eh(this['projectionDelta']['y'], this['prevProjectionDelta']['y'])) && (this['hasProjected'] = !0x0, this['scheduleRender'](), this['notifyListeners']('projectionUpdate', x)), Br && yn['recalculatedProjection']++;
        } ['hide']() {
            this['isVisible'] = !0x1;
        } ['show']() {
            this['isVisible'] = !0x0;
        } ['scheduleRender'](A = !0x0) {
            var N;
            if ((N = this['options']['visualElement']) === null || N === void 0x0 || N['scheduleRender'](), A) {
                const C = this['getStack']();
                C && C['scheduleRender']();
            }
            this['resumingFrom'] && !this['resumingFrom']['instance'] && (this['resumingFrom'] = void 0x0);
        } ['createProjectionDeltas']() {
            this['prevProjectionDelta'] = tr(), this['projectionDelta'] = tr(), this['projectionDeltaWithTransform'] = tr();
        } ['setAnimationOrigin'](A, C = !0x1) {
            const L = this['snapshot'],
                z = L ? L['latestValues'] : {},
                I = {
                    ...this['latestValues']
                },
                K = tr();
            (!this['relativeParent'] || !this['relativeParent']['options']['layoutRoot']) && (this['relativeTarget'] = this['relativeTargetOrigin'] = void 0x0), this['attemptToResolveRelativeTarget'] = !C;
            const O = le(),
                V = L ? L['source'] : void 0x0,
                S = this['layout'] ? this['layout']['source'] : void 0x0,
                J = V !== S,
                B = this['getStack'](),
                s = !B || B['members']['length'] <= 0x1,
                j = !!(J && !s && this['options']['crossfade'] === !0x0 && !this['path']['some']($j));
            this['animationProgress'] = 0x0;
            let M;
            this['mixTargetDelta'] = U => {
                const Y0 = U / 0x3e8;
                Dh(K['x'], A['x'], Y0), Dh(K['y'], A['y'], Y0), this['setTargetDelta'](K), this['relativeTarget'] && this['relativeTargetOrigin'] && this['layout'] && this['relativeParent'] && this['relativeParent']['layout'] && (ei(O, this['layout']['layoutBox'], this['relativeParent']['layout']['layoutBox']), Wj(this['relativeTarget'], this['relativeTargetOrigin'], O, Y0), M && Pj(this['relativeTarget'], M) && (this['isProjectionDirty'] = !0x1), M || (M = le()), Ke(M, this['relativeTarget'])), J && (this['animationValues'] = I, Nj(I, z, this['latestValues'], Y0, j, s)), this['root']['scheduleUpdateProjection'](), this['scheduleRender'](), this['animationProgress'] = Y0;
            }, this['mixTargetDelta'](this['options']['layoutRoot'] ? 0x3e8 : 0x0);
        } ['startAnimation'](A) {
            this['notifyListeners']('animationStart'), this['currentAnimation'] && this['currentAnimation']['stop'](), this['resumingFrom'] && this['resumingFrom']['currentAnimation'] && this['resumingFrom']['currentAnimation']['stop'](), this['pendingAnimation'] && (ln(this['pendingAnimation']), this['pendingAnimation'] = void 0x0), this['pendingAnimation'] = Z['update'](() => {
                ms['hasAnimatedSinceResize'] = !0x0, this['currentAnimation'] = gj(0x0, Mh, {
                    ...A,
                    'onUpdate': N => {
                        this['mixTargetDelta'](N), A['onUpdate'] && A['onUpdate'](N);
                    },
                    'onComplete': () => {
                        A['onComplete'] && A['onComplete'](), this['completeAnimation']();
                    }
                }), this['resumingFrom'] && (this['resumingFrom']['currentAnimation'] = this['currentAnimation']), this['pendingAnimation'] = void 0x0;
            });
        } ['completeAnimation']() {
            this['resumingFrom'] && (this['resumingFrom']['currentAnimation'] = void 0x0, this['resumingFrom']['preserveOpacity'] = void 0x0);
            const A = this['getStack']();
            A && A['exitAnimationComplete'](), this['resumingFrom'] = this['currentAnimation'] = this['animationValues'] = void 0x0, this['notifyListeners']('animationComplete');
        } ['finishAnimation']() {
            this['currentAnimation'] && (this['mixTargetDelta'] && this['mixTargetDelta'](Mh), this['currentAnimation']['stop']()), this['completeAnimation']();
        } ['applyTransformsToTarget']() {
            const A = this['getLead']();
            let {
                targetWithTransforms: N,
                target: C,
                layout: L,
                latestValues: z
            } = A;
            if (!(!N || !C || !L)) {
                if (this !== A && this['layout'] && L && O0(this['options']['animationType'], this['layout']['layoutBox'], L['layoutBox'])) {
                    C = this['target'] || le();
                    const I = Be(this['layout']['layoutBox']['x']);
                    C['x']['min'] = A['target']['x']['min'], C['x']['max'] = C['x']['min'] + I;
                    const K = Be(this['layout']['layoutBox']['y']);
                    C['y']['min'] = A['target']['y']['min'], C['y']['max'] = C['y']['min'] + K;
                }
                Ke(N, C), rr(N, z), qr(this['projectionDeltaWithTransform'], this['layoutCorrected'], N, z);
            }
        } ['registerSharedNode'](A, N) {
            this['sharedNodes']['has'](A) || this['sharedNodes']['set'](A, new Ej()), this['sharedNodes']['get'](A)['add'](N);
            const C = N['options']['initialPromotionConfig'];
            N['promote']({
                'transition': C ? C['transition'] : void 0x0,
                'preserveFollowOpacity': C && C['shouldPreserveFollowOpacity'] ? C['shouldPreserveFollowOpacity'](N) : void 0x0
            });
        } ['isLead']() {
            const A = this['getStack']();
            return A ? A['lead'] === this : !0x0;
        } ['getLead']() {
            var A;
            const {
                layoutId: N
            } = this['options'];
            return N ? ((A = this['getStack']()) === null || A === void 0x0 ? void 0x0 : A['lead']) || this : this;
        } ['getPrevLead']() {
            var A;
            const {
                layoutId: N
            } = this['options'];
            return N ? (A = this['getStack']()) === null || A === void 0x0 ? void 0x0 : A['prevLead'] : void 0x0;
        } ['getStack']() {
            const {
                layoutId: A
            } = this['options'];
            if (A) return this['root']['sharedNodes']['get'](A);
        } ['promote']({
            needsReset: A,
            transition: N,
            preserveFollowOpacity: C
        } = {}) {
            const h = this['getStack']();
            h && h['promote'](this, C), A && (this['projectionDelta'] = void 0x0, this['needsReset'] = !0x0), N && this['setOptions']({
                'transition': N
            });
        } ['relegate']() {
            const A = this['getStack']();
            return A ? A['relegate'](this) : !0x1;
        } ['resetSkewAndRotation']() {
            const {
                visualElement: A
            } = this['options'];
            if (!A) return;
            let N = !0x1;
            const {
                latestValues: C
            } = A;
            if ((C['z'] || C['rotate'] || C['rotateX'] || C['rotateY'] || C['rotateZ'] || C['skewX'] || C['skewY']) && (N = !0x0), !N) return;
            const h = {};
            C['z'] && ro('z', A, h, this['animationValues']);
            for (let L = 0x0; L < no['length']; L++) ro('rotate' + no[L], A, h, this['animationValues']), ro('skew' + no[L], A, h, this['animationValues']);
            A['render']();
            for (const z in h) A['setStaticValue'](z, h[z]), this['animationValues'] && (this['animationValues'][z] = h[z]);
            A['scheduleRender']();
        } ['getProjectionStyles'](A) {
            var C, L;
            if (!this['instance'] || this['isSVG']) return;
            if (!this['isVisible']) return Rj;
            const z = {
                    'visibility': ''
                },
                I = this['getTransformTemplate']();
            if (this['needsReset']) return this['needsReset'] = !0x1, z['opacity'] = '', z['pointerEvents'] = fs(A == null ? void 0x0 : A['pointerEvents']) || '', z['transform'] = I ? I(this['latestValues'], '') : 'none', z;
            const K = this['getLead']();
            if (!this['projectionDelta'] || !this['layout'] || !K['target']) {
                const J = {};
                return this['options']['layoutId'] && (J['opacity'] = this['latestValues']['opacity'] !== void 0x0 ? this['latestValues']['opacity'] : 0x1, J['pointerEvents'] = fs(A == null ? void 0x0 : A['pointerEvents']) || ''), this['hasProjected'] && !vn(this['latestValues']) && (J['transform'] = I ? I({}, '') : 'none', this['hasProjected'] = !0x1), J;
            }
            const O = K['animationValues'] || K['latestValues'];
            this['applyTransformsToTarget'](), z['transform'] = Mj(this['projectionDeltaWithTransform'], this['treeScale'], O), I && (z['transform'] = I(O, z['transform']));
            const {
                x: V,
                y: S
            } = this['projectionDelta'];
            z['transformOrigin'] = V['origin'] * 0x64 + '%\x20' + S['origin'] * 0x64 + '%\x200', K['animationValues'] ? z['opacity'] = K === this ? (L = (C = O['opacity']) !== null && C !== void 0x0 ? C : this['latestValues']['opacity']) !== null && L !== void 0x0 ? L : 0x1 : this['preserveOpacity'] ? this['latestValues']['opacity'] : O['opacityExit'] : z['opacity'] = K === this ? O['opacity'] !== void 0x0 ? O['opacity'] : '' : O['opacityExit'] !== void 0x0 ? O['opacityExit'] : 0x0;
            for (const B in $s) {
                if (O[B] === void 0x0) continue;
                const {
                    correct: s,
                    applyTo: j
                } = $s[B], M = z['transform'] === 'none' ? O[B] : s(O[B], K);
                if (j) {
                    const U = j['length'];
                    for (let Y0 = 0x0; Y0 < U; Y0++) z[j[Y0]] = M;
                } else z[B] = M;
            }
            return this['options']['layoutId'] && (z['pointerEvents'] = K === this ? fs(A == null ? void 0x0 : A['pointerEvents']) || '' : 'none'), z;
        } ['clearSnapshot']() {
            this['resumeFrom'] = this['snapshot'] = void 0x0;
        } ['resetTree']() {
            this['root']['nodes']['forEach'](A => {
                var N;
                return (N = A['currentAnimation']) === null || N === void 0x0 ? void 0x0 : N['stop']();
            }), this['root']['nodes']['forEach'](Rh), this['root']['sharedNodes']['clear']();
        }
    };
}

function Dj(T) {
    T['updateLayout']();
}

function Lj(T) {
    var b;
    const R = ((b = T['resumeFrom']) === null || b === void 0x0 ? void 0x0 : b['snapshot']) || T['snapshot'];
    if (T['isLead']() && T['layout'] && R && T['hasListeners']('didUpdate')) {
        const {
            layoutBox: p,
            measuredBox: A
        } = T['layout'], {
            animationType: N
        } = T['options'], C = R['source'] !== T['layout']['source'];
        N === 'size' ? Ge(O => {
            const V = C ? R['measuredBox'][O] : R['layoutBox'][O],
                S = Be(V);
            V['min'] = p[O]['min'], V['max'] = V['min'] + S;
        }) : O0(N, R['layoutBox'], p) && Ge(O => {
            const V = C ? R['measuredBox'][O] : R['layoutBox'][O],
                S = Be(p[O]);
            V['max'] = V['min'] + S, T['relativeTarget'] && !T['currentAnimation'] && (T['isProjectionDirty'] = !0x0, T['relativeTarget'][O]['max'] = T['relativeTarget'][O]['min'] + S);
        });
        const L = tr();
        qr(L, p, R['layoutBox']);
        const z = tr();
        C ? qr(z, T['applyTransform'](A, !0x0), R['measuredBox']) : qr(z, p, R['layoutBox']);
        const I = !I0(L);
        let K = !0x1;
        if (!T['resumeFrom']) {
            const O = T['getClosestProjectingParent']();
            if (O && !O['resumeFrom']) {
                const {
                    snapshot: V,
                    layout: S
                } = O;
                if (V && S) {
                    const m = le();
                    ei(m, R['layoutBox'], V['layoutBox']);
                    const J = le();
                    ei(J, p, S['layoutBox']), V0(m, J) || (K = !0x0), O['options']['layoutRoot'] && (T['relativeTarget'] = J, T['relativeTargetOrigin'] = m, T['relativeParent'] = O);
                }
            }
        }
        T['notifyListeners']('didUpdate', {
            'layout': p,
            'snapshot': R,
            'delta': z,
            'layoutDelta': L,
            'hasLayoutChanged': I,
            'hasRelativeTargetChanged': K
        });
    } else if (T['isLead']()) {
        const {
            onExitComplete: B
        } = T['options'];
        B && B();
    }
    T['options']['transition'] = void 0x0;
}

function Ij(T) {
    Br && yn['totalNodes']++, T['parent'] && (T['isProjecting']() || (T['isProjectionDirty'] = T['parent']['isProjectionDirty']), T['isSharedProjectionDirty'] || (T['isSharedProjectionDirty'] = !!(T['isProjectionDirty'] || T['parent']['isProjectionDirty'] || T['parent']['isSharedProjectionDirty'])), T['isTransformDirty'] || (T['isTransformDirty'] = T['parent']['isTransformDirty']));
}

function Vj(T) {
    T['isProjectionDirty'] = T['isSharedProjectionDirty'] = T['isTransformDirty'] = !0x1;
}

function _j(T) {
    T['clearSnapshot']();
}

function Rh(T) {
    T['clearMeasurements']();
}

function Fj(T) {
    T['isLayoutDirty'] = !0x1;
}

function Oj(T) {
    const {
        visualElement: b
    } = T['options'];
    b && b['getProps']()['onBeforeLayoutMeasure'] && b['notify']('BeforeLayoutMeasure'), T['resetTransform']();
}

function Ah(T) {
    T['finishAnimation'](), T['targetDelta'] = T['relativeTarget'] = T['target'] = void 0x0, T['isProjectionDirty'] = !0x0;
}

function zj(T) {
    T['resolveTargetDelta']();
}

function Bj(T) {
    T['calcProjection']();
}

function Uj(T) {
    T['resetSkewAndRotation']();
}

function Hj(T) {
    T['removeLeadSnapshot']();
}

function Dh(T, b, w) {
    T['translate'] = te(b['translate'], 0x0, w), T['scale'] = te(b['scale'], 0x1, w), T['origin'] = b['origin'], T['originPoint'] = b['originPoint'];
}

function Lh(T, b, w, R) {
    T['min'] = te(b['min'], w['min'], R), T['max'] = te(b['max'], w['max'], R);
}

function Wj(T, b, w, R) {
    Lh(T['x'], b['x'], w['x'], R), Lh(T['y'], b['y'], w['y'], R);
}

function $j(T) {
    return T['animationValues'] && T['animationValues']['opacityExit'] !== void 0x0;
}
const Kj = {
        'duration': 0.45,
        'ease': [0.4, 0x0, 0.1, 0x1]
    },
    Ih = T => typeof navigator < 'u' && navigator['userAgent'] && navigator['userAgent']['toLowerCase']()['includes'](T),
    Vh = Ih('applewebkit/') && !Ih('chrome/') ? Math['round'] : Oe;

function _h(T) {
    T['min'] = Vh(T['min']), T['max'] = Vh(T['max']);
}

function Xj(T) {
    _h(T['x']), _h(T['y']);
}

function O0(T, b, w) {
    return T === 'position' || T === 'preserve-aspect' && !Z2(Ph(b), Ph(w), 0.2);
}

function Gj(T) {
    var b;
    return T !== T['root'] && ((b = T['scroll']) === null || b === void 0x0 ? void 0x0 : b['wasRoot']);
}
const Yj = F0({
        'attachResizeListener': (T, b) => bi(T, 'resize', b),
        'measureScroll': () => ({
            'x': document['documentElement']['scrollLeft'] || document['body']['scrollLeft'],
            'y': document['documentElement']['scrollTop'] || document['body']['scrollTop']
        }),
        'checkIsScrollRoot': () => !0x0
    }),
    io = {
        'current': void 0x0
    },
    z0 = F0({
        'measureScroll': T => ({
            'x': T['scrollLeft'],
            'y': T['scrollTop']
        }),
        'defaultParent': () => {
            if (!io['current']) {
                const T = new Yj({});
                T['mount'](window), T['setOptions']({
                    'layoutScroll': !0x0
                }), io['current'] = T;
            }
            return io['current'];
        },
        'resetTransform': (T, b) => {
            T['style']['transform'] = b !== void 0x0 ? b : 'none';
        },
        'checkIsScrollRoot': T => window['getComputedStyle'](T)['position'] === 'fixed'
    }),
    Zj = {
        'pan': {
            'Feature': hj
        },
        'drag': {
            'Feature': dj,
            'ProjectionNode': z0,
            'MeasureLayout': A0
        }
    };

function Fh(T, b, w) {
    const {
        props: R
    } = T;
    T['animationState'] && R['whileHover'] && T['animationState']['setActive']('whileHover', w === 'Start');
    const p = 'onHover' + w,
        A = R[p];
    A && Z['postRender'](() => A(b, Di(b)));
}
class Qj extends fn {
    ['mount']() {
        const {
            current: T
        } = this['node'];
        T && (this['unmount'] = Q1(T, b => (Fh(this['node'], b, 'Start'), w => Fh(this['node'], w, 'End'))));
    } ['unmount']() {}
}
class Jj extends fn {
    constructor() {
        super(...arguments), this['isActive'] = !0x1;
    } ['onFocus']() {
        let T = !0x1;
        try {
            T = this['node']['current']['matches'](':focus-visible');
        } catch {
            T = !0x0;
        }!T || !this['node']['animationState'] || (this['node']['animationState']['setActive']('whileFocus', !0x0), this['isActive'] = !0x0);
    } ['onBlur']() {
        !this['isActive'] || !this['node']['animationState'] || (this['node']['animationState']['setActive']('whileFocus', !0x1), this['isActive'] = !0x1);
    } ['mount']() {
        this['unmount'] = Ai(bi(this['node']['current'], 'focus', () => this['onFocus']()), bi(this['node']['current'], 'blur', () => this['onBlur']()));
    } ['unmount']() {}
}

function Oh(T, b, w) {
    const {
        props: R
    } = T;
    T['animationState'] && R['whileTap'] && T['animationState']['setActive']('whileTap', w === 'Start');
    const p = 'onTap' + (w === 'End' ? '' : w),
        A = R[p];
    A && Z['postRender'](() => A(b, Di(b)));
}
class qj extends fn {
    ['mount']() {
        const {
            current: T
        } = this['node'];
        T && (this['unmount'] = tw(T, b => (Oh(this['node'], b, 'Start'), (w, {
            success: R
        }) => Oh(this['node'], w, R ? 'End' : 'Cancel')), {
            'useGlobalTarget': this['node']['props']['globalTapTarget']
        }));
    } ['unmount']() {}
}
const wl = new WeakMap(),
    so = new WeakMap(),
    eN = T => {
        const b = wl['get'](T['target']);
        b && b(T);
    },
    tN = T => {
        T['forEach'](eN);
    };

function nN({
    root: T,
    ...b
}) {
    const w = T || document;
    so['has'](w) || so['set'](w, {});
    const R = so['get'](w),
        p = JSON['stringify'](b);
    return R[p] || (R[p] = new IntersectionObserver(tN, {
        'root': T,
        ...b
    })), R[p];
}

function rN(T, b, w) {
    const R = nN(b);
    return wl['set'](T, w), R['observe'](T), () => {
        wl['delete'](T), R['unobserve'](T);
    };
}
const iN = {
    'some': 0x0,
    'all': 0x1
};
class sN extends fn {
    constructor() {
        super(...arguments), this['hasEnteredView'] = !0x1, this['isInView'] = !0x1;
    } ['startObserver']() {
        this['unmount']();
        const {
            viewport: T = {}
        } = this['node']['getProps'](), {
            root: b,
            margin: w,
            amount: R = 'some',
            once: p
        } = T, A = {
            'root': b ? b['current'] : void 0x0,
            'rootMargin': w,
            'threshold': typeof R == 'number' ? R : iN[R]
        }, N = C => {
            const {
                isIntersecting: L
            } = C;
            if (this['isInView'] === L || (this['isInView'] = L, p && !L && this['hasEnteredView'])) return;
            L && (this['hasEnteredView'] = !0x0), this['node']['animationState'] && this['node']['animationState']['setActive']('whileInView', L);
            const {
                onViewportEnter: z,
                onViewportLeave: I
            } = this['node']['getProps'](), K = L ? z : I;
            K && K(C);
        };
        return rN(this['node']['current'], A, N);
    } ['mount']() {
        this['startObserver']();
    } ['update']() {
        if (typeof IntersectionObserver > 'u') return;
        const {
            props: T,
            prevProps: b
        } = this['node'];
        ['amount', 'margin', 'root']['some'](aN(T, b)) && this['startObserver']();
    } ['unmount']() {}
}

function aN({
    viewport: T = {}
}, {
    viewport: b = {}
} = {}) {
    return w => T[w] !== b[w];
}
const oN = {
        'inView': {
            'Feature': sN
        },
        'tap': {
            'Feature': qj
        },
        'focus': {
            'Feature': Jj
        },
        'hover': {
            'Feature': Qj
        }
    },
    lN = {
        'layout': {
            'ProjectionNode': z0,
            'MeasureLayout': A0
        }
    },
    jl = {
        'current': null
    },
    B0 = {
        'current': !0x1
    };

function uN() {
    if (B0['current'] = !0x0, !!xu)
        if (window['matchMedia']) {
            const T = window['matchMedia']('(prefers-reduced-motion)'),
                b = () => jl['current'] = T['matches'];
            T['addListener'](b), b();
        } else jl['current'] = !0x1;
}
const cN = [...h0, be, un],
    dN = T => cN['find'](d0(T)),
    zh = new WeakMap();

function hN(T, b, w) {
    for (const R in b) {
        const p = b[R],
            A = w[R];
        if (Ce(p)) T['addValue'](R, p);
        else if (Ce(A)) T['addValue'](R, Ni(p, {
            'owner': T
        }));
        else if (A !== p)
            if (T['hasValue'](R)) {
                const N = T['getValue'](R);
                N['liveStyle'] === !0x0 ? N['jump'](p) : N['hasAnimated'] || N['set'](p);
            } else {
                const C = T['getStaticValue'](R);
                T['addValue'](R, Ni(C !== void 0x0 ? C : p, {
                    'owner': T
                }));
            }
    }
    for (const h in w) b[h] === void 0x0 && T['removeValue'](h);
    return b;
}
const Bh = ['AnimationStart', 'AnimationComplete', 'Update', 'BeforeLayoutMeasure', 'LayoutMeasure', 'LayoutAnimationStart', 'LayoutAnimationComplete'];
class fN {
    ['scrapeMotionValuesFromProps'](T, b, w) {
        return {};
    }
    constructor({
        parent: T,
        props: b,
        presenceContext: R,
        reducedMotionConfig: p,
        blockInitialAnimation: A,
        visualState: N
    }, C = {}) {
        this['current'] = null, this['children'] = new Set(), this['isVariantNode'] = !0x1, this['isControllingVariants'] = !0x1, this['shouldReduceMotion'] = null, this['values'] = new Map(), this['KeyframeResolver'] = Ku, this['features'] = {}, this['valueSubscriptions'] = new Map(), this['prevMotionValues'] = {}, this['events'] = {}, this['propEventSubscriptions'] = {}, this['notifyUpdate'] = () => this['notify']('Update', this['latestValues']), this['render'] = () => {
            this['current'] && (this['triggerBuild'](), this['renderInstance'](this['current'], this['renderState'], this['props']['style'], this['projection']));
        }, this['renderScheduledAt'] = 0x0, this['scheduleRender'] = () => {
            const x = xt['now']();
            this['renderScheduledAt'] < x && (this['renderScheduledAt'] = x, Z['render'](this['render'], !0x1, !0x0));
        };
        const {
            latestValues: L,
            renderState: z,
            onUpdate: I
        } = N;
        this['onUpdate'] = I, this['latestValues'] = L, this['baseTarget'] = {
            ...L
        }, this['initialValues'] = b['initial'] ? {
            ...L
        } : {}, this['renderState'] = z, this['parent'] = T, this['props'] = b, this['presenceContext'] = R, this['depth'] = T ? T['depth'] + 0x1 : 0x0, this['reducedMotionConfig'] = p, this['options'] = C, this['blockInitialAnimation'] = !!A, this['isControllingVariants'] = va(b), this['isVariantNode'] = wm(b), this['isVariantNode'] && (this['variantChildren'] = new Set()), this['manuallyAnimateOnMount'] = !!(T && T['current']);
        const {
            willChange: K,
            ...O
        } = this['scrapeMotionValuesFromProps'](b, {}, this);
        for (const x in O) {
            const V = O[x];
            L[x] !== void 0x0 && Ce(V) && V['set'](L[x], !0x1);
        }
    } ['mount'](T) {
        this['current'] = T, zh['set'](T, this), this['projection'] && !this['projection']['instance'] && this['projection']['mount'](T), this['parent'] && this['isVariantNode'] && !this['isControllingVariants'] && (this['removeFromVariantTree'] = this['parent']['addVariantChild'](this)), this['values']['forEach']((b, w) => this['bindToMotionValue'](w, b)), B0['current'] || uN(), this['shouldReduceMotion'] = this['reducedMotionConfig'] === 'never' ? !0x1 : this['reducedMotionConfig'] === 'always' ? !0x0 : jl['current'], this['parent'] && this['parent']['children']['add'](this), this['update'](this['props'], this['presenceContext']);
    } ['unmount']() {
        zh['delete'](this['current']), this['projection'] && this['projection']['unmount'](), ln(this['notifyUpdate']), ln(this['render']), this['valueSubscriptions']['forEach'](T => T()), this['valueSubscriptions']['clear'](), this['removeFromVariantTree'] && this['removeFromVariantTree'](), this['parent'] && this['parent']['children']['delete'](this);
        for (const T in this['events']) this['events'][T]['clear']();
        for (const b in this['features']) {
            const w = this['features'][b];
            w && (w['unmount'](), w['isMounted'] = !0x1);
        }
        this['current'] = null;
    } ['bindToMotionValue'](T, b) {
        this['valueSubscriptions']['has'](T) && this['valueSubscriptions']['get'](T)();
        const w = _n['has'](T),
            R = b['on']('change', N => {
                this['latestValues'][T] = N, this['props']['onUpdate'] && Z['preRender'](this['notifyUpdate']), w && this['projection'] && (this['projection']['isTransformDirty'] = !0x0);
            }),
            p = b['on']('renderRequest', this['scheduleRender']);
        let A;
        window['MotionCheckAppearSync'] && (A = window['MotionCheckAppearSync'](this, T, b)), this['valueSubscriptions']['set'](T, () => {
            R(), p(), A && A(), b['owner'] && b['stop']();
        });
    } ['sortNodePosition'](T) {
        return !this['current'] || !this['sortInstanceNodePosition'] || this['type'] !== T['type'] ? 0x0 : this['sortInstanceNodePosition'](this['current'], T['current']);
    } ['updateFeatures']() {
        let T = 'animation';
        for (T in yr) {
            const b = yr[T];
            if (!b) continue;
            const {
                isEnabled: w,
                Feature: R
            } = b;
            if (!this['features'][T] && R && w(this['props']) && (this['features'][T] = new R(this)), this['features'][T]) {
                const p = this['features'][T];
                p['isMounted'] ? p['update']() : (p['mount'](), p['isMounted'] = !0x0);
            }
        }
    } ['triggerBuild']() {
        this['build'](this['renderState'], this['latestValues'], this['props']);
    } ['measureViewportBox']() {
        return this['current'] ? this['measureInstanceViewportBox'](this['current'], this['props']) : le();
    } ['getStaticValue'](T) {
        return this['latestValues'][T];
    } ['setStaticValue'](T, b) {
        this['latestValues'][T] = b;
    } ['update'](T, b) {
        (T['transformTemplate'] || this['props']['transformTemplate']) && this['scheduleRender'](), this['prevProps'] = this['props'], this['props'] = T, this['prevPresenceContext'] = this['presenceContext'], this['presenceContext'] = b;
        for (let w = 0x0; w < Bh['length']; w++) {
            const R = Bh[w];
            this['propEventSubscriptions'][R] && (this['propEventSubscriptions'][R](), delete this['propEventSubscriptions'][R]);
            const p = 'on' + R,
                A = T[p];
            A && (this['propEventSubscriptions'][R] = this['on'](R, A));
        }
        this['prevMotionValues'] = hN(this, this['scrapeMotionValuesFromProps'](T, this['prevProps'], this), this['prevMotionValues']), this['handleChildMotionValue'] && this['handleChildMotionValue'](), this['onUpdate'] && this['onUpdate'](this);
    } ['getProps']() {
        return this['props'];
    } ['getVariant'](T) {
        return this['props']['variants'] ? this['props']['variants'][T] : void 0x0;
    } ['getDefaultTransition']() {
        return this['props']['transition'];
    } ['getTransformPagePoint']() {
        return this['props']['transformPagePoint'];
    } ['getClosestVariantNode']() {
        return this['isVariantNode'] ? this : this['parent'] ? this['parent']['getClosestVariantNode']() : void 0x0;
    } ['addVariantChild'](T) {
        const b = this['getClosestVariantNode']();
        if (b) return b['variantChildren'] && b['variantChildren']['add'](T), () => b['variantChildren']['delete'](T);
    } ['addValue'](T, b) {
        const w = this['values']['get'](T);
        b !== w && (w && this['removeValue'](T), this['bindToMotionValue'](T, b), this['values']['set'](T, b), this['latestValues'][T] = b['get']());
    } ['removeValue'](T) {
        this['values']['delete'](T);
        const b = this['valueSubscriptions']['get'](T);
        b && (b(), this['valueSubscriptions']['delete'](T)), delete this['latestValues'][T], this['removeValueFromRenderState'](T, this['renderState']);
    } ['hasValue'](T) {
        return this['values']['has'](T);
    } ['getValue'](T, b) {
        if (this['props']['values'] && this['props']['values'][T]) return this['props']['values'][T];
        let w = this['values']['get'](T);
        return w === void 0x0 && b !== void 0x0 && (w = Ni(b === null ? void 0x0 : b, {
            'owner': this
        }), this['addValue'](T, w)), w;
    } ['readValue'](T, b) {
        var w;
        let R = this['latestValues'][T] !== void 0x0 || !this['current'] ? this['latestValues'][T] : (w = this['getBaseTargetFromProps'](this['props'], T)) !== null && w !== void 0x0 ? w : this['readValueFromInstance'](this['current'], T, this['options']);
        return R != null && (typeof R == 'string' && (u0(R) || e0(R)) ? R = parseFloat(R) : !dN(R) && un['test'](b) && (R = a0(T, b)), this['setBaseTarget'](T, Ce(R) ? R['get']() : R)), Ce(R) ? R['get']() : R;
    } ['setBaseTarget'](T, b) {
        this['baseTarget'][T] = b;
    } ['getBaseTarget'](T) {
        var b;
        const {
            initial: w
        } = this['props'];
        let R;
        if (typeof w == 'string' || typeof w == 'object') {
            const A = Cu(this['props'], w, (b = this['presenceContext']) === null || b === void 0x0 ? void 0x0 : b['custom']);
            A && (R = A[T]);
        }
        if (w && R !== void 0x0) return R;
        const p = this['getBaseTargetFromProps'](this['props'], T);
        return p !== void 0x0 && !Ce(p) ? p : this['initialValues'][T] !== void 0x0 && R === void 0x0 ? void 0x0 : this['baseTarget'][T];
    } ['on'](T, b) {
        return this['events'][T] || (this['events'][T] = new zu()), this['events'][T]['add'](b);
    } ['notify'](T, ...b) {
        this['events'][T] && this['events'][T]['notify'](...b);
    }
}
class U0 extends fN {
    constructor() {
        super(...arguments), this['KeyframeResolver'] = f0;
    } ['sortInstanceNodePosition'](T, b) {
        return T['compareDocumentPosition'](b) & 0x2 ? 0x1 : -0x1;
    } ['getBaseTargetFromProps'](T, b) {
        return T['style'] ? T['style'][b] : void 0x0;
    } ['removeValueFromRenderState'](T, {
        vars: b,
        style: w
    }) {
        delete b[T], delete w[T];
    } ['handleChildMotionValue']() {
        this['childSubscription'] && (this['childSubscription'](), delete this['childSubscription']);
        const {
            children: T
        } = this['props'];
        Ce(T) && (this['childSubscription'] = T['on']('change', b => {
            this['current'] && (this['current']['textContent'] = '' + b);
        }));
    }
}

function pN(T) {
    return window['getComputedStyle'](T);
}
class mN extends U0 {
    constructor() {
        super(...arguments), this['type'] = 'html', this['renderInstance'] = Em;
    } ['readValueFromInstance'](T, b) {
        if (_n['has'](b)) {
            const w = $u(b);
            return w && w['default'] || 0x0;
        } else {
            const R = pN(T),
                p = (Cm(b) ? R['getPropertyValue'](b) : R[b]) || 0x0;
            return typeof p == 'string' ? p['trim']() : p;
        }
    } ['measureInstanceViewportBox'](T, {
        transformPagePoint: b
    }) {
        return M0(T, b);
    } ['build'](T, b, w) {
        Eu(T, b, w['transformTemplate']);
    } ['scrapeMotionValuesFromProps'](T, b, w) {
        return Du(T, b, w);
    }
}
class gN extends U0 {
    constructor() {
        super(...arguments), this['type'] = 'svg', this['isSVGTag'] = !0x1, this['measureInstanceViewportBox'] = le;
    } ['getBaseTargetFromProps'](T, b) {
        return T[b];
    } ['readValueFromInstance'](T, b) {
        if (_n['has'](b)) {
            const w = $u(b);
            return w && w['default'] || 0x0;
        }
        return b = Mm['has'](b) ? b : Su(b), T['getAttribute'](b);
    } ['scrapeMotionValuesFromProps'](T, b, w) {
        return Dm(T, b, w);
    } ['build'](T, b, w) {
        Mu(T, b, this['isSVGTag'], w['transformTemplate']);
    } ['renderInstance'](T, b, w, R) {
        Rm(T, b, w, R);
    } ['mount'](T) {
        this['isSVGTag'] = Au(T['tagName']), super['mount'](T);
    }
}
const vN = (T, b) => ku(T) ? new gN(b) : new mN(b, {
        'allowProjection': T !== P['Fragment']
    }),
    yN = W1({
        ...B2,
        ...oN,
        ...Zj,
        ...lN
    }, vN),
    k = s1(yN);

function xN() {
    const [T, b] = P['useState'](!0x1), [w, R] = P['useState'](!0x1), p = Vn(), [A, N] = P['useState'](() => {
        const z = localStorage['getItem']('isExecutorMode');
        return z ? JSON['parse'](z) : !0x0;
    });
    P['useEffect'](() => {
        const z = () => R(window['scrollY'] > 0x14);
        window['addEventListener']('scroll', z);
        const I = () => {
            const K = localStorage['getItem']('isExecutorMode');
            N(K ? JSON['parse'](K) : !0x0);
        };
        return window['addEventListener']('storage', I), () => {
            window['removeEventListener']('scroll', z), window['removeEventListener']('storage', I);
        };
    }, []);
    const C = [{
            'to': '/download',
            'label': 'Download'
        }],
        h = {
            'hidden': {
                'y': -0x64,
                'opacity': 0x0
            },
            'visible': {
                'y': 0x0,
                'opacity': 0x1,
                'transition': {
                    'duration': 0.6,
                    'ease': 'easeOut'
                }
            }
        },
        L = {
            'hover': {
                'scale': 1.05,
                'transition': {
                    'duration': 0.2,
                    'ease': 'easeInOut'
                }
            }
        };
    return o['jsxs'](k['nav'], {
        'initial': 'hidden',
        'animate': 'visible',
        'variants': h,
        'className': 'fixed\x20w-full\x20z-50\x20transition-all\x20duration-300\x20' + (w ? 'py-4' : 'py-6'),
        'children': [o['jsxs']('div', {
            'className': 'absolute\x20inset-0\x20' + (w && !T ? 'opacity-100' : 'opacity-0') + '\x20z-0',
            'children': [o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-black/40\x20backdrop-blur-2xl'
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-gradient-to-b\x20from-white/5\x20to-transparent'
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]\x20from-white/10\x20via-transparent\x20to-transparent'
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-[url(\x27data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=\x27)]\x20opacity-20'
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-x-0\x20bottom-0\x20h-px\x20bg-gradient-to-r\x20from-transparent\x20via-white/30\x20to-transparent'
            })]
        }), o['jsx']('div', {
            'className': 'relative\x20z-10\x20max-w-7xl\x20mx-auto\x20px-6',
            'children': o['jsxs']('div', {
                'className': 'flex\x20items-center\x20justify-between',
                'children': [o['jsxs'](Tt, {
                    'to': '/',
                    'className': 'flex\x20items-center\x20space-x-3\x20group',
                    'children': [o['jsxs'](k['div'], {
                        'className': 'relative',
                        'whileHover': {
                            'scale': 1.1
                        },
                        'transition': {
                            'type': 'spring',
                            'stiffness': 0x190,
                            'damping': 0xa
                        },
                        'children': [o['jsx']('div', {
                            'className': 'absolute\x20-inset-2\x20bg-gradient-to-r\x20from-white/30\x20via-white/10\x20to-white/30\x20rounded-full\x20blur-xl\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-500'
                        }), o['jsxs']('div', {
                            'className': 'relative',
                            'children': [o['jsx'](k['img'], {
                                'whileHover': {
                                    'rotate': 0x168
                                },
                                'transition': {
                                    'duration': 0.8
                                },
                                'className': 'h-10\x20w-10\x20rounded-full',
                                'src': '/images/QazaqDLC.png',
                                'alt': 'QazaqDLC'
                            }), o['jsx']('div', {
                                'className': 'absolute\x20inset-0\x20bg-gradient-to-tr\x20from-white/20\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-300\x20rounded-full'
                            })]
                        })]
                    }), o['jsx'](k['span'], {
                        'className': 'text-2xl\x20font-bold\x20bg-gradient-to-r\x20from-white\x20via-gray-200\x20to-white\x20bg-clip-text\x20text-transparent',
                        'whileHover': {
                            'scale': 1.05
                        },
                        'transition': {
                            'duration': 0.2
                        },
                        'children': 'QazaqDLC'
                    })]
                }), o['jsx']('div', {
                    'className': 'hidden\x20md:flex\x20items-center\x20space-x-1',
                    'children': C['map'](({
                        to: z,
                        label: I
                    }) => o['jsx'](k['div'], {
                        'variants': L,
                        'whileHover': 'hover',
                        'children': o['jsxs'](Tt, {
                            'to': z,
                            'className': 'relative\x20px-4\x20py-2\x20text-sm\x20font-medium\x20rounded-lg\x20transition-all\x20duration-300\x20overflow-hidden\x20group',
                            'children': [p['pathname'] === z && o['jsx'](k['div'], {
                                'layoutId': 'navbar-indicator',
                                'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/20\x20via-white/10\x20to-white/5\x20rounded-lg\x20-z-10',
                                'transition': {
                                    'type': 'spring',
                                    'bounce': 0.2,
                                    'duration': 0.6
                                }
                            }), o['jsx']('span', {
                                'className': 'relative\x20z-10\x20' + (p['pathname'] === z ? 'text-white' : 'text-gray-400\x20group-hover:text-white'),
                                'children': I
                            }), o['jsx']('div', {
                                'className': 'absolute\x20bottom-0\x20left-0\x20w-full\x20h-px\x20bg-gradient-to-r\x20from-transparent\x20via-white/50\x20to-transparent\x20scale-x-0\x20group-hover:scale-x-100\x20transition-transform\x20duration-300'
                            })]
                        })
                    }, z))
                }), o['jsx'](k['div'], {
                    'className': 'hidden\x20md:block',
                    'whileHover': {
                        'scale': 1.05
                    },
                    'whileTap': {
                        'scale': 0.95
                    },
                    'children': o['jsxs']('a', {
                        'href': 'https://t.me/qazaqdlc',
                        'target': '_blank',
                        'rel': 'noopener\x20noreferrer',
                        'className': 'group\x20relative\x20inline-flex\x20items-center\x20space-x-2\x20px-4\x20py-2\x20rounded-full\x20overflow-hidden',
                        'children': [o['jsx']('div', {
                            'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/10\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-300\x20rounded-full'
                        }), o['jsx']('img', {
                            'src': '/images/Discord-Icon-White.png',
                            'alt': 'Discord',
                            'className': 'relative\x20w-5\x20h-5\x20group-hover:scale-110\x20transition-transform\x20duration-300'
                        }), o['jsx']('span', {
                            'className': 'relative\x20text-sm\x20font-medium\x20text-white\x20group-hover:text-gray-200\x20transition-colors',
                            'children': 'Join\x20Discord'
                        })]
                    })
                }), o['jsxs'](k['button'], {
                    'whileHover': {
                        'scale': 1.1
                    },
                    'whileTap': {
                        'scale': 0.9
                    },
                    'onClick': () => b(!T),
                    'className': 'md:hidden\x20relative\x20group\x20p-2\x20rounded-lg\x20overflow-hidden',
                    'children': [o['jsx']('div', {
                        'className': 'absolute\x20inset-0\x20bg-white/5\x20backdrop-blur-sm'
                    }), o['jsx']('div', {
                        'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/10\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                    }), o['jsx'](Fx, {
                        'className': 'relative\x20w-6\x20h-6\x20text-white'
                    })]
                })]
            })
        }), o['jsx'](It, {
            'children': T && o['jsxs'](k['div'], {
                'initial': {
                    'opacity': 0x0,
                    'y': -0x14
                },
                'animate': {
                    'opacity': 0x1,
                    'y': 0x0
                },
                'exit': {
                    'opacity': 0x0,
                    'y': -0x14
                },
                'transition': {
                    'duration': 0.4,
                    'ease': 'easeOut'
                },
                'className': 'md:hidden\x20fixed\x20inset-0\x20z-50',
                'children': [o['jsx'](k['div'], {
                    'initial': {
                        'opacity': 0x0
                    },
                    'animate': {
                        'opacity': 0x1
                    },
                    'exit': {
                        'opacity': 0x0
                    },
                    'transition': {
                        'duration': 0.3
                    },
                    'className': 'absolute\x20inset-0\x20bg-black/80\x20backdrop-blur-xl'
                }), o['jsxs'](k['div'], {
                    'initial': {
                        'opacity': 0x0,
                        'scale': 0.95,
                        'y': 0x14
                    },
                    'animate': {
                        'opacity': 0x1,
                        'scale': 0x1,
                        'y': 0x0
                    },
                    'exit': {
                        'opacity': 0x0,
                        'scale': 0.95,
                        'y': 0x14
                    },
                    'transition': {
                        'duration': 0.3,
                        'delay': 0.1
                    },
                    'className': 'relative\x20h-full\x20flex\x20flex-col',
                    'children': [o['jsxs']('div', {
                        'className': 'absolute\x20inset-0',
                        'children': [o['jsx']('div', {
                            'className': 'absolute\x20inset-0\x20bg-gradient-to-b\x20from-white/5\x20to-transparent'
                        }), o['jsx']('div', {
                            'className': 'absolute\x20inset-0\x20bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]\x20from-white/10\x20via-transparent\x20to-transparent'
                        }), o['jsx']('div', {
                            'className': 'absolute\x20inset-0\x20bg-[url(\x27data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=\x27)]\x20opacity-20'
                        }), o['jsx']('div', {
                            'className': 'absolute\x20inset-0\x20bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]\x20bg-[length:250%_250%]\x20animate-[gradient_8s_linear_infinite]'
                        })]
                    }), o['jsxs']('div', {
                        'className': 'relative\x20flex-1\x20px-6\x20py-8\x20overflow-y-auto',
                        'children': [o['jsxs']('div', {
                            'className': 'flex\x20items-center\x20justify-between\x20mb-8',
                            'children': [o['jsxs'](Tt, {
                                'to': '/',
                                'className': 'flex\x20items-center\x20space-x-3\x20group',
                                'children': [o['jsxs'](k['div'], {
                                    'className': 'relative',
                                    'whileHover': {
                                        'scale': 1.1
                                    },
                                    'transition': {
                                        'type': 'spring',
                                        'stiffness': 0x190,
                                        'damping': 0xa
                                    },
                                    'children': [o['jsx']('div', {
                                        'className': 'absolute\x20-inset-2\x20bg-gradient-to-r\x20from-white/30\x20via-white/10\x20to-white/30\x20rounded-full\x20blur-xl\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-500'
                                    }), o['jsxs']('div', {
                                        'className': 'relative',
                                        'children': [o['jsx'](k['img'], {
                                            'whileHover': {
                                                'rotate': 0x168
                                            },
                                            'transition': {
                                                'duration': 0.8
                                            },
                                            'className': 'h-10\x20w-10\x20rounded-full',
                                            'src': '/images/QazaqDLC.png',
                                            'alt': 'QazaqDLC'
                                        }), o['jsx']('div', {
                                            'className': 'absolute\x20inset-0\x20bg-gradient-to-tr\x20from-white/20\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-300\x20rounded-full'
                                        })]
                                    })]
                                }), o['jsx'](k['span'], {
                                    'className': 'text-2xl\x20font-bold\x20bg-gradient-to-r\x20from-white\x20via-gray-200\x20to-white\x20bg-clip-text\x20text-transparent',
                                    'whileHover': {
                                        'scale': 1.05
                                    },
                                    'transition': {
                                        'duration': 0.2
                                    },
                                    'children': 'QazaqDLC'
                                })]
                            }), o['jsxs'](k['button'], {
                                'whileHover': {
                                    'scale': 1.1
                                },
                                'whileTap': {
                                    'scale': 0.9
                                },
                                'onClick': () => b(!0x1),
                                'className': 'group\x20relative\x20p-2\x20rounded-lg\x20overflow-hidden',
                                'children': [o['jsx']('div', {
                                    'className': 'absolute\x20inset-0\x20bg-white/5\x20backdrop-blur-sm'
                                }), o['jsx']('div', {
                                    'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/10\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                }), o['jsx'](Hs, {
                                    'className': 'relative\x20w-6\x20h-6\x20text-white'
                                })]
                            })]
                        }), o['jsxs']('div', {
                            'className': 'space-y-4',
                            'children': [C['map'](({
                                to: z,
                                label: I
                            }, K) => o['jsx'](k['div'], {
                                'initial': {
                                    'opacity': 0x0,
                                    'x': -0x14
                                },
                                'animate': {
                                    'opacity': 0x1,
                                    'x': 0x0
                                },
                                'transition': {
                                    'delay': K * 0.1
                                },
                                'whileHover': {
                                    'y': -0x2
                                },
                                'whileTap': {
                                    'scale': 0.98
                                },
                                'children': o['jsxs'](Tt, {
                                    'to': z,
                                    'onClick': () => b(!0x1),
                                    'className': 'group\x20relative\x20block\x20px-6\x20py-4\x20rounded-xl\x20transition-all\x20duration-300\x20overflow-hidden\x20' + (p['pathname'] === z ? 'bg-white/10' : 'hover:bg-white/5'),
                                    'children': [o['jsx']('div', {
                                        'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/10\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                    }), o['jsx']('div', {
                                        'className': 'absolute\x20inset-0\x20bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]\x20from-white/10\x20via-transparent\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                    }), o['jsxs']('div', {
                                        'className': 'relative\x20flex\x20items-center\x20justify-between',
                                        'children': [o['jsx']('span', {
                                            'className': 'text-lg\x20font-medium\x20' + (p['pathname'] === z ? 'text-white' : 'text-gray-400\x20group-hover:text-white'),
                                            'children': I
                                        }), o['jsx'](k['div'], {
                                            'initial': {
                                                'x': -0xa,
                                                'opacity': 0x0
                                            },
                                            'animate': {
                                                'x': 0x0,
                                                'opacity': 0x1
                                            },
                                            'transition': {
                                                'delay': K * 0.1 + 0.2
                                            },
                                            'className': 'w-8\x20h-8\x20rounded-full\x20bg-white/5\x20flex\x20items-center\x20justify-center\x20group-hover:bg-white/10\x20transition-colors',
                                            'whileHover': {
                                                'scale': 1.1
                                            },
                                            'whileTap': {
                                                'scale': 0.9
                                            },
                                            'children': o['jsx'](on, {
                                                'className': 'w-4\x20h-4\x20text-white\x20transform\x20group-hover:translate-x-1\x20transition-transform'
                                            })
                                        })]
                                    })]
                                })
                            }, z)), o['jsx'](k['div'], {
                                'initial': {
                                    'opacity': 0x0,
                                    'x': -0x14
                                },
                                'animate': {
                                    'opacity': 0x1,
                                    'x': 0x0
                                },
                                'transition': {
                                    'delay': C['length'] * 0.1
                                },
                                'whileHover': {
                                    'y': -0x2
                                },
                                'whileTap': {
                                    'scale': 0.98
                                },
                                'children': o['jsxs']('a', {
                                    'href': 'https://t.me/qazaqdlc',
                                    'target': '_blank',
                                    'rel': 'noopener\x20noreferrer',
                                    'onClick': () => b(!0x1),
                                    'className': 'group\x20relative\x20block\x20px-6\x20py-4\x20rounded-xl\x20bg-white/5\x20hover:bg-white/10\x20transition-all\x20duration-300\x20overflow-hidden',
                                    'children': [o['jsx']('div', {
                                        'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/10\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                    }), o['jsx']('div', {
                                        'className': 'absolute\x20inset-0\x20bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]\x20from-white/10\x20via-transparent\x20to-transparent\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                    }), o['jsxs']('div', {
                                        'className': 'relative\x20flex\x20items-center\x20justify-between',
                                        'children': [o['jsxs']('div', {
                                            'className': 'flex\x20items-center\x20space-x-4',
                                            'children': [o['jsx']('img', {
                                                'src': '/images/Discord-Icon-White.png',
                                                'alt': 'Discord',
                                                'className': 'w-6\x20h-6\x20opacity-75\x20group-hover:opacity-100\x20transition-opacity'
                                            }), o['jsx']('span', {
                                                'className': 'text-lg\x20font-medium\x20text-white',
                                                'children': 'Join\x20Discord'
                                            })]
                                        }), o['jsx'](k['div'], {
                                            'initial': {
                                                'x': -0xa,
                                                'opacity': 0x0
                                            },
                                            'animate': {
                                                'x': 0x0,
                                                'opacity': 0x1
                                            },
                                            'transition': {
                                                'delay': C['length'] * 0.1 + 0.2
                                            },
                                            'className': 'w-8\x20h-8\x20rounded-full\x20bg-white/5\x20flex\x20items-center\x20justify-center\x20group-hover:bg-white/10\x20transition-colors',
                                            'whileHover': {
                                                'scale': 1.1
                                            },
                                            'whileTap': {
                                                'scale': 0.9
                                            },
                                            'children': o['jsx'](on, {
                                                'className': 'w-4\x20h-4\x20text-white\x20transform\x20group-hover:translate-x-1\x20transition-transform'
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })]
                })]
            })
        })]
    });
}
const LN = () => o['jsxs']('div', {
    'className': 'relative\x20min-h-screen\x20bg-black\x20text-white\x20flex\x20items-center\x20justify-center',
    'children': [o['jsxs']('div', {
        'className': 'relative\x20z-10\x20text-center\x20space-y-8',
        'children': [o['jsxs']('div', {
            'className': 'relative\x20overflow-hidden',
            'children': [o['jsx']('div', {
                'className': 'text-8xl\x20font-black\x20tracking-tighter\x20animate-fade-in',
                'children': o['jsx']('span', {
                    'className': 'bg-gradient-to-b\x20from-white\x20via-gray-200\x20to-transparent\x20bg-clip-text\x20text-transparent',
                    'children': '404'
                })
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-gradient-to-t\x20from-black\x20via-transparent\x20to-transparent'
            })]
        }), o['jsx']('p', {
            'className': 'text-gray-400\x20text-lg\x20max-w-md\x20mx-auto',
            'children': 'Данная\x20страница\x20не\x20существует.'
        }), o['jsxs']('a', {
            'href': '/',
            'className': 'inline-flex\x20items-center\x20gap-2\x20px-6\x20py-2\x20border\x20border-white/10\x20rounded-full\x20hover:bg-white/5\x20transition-all\x20duration-300\x20group',
            'children': [o['jsx'](Nx, {
                'className': 'w-4\x20h-4\x20group-hover:-translate-x-1\x20transition-transform\x20duration-300'
            }), o['jsx']('span', {
                'className': 'text-sm\x20font-medium',
                'children': 'Вернутся\x20в\x20главное\x20меню'
            })]
        })]
    }), o['jsx']('div', {
        'className': 'absolute\x20inset-0\x20overflow-hidden',
        'children': o['jsx']('div', {
            'className': 'absolute\x20inset-0\x20bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)]\x20bg-[length:24px_24px]'
        })
    })]
});
const Ft = () => o['jsxs'](o['Fragment'], {
    'children': [o['jsxs']('div', {
        'className': 'absolute\x20inset-0\x20overflow-hidden',
        'children': [o['jsx']('div', {
            'className': 'absolute\x20inset-0\x20opacity-20',
            'children': o['jsx'](k['div'], {
                'animate': {
                    'backgroundPosition': ['0%\x200%', '100%\x20100%']
                },
                'transition': {
                    'duration': 0x14,
                    'repeat': 0x1 / 0x0,
                    'ease': 'linear'
                },
                'className': 'absolute\x20inset-0',
                'style': {
                    'backgroundImage': 'linear-gradient(45deg,\x20transparent\x2095%,\x20rgba(255,255,255,0.3)\x2095%),\x20linear-gradient(-45deg,\x20transparent\x2095%,\x20rgba(255,255,255,0.3)\x2095%)',
                    'backgroundSize': '60px\x2060px'
                }
            })
        }), o['jsx']('div', {
            'className': 'absolute\x20inset-0',
            'children': [...Array(0x14)]['map']((T, b) => o['jsx'](k['div'], {
                'animate': {
                    'y': ['0%', '100%'],
                    'x': b % 0x2 === 0x0 ? ['-10%', '10%'] : ['10%', '-10%'],
                    'opacity': [0x0, 0x1, 0x0]
                },
                'transition': {
                    'duration': Math['random']() * 0xa + 0xa,
                    'repeat': 0x1 / 0x0,
                    'delay': Math['random']() * 0x5,
                    'ease': 'linear'
                },
                'className': 'absolute\x20w-1\x20h-1\x20bg-white\x20rounded-full',
                'style': {
                    'left': Math['random']() * 0x64 + '%',
                    'top': '-5%'
                }
            }, b))
        })]
    }), o['jsx']('div', {
        'className': 'absolute\x20inset-0\x20bg-gradient-to-b\x20from-transparent\x20via-black/80\x20to-black\x20pointer-events-none'
    })]
});

function H0({
    children: T,
    className: b = '',
    duration: w = 0x4,
    clockwise: R = !0x0
}) {
    const [p, A] = P['useState']('TOP'), N = L => {
        const z = ['TOP', 'RIGHT', 'BOTTOM', 'LEFT'],
            I = z['indexOf'](L),
            K = R ? (I + 0x1) % z['length'] : (I - 0x1 + z['length']) % z['length'];
        return z[K];
    }, C = {
        'TOP': 'radial-gradient(30%\x2060%\x20at\x2050%\x200%,\x20rgba(255,\x20255,\x20255,\x200.4)\x200%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%)',
        'RIGHT': 'radial-gradient(30%\x2060%\x20at\x20100%\x2050%,\x20rgba(255,\x20255,\x20255,\x200.4)\x200%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%)',
        'BOTTOM': 'radial-gradient(30%\x2060%\x20at\x2050%\x20100%,\x20rgba(255,\x20255,\x20255,\x200.4)\x200%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%)',
        'LEFT': 'radial-gradient(30%\x2060%\x20at\x200%\x2050%,\x20rgba(255,\x20255,\x20255,\x200.4)\x200%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%)'
    }, h = 'radial-gradient(80%\x20120%\x20at\x2050%\x2050%,\x20rgba(255,\x20255,\x20255,\x200.6)\x200%,\x20rgba(255,\x20255,\x20255,\x200)\x20100%)';
    return P['useEffect'](() => {
        const L = setInterval(() => {
            A(z => N(z));
        }, w * 0x3e8);
        return () => clearInterval(L);
    }, [w, R]), o['jsxs']('div', {
        'className': 'relative\x20' + b,
        'children': [o['jsx'](k['div'], {
            'className': 'absolute\x20-inset-[2px]\x20rounded-3xl\x20overflow-hidden',
            'initial': {
                'background': C[p],
                'opacity': 0x0,
                'scale': 0.95
            },
            'animate': {
                'background': h,
                'opacity': 0x1,
                'scale': 0x1
            },
            'transition': {
                'duration': 0.7,
                'ease': 'easeOut',
                'background': {
                    'duration': w / 0x2,
                    'ease': 'linear'
                }
            },
            'style': {
                'filter': 'blur(12px)'
            }
        }), o['jsx'](k['div'], {
            'className': 'relative',
            'initial': {
                'opacity': 0x0,
                'scale': 0.95
            },
            'animate': {
                'opacity': 0x1,
                'scale': 0x1
            },
            'transition': {
                'duration': 0.7,
                'ease': 'easeOut'
            },
            'children': T
        })]
    });
}

function jN({
    item: T,
    index: b,
    isOpen: w,
    onToggle: R
}) {
    return o['jsxs'](k['div'], {
        'initial': {
            'opacity': 0x0,
            'y': 0x14
        },
        'animate': {
            'opacity': 0x1,
            'y': 0x0
        },
        'transition': {
            'duration': 0.5,
            'delay': 0.1 * b
        },
        'className': 'relative\x20group',
        'children': [o['jsx']('div', {
            'className': 'absolute\x20-inset-0.5\x20bg-gradient-to-r\x20from-white/20\x20to-white/0\x20rounded-xl\x20blur\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-500'
        }), o['jsx']('div', {
            'className': 'relative\x20bg-gradient-to-br\x20from-white/5\x20via-black/40\x20to-black/60\x20backdrop-blur-sm\x20rounded-lg\x20border\x20border-white/10\x20overflow-hidden\x20transition-all\x20duration-300\x20group-hover:border-white/20',
            'children': o['jsxs']('button', {
                'onClick': R,
                'className': 'relative\x20w-full\x20p-6\x20text-left\x20transition-all\x20duration-300',
                'children': [o['jsxs']('div', {
                    'className': 'flex\x20justify-between\x20items-center',
                    'children': [o['jsx']('h3', {
                        'className': 'text-xl\x20font-semibold\x20bg-gradient-to-r\x20from-white\x20via-gray-200\x20to-white\x20bg-clip-text\x20text-transparent\x20group-hover:text-white\x20transition-colors',
                        'children': T['q']
                    }), o['jsxs']('div', {
                        'className': 'relative\x20flex\x20items-center\x20justify-center\x20w-8\x20h-8\x20rounded-full\x20bg-white/5\x20group-hover:bg-white/10\x20transition-all\x20duration-300',
                        'children': [w ? o['jsx'](Ox, {
                            'className': 'w-4\x20h-4\x20text-white'
                        }) : o['jsx'](fm, {
                            'className': 'w-4\x20h-4\x20text-white'
                        }), o['jsx']('div', {
                            'className': 'absolute\x20inset-0\x20rounded-full\x20border\x20border-white/10\x20group-hover:border-white/20\x20transition-all\x20duration-300'
                        })]
                    })]
                }), o['jsx'](k['div'], {
                    'initial': !0x1,
                    'animate': {
                        'height': w ? 'auto' : 0x0,
                        'opacity': w ? 0x1 : 0x0,
                        'marginTop': w ? 0x10 : 0x0
                    },
                    'transition': {
                        'duration': 0.3
                    },
                    'className': 'overflow-hidden',
                    'children': o['jsxs']('div', {
                        'className': 'relative',
                        'children': [o['jsx']('div', {
                            'className': 'absolute\x20left-0\x20top-0\x20bottom-0\x20w-1\x20bg-gradient-to-b\x20from-white/30\x20to-transparent\x20rounded-full'
                        }), o['jsx']('p', {
                            'className': 'text-gray-400\x20pl-4\x20leading-relaxed',
                            'children': T['a']
                        })]
                    })
                })]
            })
        })]
    });
}
const kN = [{
    'icon': Kx,
    'title': 'Хорошее\x20сообщество',
    'description': 'Поможет,\x20если\x20появятся\x20проблемы'
}, {
    'icon': mu,
    'title': 'Отличный\x20код\x20DLC',
    'description': 'Написан\x20нами'
}, {
    'icon': pm,
    'title': 'Высокая\x20производительность',
    'description': 'Скорость,\x20оптимизация\x20и\x20отсутствие\x20крашей\x20—\x20вот\x20что\x20имеется\x20в\x20нашем\x20DLC'
}];

function CN() {
    const [T, b] = P['useState'](''), [R, p] = P['useState'](!0x0), [A, N] = P['useState'](''), [C, L] = P['useState']([]), [z, I] = P['useState'](() => {
        try {
            const m = localStorage['getItem']('ScansDropdownOpen');
            return m ? JSON['parse'](m) === !0x0 : !0x1;
        } catch {
            return !0x1;
        }
    });
    P['useEffect'](() => {
        localStorage['setItem']('ScansDropdownOpen', JSON['stringify'](z));
    }, [z]);
    const [K, O] = P['useState'](!0x1);
    P['useEffect'](() => {
        ((async () => {
            try {
                const J = await fetch('https://qazaqdlc.com/version.txt');
                if (!J['ok']) throw new Error('Failed\x20to\x20fetch\x20version');
                const B = await J['text']();
                b(B['trim']());
                const j = await fetch('https://qazaqdlc.com/changelog.txt');
                if (!j['ok']) throw new Error('Failed\x20to\x20fetch\x20changelog');
                const M = await j['text']();
                L(M['split']('\x0a')['filter'](U => U['trim']())), p(!0x1);
            } catch {
                N('Failed\x20to\x20fetch\x20information'), p(!0x1);
            }
        })());
    }, []);
    const x = {
            'hidden': {
                'opacity': 0x0
            },
            'visible': {
                'opacity': 0x1,
                'transition': {
                    'staggerChildren': 0.2
                }
            }
        },
        V = {
            'hidden': {
                'opacity': 0x0,
                'y': 0x14
            },
            'visible': {
                'opacity': 0x1,
                'y': 0x0,
                'transition': {
                    'duration': 0.6
                }
            }
        },
        S = [{
            'name': 'VirusTotal',
            'logo': '/images/Virustotal.png',
            'result': '',
            'link': ''
        }, {
            'name': 'Kaspersky',
            'logo': '/images/Kaspersky.png',
            'result': '',
            'link': ''
        }, {
            'name': 'Triage',
            'logo': '/images/Triage.png',
            'result': '',
            'link': ''
        }, {
            'name': 'Hybrid\x20Analysis',
            'logo': '/images/Hybrid\x20Analysis.png',
            'result': '',
            'link': ''
        }];
    return o['jsxs']('div', {
        'className': 'relative\x20min-h-screen\x20bg-black\x20text-white\x20pt-24',
        'children': [o['jsxs']('div', {
            'className': 'fixed\x20inset-0\x20z-0',
            'children': [o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-gradient-to-b\x20from-black\x20via-black/95\x20to-black'
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]\x20from-white/5\x20via-transparent\x20to-transparent\x20opacity-30'
            }), o['jsx']('div', {
                'className': 'absolute\x20inset-0\x20bg-[url(\x27data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=\x27)]\x20opacity-20'
            })]
        }), o['jsx'](Ft, {}), o['jsxs']('div', {
            'className': 'relative\x20max-w-7xl\x20mx-auto\x20px-4\x20py-16',
            'children': [o['jsxs'](k['div'], {
                'initial': {
                    'opacity': 0x0,
                    'y': 0x14
                },
                'animate': {
                    'opacity': 0x1,
                    'y': 0x0
                },
                'transition': {
                    'duration': 0.6
                },
                'className': 'text-center\x20space-y-4\x20mb-12',
                'children': [o['jsx']('h1', {
                    'className': 'text-5xl\x20sm:text-6xl\x20font-bold\x20bg-gradient-to-r\x20from-white\x20via-gray-400\x20to-white\x20bg-clip-text\x20text-transparent',
                    'children': 'QazaqDLC'
                }), o['jsx']('p', {
                    'className': 'text-gray-400\x20max-w-2xl\x20mx-auto\x20text-lg',
                    'children': 'Будущее'
                })]
            }), o['jsxs'](k['div'], {
                'variants': x,
                'initial': 'hidden',
                'animate': 'visible',
                'className': 'relative',
                'onAnimationComplete': () => O(!0x0),
                'children': [o['jsx']('div', {
                    'className': 'absolute\x20inset-0\x20bg-gradient-to-br\x20from-white/10\x20to-transparent\x20rounded-3xl\x20blur-2xl\x20animate-pulse-slow'
                }), o['jsxs']('div', {
                    'className': 'relative\x20bg-gradient-to-br\x20from-white/5\x20via-black/40\x20to-black/60\x20backdrop-blur-xl\x20rounded-3xl\x20border\x20border-white/10\x20overflow-hidden',
                    'children': [o['jsx']('div', {
                        'className': 'absolute\x20inset-0\x20bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]\x20from-white/10\x20via-transparent\x20to-transparent\x20opacity-50'
                    }), o['jsx']('div', {
                        'className': 'relative\x20p-8\x20sm:p-10',
                        'children': o['jsxs']('div', {
                            'className': 'grid\x20lg:grid-cols-3\x20gap-8',
                            'children': [o['jsxs']('div', {
                                'className': 'lg:col-span-2',
                                'children': [o['jsxs'](k['div'], {
                                    'className': 'flex\x20flex-col\x20sm:flex-row\x20items-center\x20gap-6\x20mb-10',
                                    'variants': V,
                                    'children': [o['jsxs']('div', {
                                        'className': 'relative\x20group',
                                        'children': [o['jsx']('div', {
                                            'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/20\x20to-transparent\x20rounded-full\x20blur-xl\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-500'
                                        }), o['jsx']('img', {
                                            'src': '/images/QazaqDLC.png',
                                            'alt': 'QazaqDLC',
                                            'className': 'relative\x20w-20\x20h-20\x20rounded-full\x20unselectable'
                                        })]
                                    }), !R && !A && o['jsxs']('div', {
                                        'className': 'text-center\x20sm:text-left',
                                        'children': [o['jsxs']('h2', {
                                            'className': 'text-3xl\x20font-bold\x20text-white\x20mb-2',
                                            'children': ['Последнее\x20обновление']
                                        }), o['jsxs']('div', {
                                            'className': 'flex\x20items-center\x20gap-2\x20text-gray-400\x20justify-center\x20sm:justify-start',
                                            'children': [o['jsx'](il, {
                                                'className': 'w-4\x20h-4'
                                            }), o['jsx']('span', {
                                                'children': 'хз'
                                            })]
                                        })]
                                    })]
                                }), o['jsx'](k['div'], {
                                    'variants': x,
                                    'className': 'grid\x20grid-cols-1\x20sm:grid-cols-3\x20gap-4\x20mb-10',
                                    'children': kN['map'](({
                                        icon: J,
                                        title: B,
                                        description: g
                                    }, j) => o['jsxs'](k['div'], {
                                        'variants': V,
                                        'whileHover': {
                                            'scale': 1.05
                                        },
                                        'className': 'group\x20relative',
                                        'children': [o['jsx']('div', {
                                            'className': 'absolute\x20inset-0\x20bg-gradient-to-br\x20from-white/10\x20to-transparent\x20rounded-xl\x20opacity-0\x20group-hover:opacity-100\x20transition-all\x20duration-500'
                                        }), o['jsx']('div', {
                                            'className': 'relative\x20h-full\x20p-6\x20rounded-xl\x20bg-white/5\x20backdrop-blur-sm\x20hover:bg-white/10\x20transition-all\x20duration-300\x20border\x20border-white/5\x20group-hover:border-white/20',
                                            'children': o['jsxs']('div', {
                                                'className': 'flex\x20flex-col\x20gap-4',
                                                'children': [o['jsxs'](k['div'], {
                                                    'className': 'relative',
                                                    'transition': {
                                                        'type': 'spring',
                                                        'stiffness': 0x12c
                                                    },
                                                    'children': [o['jsx']('div', {
                                                        'className': 'absolute\x20inset-0\x20bg-white/20\x20rounded-full\x20blur-xl\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                                    }), o['jsx'](J, {
                                                        'className': 'relative\x20w-6\x20h-6\x20text-white'
                                                    })]
                                                }), o['jsxs']('div', {
                                                    'children': [o['jsx']('h3', {
                                                        'className': 'font-medium\x20text-lg\x20mb-1',
                                                        'children': B
                                                    }), o['jsx']('p', {
                                                        'className': 'text-sm\x20text-gray-400',
                                                        'children': g
                                                    })]
                                                })]
                                            })
                                        })]
                                    }, B))
                                }), o['jsx'](k['div'], {
                                    'variants': V,
                                    'className': 'flex\x20flex-wrap\x20gap-4',
                                    'children': o['jsxs'](Tt, {
                                        'to': 'https://t.me/qazaqdlc',
                                        'className': 'group\x20relative\x20overflow-hidden\x20rounded-xl',
                                        'children': [o['jsx']('div', {
                                            'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/20\x20via-white/10\x20to-white/20\x20rounded-xl\x20opacity-50\x20group-hover:opacity-100\x20transition-opacity\x20duration-500'
                                        }), o['jsx']('div', {
                                            'className': 'absolute\x20inset-[1px]\x20bg-black\x20rounded-[11px]'
                                        }), o['jsxs']('div', {
                                            'className': 'relative\x20px-8\x20sm:px-12\x20py-4\x20flex\x20items-center\x20justify-center\x20space-x-2\x20text-lg\x20font-medium',
                                            'children': [o['jsx']('span', {
                                                'className': 'text-white/90\x20group-hover:text-white\x20transition-colors',
                                                'children': 'Скачать'
                                            }), o['jsx'](on, {
                                                'className': 'w-5\x20h-5\x20text-white\x20group-hover:translate-x-1\x20transition-transform'
                                            })]
                                        })]
                                    })
                                })]
                            }), o['jsxs'](k['div'], {
                                'variants': V,
                                'className': 'relative',
                                'children': [o['jsx']('div', {
                                    'className': 'absolute\x20inset-0\x20bg-gradient-to-br\x20from-white/10\x20via-transparent\x20to-transparent\x20rounded-xl'
                                }), o['jsxs']('div', {
                                    'className': 'relative\x20bg-white/5\x20rounded-xl\x20p-6\x20backdrop-blur-sm\x20border\x20border-white/10',
                                    'children': [o['jsxs']('div', {
                                        'className': 'flex\x20items-center\x20gap-2\x20mb-6',
                                        'children': [o['jsxs']('h3', {
                                            'className': 'text-xl\x20font-bold\x20flex\x20items-center\x20gap-2',
                                            'children': [o['jsx'](il, {
                                                'className': 'w-5\x20h-5'
                                            }), o['jsx']('span', {
                                                'children': 'Последнее\x20обновление'
                                            })]
                                        }), o['jsxs']('button', {
                                            'className': 'ml-2\x20p-2\x20rounded-full\x20bg-white/10\x20hover:bg-white/20\x20transition-colors\x20border\x20border-white/10\x20flex\x20items-center\x20justify-center',
                                            'aria-label': 'Show\x20scan\x20results',
                                            'onClick': () => I(m => !m),
                                            'children': [o['jsx'](Rn, {
                                                'className': 'w-5\x20h-5\x20text-white'
                                            }), o['jsx'](k['span'], {
                                                'className': 'ml-1',
                                                'animate': {
                                                    'rotate': K && z ? 0xb4 : 0x0
                                                },
                                                'transition': {
                                                    'type': 'spring',
                                                    'stiffness': 0x12c,
                                                    'damping': 0x1e
                                                },
                                                'style': {
                                                    'display': 'inline-block'
                                                },
                                                'children': o['jsx'](Cx, {
                                                    'className': 'w-4\x20h-4'
                                                })
                                            })]
                                        })]
                                    }), R ? o['jsx']('div', {
                                        'className': 'space-y-3',
                                        'children': [...Array(0x5)]['map']((m, J) => o['jsx']('div', {
                                            'className': 'animate-pulse',
                                            'children': o['jsx']('div', {
                                                'className': 'h-4\x20bg-white/10\x20rounded\x20w-3/4'
                                            })
                                        }, J))
                                    }) : A ? o['jsx']('p', {
                                        'className': 'text-red-400',
                                        'children': 'Не\x20удалось\x20загрузить\x20журнал\x20изменений'
                                    }) : o['jsx']('div', {
                                        'className': 'space-y-2\x20max-h-[300px]\x20overflow-y-auto\x20pr-4\x20scrollbar-thin\x20scrollbar-thumb-white/20\x20scrollbar-track-transparent',
                                        'children': C['map']((m, J) => o['jsxs'](k['div'], {
                                            'variants': V,
                                            'className': 'group\x20relative',
                                            'children': [o['jsx']('div', {
                                                'className': 'absolute\x20inset-0\x20bg-gradient-to-r\x20from-white/10\x20to-transparent\x20rounded-lg\x20opacity-0\x20group-hover:opacity-100\x20transition-opacity'
                                            }), o['jsxs']('div', {
                                                'className': 'relative\x20p-4\x20bg-white/5\x20rounded-lg\x20hover:bg-white/10\x20transition-all\x20duration-300\x20border\x20border-white/5\x20group-hover:border-white/20',
                                                'children': [o['jsx']('div', {
                                                    'className': 'absolute\x20left-0\x20top-1/2\x20-translate-y-1/2\x20w-1\x20h-0\x20bg-gradient-to-b\x20from-white\x20to-gray-500\x20group-hover:h-full\x20transition-all\x20duration-300\x20rounded-r-full'
                                                }), o['jsx']('p', {
                                                    'className': 'pl-3\x20text-sm\x20text-gray-400\x20group-hover:text-gray-300\x20transition-colors',
                                                    'children': m
                                                })]
                                            })]
                                        }, J))
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            }), o['jsx'](It, {
                'children': K && z && o['jsx'](k['div'], {
                    'initial': {
                        'opacity': 0x0,
                        'y': 0x18
                    },
                    'animate': {
                        'opacity': 0x1,
                        'y': 0x0
                    },
                    'exit': {
                        'opacity': 0x0,
                        'y': 0x18
                    },
                    'transition': {
                        'duration': 0.4,
                        'ease': 'easeInOut'
                    },
                    'className': 'mt-8',
                    'children': o['jsxs']('div', {
                        'className': 'relative\x20max-w-7xl\x20mx-auto',
                        'children': [o['jsx']('div', {
                            'className': 'absolute\x20-inset-1\x20bg-gradient-to-br\x20from-white/10\x20to-black/60\x20rounded-2xl\x20opacity-30\x20blur-xl'
                        }), o['jsxs']('div', {
                            'className': 'relative\x20rounded-2xl\x20border\x20border-white/10\x20bg-gradient-to-br\x20from-white/10\x20via-black/40\x20to-black/60\x20backdrop-blur-xl\x20p-6\x20flex\x20flex-col\x20gap-4\x20shadow-2xl\x20w-full',
                            'children': [o['jsxs']('h4', {
                                'className': 'text-lg\x20font-semibold\x20mb-2\x20flex\x20items-center\x20gap-2',
                                'children': [o['jsx'](Rn, {
                                    'className': 'w-5\x20h-5\x20text-white'
                                }), o['jsx']('span', {
                                    'children': 'Результаты\x20сканирования'
                                })]
                            }), o['jsx']('div', {
                                'className': 'grid\x20grid-cols-1\x20sm:grid-cols-2\x20gap-4',
                                'children': S['map'](m => o['jsxs']('a', {
                                    'href': m['link'],
                                    'target': '_blank',
                                    'rel': 'noopener\x20noreferrer',
                                    'className': 'group\x20flex\x20items-center\x20gap-4\x20p-4\x20rounded-xl\x20bg-white/5\x20hover:bg-white/10\x20border\x20border-white/10\x20hover:border-white/20\x20transition-all\x20duration-300\x20shadow-lg',
                                    'children': [o['jsx']('img', {
                                        'src': m['logo'],
                                        'alt': m['name'],
                                        'className': 'w-10\x20h-10\x20rounded-lg\x20object-contain\x20bg-black/30\x20p-1'
                                    }), o['jsxs']('div', {
                                        'className': 'flex-1',
                                        'children': [o['jsxs']('div', {
                                            'className': 'font-bold\x20text-white\x20text-base\x20flex\x20items-center\x20gap-2',
                                            'children': [m['name'], o['jsx'](on, {
                                                'className': 'w-4\x20h-4\x20text-white/60\x20group-hover:translate-x-1\x20transition-transform'
                                            })]
                                        }), o['jsx']('div', {
                                            'className': 'text-sm\x20text-gray-400\x20mt-1',
                                            'children': m['result']
                                        })]
                                    })]
                                }, m['name']))
                            })]
                        })]
                    })
                })
            })]
        })]
    });
}

function FN() {
    const T = Vn(),
        b = !['/download', '/download', '/download', '/download', '/download', '/download', '/download', '/download']['includes'](T['pathname']) && !T['pathname']['includes']('c1451e2e') && T['pathname'] !== '/',
        w = T['pathname']['includes']('c1451e2e'),
        R = !b && !w;
    return o['jsxs']('div', {
        'className': 'min-h-screen\x20bg-black',
        'children': [R && o['jsx'](xN, {}), o['jsxs'](ux, {
            'children': [o['jsx'](Xe, {}), o['jsx'](Xe, {
                'path': '/download',
                'element': o['jsx'](CN, {})
            }), o['jsx'](Xe, {
                'path': '*',
                'element': o['jsx'](LN, {})
            })]
        }), R && o['jsx'](wN, {})]
    });
}

function ON() {
    return o['jsx'](gx, {
        'children': o['jsx'](FN, {})
    });
}
Zp(document['getElementById']('root'))['render'](o['jsx'](P['StrictMode'], {
    'children': o['jsx'](ON, {})
}));

function H(T) {
    function b(w) {
        if (typeof w === 'string') {
            return function(R) {} ['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + w / w)['length'] !== 0x1 || w % 0x14 === 0x0) {
                (function() {
                    return !![];
                } ['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function() {
                    return ![];
                } ['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        b(++w);
    }
    try {
        if (T) {
            return b;
        } else {
            b(0x0);
        }
    } catch (w) {}
}
