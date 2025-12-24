import { LitElement } from "lit";

interface BaseComponentInterface {
    _onClick?(): void;
}

export class BaseComponent extends LitElement {
    _onClick ?(): void {
        console.log(`Base component click method`)
    }
}