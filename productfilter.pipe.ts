import { Pipe, PipeTransform } from '@angular/core';
import { display } from 'src/models/display';


@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(viewproductlist : display[] , searchTerm : string): display[] {
    if(!searchTerm)
    {
      return viewproductlist ;
    }
    else {
      return viewproductlist.filter( list =>
        list.name.toLowerCase().indexOf(searchTerm.toLowerCase()) ! == 0) ;
    }
  }
}