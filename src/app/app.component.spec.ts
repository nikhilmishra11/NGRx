import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddItemAction } from './store/actions/shopping.action';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let de: DebugElement;
let el: HTMLElement;
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({
          shopping: ShoppingReducer
        }, {}),
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('should add list in shopping cart', () => {
    comp.newShoppingItem.name = 'test';
    comp.addItem();
    expect(comp.addItem).toBeTruthy();
  });

  it('should call addItem method', fakeAsync(() => {
    fixture.detectChanges();
    const spy = spyOn(comp, 'addItem');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'test';
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    // expect(comp.addItem).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  }));
});

