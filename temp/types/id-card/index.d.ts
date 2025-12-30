import { BaseComponent } from '../core';
import { Size } from '../types';
/**
 * ID Card Component
 *
 * @element id-card
 */
export declare class IdCard extends BaseComponent {
    static styles: import("lit").CSSResultGroup;
    personalInfo?: ID_CARD_PERSONAL_INFO;
    size: Size;
    private flipped;
    render(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'id-card': IdCard;
    }
}
//# sourceMappingURL=index.d.ts.map