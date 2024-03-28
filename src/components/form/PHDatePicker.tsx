import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TDatePickerProps = {
  name: string;
  label?: string;
};

const PHDatePicker = ({ name, label }: TDatePickerProps) => {
  const dateFormat = 'YYYY-MM-DD';

  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              style={{ width: '100%' }}
              format={dateFormat}
            />
            {error && <small style={{ color: 'red' }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
