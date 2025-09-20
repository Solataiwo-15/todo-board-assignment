// src/data/mockTodos.ts
import { Todo } from '../types';

export const mockTodos: Todo[] = [
  {
    id: '1',
    name: 'MKV Intranet V2',
    date: '04/06/2024 - 16/06/2024',
    assignees: [],
    priority: 'Medium',
    status: 'In Progress', 
  },
  {
    id: '2',
    name: 'Design System',
    date: '23/06/2024 - 24/06/2024',
    assignees: [],
    priority: 'Important',
    status: 'Todo', 
  },
  {
    id: '3',
    name: 'Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignees: [],
    priority: 'Urgent',
    status: 'Complete',
  },
  {
    id: '4',
    name: 'Another Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignees: [],
    priority: 'Urgent',
    status: 'Todo',
  },
];