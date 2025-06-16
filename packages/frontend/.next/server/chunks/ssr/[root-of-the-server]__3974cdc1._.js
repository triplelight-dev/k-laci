module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/packages/frontend/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Header = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === '/';
    const logoSrc = isHome ? '/klaci_logo_white.png' : '/klaci_logo_blue.png';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1.5rem 6rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-poppins text-[2.1875rem] leading-[110%] font-bold tracking-[-1.05px] text-black",
                    style: {
                        display: 'flex',
                        gap: '35px',
                        color: isHome ? 'white' : '#264DBC'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoSrc,
                                alt: "K-LACI Logo",
                                style: {
                                    height: '30px',
                                    width: 'auto',
                                    marginRight: '15px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[35px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/summary",
                                        className: "font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black",
                                        children: "Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/results",
                                        className: "font-poppins text-[0.9375rem] leading-[110%] font-semibold tracking-[-0.45px] text-black",
                                        children: "Results"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/Header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/components/Header.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        border: 'none',
                        color: isHome ? 'white' : '#264DBC',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        padding: '10px 20px'
                    },
                    children: "로그인"
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/components/Header.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/components/Header.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const SearchTextInput = ({ value, onChange, placeholder = '지자체 검색', recentSearches = [], onRecentSearchClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '50px',
                    backgroundColor: 'white',
                    padding: '18px',
                    gap: '10px',
                    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
                    marginBottom: recentSearches.length > 0 ? '20px' : '0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mr-3 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/textinput_icon.png",
                            alt: "검색",
                            width: 15,
                            height: 15
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: placeholder,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        style: {
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            fontSize: '1rem',
                            color: 'black',
                            border: 'none',
                            outline: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            recentSearches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: '#B0B3BA',
                            background: 'transparent',
                            marginRight: '20px'
                        },
                        children: "최근 검색어"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '4px',
                            flexWrap: 'wrap'
                        },
                        children: recentSearches.map((search, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onRecentSearchClick?.(search),
                                style: {
                                    fontSize: '14px',
                                    color: '#000000',
                                    cursor: 'pointer',
                                    background: 'transparent',
                                    border: 'none',
                                    padding: 0
                                },
                                children: [
                                    search,
                                    index < recentSearches.length - 1 ? ', ' : ''
                                ]
                            }, index, true, {
                                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SearchTextInput;
}}),
"[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$input$2f$SearchTextInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const DistrictSearchSection = ()=>{
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleRecentSearchClick = (value)=>{
        setSearchValue(value);
    };
    const title = '229개 지자체중 우리 지역 찾아보기';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    const mockRecentSearches = [
        '서울시 강남구',
        '부산시 해운대구',
        '인천시 연수구'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#F4F4F4',
            borderRadius: '30px',
            padding: '20px',
            paddingTop: '60px',
            paddingBottom: '60px',
            marginBottom: '50px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '2.2rem',
                    fontWeight: 'bold'
                },
                children: [
                    title,
                    ' '
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-base leading-relaxed text-gray-600",
                children: text
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '500px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$input$2f$SearchTextInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: searchValue,
                    onChange: setSearchValue,
                    recentSearches: mockRecentSearches,
                    onRecentSearchClick: handleRecentSearchClick
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DistrictSearchSection;
}}),
"[project]/packages/frontend/app/atoms/select/CommonSelect.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const CommonSelect = ({ value, options, onChange, disabled = false })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = options.find((option)=>option.value === value)?.label || '선택';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #264DBC',
            borderRadius: '50px',
            padding: '0 20px',
            height: '50px',
            minWidth: '180px',
            backgroundColor: 'white',
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? 'not-allowed' : 'pointer',
            userSelect: 'none'
        },
        onClick: ()=>{
            if (!disabled) setIsOpen(!isOpen);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    flex: 1,
                    color: '#264DBC',
                    fontSize: '14px'
                },
                children: selectedLabel
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/atoms/select/CommonSelect.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    pointerEvents: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/arrow_down.png",
                    alt: "선택",
                    width: 12,
                    height: 7
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/atoms/select/CommonSelect.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/atoms/select/CommonSelect.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: '0px',
                    backgroundColor: 'white',
                    border: '1px solid #264DBC',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    width: '100%',
                    zIndex: 1000,
                    listStyle: 'none',
                    padding: 0,
                    overflow: 'hidden'
                },
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onChange(option.value);
                            setIsOpen(false);
                        },
                        style: {
                            padding: '12px 16px',
                            fontSize: '14px',
                            color: '#264DBC',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = '#F4F4F4',
                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'white',
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/packages/frontend/app/atoms/select/CommonSelect.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/atoms/select/CommonSelect.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/atoms/select/CommonSelect.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CommonSelect;
}}),
"[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/atoms/select/CommonSelect.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
// 임시 데이터
const MOCK_DATA = {
    provinces: [
        {
            value: 'seoul',
            label: '서울특별시'
        },
        {
            value: 'busan',
            label: '부산광역시'
        },
        {
            value: 'incheon',
            label: '인천광역시'
        }
    ],
    districts: {
        seoul: [
            {
                value: 'gangnam',
                label: '강남구'
            },
            {
                value: 'gangdong',
                label: '강동구'
            },
            {
                value: 'gangbuk',
                label: '강북구'
            }
        ],
        busan: [
            {
                value: 'haeundae',
                label: '해운대구'
            },
            {
                value: 'jung',
                label: '중구'
            },
            {
                value: 'seo',
                label: '서구'
            }
        ],
        incheon: [
            {
                value: 'yeonsu',
                label: '연수구'
            },
            {
                value: 'namdong',
                label: '남동구'
            },
            {
                value: 'bupyeong',
                label: '부평구'
            }
        ]
    }
};
const DistrictSelectSection = ()=>{
    const [selectedProvince, setSelectedProvince] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedDistrict, setSelectedDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleProvinceChange = (value)=>{
        setSelectedProvince(value);
        setSelectedDistrict(''); // 광역시 변경시 지자체 선택 초기화
    };
    const handleDistrictChange = (value)=>{
        setSelectedDistrict(value);
    };
    const districtOptions = selectedProvince ? MOCK_DATA.districts[selectedProvince] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '16px',
            width: '100%',
            justifyContent: 'center',
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: selectedProvince,
                    options: MOCK_DATA.provinces,
                    onChange: handleProvinceChange
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    // width: '600px',
                    display: 'flex',
                    justifyContent: 'flex-start'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: selectedDistrict,
                    options: districtOptions,
                    onChange: handleDistrictChange,
                    disabled: !selectedProvince
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DistrictSelectSection;
}}),
"[project]/packages/frontend/app/results/components/CategoryRanking.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const CategoryRanking = ({ data })=>{
    const { title, color, currentRank, totalRank, description, scores } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col rounded-lg bg-white p-6 shadow-sm",
        style: {
            marginBottom: '5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4",
                        style: {
                            height: '1rem',
                            background: `linear-gradient(to right, ${color}, ${color}33)`,
                            marginBottom: '1.5rem'
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '1.5rem',
                            fontWeight: 800
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-bold",
                                style: {
                                    color
                                },
                                children: currentRank
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: [
                                    " / ",
                                    totalRank
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 whitespace-pre-line text-gray-600",
                style: {
                    lineHeight: '1.5rem',
                    marginBottom: '1rem'
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4",
                style: {
                    gap: '1.2rem'
                },
                children: scores.map((score, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col rounded-lg p-6",
                        style: {
                            backgroundColor: color,
                            borderColor: color,
                            padding: '1.2rem',
                            borderRadius: '10px',
                            aspectRatio: '1',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-3 text-sm text-gray-600",
                                style: {
                                    fontSize: '1.1rem',
                                    fontWeight: 600
                                },
                                children: score.indicator
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 text-2xl font-extrabold",
                                style: {
                                    fontSize: '2rem',
                                    fontWeight: 600
                                },
                                children: score.score
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 text-xl font-bold",
                                style: {
                                    fontWeight: 600
                                },
                                children: [
                                    score.rank,
                                    "위"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                style: {
                                    fontSize: '1rem',
                                    color: '#666666'
                                },
                                children: score.source
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CategoryRanking;
}}),
"[project]/packages/frontend/atoms/charts/RadarChart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const JewelRadarChart = ({ data, showGrid = false })=>{
    const size = 500;
    const center = size / 2;
    const radius = 200;
    const categories = [
        '생활역동형',
        '안전복원형',
        '인구정착형',
        '경제정속형',
        '생활정주형',
        '안전정진형',
        '인구성장형',
        '경제혁신형'
    ];
    const colorMap = {
        생활역동형: '#ACAAE8',
        생활정주형: '#ACAAE8',
        안전복원형: '#74BF9E',
        안전정진형: '#74BF9E',
        인구정착형: '#F56542',
        인구성장형: '#F56542',
        경제정속형: '#F4B04D',
        경제혁신형: '#F4B04D'
    };
    const numAxes = categories.length;
    const angleStep = 2 * Math.PI / numAxes;
    const rotation = Math.PI / 4 - 23 * Math.PI / 180;
    // 값 보정
    const vals = data.slice(0, numAxes);
    while(vals.length < numAxes)vals.push(0);
    // 축 끝점 좌표 및 각도 저장
    const points = vals.map((value, i)=>{
        const angle = -Math.PI / 2 + rotation + i * angleStep;
        const r = value / 100 * radius;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle),
            angle
        };
    });
    // 두색 그라디언트 쌍 (categories 순서와 일치)
    const fixedColorPairs = [
        [
            '#ACAAE8',
            '#8E8AE5'
        ],
        [
            '#74BF9E',
            '#59A37D'
        ],
        [
            '#F56542',
            '#D64A2E'
        ],
        [
            '#F4B04D',
            '#D09B3F'
        ],
        [
            '#ACAAE8',
            '#8E8AE5'
        ],
        [
            '#74BF9E',
            '#59A37D'
        ],
        [
            '#F56542',
            '#D64A2E'
        ],
        [
            '#F4B04D',
            '#D09B3F'
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: categories.map((category, i)=>{
                    const pct = Math.min(100, vals[i] / 100 * 100);
                    const [startColor, endColor] = fixedColorPairs[i];
                    if (category === '안전복원형') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: `grad${i}`,
                            cx: center,
                            cy: center,
                            r: radius,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#F56542"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: `${pct * 0.7}%`,
                                    stopColor: "#F56542"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: `${pct}%`,
                                    stopColor: "#74BF9E"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#74BF9E"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this);
                    }
                    if (category === '인구정착형') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: `grad${i}`,
                            cx: center,
                            cy: center,
                            r: radius,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#F56542"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: `${pct}%`,
                                    stopColor: "#F56542",
                                    stopOpacity: 0.5
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#F56542",
                                    stopOpacity: 0.5
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                            lineNumber: 94,
                            columnNumber: 15
                        }, this);
                    }
                    if (category === '경제정속형') {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: `grad${i}`,
                            cx: center,
                            cy: center,
                            r: radius,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#F56542"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: `${pct}%`,
                                    stopColor: "#F4B04D"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#F4B04D"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                            lineNumber: 114,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `grad${i}`,
                        cx: center,
                        cy: center,
                        r: radius,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: startColor
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: `${pct}%`,
                                stopColor: endColor
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: endColor
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            points.map((pt, i)=>{
                const next = points[(i + 1) % numAxes];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`,
                    fill: `url(#grad${i})`,
                    fillOpacity: 0.7,
                    stroke: "white",
                    strokeWidth: 1
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this);
            }),
            showGrid && [
                0.2,
                0.4,
                0.6,
                0.8,
                1.0
            ].map((rate, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: center,
                    cy: center,
                    r: radius * rate,
                    fill: "none",
                    stroke: "#AAA",
                    strokeWidth: 0.5
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)),
            showGrid && points.map((pt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: center,
                    y1: center,
                    x2: center + radius * Math.cos(pt.angle),
                    y2: center + radius * Math.sin(pt.angle),
                    stroke: "#AAA",
                    strokeWidth: 0.5
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)),
            showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: center - radius,
                        y1: center,
                        x2: center + radius,
                        y2: center,
                        stroke: "#CCC",
                        strokeWidth: 0.5,
                        strokeDasharray: "4 4"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: center,
                        y1: center - radius,
                        x2: center,
                        y2: center + radius,
                        stroke: "#CCC",
                        strokeWidth: 0.5,
                        strokeDasharray: "4 4"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: center,
                        y: center,
                        textAnchor: "middle",
                        dy: "0.35em",
                        fontSize: 10,
                        fill: "#CCC",
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    [
                        20,
                        40,
                        60,
                        80,
                        100
                    ].map((val)=>{
                        const r = val / 100 * radius;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center + r,
                                    y: center,
                                    dx: "4",
                                    dy: "0.35em",
                                    fontSize: 10,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center - r,
                                    y: center,
                                    dx: "-4",
                                    dy: "0.35em",
                                    textAnchor: "end",
                                    fontSize: 10,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center,
                                    y: center + r,
                                    dy: "1.2em",
                                    textAnchor: "middle",
                                    fontSize: 10,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center,
                                    y: center - r,
                                    dy: "-0.3em",
                                    textAnchor: "middle",
                                    fontSize: 10,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 255,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, val, true, {
                            fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true),
            points.map((pt, i)=>{
                let deg = pt.angle * 180 / Math.PI + 90;
                if (deg > 180) deg -= 180;
                if ([
                    '경제혁신형',
                    '인구성장형',
                    '경제정속형',
                    '인구정착형'
                ].includes(categories[i])) {
                    deg += 180;
                }
                const x = center + (radius + 30) * Math.cos(pt.angle);
                const y = center + (radius + 30) * Math.sin(pt.angle);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y,
                    textAnchor: "middle",
                    dy: "0.4em",
                    fontSize: 16,
                    fontWeight: "bold",
                    fill: colorMap[categories[i]],
                    transform: `rotate(${deg} ${x} ${y})`,
                    children: categories[i]
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = JewelRadarChart;
}}),
"[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/components/CategoryRanking.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/atoms/charts/RadarChart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const CategoryRankingSection = ()=>{
    const chartData = [
        85,
        60,
        50,
        60,
        55,
        43,
        55,
        66
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            background: '#F8F8F8'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        paddingTop: '3rem',
                        marginBottom: '2rem'
                    },
                    children: "범주별 순위"
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        padding: '1rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        showGrid: true,
                        data: chartData
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8",
                    children: mockCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: category
                        }, index, false, {
                            fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const mockCategories = [
    {
        title: '인구성장력',
        color: '#F56542',
        currentRank: 3,
        totalRank: 17,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `경제지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '통계청(2024)'
            }))
    },
    {
        title: '경제활동력',
        color: '#F2BA5D',
        currentRank: 5,
        totalRank: 17,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `사회지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '보건복지부(2024)'
            }))
    },
    {
        title: '생활기반력',
        color: '#C2BDF3',
        currentRank: 7,
        totalRank: 17,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `건강지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '질병관리청(2024)'
            }))
    },
    {
        title: '안전회복력',
        color: '#74BF9E',
        currentRank: 2,
        totalRank: 17,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `만족도지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '행정안전부(2024)'
            }))
    }
];
const __TURBOPACK__default__export__ = CategoryRankingSection;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3974cdc1._.js.map