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
  IonTitle,
  IonToolbar,
  IonSpinner // Importamos IonSpinner para mostrar el indicador de carga
} from "@ionic/react";
import { useState } from "react";
import "./Tab4.css";

const Tab4: React.FC = () => {
  const [country, setCountry] = useState("");
  const [university, setUniversity] = useState([]);
  const [loading, setLoading] = useState(false); 

  function getCountry(country: string) {
    if (!country.trim()) { 
      return; 
    }

    setLoading(true); 
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        onIonChange={(e) => {
          setCountry(e.detail.value!);
        }}
      ></IonInput>
    </IonItem>

    <IonButton
      onClick={() => {
        getCountry(country);
      }}
    >
      Get
    </IonButton>
  </div>

  <div className="table-container"> {/* Nuevo div contenedor de la tabla */}
    {loading ? ( 
      <IonSpinner />
    ) : (
      <IonGrid>
        <IonRow>
          <IonCol size="6">Name</IonCol>
          <IonCol size="3">Domain</IonCol>
          <IonCol size="3">Web</IonCol>
        </IonRow>
        {university.map((uni: any, index) => {
          return (
            <IonRow key={index}>
              <IonCol size="6">{uni.name}</IonCol>
              <IonCol size="3">{uni.domains}</IonCol>
              <IonCol size="3">
                <a href={uni.web_pages} target="_blank">{uni.web_pages}</a>
              </IonCol>
            </IonRow>
          );
        })}
      </IonGrid>
    )}
  </div>
</IonContent>
    </IonPage>
  );
};

export default Tab4;
