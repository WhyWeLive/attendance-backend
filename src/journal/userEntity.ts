export type UserEntity = {
  id: number;
  pretty: string;
};

export type RelationType = {
  students: UserEntity[];
};

export type SubjectEntity = {
  id: number;
  title: string;
  short: string;
};

export type PlanEntity = {
  id: number;
  subject: SubjectEntity;
};

export type ScheduleEntity = {
  id: number;
  plan: PlanEntity;
  sort: number;
};

export type ScheduleWithMetaEntity = {
  items: ScheduleEntity[];
};
