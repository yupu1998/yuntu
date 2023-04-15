import {
    Scene,
    Engine,
    FreeCamera,
    ArcRotateCamera,
    HemisphericLight,
    MeshBuilder,
    Vector3
} from "@babylonjs/core"

import {buildingBaseTerrain} from '../utils/terrainUtils'

import { SimpleTerrain } from "@/store/terrain";

export class BabylonScene {
    scene: Scene;
    engine: Engine;
    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        const Camera = new ArcRotateCamera("camera",Math.PI/2,0.8, 12, new Vector3(-5, 6, 3.5), this.scene);
        Camera.attachControl(this.canvas, true);
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        light.intensity = 0.8;
        
        //根据传入地形数据生成地形
        //地形分层 1，基础地形层 平地，高台，坑，洞
        //装饰层 创建一个平面 表面贴画
        //效果层 增加加成效果 附加一层贴画
        //地面地形层 在地格新增障碍建筑之类的地形
        buildingBaseTerrain(scene,SimpleTerrain)

        return scene;
    }
}