import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,

} from "@ionic/react";
import { useState } from "react";
import "./Tab3.css";
import axios from "axios";
const Tab3: React.FC = () => {
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");


  function getAge(name: string) {
    axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      if (res.data.error) {
        setAge("Request limit reached");
      } else {
        setAge(res.data.age);
      }
    }
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Age</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <IonItem>
            <IonInput
              label="Name"
              placeholder="Enter the name"
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <h1>Your Age is: {Age}</h1>
          <IonButton onClick={() => {}}>Get Age</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
