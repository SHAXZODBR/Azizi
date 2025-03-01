module.exports = {

"[project]/app/actions/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"00a570fbc2494224abd087ba97aabaa233f98dbc9c":"logout","00b4f485c98d225b2c3964da2b88d49084ea0c79aa":"getSession","4054c27038d3fd33a11b8eab3d8aa88485535ac682":"login","4073942f3fd188c99a2c206c7a7c73054ebbeabac6":"register"} */ __turbopack_esm__({
    "getSession": (()=>getSession),
    "login": (()=>login),
    "logout": (()=>logout),
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
// This is a placeholder for your actual database implementation
// You'll replace this with your PostgreSQL implementation later
const mockUsers = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123",
        role: "admin"
    },
    {
        id: 2,
        name: "Regular User",
        email: "user@example.com",
        password: "user123",
        role: "user"
    }
];
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ login(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    // In a real app, you would:
    // 1. Validate the input
    // 2. Check the credentials against your database
    // 3. Hash the password and compare it securely
    // This is a mock implementation
    const user = mockUsers.find((u)=>u.email === email && u.password === password);
    if (!user) {
        // In a real app, you would handle this error better
        console.error("Invalid credentials");
        return;
    }
    // Create a session (in a real app, you would use a proper session management system)
    const session = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };
    // Store the session in a cookie
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set("session", JSON.stringify(session), {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
    // Redirect based on role
    if (user.role === "admin") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/archive");
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/archive");
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ register(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");
    // In a real app, you would:
    // 1. Validate the input
    // 2. Check if the user already exists
    // 3. Hash the password
    // 4. Store the user in your database
    // For now, just redirect to login
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete("session");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSession() {
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().get("session")?.value;
    if (!session) {
        return null;
    }
    return JSON.parse(session);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    register,
    logout,
    getSession
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "4054c27038d3fd33a11b8eab3d8aa88485535ac682", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "4073942f3fd188c99a2c206c7a7c73054ebbeabac6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00a570fbc2494224abd087ba97aabaa233f98dbc9c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSession, "00b4f485c98d225b2c3964da2b88d49084ea0c79aa", null);
}}),
"[project]/app/archive/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ArchivePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
;
;
;
// Mock data structure - replace with your actual data fetching logic
const getArchiveData = async ()=>{
    // In a real implementation, this would come from your database
    return [
        {
            year: 2025,
            entries: {
                0: {
                    id: "510",
                    number: 510,
                    status: "В печати"
                }
            }
        },
        {
            year: 2024,
            entries: {
                0: {
                    id: "498",
                    number: 498
                },
                1: {
                    id: "499",
                    number: 499
                },
                2: {
                    id: "500",
                    number: 500
                },
                3: {
                    id: "501",
                    number: 501
                },
                4: {
                    id: "502",
                    number: 502
                },
                5: {
                    id: "503",
                    number: 503
                },
                6: {
                    id: "504",
                    number: 504
                },
                7: {
                    id: "505",
                    number: 505
                },
                8: {
                    id: "506",
                    number: 506
                },
                9: {
                    id: "507",
                    number: 507
                },
                10: {
                    id: "508",
                    number: 508
                },
                11: {
                    id: "509",
                    number: 509
                }
            }
        },
        {
            year: 2023,
            entries: {
                0: {
                    id: "486",
                    number: 486
                },
                1: {
                    id: "487",
                    number: 487
                },
                2: {
                    id: "488",
                    number: 488
                },
                3: {
                    id: "489",
                    number: 489
                },
                4: {
                    id: "490",
                    number: 490
                },
                5: {
                    id: "491",
                    number: 491
                },
                6: {
                    id: "492",
                    number: 492
                },
                7: {
                    id: "493",
                    number: 493
                },
                8: {
                    id: "494",
                    number: 494
                },
                9: {
                    id: "495",
                    number: 495
                },
                10: {
                    id: "496",
                    number: 496
                },
                11: {
                    id: "497",
                    number: 497
                }
            }
        },
        {
            year: 2022,
            entries: {
                0: {
                    id: "474",
                    number: 474
                },
                1: {
                    id: "475",
                    number: 475
                },
                2: {
                    id: "476",
                    number: 476
                },
                3: {
                    id: "477",
                    number: 477
                },
                4: {
                    id: "478",
                    number: 478
                },
                5: {
                    id: "479",
                    number: 479
                },
                6: {
                    id: "480",
                    number: 480
                },
                7: {
                    id: "481",
                    number: 481
                },
                8: {
                    id: "482",
                    number: 482
                },
                9: {
                    id: "483",
                    number: 483
                },
                10: {
                    id: "484",
                    number: 484
                },
                11: {
                    id: "485",
                    number: 485
                }
            }
        },
        {
            year: 2021,
            entries: {
                0: {
                    id: "462",
                    number: 462
                },
                1: {
                    id: "463",
                    number: 463
                },
                2: {
                    id: "464",
                    number: 464
                },
                3: {
                    id: "465",
                    number: 465
                },
                4: {
                    id: "466",
                    number: 466
                },
                5: {
                    id: "467",
                    number: 467
                },
                6: {
                    id: "468",
                    number: 468
                },
                7: {
                    id: "469",
                    number: 469
                },
                8: {
                    id: "470",
                    number: 470
                },
                9: {
                    id: "471",
                    number: 471
                },
                10: {
                    id: "472",
                    number: 472
                },
                11: {
                    id: "473",
                    number: 473
                }
            }
        },
        {
            year: 2020,
            entries: {
                0: {
                    id: "450",
                    number: 450
                },
                1: {
                    id: "451",
                    number: 451
                },
                2: {
                    id: "452",
                    number: 452
                },
                3: {
                    id: "453",
                    number: 453
                },
                4: {
                    id: "454",
                    number: 454
                },
                5: {
                    id: "455",
                    number: 455
                },
                6: {
                    id: "456",
                    number: 456
                },
                7: {
                    id: "457",
                    number: 457
                },
                8: {
                    id: "458",
                    number: 458
                },
                9: {
                    id: "459",
                    number: 459
                },
                10: {
                    id: "460",
                    number: 460
                },
                11: {
                    id: "461",
                    number: 461
                }
            }
        },
        {
            year: 2019,
            entries: {
                0: {
                    id: "438",
                    number: 438
                },
                1: {
                    id: "439",
                    number: 439
                },
                2: {
                    id: "440",
                    number: 440
                },
                3: {
                    id: "441",
                    number: 441
                },
                4: {
                    id: "442",
                    number: 442
                },
                5: {
                    id: "443",
                    number: 443
                },
                6: {
                    id: "444",
                    number: 444
                },
                7: {
                    id: "445",
                    number: 445
                },
                8: {
                    id: "446",
                    number: 446
                },
                9: {
                    id: "447",
                    number: 447
                },
                10: {
                    id: "448",
                    number: 448
                },
                11: {
                    id: "449",
                    number: 449
                }
            }
        },
        {
            year: 2018,
            entries: {
                0: {
                    id: "426",
                    number: 426
                },
                1: {
                    id: "427",
                    number: 427
                },
                2: {
                    id: "428",
                    number: 428
                },
                3: {
                    id: "429",
                    number: 429
                },
                4: {
                    id: "430",
                    number: 430
                },
                5: {
                    id: "431",
                    number: 431
                },
                6: {
                    id: "432",
                    number: 432
                },
                7: {
                    id: "433",
                    number: 433
                },
                8: {
                    id: "434",
                    number: 434
                },
                9: {
                    id: "435",
                    number: 435
                },
                10: {
                    id: "436",
                    number: 436
                },
                11: {
                    id: "437",
                    number: 437
                }
            }
        },
        {
            year: 2017,
            entries: {
                0: {
                    id: "414",
                    number: 414
                },
                1: {
                    id: "415",
                    number: 415
                },
                2: {
                    id: "416",
                    number: 416
                },
                3: {
                    id: "417",
                    number: 417
                },
                4: {
                    id: "418",
                    number: 418
                },
                5: {
                    id: "419",
                    number: 419
                },
                6: {
                    id: "420",
                    number: 420
                },
                7: {
                    id: "421",
                    number: 421
                },
                8: {
                    id: "422",
                    number: 422
                },
                9: {
                    id: "423",
                    number: 423
                },
                10: {
                    id: "424",
                    number: 424
                },
                11: {
                    id: "425",
                    number: 425
                }
            }
        },
        {
            year: 2016,
            entries: {
                0: {
                    id: "402",
                    number: 402
                },
                1: {
                    id: "403",
                    number: 403
                },
                2: {
                    id: "404",
                    number: 404
                },
                3: {
                    id: "405",
                    number: 405
                },
                4: {
                    id: "406",
                    number: 406
                },
                5: {
                    id: "407",
                    number: 407
                },
                6: {
                    id: "408",
                    number: 408
                },
                7: {
                    id: "409",
                    number: 409
                },
                8: {
                    id: "410",
                    number: 410
                },
                9: {
                    id: "411",
                    number: 411
                },
                10: {
                    id: "412",
                    number: 412
                },
                11: {
                    id: "413",
                    number: 413
                }
            }
        },
        {
            year: 2015,
            entries: {
                0: {
                    id: "390",
                    number: 390
                },
                1: {
                    id: "391",
                    number: 391
                },
                2: {
                    id: "392",
                    number: 392
                },
                3: {
                    id: "393",
                    number: 393
                },
                4: {
                    id: "394",
                    number: 394
                },
                5: {
                    id: "395",
                    number: 395
                },
                6: {
                    id: "396",
                    number: 396
                },
                7: {
                    id: "397",
                    number: 397
                },
                8: {
                    id: "398",
                    number: 398
                },
                9: {
                    id: "399",
                    number: 399
                },
                10: {
                    id: "400",
                    number: 400
                },
                11: {
                    id: "401",
                    number: 401
                }
            }
        },
        {
            year: 2014,
            entries: {
                0: {
                    id: "378",
                    number: 378
                },
                1: {
                    id: "379",
                    number: 379
                },
                2: {
                    id: "380",
                    number: 380
                },
                3: {
                    id: "381",
                    number: 381
                },
                4: {
                    id: "382",
                    number: 382
                },
                5: {
                    id: "383",
                    number: 383
                },
                6: {
                    id: "384",
                    number: 384
                },
                7: {
                    id: "385",
                    number: 385
                },
                8: {
                    id: "386",
                    number: 386
                },
                9: {
                    id: "387",
                    number: 387
                },
                10: {
                    id: "388",
                    number: 388
                },
                11: {
                    id: "389",
                    number: 389
                }
            }
        },
        {
            year: 2013,
            entries: {
                0: {
                    id: "366",
                    number: 366
                },
                1: {
                    id: "367",
                    number: 367
                },
                2: {
                    id: "368",
                    number: 368
                },
                3: {
                    id: "369",
                    number: 369
                },
                4: {
                    id: "370",
                    number: 370
                },
                5: {
                    id: "371",
                    number: 371
                },
                6: {
                    id: "372",
                    number: 372
                },
                7: {
                    id: "373",
                    number: 373
                },
                8: {
                    id: "374",
                    number: 374
                },
                9: {
                    id: "375",
                    number: 375
                },
                10: {
                    id: "376",
                    number: 376
                },
                11: {
                    id: "377",
                    number: 377
                }
            }
        }
    ];
};
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];
async function ArchivePage() {
    const archiveData = await getArchiveData();
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"])();
    const isAdmin = session?.role === "admin";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                fontFamily: "Arial, sans-serif",
                padding: "0",
                margin: "50px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                cellPadding: "0",
                cellSpacing: "0",
                style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #ccc"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        padding: "38px",
                                        backgroundColor: "#e6e6e6",
                                        border: "1px solid #ccc",
                                        fontWeight: "normal",
                                        textAlign: "center"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/archive/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                months.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "8px",
                                            backgroundColor: "#e6e6e6",
                                            border: "1px solid #ccc",
                                            fontWeight: "normal",
                                            textAlign: "center",
                                            minWidth: "100px"
                                        },
                                        children: month
                                    }, month, false, {
                                        fileName: "[project]/app/archive/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/archive/page.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/archive/page.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: archiveData.map((yearData)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "12px",
                                            backgroundColor: "#e6e6e6",
                                            border: "1px solid #ccc",
                                            textAlign: "left"
                                        },
                                        children: [
                                            yearData.year,
                                            " год"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/archive/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this),
                                    months.map((_, monthIndex)=>{
                                        const entry = yearData.entries[monthIndex];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: "8px",
                                                border: "1px solid #ccc",
                                                textAlign: "center",
                                                backgroundColor: "#f9f9f9"
                                            },
                                            children: entry ? entry.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#666",
                                                    fontSize: "14px"
                                                },
                                                children: entry.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/archive/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 27
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/archive/${entry.id}`,
                                                style: {
                                                    color: "#0066cc",
                                                    textDecoration: "none",
                                                    fontSize: "14px"
                                                },
                                                children: [
                                                    "№",
                                                    entry.number
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/archive/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 27
                                            }, this) : isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/admin/archive/new?year=${yearData.year}&month=${monthIndex}`,
                                                style: {
                                                    color: "#999",
                                                    textDecoration: "none",
                                                    fontSize: "14px"
                                                },
                                                children: "+ Добавить"
                                            }, void 0, false, {
                                                fileName: "[project]/app/archive/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 25
                                            }, this) : null
                                        }, monthIndex, false, {
                                            fileName: "[project]/app/archive/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 21
                                        }, this);
                                    })
                                ]
                            }, yearData.year, true, {
                                fileName: "[project]/app/archive/page.tsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/archive/page.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/archive/page.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/archive/page.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/archive/page.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/archive/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/archive/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "00a570fbc2494224abd087ba97aabaa233f98dbc9c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "00b4f485c98d225b2c3964da2b88d49084ea0c79aa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"]),
    "4054c27038d3fd33a11b8eab3d8aa88485535ac682": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"]),
    "4073942f3fd188c99a2c206c7a7c73054ebbeabac6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "00a570fbc2494224abd087ba97aabaa233f98dbc9c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["00a570fbc2494224abd087ba97aabaa233f98dbc9c"]),
    "00b4f485c98d225b2c3964da2b88d49084ea0c79aa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["00b4f485c98d225b2c3964da2b88d49084ea0c79aa"]),
    "4054c27038d3fd33a11b8eab3d8aa88485535ac682": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["4054c27038d3fd33a11b8eab3d8aa88485535ac682"]),
    "4073942f3fd188c99a2c206c7a7c73054ebbeabac6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["4073942f3fd188c99a2c206c7a7c73054ebbeabac6"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$archive$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/archive/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_7beb0f._.js.map