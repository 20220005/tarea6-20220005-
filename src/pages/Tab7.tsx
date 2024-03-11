import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import img from "../img/mrfoto.jpg";
import "./Tab7.css";
import { logoGithub, logoWhatsapp } from "ionicons/icons";
import { Icon } from "ionicons/dist/types/components/icon/icon";

const Tab7: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <div className="img">
            <img src={img} alt="Foto de Alexander Rodriguez" />
          </div>
          <div className="info">
            <div className="name">
              <h1>Alexander Rodriguez</h1>
            </div>
            <div className="whatsapp">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B18098502982&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <IonIcon icon={logoWhatsapp}></IonIcon>
              </a>
            </div>

            <div className="github">
            <a
                href="https://github.com/20220005"
                target="_blank"
              >
                <IonIcon icon={logoGithub}></IonIcon>
              </a>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab7;
