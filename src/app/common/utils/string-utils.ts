export class StringUtils {

  public isEmpty(string: string) : boolean {
    return (string === undefined || string === null || string === '');
  }
}
