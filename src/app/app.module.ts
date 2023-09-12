import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAuLjMJvVDdpRMB6fwtOWUAZWPtS2CRnaQ",
  authDomain: "test-study-e1e01.firebaseapp.com",
  databaseURL: "https://test-study-e1e01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-study-e1e01",
  // storageBucket: "test-study-e1e01.appspot.com",
  storageBucket: "gs://test-study-e1e01.appspot.com",
  messagingSenderId: "189543176114",
  appId: "1:189543176114:web:57649674cc32ca75f6b6ab",
  measurementId: "G-NBRDEKDV92"
      }
    ),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
