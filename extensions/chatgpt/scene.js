const { join } = require('path');
// 加载 ‘cc’ 需要设置搜索路径
module.paths.push(join(Editor.App.path, 'node_modules'));

// 模块加载的时候触发的函数
exports.load = function() {};

// 模块卸载的时候触发的函数
exports.unload = function() {};

// 模块内定义的方法
exports.methods = {
    log() {
        const { director } = require('cc');
        director.getScene();
        return {};
    },

    // 在场景中随机位置创建一个 Cube
    createRandomCube() {
        const { Node, Vec3, Prefab, instantiate, director } = require('cc');

        // 获取当前场景
        const scene = director.getScene();

        // 创建一个新的空节点作为 Cube 的父节点
        const parentNode = new Node('CubeParent');
        scene.addChild(parentNode);

        // 创建 Cube 的节点
        const cubeNode = new Node('Cube');
        const cube = cubeNode.addComponent(cc.MeshRenderer);
        cube.mesh = cc.Mesh.createBox(); // 你也可以使用其他的几何体

        // 设置 Cube 的随机位置
        const randomX = Math.floor(Math.random() * 10) - 5; // 随机位置范围在 -5 到 5 之间
        const randomY = Math.floor(Math.random() * 10) - 5;
        const randomZ = Math.floor(Math.random() * 10) - 5;
        
        cubeNode.setPosition(new Vec3(randomX, randomY, randomZ));
        
        // 将 Cube 节点添加到父节点
        parentNode.addChild(cubeNode);

        // 返回节点信息
        return { position: new Vec3(randomX, randomY, randomZ) };
    }
};
