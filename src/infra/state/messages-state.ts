import { IObserver, ISubject } from "core/observer";
import { MessageModel } from "domain/models";

export class MessagesSubject implements ISubject {
  public messages: MessageModel[] | null = null;

  static observers: IObserver[] = [];

  public attach(observer: IObserver): void {
    const isExist = MessagesSubject.observers.includes(observer);
    if (isExist) {
      return;
    }

    console.log("Subject: Attached an observer.");
    MessagesSubject.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const observerIndex = MessagesSubject.observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }

    MessagesSubject.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    for (const observer of MessagesSubject.observers) {
      observer.update(this);
    }
  }

  public updateData(params: MessageModel[]) {
    this.messages = params;
    console.log("updating");
    this.notify();
  }
}
