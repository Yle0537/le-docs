import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';

export default function createGitalk(path) {
    const gitalk = new Gitalk({
        clientID: 'Ov23liV74Y4Tt7TxsFAy',
        clientSecret: '6a6a935e7f574b7e271355e72b6344571cd79c9a',
        repo: 'le-docs',
        owner: 'Yle0537',
        admin: ['Yle0537'],
        id: path, // 确保唯一性和长度小于 50
        distractionFreeMode: false // 类似 facebook 的无干扰模式
    });
    gitalk.render('gitalk-container');
}