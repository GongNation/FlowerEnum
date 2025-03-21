import { StatusEnum } from './StatusEnum'

console.log('getEnumList', StatusEnum.getEnumList())
console.log('getEnumOptions', StatusEnum.getEnumOptions())
console.log('getEnumByName', StatusEnum.getEnumByName(StatusEnum.DISABLED.name()))
console.log('getEnumByValue', StatusEnum.getEnumByValue(StatusEnum.DISABLED.value()))
console.log('getEnumByDisplayName', StatusEnum.getEnumByDisplayName(StatusEnum.DISABLED.displayName()))
console.log('isHasName', StatusEnum.isHasName(StatusEnum.DISABLED.name()))
console.log('isHasValue', StatusEnum.isHasValue(StatusEnum.DISABLED.value()))
