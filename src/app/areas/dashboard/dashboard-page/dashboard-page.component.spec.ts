import {CommonModule} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExampleFeatureModule} from '../../../features/example-feature/example-feature.module';
import {DashboardPageComponent} from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ExampleFeatureModule,
      ],
      declarations: [
        DashboardPageComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default data', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.dashboard-page-container')).toBeDefined();
  });
});
