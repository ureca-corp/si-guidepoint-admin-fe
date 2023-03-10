export class DateTimeUtil {
  static plainToDate(dateString: string) {
    return new Date(dateString);
  }

  static plainToLocaleString(dateString: string) {
    return this.plainToDate(dateString).toLocaleString();
  }
}
