/**
 * 创建3d地形相关方法
 */

import {
    Scene,
    Engine,
    FreeCamera,
    ArcRotateCamera,
    HemisphericLight,
    MeshBuilder,
    SceneLoader,
    Vector3,
    Color4
} from "@babylonjs/core"
import { GLTFFileLoader } from 'babylonjs-loaders';

import { baseGroudModel } from "@/enum/3dModel"

SceneLoader.RegisterPlugin(new GLTFFileLoader()) //register the file loader

export const buildingBaseTerrain = (scene: Scene, groundArr: baseGroudModel[][]) => {
    let modelName = ""
    for (let i = 0; i < groundArr.length; i++) {
        const groudLine = groundArr[i]
        for (let j = 0; j < groudLine.length; j++) {
            if (groudLine[j]==baseGroudModel.HIGH_BASE){
                modelName = "highTerrainBlock.glb"
            }else if (groudLine[j]==baseGroudModel.BASE){
                modelName = "baseTerrainBlock.glb"
            }else if (groudLine[j]==baseGroudModel.LOWER_BASE){
                modelName = "lowerTerrainBlock.glb"
            }else{
                continue;
            }
            SceneLoader.ImportMesh(["柱体"], "../model/", modelName, scene, function (newMeshes) {
                newMeshes[1].enableEdgesRendering();
                newMeshes[1].edgesWidth = 4.0;
                newMeshes[1].edgesColor = new Color4(0.83, 0.83, 0.85, 1);
                if (i%2 ==0){
                    newMeshes[1].position.x = Math.sqrt(3)*j
                    newMeshes[1].position.z = 1.5*i
                }else{
                    newMeshes[1].position.x = Math.sqrt(3)*j-Math.sqrt(3)/2
                    newMeshes[1].position.z = 1.5*i
                }
            });
            // const resultPromise = SceneLoader.ImportMeshAsync("", "../model/", "test.glb", scene);
            // resultPromise.then((result) => {
            //     console.log(result.meshes);
            // })
        }
    }
}
