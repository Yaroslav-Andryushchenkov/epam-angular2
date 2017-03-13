import {
  Component
} from '@angular/core';

@Component({
  selector: 'tool-box',
  template: `
  <div class="row">
     <search class="col-sm-8"></search>
     <div class="col-sm-4 text-right">
       <button class="btn btn-success">Add course</button>
     </div>
  </div>
  `
})
export class ToolBoxComponent  {

}
