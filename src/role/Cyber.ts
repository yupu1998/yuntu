import {Role} from './abstractRole'

import { roleAllAttribute } from "@/dto/storageDtos";


export class ZANGYIN extends Role {

    constructor(name:string,baseDate:roleAllAttribute){
        super(name,baseDate)
    }

}

export class KURO extends Role {

    constructor(name:string,baseDate:roleAllAttribute){
        super(name,baseDate)
    }

}