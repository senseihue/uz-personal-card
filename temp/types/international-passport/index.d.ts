import { BaseComponent } from '../core';
import { Size } from '../types';
/**
 * International Passport Component
 *
 * @element international-passport-card
 */
export declare class InternationalPassportCard extends BaseComponent {
    static styles: import("lit").CSSResultGroup;
    personalInfo?: INTERNATIONAL_PASSPORT_PERSONAL_INFO;
    size: Size;
    render(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'international-passport-card': InternationalPassportCard;
    }
}
//# sourceMappingURL=index.d.ts.map