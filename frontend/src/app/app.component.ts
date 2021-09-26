import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Show } from 'src/app/show/show.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly #apiPath = 'http://127.0.0.1:3000';

  history$ = this.httpClient.get<Show[]>(this.#apiPath + '/history');

  currentAction: 'search' | 'history' = 'search';
  searchControl = new FormControl('', Validators.required);

  soughtShow: Show | undefined;
  notFound = false;

  constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  search(title: string) {
    this.httpClient
      .get<Show>(this.#apiPath + '/query', { params: { title: title } })
      .subscribe((show) => {
        this.notFound = show.Response === 'False';
        this.soughtShow = this.notFound ? undefined : show;
        this.cdr.markForCheck();
      });
  }

  trackByFn = (_: any, { imdbID }: Show) => imdbID;
}
