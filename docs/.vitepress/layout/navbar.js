export const navbar = [
    {text: '首页', link: '/'},

    {
        text: "✨算法竞赛",
        // link: "/md/算法竞赛/index",
        items: [
            {
                text: "竞赛介绍",
                link: "md/算法竞赛/index"
            },
            {
                text: "数据结构",
                link: "md/算法竞赛/数据结构/index",
            },
            {
                text: "算法",
                link: "md/算法竞赛/算法/index",
            },
            {
                text: "题单",
                items: [
                    {text: "力扣", link: "/md/算法竞赛/题单/leetCode/index"},
                    {text: "洛谷", link: "/md/算法竞赛/题单/luoGu/index"},
                    {text: "其它", link: "/md/算法竞赛/题单/other/index"},
                ]
            }
        ],
    },

    {
        text: "友情链接",
        items: [
            {text: "洛谷", link: 'https://www.luogu.com.cn/'},
            {text: "百度", link: 'https://www.baidu.com/'},
            {text: "关于我", link: '/about/aboutMe'},
        ]
    },
]