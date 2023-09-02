import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import WebContainer from './components/WebContainer';

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={"Loading..."}>
            <Component {...props} />
        </Suspense>
    );
};

const TicTacToe = Loadable(lazy(() => import("../src/apps/Tic-tac-toe/TicTacToe")))
const Calculator = Loadable(lazy(() => import("../src/apps/Calculator/Calculator")))
const Counter = Loadable(lazy(() => import("../src/apps/Counter/Counter")))
const MagicMatch = Loadable(lazy(() => import("../src/apps/MagicMatch/MagicMatch")))
const TodoList = Loadable(lazy(() => import("../src/apps/Todo/Todo")))
const GitHunter = Loadable(lazy(() => import("../src/apps/GitHunter/GitHunter")))


const Routes = [
    {
        path: "/",
        element: <WebContainer />
    },
    {
        path: "/tictactoe",
        element: <TicTacToe />
    },
    {
        path: "/tictactoe",
        element: <TicTacToe />
    },
    {
        path: "/calculator",
        element: <Calculator />
    },
    {
        path: "/counter",
        element: <Counter />
    },
    {
        path: "/magic-match",
        element: <MagicMatch />
    },
    {
        path: "/todo",
        element: <TodoList />
    },
    {
        path: "/git-hunter",
        element: <GitHunter />
    },
    {
        path: "*",
        element: <WebContainer />
    },
]

const Router = () => {
    return useRoutes(Routes)
}

export default Router
