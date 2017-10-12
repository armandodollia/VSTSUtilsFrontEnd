import {WorkItem} from './WorkItem';

export class TestSuite extends WorkItem {
  testSuiteId: number;
  testSuiteType: string;
  testSuiteAudit: string;
}
