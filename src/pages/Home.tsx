import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">LongTitleTextTest123 Text</IonTitle>
          <IonBreadcrumbs>
            <IonBreadcrumb>Test 1</IonBreadcrumb>
            <IonBreadcrumb>Test 2</IonBreadcrumb>
            <IonBreadcrumb>Test 3</IonBreadcrumb>
          </IonBreadcrumbs>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Test-Content
      </IonContent>
    </IonPage>
  );
};

export default Home;
