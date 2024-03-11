import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import axios from "axios";
import "./Tab4.css";

const Tab4: React.FC = () => {
  const [country, setCountry] = useState("");
  const [university, setUniversity] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country.trim()) {
      return;
    }

    setLoading(true);
    axios.get(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => {
        setUniversity(response.data);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [country]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Country</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container-form">
          <IonItem>
            <IonInput
              label="Country"
              placeholder="Enter the country"
              value={country}
              onIonChange={(e) => {
                setCountry(e.detail.value!);
              }}
            ></IonInput>
          </IonItem>
         
        </div>

        <div className="table-container">
          {loading ? (
            <IonSpinner />
          ) : (
            <div className="card-container">
              {university.map((uni: any, index) => (
                <div className="card" key={index}>
                  <div className="uni-name">
                    <p>{uni.name}</p>
                  </div>
                  <div className="uni-data">
                    <p>{uni.domains}</p>
                    <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">{uni.web_pages[0]}</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
