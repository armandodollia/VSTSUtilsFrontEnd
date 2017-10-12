export class WorkItem {
  id: number;
  workItemType: string;
  rev: number;
  url: string;
  assignedTo: string;
  areaPath: string;
  teamProject: string;
  iterationPath: string;
  state: string;
  reason: string;
  createdDate: Date;
  createdBy: string;
  changedDate: Date;
  changedBy: string;
  title: string;
  effort: number;
}
