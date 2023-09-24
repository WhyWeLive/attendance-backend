import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeModule } from '../../home/home.module';
import { PasswordModule } from '../../password/password.module';
import { JournalModule } from '../../journal/journal.module';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/'} element={<HomeModule />} />
        <Route
          index
          path={'/password/:groupId/'}
          element={<PasswordModule />}
        />
        <Route index path={'/journal/:groupId/'} element={<JournalModule />} />
      </Routes>
    </BrowserRouter>
  );
};
