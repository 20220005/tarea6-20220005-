import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonSpinner,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name.trim() !== "") {
      setLoading(true);
      axios
        .get(`https://api.agify.io?name=${name}`)
        .then((res) => {
          if (res.data.error) {
            setAge("Request limit reached");
          } else {
            setAge(res.data.age);
          }
        })
        .catch((error) => {
          console.error("Error fetching age:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [name]);

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
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          {age !== null && <h1>Your Age is: {age}</h1>}
        
          {loading && <IonSpinner name="crescent" />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
