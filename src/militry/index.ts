import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../core/index.ts';
import { MILITRY_ID_CARD_INFO, Size } from '../types.ts';
import { MilitryIdCardStyle } from './style.ts';

/**
 * Militry ID Card Component
 * 
 * @element militry-id-card
 */
@customElement('militry-id-card')
export class MilitryIdCard extends BaseComponent {
  static override styles = MilitryIdCardStyle.styles;

  @property({ type: Object })
  personalInfo?: MILITRY_ID_CARD_INFO;

  @property({ type: String })
  size: Size = Size.MEDIUM;

  @property({ type: Boolean })
  private flipped = !false;

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

        <div class="info-row  user-birth-date">
          <span class="value">${personalInfo.date_of_birth}</span>
        </div>

        <div class="info-row date-of-issue">
          <span class="value">${personalInfo.date_of_issue}</span>
        </div>

        <div class="info-row place-of-issue">
          <span class="value">${personalInfo.place_of_issue}</span>
        </div>

        <div class="info-row user-gender">
          <span class="value">${personalInfo.gender}</span>
        </div>

        <div class="info-row id-number">
          <span class="value">${personalInfo.militry_series} ${personalInfo.id_number}</span>
        </div>
        <div class="info-row user-pin">
          <span class="value">${personalInfo.pin}</span>
        </div>

      </div>
      <div class="card-backside">
        <div class="info-row user-personal-number">
          <span class="value">${personalInfo.personal_number}</span>
        </div>
        
        <div class="info-row user-nationality">
          <span class="value">${personalInfo.nationality}</span>
        </div>
        
        <div class="info-row  user-birth-place">
          <span class="value">${personalInfo.place_of_birth}</span>
        </div>

        <div class="info-row user-specialty">
          <span class="value">${personalInfo.main_civilian_specialty}</span>
        </div>

        <div class="info-row user-martial-status">
          <span class="value">${personalInfo.martial_status}</span>
        </div>

        <div class="info-row user-atms">
          <span class="value">${personalInfo.atms}</span>
        </div>

        <div class="info-row user-rank">
          <span class="value">${personalInfo.militry_rank}</span>
        </div>
        <div class="info-row user-hhom">
          <span class="value">${personalInfo.hhom}</span>
        </div>
        <div class="info-row user-dda">
          <span class="value">${personalInfo.dda}</span>
        </div>
        <div class="info-row user-registred_date">
          <span class="value">${personalInfo.registred_date}</span>
        </div>
        <div class="info-row user-head-of-dda">
          <span class="value">${personalInfo.head_of_dda}</span>
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
    'militry-id-card': MilitryIdCard;
  }
}
