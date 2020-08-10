import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

// restricting extension in production using process.env.NODE_ENV which is set 'production'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(rootReducer, 
    (process.env.NODE_ENV == 'development' ? 
    composeWithDevTools(applyMiddleware(thunk)) : 
    applyMiddleware(thunk)));
}