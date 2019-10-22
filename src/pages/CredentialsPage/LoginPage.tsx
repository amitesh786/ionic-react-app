import { IonApp, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonContent, IonInput, IonList, IonItem, IonLabel, IonButton, IonCard,  IonCardContent, IonMenuButton, IonButtons } from '@ionic/react';
import React, { useState } from 'react';

const signUp = () => {
    console.log('Sign Up works');
}

const signIn = () => {
    console.log('Sign In works');
}

const LoginPage: React.FC = () => {

    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin');

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonHeader class="ion-text-center ion-padding">
                        <IonTitle>Insert your credentials</IonTitle>
                    </IonHeader>

                    <IonItem class="ion-text-center">
                        <IonLabel>Username</IonLabel>
                        <IonInput type="email" value={username} placeholder="Enter Username" />
                    </IonItem>

                    <IonItem class="ion-text-center">
                        <IonLabel>Password</IonLabel>
                        <IonInput type="password" placeholder="Enter Password" value={password} ></IonInput>
                    </IonItem>
                </IonContent>

                <IonFooter class="ion-text-center ion-padding">
                    <IonButton class="ion-margin-right" onClick={signUp}>
                        SIGN UP
                    </IonButton>

                    <IonButton color="secondary" onClick={signIn}>
                        SIGN IN
                    </IonButton>
                        
                </IonFooter>
            </IonPage>
        </>
    )
};

export default LoginPage;
