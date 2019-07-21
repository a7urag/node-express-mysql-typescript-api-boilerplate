import { Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { User } from '../user/user.entity';

export class UserRelatedEntity {
  @Column()
  userId: number;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
