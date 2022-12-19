import { useDispatch } from 'react-redux';
import Paths from './Routes';
import { userAccSuccess } from '../actions/userAction';

const App = () => {
  const dispatch = useDispatch();
  const userFromStorage = localStorage.getItem('user');
  const currentUser = userFromStorage
    ? JSON.parse(userFromStorage)
    : { username: 'Guest' };

  dispatch(userAccSuccess(currentUser));
  return (
    <div className="App">
      <Paths />
    </div>
  );
};

export default App;
