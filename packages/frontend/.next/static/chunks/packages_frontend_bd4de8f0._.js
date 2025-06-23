(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/packages/frontend/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Header = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const logoSrc = '/klaci_logo_white.png';
    // 현재 페이지 확인 함수
    const isActivePage = (path)=>{
        return pathname === path;
    };
    // Navigation 메뉴 데이터
    const navigationItems = [
        {
            href: '/about',
            label: '지역자산역량지수 소개'
        },
        {
            href: '/summary',
            label: '주요 분석 결과'
        },
        {
            href: '/results',
            label: '지자체별 리포트 조회'
        }
    ];
    const loginButtonName = '로그인';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            width: '100%',
            backgroundColor: '#1C3FD3'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1.5rem 6rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-poppins text-[2.1875rem] leading-[110%] font-bold tracking-[-1.05px] text-black",
                    style: {
                        display: 'flex',
                        gap: '35px',
                        color: 'white'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logoSrc,
                            alt: "K-LACI Logo",
                            style: {
                                height: '30px',
                                width: 'auto',
                                marginRight: '15px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/components/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '50px',
                        color: 'white'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[50px]",
                                children: navigationItems.map((item)=>{
                                    const isActive = isActivePage(item.href);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "font-poppins text-[0.9375rem] leading-[110%] tracking-[-0.45px]",
                                        style: {
                                            color: isActive ? 'white' : '#BED3FF',
                                            fontWeight: isActive ? 800 : 400,
                                            textDecoration: 'none'
                                        },
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/packages/frontend/components/Header.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Header.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/Header.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                border: '1px solid white',
                                borderRadius: '8px',
                                color: 'white',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                padding: '10px 25px'
                            },
                            children: loginButtonName
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/Header.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/components/Header.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/components/Header.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/Header.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(Header, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/Footer/FooterTopSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const FooterTopSection = ()=>{
    const sitemapData = {
        personal: {
            title: '개인정보',
            links: [
                {
                    name: '회원가입',
                    href: '/signup'
                },
                {
                    name: '회원정보',
                    href: '/profile'
                },
                {
                    name: '개인정보 처리방침',
                    href: '/privacy'
                },
                {
                    name: '이용약관',
                    href: '/terms'
                }
            ]
        },
        paid: {
            title: '유료상품',
            links: [
                {
                    name: '웨비나',
                    href: '/webinar'
                },
                {
                    name: '세미나',
                    href: '/seminar'
                },
                {
                    name: '리포트',
                    href: '/report'
                }
            ]
        },
        contact: {
            title: 'Contact',
            links: [
                {
                    name: '프로젝트 문의',
                    href: '/project-inquiry'
                },
                {
                    name: '기관 소개',
                    href: '/about'
                }
            ]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            width: '100%',
            paddingTop: '48px',
            backgroundColor: '#000000',
            color: '#ffffff',
            marginBottom: '70px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '70px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    marginBottom: '24px',
                                    color: '#ffffff'
                                },
                                children: sitemapData.personal.title
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                },
                                children: sitemapData.personal.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            marginBottom: '12px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            style: {
                                                color: '#D1D5DB',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                transition: 'color 0.2s ease'
                                            },
                                            onMouseEnter: (e)=>e.target.style.color = '#ffffff',
                                            onMouseLeave: (e)=>e.target.style.color = '#D1D5DB',
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    marginBottom: '24px',
                                    color: '#ffffff'
                                },
                                children: sitemapData.paid.title
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                },
                                children: sitemapData.paid.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            marginBottom: '12px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            style: {
                                                color: '#D1D5DB',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                transition: 'color 0.2s ease'
                                            },
                                            onMouseEnter: (e)=>e.target.style.color = '#ffffff',
                                            onMouseLeave: (e)=>e.target.style.color = '#D1D5DB',
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    marginBottom: '24px',
                                    color: '#ffffff'
                                },
                                children: sitemapData.contact.title
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                },
                                children: sitemapData.contact.links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            marginBottom: '12px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            style: {
                                                color: '#D1D5DB',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                transition: 'color 0.2s ease'
                                            },
                                            onMouseEnter: (e)=>e.target.style.color = '#ffffff',
                                            onMouseLeave: (e)=>e.target.style.color = '#D1D5DB',
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_c = FooterTopSection;
const __TURBOPACK__default__export__ = FooterTopSection;
var _c;
__turbopack_context__.k.register(_c, "FooterTopSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/Footer/FooterBottomSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const FooterBottomSection = ()=>{
    const LOGO_SRC = '/klaci_logo_white.png';
    const LOGO_ALT = 'K-LACI Logo';
    const TITLE_KR = '지역자산역량지수';
    const TITLE_EN_1 = 'Korea Local Asset';
    const TITLE_EN_2 = 'Competency Index';
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '70px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '16px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_SRC,
                            alt: LOGO_ALT,
                            style: {
                                height: '32px',
                                width: 'auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#D1D5DB',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold',
                                    lineHeight: 2
                                },
                                children: TITLE_KR
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold'
                                },
                                children: TITLE_EN_1
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 'bold'
                                },
                                children: TITLE_EN_2
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: '#9CA3AF',
                    fontSize: '14px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        margin: 0
                    },
                    children: [
                        "© ",
                        currentYear,
                        " K-LACI. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/components/Footer/FooterBottomSection.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = FooterBottomSection;
const __TURBOPACK__default__export__ = FooterBottomSection;
var _c;
__turbopack_context__.k.register(_c, "FooterBottomSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/Footer/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$FooterTopSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/FooterTopSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$FooterBottomSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/FooterBottomSection.tsx [app-client] (ecmascript)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#000000',
            color: '#ffffff'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: '90%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$FooterTopSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/components/Footer/Footer.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$FooterBottomSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/components/Footer/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/components/Footer/Footer.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/Footer/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/Footer/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/Footer.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/Footer/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/packages/frontend/components/layout/ResultLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/Footer/Footer.tsx [app-client] (ecmascript)");
;
;
;
const ResultLayout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/packages/frontend/components/layout/ResultLayout.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/layout/ResultLayout.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/packages/frontend/components/layout/ResultLayout.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/components/layout/ResultLayout.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = ResultLayout;
const __TURBOPACK__default__export__ = ResultLayout;
var _c;
__turbopack_context__.k.register(_c, "ResultLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
// 지자체별 아이콘 매핑 (예시 데이터)
const getRegionIcon = (regionName)=>{
    const iconMap = {
        서울특별시: '/icons/seoul.svg',
        부산광역시: '/icons/busan.svg',
        대구광역시: '/icons/daegu.svg',
        인천광역시: '/icons/incheon.svg',
        광주광역시: '/icons/gwangju.svg',
        대전광역시: '/icons/daejeon.svg',
        울산광역시: '/icons/ulsan.svg',
        세종특별자치시: '/icons/sejong.svg',
        제주특별자치도: '/icons/jeju.svg',
        서귀포시: '/icons/jeju.svg',
        제주시: '/icons/jeju.svg'
    };
    // 정확한 매칭 시도
    if (iconMap[regionName]) {
        return iconMap[regionName];
    }
    // 부분 매칭 시도
    for (const [key, icon] of Object.entries(iconMap)){
        if (regionName.includes(key) || key.includes(regionName)) {
            return icon;
        }
    }
    // 기본 아이콘
    return '/districts/sample_dist_icon.png';
};
const SearchTextInput = ({ value, onChange, placeholder = '제주 서귀포시', recentSearches = [], onRecentSearchClick, regionData = [] })=>{
    _s();
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedIndex, setHighlightedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 입력값에 따라 최근 검색어 필터링
    const filteredSearches = value ? recentSearches.filter((search)=>search.includes(value)) : recentSearches;
    // 인풋 포커스/블러 처리
    const handleFocus = ()=>{
        if (filteredSearches.length > 0) setShowDropdown(true);
    };
    const handleBlur = ()=>{
        setTimeout(()=>setShowDropdown(false), 100); // 버튼 클릭 허용
    };
    // 키보드 네비게이션
    const handleKeyDown = (e)=>{
        if (!showDropdown || filteredSearches.length === 0) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex((prev)=>prev < filteredSearches.length - 1 ? prev + 1 : 0);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((prev)=>prev > 0 ? prev - 1 : filteredSearches.length - 1);
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            e.preventDefault();
            const selected = filteredSearches[highlightedIndex];
            onChange(selected);
            onRecentSearchClick?.(selected);
            setShowDropdown(false);
            inputRef.current?.blur();
        }
    };
    // 입력값 바뀌면 하이라이트 초기화
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchTextInput.useEffect": ()=>{
            setHighlightedIndex(-1);
        }
    }["SearchTextInput.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    padding: '18px',
                    gap: '10px',
                    background: '#1638B1',
                    marginBottom: recentSearches.length > 0 ? '25px' : '0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mr-3 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/textinput_icon.png",
                            alt: "검색",
                            width: 15,
                            height: 15
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        placeholder: placeholder,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                        onKeyDown: handleKeyDown,
                        style: {
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            fontSize: '1rem',
                            border: '1px solid transparent',
                            color: 'white',
                            outline: 'none'
                        },
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            showDropdown && filteredSearches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '60px',
                    left: 0,
                    right: 0,
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    zIndex: 10,
                    padding: '3px',
                    maxHeight: '180px',
                    overflowY: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#F8F9FA',
                        borderRadius: '13px',
                        overflow: 'hidden'
                    },
                    children: filteredSearches.map((search, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseDown: ()=>{
                                onChange(search);
                                onRecentSearchClick?.(search);
                                setShowDropdown(false);
                            },
                            onMouseEnter: ()=>setHighlightedIndex(idx),
                            onMouseLeave: ()=>setHighlightedIndex(-1),
                            style: {
                                padding: '12px 24px',
                                cursor: 'pointer',
                                background: idx === highlightedIndex ? '#D9D9E8' : 'transparent',
                                color: '#222',
                                fontSize: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'background-color 0.2s ease',
                                userSelect: 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '24px',
                                        height: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: getRegionIcon(search),
                                        alt: `${search} 아이콘`,
                                        width: 20,
                                        height: 20,
                                        style: {
                                            objectFit: 'contain'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        fontWeight: idx === highlightedIndex ? '500' : '400'
                                    },
                                    children: search
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this),
            recentSearches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: 'white',
                            background: 'transparent',
                            marginRight: '20px'
                        },
                        children: "최근 검색어"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '15px',
                            flexWrap: 'wrap'
                        },
                        children: recentSearches.map((search, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onRecentSearchClick?.(search),
                                style: {
                                    fontSize: '14px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    background: 'transparent',
                                    border: '1px solid white',
                                    borderRadius: '10px',
                                    padding: '6px 12px'
                                },
                                children: search
                            }, index, false, {
                                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
_s(SearchTextInput, "VkzO+sdtLUkLY19Sq0cFdQJ/ynA=");
_c = SearchTextInput;
const __TURBOPACK__default__export__ = SearchTextInput;
var _c;
__turbopack_context__.k.register(_c, "SearchTextInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$input$2f$SearchTextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/atoms/input/SearchTextInput.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const DistrictSearchSection = ()=>{
    _s();
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleRecentSearchClick = (value)=>{
        setSearchValue(value);
    };
    const title = '229개 지자체중 우리 지역 찾아보기';
    const mockRecentSearches = [
        '서울시 강남구',
        '부산시 해운대구',
        '인천시 연수구'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '30px',
            backgroundColor: '#3352D7',
            color: 'white',
            padding: '20px',
            paddingTop: '60px',
            paddingBottom: '120px',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1.9rem',
                    fontWeight: '600'
                },
                children: [
                    title,
                    ' '
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '500px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$input$2f$SearchTextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: searchValue,
                    onChange: setSearchValue,
                    recentSearches: mockRecentSearches,
                    onRecentSearchClick: handleRecentSearchClick
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(DistrictSearchSection, "HM3Ln43XRFR/2uR77U2yFU1TAX4=");
_c = DistrictSearchSection;
const __TURBOPACK__default__export__ = DistrictSearchSection;
var _c;
__turbopack_context__.k.register(_c, "DistrictSearchSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/atoms/select/CommonSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CommonSelect = ({ value, options, onChange, disabled = false })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = options.find((option)=>option.value === value)?.label || '선택';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommonSelect.useEffect": ()=>{
            const handleClickOutside = {
                "CommonSelect.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["CommonSelect.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "CommonSelect.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["CommonSelect.useEffect"];
        }
    }["CommonSelect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    pointerEvents: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
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
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
_s(CommonSelect, "S+VxyoOAGV/pXeK+kYNNNH3d2q4=");
_c = CommonSelect;
const __TURBOPACK__default__export__ = CommonSelect;
var _c;
__turbopack_context__.k.register(_c, "CommonSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/atoms/select/CommonSelect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [selectedProvince, setSelectedProvince] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedDistrict, setSelectedDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleProvinceChange = (value)=>{
        setSelectedProvince(value);
        setSelectedDistrict(''); // 광역시 변경시 지자체 선택 초기화
    };
    const handleDistrictChange = (value)=>{
        setSelectedDistrict(value);
    };
    const districtOptions = selectedProvince ? MOCK_DATA.districts[selectedProvince] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '16px',
            width: '100%',
            justifyContent: 'center',
            padding: '40px',
            background: 'white',
            borderBottom: '1px solid #E5E5E5'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: selectedProvince,
                    options: MOCK_DATA.provinces,
                    onChange: handleProvinceChange
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-start'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: selectedDistrict,
                    options: districtOptions,
                    onChange: handleDistrictChange,
                    disabled: !selectedProvince
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(DistrictSelectSection, "ndqd8d4OaRQMfWk/uX7zbgNPNgA=");
_c = DistrictSelectSection;
const __TURBOPACK__default__export__ = DistrictSelectSection;
var _c;
__turbopack_context__.k.register(_c, "DistrictSelectSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/atoms/bars/RankBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const RankBar = ({ currentRank, minRank = 1, maxRank = 229, color })=>{
    // 현재 순위의 위치를 백분율로 계산 (1위가 왼쪽, 229위가 오른쪽)
    // 수정된 계산 로직: (currentRank - minRank) / (maxRank - minRank) * 100
    const position = (currentRank - minRank) / (maxRank - minRank) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100%',
            marginTop: '1rem',
            marginBottom: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    color: '#666666',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            minRank,
                            "위"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            maxRank,
                            "위"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: '20px',
                    backgroundColor: '#E7E8EA',
                    border: 'none',
                    position: 'relative'
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: `${position}%`,
                    top: '35px',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '-50px',
                            color,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap'
                        },
                        children: [
                            currentRank,
                            "위"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '6px',
                            height: '50px',
                            backgroundColor: color,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            marginTop: '0px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/atoms/bars/RankBar.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_c = RankBar;
const __TURBOPACK__default__export__ = RankBar;
var _c;
__turbopack_context__.k.register(_c, "RankBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const CategoryDetailModal = ({ isOpen, onClose, score, color })=>{
    if (!isOpen || !score) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: 'white',
                borderRadius: '50px',
                padding: '2.5rem',
                width: '100%',
                maxWidth: '600px',
                margin: '0 2rem',
                position: 'relative'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginBottom: '1.5rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            color: '#666666',
                            padding: '0.5rem'
                        },
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                marginBottom: '2rem',
                                color: color
                            },
                            children: score.indicator
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                width: '100%'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '2rem',
                                    borderRadius: '25px',
                                    backgroundColor: '#f8f9fa',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: '600'
                                        },
                                        children: [
                                            "점수: ",
                                            score.score
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: '600'
                                        },
                                        children: [
                                            "순위: ",
                                            score.rank,
                                            "위"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.9rem',
                                            color: '#666666',
                                            marginTop: '1rem'
                                        },
                                        children: score.source
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_c = CategoryDetailModal;
const __TURBOPACK__default__export__ = CategoryDetailModal;
var _c;
__turbopack_context__.k.register(_c, "CategoryDetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/components/CategoryRanking.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$bars$2f$RankBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/atoms/bars/RankBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$modal$2f$CategoryDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/atoms/modal/CategoryDetailModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CategoryRanking = ({ data })=>{
    _s();
    const { title, color, currentRank, description, scores } = data;
    const [selectedScore, setSelectedScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScoreClick = (score)=>{
        setSelectedScore(score);
        setIsModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col rounded-lg bg-white p-6 shadow-sm",
        style: {
            marginBottom: '5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '2rem',
                        fontWeight: 800,
                        color,
                        marginBottom: '20px'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 whitespace-pre-line text-gray-600",
                style: {
                    fontSize: '0.9rem',
                    lineHeight: '1.5rem',
                    marginBottom: '1rem'
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$bars$2f$RankBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentRank: currentRank,
                minRank: 1,
                maxRank: 229,
                color: color
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4",
                style: {
                    gap: '1.2rem'
                },
                children: scores.map((score, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex cursor-pointer flex-col rounded-lg p-6 transition-all duration-300",
                        style: {
                            backgroundColor: '#E7E8EA',
                            padding: '1.2rem',
                            borderRadius: '10px',
                            aspectRatio: '1',
                            justifyContent: 'space-between'
                        },
                        onClick: ()=>handleScoreClick(score),
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = color;
                            const spans = e.currentTarget.getElementsByTagName('span');
                            for (let span of spans){
                                span.style.color = 'white';
                            }
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = '#E7E8EA';
                            const spans = e.currentTarget.getElementsByTagName('span');
                            for (let span of spans){
                                span.style.color = span.classList.contains('source') ? '#666666' : '#000000';
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-3 text-sm",
                                style: {
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#000000'
                                },
                                children: score.indicator
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 text-2xl font-extrabold",
                                style: {
                                    fontSize: '2rem',
                                    fontWeight: 600,
                                    color: '#000000'
                                },
                                children: score.score
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-2 text-xl font-bold",
                                style: {
                                    fontWeight: 600,
                                    color: '#000000'
                                },
                                children: [
                                    score.rank,
                                    "위"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "source text-sm",
                                style: {
                                    fontSize: '1rem',
                                    color: '#666666'
                                },
                                children: score.source
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$atoms$2f$modal$2f$CategoryDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                score: selectedScore,
                color: color
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/components/CategoryRanking.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(CategoryRanking, "VoqA/nVpqUzos0fcKjgd7CL49tI=");
_c = CategoryRanking;
const __TURBOPACK__default__export__ = CategoryRanking;
var _c;
__turbopack_context__.k.register(_c, "CategoryRanking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/constants/colors.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 카테고리별 색상 매핑
__turbopack_context__.s({
    "categories": (()=>categories),
    "categoryColors": (()=>categoryColors),
    "gradientColorPairs": (()=>gradientColorPairs)
});
const categoryColors = {
    // 4대 영역
    안전회복력: '#74BF9E',
    인구성장력: '#F56542',
    경제활동력: '#F2BA5D',
    생활기반력: '#C2BDF3',
    // 8개 유형
    생활역동형: '#ACAAE8',
    안전복원형: '#74BF9E',
    인구정착형: '#F56542',
    경제정속형: '#F4B04D',
    생활정주형: '#ACAAE8',
    안전정진형: '#74BF9E',
    인구성장형: '#F56542',
    경제혁신형: '#F4B04D'
};
const gradientColorPairs = [
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/components/CategoryRanking.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/constants/colors.ts [app-client] (ecmascript)");
'use client';
;
;
;
const CategoryRankingSection = ()=>{
    const title = '범주 및 세부지표 순위';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '50%',
            display: 'flex',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        paddingTop: '3rem',
                        marginBottom: '2rem'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8",
                    children: mockCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: category
                        }, index, false, {
                            fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = CategoryRankingSection;
const mockCategories = [
    {
        title: '인구성장력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].인구성장력,
        currentRank: 33,
        totalRank: 229,
        description: '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 소멸지수, 혼인 및 출산 관련 지표, 인구 이동(전입·전출), 연령 구조, 외국인 주민 현황, 경제활동인구 및 청년 인구의 규모와 이동 등이 이 범주를 구성하는 주요 요소들입니다. 이러한 지표들은 지역이 얼마나 젊고 활기찬 인구를 유치하고 유지할 수 있는지, 그리고 미래 사회의 변화에 얼마나 능동적으로 대응할 수 있는지를 보여줍니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `경제지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '통계청(2024)'
            }))
    },
    {
        title: '경제활동력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].경제활동력,
        currentRank: 195,
        totalRank: 229,
        description: '경제활동력은 지역 경제의 현재 상태와 미래 성장 잠재력을 종합적으로 평가하는 범주입니다. 재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다. 또한, 타지역 통근취업자 비율, 기초생활수급자 현황, 성별 고용률 격차, SKT 유동인구 데이터 등은 경제활동의 개방성, 포용성, 그리고 역동성을 보여줍니다. 이 범주는 지역 경제가 얼마나 활발하게 움직이고, 얼마나 안정적이며, 미래를 위한 변화와 혁신을 얼마나 잘 수용하고 있는지를 판단하는 기준이 됩니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `사회지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '보건복지부(2024)'
            }))
    },
    {
        title: '생활기반력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].생활기반력,
        currentRank: 47,
        totalRank: 229,
        description: '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 여기에는 빈집비율, 1인당 자동차 등록대수, 주택소유율, 주택노후도와 같은 주거 안정성 및 환경 관련 지표가 포함됩니다. 또한, 광역교통시설(대중교통/도보) 접근 가능 시설 수로 대표되는 교통 편의성, 유아 천 명당 보육시설 수, 인구 천 명당 사설학원 수, 대학교 학생 수와 같은 교육 환경 관련 지표, 그리고 인구 십만 명당 문화기반시설 수와 같은 문화 향유 기회 관련 지표들이 핵심적인 구성 요소입니다. 이러한 지표들은 지역이 주민들에게 얼마나 쾌적하고 편리하며, 풍요로운 삶을 누릴 수 있는 환경을 제공하는지를 보여주며, 이는 지역 주민의 정주 만족도뿐만 아니라 외부 인구 유입을 결정하는 중요한 요인으로 작용합니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `건강지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '질병관리청(2024)'
            }))
    },
    {
        title: '안전회복력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].안전회복력,
        currentRank: 192,
        totalRank: 229,
        description: '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 이 범주에는 평균수명, 치매유병률, 건강관련 삶의 질(EQ-5D), 스트레스 인지율, 자살률, 미충족 의료율, 인구 천 명당 의료기관 병상 수와 같이 주민의 신체적·정신적 건강 및 의료 접근성과 관련된 지표들이 포함됩니다. 또한, 지역 안전등급 현황(교통사고, 화재, 범죄, 생활안전, 자살, 감염병 등 6개 분야 종합), 노인 천 명당 노인여가복지시설 수, 인구 십만 명당 사회복지시설 수, 사회복지예산 규모, 장애친화인증 건수 등 물리적 안전 및 사회적 안전망의 수준을 보여주는 지표들도 중요합니다. 나아가 지역의 녹지율, 온실가스 배출량과 같은 환경적 지속가능성, 문화재 수로 대표되는 역사문화자원 보존, 그리고 인구 천 명당 비영리단체 및 사회적기업 수와 같은 공동체 자본 형성 정도까지 포괄합니다. 이는 단순한 사고 예방을 넘어, 주민들이 안심하고 건강한 삶을 영위하며, 예기치 않은 어려움에 직면했을 때 공동체가 함께 이를 극복해 나갈 수 있는 총체적인 능력을 의미합니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                indicator: `만족도지표 ${i + 1}`,
                score: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                source: '행정안전부(2024)'
            }))
    }
];
const __TURBOPACK__default__export__ = CategoryRankingSection;
var _c;
__turbopack_context__.k.register(_c, "CategoryRankingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SummaryHeader = ()=>{
    // 여기서 필요한 데이터를 직접 가져오거나 처리
    const title = '우리 마을 성장 일기'; // 실제 데이터로 대체
    const typeName = '포용·성장·공동체형'; // 실제 데이터로 대체
    const description = '인구가 점진적으로 증가하고 안전 수준도 높으며, 안정된 경제와 조용한 주거 환경 속에서 공동체적 가치를 증시하는 유형입니다. 안온한 성장을 추구합니다.'; // 실제 데이터로 대체
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex max-w-2xl flex-col items-center gap-4",
        style: {
            gap: '1.5rem',
            marginBottom: '5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-3xl font-bold",
                style: {
                    fontSize: '2.5rem',
                    fontWeight: 800
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: '#C8CDD4',
                    fontSize: '1.5rem',
                    fontWeight: 600
                },
                children: typeName
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '70px',
                    height: '3px',
                    backgroundColor: 'black',
                    marginBottom: '1rem',
                    marginTop: '1rem'
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center leading-relaxed text-gray-600",
                style: {
                    width: '85%',
                    fontSize: '1.2rem',
                    lineHeight: 1.5
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = SummaryHeader;
const __TURBOPACK__default__export__ = SummaryHeader;
var _c;
__turbopack_context__.k.register(_c, "SummaryHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
// 임시 데이터 - 실제로는 props나 API를 통해 받아올 수 있습니다
const summaryData = {
    characteristics: {
        title: '특성',
        paragraphs: [
            '생활·안전·강화형 지역은 인구 구조와 경제 활동은 안정적이지만 다소 정체된(인구정착형, 경제정속형) 모습을 보이는 반면, 생활 환경은 비교적 편리하고 활기찬(생활역동형) 편입니다. 그러나 주민들의 안전, 건강, 복지 수준(안전정진형)은 개선이 필요한 상황입니다.',
            `이는 전통적인 상업 중심지나 구도심 지역이 인구는 더 이상 늘지 않고 경제도 현상 유지 수준이지만, 기존에 형성된 상권이나 교통망 덕분에 생활 편의성은 유지되고 있는 반면, 노후화된 시설이나 변화된 사회 환경에 따른 안전 문제, 또는 고령화에 따른 복지 수요 증가에는 제대로 대응하지 못하고 있는 경우에 해당될 수 있습니다. '겉은 번화하지만 속은 보완이 필요한 도시'의 모습으로, 점진적인 발전을 추구하되 안전 분야에 대한 집중적인 투자가 시급합니다.`
        ]
    },
    opportunities: {
        title: '기회',
        paragraphs: [
            '이미 잘 갖춰진 생활 기반 시설과 활기찬 상권은 이 유형의 중요한 자산입니다. 이를 바탕으로 지역 주민들의 생활 만족도를 유지하면서, 부족한 안전 및 복지 시스템을 개선해 나갈 수 있습니다. 예를 들어, 기존 상업 지구의 환경 개선 사업과 연계하여 안전 시설을 확충하거나, 커뮤니티 센터를 활용하여 주민 건강 증진 프로그램을 운영할 수 있습니다.',
            `안정적인 경제 기반은 급격한 변화 없이 점진적으로 안전 및 복지 분야에 투자할 수 있는 여력을 제공합니다. 지역 주민들의 생활 만족도가 비교적 높다는 점은, 안전 관련 정책 추진 시 주민들의 협조와 참여를 이끌어내는 데 긍정적으로 작용할 수 있습니다. 현재의 취약점을 개선하는 과정에서 지역 맞춤형 안전 모델이나 복지 서비스를 개발하고, 이를 통해 '더 안전하고 살기 좋은 생활 중심지'로의 발전을 도모할 수 있습니다.`
        ]
    },
    improvements: {
        title: '발전방향',
        paragraphs: [
            '가장 시급한 과제는 안전회복력 강화입니다. ',
            '노후 시설물 안전 점검 및 개선, 범죄 예방을 위한 환경 설계(CPTED) 도입, 재난 대응 시스템 강화, 취약계층을 위한 복지 서비스 확대 등 다각적인 노력이 필요합니다. 인구 정체와 경제의 낮은 성장성은 장기적으로 지역 상권의 위축이나 세수 감소로 이어질 수 있으므로, 기존 상권의 경쟁력을 강화하고 새로운 소비를 창출하기 위한 노력이 필요합니다(특화 거리 조성, 야간 관광 활성화, 온라인 마케팅 지원).',
            '고령 인구 비율이 높을 경우, 이들을 위한 맞춤형 안전·건강·복지 서비스 제공에 더욱 많은 자원과 관심이 요구됩니다. 제한된 재정 하에서 효과적인 정책 추진을 위해서는 주민 의견을 적극적으로 수렴하여 우선순위를 정하고, 민간 자원과의 협력을 통해 효율성을 높이는 방안도 고려해야 합니다.'
        ]
    }
};
const SummaryContent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            backgroundColor: '#F8F8F8',
            padding: '10%',
            paddingTop: '12%',
            paddingBottom: '12%',
            borderRadius: '15px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummarySection, {
                title: summaryData.characteristics.title,
                paragraphs: summaryData.characteristics.paragraphs
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummarySection, {
                title: summaryData.opportunities.title,
                paragraphs: summaryData.opportunities.paragraphs
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummarySection, {
                title: summaryData.improvements.title,
                paragraphs: summaryData.improvements.paragraphs
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_c = SummaryContent;
const SummarySection = ({ title, paragraphs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '2rem',
                    fontWeight: 800
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700",
                        style: {
                            fontSize: '0.9rem',
                            lineHeight: 2
                        },
                        children: paragraph
                    }, index, false, {
                        fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
_c1 = SummarySection;
const __TURBOPACK__default__export__ = SummaryContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "SummaryContent");
__turbopack_context__.k.register(_c1, "SummarySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/SummarySection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$components$2f$SummaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/components/SummaryHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$components$2f$SummaryContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/components/SummaryContent.tsx [app-client] (ecmascript)");
;
;
;
const SummarySection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$components$2f$SummaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/SummarySection.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$components$2f$SummaryContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/sections/SummarySection.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/app/results/sections/SummarySection.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/app/results/sections/SummarySection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = SummarySection;
const __TURBOPACK__default__export__ = SummarySection;
var _c;
__turbopack_context__.k.register(_c, "SummarySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/atoms/charts/RadarChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const JewelRadarChart = ({ data, isJewel = false, size = 500 })=>{
    const center = size / 2;
    const radius = size * 0.4;
    // isJewel일 때의 실제 크기 계산 (보석 크기만큼만)
    const jewelSize = isJewel ? radius * 2 : size;
    // 폰트 크기 비율 계산 (기존 크기 기준)
    const fontSize = {
        category: Math.round(size * 0.032),
        value: Math.round(size * 0.02)
    };
    // 라벨 위치 오프셋도 size에 비례하도록 조정
    const labelOffset = {
        category: Math.round(size * 0.06),
        value: Math.round(size * 0.008)
    };
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: jewelSize,
        height: jewelSize,
        style: {
            display: 'block',
            margin: 0,
            padding: 0
        },
        viewBox: isJewel ? `${center - radius} ${center - radius} ${radius * 2} ${radius * 2}` : `0 0 ${size} ${size}`,
        children: [
            !isJewel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${center} ${center} 
                L ${center + radius * Math.cos(0)} ${center + radius * Math.sin(0)}
                A ${radius} ${radius} 0 0 1 
                ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
                Z`,
                        fill: "#F4F4F4"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${center} ${center} 
                L ${center + radius * Math.cos(0)} ${center + radius * Math.sin(0)}
                A ${radius} ${radius} 0 0 1 
                ${center + radius * Math.cos(Math.PI)} ${center + radius * Math.sin(Math.PI)}
                Z`,
                        fill: "#F4F4F4",
                        mask: "url(#labelMask)"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "labelMask",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: jewelSize,
                                height: jewelSize,
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            !isJewel && points.map((pt, i)=>{
                                const x = center + (radius + labelOffset.category) * Math.cos(pt.angle);
                                const y = center + (radius + labelOffset.category) * Math.sin(pt.angle);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: x,
                                    cy: y,
                                    r: fontSize.category * 2,
                                    fill: "black"
                                }, i, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    categories.map((category, i)=>{
                        const pct = Math.min(100, vals[i] / 100 * 100);
                        const [startColor, endColor] = fixedColorPairs[i];
                        if (category === '안전복원형') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: `grad${i}`,
                                cx: center,
                                cy: center,
                                r: radius,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#F56542"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct * 0.7}%`,
                                        stopColor: "#F56542"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct}%`,
                                        stopColor: "#74BF9E"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#74BF9E"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this);
                        }
                        if (category === '인구정착형') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: `grad${i}`,
                                cx: center,
                                cy: center,
                                r: radius,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#F56542"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct}%`,
                                        stopColor: "#F56542",
                                        stopOpacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#F56542",
                                        stopOpacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this);
                        }
                        if (category === '경제정속형') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: `grad${i}`,
                                cx: center,
                                cy: center,
                                r: radius,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#F56542"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct}%`,
                                        stopColor: "#F4B04D"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#F4B04D"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: `grad${i}`,
                            cx: center,
                            cy: center,
                            r: radius,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: startColor
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: `${pct}%`,
                                    stopColor: endColor
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: endColor
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            points.map((pt, i)=>{
                const next = points[(i + 1) % numAxes];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`,
                    fill: `url(#grad${i})`,
                    fillOpacity: 0.7,
                    stroke: "white",
                    strokeWidth: 1
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, this);
            }),
            !isJewel && [
                0.2,
                0.4,
                0.6,
                0.8,
                1.0
            ].map((rate, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: center,
                    cy: center,
                    r: radius * rate,
                    fill: "none",
                    stroke: "#AAA",
                    strokeWidth: 0.5
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this)),
            !isJewel && points.map((pt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: center,
                    y1: center,
                    x2: center + radius * Math.cos(pt.angle),
                    y2: center + radius * Math.sin(pt.angle),
                    stroke: "#AAA",
                    strokeWidth: 0.5
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, this)),
            !isJewel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: center - radius,
                        y1: center,
                        x2: center + radius,
                        y2: center,
                        stroke: "#CCC",
                        strokeWidth: 0.5,
                        strokeDasharray: "4 4"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: center,
                        y1: center - radius,
                        x2: center,
                        y2: center + radius,
                        stroke: "#CCC",
                        strokeWidth: 0.5,
                        strokeDasharray: "4 4"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: center,
                        y: center,
                        textAnchor: "middle",
                        dy: "0.35em",
                        fontSize: fontSize.value,
                        fill: "#CCC",
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                        lineNumber: 284,
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center + r,
                                    y: center,
                                    dx: labelOffset.value,
                                    dy: "0.35em",
                                    fontSize: fontSize.value,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 298,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center - r,
                                    y: center,
                                    dx: -labelOffset.value,
                                    dy: "0.35em",
                                    textAnchor: "end",
                                    fontSize: fontSize.value,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center,
                                    y: center + r,
                                    dy: "1.2em",
                                    textAnchor: "middle",
                                    fontSize: fontSize.value,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 319,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: center,
                                    y: center - r,
                                    dy: "-0.3em",
                                    textAnchor: "middle",
                                    fontSize: fontSize.value,
                                    fill: "#CCC",
                                    children: val
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                                    lineNumber: 329,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, val, true, {
                            fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                            lineNumber: 297,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true),
            !isJewel && points.map((pt, i)=>{
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
                const x = center + (radius + labelOffset.category) * Math.cos(pt.angle);
                const y = center + (radius + labelOffset.category) * Math.sin(pt.angle);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y,
                    textAnchor: "middle",
                    dy: "0.4em",
                    fontSize: fontSize.category,
                    fontWeight: "bold",
                    fill: colorMap[categories[i]],
                    transform: `rotate(${deg} ${x} ${y})`,
                    children: categories[i]
                }, i, false, {
                    fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
                    lineNumber: 363,
                    columnNumber: 13
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/atoms/charts/RadarChart.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
};
_c = JewelRadarChart;
const __TURBOPACK__default__export__ = JewelRadarChart;
var _c;
__turbopack_context__.k.register(_c, "JewelRadarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/JewelChartSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/atoms/charts/RadarChart.tsx [app-client] (ecmascript)");
'use client';
;
;
const JewelChartSection = ()=>{
    const chartData = [
        85,
        30,
        80,
        30,
        25,
        70,
        40,
        36
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '16px',
            width: '100%',
            justifyContent: 'center',
            padding: '20px',
            marginBottom: '250px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: 470,
            data: chartData
        }, void 0, false, {
            fileName: "[project]/packages/frontend/app/results/sections/JewelChartSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/app/results/sections/JewelChartSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = JewelChartSection;
const __TURBOPACK__default__export__ = JewelChartSection;
var _c;
__turbopack_context__.k.register(_c, "JewelChartSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/atoms/badges/RankBadge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/constants/colors.ts [app-client] (ecmascript)");
'use client';
;
;
const RankBadge = ({ rank })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#f8f9fa',
            border: '2px solid #e9ecef',
            borderRadius: '50px',
            padding: '8px 16px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#495057'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "종합순위"
            }, void 0, false, {
                fileName: "[project]/packages/frontend/atoms/badges/RankBadge.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].인구성장력,
                    marginLeft: '4px'
                },
                children: rank
            }, void 0, false, {
                fileName: "[project]/packages/frontend/atoms/badges/RankBadge.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/atoms/badges/RankBadge.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = RankBadge;
const __TURBOPACK__default__export__ = RankBadge;
var _c;
__turbopack_context__.k.register(_c, "RankBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/TitleSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/atoms/charts/RadarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$badges$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/atoms/badges/RankBadge.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const TitleSection = ()=>{
    const chartData = [
        85,
        30,
        80,
        30,
        25,
        70,
        40,
        36
    ];
    const rank = 3; // 예시 데이터, 실제로는 props나 API에서 받아올 수 있습니다
    const districtName = '전라북도 전주시';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            padding: '20px',
            marginBottom: '250px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: chartData,
                isJewel: true,
                size: 300
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/TitleSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '3.5rem',
                    color: '#000',
                    fontWeight: '800'
                },
                children: districtName
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/TitleSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$atoms$2f$badges$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rank: rank
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/TitleSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/TitleSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = TitleSection;
const __TURBOPACK__default__export__ = TitleSection;
var _c;
__turbopack_context__.k.register(_c, "TitleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const PreRegistrationSection = ()=>{
    const title = '균형발전 전략의 시작, KLACI 인사이트 리포트';
    const descriptionLine1 = '지역자산역량지수 프레임워크 해설과 활용법,';
    const descriptionLine2 = '그리고 각 지자체의 데이터 인사이트를 한 권의 책으로 받아보세요';
    const reservationButtonText = '사전 예약 바로가기';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#808DA1',
            borderRadius: '12px',
            color: '#ffffff',
            minHeight: '300px',
            justifyContent: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '16px',
                    lineHeight: '1.4'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    lineHeight: 1.5
                },
                children: descriptionLine1
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    lineHeight: 1.5
                },
                children: descriptionLine2
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    border: 'none',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    minWidth: '220px',
                    background: 'white',
                    color: '#1C3FD3',
                    marginTop: '50px'
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.backgroundColor = '#ffffff';
                },
                children: reservationButtonText
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = PreRegistrationSection;
const __TURBOPACK__default__export__ = PreRegistrationSection;
var _c;
__turbopack_context__.k.register(_c, "PreRegistrationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/store/slices/authSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAuthSlice": (()=>createAuthSlice)
});
const initialState = {
    isLoggedIn: false
};
const createAuthSlice = (set)=>({
        auth: initialState,
        setIsLoggedIn: (isLoggedIn)=>{
            set((state)=>({
                    auth: {
                        ...state.auth,
                        isLoggedIn
                    }
                }));
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/store/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuth": (()=>useAuth),
    "useAuthActions": (()=>useAuthActions),
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/slices/authSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((...args)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthSlice"])(...args)
    }), {
    name: 'k-laci-store',
    partialize: (state)=>({
            auth: {
                isLoggedIn: state.auth.isLoggedIn
            }
        })
})));
const useAuth = ()=>{
    _s();
    return useStore({
        "useAuth.useStore": (state)=>state.auth
    }["useAuth.useStore"]);
};
_s(useAuth, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useAuthActions = ()=>{
    _s1();
    return useStore({
        "useAuthActions.useStore": (state)=>({
                setIsLoggedIn: state.setIsLoggedIn
            })
    }["useAuthActions.useStore"]);
};
_s1(useAuthActions, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/sections/RankingSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/constants/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// TOP 10 데이터
const top10Data = [
    {
        rank: 1,
        category: '안전회복력',
        detail: '의료 접근성 우수'
    },
    {
        rank: 2,
        category: '인구성장력',
        detail: '청년 인구 유입 증가'
    },
    {
        rank: 3,
        category: '경제활동력',
        detail: '고용률 상승'
    },
    {
        rank: 4,
        category: '생활기반력',
        detail: '교통 편의성 향상'
    },
    {
        rank: 5,
        category: '안전회복력',
        detail: '범죄율 감소'
    },
    {
        rank: 6,
        category: '인구성장력',
        detail: '출산율 개선'
    },
    {
        rank: 7,
        category: '경제활동력',
        detail: '소득 수준 향상'
    },
    {
        rank: 8,
        category: '생활기반력',
        detail: '문화시설 확충'
    },
    {
        rank: 9,
        category: '안전회복력',
        detail: '재난 대응 체계 강화'
    },
    {
        rank: 10,
        category: '인구성장력',
        detail: '외국인 주민 증가'
    }
];
// LOW 10 데이터
const low10Data = [
    {
        rank: 220,
        category: '경제활동력',
        detail: '고용률 하락'
    },
    {
        rank: 221,
        category: '생활기반력',
        detail: '교통 불편'
    },
    {
        rank: 222,
        category: '안전회복력',
        detail: '의료 접근성 부족'
    },
    {
        rank: 223,
        category: '인구성장력',
        detail: '인구 유출 증가'
    },
    {
        rank: 224,
        category: '경제활동력',
        detail: '소득 수준 감소'
    },
    {
        rank: 225,
        category: '생활기반력',
        detail: '문화시설 부족'
    },
    {
        rank: 226,
        category: '안전회복력',
        detail: '범죄율 증가'
    },
    {
        rank: 227,
        category: '인구성장력',
        detail: '출산율 감소'
    },
    {
        rank: 228,
        category: '경제활동력',
        detail: '사업체 수 감소'
    },
    {
        rank: 229,
        category: '생활기반력',
        detail: '주거 환경 악화'
    }
];
// 랭킹 컴포넌트
const RankingList = ({ title, data, icon, isLoggedIn })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            maxWidth: '45%',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textAlign: 'left'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#BCBEC0',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            color: 'white'
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '2px solid #BCBEC0',
                    marginBottom: '20px'
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                },
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            padding: '8px 0',
                            opacity: isLoggedIn ? 1 : Math.max(0.3, 1 - index * 0.15)
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    minWidth: '40px'
                                },
                                children: [
                                    item.rank,
                                    "위"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"][item.category] || '#666666',
                                    minWidth: '80px'
                                },
                                children: item.category
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '14px',
                                    color: '#000000',
                                    flex: 1
                                },
                                children: item.detail
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to bottom, transparent, white)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_c = RankingList;
// 로그인 유도 컴포넌트
const LoginPrompt = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: '#EAEAEA',
            borderRadius: '10px',
            padding: '40px',
            textAlign: 'center',
            marginTop: '40px',
            maxWidth: '800px',
            margin: '40px auto 0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: '#000000'
                },
                children: "이 지역의 숨겨진 역량, 지금 확인해보세요."
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '16px',
                    marginBottom: '24px',
                    color: '#666666',
                    lineHeight: '1.5'
                },
                children: "55개 상세 지표를 통해 지역의 진짜 모습을 확인할 수 있습니다."
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    border: 'none',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    minWidth: '280px',
                    transition: 'all 0.3s ease'
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.backgroundColor = '#333333';
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.backgroundColor = '#000000';
                },
                children: "로그인하고 인사이트 더 보기"
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
};
_c1 = LoginPrompt;
const RankingSection = ()=>{
    _s();
    // useAuth 훅을 통해 로그인 상태 가져오기
    const { isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    console.log('isLoggedIn', isLoggedIn);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            padding: '40px 20px',
            marginBottom: '250px',
            maxWidth: '1200px',
            margin: '0 auto 250px auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '40px',
                    width: '100%',
                    justifyContent: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RankingList, {
                        title: "TOP 10",
                        data: top10Data,
                        icon: "↑",
                        isLoggedIn: isLoggedIn
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RankingList, {
                        title: "LOW 10",
                        data: low10Data,
                        icon: "↓",
                        isLoggedIn: isLoggedIn
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginPrompt, {}, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
                lineNumber: 271,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/sections/RankingSection.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
};
_s(RankingSection, "Jbx0LrCfdz/EDenJV2YbpvzQ6CY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c2 = RankingSection;
const __TURBOPACK__default__export__ = RankingSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RankingList");
__turbopack_context__.k.register(_c1, "LoginPrompt");
__turbopack_context__.k.register(_c2, "RankingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$layout$2f$ResultLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/layout/ResultLayout.tsx [app-client] (ecmascript)");
// sections
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$DistrictSearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/DistrictSearchSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$DistrictSelectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/DistrictSelectSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$CategoryRankingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/CategoryRankingSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$SummarySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/SummarySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$JewelChartSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/JewelChartSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$TitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/TitleSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$PreRegistrationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/PreRegistrationSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$RankingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/app/results/sections/RankingSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function ResultsPage() {
    _s();
    const [isFloating, setIsFloating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            const handleScroll = {
                "ResultsPage.useEffect.handleScroll": ()=>{
                    // DistrictSearchSection의 높이를 고려하여 스크롤 위치 계산
                    const scrollThreshold = 200; // 스크롤 임계값 (조정 가능)
                    const scrollY = window.scrollY;
                    setIsFloating(scrollY > scrollThreshold);
                }
            }["ResultsPage.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "ResultsPage.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["ResultsPage.useEffect"];
        }
    }["ResultsPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$layout$2f$ResultLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                className: "jsx-c9be297a59958b1f",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$DistrictSearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    !isFloating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$DistrictSelectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/page.tsx",
                        lineNumber: 46,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '100%',
                            background: '#F4F4F4'
                        },
                        className: "jsx-c9be297a59958b1f",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '50%',
                                gap: '100px',
                                paddingTop: '100px'
                            },
                            className: "jsx-c9be297a59958b1f",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$JewelChartSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$TitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$SummarySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$RankingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/frontend/app/results/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    background: '#F8F8F8'
                },
                className: "jsx-c9be297a59958b1f",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$CategoryRankingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    width: '90%',
                    justifyContent: 'center',
                    background: '#F8F8F8',
                    marginTop: '100px',
                    marginBottom: '100px'
                },
                className: "jsx-c9be297a59958b1f",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$PreRegistrationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            isFloating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '30px',
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    animation: 'slideDown 0.3s ease-out'
                },
                className: "jsx-c9be297a59958b1f",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$app$2f$results$2f$sections$2f$DistrictSelectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/page.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c9be297a59958b1f",
                children: "@keyframes slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ResultsPage, "OSfJ1Bwf9g+QtYAw2Kcp2ildEm4=");
_c = ResultsPage;
var _c;
__turbopack_context__.k.register(_c, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=packages_frontend_bd4de8f0._.js.map