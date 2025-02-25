module.exports = {

"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
            outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/SideBar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
;
;
;
const SideBar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:col-span-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#003366] p-4 text-white mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg mb-4",
                        children: "Авторам"
                    }, void 0, false, {
                        fileName: "[project]/components/SideBar.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-xs pb-2",
                        children: "Вы можете отправить статью"
                    }, void 0, false, {
                        fileName: "[project]/components/SideBar.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        className: "w-full text-sm bg-blue-600",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            children: "ОТПРАВИТЬ СТАТЬЮ"
                        }, void 0, false, {
                            fileName: "[project]/components/SideBar.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SideBar.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SideBar.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: "/1.png",
                    alt: "Вестник журнала",
                    width: 300,
                    height: 280,
                    className: "inline-block border border-gray-300"
                }, void 0, false, {
                    fileName: "[project]/components/SideBar.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SideBar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-xs text-blue-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "hover:underline",
                    children: "Вестник Томского государственного университета. 2025 №510"
                }, void 0, false, {
                    fileName: "[project]/components/SideBar.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SideBar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SideBar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SideBar;
}}),
"[project]/app/ethics/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SideBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SideBar.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-6xl mx-auto px-4 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Редакционная коллегия научного журнала «Вестник Томского государственного университета» придерживается принятых международным сообществом принципов публикационной этики, отраженных, в частности, в рекомендациях Комитета по этике научных публикаций (Committee on Publication Ethics (COPE), Кодекс этики научных публикаций), а также учитываeт ценный опыт авторитетных международных журналов и издательств. Во избежание недобросовестной практики в публикационной деятельности (плагиат, изложение недостоверных сведений и др.), в целях обеспечения высокого качества научных публикаций, признания общественностью полученных автором научных результатов, каждый член редакционной коллегии, автор, рецензент, издатель, а также учреждения, участвующие в издательском процессе, обязаны соблюдать этические стандарты, нормы и правила и принимать все разумные меры для предотвращения их нарушений. Соблюдение правил этики научных публикаций всеми участниками этого процесса способствует обеспечению прав авторов на интеллектуальную собственность, повышению качества издания и исключению возможности неправомерного использования авторских материалов в интересах отдельных лиц. Основные термины, используемые в данном положении: Этика научных публикаций – это система норм профессионального поведения во взаимоотношениях авторов, рецензентов, редакторов, издателей и читателей в процессе создания, распространения и использования научных публикаций. Автор – это лицо или группа лиц (коллектив авторов), участвующих в создании публикации результатов научного исследования. Главный редактор – лицо, возглавляющее редакцию и принимающее окончательные решения в отношении производства и выпуска журнала. Издатель – юридическое или физическое лицо, осуществляющее выпуск в свет научной публикации. Научная статья – законченное и опубликованное авторское произведение. Плагиат – умышленное присвоение авторства чужого произведения науки или искусства, чужих идей или изобретений. Плагиат может быть нарушением авторско-правового законодательства и патентного законодательства и в качестве такового может повлечь за собой юридическую ответственность. Редактор – представитель научного журнала или издательства, осуществляющий подготовку материалов для публикации, а также поддерживающий общение с авторами и читателями научных публикаций. Редакционная коллегия – совещательный орган из группы авторитетных лиц, который оказывает главному редактору помощь в выборе, подготовке и оценке произведений для издания. Рецензент – эксперт, действующий от имени научного журнала или издательства и проводящий научную экспертизу авторских материалов с целью определения возможности их публикации. Рукопись – поданное для опубликования в редакцию авторское произведение, но не опубликованное. Читатель – любое лицо, ознакомившееся с опубликованными материалами."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "1. Принципы профессиональной этики в деятельности издателя"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "В своей деятельности издатель несет ответственность за обнародование авторских произведений, что влечет необходимость следования следующим основополагающим принципам и процедурам: 1.1. Способствовать исполнению этических обязанностей редакцией, редакционно-издательской группой, редакционной коллегией, рецензентами и авторами в соответствии с данными требованиями. 1.2. Оказывать поддержку редакции журнала в рассмотрении претензий к этическим аспектам публикуемых материалов и помогать взаимодействовать с другими журналами и/или издателями, если это способствует исполнению обязанностей редакторов. 1.3. Обеспечивать конфиденциальность полученной от авторов публикации и любой информации до момента ее опубликования. 1.4. Осознавать, что деятельность журнала не является коммерческим проектом и не несет в себе цели извлечения прибыли. 1.5. Быть всегда готовым опубликовать исправления, разъяснения, опровержения и извинения, когда это необходимо. 1.6. Предоставлять редакции журнала возможность исключения публикаций, содержащих плагиат и недостоверные данные. 1.7. Издательство (редактор), имеет право отклонить рукопись или потребовать от автора ее доработки, если она оформлена с нарушениями Правил, принятых в данном журнале и согласованных с Издательством. 1.8. Статья, в случае принятия к опубликованию, размещается в открытом доступе; авторские права сохраняются за авторами. 1.9. Размещать информацию о финансовой поддержке исследования, если автор такую информацию к статье приводит. 1.10. При обнаружении содержательных, грамматических, стилистических и иных ошибок редакция обязуется предпринимать все меры для их устранения. 1.11. Согласовывать с автором, вносимую в статью редакторскую корректуру. 1.12. Не задерживать выпуск журнала."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "2. Этические принципы, которыми должен руководствоваться автор научной публикации"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Авторы (или коллектив авторов) при подаче материалов в научный журнал «Вестник Томского государственного университета. Филология» осознает, что несет первоначальную ответственность за новизну и достоверность результатов научного исследования, что предполагает соблюдение следующих принципов: 2.1. Авторы статьи должны предоставлять достоверные результаты проведенных исследований. Заведомо ошибочные или сфальсифицированные утверждения неприемлемы. 2.2. Авторы должны гарантировать, что результаты исследования, изложенные в предоставленной рукописи, полностью оригинальны. Заимствованные фрагменты или утверждения должны быть оформлены с обязательным указанием автора и первоисточника. Чрезмерные заимствования, а также плагиат в любых формах, включая неоформленные цитаты, перефразирование или присвоение прав на результаты чужих исследований, неэтичны и неприемлемы. Наличие заимствования без ссылки будет рассматриваться редакционной коллегией как плагиат. 2.3. Авторы должны приводить в рукописи только подлинные факты и сведения; приводить достаточное количество информации для проверки и повторения экспериментов другими исследователями; не использовать информации, полученной в частном порядке, без открытого письменного разрешения; не допускать фабрикации и фальсификации данных. 2.4. Не допускать дублирования публикаций (в сопроводительном письме автор должен указать, что работа публикуется впервые). Если отдельные элементы рукописи были ранее опубликованы, автор обязан сослаться на более раннюю работу и указать отличия новой работы от предыдущей. 2.5. Авторы не должны предоставлять в журнал рукопись, которая была отправлена в другой журнал и находится на рассмотрении, а также статью, уже опубликованную в другом журнале. 2.6. Необходимо признавать вклад всех лиц, так или иначе повлиявших на ход исследования, в частности, в статье должны быть представлены ссылки на работы, которые имели значение при проведении исследования. 2.7. Авторы должны соблюдать этические нормы, выступая с критикой или замечаниями в отношении исследований третьих лиц. 2.8. Соавторами статьи должны быть указаны все лица, внесшие существенный вклад в проведение исследования. Среди соавторов недопустимо указывать лиц, не участвовавших в исследовании. 2.9. Авторы должны с уважением относиться к работе редколлегии и рецензентов и устранять указанные недостатки или аргументированно их пояснить. 2.10. Авторы должны представлять и оформлять рукопись согласно принятым в журнале правилам. 2.11. Если автор обнаружит существенные ошибки или неточности в статье на этапе ее рассмотрения или после ее опубликования, он должен незамедлительно уведомить об этом редакцию журнала; 2.12. Авторы должны предоставить редакционной коллегии или издателю доказательства правильности исходной статьи или исправить существенные ошибки, если о них редакционной коллегии или издателю стало известно от третьих лиц."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "3. Этические принципы в деятельности рецензента"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Рецензент осуществляет научную экспертизу авторских материалов, вследствие чего его действия должны носить непредвзятый характер, заключающийся в выполнении следующих принципов: 3.1. Рукопись, полученная для рецензирования, должна рассматриваться как конфиденциальный документ, который нельзя передавать для ознакомления или обсуждения третьим лицам, не имеющим на то полномочий от редакции. 3.2. Рецензенты обязаны знать о том, что направленные им рукописи являются интеллектуальной собственностью авторов и относятся к сведениям, не подлежащим разглашению. Нарушение конфиденциальности возможно только в случае заявления рецензента о недостоверности или фальсификации материалов, изложенных в статье; 3.3. Рецензент должен обращать внимание главного редактора на существенное или частичное сходство оцениваемой рукописи с какой-либо иной работой, а также факты отсутствия ссылок на положения, выводы или аргументы, ранее опубликованные в других работах этого или других авторов. 3.4. Рецензент должен отметить соответствующие опубликованные работы, которые не процитированы (в статье). 3.5. Рецензент обязан давать объективную и аргументированную оценку изложенным результатам исследования и четко обоснованные рекомендации. Персональная критика автора неприемлема. 3.6. Замечания и пожелания рецензента должны быть объективными и принципиальными, направленными на повышение научного уровня рукописи. 3.7. Рецензент должен выносить решения на основании конкретных фактов и приводить доказательства своего решения. 3.8. Рецензентам не разрешается снимать копии с рукописей для своих нужд. 3.9. Рецензенты не имеют права использовать в своих интересах знание о содержании работы до ее опубликования. 3.10. Рецензент, который не обладает, по его мнению, достаточной квалификацией для оценки рукописи, либо не может быть объективным, например, в случае конфликта интересов с автором или организацией, должен сообщить об этом редактору с просьбой исключить его из процесса рецензирования данной рукописи; 3.11. Отзыв на статью конфиденциален. ФИО Рецензента знают ответственный секретарь и главный редактор журнала. Данная информация не разглашается."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "4. Принципы профессиональной этики в деятельности главного редактора"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "В своей деятельности главный редактор несет ответственность за обнародование авторских произведений, что накладывает необходимость следования следующим основополагающим принципам: 4.1. При принятии решения о публикации главный редактор научного журнала руководствуется достоверностью представления данных и научной значимостью рассматриваемой работы. 4.2. Главный редактор должен оценивать интеллектуальное содержание рукописей вне зависимости от расы, пола, сексуальной ориентации, религиозных взглядов, происхождения, гражданства, социального положения или политических предпочтений авторов. 4.3. Неопубликованные данные, полученные из представленных к рассмотрению рукописей, не должны использоваться для личных целей или передаваться третьим лицам без письменного согласия автора. Информация или идеи, полученные в ходе редактирования и связанные с возможными преимуществами, должны сохраняться конфиденциальными, и не использоваться с целью получения личной выгоды. 4.4. Главный редактор не должен допускать к публикации информацию, если имеется достаточно оснований полагать, что она является плагиатом. 4.5. Главный редактор в своей деятельности обязуется: – постоянно совершенствовать журнал; – следовать принципу свободы мнений; – стремиться к удовлетворению потребностей читателей и авторов журнала; – исключать влияние интересов бизнеса или политики на принятие решений об опубликовании материалов; – принимать решение о публикации материалов, руководствуясь следующими главными критериями: соответствие рукописи тематике журнала; актуальность, новизна и научная значимость представленной статьи; ясность изложения; достоверность результатов и законченность выводов. Качество исследования и его актуальность являются основой для решения о публикации; – принимать все разумные меры для обеспечения высокого качества публикуемых материалов и защиты конфиденциальности персональной информации; – учитывать рекомендации рецензентов при принятии окончательного решения о публикации статьи.Ответственность за решение о публикации полностью лежит на редакционной коллегии журнала; – обосновать свое решение в случае принятия или отклонения статьи; – предоставить автору рецензируемого материала возможность для обоснования своей исследовательской позиции; – при смене состава редакционной коллегии не отменять решения предыдущего состава о публикации материала. 4.6. Главный редактор совместно с издателем не должны оставлять без ответа претензии, касающиеся рассмотренных рукописей или опубликованных материалов, а также при выявлении конфликтной ситуации принимать все необходимые меры для восстановления нарушенных прав."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "5. Руководящие принципы при выпуске статей"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "5.1. Соблюдение издательской этики редакционной коллегией. 5.2. Соблюдение руководящих принципов при отклонении статей. 5.3. Поддержание целостности академического письма. 5.4. Предотвращение нанесения ущерба интеллектуальным и этическим нормам при наличии коммерческих интересов. 5.5. Готовность публиковать исправления, разъяснения, отклонения и извинения, когда это необходимо. 5.6. Предотвращение публикации плагиата и мошеннических данных."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "6. Конфликт интересов"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Во избежание случаев нарушения публикационной этики следует исключить конфликт интересов всех сторон, участвующих в процессе опубликования рукописи. Конфликт интересов возникает в том случае, если у автора, рецензента или члена редколлегии имеются финансовые, научные или личные взаимоотношения, которые могут повлиять на их действия. Такие взаимоотношения называют двойственными обязательствами, конкурирующими интересами или конкурирующими лояльностями. В целях предотвращения конфликта интересов и в соответствии с принятыми этическими нормами журнала на каждую из сторон возлагаются следующие обязанности. Редактор обязан: – передать рукопись для рассмотрения другому члену редколлегии при наличии у первоначально назначенного рецензента конфликта интересов с автором представленной рукописи; – запрашивать у всех участников процесса опубликования рукописи информацию о возможности возникновения конкурирующих интересов; – принимать решение о публикации информации, указанной в письме автора, касающейся конфликта научных и / или финансовых интересов, если она не является конфиденциальной и может оказать влияние на оценку опубликованной работы читателем или научным сообществом; – обеспечить публикацию поправок, если информация о конфликте интересов была получена после опубликования статьи. Автор обязан: – указать место своей работы и источник финансирования исследования. Рецензент обязан: – сообщить главному редактору о наличии конфликта интересов (двойственных обязательств, конкурирующих интересов) и отказаться от экспертизы рукописи."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Нарушения"
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "При возникновении ситуации, связанной с нарушением публикационной этики со стороны редактора, автора или рецензента, требуется обязательное расследование. Это распространяется как на опубликованные, так и неопубликованные материалы. Редакционная коллегия обязана потребовать разъяснения, без привлечения лиц, которые могут иметь конфликт интересов с одной из сторон. Если материал, содержащий значительные неточности, был опубликован, он должен быть незамедлительно исправлен в форме, доступной для читателей и систем индексирования."
                                }, void 0, false, {
                                    fileName: "[project]/app/ethics/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ethics/page.tsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ethics/page.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SideBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/ethics/page.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ethics/page.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/ethics/page.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/ethics/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/ethics/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/ethics/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/ethics/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_2c8c7a46._.js.map