import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentjs',
  templateUrl: './documentjs.component.html',
  styleUrls: ['./documentjs.component.css']
})
export class DocumentjsComponent implements OnInit {
  constructor() {}
  car = ['audi', 'jegan', 'modi'];
  ex = 
    {
      name: 'jegan',
      age: 27,
      both: function() {
        return this.name;
      }
    }
  ;
  ngOnInit() {
    document.querySelectorAll('.hi')[0].innerHTML = ' <h2>First one</h2>';
    var crep = document.createElement('p');
    crep.innerHTML = 'Hello there';
    document.getElementById('create').appendChild(crep);
  }
}
