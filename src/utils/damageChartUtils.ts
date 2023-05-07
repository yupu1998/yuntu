import { damageDistDto, timeDamgeDto } from "@/dto/chartDto"
import { damageRecord } from "@/role/abstractDamage"



/**
 * 获取友方人形的伤害占比
 * @param damageList 
 * @param name 
 * @returns 
 */
export const getAllRoleDamage = (damageList: damageRecord[], name: string[]) => {
    const damageDistObj: damageDistDto[] = []
    damageList.forEach(da => {
        if (name.includes(da.soure)) {//检查为友方人形
            //将伤害通过 人形归类
            const aimData = damageDistObj.find(val => {
                return val.name == da.soure
            })
            if (aimData == undefined) {//未加入人形则新增
                damageDistObj.push({
                    name: da.soure,
                    typeName: da.soure,
                    value: da.value,
                    precentage: 0,
                    count: 1
                })
            } else { //添加伤害数值，计数
                aimData.value = aimData.value + da.value
                aimData.count = aimData.count + 1
            }
        }
    })
    let damageCount = 0
    damageDistObj.forEach(val => { damageCount += val.value })//计算总伤害
    damageDistObj.forEach(val => { val.precentage = val.value / damageCount })//计算每个人形的伤害占比

    return damageDistObj
}

/**
 * 获取每一个人形的伤害分布情况
 * @param damageList 
 * @param name 
 * @returns 
 */
export const getRoleDamageDist = (damageList: damageRecord[], name: string[]) => {
    const damageDistObj: { [x: string]: damageDistDto[] } = {}
    name.forEach(n => { damageDistObj[n] = [] })
    damageList.forEach(da => {
        const aimData = damageDistObj[da.soure].find(val => {
            return val.typeName == da.name
        })
        if (aimData == undefined) {
            damageDistObj[da.soure].push({
                name: da.soure,
                typeName: da.name,
                value: da.value,
                precentage: 0,
                count: 1
            })
        } else {
            aimData.value = aimData.value + da.value
            aimData.count = aimData.count + 1
        }
    })
    name.forEach(na => {
        let damageCount = 0
        damageDistObj[na].forEach(val => {
            damageCount += val.value
        })
        console.log(na, damageCount)
        damageDistObj[na].forEach(val => {
            val.precentage = val.value / damageCount
        })
    })
    return damageDistObj
}

/**
 * 获取 友方人形时间和造成伤害的折线分布数据
 * @param damageList 
 */
export const getTimeDamage = (damageList: damageRecord[],name:string[]) => {
    const timeDamageList: timeDamgeDto[] = []
    damageList.forEach(da => {
        if (name.includes(da.soure)){
            const aimData = timeDamageList.find(val => {
                return val.role == da.soure && val.time == da.time
            })
            if (aimData == undefined) {
                timeDamageList.push({
                    role: da.soure,
                    time: da.time,
                    value: da.value
                })
                //如果前后不存在伤害，将伤害补充为0
                const headData = timeDamageList.find(val => { return val.role == da.soure && val.time == da.time - 1 })
                if (headData == undefined) {
                    timeDamageList.push({ role: da.soure, time: da.time - 1, value: 0 })
                }
                const afterData = timeDamageList.find(val => { return val.role == da.soure && val.time == da.time + 1 })
                if (afterData == undefined) {
                    timeDamageList.push({ role: da.soure, time: da.time + 1, value: 0 })
                }
            } else {
                aimData.value = aimData.value + da.value
                //如果前后不存在伤害，将伤害补充为0
                const headData = timeDamageList.find(val => { return val.role == da.soure && val.time == da.time - 1 })
                if (headData == undefined) {
                    timeDamageList.push({ role: da.soure, time: da.time - 1, value: 0 })
                }
                const afterData = timeDamageList.find(val => { return val.role == da.soure && val.time == da.time + 1 })
                if (afterData == undefined) {
                    timeDamageList.push({ role: da.soure, time: da.time + 1, value: 0 })
                }
            }
        }
    })
    timeDamageList.sort((a, b) => { return a.time - b.time })//升序
    timeDamageList.forEach(a => { a.time = a.time / 15 })//转换时间单位为s
    return timeDamageList
}

/**
 * 获取 友方人形伤害随时间的增长曲线
 * @param damageList 
 */
export const getTimeDamageSum = (damageList: damageRecord[],name:string[])=>{
    const resList = getTimeDamage(damageList,name)
    //累加数值
    name.forEach(n => {
        let start = 0
        resList.forEach(a => {
        if (a.role == n) {
            start = start + a.value
            a.value = start
        }
        })
    })
    return resList
}

