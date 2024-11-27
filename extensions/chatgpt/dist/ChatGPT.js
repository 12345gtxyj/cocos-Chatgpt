"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
// @ts-ignore
const package_json_1 = __importDefault(require("../package.json"));
// 面板主进程注册
exports.methods = {
    openPanel() {
        Editor.Panel.open(package_json_1.default.name + '.default'); // 打开面板
    },
};
// 扩展启动时触发的方法
function load() {
    console.log("Extension loaded.");
}
exports.load = load;
// 扩展卸载时触发的方法
function unload() {
    console.log("Extension unloaded.");
}
exports.unload = unload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdEdQVC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9DaGF0R1BULnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGFBQWE7QUFDYixtRUFBMEM7QUFJMUMsVUFBVTtBQUNHLFFBQUEsT0FBTyxHQUErQztJQUMvRCxTQUFTO1FBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVcsQ0FBQyxJQUFJLEdBQUMsVUFBVSxDQUFDLENBQUMsQ0FBRSxPQUFPO0lBQzVELENBQUM7Q0FDSixDQUFDO0FBRUYsYUFBYTtBQUNiLFNBQWdCLElBQUk7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFGRCxvQkFFQztBQUVELGFBQWE7QUFDYixTQUFnQixNQUFNO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRkQsd0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXHJcbmltcG9ydCBwYWNrYWdlSlNPTiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuXHJcbi8vIOmdouadv+S4u+i/m+eoi+azqOWGjFxyXG5leHBvcnQgY29uc3QgbWV0aG9kczogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9ID0ge1xyXG4gICAgb3BlblBhbmVsKCkge1xyXG4gICAgICAgIEVkaXRvci5QYW5lbC5vcGVuKHBhY2thZ2VKU09OLm5hbWUrJy5kZWZhdWx0Jyk7ICAvLyDmiZPlvIDpnaLmnb9cclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyDmianlsZXlkK/liqjml7bop6blj5HnmoTmlrnms5VcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkV4dGVuc2lvbiBsb2FkZWQuXCIpO1xyXG59XHJcblxyXG4vLyDmianlsZXljbjovb3ml7bop6blj5HnmoTmlrnms5VcclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXh0ZW5zaW9uIHVubG9hZGVkLlwiKTtcclxufVxyXG4iXX0=