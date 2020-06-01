export class User {
  constructor(
    public email: string,
    public name: string,
    public phone: string,
    public isAdmin: boolean,
    public id: string,
    private _token: string,
    private _expirationDate: Date,
    private _refreshToken: string,
  ) {
  }

  get token() {
    if (this._expirationDate && this._expirationDate >= new Date()) {
      return this._token;
    }
    return null;
  }


}
