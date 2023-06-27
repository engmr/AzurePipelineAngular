import { BaseResponse } from './base-response.model';

describe('BaseResponse', () => {
  it('should create an instance from constructor', () => {
    var newInstance = new BaseResponse<any>();
    expect(newInstance).toBeTruthy();
    expect(newInstance.Status).toBeUndefined();
    expect(newInstance.Message).toBeUndefined();
    expect(newInstance.Data).toBeUndefined();
    expect(newInstance.TransactionId).toBeUndefined();
  });

  it('should deserialize into a new instance', () => {
    var newInstance = new BaseResponse<any>().deserialize({
      Status: 0,
      Message: null,
      Data: {
        FirstName: "John"
      },
      TransactionId: "228a-8722"
    });

    expect(newInstance).toBeTruthy();
    expect(newInstance.Status).toBe(0);
    expect(newInstance.Message).toBeNull();
    expect(newInstance.Data).toBeTruthy();
    expect(newInstance.Data.FirstName).toBe("John");
    expect(newInstance.TransactionId).toBe("228a-8722");
  });
});
