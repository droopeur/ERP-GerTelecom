import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Olders} from '../_models/index'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable ()

export class OldersService {

  constructor(private _http:Http) {

  }

  getOldersfromAPI(){
    return this._http.get('src/data.json')
      .do(x => console.log(x))
       .map(olders => {return olders = olders.json()});
  }
}
