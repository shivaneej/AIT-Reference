import { Component } from '@angular/core';
 
@Component({
  selector: 'app-join-name',
  template: `
  <div style="width : 40%; margin : auto;">
  <h2>Join Name</h2>
    <div class="form-group">
      <label for="firstName"> First Name:</label>
      <input type="text" class="form-control" id="firstName" [(ngModel)]="first">
    </div>
 
    <div class="form-group">
      <label for="lastName"> Last Name:</label>
      <input type="text" class="form-control" id="lastName" [(ngModel)]="last">
    </div>
    
    
      <h3>Without Chaining</h3><br>
      <p>Welcome {{first | joinName: last}}!</p>
    
      <h3>With Chaining</h3><br>
      <p>Welcome {{first | joinName: last | reversestring}}!</p>

    <div>
  `
})
export class JoinNameComponent {
  first = 'steve';
  last = 'rogers';
}
