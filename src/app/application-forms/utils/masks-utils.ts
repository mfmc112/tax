export class MaskUtils {

  /*
   * Remove the mask from the phone. Transforms from (123) 234-2344 to 1231231223
   */
  public removePhoneMask(phone: string): string {
    if (phone && isNaN(Number(phone))) return phone.replace("(","").replace(")","").replace(" ","").replace("-","");
    return phone;
  }

  /*
   * retrieve Date from the
   */
  public retrieveDate(complexDate: any): Date {
    if (!complexDate) return;
    if (complexDate instanceof Date) return complexDate;
    if (complexDate.formatted) return new Date(complexDate.formatted);
    if (complexDate.date && complexDate.date.year) return new Date(complexDate.date.year, complexDate.date.month-1, complexDate.date.day);
    if (typeof complexDate === "string") return new Date(complexDate);
  }

}
