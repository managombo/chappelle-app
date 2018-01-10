import {Observable} from "rxjs/Observable";
// import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';


@Injectable()
export class RssService{
  constructor( private http: HttpClient){

  }

  load(){
    console.log('loadservice');
    return Observable.create(s=>{
      // this.http.get('/priere/feed', { responseType: 'text' })
      this.http.get('http://www.medaille-miraculeuse.fr/feed', { responseType: 'text' })
      // this.http.get('assets/xml/test.xml', { responseType: 'text' })
        .map(res=>res.toString())
        .subscribe(data => {

            if(data){
              console.log(data);
              var parser = new DOMParser();
              var xmlData = parser.parseFromString(data, "application/xml");
              var items = xmlData.querySelectorAll("item");
              // for(var index = 0; index < items.length; index++){
              //   var element = items[0];
                var element = items;
                // var element = items[index];
                s.next(element);
              // }
            }
            else
            {
              s.next("test");
            }
          s.complete();
          });

        // s.next('test');

    });
  }

}
