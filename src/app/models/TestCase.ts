import {WorkItem} from './WorkItem';

export class TestCase extends WorkItem {
  stateChangeDate: Date;
  priority: number;
  activatedBy: string;
  activatedDate: string;
  automationStatus: string;
}
