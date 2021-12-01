import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IssueService } from './issue.service';

describe('IssueService', () => {
  let httpTestingController: HttpTestingController;
  let service: IssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IssueService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getIssues', () => {
    it('should call httpClient get with /api/issues', async () => {
      const issuesPromise = service.getIssues();

      httpTestingController.expectOne('/api/issues').flush([]);

      expect(await issuesPromise).toEqual([]);

      httpTestingController.verify();
    });

  });
});
