
interface IItems {
    text: string,
    link: string,
    collapsible?: boolean,
    items?: IItems[]
}
interface ISidebarProps {
    [k: string]: IItems[]
}
export default {
    '/environment/': <IItems[]>[
        {
            text: 'Git',
            items: [
                { text: 'Git 常用命令',link:'/environment/Git/common' },
                { text: 'Git commit 规范约定',link:'/environment/Git/commit-standard' },
                { text: 'Git ignore',link:'/environment/Git/ignore' },
                { text: 'Github Actions自动化部署',link:'/environment/Git/github-actions' }
            ]
        },
        {
            text: 'Node 环境',
            items: [
                { text: 'NVM 版本管理',link:'/environment/Node/nvm' },
                { text: 'nrm' },
                { text: 'npm' }
            ]
        }
    ]
} as ISidebarProps