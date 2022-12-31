//一些零散的常量方法

import { occupationName, campName } from "../enum/Chinese";
import { Camp } from "../enum/baseEnum"

/**
 * 返回友方阵营的中文名数组
 */
export function friendCamp(){
    const tmp = []
    for (let i = 0; i < 5; i++) {
      tmp.push(campName[Camp[i]])
    }
    return tmp
}