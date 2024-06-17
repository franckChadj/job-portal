import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

export interface Job {
    id?: string;
    title: string;
    description: string;
    company: string;
    department:string;
    location: string;
    category: string;
    datePosted: firebase.firestore.Timestamp;
    userId: string; 
  }