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
        // {
        //   href: '/about',
        //   label: '지역자산역량지수 소개',
        // },
        // {
        //   href: '/summary',
        //   label: '주요 분석 결과',
        // },
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
    const handleMouseEnter = (e)=>{
        e.currentTarget.style.color = '#ffffff';
    };
    const handleMouseLeave = (e)=>{
        e.currentTarget.style.color = '#D1D5DB';
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
                                lineNumber: 58,
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
                                            onMouseEnter: handleMouseEnter,
                                            onMouseLeave: handleMouseLeave,
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                        lineNumber: 57,
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
                                lineNumber: 91,
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
                                            onMouseEnter: handleMouseEnter,
                                            onMouseLeave: handleMouseLeave,
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                        lineNumber: 90,
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
                                lineNumber: 124,
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
                                            onMouseEnter: handleMouseEnter,
                                            onMouseLeave: handleMouseLeave,
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/Footer/FooterTopSection.tsx",
        lineNumber: 40,
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
"[project]/packages/frontend/data/province_data.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"강원특별자치도\"},{\"id\":2,\"name\":\"경기도\"},{\"id\":3,\"name\":\"경상남도\"},{\"id\":4,\"name\":\"경상북도\"},{\"id\":5,\"name\":\"광주광역시\"},{\"id\":6,\"name\":\"대구광역시\"},{\"id\":7,\"name\":\"대전광역시\"},{\"id\":8,\"name\":\"부산광역시\"},{\"id\":9,\"name\":\"서울특별시\"},{\"id\":10,\"name\":\"세종특별자치시\"},{\"id\":11,\"name\":\"울산광역시\"},{\"id\":12,\"name\":\"인천광역시\"},{\"id\":13,\"name\":\"전라남도\"},{\"id\":14,\"name\":\"전라북도\"},{\"id\":15,\"name\":\"제주특별자치도\"},{\"id\":16,\"name\":\"충청남도\"},{\"id\":17,\"name\":\"충청북도\"}]"));}}),
"[project]/packages/frontend/data/regions_data.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"province_id\":9,\"name\":\"종로구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":42,\"economy_score\":36,\"living_score\":50,\"safety_score\":78},{\"id\":2,\"province_id\":9,\"name\":\"중구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":78,\"economy_score\":82,\"living_score\":52,\"safety_score\":34},{\"id\":3,\"province_id\":9,\"name\":\"용산구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":46,\"economy_score\":83,\"living_score\":58,\"safety_score\":34},{\"id\":4,\"province_id\":9,\"name\":\"성동구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":76,\"economy_score\":70,\"living_score\":40,\"safety_score\":42},{\"id\":5,\"province_id\":9,\"name\":\"광진구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVA\",\"growth_score\":70,\"economy_score\":65,\"living_score\":67,\"safety_score\":51},{\"id\":6,\"province_id\":9,\"name\":\"동대문구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":33,\"economy_score\":59,\"living_score\":36,\"safety_score\":46},{\"id\":7,\"province_id\":9,\"name\":\"중랑구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":72,\"economy_score\":43,\"living_score\":32,\"safety_score\":36},{\"id\":8,\"province_id\":9,\"name\":\"성북구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":58,\"economy_score\":70,\"living_score\":66,\"safety_score\":64},{\"id\":9,\"province_id\":9,\"name\":\"강북구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":45,\"economy_score\":60,\"living_score\":89,\"safety_score\":44},{\"id\":10,\"province_id\":9,\"name\":\"도봉구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":79,\"economy_score\":67,\"living_score\":75,\"safety_score\":69},{\"id\":11,\"province_id\":9,\"name\":\"노원구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"SCVA\",\"growth_score\":61,\"economy_score\":38,\"living_score\":76,\"safety_score\":84},{\"id\":12,\"province_id\":9,\"name\":\"은평구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVA\",\"growth_score\":33,\"economy_score\":60,\"living_score\":38,\"safety_score\":81},{\"id\":13,\"province_id\":9,\"name\":\"서대문구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVR\",\"growth_score\":36,\"economy_score\":40,\"living_score\":43,\"safety_score\":57},{\"id\":14,\"province_id\":9,\"name\":\"마포구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVR\",\"growth_score\":51,\"economy_score\":75,\"living_score\":61,\"safety_score\":90},{\"id\":15,\"province_id\":9,\"name\":\"양천구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVA\",\"growth_score\":61,\"economy_score\":74,\"living_score\":89,\"safety_score\":86},{\"id\":16,\"province_id\":9,\"name\":\"강서구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVA\",\"growth_score\":39,\"economy_score\":77,\"living_score\":59,\"safety_score\":54},{\"id\":17,\"province_id\":9,\"name\":\"구로구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":50,\"economy_score\":61,\"living_score\":34,\"safety_score\":35},{\"id\":18,\"province_id\":9,\"name\":\"금천구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":71,\"economy_score\":48,\"living_score\":38,\"safety_score\":64},{\"id\":19,\"province_id\":9,\"name\":\"영등포구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":59,\"economy_score\":78,\"living_score\":80,\"safety_score\":80},{\"id\":20,\"province_id\":9,\"name\":\"동작구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":65,\"economy_score\":46,\"living_score\":33,\"safety_score\":72},{\"id\":21,\"province_id\":9,\"name\":\"관악구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"GCVR\",\"growth_score\":40,\"economy_score\":68,\"living_score\":33,\"safety_score\":72},{\"id\":22,\"province_id\":9,\"name\":\"서초구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":82,\"economy_score\":59,\"living_score\":85,\"safety_score\":73},{\"id\":23,\"province_id\":9,\"name\":\"강남구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"STVR\",\"growth_score\":39,\"economy_score\":31,\"living_score\":33,\"safety_score\":37},{\"id\":24,\"province_id\":9,\"name\":\"송파구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVR\",\"growth_score\":80,\"economy_score\":33,\"living_score\":79,\"safety_score\":32},{\"id\":25,\"province_id\":9,\"name\":\"강동구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMA\",\"growth_score\":35,\"economy_score\":90,\"living_score\":30,\"safety_score\":67},{\"id\":26,\"province_id\":8,\"name\":\"중구\",\"district_type\":\"구\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":70,\"economy_score\":55,\"living_score\":87,\"safety_score\":62},{\"id\":27,\"province_id\":8,\"name\":\"서구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVA\",\"growth_score\":36,\"economy_score\":79,\"living_score\":43,\"safety_score\":72},{\"id\":28,\"province_id\":8,\"name\":\"동구\",\"district_type\":\"구\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":37,\"economy_score\":65,\"living_score\":41,\"safety_score\":84},{\"id\":29,\"province_id\":8,\"name\":\"영도구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMA\",\"growth_score\":36,\"economy_score\":44,\"living_score\":68,\"safety_score\":61},{\"id\":30,\"province_id\":8,\"name\":\"부산진구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":64,\"economy_score\":64,\"living_score\":67,\"safety_score\":48},{\"id\":31,\"province_id\":8,\"name\":\"동래구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":75,\"economy_score\":83,\"living_score\":56,\"safety_score\":74},{\"id\":32,\"province_id\":8,\"name\":\"남구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":52,\"economy_score\":87,\"living_score\":84,\"safety_score\":56},{\"id\":33,\"province_id\":8,\"name\":\"북구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":72,\"economy_score\":61,\"living_score\":74,\"safety_score\":33},{\"id\":34,\"province_id\":8,\"name\":\"해운대구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":46,\"economy_score\":76,\"living_score\":85,\"safety_score\":49},{\"id\":35,\"province_id\":8,\"name\":\"사하구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":34,\"economy_score\":33,\"living_score\":79,\"safety_score\":75},{\"id\":36,\"province_id\":8,\"name\":\"금정구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":90,\"economy_score\":41,\"living_score\":40,\"safety_score\":45},{\"id\":37,\"province_id\":8,\"name\":\"강서구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":60,\"economy_score\":58,\"living_score\":55,\"safety_score\":48},{\"id\":38,\"province_id\":8,\"name\":\"연제구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":76,\"economy_score\":61,\"living_score\":63,\"safety_score\":74},{\"id\":39,\"province_id\":8,\"name\":\"수영구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":82,\"economy_score\":60,\"living_score\":63,\"safety_score\":88},{\"id\":40,\"province_id\":8,\"name\":\"사상구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":59,\"economy_score\":32,\"living_score\":67,\"safety_score\":47},{\"id\":41,\"province_id\":8,\"name\":\"기장군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":51,\"economy_score\":58,\"living_score\":67,\"safety_score\":43},{\"id\":42,\"province_id\":6,\"name\":\"중구\",\"district_type\":\"구\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":59,\"economy_score\":69,\"living_score\":30,\"safety_score\":70},{\"id\":43,\"province_id\":6,\"name\":\"동구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":63,\"economy_score\":82,\"living_score\":64,\"safety_score\":35},{\"id\":44,\"province_id\":6,\"name\":\"서구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVA\",\"growth_score\":67,\"economy_score\":82,\"living_score\":44,\"safety_score\":87},{\"id\":45,\"province_id\":6,\"name\":\"남구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":79,\"economy_score\":79,\"living_score\":31,\"safety_score\":66},{\"id\":46,\"province_id\":6,\"name\":\"북구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":47,\"economy_score\":48,\"living_score\":38,\"safety_score\":67},{\"id\":47,\"province_id\":6,\"name\":\"수성구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":47,\"economy_score\":77,\"living_score\":85,\"safety_score\":41},{\"id\":48,\"province_id\":6,\"name\":\"달서구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"SCVR\",\"growth_score\":52,\"economy_score\":65,\"living_score\":49,\"safety_score\":71},{\"id\":49,\"province_id\":6,\"name\":\"달성군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMA\",\"growth_score\":62,\"economy_score\":83,\"living_score\":35,\"safety_score\":87},{\"id\":50,\"province_id\":12,\"name\":\"중구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":69,\"economy_score\":48,\"living_score\":50,\"safety_score\":65},{\"id\":51,\"province_id\":12,\"name\":\"동구\",\"district_type\":\"구\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":61,\"economy_score\":52,\"living_score\":42,\"safety_score\":46},{\"id\":52,\"province_id\":12,\"name\":\"연수구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":79,\"economy_score\":50,\"living_score\":36,\"safety_score\":87},{\"id\":53,\"province_id\":12,\"name\":\"남동구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"STVR\",\"growth_score\":53,\"economy_score\":33,\"living_score\":34,\"safety_score\":52},{\"id\":54,\"province_id\":12,\"name\":\"부평구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"SCVR\",\"growth_score\":56,\"economy_score\":63,\"living_score\":61,\"safety_score\":69},{\"id\":55,\"province_id\":12,\"name\":\"계양구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":86,\"economy_score\":38,\"living_score\":59,\"safety_score\":60},{\"id\":56,\"province_id\":12,\"name\":\"서구\",\"district_type\":\"구\",\"weight_class\":\"라이트\",\"klaci_code\":\"GCVA\",\"growth_score\":70,\"economy_score\":43,\"living_score\":36,\"safety_score\":43},{\"id\":57,\"province_id\":12,\"name\":\"미추홀구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCMR\",\"growth_score\":87,\"economy_score\":83,\"living_score\":60,\"safety_score\":82},{\"id\":58,\"province_id\":12,\"name\":\"강화군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":30,\"economy_score\":80,\"living_score\":72,\"safety_score\":82},{\"id\":59,\"province_id\":12,\"name\":\"옹진군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STVA\",\"growth_score\":37,\"economy_score\":36,\"living_score\":40,\"safety_score\":67},{\"id\":60,\"province_id\":5,\"name\":\"동구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":89,\"economy_score\":88,\"living_score\":73,\"safety_score\":57},{\"id\":61,\"province_id\":5,\"name\":\"서구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVA\",\"growth_score\":35,\"economy_score\":81,\"living_score\":69,\"safety_score\":53},{\"id\":62,\"province_id\":5,\"name\":\"남구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":80,\"economy_score\":60,\"living_score\":61,\"safety_score\":69},{\"id\":63,\"province_id\":5,\"name\":\"북구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":54,\"economy_score\":83,\"living_score\":87,\"safety_score\":68},{\"id\":64,\"province_id\":5,\"name\":\"광산구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVR\",\"growth_score\":36,\"economy_score\":68,\"living_score\":83,\"safety_score\":40},{\"id\":65,\"province_id\":7,\"name\":\"동구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":31,\"economy_score\":57,\"living_score\":77,\"safety_score\":87},{\"id\":66,\"province_id\":7,\"name\":\"중구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":88,\"economy_score\":40,\"living_score\":31,\"safety_score\":41},{\"id\":67,\"province_id\":7,\"name\":\"서구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVA\",\"growth_score\":83,\"economy_score\":71,\"living_score\":68,\"safety_score\":61},{\"id\":68,\"province_id\":7,\"name\":\"유성구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVR\",\"growth_score\":78,\"economy_score\":37,\"living_score\":76,\"safety_score\":69},{\"id\":69,\"province_id\":7,\"name\":\"대덕구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":49,\"economy_score\":46,\"living_score\":40,\"safety_score\":39},{\"id\":70,\"province_id\":11,\"name\":\"중구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":73,\"economy_score\":81,\"living_score\":31,\"safety_score\":46},{\"id\":71,\"province_id\":11,\"name\":\"남구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":77,\"economy_score\":88,\"living_score\":66,\"safety_score\":74},{\"id\":72,\"province_id\":11,\"name\":\"동구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":37,\"economy_score\":63,\"living_score\":77,\"safety_score\":59},{\"id\":73,\"province_id\":11,\"name\":\"북구\",\"district_type\":\"구\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":54,\"economy_score\":56,\"living_score\":56,\"safety_score\":39},{\"id\":74,\"province_id\":11,\"name\":\"울주군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":48,\"economy_score\":45,\"living_score\":87,\"safety_score\":83},{\"id\":75,\"province_id\":10,\"name\":\"세종시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVR\",\"growth_score\":30,\"economy_score\":74,\"living_score\":89,\"safety_score\":32},{\"id\":76,\"province_id\":2,\"name\":\"수원시\",\"district_type\":\"시\",\"weight_class\":\"헤비\",\"klaci_code\":\"GTVR\",\"growth_score\":43,\"economy_score\":55,\"living_score\":80,\"safety_score\":44},{\"id\":77,\"province_id\":2,\"name\":\"성남시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVR\",\"growth_score\":82,\"economy_score\":70,\"living_score\":49,\"safety_score\":86},{\"id\":78,\"province_id\":2,\"name\":\"의정부시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVR\",\"growth_score\":68,\"economy_score\":69,\"living_score\":40,\"safety_score\":64},{\"id\":79,\"province_id\":2,\"name\":\"안양시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVA\",\"growth_score\":55,\"economy_score\":87,\"living_score\":62,\"safety_score\":57},{\"id\":80,\"province_id\":2,\"name\":\"부천시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVA\",\"growth_score\":35,\"economy_score\":52,\"living_score\":79,\"safety_score\":60},{\"id\":81,\"province_id\":2,\"name\":\"광명시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":62,\"economy_score\":80,\"living_score\":74,\"safety_score\":72},{\"id\":82,\"province_id\":2,\"name\":\"평택시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTMR\",\"growth_score\":54,\"economy_score\":48,\"living_score\":90,\"safety_score\":53},{\"id\":83,\"province_id\":2,\"name\":\"동두천시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":73,\"economy_score\":79,\"living_score\":87,\"safety_score\":53},{\"id\":84,\"province_id\":2,\"name\":\"안산시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVR\",\"growth_score\":38,\"economy_score\":48,\"living_score\":36,\"safety_score\":90},{\"id\":85,\"province_id\":2,\"name\":\"고양시\",\"district_type\":\"시\",\"weight_class\":\"헤비\",\"klaci_code\":\"GTVA\",\"growth_score\":68,\"economy_score\":86,\"living_score\":53,\"safety_score\":66},{\"id\":86,\"province_id\":2,\"name\":\"과천시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"GCMA\",\"growth_score\":42,\"economy_score\":35,\"living_score\":73,\"safety_score\":36},{\"id\":87,\"province_id\":2,\"name\":\"구리시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVA\",\"growth_score\":52,\"economy_score\":56,\"living_score\":62,\"safety_score\":50},{\"id\":88,\"province_id\":2,\"name\":\"남양주시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVR\",\"growth_score\":66,\"economy_score\":71,\"living_score\":46,\"safety_score\":53},{\"id\":89,\"province_id\":2,\"name\":\"오산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVR\",\"growth_score\":62,\"economy_score\":83,\"living_score\":57,\"safety_score\":65},{\"id\":90,\"province_id\":2,\"name\":\"시흥시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVR\",\"growth_score\":30,\"economy_score\":80,\"living_score\":67,\"safety_score\":84},{\"id\":91,\"province_id\":2,\"name\":\"군포시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":63,\"economy_score\":49,\"living_score\":40,\"safety_score\":35},{\"id\":92,\"province_id\":2,\"name\":\"의왕시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":84,\"economy_score\":32,\"living_score\":62,\"safety_score\":45},{\"id\":93,\"province_id\":2,\"name\":\"하남시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":30,\"economy_score\":73,\"living_score\":52,\"safety_score\":72},{\"id\":94,\"province_id\":2,\"name\":\"용인시\",\"district_type\":\"시\",\"weight_class\":\"헤비\",\"klaci_code\":\"GTVA\",\"growth_score\":63,\"economy_score\":84,\"living_score\":80,\"safety_score\":87},{\"id\":95,\"province_id\":2,\"name\":\"파주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":36,\"economy_score\":58,\"living_score\":32,\"safety_score\":64},{\"id\":96,\"province_id\":2,\"name\":\"이천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTVA\",\"growth_score\":65,\"economy_score\":60,\"living_score\":33,\"safety_score\":52},{\"id\":97,\"province_id\":2,\"name\":\"안성시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":83,\"economy_score\":84,\"living_score\":35,\"safety_score\":74},{\"id\":98,\"province_id\":2,\"name\":\"김포시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":51,\"economy_score\":88,\"living_score\":87,\"safety_score\":56},{\"id\":99,\"province_id\":2,\"name\":\"화성시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTMA\",\"growth_score\":82,\"economy_score\":56,\"living_score\":83,\"safety_score\":35},{\"id\":100,\"province_id\":2,\"name\":\"광주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":44,\"economy_score\":34,\"living_score\":62,\"safety_score\":77},{\"id\":101,\"province_id\":2,\"name\":\"양주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMA\",\"growth_score\":58,\"economy_score\":80,\"living_score\":48,\"safety_score\":32},{\"id\":102,\"province_id\":2,\"name\":\"포천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVA\",\"growth_score\":60,\"economy_score\":31,\"living_score\":59,\"safety_score\":43},{\"id\":103,\"province_id\":2,\"name\":\"여주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":51,\"economy_score\":50,\"living_score\":45,\"safety_score\":81},{\"id\":104,\"province_id\":2,\"name\":\"연천군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":35,\"economy_score\":89,\"living_score\":39,\"safety_score\":66},{\"id\":105,\"province_id\":2,\"name\":\"가평군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMA\",\"growth_score\":52,\"economy_score\":42,\"living_score\":64,\"safety_score\":67},{\"id\":106,\"province_id\":2,\"name\":\"양평군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMA\",\"growth_score\":66,\"economy_score\":79,\"living_score\":68,\"safety_score\":45},{\"id\":107,\"province_id\":1,\"name\":\"춘천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVR\",\"growth_score\":60,\"economy_score\":56,\"living_score\":69,\"safety_score\":55},{\"id\":108,\"province_id\":1,\"name\":\"원주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMA\",\"growth_score\":75,\"economy_score\":75,\"living_score\":54,\"safety_score\":36},{\"id\":109,\"province_id\":1,\"name\":\"강릉시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":30,\"economy_score\":44,\"living_score\":54,\"safety_score\":67},{\"id\":110,\"province_id\":1,\"name\":\"동해시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":60,\"economy_score\":40,\"living_score\":57,\"safety_score\":79},{\"id\":111,\"province_id\":1,\"name\":\"태백시\",\"district_type\":\"시\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":72,\"economy_score\":35,\"living_score\":66,\"safety_score\":50},{\"id\":112,\"province_id\":1,\"name\":\"속초시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":87,\"economy_score\":88,\"living_score\":53,\"safety_score\":31},{\"id\":113,\"province_id\":1,\"name\":\"삼척시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":84,\"economy_score\":81,\"living_score\":69,\"safety_score\":80},{\"id\":114,\"province_id\":1,\"name\":\"홍천군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":70,\"economy_score\":48,\"living_score\":85,\"safety_score\":46},{\"id\":115,\"province_id\":1,\"name\":\"횡성군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"GCMA\",\"growth_score\":37,\"economy_score\":83,\"living_score\":68,\"safety_score\":48},{\"id\":116,\"province_id\":1,\"name\":\"영월군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":61,\"economy_score\":37,\"living_score\":56,\"safety_score\":49},{\"id\":117,\"province_id\":1,\"name\":\"평창군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":76,\"economy_score\":52,\"living_score\":80,\"safety_score\":53},{\"id\":118,\"province_id\":1,\"name\":\"정선군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":59,\"economy_score\":58,\"living_score\":37,\"safety_score\":45},{\"id\":119,\"province_id\":1,\"name\":\"철원군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":59,\"economy_score\":84,\"living_score\":54,\"safety_score\":41},{\"id\":120,\"province_id\":1,\"name\":\"화천군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":61,\"economy_score\":30,\"living_score\":59,\"safety_score\":79},{\"id\":121,\"province_id\":1,\"name\":\"양구군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":84,\"economy_score\":56,\"living_score\":30,\"safety_score\":66},{\"id\":122,\"province_id\":1,\"name\":\"인제군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":76,\"economy_score\":34,\"living_score\":51,\"safety_score\":88},{\"id\":123,\"province_id\":1,\"name\":\"고성군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STMR\",\"growth_score\":46,\"economy_score\":33,\"living_score\":31,\"safety_score\":34},{\"id\":124,\"province_id\":1,\"name\":\"양양군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STMA\",\"growth_score\":70,\"economy_score\":34,\"living_score\":73,\"safety_score\":31},{\"id\":125,\"province_id\":17,\"name\":\"충주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":65,\"economy_score\":68,\"living_score\":36,\"safety_score\":79},{\"id\":126,\"province_id\":17,\"name\":\"제천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":45,\"economy_score\":80,\"living_score\":64,\"safety_score\":86},{\"id\":127,\"province_id\":17,\"name\":\"청주시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTVR\",\"growth_score\":50,\"economy_score\":57,\"living_score\":56,\"safety_score\":72},{\"id\":128,\"province_id\":17,\"name\":\"보은군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":81,\"economy_score\":86,\"living_score\":74,\"safety_score\":75},{\"id\":129,\"province_id\":17,\"name\":\"옥천군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":55,\"economy_score\":30,\"living_score\":83,\"safety_score\":87},{\"id\":130,\"province_id\":17,\"name\":\"영동군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":49,\"economy_score\":84,\"living_score\":79,\"safety_score\":72},{\"id\":131,\"province_id\":17,\"name\":\"진천군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"GTVR\",\"growth_score\":85,\"economy_score\":70,\"living_score\":45,\"safety_score\":84},{\"id\":132,\"province_id\":17,\"name\":\"괴산군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STMA\",\"growth_score\":40,\"economy_score\":55,\"living_score\":67,\"safety_score\":32},{\"id\":133,\"province_id\":17,\"name\":\"음성군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":72,\"economy_score\":36,\"living_score\":66,\"safety_score\":70},{\"id\":134,\"province_id\":17,\"name\":\"단양군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":83,\"economy_score\":80,\"living_score\":74,\"safety_score\":60},{\"id\":135,\"province_id\":17,\"name\":\"증평군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STVR\",\"growth_score\":70,\"economy_score\":83,\"living_score\":31,\"safety_score\":66},{\"id\":136,\"province_id\":16,\"name\":\"천안시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GTMR\",\"growth_score\":83,\"economy_score\":76,\"living_score\":66,\"safety_score\":86},{\"id\":137,\"province_id\":16,\"name\":\"공주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":83,\"economy_score\":76,\"living_score\":81,\"safety_score\":48},{\"id\":138,\"province_id\":16,\"name\":\"보령시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":52,\"economy_score\":58,\"living_score\":72,\"safety_score\":60},{\"id\":139,\"province_id\":16,\"name\":\"아산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":43,\"economy_score\":57,\"living_score\":51,\"safety_score\":39},{\"id\":140,\"province_id\":16,\"name\":\"서산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":50,\"economy_score\":71,\"living_score\":58,\"safety_score\":52},{\"id\":141,\"province_id\":16,\"name\":\"논산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":64,\"economy_score\":76,\"living_score\":79,\"safety_score\":42},{\"id\":142,\"province_id\":16,\"name\":\"계룡시\",\"district_type\":\"시\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":53,\"economy_score\":58,\"living_score\":44,\"safety_score\":83},{\"id\":143,\"province_id\":16,\"name\":\"당진시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":78,\"economy_score\":58,\"living_score\":76,\"safety_score\":89},{\"id\":144,\"province_id\":16,\"name\":\"금산군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":81,\"economy_score\":44,\"living_score\":79,\"safety_score\":36},{\"id\":145,\"province_id\":16,\"name\":\"부여군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":57,\"economy_score\":72,\"living_score\":62,\"safety_score\":59},{\"id\":146,\"province_id\":16,\"name\":\"서천군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"STVR\",\"growth_score\":30,\"economy_score\":43,\"living_score\":74,\"safety_score\":30},{\"id\":147,\"province_id\":16,\"name\":\"청양군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":44,\"economy_score\":77,\"living_score\":70,\"safety_score\":76},{\"id\":148,\"province_id\":16,\"name\":\"홍성군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":68,\"economy_score\":52,\"living_score\":32,\"safety_score\":62},{\"id\":149,\"province_id\":16,\"name\":\"예산군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":64,\"economy_score\":68,\"living_score\":52,\"safety_score\":90},{\"id\":150,\"province_id\":16,\"name\":\"태안군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":54,\"economy_score\":45,\"living_score\":34,\"safety_score\":44},{\"id\":151,\"province_id\":14,\"name\":\"전주시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"GCMR\",\"growth_score\":40,\"economy_score\":80,\"living_score\":33,\"safety_score\":83},{\"id\":152,\"province_id\":14,\"name\":\"군산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":54,\"economy_score\":47,\"living_score\":65,\"safety_score\":68},{\"id\":153,\"province_id\":14,\"name\":\"익산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":68,\"economy_score\":33,\"living_score\":74,\"safety_score\":84},{\"id\":154,\"province_id\":14,\"name\":\"정읍시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":76,\"economy_score\":68,\"living_score\":62,\"safety_score\":85},{\"id\":155,\"province_id\":14,\"name\":\"남원시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":34,\"economy_score\":47,\"living_score\":48,\"safety_score\":87},{\"id\":156,\"province_id\":14,\"name\":\"김제시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":49,\"economy_score\":85,\"living_score\":33,\"safety_score\":84},{\"id\":157,\"province_id\":14,\"name\":\"완주군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"GCMR\",\"growth_score\":35,\"economy_score\":75,\"living_score\":33,\"safety_score\":61},{\"id\":158,\"province_id\":14,\"name\":\"진안군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":32,\"economy_score\":84,\"living_score\":61,\"safety_score\":32},{\"id\":159,\"province_id\":14,\"name\":\"무주군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":43,\"economy_score\":81,\"living_score\":83,\"safety_score\":74},{\"id\":160,\"province_id\":14,\"name\":\"장수군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":32,\"economy_score\":48,\"living_score\":35,\"safety_score\":70},{\"id\":161,\"province_id\":14,\"name\":\"임실군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":52,\"economy_score\":30,\"living_score\":69,\"safety_score\":74},{\"id\":162,\"province_id\":14,\"name\":\"순창군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":77,\"economy_score\":53,\"living_score\":89,\"safety_score\":65},{\"id\":163,\"province_id\":14,\"name\":\"고창군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":76,\"economy_score\":67,\"living_score\":48,\"safety_score\":64},{\"id\":164,\"province_id\":14,\"name\":\"부안군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":56,\"economy_score\":63,\"living_score\":78,\"safety_score\":78},{\"id\":165,\"province_id\":13,\"name\":\"목포시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":68,\"economy_score\":44,\"living_score\":72,\"safety_score\":31},{\"id\":166,\"province_id\":13,\"name\":\"여수시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":51,\"economy_score\":89,\"living_score\":61,\"safety_score\":85},{\"id\":167,\"province_id\":13,\"name\":\"순천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":70,\"economy_score\":34,\"living_score\":72,\"safety_score\":70},{\"id\":168,\"province_id\":13,\"name\":\"나주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STVR\",\"growth_score\":47,\"economy_score\":71,\"living_score\":30,\"safety_score\":87},{\"id\":169,\"province_id\":13,\"name\":\"광양시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":41,\"economy_score\":83,\"living_score\":37,\"safety_score\":35},{\"id\":170,\"province_id\":13,\"name\":\"담양군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STVR\",\"growth_score\":44,\"economy_score\":58,\"living_score\":39,\"safety_score\":39},{\"id\":171,\"province_id\":13,\"name\":\"곡성군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":37,\"economy_score\":60,\"living_score\":37,\"safety_score\":37},{\"id\":172,\"province_id\":13,\"name\":\"구례군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":81,\"economy_score\":45,\"living_score\":89,\"safety_score\":56},{\"id\":173,\"province_id\":13,\"name\":\"고흥군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":82,\"economy_score\":48,\"living_score\":47,\"safety_score\":37},{\"id\":174,\"province_id\":13,\"name\":\"보성군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":40,\"economy_score\":31,\"living_score\":80,\"safety_score\":69},{\"id\":175,\"province_id\":13,\"name\":\"화순군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":56,\"economy_score\":73,\"living_score\":61,\"safety_score\":78},{\"id\":176,\"province_id\":13,\"name\":\"장흥군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":55,\"economy_score\":32,\"living_score\":36,\"safety_score\":76},{\"id\":177,\"province_id\":13,\"name\":\"강진군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":73,\"economy_score\":90,\"living_score\":57,\"safety_score\":30},{\"id\":178,\"province_id\":13,\"name\":\"해남군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"STVR\",\"growth_score\":76,\"economy_score\":46,\"living_score\":31,\"safety_score\":82},{\"id\":179,\"province_id\":13,\"name\":\"영암군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":61,\"economy_score\":64,\"living_score\":45,\"safety_score\":73},{\"id\":180,\"province_id\":13,\"name\":\"무안군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"GCMR\",\"growth_score\":59,\"economy_score\":56,\"living_score\":39,\"safety_score\":54},{\"id\":181,\"province_id\":13,\"name\":\"함평군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":31,\"economy_score\":89,\"living_score\":51,\"safety_score\":65},{\"id\":182,\"province_id\":13,\"name\":\"영광군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":89,\"economy_score\":42,\"living_score\":70,\"safety_score\":63},{\"id\":183,\"province_id\":13,\"name\":\"장성군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":34,\"economy_score\":42,\"living_score\":52,\"safety_score\":73},{\"id\":184,\"province_id\":13,\"name\":\"완도군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":87,\"economy_score\":51,\"living_score\":66,\"safety_score\":88},{\"id\":185,\"province_id\":13,\"name\":\"진도군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":77,\"economy_score\":64,\"living_score\":53,\"safety_score\":86},{\"id\":186,\"province_id\":13,\"name\":\"신안군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STVR\",\"growth_score\":74,\"economy_score\":42,\"living_score\":48,\"safety_score\":65},{\"id\":187,\"province_id\":4,\"name\":\"포항시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"STVR\",\"growth_score\":48,\"economy_score\":60,\"living_score\":51,\"safety_score\":90},{\"id\":188,\"province_id\":4,\"name\":\"경주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":50,\"economy_score\":78,\"living_score\":90,\"safety_score\":60},{\"id\":189,\"province_id\":4,\"name\":\"김천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMR\",\"growth_score\":72,\"economy_score\":64,\"living_score\":39,\"safety_score\":49},{\"id\":190,\"province_id\":4,\"name\":\"안동시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":61,\"economy_score\":62,\"living_score\":33,\"safety_score\":58},{\"id\":191,\"province_id\":4,\"name\":\"구미시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"STMA\",\"growth_score\":63,\"economy_score\":73,\"living_score\":62,\"safety_score\":81},{\"id\":192,\"province_id\":4,\"name\":\"영주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":61,\"economy_score\":89,\"living_score\":64,\"safety_score\":86},{\"id\":193,\"province_id\":4,\"name\":\"영천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":62,\"economy_score\":82,\"living_score\":34,\"safety_score\":39},{\"id\":194,\"province_id\":4,\"name\":\"상주시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":89,\"economy_score\":33,\"living_score\":43,\"safety_score\":34},{\"id\":195,\"province_id\":4,\"name\":\"문경시\",\"district_type\":\"시\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":78,\"economy_score\":38,\"living_score\":45,\"safety_score\":60},{\"id\":196,\"province_id\":4,\"name\":\"경산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCMR\",\"growth_score\":58,\"economy_score\":70,\"living_score\":71,\"safety_score\":45},{\"id\":197,\"province_id\":6,\"name\":\"군위군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":30,\"economy_score\":53,\"living_score\":50,\"safety_score\":50},{\"id\":198,\"province_id\":4,\"name\":\"의성군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":34,\"economy_score\":50,\"living_score\":69,\"safety_score\":49},{\"id\":199,\"province_id\":4,\"name\":\"청송군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":30,\"economy_score\":42,\"living_score\":67,\"safety_score\":67},{\"id\":200,\"province_id\":4,\"name\":\"영양군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":65,\"economy_score\":71,\"living_score\":45,\"safety_score\":61},{\"id\":201,\"province_id\":4,\"name\":\"영덕군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":60,\"economy_score\":32,\"living_score\":39,\"safety_score\":62},{\"id\":202,\"province_id\":4,\"name\":\"청도군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":80,\"economy_score\":43,\"living_score\":37,\"safety_score\":36},{\"id\":203,\"province_id\":4,\"name\":\"고령군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":44,\"economy_score\":65,\"living_score\":61,\"safety_score\":42},{\"id\":204,\"province_id\":4,\"name\":\"성주군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":73,\"economy_score\":49,\"living_score\":79,\"safety_score\":42},{\"id\":205,\"province_id\":4,\"name\":\"칠곡군\",\"district_type\":\"군\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMA\",\"growth_score\":47,\"economy_score\":54,\"living_score\":57,\"safety_score\":63},{\"id\":206,\"province_id\":4,\"name\":\"예천군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":56,\"economy_score\":31,\"living_score\":51,\"safety_score\":49},{\"id\":207,\"province_id\":4,\"name\":\"봉화군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":76,\"economy_score\":81,\"living_score\":66,\"safety_score\":76},{\"id\":208,\"province_id\":4,\"name\":\"울진군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVA\",\"growth_score\":69,\"economy_score\":87,\"living_score\":37,\"safety_score\":87},{\"id\":209,\"province_id\":4,\"name\":\"울릉군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"STMR\",\"growth_score\":38,\"economy_score\":55,\"living_score\":61,\"safety_score\":78},{\"id\":210,\"province_id\":3,\"name\":\"진주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GCVR\",\"growth_score\":46,\"economy_score\":39,\"living_score\":59,\"safety_score\":52},{\"id\":211,\"province_id\":3,\"name\":\"통영시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCVR\",\"growth_score\":89,\"economy_score\":59,\"living_score\":58,\"safety_score\":62},{\"id\":212,\"province_id\":3,\"name\":\"사천시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":47,\"economy_score\":66,\"living_score\":47,\"safety_score\":40},{\"id\":213,\"province_id\":3,\"name\":\"김해시\",\"district_type\":\"시\",\"weight_class\":\"라이트\",\"klaci_code\":\"STMR\",\"growth_score\":88,\"economy_score\":78,\"living_score\":69,\"safety_score\":87},{\"id\":214,\"province_id\":3,\"name\":\"밀양시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":62,\"economy_score\":88,\"living_score\":87,\"safety_score\":41},{\"id\":215,\"province_id\":3,\"name\":\"거제시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":87,\"economy_score\":69,\"living_score\":74,\"safety_score\":42},{\"id\":216,\"province_id\":3,\"name\":\"양산시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":31,\"economy_score\":62,\"living_score\":45,\"safety_score\":56},{\"id\":217,\"province_id\":3,\"name\":\"창원시\",\"district_type\":\"시\",\"weight_class\":\"헤비\",\"klaci_code\":\"STVR\",\"growth_score\":54,\"economy_score\":51,\"living_score\":48,\"safety_score\":40},{\"id\":218,\"province_id\":3,\"name\":\"의령군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":79,\"economy_score\":39,\"living_score\":43,\"safety_score\":89},{\"id\":219,\"province_id\":3,\"name\":\"함안군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"STVA\",\"growth_score\":48,\"economy_score\":65,\"living_score\":67,\"safety_score\":35},{\"id\":220,\"province_id\":3,\"name\":\"창녕군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCMR\",\"growth_score\":58,\"economy_score\":79,\"living_score\":63,\"safety_score\":86},{\"id\":221,\"province_id\":3,\"name\":\"고성군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"STMR\",\"growth_score\":44,\"economy_score\":49,\"living_score\":48,\"safety_score\":36},{\"id\":222,\"province_id\":3,\"name\":\"남해군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":87,\"economy_score\":56,\"living_score\":56,\"safety_score\":78},{\"id\":223,\"province_id\":3,\"name\":\"하동군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMA\",\"growth_score\":54,\"economy_score\":56,\"living_score\":79,\"safety_score\":32},{\"id\":224,\"province_id\":3,\"name\":\"산청군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":48,\"economy_score\":35,\"living_score\":60,\"safety_score\":77},{\"id\":225,\"province_id\":3,\"name\":\"함양군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCMR\",\"growth_score\":69,\"economy_score\":77,\"living_score\":54,\"safety_score\":40},{\"id\":226,\"province_id\":3,\"name\":\"거창군\",\"district_type\":\"군\",\"weight_class\":\"페더\",\"klaci_code\":\"SCVR\",\"growth_score\":30,\"economy_score\":47,\"living_score\":86,\"safety_score\":77},{\"id\":227,\"province_id\":3,\"name\":\"합천군\",\"district_type\":\"군\",\"weight_class\":\"미들\",\"klaci_code\":\"SCVR\",\"growth_score\":56,\"economy_score\":43,\"living_score\":48,\"safety_score\":75},{\"id\":228,\"province_id\":15,\"name\":\"제주시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"GTMR\",\"growth_score\":55,\"economy_score\":69,\"living_score\":60,\"safety_score\":72},{\"id\":229,\"province_id\":15,\"name\":\"서귀포시\",\"district_type\":\"시\",\"weight_class\":\"웰터\",\"klaci_code\":\"SCMR\",\"growth_score\":49,\"economy_score\":34,\"living_score\":57,\"safety_score\":32}]"));}}),
"[project]/packages/frontend/store/slices/districtSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createDistrictSlice": (()=>createDistrictSlice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$province_data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/packages/frontend/data/province_data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$regions_data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/packages/frontend/data/regions_data.json (json)");
;
;
const initialState = {
    selectedProvince: null,
    selectedDistrict: null,
    provinces: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$province_data$2e$json__$28$json$29$__["default"],
    regions: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$regions_data$2e$json__$28$json$29$__["default"]
};
const createDistrictSlice = (set, get)=>({
        district: initialState,
        setSelectedProvince: (provinceId)=>{
            const currentState = get();
            const province = provinceId ? currentState.getProvinceById(provinceId) : null;
            set((state)=>({
                    district: {
                        ...state.district,
                        selectedProvince: province
                    }
                }));
        },
        setSelectedDistrict: (districtId)=>{
            const currentState = get();
            const district = districtId ? currentState.getRegionById(districtId) : null;
            set((state)=>({
                    district: {
                        ...state.district,
                        selectedDistrict: district
                    }
                }));
        },
        clearDistrictSelection: ()=>{
            set((state)=>({
                    district: {
                        ...state.district,
                        selectedProvince: null,
                        selectedDistrict: null
                    }
                }));
        },
        getProvinceById: (id)=>{
            const currentState = get();
            // 직접 JSON 데이터 사용
            const provinces = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$province_data$2e$json__$28$json$29$__["default"];
            return provinces.find((province)=>province.id === id) || null;
        },
        getRegionById: (id)=>{
            const currentState = get();
            // 직접 JSON 데이터 사용
            const regions = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$regions_data$2e$json__$28$json$29$__["default"];
            return regions.find((region)=>region.id === id) || null;
        },
        getRegionsByProvinceId: (provinceId)=>{
            const currentState = get();
            // 직접 JSON 데이터 사용
            const regions = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$regions_data$2e$json__$28$json$29$__["default"];
            return regions.filter((region)=>region.province_id === provinceId);
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
    "useClearDistrictSelection": (()=>useClearDistrictSelection),
    "useDistrict": (()=>useDistrict),
    "useGetProvinceById": (()=>useGetProvinceById),
    "useGetRegionById": (()=>useGetRegionById),
    "useGetRegionsByProvinceId": (()=>useGetRegionsByProvinceId),
    "useSetSelectedDistrict": (()=>useSetSelectedDistrict),
    "useSetSelectedProvince": (()=>useSetSelectedProvince),
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/slices/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$slices$2f$districtSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/slices/districtSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
;
;
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((...args)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$slices$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthSlice"])(...args),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$slices$2f$districtSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDistrictSlice"])(...args)
    }), {
    name: 'k-laci-store',
    partialize: (state)=>({
            auth: {
                isLoggedIn: state.auth.isLoggedIn
            },
            district: {
                selectedProvince: state.district.selectedProvince,
                selectedDistrict: state.district.selectedDistrict
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
const useDistrict = ()=>{
    _s2();
    return useStore({
        "useDistrict.useStore": (state)=>state.district
    }["useDistrict.useStore"]);
};
_s2(useDistrict, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useSetSelectedProvince = ()=>{
    _s3();
    return useStore({
        "useSetSelectedProvince.useStore": (state)=>state.setSelectedProvince
    }["useSetSelectedProvince.useStore"]);
};
_s3(useSetSelectedProvince, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useSetSelectedDistrict = ()=>{
    _s4();
    return useStore({
        "useSetSelectedDistrict.useStore": (state)=>state.setSelectedDistrict
    }["useSetSelectedDistrict.useStore"]);
};
_s4(useSetSelectedDistrict, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useClearDistrictSelection = ()=>{
    _s5();
    return useStore({
        "useClearDistrictSelection.useStore": (state)=>state.clearDistrictSelection
    }["useClearDistrictSelection.useStore"]);
};
_s5(useClearDistrictSelection, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useGetProvinceById = ()=>{
    _s6();
    return useStore({
        "useGetProvinceById.useStore": (state)=>state.getProvinceById
    }["useGetProvinceById.useStore"]);
};
_s6(useGetProvinceById, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useGetRegionById = ()=>{
    _s7();
    return useStore({
        "useGetRegionById.useStore": (state)=>state.getRegionById
    }["useGetRegionById.useStore"]);
};
_s7(useGetRegionById, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
const useGetRegionsByProvinceId = ()=>{
    _s8();
    return useStore({
        "useGetRegionsByProvinceId.useStore": (state)=>state.getRegionsByProvinceId
    }["useGetRegionsByProvinceId.useStore"]);
};
_s8(useGetRegionsByProvinceId, "tRpAAnpj2/w/nb/IphdrVKKBg0Y=", false, function() {
    return [
        useStore
    ];
});
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
"[project]/packages/frontend/components/ui/CategoryDetailModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
        className: "bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-4 w-full max-w-md rounded-lg bg-white p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold",
                            children: score.name
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: "점수"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold",
                                    style: {
                                        color
                                    },
                                    children: score.value
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: "순위"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-semibold",
                                    children: [
                                        score.rank,
                                        "위 / ",
                                        score.totalRank,
                                        "개"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        score.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: "설명"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: score.description
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mt-6 w-full rounded-lg bg-gray-200 py-2 text-gray-800 transition-colors hover:bg-gray-300",
                    children: "닫기"
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/ui/CategoryDetailModal.tsx",
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
"[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const CategoryScoreGrid = ({ scores, color, onScoreClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '100%'
        },
        children: scores.map((score, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    backgroundColor: 'white',
                    padding: '20px',
                    transition: 'all 0.2s ease',
                    minHeight: '70px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                },
                onClick: ()=>onScoreClick(score),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '16px',
                            right: '16px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                color: '#9ca3af'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#9BA5B5'
                        },
                        children: "보육시설수"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '24px',
                            fontWeight: '700',
                            color: color,
                            marginTop: 'auto'
                        },
                        children: [
                            score.rank,
                            "위"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = CategoryScoreGrid;
const __TURBOPACK__default__export__ = CategoryScoreGrid;
var _c;
__turbopack_context__.k.register(_c, "CategoryScoreGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/features/results/components/CategoryRanking.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$ui$2f$CategoryDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/ui/CategoryDetailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$components$2f$CategoryScoreGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/components/CategoryScoreGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CategoryRanking = ({ data })=>{
    _s();
    const { title, color, currentRank, totalRank, description, scores } = data;
    const [selectedScore, setSelectedScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScoreClick = (score)=>{
        setSelectedScore(score);
        setIsModalOpen(true);
    };
    // 상위 퍼센트 계산
    const topPercentage = Math.round(currentRank / totalRank * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col rounded-lg bg-white shadow-sm",
        style: {
            marginBottom: '5rem',
            gap: '50px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '1px',
                    backgroundColor: '#D0D9E6',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px'
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            width: '25%',
                            paddingRight: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '30px',
                                    fontWeight: 600,
                                    color: '#474E59',
                                    marginBottom: '1rem'
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '32px',
                                    fontWeight: 600,
                                    color: color,
                                    marginBottom: '0.5rem'
                                },
                                children: [
                                    currentRank,
                                    "위"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.9rem',
                                    color: '#ADB5C4'
                                },
                                children: [
                                    "상위 ",
                                    topPercentage,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '75%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: '#474E59',
                                lineHeight: '1.5',
                                fontSize: '0.95rem'
                            },
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$components$2f$CategoryScoreGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    scores: scores,
                    color: color,
                    onScoreClick: handleScoreClick
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$ui$2f$CategoryDetailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                score: selectedScore,
                color: color
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/components/CategoryRanking.tsx",
        lineNumber: 28,
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
"[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/constants/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/components/CategoryRanking.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const CategoryRankingSection = ()=>{
    const title = '범주 및 세부지표 순위';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            // width: '100%',
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
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        paddingTop: '3rem',
                        marginBottom: '2rem',
                        color: '#949FB0'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8",
                    children: mockCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: category
                        }, index, false, {
                            fileName: "[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx",
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
                name: `경제지표 ${i + 1}`,
                value: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                totalRank: 229,
                description: '통계청(2024)'
            }))
    },
    {
        title: '경제활동력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].경제활동력,
        currentRank: 195,
        totalRank: 229,
        description: '경제활동력은 지역 경제의 현재 상태와 미래 성장 잠재력을 종합적으로 평가하는 범주입니다. 재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다. 또한, 타지역 통근취업자 비율, 기초생활수급자 현황, 성별 고용률 격차, SKT 유동인구 데이터 등은 경제활동의 개방성, 포용성, 그리고 역동성을 보여줍니다. 이 범주는 지역 경제가 얼마나 활발하게 움직이고, 얼마나 안정적이며, 미래를 위한 변화와 혁신을 얼마나 잘 수용하고 있는지를 판단하는 기준이 됩니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                name: `사회지표 ${i + 1}`,
                value: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                totalRank: 229,
                description: '보건복지부(2024)'
            }))
    },
    {
        title: '생활기반력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].생활기반력,
        currentRank: 47,
        totalRank: 229,
        description: '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 여기에는 빈집비율, 1인당 자동차 등록대수, 주택소유율, 주택노후도와 같은 주거 안정성 및 환경 관련 지표가 포함됩니다. 또한, 광역교통시설(대중교통/도보) 접근 가능 시설 수로 대표되는 교통 편의성, 유아 천 명당 보육시설 수, 인구 천 명당 사설학원 수, 대학교 학생 수와 같은 교육 환경 관련 지표, 그리고 인구 십만 명당 문화기반시설 수와 같은 문화 향유 기회 관련 지표들이 핵심적인 구성 요소입니다. 이러한 지표들은 지역이 주민들에게 얼마나 쾌적하고 편리하며, 풍요로운 삶을 누릴 수 있는 환경을 제공하는지를 보여주며, 이는 지역 주민의 정주 만족도뿐만 아니라 외부 인구 유입을 결정하는 중요한 요인으로 작용합니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                name: `건강지표 ${i + 1}`,
                value: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                totalRank: 229,
                description: '질병관리청(2024)'
            }))
    },
    {
        title: '안전회복력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].안전회복력,
        currentRank: 192,
        totalRank: 229,
        description: '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 이 범주에는 평균수명, 치매유병률, 건강관련 삶의 질(EQ-5D), 스트레스 인지율, 자살률, 미충족 의료율, 인구 천 명당 의료기관 병상 수와 같이 주민의 신체적·정신적 건강 및 의료 접근성과 관련된 지표들이 포함됩니다. 또한, 지역 안전등급 현황(교통사고, 화재, 범죄, 생활안전, 자살, 감염병 등 6개 분야 종합), 노인 천 명당 노인여가복지시설 수, 인구 십만 명당 사회복지시설 수, 사회복지예산 규모, 장애친화인증 건수 등 물리적 안전 및 사회적 안전망의 수준을 보여주는 지표들도 중요합니다. 나아가 지역의 녹지율, 온실가스 배출량과 같은 환경적 지속가능성, 문화재 수로 대표되는 역사문화자원 보존, 그리고 인구 천 명당 비영리단체 및 사회적기업 수와 같은 공동체 자본 형성 정도까지 포괄합니다. 이는 단순한 사고 예방을 넘어, 주민들이 안심하고 건강한 삶을 영위하며, 예기치 않은 어려움에 직면했을 때 공동체가 함께 이를 극복해 나갈 수 있는 총체적인 능력을 의미합니다. ',
        scores: Array(12).fill(null).map((_, i)=>({
                name: `만족도지표 ${i + 1}`,
                value: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 20) + 1,
                totalRank: 229,
                description: '행정안전부(2024)'
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
"[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ScoreBar = ({ score, color })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            height: '32px',
            backgroundColor: '#F8F8FF',
            borderRadius: '8px',
            border: '1px solid #D9D9E8',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${score}%`,
                    backgroundColor: color
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    height: '100%',
                    width: '1px',
                    borderLeft: '2px dashed #D9D9E8',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    zIndex: 2
                },
                children: score
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#949FB0',
                    fontSize: '0.8rem',
                    fontWeight: 600
                },
                children: 100 - score
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = ScoreBar;
const __TURBOPACK__default__export__ = ScoreBar;
var _c;
__turbopack_context__.k.register(_c, "ScoreBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/constants/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$bars$2f$ScoreBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/atoms/bars/ScoreBar.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const CompetencyDistSection = ()=>{
    const title = '원형별 역량 분포';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
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
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        paddingTop: '3rem',
                        marginBottom: '2rem',
                        color: '#949FB0'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: mockCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: 'white',
                                borderRadius: '15px',
                                padding: '35px',
                                // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                marginBottom: '25px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '1.25rem',
                                                        fontWeight: 700,
                                                        color: category.color
                                                    },
                                                    children: category.title
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '24px',
                                                        height: '24px',
                                                        borderRadius: '50%',
                                                        backgroundColor: category.color,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 600
                                                    },
                                                    children: [
                                                        String.fromCharCode(65 + index),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '1.125rem',
                                                fontWeight: 600,
                                                color: '#DBDBE5'
                                            },
                                            children: category.title
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '35px',
                                        marginBottom: '35px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$bars$2f$ScoreBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        score: category.score,
                                        color: category.color
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '0.875rem',
                                        lineHeight: '1.5',
                                        color: '#666'
                                    },
                                    children: Array.isArray(category.description) ? category.description.map((paragraph, pIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                marginBottom: '0.75rem'
                                            },
                                            children: paragraph
                                        }, pIndex, false, {
                                            fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                            lineNumber: 127,
                                            columnNumber: 23
                                        }, this)) : category.description
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = CompetencyDistSection;
const mockCategories = [
    {
        title: '인구성장력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].인구성장력,
        currentRank: 33,
        totalRank: 229,
        score: 75,
        description: [
            '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다.',
            '인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다. 인구성장력은 지역의 지속가능성을 가늠하는 핵심 지표로서, 단순한 인구 수의 증감을 넘어 인구 구조의 활력, 변화의 역동성, 그리고 미래 성장 잠재력을 종합적으로 반영합니다.'
        ]
    },
    {
        title: '경제활동력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].경제활동력,
        currentRank: 195,
        totalRank: 229,
        score: 45,
        description: [
            '재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다.',
            '재정자립도, 지방세 수입 규모와 같은 재정 건전성 지표부터 지역내총생산(GRDP)으로 대표되는 경제 규모, 실업률 및 청년고용률과 같은 고용 상황, 인구 천 명당 사업체 수, 도·소매업 및 제조업 사업체 수, 코스닥·코스피 상장기업 및 벤처기업 현황, 특허 출원 건수, 농공·산업단지 및 상권 수 등 산업 구조와 혁신 역량을 나타내는 지표들을 포괄합니다.'
        ]
    },
    {
        title: '생활기반력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].생활기반력,
        currentRank: 47,
        totalRank: 229,
        score: 82,
        description: [
            '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.  생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.',
            '생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다. 생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.  생활기반력은 지역 주민들의 일상생활과 삶의 질에 직접적인 영향을 미치는 물리적·사회적 환경을 종합적으로 평가하는 범주입니다.'
        ]
    },
    {
        title: '안전회복력',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryColors"].안전회복력,
        currentRank: 192,
        totalRank: 229,
        score: 38,
        description: [
            '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다.',
            '안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다. 안전회복력은 지역사회가 주민들에게 제공하는 안전의 수준과 다양한 외부 충격 및 위기 상황으로부터 얼마나 효과적으로 회복하고 적응할 수 있는지를 나타내는 종합적인 역량입니다.'
        ]
    }
];
const __TURBOPACK__default__export__ = CompetencyDistSection;
var _c;
__turbopack_context__.k.register(_c, "CompetencyDistSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/ui/SearchTextInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
const SearchTextInput = ({ value, onChange, placeholder = '제주 서귀포시', recentSearches = [], onRecentSearchClick })=>{
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
            if (selected !== undefined) {
                onChange(selected);
                onRecentSearchClick?.(selected);
                setShowDropdown(false);
                inputRef.current?.blur();
            }
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
                            fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                        lineNumber: 128,
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
                        fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                lineNumber: 115,
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
                                        fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        fontWeight: idx === highlightedIndex ? '500' : '400'
                                    },
                                    children: search
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                            lineNumber: 178,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                lineNumber: 155,
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
                        fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                        lineNumber: 248,
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
                                fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/components/ui/SearchTextInput.tsx",
        lineNumber: 106,
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
"[project]/packages/frontend/features/results/sections/DistrictSearchSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$ui$2f$SearchTextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/ui/SearchTextInput.tsx [app-client] (ecmascript)");
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
                fileName: "[project]/packages/frontend/features/results/sections/DistrictSearchSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '500px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$ui$2f$SearchTextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: searchValue,
                    onChange: setSearchValue,
                    recentSearches: mockRecentSearches,
                    onRecentSearchClick: handleRecentSearchClick
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/DistrictSearchSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/DistrictSearchSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/DistrictSearchSection.tsx",
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
"[project]/packages/frontend/components/atoms/select/CommonSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const CommonSelect = ({ value, options, onChange, disabled = false, defaultLabel = '선택' })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = options.find((option)=>option.value === value)?.label || defaultLabel;
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
            // border: '1px solid #264DBC',
            borderRadius: '50px',
            padding: '0 20px',
            height: '50px',
            minWidth: '100px',
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
                fileName: "[project]/packages/frontend/components/atoms/select/CommonSelect.tsx",
                lineNumber: 66,
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
                    fileName: "[project]/packages/frontend/components/atoms/select/CommonSelect.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/select/CommonSelect.tsx",
                lineNumber: 73,
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
                        fileName: "[project]/packages/frontend/components/atoms/select/CommonSelect.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/select/CommonSelect.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/components/atoms/select/CommonSelect.tsx",
        lineNumber: 46,
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
"[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/atoms/select/CommonSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$province_data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/packages/frontend/data/province_data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$regions_data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/packages/frontend/data/regions_data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DistrictSelectSection = ({ isFloating = false })=>{
    _s();
    const { selectedProvince, selectedDistrict } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistrict"])();
    const setSelectedProvince = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSelectedProvince"])();
    const setSelectedDistrict = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSelectedDistrict"])();
    const handleProvinceChange = (value)=>{
        setSelectedProvince(value ? Number(value) : null);
    };
    const handleDistrictChange = (value)=>{
        setSelectedDistrict(value ? Number(value) : null);
    };
    // province_data.json에서 광역시/도 데이터 가져오기
    const provinceOptions = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$province_data$2e$json__$28$json$29$__["default"].map((province)=>({
            value: String(province.id),
            label: province.name
        }));
    // regions_data.json에서 선택된 광역시/도에 해당하는 지자체 데이터 가져오기
    const districtOptions = selectedProvince ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$data$2f$regions_data$2e$json__$28$json$29$__["default"].filter((region)=>region.province_id === selectedProvince.id).map((region)=>({
            value: String(region.id),
            label: region.name,
            ...region
        })) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: isFloating ? '12px' : '16px',
            width: '100%',
            justifyContent: 'center',
            padding: isFloating ? '8px 16px' : '40px',
            borderRadius: isFloating ? '12px' : '20px',
            height: isFloating ? '66px' : 'auto',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: selectedProvince ? String(selectedProvince.id) : '',
                    options: provinceOptions,
                    onChange: handleProvinceChange,
                    defaultLabel: "광역명"
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-start'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$select$2f$CommonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: selectedDistrict ? String(selectedDistrict.id) : '',
                    options: districtOptions,
                    onChange: handleDistrictChange,
                    disabled: !selectedProvince,
                    defaultLabel: "지자체명"
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_s(DistrictSelectSection, "wImsVG3DV/J5eAS9/LYzK5cRTAs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistrict"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSelectedProvince"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetSelectedDistrict"]
    ];
});
_c = DistrictSelectSection;
const __TURBOPACK__default__export__ = DistrictSelectSection;
var _c;
__turbopack_context__.k.register(_c, "DistrictSelectSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                fileName: "[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx",
                lineNumber: 28,
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
                fileName: "[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx",
                lineNumber: 40,
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
                fileName: "[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx",
                lineNumber: 49,
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
                fileName: "[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx",
        lineNumber: 14,
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
"[project]/packages/frontend/components/atoms/modal/IndexModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const IndexModal = ({ isOpen, onClose, data })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                width: '800px',
                height: '430px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'white'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        backgroundColor: 'white',
                        padding: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '8px 16px',
                                backgroundColor: 'white',
                                border: '1px solid #000000',
                                borderRadius: '12px',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#000000',
                                alignSelf: 'flex-start'
                            },
                            children: "전라북도 전주시"
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '25px',
                                fontWeight: '600',
                                color: '#000000',
                                marginTop: '8px'
                            },
                            children: data.value
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '25px',
                                fontWeight: '600',
                                color: '#FF3737'
                            },
                            children: "1위"
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#ADB5C4'
                            },
                            children: "상위 54%"
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#000000',
                                paddingTop: '16px',
                                borderTop: '1px solid #D9D9E8'
                            },
                            children: "통계청"
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#000000',
                                paddingTop: '16px',
                                borderTop: '1px solid #D9D9E8'
                            },
                            children: "참고용 로데이터 (2020)"
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        color: '#474E59'
                                    },
                                    children: "전라북도 전주시 0.43234점"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        color: '#474E59'
                                    },
                                    children: "전국 평균 0.43234점"
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 3,
                        backgroundColor: '#F9F9FF',
                        padding: '32px',
                        paddingLeft: '50px',
                        paddingRight: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '15px',
                            fontWeight: '400',
                            color: '#474E59',
                            lineHeight: 1.5
                        },
                        children: "이 지표는 해당 지역의 특성을 나타내는 중요한 지표입니다. 높은 수치는 해당 분야에서 지역이 우수한 성과를 보이고 있음을 의미하며, 지역 발전과 정책 수립에 중요한 참고 자료로 활용됩니다. 이 지표는 해당 지역의 특성을 나타내는 중요한 지표입니다. 높은 수치는 해당 분야에서 지역이 우수한 성과를 보이고 있음을 의미하며, 지역 발전과 정책 수립에 중요한 참고 자료로 활용됩니다. 이 지표는 해당 지역의 특성을 나타내는 중요한 지표입니다. 높은 수치는 해당 분야에서 지역이 우수한 성과를 보이고 있음을 의미하며, 지역 발전과 정책 수립에 중요한 참고 자료로 활용됩니다. 이 지표는 해당 지역의 특성을 나타내는 중요한 지표입니다. 높은 수치는 해당 분야에서 지역이 우수한 성과를 보이고 있음을 의미하며, 지역 발전과 정책 수립에 중요한 참고 자료로 활용됩니다."
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/components/atoms/modal/IndexModal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = IndexModal;
const __TURBOPACK__default__export__ = IndexModal;
var _c;
__turbopack_context__.k.register(_c, "IndexModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$modal$2f$IndexModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/atoms/modal/IndexModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// 색상 맵 정의
const colorMap = {
    생활역동형: '#874FFF',
    생활정주형: '#874FFF',
    안전복원형: '#24CB71',
    안전정진형: '#24CB71',
    인구정착형: '#FF3737',
    인구성장형: '#FF3737',
    경제정속형: '#FFA600',
    경제혁신형: '#FFA600'
};
// 지수 컴포넌트
const IndexItem = ({ data, onClick })=>{
    const categoryColor = colorMap[data.category] || '#874FFF';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            backgroundColor: 'white',
            border: '1px solid #D9D9E8',
            borderRadius: '12px',
            marginBottom: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
        },
        onClick: ()=>onClick(data),
        onMouseEnter: (e)=>{
            e.currentTarget.style.border = `1px solid ${categoryColor}`;
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.border = '1px solid #D9D9E8';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '4px 8px',
                    backgroundColor: 'white',
                    border: `1px solid ${categoryColor}`,
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: categoryColor,
                    whiteSpace: 'nowrap'
                },
                children: data.category
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: '400'
                },
                children: data.value
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_c = IndexItem;
// 지표 섹션 컴포넌트
const IndexSection = ({ title, data, onItemClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flex: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    gap: '5px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#949FB0',
                            fontSize: '22px',
                            fontWeight: '600',
                            marginBottom: '4px'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#949FB0',
                            fontSize: '14px',
                            fontWeight: '400',
                            marginBottom: '16px'
                        },
                        children: "1위 - 50위 순"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flex: 2,
                    flexDirection: 'column'
                },
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndexItem, {
                        data: item,
                        onClick: onItemClick
                    }, index, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
};
_c1 = IndexSection;
const StrengthWeaknessIndexSection = ()=>{
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedData, setSelectedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleItemClick = (data)=>{
        setSelectedData(data);
        setIsModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setIsModalOpen(false);
        setSelectedData(null);
    };
    // 목업 데이터
    const strengthData = [
        {
            category: '인구성장형',
            value: '청년인구수'
        },
        {
            category: '경제혁신형',
            value: '신생기업수'
        },
        {
            category: '생활정주형',
            value: '주거환경지수'
        },
        {
            category: '안전정진형',
            value: '안전지수'
        },
        {
            category: '생활역동형',
            value: '문화활동참여율'
        },
        {
            category: '경제정속형',
            value: '1인당 GRDP'
        },
        {
            category: '인구정착형',
            value: '출생률'
        },
        {
            category: '안전복원형',
            value: '재난대응속도'
        },
        {
            category: '생활정주형',
            value: '공원면적'
        },
        {
            category: '경제혁신형',
            value: '벤처기업수'
        }
    ];
    const weaknessData = [
        {
            category: '경제정속형',
            value: '경제성장률'
        },
        {
            category: '인구정착형',
            value: '인구유입률'
        },
        {
            category: '생활역동형',
            value: '문화시설수'
        },
        {
            category: '안전복원형',
            value: '재난대응력'
        },
        {
            category: '생활정주형',
            value: '주거비용'
        },
        {
            category: '경제혁신형',
            value: '창업지원지수'
        },
        {
            category: '인구성장형',
            value: '고령화비율'
        },
        {
            category: '안전정진형',
            value: '범죄발생률'
        },
        {
            category: '생활역동형',
            value: '여가시간'
        },
        {
            category: '경제정속형',
            value: '실업률'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '50px',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndexSection, {
                        title: "강점지표",
                        data: strengthData,
                        isStrength: true,
                        onItemClick: handleItemClick
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndexSection, {
                        title: "약점지표",
                        data: weaknessData,
                        isStrength: true,
                        onItemClick: handleItemClick
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            selectedData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$modal$2f$IndexModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: handleCloseModal,
                data: selectedData
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(StrengthWeaknessIndexSection, "o7O6EYxqk76dHRfAT9iN/7i+8PI=");
_c2 = StrengthWeaknessIndexSection;
const __TURBOPACK__default__export__ = StrengthWeaknessIndexSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "IndexItem");
__turbopack_context__.k.register(_c1, "IndexSection");
__turbopack_context__.k.register(_c2, "StrengthWeaknessIndexSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/features/results/sections/SummarySection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
        title: '기회자산',
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
const SummaryItem = ({ data })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            borderTop: '1px solid #D0D9E6',
            paddingTop: '40px',
            paddingBottom: '60px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: '0 0 200px',
                    color: '#949FB0',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    paddingRight: '2rem'
                },
                children: data.title
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                },
                children: data.paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#2B2D30',
                            fontSize: '0.9rem',
                            lineHeight: 1.8,
                            margin: 0
                        },
                        children: paragraph
                    }, index, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
};
_c = SummaryItem;
const SummarySection = ()=>{
    // 데이터를 배열로 변환하여 매핑
    const summaryItems = [
        summaryData.characteristics,
        summaryData.opportunities,
        summaryData.improvements
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '12%',
                    paddingBottom: '12%',
                    borderRadius: '15px'
                },
                children: summaryItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryItem, {
                        data: item
                    }, index, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/features/results/sections/SummarySection.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
};
_c1 = SummarySection;
const __TURBOPACK__default__export__ = SummarySection;
var _c, _c1;
__turbopack_context__.k.register(_c, "SummaryItem");
__turbopack_context__.k.register(_c1, "SummarySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/components/atoms/charts/RadarChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const JewelRadarChart = ({ data, isJewel = false, size = 500 })=>{
    _s();
    const [hoveredArea, setHoveredArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const center = size / 2;
    const radius = size * 0.4;
    // isJewel일 때의 실제 크기 계산 (보석 크기만큼만)
    const jewelSize = isJewel ? radius * 2 : size;
    // 폰트 크기 비율 계산 (기존 크기 기준)
    const fontSize = {
        category: Math.round(size * 0.032),
        value: Math.round(size * 0.02),
        tooltip: Math.round(size * 0.024),
        area: Math.round(size * 0.028)
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
        생활역동형: '#874FFF',
        생활정주형: '#874FFF',
        안전복원형: '#24CB71',
        안전정진형: '#24CB71',
        인구정착형: '#FF3737',
        인구성장형: '#FF3737',
        경제정속형: '#FFA600',
        경제혁신형: '#FFA600'
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
            padding: 0,
            cursor: 'pointer'
        },
        viewBox: isJewel ? `${center - radius} ${center - radius} ${radius * 2} ${radius * 2}` : `0 0 ${size} ${size}`,
        className: "radar-chart",
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
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 107,
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
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 117,
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
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 131,
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
                                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "hoverTopMask",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: jewelSize,
                                height: jewelSize,
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: center - radius,
                                y: center,
                                width: radius * 2,
                                height: radius,
                                fill: "black"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "hoverBottomMask",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: jewelSize,
                                height: jewelSize,
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: center - radius,
                                y: 0,
                                width: radius * 2,
                                height: center,
                                fill: "black"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
            .radar-chart:hover .jewel-triangle {
              opacity: 0 !important;
            }
            .radar-chart:hover .hover-top-overlay {
              opacity: 1 !important;
            }
            .radar-chart:hover .hover-bottom-overlay {
              opacity: 1 !important;
            }
            .radar-chart:hover .data-point {
              opacity: 1 !important;
            }
            .radar-chart:hover .data-point:hover {
              r: 6 !important;
              stroke-width: 2 !important;
            }
          `
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    categories.map((category, i)=>{
                        if (!category) return null;
                        const pct = Math.min(100, (vals[i] ?? 0) / 100 * 100);
                        const [startColor, endColor] = fixedColorPairs[i] ?? [
                            '#000',
                            '#000'
                        ];
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
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct * 0.7}%`,
                                        stopColor: "#F56542"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct}%`,
                                        stopColor: "#74BF9E"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#74BF9E"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 205,
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
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct}%`,
                                        stopColor: "#F56542",
                                        stopOpacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#F56542",
                                        stopOpacity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 222,
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
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: `${pct}%`,
                                        stopColor: "#F4B04D"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#F4B04D"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 242,
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
                                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: `${pct}%`,
                                    stopColor: endColor
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: endColor
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            points.map((pt, i)=>{
                const next = points[(i + 1) % numAxes];
                if (!next) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`,
                    fill: `url(#grad${i})`,
                    fillOpacity: 0.7,
                    stroke: "white",
                    strokeWidth: 1,
                    className: "jewel-triangle",
                    style: {
                        transition: 'opacity 0.3s ease'
                    }
                }, i, false, {
                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this);
            }),
            !isJewel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        mask: "url(#hoverTopMask)",
                        children: points.map((pt, i)=>{
                            const next = points[(i + 1) % numAxes];
                            if (!next) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: `M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`,
                                fill: "#3352D7",
                                fillOpacity: 1,
                                stroke: "white",
                                strokeWidth: 1,
                                className: "hover-top-overlay",
                                style: {
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }
                            }, `top-${i}`, false, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 304,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        mask: "url(#hoverBottomMask)",
                        children: points.map((pt, i)=>{
                            const next = points[(i + 1) % numAxes];
                            if (!next) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: `M${center},${center} L${pt.x},${pt.y} L${next.x},${next.y} Z`,
                                fill: "#95A6C1",
                                fillOpacity: 1,
                                stroke: "white",
                                strokeWidth: 1,
                                className: "hover-bottom-overlay",
                                style: {
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }
                            }, `bottom-${i}`, false, {
                                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                                lineNumber: 328,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            !isJewel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${center - radius} ${center - radius} 
                L ${center + radius} ${center - radius}
                L ${center + radius} ${center}
                L ${center - radius} ${center}
                Z`,
                        fill: "transparent",
                        onMouseEnter: ()=>setHoveredArea('top'),
                        onMouseLeave: ()=>setHoveredArea(null),
                        style: {
                            cursor: 'pointer'
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M ${center - radius} ${center} 
                L ${center + radius} ${center}
                L ${center + radius} ${center + radius}
                L ${center - radius} ${center + radius}
                Z`,
                        fill: "transparent",
                        onMouseEnter: ()=>setHoveredArea('bottom'),
                        onMouseLeave: ()=>setHoveredArea(null),
                        style: {
                            cursor: 'pointer'
                        }
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            !isJewel && points.map((pt, i)=>{
                const category = categories[i];
                if (!category) return null;
                // 180도 가로선 기준으로 상단/하단 판별 (center가 180도 가로선)
                const isTop = pt.y <= center;
                const pointColor = isTop ? '#3352D7' : '#95A6C1';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: pt.x,
                            cy: pt.y,
                            r: 4,
                            fill: "white",
                            stroke: pointColor,
                            strokeWidth: 1.5,
                            className: "data-point",
                            style: {
                                opacity: 0,
                                transition: 'opacity 0.3s ease, r 0.2s ease, stroke-width 0.2s ease',
                                cursor: 'pointer'
                            },
                            onMouseEnter: ()=>{
                                // 호버 시 동그라미 크기 증가
                                const circle = document.querySelector(`circle[data-index="${i}"]`);
                                if (circle) {
                                    circle.style.r = '6';
                                    circle.style.strokeWidth = '2';
                                }
                            },
                            onMouseLeave: ()=>{
                                // 호버 해제 시 동그라미 크기 복원
                                const circle = document.querySelector(`circle[data-index="${i}"]`);
                                if (circle) {
                                    circle.style.r = '4';
                                    circle.style.strokeWidth = '1.5';
                                }
                            },
                            "data-index": i
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                            lineNumber: 390,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: pt.x,
                            y: pt.y - 15,
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "600",
                            fill: [
                                '인구성장형',
                                '안전복원형'
                            ].includes(category) ? colorMap[category] || '#333' : '#333',
                            className: "category-text",
                            style: {
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            },
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                            lineNumber: 428,
                            columnNumber: 15
                        }, this)
                    ]
                }, `point-${i}`, true, {
                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                    lineNumber: 388,
                    columnNumber: 13
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
                    strokeWidth: 0.5,
                    strokeDasharray: rate === 1.0 ? "none" : "2 2"
                }, i, false, {
                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                    lineNumber: 452,
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
                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                    lineNumber: 467,
                    columnNumber: 11
                }, this)),
            !isJewel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: center - radius - 40,
                y1: center,
                x2: center + radius + 40,
                y2: center,
                stroke: "#CCC",
                strokeWidth: 0.5,
                strokeDasharray: "4 4"
            }, void 0, false, {
                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                lineNumber: 480,
                columnNumber: 9
            }, this),
            !isJewel && points.map((pt, i)=>{
                const category = categories[i];
                if (!category) return null;
                let deg = pt.angle * 180 / Math.PI + 90;
                if (deg > 180) deg -= 180;
                if ([
                    '경제혁신형',
                    '인구성장형',
                    '경제정속형',
                    '인구정착형'
                ].includes(category)) {
                    deg += 180;
                }
                const x = center + (radius + labelOffset.category) * Math.cos(pt.angle);
                const y = center + (radius + labelOffset.category) * Math.sin(pt.angle);
                // 인구성장형, 안전복원형 외에는 회색으로
                const textColor = [
                    '인구성장형',
                    '안전복원형'
                ].includes(category) ? colorMap[category] || '#999999' : '#999999';
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y,
                    textAnchor: "middle",
                    dy: "0.4em",
                    fontSize: fontSize.category,
                    fontWeight: "bold",
                    fill: textColor,
                    transform: `rotate(${deg} ${x} ${y})`,
                    children: category
                }, i, false, {
                    fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                    lineNumber: 517,
                    columnNumber: 13
                }, this);
            }),
            !isJewel && hoveredArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: center - 50,
                        y: hoveredArea === 'top' ? center - 120 : center + 60,
                        width: 100,
                        height: 30,
                        rx: 5,
                        fill: "rgba(0, 0, 0, 0.8)"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 537,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: center,
                        y: hoveredArea === 'top' ? center - 100 : center + 80,
                        textAnchor: "middle",
                        fontSize: fontSize.area,
                        fill: "white",
                        fontWeight: "bold",
                        children: hoveredArea === 'top' ? '강점영역' : '약점영역'
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                        lineNumber: 546,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
                lineNumber: 535,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/components/atoms/charts/RadarChart.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
};
_s(JewelRadarChart, "kmI1uySShtcW7I1ywi+u5udIg4w=");
_c = JewelRadarChart;
const __TURBOPACK__default__export__ = JewelRadarChart;
var _c;
__turbopack_context__.k.register(_c, "JewelRadarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/features/results/sections/TitleSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/atoms/charts/RadarChart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// KLACI Code 원형 컴포넌트
const KlaciCodeCircles = ()=>{
    // KLACI 코드 목업 데이터
    const klaciCodes = [
        {
            code: 'K',
            color: '#FF3737'
        },
        {
            code: 'L',
            color: '#FFA600'
        },
        {
            code: 'A',
            color: '#874FFF'
        },
        {
            code: 'C',
            color: '#24CB71'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '8px',
            marginBottom: '24px'
        },
        children: klaciCodes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    color: 'white',
                    border: `2px solid ${item.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 600
                },
                children: item.code
            }, index, false, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_c = KlaciCodeCircles;
const TitleSection = ({ districtData })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Zustand store에서 선택된 지역 정보 가져오기
    const { selectedDistrict } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistrict"])();
    const getProvinceById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetProvinceById"])();
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
    // 안전한 지역명 생성 함수
    const getDistrictName = ()=>{
        console.log('Selected district:', selectedDistrict);
        // selectedDistrict가 유효한 객체이고 name 속성이 있는 경우
        if (selectedDistrict?.name && selectedDistrict?.province_id) {
            // province_id를 사용해서 province 정보 가져오기
            const province = getProvinceById(selectedDistrict.province_id);
            console.log('Found province:', province);
            if (province?.name) {
                return `${province.name} ${selectedDistrict.name}`;
            }
        }
        // 둘 중 하나라도 없거나 name 속성이 없는 경우
        return '선택없음';
    };
    // 기본값 설정
    const rank = districtData?.rank || 3;
    const rankText = `종합순위 ${rank}위`;
    const districtName = getDistrictName();
    // 다음/이전 지자체로 이동하는 함수
    const handleNavigate = (direction)=>{
        const districts = [
            {
                id: 'seoul-gangnam',
                name: '서울시 강남구',
                rank: 1
            },
            {
                id: 'seoul-songpa',
                name: '서울시 송파구',
                rank: 2
            },
            {
                id: 'jeonbuk-jeonju',
                name: '전라북도 전주시',
                rank: 3
            },
            {
                id: 'gyeonggi-seongnam',
                name: '경기도 성남시',
                rank: 4
            },
            {
                id: 'incheon-yeonsu',
                name: '인천시 연수구',
                rank: 5
            }
        ];
        const currentIndex = districts.findIndex((d)=>d.id === districtData?.id);
        let targetIndex;
        if (direction === 'prev') {
            targetIndex = currentIndex > 0 ? currentIndex - 1 : districts.length - 1;
        } else {
            targetIndex = currentIndex < districts.length - 1 ? currentIndex + 1 : 0;
        }
        const targetDistrict = districts[targetIndex];
        if (!targetDistrict) return null;
        console.log(`Navigating to ${targetDistrict.name} (${targetDistrict.rank}위)`);
        // replace를 사용하여 스크롤 위치 유지
        router.replace(`/results/${targetDistrict.id}`, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '16px',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '20px',
                    marginBottom: '50px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 470,
                    data: chartData
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNavigate('prev'),
                        style: {
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s ease'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'rgba(28, 63, 211, 0.1)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                transform: 'rotate(180deg)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7 17L17 7M17 7H7M17 7V17",
                                stroke: "#1C3FD3",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '1.2rem',
                            color: '#1C3FD3',
                            fontWeight: '600'
                        },
                        children: rankText
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNavigate('next'),
                        style: {
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s ease'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = 'rgba(28, 63, 211, 0.1)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7 17L17 7M17 7H7M17 7V17",
                                stroke: "#1C3FD3",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '3.2rem',
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: '50px'
                },
                children: districtName
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KlaciCodeCircles, {}, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '2.2rem',
                    color: '#474E59',
                    fontWeight: 'bold',
                    marginBottom: '12px'
                },
                children: "안전복지형"
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#949FB0',
                    marginBottom: '50px'
                },
                children: "인생 2막 올스타전 도시"
            }, void 0, false, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '1rem',
                    color: '#333',
                    lineHeight: 1.2,
                    textAlign: 'center',
                    maxWidth: '600px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '8px'
                        },
                        children: "인구 유입은 이루어지나 경제는 성장 정체 상태이고"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '8px'
                        },
                        children: "생활 기반은 부족하지만, 안전 수준은 높아 안정적인 공동체를 이루고 있는 유형입니다."
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "경제 활력 제고와 생활 환경 개선이 시급합니다"
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/features/results/sections/TitleSection.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
};
_s(TitleSection, "SinMaEtPZtPtnhVYCT9UWY+0jN4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistrict"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetProvinceById"]
    ];
});
_c1 = TitleSection;
const __TURBOPACK__default__export__ = TitleSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "KlaciCodeCircles");
__turbopack_context__.k.register(_c1, "TitleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/frontend/app/results/[district]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$layout$2f$ResultLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/components/layout/ResultLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/store/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// sections
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$CategoryRankingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/CategoryRankingSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$CompetencyDistSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/CompetencyDistSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$DistrictSearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/DistrictSearchSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$DistrictSelectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/DistrictSelectSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$PreRegistrationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/PreRegistrationSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$StrenthWeaknessIndexSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/StrenthWeaknessIndexSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$SummarySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/SummarySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$TitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/frontend/features/results/sections/TitleSection.tsx [app-client] (ecmascript)");
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
;
;
function ResultsPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const districtId = params.district;
    const [isFloating, setIsFloating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [districtData, setDistrictData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const isLoggedIn = true;
    // Zustand store에서 선택된 지역 정보 가져오기
    const { selectedProvince, selectedDistrict } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistrict"])();
    // 디버깅용 - store 상태 확인
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            console.log('Current store state:');
            console.log('selectedProvince:', selectedProvince);
            console.log('selectedDistrict:', selectedDistrict);
            console.log('selectedProvince type:', typeof selectedProvince);
            console.log('selectedDistrict type:', typeof selectedDistrict);
        }
    }["ResultsPage.useEffect"], [
        selectedProvince,
        selectedDistrict
    ]);
    // 안전한 지역명 생성 함수
    const getDistrictName = ()=>{
        // selectedProvince와 selectedDistrict가 모두 유효한 객체이고 name 속성이 있는 경우
        if (selectedProvince?.name && selectedDistrict?.name) {
            return `${selectedProvince.name} ${selectedDistrict.name}`;
        }
        // 둘 중 하나라도 없거나 name 속성이 없는 경우
        return '선택없음';
    };
    // 지자체 데이터 매핑 - 동적으로 생성
    const getDistrictsMap = ()=>{
        const districtName = getDistrictName();
        // 선택된 지역 정보가 있으면 동적으로 생성
        if (districtName !== '선택없음') {
            console.log('Selected province:', selectedProvince);
            console.log('Selected district:', selectedDistrict);
            console.log('Generated name:', districtName);
            return {
                [districtId]: {
                    id: districtId,
                    name: districtName,
                    rank: 3
                }
            };
        }
        // 기본값 (선택된 지역 정보가 없는 경우)
        return {
            'seoul-gangnam': {
                id: 'seoul-gangnam',
                name: '서울시 강남구',
                rank: 1
            },
            'seoul-songpa': {
                id: 'seoul-songpa',
                name: '서울시 송파구',
                rank: 2
            },
            'jeonbuk-jeonju': {
                id: 'jeonbuk-jeonju',
                name: '전라북도 전주시',
                rank: 3
            },
            'gyeonggi-seongnam': {
                id: 'gyeonggi-seongnam',
                name: '경기도 성남시',
                rank: 4
            },
            'incheon-yeonsu': {
                id: 'incheon-yeonsu',
                name: '인천시 연수구',
                rank: 5
            }
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            const handleScroll = {
                "ResultsPage.useEffect.handleScroll": ()=>{
                    const scrollThreshold = 200;
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
    // districtId가 변경될 때마다 데이터 로드
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            const loadDistrictData = {
                "ResultsPage.useEffect.loadDistrictData": async ()=>{
                    setLoading(true);
                    try {
                        // 실제 구현에서는 API 호출
                        // const response = await fetch(`/api/districts/${districtId}`);
                        // const data = await response.json();
                        // 동적으로 생성된 매핑된 데이터 사용
                        const districtsMap = getDistrictsMap();
                        const data = districtsMap[districtId];
                        if (data) {
                            setDistrictData(data);
                        } else {
                            // 유효하지 않은 districtId인 경우 기본값 사용
                            const defaultData = districtsMap['jeonbuk-jeonju'];
                            if (defaultData) {
                                setDistrictData(defaultData);
                            }
                        }
                    } catch (error) {
                        console.error('Failed to load district data:', error);
                        // 에러 시 기본값 사용
                        const districtsMap = getDistrictsMap();
                        const defaultData = districtsMap['jeonbuk-jeonju'];
                        if (defaultData) {
                            setDistrictData(defaultData);
                        }
                    } finally{
                        setLoading(false);
                    }
                }
            }["ResultsPage.useEffect.loadDistrictData"];
            if (districtId) {
                loadDistrictData();
            }
        }
    }["ResultsPage.useEffect"], [
        districtId,
        selectedProvince,
        selectedDistrict
    ]); // selectedProvince, selectedDistrict 의존성 추가
    // URL 파라미터가 변경되었을 때 스크롤 위치 복원
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultsPage.useEffect": ()=>{
            const savedScrollY = sessionStorage.getItem('savedScrollY');
            if (savedScrollY) {
                // DOM이 완전히 렌더링된 후 스크롤 위치 복원
                const timer = setTimeout({
                    "ResultsPage.useEffect.timer": ()=>{
                        window.scrollTo(0, parseInt(savedScrollY));
                        sessionStorage.removeItem('savedScrollY');
                    }
                }["ResultsPage.useEffect.timer"], 200);
                return ({
                    "ResultsPage.useEffect": ()=>clearTimeout(timer)
                })["ResultsPage.useEffect"];
            }
            return;
        }
    }["ResultsPage.useEffect"], [
        districtId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$components$2f$layout$2f$ResultLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    fontSize: '1.2rem',
                    color: '#666'
                },
                children: "로딩 중..."
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this);
    }
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$DistrictSearchSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    !isFloating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$DistrictSelectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                        lineNumber: 197,
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
                                width: '60%',
                                gap: '50px',
                                paddingTop: '100px'
                            },
                            className: "jsx-c9be297a59958b1f",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$TitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    districtData: districtData
                                }, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$SummarySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    className: "jsx-c9be297a59958b1f",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$StrenthWeaknessIndexSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: '15%',
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(to bottom, transparent, rgba(244, 244, 244, 0.95), #F4F4F4)',
                                                pointerEvents: 'none',
                                                zIndex: 10
                                            },
                                            className: "jsx-c9be297a59958b1f"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$CompetencyDistSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$CategoryRankingSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$PreRegistrationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                lineNumber: 255,
                columnNumber: 22
            }, this),
            isFloating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '30px',
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: 'white',
                    borderRadius: '20px',
                    width: '80%',
                    margin: '0 auto',
                    // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    animation: 'slideDown 0.3s ease-out',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center'
                },
                className: "jsx-c9be297a59958b1f",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$features$2f$results$2f$sections$2f$DistrictSelectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isFloating: true
                }, void 0, false, {
                    fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
                lineNumber: 258,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c9be297a59958b1f",
                children: "@keyframes slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/frontend/app/results/[district]/page.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(ResultsPage, "Jo8kQrJjLxVzZ0I6a/K0CBjn5Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$frontend$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistrict"]
    ];
});
_c = ResultsPage;
var _c;
__turbopack_context__.k.register(_c, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=packages_frontend_af24b210._.js.map