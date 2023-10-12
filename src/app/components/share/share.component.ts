import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  selectedFile: File | null = null;
  uploadStatus$!: Observable<string>;

  constructor(private http: HttpClient) { }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile !== null) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.uploadStatus$ = this.http.post('http://localhost:4200/upload', formData) as Observable<string>;
      console.log("Doneeeeeeeeeeeeeee");
    }
    else {
      console.error('No file selected for upload');
    }
  }
}

