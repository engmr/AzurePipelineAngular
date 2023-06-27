import { ErrorModalData } from './error-modal-data.model';

describe('ErrorModalData', () => {
  it('should create an instance', () => {
    let errorModalData: ErrorModalData = new ErrorModalData();
    expect(errorModalData).toBeTruthy();
    expect(errorModalData.errorMessage).toBeNull();
    expect(errorModalData.title).toBeUndefined();
  });
});
