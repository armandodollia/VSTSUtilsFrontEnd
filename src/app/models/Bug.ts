import {WorkItem} from './WorkItem';

export class Bug extends WorkItem {
  boardColumn: string;
  boardColumnDone: boolean;
  priority: number;
  valueArea: string;
  backlogPriority: number;
  stateChangeDate: Date;
  severity: string;
}
