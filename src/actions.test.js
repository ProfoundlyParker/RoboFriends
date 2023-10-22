import * as actions from './actions';
import * as types from './constants'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk])

describe('tests setSearchField function', () => {
    it('should create an action to search robots', () => {
        const text = 'woohoo';
        const expectedAction = {
            type: types.CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })
})
describe('tests requestRobots function', () => {
    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        const expectedAction = {
            type: types.REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })
})
