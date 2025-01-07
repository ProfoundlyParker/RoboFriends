import * as actions from './actions.ts';
import * as types from './constants'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureStore([thunk]);

// Tests that the searchfield returns the text entered
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

// Tests the requestRobots function
describe('requestRobots', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // Tests REQUEST_ROBOTS_PENDING works
  it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        const expectedAction = {
            type: types.REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })

    // Tests REQUEST_ROBOTS_SUCCESS and the API call
    it('creates REQUEST_ROBOTS_SUCCESS when fetching robots has been done', async () => {
        const mockData = {"users": [{ id: 1, name: 'Robot 1', email: 'robot1@example.com' }]}; // Sample data to be returned by the mocked API call
      // Mocking the API call
        nock('https://dummyjson.com')
        // Prevented CORS errors with testing API
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true' 
          })
        .get('/users')
        .reply(200, mockData);
    
        const updatedUsers = mockData.users.map((user) => ({
            ...user,
            image: `https://robohash.org/${user.email}?set=set1&size=300x300`,
        }));

        const expectedActions = [
        { type: 'REQUEST_ROBOTS_PENDING' },
        { type: 'REQUEST_ROBOTS_SUCCESS', payload: { ...mockData, users: updatedUsers } },
        ];
        const store = mockStore({});
    
        await store.dispatch(actions.requestRobots()).then(() => {
        const dispatchedActions = store.getActions();
        expect(dispatchedActions).toEqual(expectedActions);
        });
    });

    // Tests REQUEST_ROBOTS_FAILED to return error
  it('creates REQUEST_ROBOTS_FAILED when fetching robots fails', () => {
    nock('https://dummyjson.com')
      .get('/users')
      .reply(500);

    const expectedActions = [
      { type: 'REQUEST_ROBOTS_PENDING' },
      { type: 'REQUEST_ROBOTS_FAILED', payload: new Error('Request failed with status code 500') },
    ];
    const store = mockStore({});

    return store.dispatch(actions.requestRobots()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
