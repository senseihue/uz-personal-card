import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../core/index.ts';
import { ID_CARD_PERSONAL_INFO, Size } from '../types.ts';
import { IdCardStyle } from './style.ts';

/**
 * ID Card Component
 * 
 * @element id-card
 */
@customElement('id-card')
export class IdCard extends BaseComponent {
  static override styles = IdCardStyle.styles;

  @property({ type: Object })
  personalInfo?: ID_CARD_PERSONAL_INFO;

  @property({ type: String })
  size: Size = Size.MEDIUM;

  @property({ type: Boolean })
  private flipped = false;

  override render() {
    if (!this.personalInfo) {
      return html`<div class="card">No data available</div>`;
    }

    const { personalInfo } = this;
    const sizeClass = this.size.toLowerCase();

    return html`
      <div class="card ${sizeClass} ${this.flipped ? 'flipped' : ''}" @click=${this._onClick}>
        
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

        <div class="info-row  user-birth-date">
          <span class="value">${personalInfo.date_of_birth}</span>
        </div>



        <div class="info-row date-of-issue">
          <span class="value">${personalInfo.date_of_issue}</span>
        </div>

        <div class="info-row date-of-expiry">
          <span class="value">${personalInfo.date_of_expiry}</span>
        </div>


        <div class="info-row user-citizenship">
          <span class="value">${personalInfo.citizenship}</span>
        </div>


        <div class="info-row user-gender">
          <span class="value">${personalInfo.gender}</span>
        </div>

      </div>
      <div class="card-backside">
        <div class="info-row user-pin">
          <span class="value">${personalInfo.pin}</span>
        </div>
        
        <div class="info-row user-nationality">
          <span class="value">${personalInfo.nationality}</span>
        </div>
        
        <div class="info-row  user-birth-place">
          <span class="value">${personalInfo.place_of_birth}</span>
        </div>
        <div class="info-row place-of-issue">
          <span class="value">${personalInfo.place_of_issue}</span>
        </div>
      </div>
      </div>
    `;
  }

  override _onClick(): void {
    this.flipped = !this.flipped;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'id-card': IdCard;
  }
}
