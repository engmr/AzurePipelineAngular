import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  public getToday(): Date {
    var today = new Date();
    today.setHours(0,0,0,0);
    return today;
  }

  public getTodayAtThisMoment(): Date {
    return new Date();
  }

  public getDateNYearsFromDate(date: Date, numberOfYears: number): Date {
    return new Date(date.setFullYear(date.getFullYear() + numberOfYears));
  }

  public getDateNMonthsFromDate(date: Date, numberOfMonths: number): Date {
    return new Date(date.setMonth(date.getMonth() + 1 + numberOfMonths));
  }

  public getDateNDaysFromDate(date: Date, numberOfDays: number): Date {
    return new Date(date.setDate(date.getDate() + numberOfDays));
  }
}
