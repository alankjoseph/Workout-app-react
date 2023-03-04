import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useworkoutsContext"
export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const {dispatch : workoutsDispatch } = useWorkoutsContext()

    const logout = () => {

        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload:null})
    }
    return {logout}
}