import { Observable } from "rxjs";

  
  export interface Iproducts{
    pId: string;
    pname: string;
    feature: string;
    pstatus:'InProcess'|'Delivered' | 'Dispatched';
    canraturn: string;
  }

  //interface to implement CanDeactivate Guard - because gurad can be used fror single components and for multiple components interface is used

  export interface IcanDeactivateComp {

    canDeactive: () => boolean | Promise<boolean> | Observable <boolean>
  }
