import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { accessibility, ellipse, globe, hammer, happy, information, logoWordpress, man, rainy, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
import Tab4 from './pages/Tab4';
import Tab6 from './pages/Tab6';
import Tab5 from './pages/Tab5';
import Tab7 from './pages/Tab7';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/tab4" component={Tab4} />
          <Route path="/tab5" component={Tab5} />
          <Route path="/tab6" component={Tab6} />
          <Route path="/tab7" component={Tab7} />

          
      </IonRouterOutlet>

        
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={hammer} />
         
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={man} />
         
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={happy} />
           
          </IonTabButton>

          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon aria-hidden="true" icon={globe} />
         
          </IonTabButton>

          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon aria-hidden="true" icon={rainy} />
           
          </IonTabButton>

          <IonTabButton tab="tab6" href="/tab6">
            <IonIcon aria-hidden="true" icon={logoWordpress} />
    
          </IonTabButton>

          <IonTabButton tab="tab7" href="/tab7">
            <IonIcon aria-hidden="true" icon={information} />
           
          </IonTabButton>




        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
