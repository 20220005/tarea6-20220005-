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
import axios from "axios";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  function getGender(name: string) {
    axios
      .get(`https://api.genderize.io?name=${name}`)

      .then((res) => {
        if (res.data.error) {
          setGender("Request limit reached");
       
          
          
        } else {
          setGender(res.data.gender);
         
        }
      });
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gender</IonTitle>
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
          <h1>Your Gender is: {gender}</h1>
          <IonButton
            onClick={() => {
              getGender(name);
            }}
          >
            Get
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
