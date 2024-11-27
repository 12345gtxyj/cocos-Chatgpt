// autoCreateCubes.ts
import { _decorator, Component, Node, MeshRenderer, Mesh, director } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('AutoCreateCubes')
export class AutoCreateCubes extends Component {

    // 在场景中创建两个立方体
    onLoad () {
        // 获取当前场景
        const scene = director.getScene();
        if (!scene) {
            console.error('No active scene found!');
            return;
        }

        // 创建两个立方体
        for (let i = 0; i < 2; i++) {
            const cubeNode = new Node(`Cube_${i}`);
            const meshRenderer = cubeNode.addComponent(MeshRenderer);
            meshRenderer.mesh = Mesh.createBox();  // 创建一个立方体网格

            // 设置立方体的位置
            cubeNode.setPosition(i * 3, 0, 0); // 立方体间隔3单位
            scene.addChild(cubeNode);
        }

        console.log('Two cubes have been created in the scene.');
    }
}
