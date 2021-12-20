class ExamsNotFound extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ExamsNotFound";
    }
  }
  
  export default ExamsNotFound;