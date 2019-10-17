import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import React from 'react';

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Ionic Blank</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                The world is your oyster.
                <p>
                    If you get lost, the{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
                        docs
                    </a>{' '}
                    will be your guide.
                </p>
            </IonContent>

            <IonFooter>
                <p>
                    Contact here {' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/amitesh786/">
                        github
                    </a>{' '}
                </p>
            </IonFooter>
        </IonPage>
    );
};

export default HomePage;
