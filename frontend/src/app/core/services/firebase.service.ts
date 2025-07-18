// src/app/services/firebase.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {
  private _http = inject(HttpClient);
  //   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // db = getFirestore();

  //   async getChapters() {
  //     if (isPlatformServer(this.platformId)) return [];

  //     const querySnapshot = await getDocs(collection(this.db, 'chapters'));
  //     return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   }

  getChapterDays(chapterNo: number) {
    return this._http.get<any[]>(
      `http://localhost:3000/api/chapter-days/${chapterNo}`
    );
  }
}
