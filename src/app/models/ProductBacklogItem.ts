import {WorkItem} from './WorkItem';

export class ProductBacklogItem extends WorkItem {
  boardColumn: string;
  boardColumnDone: Boolean;
  priority: number;
  valueArea: string;
  backlogPriority: number;
  remainingWork: number;
  release: string;
  budgetedEffort: number;
}
