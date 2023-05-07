



/**
 * 单人形伤害分布对象
 */
export interface damageDistDto{
    name:string, //角色名称
    typeName:string,//伤害名称
    value:number,//数值
    precentage:number,//占比
    count:number//计数
}

/**
 * 时间伤害数据对象
 */
export interface timeDamgeDto{
    time:number,
    role:string,
    value:number
}