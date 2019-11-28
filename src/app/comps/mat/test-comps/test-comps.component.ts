import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-test-comps',
  templateUrl: './test-comps.component.html',
  styleUrls: ['./test-comps.component.css']
})
export class TestCompsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  matSelectClick(ev:MouseEvent){
    console.log('matSelectClick', ev);

  }

  matselectionChange(ev:MatSelectChange){
    console.log('matselectionChange', ev);
  }

}
