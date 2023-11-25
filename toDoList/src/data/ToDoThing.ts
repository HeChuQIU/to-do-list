// @ts-ignore
const CryptoJS = require('../static/crypto-js.js');

export class ToDoThing {
    public Id: string = "";
    public Title: string = "";
    public Description: string = "";
    public IsDone: boolean = false;
    public Importance: number = 0;
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

    public WithImportance(importance: number): ToDoThing {
        importance = parseInt(String(importance));
        this.Importance = importance;
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

    public GetHash(): string {
        const objectString = JSON.stringify(this);
        const hash = CryptoJS.SHA256(objectString);
        return hash.toString(CryptoJS.enc.Hex);
    }
}