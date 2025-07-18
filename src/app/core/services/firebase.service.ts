// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

@Injectable()
export class FirebaseService {
  db = getFirestore();

  async getChapters() {
    const querySnapshot = await getDocs(collection(this.db, 'chapters'));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async getChapterDays(chapterNo: number) {
    const daysRef = collection(this.db, 'days');
    const q = query(daysRef, where('chapterNo', '==', chapterNo));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
}
