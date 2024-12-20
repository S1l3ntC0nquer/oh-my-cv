const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/dashboard",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/dashboard"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/dashboard"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp/dashboard"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw/dashboard"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn/dashboard"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/dashboard"
                    }
                ]
            },
            {
                "loc": "/en/dashboard",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/dashboard"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/dashboard"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp/dashboard"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw/dashboard"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn/dashboard"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/dashboard"
                    }
                ]
            },
            {
                "loc": "/sp/dashboard",
                "_sitemap": "sp",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/dashboard"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/dashboard"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp/dashboard"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw/dashboard"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn/dashboard"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/dashboard"
                    }
                ]
            },
            {
                "loc": "/zh-tw/dashboard",
                "_sitemap": "zh-tw",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/dashboard"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/dashboard"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp/dashboard"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw/dashboard"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn/dashboard"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/dashboard"
                    }
                ]
            },
            {
                "loc": "/zh-cn/dashboard",
                "_sitemap": "zh-cn",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/dashboard"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en/dashboard"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp/dashboard"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw/dashboard"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn/dashboard"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/dashboard"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/en",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/sp",
                "_sitemap": "sp",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/zh-tw",
                "_sitemap": "zh-tw",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/zh-cn",
                "_sitemap": "zh-cn",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "en",
                        "href": "/en"
                    },
                    {
                        "hreflang": "sp",
                        "href": "/sp"
                    },
                    {
                        "hreflang": "zh-tw",
                        "href": "/zh-tw"
                    },
                    {
                        "hreflang": "zh-cn",
                        "href": "/zh-cn"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "_sitemap": "en"
            },
            {
                "loc": "/en",
                "_sitemap": "en"
            },
            {
                "loc": "/sp",
                "_sitemap": "sp"
            },
            {
                "loc": "/zh-cn",
                "_sitemap": "zh-cn"
            },
            {
                "loc": "/zh-tw",
                "_sitemap": "zh-tw"
            },
            {
                "loc": "/dashboard",
                "_sitemap": "en"
            },
            {
                "loc": "/en/dashboard",
                "_sitemap": "en"
            },
            {
                "loc": "/sp/dashboard",
                "_sitemap": "sp"
            },
            {
                "loc": "/zh-tw/dashboard",
                "_sitemap": "zh-tw"
            },
            {
                "loc": "/zh-cn/dashboard",
                "_sitemap": "zh-cn"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
