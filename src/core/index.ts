import { LitElement } from "lit";

export class BaseComponent extends LitElement {
    _onClick?(): void {
        console.log(`Base component click method`)
    }
}