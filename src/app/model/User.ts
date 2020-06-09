import {UserRole} from './User-Role';

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  phone: number;
  username: string;
  userRole: UserRole;
}
