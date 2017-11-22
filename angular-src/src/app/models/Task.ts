import { Axis } from './Axis';

export interface TaskValue {
  axis: Axis;
  axisId: string;
  value: Number;
}
export interface Task {
  _id?: string;
  name: string;
  description: string;
  status: string;
  values: TaskValue[];
}
