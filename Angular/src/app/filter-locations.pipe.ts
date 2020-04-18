import { Pipe, PipeTransform } from '@angular/core';
 
import { CampSites } from './locations';
 
//pure pipe
@Pipe({ name: 'campSites' })
export class CampSitePipe implements PipeTransform {
  transform(allLocs: CampSites[]) 
  {
    return allLocs.filter(location => location.camp);
  }
}
 
//impure pipe
@Pipe({
  name: 'campSitesImpure',
  pure: false
})
export class CampSitesImpurePipe extends CampSitePipe {}
