import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../core/index.ts';
import { DRIVING_LICENSE_PERSONAL_INFO, Size } from '../types.ts';
import { DrivingLicenseStyle } from './style.ts';
/**
 * Driving License Card Component
 * 
 * @element driving-license-card
 */
@customElement('driving-license-card')
export class DrivingLicenseCard extends BaseComponent {
  static override styles = DrivingLicenseStyle.styles;

  @property({ type: Object })
  personalInfo?: DRIVING_LICENSE_PERSONAL_INFO;

  @property({ type: String })
  size: Size = Size.MEDIUM;

  override render() {
    if (!this.personalInfo) {
      return html`<div class="card">No data available</div>`;
    }

    const { personalInfo } = this;
    const sizeClass = this.size.toLowerCase();
    return html`
      <div class="card ${sizeClass}">
        <div class="card-frontside">
      ${personalInfo.photo ? html`
      <img src="${personalInfo.photo}" alt="Photo" class="photo" />
      ` : ''}
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

      <div class="info-row  user-birth-info">
        <span class="value">${personalInfo.place_of_birth}</span>
        <span class="value">${personalInfo.date_of_birth}</span>
      </div>



      <div class="info-row date-of-issue">
        <span class="value">${personalInfo.date_of_issue}</span>
        <span class="value">${personalInfo.date_of_expiry}</span>

      </div>
      <div class="info-row place-of-issue">
        <span class="value">${personalInfo.place_of_birth}</span>
      </div>
      <div class="info-row user-pin">
        <span class="value">${personalInfo.pin}</span>
      </div>
      <div class="info-row passport-number">
        <span class="value">${personalInfo.passport_number}</span>
      </div>
      <div class="info-row  user-birth-place">
        <span class="value">${personalInfo.place_of_birth}</span>
      </div>
      ${personalInfo.categories && personalInfo.categories.length > 0 ? html`
        <div class="categories">
          <div class="label">Categories:</div>
          ${personalInfo.categories.map(cat => html`
            <span class="category-item">${cat.category}</span>
          `)}
        </div>
      ` : ''}
    </div>

        
      </div>
    `;
  }

  override _onClick(): void {
    console.log('Driving License Card clicked');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'driving-license-card': DrivingLicenseCard;
  }
}

