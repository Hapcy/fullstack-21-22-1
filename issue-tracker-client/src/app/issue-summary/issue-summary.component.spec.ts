import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IssueStatus } from '../core/issue';
import { UserRole } from '../core/user';
import { UserService } from '../core/user.service';
import { first } from 'rxjs/operators';

import { IssueSummaryComponent } from './issue-summary.component';

describe('IssueSummaryComponent', () => {
  let component: IssueSummaryComponent;
  let fixture: ComponentFixture<IssueSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IssueSummaryComponent],
      providers: [
        {
          provide: UserService,
          useValue: { isAdmin: true },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSummaryComponent);

    component = fixture.componentInstance;
    component.issue = {
      title: 'Rossz projektor',
      description: 'asd',
      place: 'asd',
      status: IssueStatus.Done,
      user: {
        name: 'Tibi',
        role: UserRole.User,
      },
    };
    component.showButtons = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit editIssue when clicking on edit issue', () => {
    component.editIssue.pipe(first()).subscribe(() => {
      expect(true).toBe(true);
    });
    const editIssueButton = fixture.debugElement.query(By.css('#editIssue'));
    editIssueButton.triggerEventHandler('click', null);
  });
});
