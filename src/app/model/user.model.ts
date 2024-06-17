export interface User {
    uid: string;
    email: string | null; // Update to allow null values from Firebase
    displayName?: string | null; // Make properties nullable if Firebase can return null
    photoURL?: string | null;
    // Add more properties as needed
  }
  