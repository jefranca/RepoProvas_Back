class ProfessorNotFound extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'ProfessorNotFound';
    }
  }
  
  export default ProfessorNotFound;