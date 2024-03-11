import React, { useState, useEffect } from "react";
import axios from "axios";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonSpinner } from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [gender, setGender] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name.trim() !== "") { 
      setLoading(true);
      axios
        .get(`https://api.genderize.io?name=${name}`)
        .then((res) => {
          setGender(res.data.gender);
        })
        .catch((error) => {
          console.error("Error fetching gender:", error);
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
          <IonTitle>Gender</IonTitle>
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
          {gender !== null && (
            <h1>Your Gender is: {gender}</h1>
          )}
         
          {loading && <IonSpinner name="crescent" />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
