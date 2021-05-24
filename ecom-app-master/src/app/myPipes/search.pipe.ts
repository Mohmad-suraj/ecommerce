import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchterm:any): any {
    return value.filter(function(search:any){
        return search.name.toLowerCase().indexOf(searchterm.toLowerCase())>-1
    });
  }
}

