export class ToDoThing {
    public Id: string = "";
    public Title: string = "";
    public Description: string = "";
    public IsDone: boolean = false;
    public StartTime: Date = new Date();
    public EndTime: Date = new Date();

    public WithId(id: string): ToDoThing {
        this.Id = id;
        return this;
    }

    public WithTitle(title: string): ToDoThing {
        this.Title = title;
        return this;
    }

    public WithDescription(description: string): ToDoThing {
        this.Description = description;
        return this;
    }

    public WithIsDone(isDone: boolean): ToDoThing {
        this.IsDone = isDone;
        return this;
    }

    public WithStartTime(startTime: Date): ToDoThing {
        this.StartTime = startTime;
        return this;
    }

    public WithEndTime(endTime: Date): ToDoThing {
        this.EndTime = endTime;
        return this;
    }
}