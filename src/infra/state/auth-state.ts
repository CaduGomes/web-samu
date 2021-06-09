import { IObserver, ISubject } from "data/protocols/observer";
import { UserModel } from "domain/models";

export class ConcreteSubject implements ISubject {
  public userData: UserModel | null = null;

  static observers: IObserver[] = [];

  public attach(observer: IObserver): void {
    const isExist = ConcreteSubject.observers.includes(observer);
    if (isExist) {
      return;
    }

    console.log("Subject: Attached an observer.");
    ConcreteSubject.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const observerIndex = ConcreteSubject.observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }

    ConcreteSubject.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    for (const observer of ConcreteSubject.observers) {
      observer.update(this);
    }
  }

  public signInUser(params: UserModel) {
    this.userData = params;

    this.notify();
  }

  public signOutUser() {
    this.userData = null;

    this.notify();
  }
}
