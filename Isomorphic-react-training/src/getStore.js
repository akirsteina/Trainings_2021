import { createStore, combineReducers, applyMiddleware } from 'redux';
import { identity } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import fetcQuestionSaga from './sagas/fetch-question-saga';
import fetcQuestionsSaga from './sagas/fetch-questions-saga';
import * as reducers from './reducers';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

export default function (history, defaultState = {}) {
    const middleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();

    const middlewareChain = [middleware, sagaMiddleware];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewareChain.push(logger);
    }
    const store = createStore(combineReducers({
        ...reducers,
        router
    }), defaultState, applyMiddleware(...middlewareChain));

    sagaMiddleware.run(fetcQuestionSaga);
    sagaMiddleware.run(fetcQuestionsSaga);

    return store;
};