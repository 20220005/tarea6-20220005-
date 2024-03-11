import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useState } from "react";
import "./Tab4.css";

const Tab4: React.FC = () => {
  const [country, setCountry] = useState("");
  const [university, setUniversity] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCountry() {
    if (!country.trim()) {
      return;
    }

    setLoading(true);
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((res) => res.json())
      .then((data) => {
        setUniversity(data);
        setLoading(false);
      });
  }

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
<div className="button-container">
          <IonButton
            onClick={() => {
              getCountry();
            }}
          >
            Get
          </IonButton>
          </div>
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
                    <a href={uni.web_pages[0]} target="_blank">{uni.web_pages[0]}</a>
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
