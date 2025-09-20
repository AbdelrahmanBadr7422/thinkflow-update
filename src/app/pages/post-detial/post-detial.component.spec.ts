import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetialComponent } from './post-detial.component';

describe('PostDetialComponent', () => {
  let component: PostDetialComponent;
  let fixture: ComponentFixture<PostDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
