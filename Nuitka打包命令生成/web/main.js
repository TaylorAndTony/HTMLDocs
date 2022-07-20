const App = {
    data() {
        return {
            cmd: 'nuitka',
            switches: [
                {
                    cmd: '--mingw64',
                    desc: '使用 mingw64 而不是 vs',
                    detail: '官方推荐选项',
                    enabled: true,
                },
                {
                    cmd: '--standalone',
                    desc: '无 python 环境可运行',
                    detail: '这是必须的(否则拷给别人无法使用)',
                    enabled: true,
                },
                {
                    cmd: '-windows-disable-console',
                    desc: '无CMD窗口',
                    detail: '调试时建议关闭此选项',
                    enabled: false,
                },
                {
                    cmd: '--show-progress',
                    desc: '显示编译进度',
                    enabled: true,
                },
                {
                    cmd: '--show-memory',
                    desc: '显示内存占用',
                    enabled: true,
                },
                {
                    cmd: '--onefile',
                    desc: '单 exe 文件',
                    detail: '像pyinstaller一样打包成单个exe文件',
                    enabled: false,
                },
                {
                    cmd: '--follow-imports',
                    desc: '编译：全部编译为 C',
                    detail: '(三选一)',
                    enabled: false,
                },
                {
                    cmd: '--nofollow-imports',
                    desc: '编译：仅导入',
                    detail: '(三选一) 所有的import不编译，交给python3x.dll执行',
                    enabled: true,
                },
                {
                    cmd: '--follow-stdlib',
                    desc: '编译：仅编译标准库为 C',
                    detail: '(三选一)',
                    enabled: false,
                },
                {
                    cmd: '--include-qt-plugins=sensible,styles',
                    desc: '保持 Qt 界面样式',
                    detail: '编译 Qt 程序时防止界面变成 win 2000 风格',
                    enabled: false,
                },
            ],
            values: [
                {
                    cmd: '--output-dir',
                    desc: '指定输出目录',
                    detail: '所有编译的文件将输出到此目录下',
                    args: 'out',
                    enabled: true,
                },
                {
                    cmd: '--enable-plugin',
                    desc: '引入插件',
                    detail: '逗号分隔，使用 --plugin-list 查看支持的插件',
                    args: 'tk-inter',
                    enabled: true,
                },
                {
                    cmd: '--windows-icon-from-ico',
                    desc: '自定图标',
                    detail: '自定义打包后的 exe 图标',
                    args: 'i.ico',
                    enabled: false,
                },
                {
                    cmd: '--include-package',
                    desc: '自定义包导入路径',
                    detail: '自定义导入 python package 的路径',
                    args: '',
                    enabled: false,
                },
                {
                    cmd: '--include-module',
                    desc: '自定义 py 导入路径',
                    detail: '自定义导入 .py 文件的路径',
                    args: '',
                    enabled: false,
                },
                {
                    cmd: '--follow-import-to',
                    desc: '仅选择指定模块/包编译 ',
                    detail: '(不能 import 第三方库)',
                    args: '',
                    enabled: false,
                },
                {
                    cmd: '--nofollow-import-to',
                    desc: '添加排除编译的目录 ',
                    args: 'need',
                    enabled: false,
                },
            ]
        }
    },
    mounted() {
        this.genCmd();
    },
    methods: {
        handleAnyOption(obj) {
            obj.enabled = !obj.enabled;
            this.genCmd();
        },
        genCmd() {
            console.log('Generating...')
            this.cmd = 'nuitka '
            for (let s of this.switches) {
                if (s.enabled) {
                    this.cmd += s.cmd + ' '
                }
            };
            for (let v of this.values) {
                if (v.enabled) {
                    this.cmd += `${v.cmd}=${v.args} `;
                }
            }
            this.cmd += '<file.py>'
        },
        copyCmd() {
            navigator.clipboard.writeText(this.cmd);
        }
    }
};

const app = Vue.createApp(App);
const vm = app.mount('#app');