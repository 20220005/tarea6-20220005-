import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg
} from "@ionic/react";

import toolbox from "../img/toolbox.png"
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       

        <div className="container-toolbox">
          <IonImg
          className="toolbox"
            src={toolbox}
            alt="Image of Toolbox"
          ></IonImg>
          <h1>Welcome my ToolBox App</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
