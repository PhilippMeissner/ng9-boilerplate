import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RandomNumberComponent} from './random-number.component';

describe('RandomNumberComponent', () => {
  let component: RandomNumberComponent;
  let fixture: ComponentFixture<RandomNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RandomNumberComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random number', () => {
    const randomSpy = spyOn(Math, 'random').and.returnValue(1);

    component.randomize();

    expect(component.randomNumber).toEqual(100);
    expect(randomSpy).toHaveBeenCalled();
  });
});
