import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonDatetime, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';

const TestPage: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Test</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
                    <IonButton fill="clear">Start</IonButton>
                </IonContent>
            </IonPage>
        </>
    );
};

export default TestPage;
