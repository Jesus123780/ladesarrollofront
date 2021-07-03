import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import { Layout } from './components/layout';
import { Home } from './pages/layout';
import { NotFound } from './components/NotFound';
import { About } from './components/About';
import { RandomCats } from './pages/RandomCats';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    {
                        ({ error }) => <Layout error={error}>
                            <Suspense fallback={<Loading />} >
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route exact path='/about' component={About} />
                                    <Route exact path='/randomapi' component={RandomCats} />
                                    <Route component={NotFound} />
                                </Switch>
                            </Suspense>
                        </Layout>
                    }
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default App;