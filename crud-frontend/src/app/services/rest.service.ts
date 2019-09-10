import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class RestService {

  private readonly serverUrl: string = "";

  private backEndUrl: string = "";
  private headers = new HttpHeaders();

  constructor(protected apiEndpoint: string, private http: HttpClient) {
    this.backEndUrl = `${this.serverUrl}/${this.apiEndpoint}`;
    this.headers.append('Accept', 'application/json');
  }

  create(entity: any) {
    return this.http.post(this.backEndUrl, JSON.stringify(entity));
  }

  findAll() {
    return this.http.get(this.backEndUrl, { headers: this.headers });
  }

  findById(id: number) {
    return this.http.get(`${this.backEndUrl}/${id}`, { headers: this.headers });
  }

  update(entity: any) {
    return this.http.put(this.backEndUrl, JSON.stringify(entity));
  }

  delete(id: number) {
    return this.http.delete(`${this.backEndUrl}/${id}`, { headers: this.headers });
  }

}
