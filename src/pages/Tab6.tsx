import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab6.css';

const Tab6: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://time.com/wp-json/wp/v2/posts');
        const data = await response.json();
        setNews(data); 
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container-scroll">
          {news.slice(0, 3).map((item, index) => (
            <div className="card" key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.jetpack_featured_media_url} alt={item.title.rendered} />
              </a>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h2>{item.title.rendered}</h2>
              </a>
              <p className='date'>{item.date}</p> 
              <p>{item.content.plain.substring(0, 1000)}...</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
