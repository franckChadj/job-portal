import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user$ = this.afAuth.authState;
  }

  getCurrentUser(): Observable<User | null> {
    return this.user$;
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string , password: string, displayName: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        const user: User = {
          uid: credential.user!.uid,
          email: credential.user!.email!,
          displayName: displayName,
          // You can set other properties if needed
        };
        return this.firestore.collection('users').doc(user.uid).set(user, { merge: true });
      });
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
