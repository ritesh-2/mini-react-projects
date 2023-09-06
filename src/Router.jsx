import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import WebContainer from './components/WebContainer';
import { MY_APPS } from './confgs/appConfig';

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={"Loading..."}>
            <Component {...props} />
        </Suspense>
    );
};

const Routes = MY_APPS.map((app) => {
    const LoadableComponent = Loadable(lazy(() => import(  /* @vite-ignore */ app.FOLDER_PATH)))
    return {
        path: app.PATH,
        element: <LoadableComponent />
    }
})

Routes.push({
    path: "*",
    element: <WebContainer />
})


const Router = () => {
    return useRoutes(Routes)
}

export default Router
