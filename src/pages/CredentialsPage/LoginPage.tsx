import { IonApp, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonContent, IonInput, IonList, IonItem, IonLabel, IonButton, IonCard,  IonCardContent, IonMenuButton, IonButtons } from '@ionic/react';
import React, { useState } from 'react';

const signUp = () => {
    console.log('Sign Up works');
}

const signIn = () => {
    console.log('Sign In works');
}

const LoginPage: React.FC = () => {

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
                    <IonHeader class="ion-text-center ion-margin-top">
                        <IonTitle>Insert your credentials</IonTitle>
                    </IonHeader>

                    <IonItem>
                        <IonLabel >Username</IonLabel>
                        <IonInput value="username"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel >Password</IonLabel>
                        <IonInput type="password" value="password"></IonInput>
                    </IonItem>

                    <IonFooter class="ion-text-center ion-margin-top">
                        <IonButton ion-button margin-right onClick={signUp}>
                            SIGN UP
                        </IonButton>

                        <IonButton ion-button color="secondary" onClick={signIn}>
                            SIGN IN
                        </IonButton>
                    </IonFooter>

                </IonContent>
            </IonPage>
        </>
    )
};

export default LoginPage;
