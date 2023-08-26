export class Post {
    private _title: string;
    private _text: string;
    private _image?: string
    constructor(title: string, text: string, image?: string) {
      this._title = title;
      this._text = text;
      this._image = image;
    }
  
    get title() {
      return this._title;
    }
  
    get username() {
      return this._text;
    }

    get image() {
        return this._image;
    }
  }