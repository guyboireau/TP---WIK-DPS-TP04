export class SigninUserDto {
  username: string;
  email: string;
  password: string;
  role: 'Employee' | 'Admin' | 'ProjectManager';
}
