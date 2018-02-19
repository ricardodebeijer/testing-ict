import { NgModule } from '@angular/core';
import { TimeAgoPipe } from './timeago/timeago';
@NgModule({
	declarations: [TimeAgoPipe],
	imports: [],
	exports: [TimeAgoPipe]
})
export class PipesModule {}
