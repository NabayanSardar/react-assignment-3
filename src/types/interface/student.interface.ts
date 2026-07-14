export interface Student {
  $id?: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  course: string;
  age: number | "";
}