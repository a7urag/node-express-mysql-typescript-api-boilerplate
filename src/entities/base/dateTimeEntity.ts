import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class DateTimeEntity extends BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
