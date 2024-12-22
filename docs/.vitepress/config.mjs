import {defineConfig} from 'vitepress'

const base = "/"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base,
    title: "樂码",
    description: "樂码的官方文档库",
    head: [
        ['link', {rel: 'icon', href: './favicon.ico'}],
        ['link', { rel: 'stylesheet', href: './static/css/style.css' }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: './favicon.ico',
        nav: [
            {text: '首页', link: '/'},
            {text: '示例', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Yle0537/le-docs'}
        ]
    }
})
