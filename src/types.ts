export interface Student {
  id: number;
  name: string;
  birth_date: string;
  enrollment_no: string;
  grade: string;
  gender?: string;
  father_name: string;
  mother_name: string;
  address: string;
  phone_no: string;
  guardian_name: string;
  guardian_address?: string;
  guardian_phone?: string;
  notes: string;
  created_at: string;
  user_id?: string;
}

export type NewStudent = Omit<Student, 'id' | 'created_at'>;
