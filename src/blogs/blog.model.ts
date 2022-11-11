export interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  postedBy: string;
  status: BlogStatus;
}

export enum BlogStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
