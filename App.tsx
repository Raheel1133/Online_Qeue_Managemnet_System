import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Welcome from './pages/Welcome';

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
import Home from "./pages/Home";
import ServiceList from "./pages/ServiceList";
import List from "./pages/List";
import History from "./pages/History";
import Dailer from "./pages/Dailer";
import ChatBox from "./pages/ChatBox";
import FeedBack from "./pages/FeedBack";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import TicketList from "./pages/TicketList";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/welcome">
                    <Welcome/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/service-list">
                    <ServiceList/>
                </Route>
                <Route exact path="/list">
                    <List/>
                </Route>
                <Route exact path="/history">
                    <History/>
                </Route>
                <Route exact path="/dailer">
                    <Dailer/>
                </Route>
                <Route exact path="/chat-box">
                    <ChatBox/>
                </Route>
                <Route exact path="/feed-back">
                    <FeedBack/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgetPassword/>
                </Route>
                <Route exact path="/ticket-list">
                   <TicketList/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/welcome"/>
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
