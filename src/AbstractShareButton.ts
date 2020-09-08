import EventHandler from './EventHandler'; 

export default abstract class AbstractShareButton {
  eventHandler: EventHandler;
  className: string;
  
  constructor(eventHandler: EventHandler, className: string) {
    this.eventHandler = eventHandler;  
    this.className = className; 
  }

  abstract createAction(): any;

  bind() {
    const action = this.createAction(); 

    this.eventHandler.addEventListenerToClass(
      this.className,
      "click",
      action);
  }
}