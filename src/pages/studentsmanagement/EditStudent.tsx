import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../../components/StudentForm";
import {
  tablesDB,
  DATABASE_ID,
  TABLE_ID,
} from "../../services/appwrite";
import type { Student } from "../../types/interface/student.interface";
import toast from "react-hot-toast";
import { studentSchema } from "../../services/valition/student.validation";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await tablesDB.getRow(
          DATABASE_ID,
          TABLE_ID,
          id!
        );

        setStudent(response as unknown as Student);
      } catch (error) {
        toast.error("Failed to Fetch Student");
      }
    };

    fetchStudent();
  }, [id]);

  const updateStudent = async (data: Student) => {
  try {
    await studentSchema.validate(data, { abortEarly: false });

    await tablesDB.updateRow(
      DATABASE_ID,
      TABLE_ID,
      id!,
      data
    );

    toast.success("Student Updated Successfully");
    navigate("/students");

  } catch (error: any) {
    if (error.inner) {
      error.inner.forEach((err: any) => {
        toast.error(err.message);
      });
    } else {
      toast.error(error.message);
    }
  }
};

  if (!student) return <h1 className="p-6">Loading...</h1>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Student</h1>

      <StudentForm
        initialData={student}
        onSubmit={updateStudent}
      />
    </div>
  );
};

export default EditStudent;
