import ZANGYIN from "../image/RolePicture/ZANGYIN.png"

/**
 * 人形对应图片地址
 */
const ROleAttribute ={
    "default" : ZANGYIN,
    "ZANGYIN" : ZANGYIN,
}


export function getRoleImg(name:string){
    let address:string = ROleAttribute[name]
    if (address == null){
        address = ROleAttribute.default
    }
    return address
}