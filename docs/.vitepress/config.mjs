import {defineConfig} from 'vitepress'
import markdownItPlantuml from "markdown-it-textual-uml";
import mdItCustomAttrs from "markdown-it-custom-attrs";

import {navbar} from "./layout/navbar.js";
import {sidebar} from "./layout/sidebar.js";

// const base = "/le-docs/"

const themeConfig = {
	logo: './favicon.ico',
	nav: navbar,
	sidebar: sidebar,
	lastUpdated: {
		text: "最后更新于",
		formatOptions: {
			dateStyle: "short",
			timeStyle: "medium",
		},
	},

	socialLinks: [
		{icon: 'github', link: 'https://github.com/Yle0537/le-docs'},
		{
			icon: {
				svg: '<svg t="1734866843236" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12803" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4 34.14-32.7 77.66-50.66 130.56-52.2h58.76l-50.7-51.62c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206C851.2 28.68 857 43.2 857 60.8c0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47S173.7 803 192.1 803h640.7c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6zM371 433c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="12804"></path></svg>'
			},
			link: 'https://space.bilibili.com/390449104?spm_id_from=333.1007.0.0'
		},
	],
	editLink: {
		pattern: "https://github.com/Yle0537/le-docs/edit/master/docs/src/:path",
		text: "编辑此页面",
	},
	outline: {
		level: "deep",
		label: "大纲",
	},
	docFooter: {
		prev: "上一篇",
		next: "下一篇",
	},
	returnToTopLabel: "回到顶部",
	sidebarMenuLabel: "菜单",
	search: {
		provider: 'local',
		options: {
			locales: {
				root: {
					placeholder: '搜索文档',
					translations: {
						button: {
							buttonText: '搜索文档',
							buttonAriaLabel: '搜索文档'
						},
						modal: {
							searchBox: {
								resetButtonTitle: '清除查询条件',
								resetButtonAriaLabel: '清除查询条件',
								cancelButtonText: '取消',
								cancelButtonAriaLabel: '取消'
							},
							startScreen: {
								recentSearchesTitle: '搜索历史',
								noRecentSearchesText: '没有搜索历史',
								saveRecentSearchButtonTitle: '保存至搜索历史',
								removeRecentSearchButtonTitle: '从搜索历史中移除',
								favoriteSearchesTitle: '收藏',
								removeFavoriteSearchButtonTitle: '从收藏中移除'
							},
							errorScreen: {
								titleText: '无法获取结果',
								helpText: '你可能需要检查你的网络连接'
							},
							footer: {
								selectText: '选择',
								navigateText: '切换',
								closeText: '关闭',
								searchByText: '搜索提供者'
							},
							noResultsScreen: {
								noResultsText: '无法找到相关结果',
								suggestedQueryText: '你可以尝试查询',
								reportMissingResultsText: '你认为该查询应该有结果？',
								reportMissingResultsLinkText: '点击反馈'
							},
						},
					},
				},
			},
		},
	},
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// base,
	title: "樂",
	description: "樂的文档库",
	head: [
		['link', {rel: 'icon', href: './favicon.ico'}],
		['link', {rel: 'stylesheet', href: './static/css/style.css'}],
		["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",},],
		["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",},],
	],
	// https://vitepress.dev/reference/default-theme-config
	themeConfig: themeConfig,
	cleanUrls: true,
	srcDir: './src',
	markdown: {
		math: true,
		lineNumbers: true,
		config: (md) => {
			md.use(markdownItPlantuml);
			md.use(mdItCustomAttrs, "image", {
				"data-fancybox": "gallery",
			});
		},
	},
})
