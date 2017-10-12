import {Activity} from './Activity';
import {TeamMember} from './TeamMember';
import {DayOff} from './DayOff';

export class Capacity {
  url: string;
  teamMember: TeamMember;
  activities: Array<Activity>;
  daysOff: Array<DayOff>;
}
