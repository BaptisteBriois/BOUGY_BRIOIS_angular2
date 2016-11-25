import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ContactlistComponent} from "./contactlist/contactlist.component";
import {MentionsComponent} from "./mentions/mentions.component";


const APP_ROUTES : Routes = [
    {path:'', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'contactlist', component:ContactlistComponent},
    {path:'mentions', component:MentionsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);