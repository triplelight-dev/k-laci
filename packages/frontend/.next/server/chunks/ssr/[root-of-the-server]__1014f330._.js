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
"[project]/app/results/components/CategoryRanking.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
                        fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                        fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                                fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                                fileName: "[project]/app/results/components/CategoryRanking.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/results/components/CategoryRanking.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                                fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                                fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                                fileName: "[project]/app/results/components/CategoryRanking.tsx",
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
                                fileName: "[project]/app/results/components/CategoryRanking.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/results/components/CategoryRanking.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/results/components/CategoryRanking.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/results/components/CategoryRanking.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CategoryRanking;
}}),
"[project]/atoms/charts/RadarChart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const JewelRadarChart = ({ data, labels, showGrid = false })=>{
    const size = 500;
    const center = size / 2;
    const radius = 200;
    // 항목 수를 8개로 고정하거나 props.labels 길이에 맞춤
    const categories = labels || [
        '경제혁신형',
        '생활역동형',
        '안전복원형',
        '인구성장형',
        '경제정속형',
        '생활정주형',
        '안전정진형',
        '새로운항목'
    ];
    const numAxes = categories.length; // 이제 8이 됩니다.
    const angleStep = 2 * Math.PI / numAxes;
    // **핵심 수정: data 배열 길이 보정**
    // data 배열의 길이가 numAxes보다 짧으면 0으로 채워서 오류 방지
    const processedData = [
        ...data
    ];
    while(processedData.length < numAxes){
        processedData.push(0); // 부족한 데이터는 0으로 채움
    }
    // ⭕️ 점 좌표 계산 - 이제 processedData를 사용합니다.
    const points = processedData.map((value, i)=>{
        const angle = -Math.PI / 2 + i * angleStep;
        const r = value / 100 * radius;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        };
    });
    // 🎨 각 삼각형의 시작색 → 끝색 정의 및 그라데이션 타입 지정
    // 8번째 항목에 대한 색상 정의 추가
    const fixedColorDefinitions = [
        // [0] 경제혁신형: 빨강 → 초록
        {
            startColor: '#F56542',
            endColor: '#C2BDF3',
            gradientType: 'radial-center-to-edge'
        },
        // [1] 생활역동형: 초록 → 노랑
        {
            startColor: '#F56542',
            endColor: '#FFFF00',
            gradientType: 'linear-base-to-center'
        },
        // [2] 안전복원형: 보라 → 노랑
        {
            startColor: '#800080',
            endColor: '#FFFF00',
            gradientType: 'radial-edge-to-center'
        },
        // [3] 인구성장형: 파랑 → 주황
        {
            startColor: '#0000FF',
            endColor: '#C2BDF3',
            gradientType: 'linear-center-to-base'
        },
        // [4] 경제정속형: 시안(청록) → 마젠타(자홍)
        {
            startColor: '#00FFFF',
            endColor: '#FF00FF',
            gradientType: 'radial-center-to-edge'
        },
        // [5] 생활정주형: 주황 → 파랑
        {
            startColor: '#FFA500',
            endColor: '#0000FF',
            gradientType: 'linear-base-to-center'
        },
        // [6] 안전정진형: 마젠타(자홍) → 초록
        {
            startColor: '#FF00FF',
            endColor: '#74BF9E',
            gradientType: 'radial-edge-to-center'
        },
        // [7] 새로운항목: 연한 파랑 → 진한 파랑 (8번째 항목 추가)
        {
            startColor: '#87CEEB',
            endColor: '#4169E1',
            gradientType: 'linear-center-to-base'
        }
    ];
    // 레이더 차트의 외곽선을 정의하는 clipPath
    // points 배열이 항상 numAxes 길이를 가지므로 안전합니다.
    const radarOutlinePath = points.map((p, idx)=>`${idx === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    points.map((point, i)=>{
                        // 이제 points는 항상 numAxes 길이를 가짐
                        const { startColor, endColor, gradientType } = fixedColorDefinitions[i % fixedColorDefinitions.length];
                        const nextPoint = points[(i + 1) % numAxes]; // nextPoint도 항상 정의됨
                        const baseMidX = (point.x + nextPoint.x) / 2;
                        const baseMidY = (point.y + nextPoint.y) / 2;
                        const opaqueStartOpacity = 0.8;
                        const opaqueEndOpacity = 1.0;
                        if (gradientType === 'radial-center-to-edge') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: `grad${i}`,
                                cx: center,
                                cy: center,
                                r: radius,
                                fx: center,
                                fy: center,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: startColor,
                                        stopOpacity: opaqueStartOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: endColor,
                                        stopOpacity: opaqueEndOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this);
                        } else if (gradientType === 'radial-edge-to-center') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: `grad${i}`,
                                cx: center,
                                cy: center,
                                r: radius,
                                fx: center,
                                fy: center,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: endColor,
                                        stopOpacity: opaqueEndOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: startColor,
                                        stopOpacity: opaqueStartOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this);
                        } else if (gradientType === 'linear-base-to-center') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `grad${i}`,
                                x1: baseMidX,
                                y1: baseMidY,
                                x2: center,
                                y2: center,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: endColor,
                                        stopOpacity: opaqueEndOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: startColor,
                                        stopOpacity: opaqueStartOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this);
                        } else if (gradientType === 'linear-center-to-base') {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `grad${i}`,
                                x1: center,
                                y1: center,
                                x2: baseMidX,
                                y2: baseMidY,
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: startColor,
                                        stopOpacity: opaqueStartOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: endColor,
                                        stopOpacity: opaqueEndOpacity
                                    }, void 0, false, {
                                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this);
                        }
                        return null;
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "blendingFilter",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                in: "SourceGraphic",
                                stdDeviation: "25",
                                result: "blurred"
                            }, void 0, false, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                in: "SourceGraphic",
                                in2: "blurred",
                                mode: "screen"
                            }, void 0, false, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "radarClipPath",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: radarOutlinePath
                        }, void 0, false, {
                            fileName: "[project]/atoms/charts/RadarChart.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/atoms/charts/RadarChart.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#blendingFilter)",
                clipPath: "url(#radarClipPath)",
                children: points.map((point, i)=>{
                    const next = points[(i + 1) % numAxes];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M${center},${center} L${point.x},${point.y} L${next.x},${next.y} Z`,
                        fill: `url(#grad${i})`,
                        fillOpacity: 1.0
                    }, i, false, {
                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/atoms/charts/RadarChart.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            showGrid && [
                0.25,
                0.5,
                0.75,
                1.0
            ].map((ratio, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: center,
                    cy: center,
                    r: radius * ratio,
                    fill: "none",
                    stroke: "#6c676746",
                    strokeWidth: 0.5
                }, `grid-${i}`, false, {
                    fileName: "[project]/atoms/charts/RadarChart.tsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, this)),
            showGrid && categories.map((_, i)=>{
                const angle = -Math.PI / 2 + i * angleStep;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: center,
                    y1: center,
                    y2: y,
                    x2: x,
                    stroke: "#ccc",
                    strokeWidth: 0.5
                }, `axis-${i}`, false, {
                    fileName: "[project]/atoms/charts/RadarChart.tsx",
                    lineNumber: 291,
                    columnNumber: 13
                }, this);
            }),
            categories.map((label, i)=>{
                const angle = -Math.PI / 2 + i * angleStep;
                const x = center + (radius + 20) * Math.cos(angle);
                const y = center + (radius + 20) * Math.sin(angle);
                let textAnchor = 'middle';
                let dy = '0.35em';
                // 8개 항목에 맞춰 라벨 위치 조정 로직 재검토 (필요 시)
                // 현재 로직은 모든 각도에 대해 작동하지만, 8개 항목에서 라벨이 겹치지 않도록
                // 미세 조정이 필요할 수 있습니다.
                if (Math.abs(Math.cos(angle)) > 0.8) {
                    // 수평에 가까운 축 (0도, 180도)
                    textAnchor = Math.cos(angle) > 0 ? 'start' : 'end';
                    dy = '0.35em';
                } else if (Math.abs(Math.sin(angle)) > 0.8) {
                    // 수직에 가까운 축 (90도, 270도)
                    textAnchor = 'middle';
                    dy = Math.sin(angle) > 0 ? '1em' : '-0.3em';
                } else {
                    // 대각선 축
                    if (Math.cos(angle) > 0 && Math.sin(angle) < 0) {
                        // 우상단 (45도)
                        textAnchor = 'start';
                        dy = '-0.3em';
                    } else if (Math.cos(angle) < 0 && Math.sin(angle) < 0) {
                        // 좌상단 (135도)
                        textAnchor = 'end';
                        dy = '-0.3em';
                    } else if (Math.cos(angle) < 0 && Math.sin(angle) > 0) {
                        // 좌하단 (225도)
                        textAnchor = 'end';
                        dy = '1em';
                    } else if (Math.cos(angle) > 0 && Math.sin(angle) > 0) {
                        // 우하단 (315도)
                        textAnchor = 'start';
                        dy = '1em';
                    }
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y,
                    textAnchor: textAnchor,
                    dy: dy,
                    fontSize: "12",
                    fill: "#444",
                    children: label
                }, `label-${i}`, false, {
                    fileName: "[project]/atoms/charts/RadarChart.tsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this);
            }),
            showGrid && [
                0,
                20,
                40,
                60,
                80,
                100
            ].map((value)=>{
                const r = value / 100 * radius; // 해당 값에 대한 반지름
                const textOffset = 5; // 텍스트를 축에서 약간 띄울 거리
                // 십자형으로 4개의 주요 방향에 값을 표기 (radian 값)
                // 270도 (-Math.PI / 2), 0도 (0), 90도 (Math.PI / 2), 180도 (Math.PI)
                const cardinalAngles = [
                    -Math.PI / 2,
                    0,
                    Math.PI / 2,
                    Math.PI
                ];
                return cardinalAngles.map((angle, angleIdx)=>{
                    // 텍스트 위치 계산
                    const textX = center + (r + textOffset) * Math.cos(angle);
                    const textY = center + (r + textOffset) * Math.sin(angle);
                    let textAnchor = 'middle';
                    let dy = '0.35em'; // 기본 값
                    // 텍스트 정렬 및 위치 미세 조정
                    if (angle === 0) {
                        // 0도 (오른쪽)
                        textAnchor = 'start';
                        dy = '0.35em';
                    } else if (angle === Math.PI / 2) {
                        // 90도 (아래)
                        textAnchor = 'middle';
                        dy = '1.2em';
                    } else if (angle === Math.PI) {
                        // 180도 (왼쪽)
                        textAnchor = 'end';
                        dy = '0.35em';
                    } else if (angle === -Math.PI / 2) {
                        // 270도 (위)
                        textAnchor = 'middle';
                        dy = '-0.5em';
                    }
                    // 0 값은 중앙에만 표시 (가장 위쪽 축)
                    if (value === 0 && angle !== -Math.PI / 2) return null; // 0은 270도(위)에서만 표시
                    // 0 값의 경우 텍스트를 중심에 가깝게
                    // 0은 항상 위쪽 축에만 표시하므로, 그 위치를 고정
                    const finalTextX = value === 0 && angle === -Math.PI / 2 ? center : textX;
                    const finalTextY = value === 0 && angle === -Math.PI / 2 ? center + 15 : textY; // 0은 항상 중심에서 약간 아래에
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: finalTextX,
                                y: finalTextY,
                                textAnchor: textAnchor,
                                dy: dy,
                                fontSize: "10",
                                fill: "#888",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 414,
                                columnNumber: 17
                            }, this),
                            value !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: center + r * Math.cos(angle),
                                y1: center + r * Math.sin(angle),
                                x2: center + (r + textOffset - 2) * Math.cos(angle),
                                y2: center + (r + textOffset - 2) * Math.sin(angle),
                                stroke: "#888" // 점선 색상
                                ,
                                strokeWidth: 0.5,
                                strokeDasharray: "2 2" // 점선 패턴 (2px 선, 2px 간격)
                            }, void 0, false, {
                                fileName: "[project]/atoms/charts/RadarChart.tsx",
                                lineNumber: 427,
                                columnNumber: 19
                            }, this)
                        ]
                    }, `value-${value}-${angleIdx}`, true, {
                        fileName: "[project]/atoms/charts/RadarChart.tsx",
                        lineNumber: 412,
                        columnNumber: 15
                    }, this);
                });
            })
        ]
    }, void 0, true, {
        fileName: "[project]/atoms/charts/RadarChart.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = JewelRadarChart;
}}),
"[project]/app/results/sections/CategoryRankingSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/results/components/CategoryRanking.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/atoms/charts/RadarChart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const CategoryRankingSection = ()=>{
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
                alignItems: 'flex-start',
                width: '50%'
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
                    fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '500px',
                        height: '500px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$atoms$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        showGrid: true,
                        data: [
                            75,
                            65,
                            60,
                            70,
                            45,
                            40,
                            50,
                            46
                        ]
                    }, void 0, false, {
                        fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8",
                    children: mockCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$results$2f$components$2f$CategoryRanking$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: category
                        }, index, false, {
                            fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/results/sections/CategoryRankingSection.tsx",
        lineNumber: 11,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1014f330._.js.map