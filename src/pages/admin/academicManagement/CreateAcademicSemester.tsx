import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/phSelect';
import { monthOptions } from '../../../constants/global';
import { semesterOptions } from '../../../constants/semester';
import { usePostAcademicSemesterMutation } from '../../../redux/academicSemester/academicSemesterApi';
import { TResponse } from '../../../types';
import academicValidateSchema from '../../../validate/academicValidate';

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = usePostAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating academic semester...');

    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(semesterData)) as TResponse<any>; // Provide the missing type argument for TResponse
      console.log(res, res.error);

      if (res?.data?.success) {
        toast.success(res.data.message, {
          id: toastId,
        });
      }
      if (res?.error) {
        toast.error(res.error.data.message, {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error('Failed to create academic semester', { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicValidateSchema)}
        >
          <PHSelect label="Name" name="name" options={semesterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
