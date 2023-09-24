import { useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import { api } from '../app/client/query.client';
import { RelationType, ScheduleWithMetaEntity } from './userEntity';
import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';

export const JournalModule = () => {
  const { groupId } = useParams();
  const [date] = useState(() => DateTime.now().startOf('day').toUnixInteger());

  const [students, schedule] = useQueries({
    queries: [
      {
        queryKey: ['students', groupId],
        queryFn: () =>
          api
            .get<RelationType>(`groups/${groupId}/relations`)
            .then((results) => results.data),
      },
      {
        queryKey: ['schedule', groupId, date],
        queryFn: () =>
          api
            .get<ScheduleWithMetaEntity>(
              `schedule/?start=${date}&end=${date}&groupId=${groupId}`,
            )
            .then((results) => results.data),
      },
    ],
  });

  const isLoading = useMemo(
    () => [students, schedule].some((item) => item.isLoading),
    [students, schedule],
  );

  const subject = useMemo(() => schedule?.data?.items[0], [schedule]);

  return (
    <div className={'flex flex-col gap-6 text-center p-4'}>
      <div className={'flex flex-col'}>
        <div className={'font-bold'}>Успеваемость</div>
        <div>Журнал</div>
        {subject?.plan?.subject?.title ?? 'none'}
      </div>
      {isLoading ? (
        <div>Data loading...</div>
      ) : (
        <div className={'flex flex-col gap-2 divide-y-2 divide-slate-300'}>
          {(students.data?.students ?? []).map((item, index) => (
            <div
              key={index}
              className={'flex flex-row justify-between items-center pt-2'}
            >
              <div className={'flex flex-col text-sm text-left'}>
                <span>
                  {index + 1}. {item.pretty}
                </span>
                <span className={'text-gray-500'}>Статус: none</span>
              </div>
              <div className={'flex flex-row'}>
                <button
                  className={
                    'h-10 aspect-square rounded-tl-lg rounded-bl-lg font-bold bg-green-500'
                  }
                >
                  +
                </button>
                <button
                  className={'h-10 aspect-square font-bold bg-yellow-500'}
                >
                  *
                </button>
                <button
                  className={
                    'h-10 aspect-square rounded-tr-lg rounded-br-lg font-bold bg-red-500'
                  }
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
