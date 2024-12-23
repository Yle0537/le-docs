import DefaultTheme from 'vitepress/theme';
import Confetti from './components/Confetti.vue';
import busuanzi from "busuanzi.pure.js";
import {inBrowser} from "vitepress";
import DataPanel from "./components/DataPanel.vue";
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({app, router}) {
        app.component('Confetti', Confetti); // 注册全局组件
        app.component("DataPanel", DataPanel);//注册全局组件

        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch();
            };
        }
    },
};