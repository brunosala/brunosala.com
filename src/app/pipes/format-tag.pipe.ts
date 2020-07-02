import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTag'
})
export class FormatTagPipe implements PipeTransform {

  transform(value: String): String {
    return value.replace(/_/g," ");
  }

}
