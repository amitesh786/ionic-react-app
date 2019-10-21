import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/react';
import React from 'react';
import axios from 'axios';

// Home page css added
import './HomePage.css';

// API key generate form https://newsapi.org/
const API_KEY = "c88eb20970be4c8d8c232b8e20fdd982";
const URL = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-21&sortBy=publishedAt&apiKey=${API_KEY}`;

const fetchArticles = () => {

    return axios({
        url: URL,
        method: 'get'
    }).then(response => {
        console.log(response);
        return response.data;
    });
};

const HomePage: React.FC = () => {
  
    let [articles, setArticles] = React.useState([]);
    let items: any[] = [];
  
    React.useEffect(() => {
        fetchArticles().then(data => setArticles(data.articles));
    }, []);
  
    return (
      <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent color="primary" >
            <IonList color="primary">
                {
                    articles.map(a => {
                        
                        return (
                            <IonItem>
                                { a['title'] }
                                <IonButton href={ a['url'] } color="primary" slot="end">Read</IonButton>
                            </IonItem>
                        );
                    })
                }    
            </IonList>
        </IonContent>
      </>
    );
};
  
export default HomePage;
