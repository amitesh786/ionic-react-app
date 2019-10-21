import { IonApp, IonPage, IonHeader, IonTitle, IonToolbar, IonFooter, IonContent, IonInput, IonList, IonItem, IonLabel, IonButton, IonCard,  IonCardContent, IonMenuButton, IonButtons } from '@ionic/react';
import React, { useState } from 'react';

interface Users {
    name: string;
    email: string;
    position: string;
    photo: string;
}

const LoginPage: React.FC = () => {

    let [user, setUser] = useState<Users[]>([]);

    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');

    let [ formErrors, setFormErrors ] = useState({});

    // useIonViewWillEnter(async () => {
    //     const result = await fetch('https://uifaces.co/api?limit=25', {
    //         headers: { 'x-API-KEY': '873771d7760b846d51d025ac5804ab' }
    //     });
    //     const data = await result.json();
    //     setUser(data);
    // });
    

    // const submit = async () => {
    //     try {
    //       await login({
    //         email,
    //         password
    //       });
    //     } catch (e) {
    //       setFormErrors(e);
    //     }
    // }


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
                    <form 
                    // onSubmit={(e) => { e.preventDefault(); submit();}}
                    >
                        <div>
                            {/* { formErrors ? (
                                formErrors.message
                            ): null} */}
                        </div>

                        <IonList>
                            <IonItem>
                                <IonLabel>Email</IonLabel>
                                <IonInput name="email" type="email" value="email"  />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Password</IonLabel>
                                <IonInput name="password" type="password" value="password" />
                            </IonItem>
                        </IonList>

                        <IonButton type="submit">Log in</IonButton>
                    </form>
                </IonContent>
            </IonPage>
        </>
    )
};

export default LoginPage;
