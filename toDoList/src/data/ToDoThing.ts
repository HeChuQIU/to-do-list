export class ToDoThing {
  constructor(
    public title?: string,
    public description?: string,
    public startDateTime?: Date,
    public endDateTime?: Date,
    public isDone?: boolean
  ) {
  }

  public withTitle(title: string): ToDoThing {
    this.title = title;
    return this;
  }

  public withDescription(description: string): ToDoThing {
    this.description = description;
    return this;
  }

  public StartAt(startDateTime: Date): ToDoThing {
    this.startDateTime = startDateTime;
    return this;
  }

  public EndAt(endDateTime: Date): ToDoThing {
    this.endDateTime = endDateTime;
    return this;
  }

  public Done(isDone: boolean): ToDoThing {
    this.isDone = isDone;
    return this;
  }
}
