import { createStore } from 'redux';
import reducers from './reducers'

//sera nessa constante que irão ficar os estados do app
const store = createStore(reducers);

export default store;