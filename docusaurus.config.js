const sidebars = require("./sidebars");
const metadata = require("./metadata");

module.exports = {
    title: "Rancher文档",
    tagline: "Run Kubernetes Everywhere",
    baseUrl: "/",
    url: "https://www.rancher.cn",
    favicon: "img/favicon.ico",
    themeConfig: {
        hideableSidebar: true,
        prism: {
            defaultLanguage: "bash",
        },
        baiduAnalytics: {
            trackingID: "692a488c8d0d137240f1a940bde32441",
        },
        navbar: {
            hideOnScroll: true,
            title: "Rancher",
            logo: {
                alt: "Rancher Logo",
                src: "img/rancher-logo-cow-white.svg",
            },
            items: [
                {
                    href: "https://docs.rancher.cn/",
                    label: "文档中心",
                    position: "left",
                },
                { to: "pdf", label: "获取 PDF 文档", position: "left" },
                {
                    href: "https://www.rancher.cn/weixin/",
                    label: "微信",
                    position: "left",
                },
                {
                    href: "https://www.rancher.cn/",
                    label: "中国官网",
                    position: "right",
                },
                {
                    href:
                        "https://rancher.com/support-maintenance-terms/all-supported-versions/",
                    label: "支持矩阵",
                    position: "right",
                },
                {
                    href: "https://www.rancher.cn/support/",
                    label: "技术支持",
                    position: "right",
                },
                {
                    href: "https://github.com/rancher/rancher",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        algolia: {
            apiKey: "f790c2168867f49bb212aee8c224116d",
            indexName: "rancher",
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Rancher Labs, Inc. All Rights Reserved. 粤ICP备16086305号`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/cnrancher/docs-rancher2/edit/master/",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    customFields: {
        sidebars,
        metadata,
        stable: "版本说明 - v2.5.6",
        baseCommit: "0f45bd147dd3ea4b9961e463ce31780bd17ba486 - Mar 24, 2021",
        k3sBaseCommit:
            "0f45bd147dd3ea4b9961e463ce31780bd17ba486 - Mar 24, 2021",
    },
    plugins: [
        "@docusaurus/plugin-baidu-analytics",
        [
            "@docusaurus/plugin-sitemap",
            {
                //cacheTime: 600 * 1000, // 600 sec - cache purge period
                //`cacheTime` in sitemap config is deprecated.
                changefreq: "weekly",
                priority: 0.5,
                trailingSlash: false,
            },
        ],
    ],
};
