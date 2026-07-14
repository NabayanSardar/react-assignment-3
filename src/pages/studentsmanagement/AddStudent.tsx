import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/StudentForm";
import {
  tablesDB,
  DATABASE_ID,
  TABLE_ID,
  ID,
} from "../../services/appwrite";
import type { Student } from "../../types/interface/student.interface";
import toast from "react-hot-toast";
import { studentSchema } from "../../services/valition/student.validation";

const AddStudent = () => {
  const navigate = useNavigate();

  const addStudent = async (student: Student) => {
  try {
    await studentSchema.validate(student, { abortEarly: false });

    await tablesDB.createRow(
      DATABASE_ID,
      TABLE_ID,
      ID.unique(),
      student
    );

    toast.success("Student Added Successfully");
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

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Student</h1>
      <StudentForm onSubmit={addStudent} />
    </div>
  );
};

export default AddStudent;