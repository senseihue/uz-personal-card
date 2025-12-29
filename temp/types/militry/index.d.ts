import { BaseComponent } from '../core';
import { Size } from '../types';
/**
 * Militry ID Card Component
 *
 * @element militry-id-card
 */
export declare class MilitryIdCard extends BaseComponent {
    static styles: import("lit").CSSResultGroup;
    personalInfo?: MILITRY_ID_CARD_INFO;
    size: Size;
    private flipped;
    render(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'militry-id-card': MilitryIdCard;
    }
}
//# sourceMappingURL=index.d.ts.map