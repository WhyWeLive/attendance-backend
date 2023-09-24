import { NavLink } from 'react-router-dom';

export const HomeModule = () => {
  return (
    <div className={'flex flex-col gap-6 text-center p-4'}>
      <div className={'font-bold'}>Успеваемость</div>
      <div className={'flex flex-col gap-2'}>
        <NavLink to={'/password/2/'}>
          <div
            className={
              'p-2 text-bold font-semibold bg-slate-600 text-white rounded-lg'
            }
          >
            11ИС-273
          </div>
        </NavLink>
        <NavLink to={'/password/51/'}>
          <div
            className={
              'p-2 text-bold font-semibold bg-slate-600 text-white rounded-lg'
            }
          >
            9ИС-370
          </div>
        </NavLink>
      </div>
    </div>
  );
};
