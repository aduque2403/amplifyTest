import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageUploadUsingMplifyPage } from './image-upload-using-mplify.page';

describe('ImageUploadUsingMplifyPage', () => {
  let component: ImageUploadUsingMplifyPage;
  let fixture: ComponentFixture<ImageUploadUsingMplifyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadUsingMplifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageUploadUsingMplifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
