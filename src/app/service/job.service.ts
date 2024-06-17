import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobsCollection = this.firestore.collection<Job>('jobs');

  constructor(private firestore: AngularFirestore) { }

  getJobs(): Observable<Job[]> {
    return this.jobsCollection.valueChanges({ idField: 'id' });
  }

  getJobsByUser(userId: string): Observable<Job[]> {
    return this.firestore.collection<Job>('jobs', ref => ref.where('userId', '==', userId)).valueChanges({ idField: 'id' });
  }

  getJobById(id: string): Observable<Job | undefined> {
    return this.jobsCollection.doc<Job>(id).valueChanges();
  }

  addJob(job: Job) {
    this.jobsCollection.add(job);
  }

  updateJob(jobId: string, job: Job): Promise<void> {
    return this.jobsCollection.doc(jobId).update(job);
  }

  deleteJob(jobId: string): Promise<void> {
    return this.jobsCollection.doc(jobId).delete();
  }
}
