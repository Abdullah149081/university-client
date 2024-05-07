import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <ProtectedRoute role={undefined}>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
