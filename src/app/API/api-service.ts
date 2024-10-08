import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    private apiUrl = environment.APIURL;

    constructor(private http: HttpClient) {}

    // Método GET
    //getItems() {
    //    return this.http.get(`${this.apiUrl}/items`);
    //}

    // Método POST
    addItem(item: string) {
        console.log(this.apiUrl);
        const body = { urlsYoutube: item };  // Envolvendo a string em um objeto JSON
        return this.http.post(`${this.apiUrl}/DownloadMP3`, body, { headers: new HttpHeaders({"content-type": "application/json",
"Accept": "application/zip"}), responseType: 'blob' });
    }

    // Método PUT
    //updateItem(id: string, item: any) {
    //   return this.http.put(`${this.apiUrl}/items/${id}`, item);
    //}

    // Método DELETE
    //deleteItem(id: string) {
    //    return this.http.delete(`${this.apiUrl}/items/${id}`);
    //}
}
