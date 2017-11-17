import { Axis } from './Axis';

export interface TaskValue {
  axis: Axis;
  value: Number;
}
export interface Task {
  _id?: string;
  name: string;
  description: string;
  status: string;
  values: TaskValue[];
}
