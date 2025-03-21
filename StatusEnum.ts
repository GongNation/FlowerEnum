import { BaseEnum } from './BaseEnum'

export class StatusEnum extends BaseEnum<StatusEnum> {
  public static ENABLED = StatusEnum.create<StatusEnum>('ENABLE', 1, '启用', '启用状态')
  public static DISABLED = StatusEnum.create<StatusEnum>('DISABLED', 2, '禁用', '禁用状态')
}
