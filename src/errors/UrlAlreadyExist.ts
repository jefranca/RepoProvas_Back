class UrlAlreadyExist extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'UrlAlreadyExist';
    }
  }
  
  export default UrlAlreadyExist;