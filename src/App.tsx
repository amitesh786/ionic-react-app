import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { AppPage } from './declarations';

import Menu from './components/Menu';

import { home, list, logIn, notifications } from 'ionicons/icons';


import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import TestPage from './pages/TestPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
    {
        title: 'Home',
        url: '/home',
        icon: home
    },
    {
        title: 'Login',
        url: '/login',
        icon: logIn
    },
    {
        title: 'Test',
        url: '/test',
        icon: notifications
    }
];

const App: React.FC = () => (
    <>
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu appPages={ appPages } />
                    <IonPage id="main" >
                        <IonRouterOutlet>
                            <Route path="/:tab(home)" component={ HomePage } exact={true} />
                            <Route exact path="/" render={() => <Redirect to="/home" />} />
                            <Route path="/:tab(login)" component={ LoginPage } />
                            <Route path="/:tab(test)" component={ TestPage } />
                        </IonRouterOutlet>
                    </IonPage>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    </>

    // <IonApp>
    //     <IonReactRouter>
    //         <IonRouterOutlet>
    //             <Route path="/login" component={LoginPage} exact={true} />
    //             <Route path="/home" component={HomePage} />
    //             <Route path="/test" component={TestPage} />
    //             <Route exact path="/" render={() => <Redirect to="/login" />} />
    //         </IonRouterOutlet>
    //     </IonReactRouter>
    // </IonApp>
);

export default App;
