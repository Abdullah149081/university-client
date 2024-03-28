import { z } from 'zod';

const studentValidateSchema = z.object({
  name: z.object({
    firstName: z.string({ required_error: 'First name is required.' }),

    middleName: z.string({ required_error: 'Middle name is required.' }),

    lastName: z.string({ required_error: 'Last name is required.' }),
  }),

  gender: z.string({ required_error: 'Gender is required.' }),
  email: z.string({ required_error: 'Email is required.' }).email(),
  bloodGroup: z.string({ required_error: 'Blood group is required.' }),
  contactNo: z.string({ required_error: 'Contact number is required.' }),
  emergencyContactNo: z.string({
    required_error: 'Emergency contact number is required.',
  }),
  presentAddress: z.string({ required_error: 'Present address is required.' }),
  permanentAddress: z.string({
    required_error: 'Permanent address is required.',
  }),
  guardian: z.object({
    fatherName: z.string({ required_error: 'Father name is Required' }),
    fatherOccupation: z.string({
      required_error: "Father's occupation is required.",
    }),
    fatherContactNo: z.string({
      required_error: "Father's contact number is required.",
    }),
    motherName: z.string({ required_error: "Mother's name is required." }),
    motherOccupation: z.string({
      required_error: "Mother's occupation is required.",
    }),
    motherContactNo: z.string({
      required_error: "Mother's contact number is required.",
    }),
  }),
  localGuardian: z.object({
    name: z.string({ required_error: 'Local guardian name is required.' }),
    occupation: z.string({
      required_error: "Local guardian's occupation is required.",
    }),
    contactNo: z.string({
      required_error: "Local guardian's contact number is required.",
    }),
    address: z.string({
      required_error: "Local guardian's address is required.",
    }),
  }),
  academicDepartment: z.string({
    required_error: 'Academic department is required.',
  }),
  admissionSemester: z.string({
    required_error: 'Admission semester is required.',
  }),
  dateOfBirth: z.any().refine((val) => val !== undefined, {
    message: 'Date of birth is required.',
  }),
  image: z.any().refine((val) => val !== undefined, {
    message: 'Image is required.',
  }),
});

export default studentValidateSchema;
