export type Priority = 'Urgent' | 'Important' | 'Medium';
export type Status = 'Todo' | 'In Progress' | 'Complete';

export interface Assignee {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Todo {
  id: string;
  name: string;
  date: string;
  assignees: Assignee[]; 
  priority: Priority;
  status: Status;
  description: string;
}