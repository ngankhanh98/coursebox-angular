import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHelper {
  url = 'http://localhost:3000/v1';

  constructor(private httpClient: HttpClient) {}

  _fetchData(route: string, header, success_callback: (data) => void) {
    return this.httpClient
      .get(this.url + route, { headers: header })
      .subscribe(success_callback);
  }

  _postData(
    route: string,
    data: object,
    header,
    success_callback: (res: any) => any
  ) {
    return this.httpClient
      .post(this.url + route, data, { headers: header })
      .subscribe(success_callback);
  }

  _fetchData$(route: string, header) {
    return this.httpClient.get(this.url + route, { headers: header });
  }

  _deleteData(route: string, header: any, success_callback: (res: any) => any) {
    return this.httpClient
      .delete(this.url + route, { headers: header })
      .subscribe(success_callback);
  }
}
