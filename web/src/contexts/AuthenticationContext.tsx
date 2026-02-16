import { createContext, useContext, useReducer, type ReactNode } from "react";

type User = {
    email: string,
    password: string,
    name?: string,
    lastName?: string,
    type?: string,
}

interface ContextValues {
  user: User | null,
  isAuthenticated: boolean,
  login: (email: string, password: string) => void,
  logout:() => void,
  error?: string
}

const AuthContext = createContext<ContextValues | null>(null);



interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    error?: string,
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false
}

const FAKE_USER = {
  name: "Taís",
  lastName: "Souza",
  type: 'E',
  email: "tais.souza@gmail.com",
  password: "teste",
};

type ReducerAction = | {type: 'login', payload: User} | {type: 'logout'} | {type: 'error'};


function reducer(state: AuthState, action: ReducerAction): AuthState {
    switch(action.type) {
        case 'login':
            return {...state, user: action.payload ?? null, isAuthenticated: true};
        case 'logout':
            return {...state, user: null, isAuthenticated: false};
        case 'error':
            return {...state, error: "Email ou senha incorretos"}
        default:
            throw new Error('Unknown action');
    }
}


function AuthenticationProvider({children}: {children: ReactNode}) {
    const [{user, isAuthenticated, error}, dispatch] = useReducer(reducer, initialState);
    
    
    function login(email: string, password: string) {
        if(email === FAKE_USER.email && password === FAKE_USER.password) dispatch({type: 'login', payload: FAKE_USER});
        if(email !== FAKE_USER.email || password !== FAKE_USER.password) dispatch({type: 'error' })
        
    
    }
    
    function logout() {
        dispatch({type: 'logout'})
    }
    
    
    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, error}}>{children}</AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if(context === null) throw new Error('AuthContext was used outside AuthProvider');
    return context;
}

/* eslint-disable react-refresh/only-export-components  */
export {AuthenticationProvider, useAuth}