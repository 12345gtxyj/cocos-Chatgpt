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
        const { Node, Vec3, director, primitives, utils, MeshRenderer, Material } = require('cc');

        // 获取当前场景
        const scene = director.getScene();

        // 创建一个新的空节点作为 Cube 的父节点
        const cubeNode = new Node('Cube');

        // 添加 MeshRenderer 组件
        const meshRenderer = cubeNode.addComponent(MeshRenderer);

        // 使用 primitives 创建 Cube 的几何数据
        const cubeMeshData = primitives.box();

        // 创建一个 Mesh 并应用几何数据
        const cubeMesh = utils.MeshUtils.createMesh(cubeMeshData);
        meshRenderer.mesh = cubeMesh;

        // 为 MeshRenderer 设置默认材质
        const material = new Material();
        material.initialize({ effectName: 'builtin-standard' });
        meshRenderer.setMaterial(material, 0);

        // 设置 Cube 的随机位置
        const randomX = Math.random() * 10 - 5; // 随机位置范围在 -5 到 5 之间
        const randomY = Math.random() * 10 - 5;
        const randomZ = Math.random() * 10 - 5;

        // 设置位置
        cubeNode.setPosition(new Vec3(randomX, randomY, randomZ));

        // 将 Cube 节点添加到场景
        scene.addChild(cubeNode);

        // 返回节点信息
        return { position: new Vec3(randomX, randomY, randomZ) };
    }
};
