import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import TodoList from './components/TodoList'
import Counter from './components/counter'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <TodoList/>
          <Counter/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
