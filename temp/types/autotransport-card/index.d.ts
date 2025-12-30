import { BaseComponent } from '../core';
import { Size } from '../types';
/**
 * Autotransport Card Component
 *
 * @element autotransport-card
 */
export declare class AutotransportCard extends BaseComponent {
    static styles: import("lit").CSSResultGroup;
    personalInfo?: AUTOTRANSPORT_CARD_PERSONAL_INFO;
    size: Size;
    render(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'autotransport-card': AutotransportCard;
    }
}
//# sourceMappingURL=index.d.ts.map