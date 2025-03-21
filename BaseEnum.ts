interface EnumOption<T extends BaseEnum> {
  label: string
  value: any
  data: T
}

type EnumValue = string | number

// 过滤掉构造函数和枚举的基础私有属性
const ignoreProperties = [ '_name', '_value', '_displayName', '_help', 'length', 'prototype', 'name' ]

export class BaseEnum<T extends BaseEnum> {
  private readonly _name: string;
  private readonly _value: EnumValue;
  private readonly _displayName: string;
  private readonly _help: string;

  constructor(name: string, value: EnumValue, displayName: string, help?: string) {
    this._name = name
    this._value = value
    this._displayName = displayName
    this._help = help
  }

  public static create(name: string, value: EnumValue, displayName: string, help?: string): T {
    return new this(name, value, displayName, help) as T
  }

  public name(): string {
    return this._name
  }

  public value(): EnumValue {
    return this._value
  }

  public displayName(): string {
    return this._displayName
  }

  public help(): string {
    return this._help
  }

  public static getEnumByValue(value: EnumValue): T | null {
    if (!value) {
      return null
    }
    const enumList = this.getEnumList()
    return enumList.find(item => item.value() === value)
  }

  public static getEnumByName(name: string): T | null {
    if (!name) {
      return null
    }
    const enumList = this.getEnumList()
    return enumList.find(item => item.name() === name)
  }

  public static getEnumByDisplayName(displayName: string): T | null {
    if (!displayName) {
      return null
    }
    const enumList = this.getEnumList()
    return enumList.find(item => item.displayName() === displayName)
  }

  public static getEnumList(): T[] {
    // 获取所有静态属性的键名
    const keys = Object.getOwnPropertyNames(this);
    // console.log('getOwnPropertyNames', keys)
    // 过滤掉构造函数
    return keys.filter(key => !ignoreProperties.includes(key))
      .map(key => this[key] as T); // 获取属性值
  }

  public static getEnumOptions(): EnumOption<T>[] {
    const enumList = this.getEnumList()
    return enumList.map(item => ({ label: item.displayName(), value: item.value(), data: item } as EnumOption<T>))
  }

  public static isHasName(name: string): boolean {
    if (!name) {
      return false;
    }
    return null != this.getEnumByName(name);
  }

  public static isHasValue(value: EnumValue): boolean {
    if (!value) {
      return false;
    }
    return null != this.getEnumByValue(value);
  }
}
