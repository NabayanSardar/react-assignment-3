import { useState, useCallback, useMemo } from "react";
import InputField from "../components/InputField";
import Summary from "../components/Summary";
import type { FormData } from "../types/interface/form.interface";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  profession?: string;
  programming?: string;
  terms?: string;
}

const LargeFormOptimizer = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    profession: "",
    programming: [],
    terms: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [saved, setSaved] = useState(false);

  // handle change
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const target = e.target as HTMLInputElement;
      const { name, value, type } = target;

      if (type === "checkbox" && name === "programming") {
        setForm((prev) => ({
          ...prev,
          programming: target.checked
            ? [...prev.programming, value]
            : prev.programming.filter((item) => item !== value),
        }));
      } else if (type === "checkbox") {
        setForm((prev) => ({
          ...prev,
          [name]: target.checked,
        }));
      } else {
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    []
  );

  // validation function
  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.gender) newErrors.gender = "Select gender";
    if (!form.profession) newErrors.profession = "Select profession";
    if (form.programming.length === 0)
      newErrors.programming = "Select at least one skill";
    if (!form.terms) newErrors.terms = "You must accept terms";

    return newErrors;
  };

  // useMemo
  const summaryText = useMemo(() => {
    return `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Gender: ${form.gender}
Profession: ${form.profession}
Skills: ${form.programming.join(", ")}
Accepted Terms: ${form.terms ? "Yes" : "No"}
    `;
  }, [form]);

  // submit
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const validationErrors = validate();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setSaved(false);
        return;
      }

      localStorage.setItem("formData", JSON.stringify(form));
      setSaved(true);
    },
    [form]
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Form Fillup</h1>

        {/* Name */}
        <InputField name="name" label="Name" value={form.name} onChange={handleChange} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Email */}
        <InputField name="email" label="Email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Phone */}
        <InputField name="phone" label="Phone" value={form.phone} onChange={handleChange} />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        {/* Gender */}
        <div>
          <p className="font-medium">Gender</p>
          <div className="flex gap-4">
            <label className="flex gap-2">
              <input type="radio" name="gender" value="Male" onChange={handleChange} />
              <span>Male</span>
            </label>
            <label className="flex gap-2">
              <input type="radio" name="gender" value="Female" onChange={handleChange} />
              <span>Female</span>
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {/* Profession */}
        <div>
          <label className="font-medium">Profession</label>
          <select
            name="profession"
            value={form.profession}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
          </select>
          {errors.profession && (
            <p className="text-red-500 text-sm">{errors.profession}</p>
          )}
        </div>

        {/* Programming */}
        <div>
          <p className="font-medium">Programming Skills</p>
          <div className="flex gap-4">
            {["JavaScript", "Python", "Java"].map((lang) => (
              <label key={lang} className="flex gap-2">
                <input
                  type="checkbox"
                  name="programming"
                  value={lang}
                  onChange={handleChange}
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>
          {errors.programming && (
            <p className="text-red-500 text-sm">{errors.programming}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex gap-2">
            <input type="checkbox" name="terms" onChange={handleChange} />
            <span>Accept Terms</span>
          </label>
          {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
        </div>

        <Summary summaryText={summaryText} />

        {saved && (
          <p className="text-green-600 text-sm text-center">
            Form saved successfully!
          </p>
        )}

        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LargeFormOptimizer;
