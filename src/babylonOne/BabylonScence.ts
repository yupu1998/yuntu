import {
    Scene,
    Engine,
    FreeCamera,
    ArcRotateCamera,
    HemisphericLight,
    MeshBuilder,
    Vector3
} from "@babylonjs/core"
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
        const Camera = new ArcRotateCamera("camera", 0,0.8,10, new Vector3(0, 1, 0), this.scene);
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        light.intensity = 0.8;
        //3D Object
        const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, this.scene);


        return scene;
    }
}