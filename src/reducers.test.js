import * as types from './constants'
import * as reducers from './reducers';

const initialStateSearch = {
    searchField: ''
}
describe('searchRobots',  () => {
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: types.CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})

const initialStateRobots = {
    users: [],
    isPending: false,
    error: null
}

describe('getRobotsReducer', () => {
    it('should return the initial state', () => {
        expect(reducers.getRobotsReducer(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.getRobotsReducer(initialStateRobots, {
            type: types.REQUEST_ROBOTS_PENDING,
            payload: { isPending: true }
        })).toEqual({
            users: [],
            isPending: true,
            error: null
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.getRobotsReducer(initialStateRobots, {
            type: types.REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false,
            error: null
        })).toEqual({
            users: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false,
            error: null
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.getRobotsReducer(initialStateRobots, {
            type: types.REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOO'
        })).toEqual({
            error: 'NOOOOO',
            users: [],
            isPending: false,
        })
    })
})