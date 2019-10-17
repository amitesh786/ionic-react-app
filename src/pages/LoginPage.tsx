import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>Username</IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardContent>Password</IonCardContent>
                </IonCard>                
            </IonContent>

            <IonFooter className="ion-padding">
                <IonButton>Login</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default LoginPage;
