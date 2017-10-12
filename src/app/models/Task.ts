import {WorkItem} from './WorkItem';

export class Tas extends WorkItem {
  priority: number;
  stateChangeDate: Date;
  remainingWork: number;
  estimatedWork: number;
  actualWork: number;
}
