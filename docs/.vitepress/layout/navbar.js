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
                link: "md/算法竞赛/数据结构/数据结构简介",
            },
            {
                text: "算法",
                link: "md/算法竞赛/算法/算法简介",
            },
            {
                text: "题单",
                link: "md/算法竞赛/题单/index"
            }
        ],
    },

    {
        text: "友情链接",
        items: [
            {text: "洛谷", link: 'https://www.luogu.com.cn/'},
            {text: "百度", link: 'https://www.baidu.com/'},
            {text: "关于我", link: 'md/aboutMe'},
        ]
    },
]