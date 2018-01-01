export interface Activity {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
  country: string;
  description: string;
  type: string;
  category: string;
}
