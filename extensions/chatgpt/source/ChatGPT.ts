// @ts-ignore
import packageJSON from '../package.json';
import { readFileSync } from 'fs';
import { join } from 'path';

// 面板主进程注册
export const methods: { [key: string]: (...args: any[]) => any } = {
    openPanel() {
        Editor.Panel.open(packageJSON.name+'.default');  // 打开面板
    },
};

// 扩展启动时触发的方法
export function load() {
    console.log("Extension loaded.");
}

// 扩展卸载时触发的方法
export function unload() {
    console.log("Extension unloaded.");
}
