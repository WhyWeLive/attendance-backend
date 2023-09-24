import { useNavigate, useParams } from 'react-router-dom';

export const PasswordModule = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();

  return (
    <div className={'flex flex-col gap-6 text-center p-4'}>
      <div className={'flex flex-col'}>
        <div className={'font-bold'}>Успеваемость</div>
        <div>Введите пароль</div>
      </div>
      <input
        type={'password'}
        className={'p-2 border-2 border-gray-500 rounded-lg'}
        onChange={(event) => {
          if (event.target.value === '1234') {
            navigate(`/journal/${groupId}`);
          }
        }}
      />
    </div>
  );
};
