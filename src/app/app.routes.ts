import { Routes, RouterLinkActive } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { InternetComponent } from './internet/internet.component'
import { OportunidadesComponent } from './oportunidades/oportunidades.component'
import { PresencaComponent } from './presenca/presenca.component'
import { TvComponent } from './tv/tv.component'

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'internet', component: InternetComponent },
	{ path: 'oportunidades', component: OportunidadesComponent },
	{ path: 'presenca', component: PresencaComponent },
	{ path: 'tv', component: TvComponent }
]