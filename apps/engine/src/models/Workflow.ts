export default class Workflow {
  constructor(
    public id: string,
    public name: string,
    public steps: any[]
  ) {}
  static async findById(id: string): Promise<Workflow | null> {
    // TODO: fetch from PostgreSQL
    return null;
  }
}
