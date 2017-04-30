import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import {YearbookComponent} from './yearbook.component';
//import {ClientsService} from './clients.service'
import {HttpModule} from '@angular/http'
import {OldersService} from '../_services/index'
//import {MembersService} from './members.service'
@NgModule({

  imports : [CommonModule, HttpModule],
  declarations: [YearbookComponent],
  exports: [],
  providers: [
    //OldersService,

   ]
})

export class YearbookModule {

}
