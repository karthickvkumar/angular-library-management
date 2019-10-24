import { TestBed } from '@angular/core/testing';

import { UserSettingsAPIService } from './user-settings-api.service';

describe('UserSettingsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSettingsAPIService = TestBed.get(UserSettingsAPIService);
    expect(service).toBeTruthy();
  });
});
