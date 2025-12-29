import { BaseComponent } from '../core';
import { Size } from '../types';
/**
 * Driving License Card Component
 *
 * @element driving-license-card
 */
export declare class DrivingLicenseCard extends BaseComponent {
    static styles: import("lit").CSSResultGroup;
    personalInfo?: DRIVING_LICENSE_PERSONAL_INFO;
    size: Size;
    render(): import("lit-html").TemplateResult<1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'driving-license-card': DrivingLicenseCard;
    }
}
//# sourceMappingURL=index.d.ts.map