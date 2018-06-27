import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IpfsService } from './service/ipfs-service.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule} from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { FormsModule } from '@angular/forms';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

const routes: Routes = [
	{ path: '', redirectTo: 'registration', pathMatch: 'full' },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'documents', component: DocumentsComponent },
	{ path: '**', redirectTo: 'registration', pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavigationComponent,
    DocumentsComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [IpfsService],
  entryComponents: [
    AlertDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
