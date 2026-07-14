import { useState } from "react";
import type { Student } from "../types/interface/student.interface";

interface Props {
  initialData?: Student;
  onSubmit: (data: Student) => void;
}

const StudentForm = ({ initialData, onSubmit }: Props) => {
  const [student, setStudent] = useState<Student>(
    initialData || {
      name: "",
      email: "",
      phone: "",
      address: "",
      course: "",
      age: "",
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-5 border"
    >
      <h2 className="text-xl font-semibold text-gray-700">
        Student Information
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={student.name}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={student.email}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-lg"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={student.phone || ""}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-lg"
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={student.address || ""}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-lg"
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-lg"
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-3 rounded-lg"
      />

      <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
