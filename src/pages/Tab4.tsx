import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab5.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Hello World</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
