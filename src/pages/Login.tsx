/* eslint-disable react/jsx-props-no-spreading */
import { Button } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import verifyToken from '../utils/verifyToken';

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { id: 'A-0001', password: 'admin123' },
  });

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user, token: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
