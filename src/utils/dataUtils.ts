



/**
 * 生成随机整数,包括最大值和最小值
 * @param min 
 * @param max 
 * @param no:false|number = 不允许出现的数字，默认为false
 * @returns 
 */
export function randomInt(min:number,max:number,no:false|number = false){
   if (no == false){
      return Math.floor(Math.random() * (max - min + 1) + min)
   }else{
      let num:number
      do {num = Math.floor(Math.random() * (max - min + 1) + min)}
      while (num == no)
      return num
   }
}