const App = {
    data() {
        return {
            cmd: 'nuitka',
            switches: [
                {
                    cmd: '--mingw64',
                    desc: '使用 mingw64 而不是 vs',
                    enabled: true,
                },
                {
                    cmd: '--standalone',
                    desc: '无 python 环境可运行',
                    enabled: true,
                },
                {
                    cmd: '-windows-disable-console',
                    desc: '无CMD窗口',
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
                    enabled: false,
                },
                {
                    cmd: '-follow-imports',
                    desc: '编译：全部编译为 C',
                    enabled: false,
                },
                {
                    cmd: '--follow-imports',
                    desc: '编译：仅导入',
                    enabled: true,
                },
                {
                    cmd: '--nofollow-imports',
                    desc: '编译：仅编译标准库为 C',
                    enabled: false,
                },
                {
                    cmd: '--include-qt-plugins=sensible,styles',
                    desc: '保持 Qt 界面样式',
                    enabled: false,
                },
            ],
            values: [
                {
                    desc: '指定输出目录',
                    cmd: '-output-dir',
                    args: 'out',
                    enabled: true,
                },
                {
                    desc: '引入插件 (逗号无空格分隔)',
                    cmd: '--plugin-enable',
                    args: 'tk-inter',
                    enabled: true,
                },
                {
                    desc: '自定图标',
                    cmd: '--windows-icon-from-ico',
                    args: 'i.ico',
                    enabled: false,
                },
                {
                    desc: '自定义包导入路径',
                    cmd: '--include-package',
                    args: '',
                    enabled: false,
                },
                {
                    desc: '自定义 py 导入路径',
                    cmd: '--include-module',
                    args: '',
                    enabled: false,
                },
                {
                    desc: '仅选择指定模块/包编译',
                    cmd: '--follow-import-to',
                    args: '',
                    enabled: false,
                },
                {
                    desc: '选择指定模块/包不进行编译',
                    cmd: '--nofollow-import-to',
                    args: '',
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