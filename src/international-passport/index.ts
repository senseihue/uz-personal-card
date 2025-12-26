import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../core/index.ts';
import { INTERNATIONAL_PASSPORT_PERSONAL_INFO, Size } from '../index';
import { InternationalPassportStyle } from './style.ts';

/**
 * International Passport Component
 * 
 * @element international-passport-card
 */
@customElement('international-passport-card')
export class InternationalPassportCard extends BaseComponent {
  static override styles = InternationalPassportStyle.styles;

  @property({ type: Object })
  personalInfo?: INTERNATIONAL_PASSPORT_PERSONAL_INFO;

  @property({ type: String })
  size: Size = Size.MEDIUM;

  override render() {
    if (!this.personalInfo) {
      return html`<div class="internatioanl-passport">No data available</div>`;
    }

    const { personalInfo } = this;

    return html`
      <div class="internatioanl-passport">
      <div class="internatioanl-passport-frontside">
        <img alt="Photo" class="photo" src="${personalInfo.photo}" >
        <div class="info-row user-name">
          <span class="value">${personalInfo.name}</span>
        </div>
        <div class="info-row user-surname">
          <span class="value">${personalInfo.surname}</span>
        </div>
        <div class="info-row user-patronymic">
          <span class="value">${personalInfo.patronymic}</span>
        </div>

        <div class="info-row passport-number">
          <span class="value">${personalInfo.passport_number}</span>
        </div>

        <div class="info-row date-of-birth">
          <span class="value">${personalInfo.date_of_birth}</span>
        </div>
        <div class="info-row place-of-birth">
          <span class="value">${personalInfo.place_of_birth}</span>
        </div>

        <div class="info-row user-gender">
          <span class="value">${personalInfo.gender}</span>
        </div>

        <div class="info-row date-of-issue">
          <span class="value">${personalInfo.date_of_issue}</span>
        </div>
        <div class="info-row date-of-expiry">
          <span class="value">${personalInfo.date_of_expiry}</span>
        </div>
        <div class="info-row place-of-issue">
          <span class="value">${personalInfo.place_of_issue}</span>
        </div>
        <div class="info-row user-citizenship">
          <span class="value">${personalInfo.citizenship}</span>
        </div>
        </div>
        </div>
        `;
      }
      // <div class="info-row user-p">
      //   <span class="value"> p< uzb ${personalInfo.name}  </span>
      // </div>

  override _onClick(): void {
    console.log('International Passport Card clicked');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'international-passport-card': InternationalPassportCard;
  }
}

