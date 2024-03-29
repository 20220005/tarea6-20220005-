import React, { useState, useEffect } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';

import './Tab5.css'; 

const Tab5: React.FC = () => {
  const apiKey = "4c6322333ead1e37846fd60bc88ac3ed";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Santo%20Domingo,do&appid=${apiKey}&units=metric`;
  const [weather, setWeather] = useState<any[]>([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    getWeather(); 
  }, []); 

  function getWeather() {
    axios.get(apiUrl) 
      .then((response) => {
        const data = response.data;
        console.log(data);
        setCountry("" + data.city.name + ", " + data.city.country);
        setWeather(data.list);
      })
      .catch((error) => {
        console.error("Error al obtener el clima:", error);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="">
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container-weather">
          <h1 className="country">{country}</h1>
          <IonList>
            {weather.map((item: any, index: number) => (
              <IonItem key={index} className="weather-info">
                <h2>{item.main.temp}°C</h2>
                <h3>{item.weather[0].description}</h3>
              </IonItem>
            ))}
          </IonList>
          <IonButton color="secondary" onClick={getWeather}>Obtener Clima</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
