import { createContext, useContext, useReducer, type ReactNode } from "react";

type User = {
    email: string,
    password: string
}

interface ContextValues {
  user: User | null,
  isAuthenticated: boolean,
  login: (email: string, password: string) => void,
  logout:() => void,
}

const AuthContext = createContext<ContextValues | null>(null);



interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false
}

const FAKE_USER = {
  name: "Taís",
  email: "tais.souza@gmail.com",
  password: "teste",
};

type ReducerAction = | {type: 'login', payload: User} | {type: 'logout'}


function reducer(state: AuthState, action: ReducerAction): AuthState {
    switch(action.type) {
        case 'login':
            return {...state, user: action.payload ?? null, isAuthenticated: true};
        case 'logout':
            return {...state, user: null, isAuthenticated: false};
        default:
            throw new Error('Unknown action');
    }
}


function AuthenticationProvider({children}: {children: ReactNode}) {
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);
    
    
    function login(email: string, password: string) {
        if(email === FAKE_USER.email && password === FAKE_USER.password) dispatch({type: 'login', payload: FAKE_USER})
    }
    
    function logout() {
        dispatch({type: 'logout'})
    }
    
    
    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout}}>{children}</AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if(context === null) throw new Error('AuthContext was used outside AuthProvider');
    return context;
}

/* eslint-disable react-refresh/only-export-components  */
export {AuthenticationProvider, useAuth}