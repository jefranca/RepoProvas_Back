class DisciplineNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DisciplineNotFound";
  }
}

export default DisciplineNotFound;
