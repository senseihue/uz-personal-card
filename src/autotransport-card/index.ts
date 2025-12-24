import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../core/index.ts';
import { AUTOTRANSPORT_CARD_PERSONAL_INFO, Size } from '../types.ts';
import { AutotransportCardStyle } from './style.ts';

/**
 * Autotransport Card Component
 * 
 * @element autotransport-card
 */
@customElement('autotransport-card')
export class AutotransportCard extends BaseComponent {
  static override styles = AutotransportCardStyle.styles;

  @property({ type: Object })
  personalInfo?: AUTOTRANSPORT_CARD_PERSONAL_INFO;

  @property({ type: String  })
  size: Size = Size.MEDIUM;

  override render() {
    if (!this.personalInfo) {
      return html`<div class="card">No data available</div>`;
    }

    const { personalInfo } = this;
    const sizeClass = this.size.toLowerCase();

    return html`
      <div class="card ${sizeClass}">
        <div class="header">Autotransport Card</div>
        
        ${personalInfo.photo ? html`
          <img src="${personalInfo.photo}" alt="Photo" class="photo" />
        ` : ''}

        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value">${personalInfo.name} ${personalInfo.surname} ${personalInfo.patronymic}</span>
        </div>

        <div class="info-row">
          <span class="label">PIN:</span>
          <span class="value">${personalInfo.pin}</span>
        </div>

        <div class="info-row">
          <span class="label">Passport Number:</span>
          <span class="value">${personalInfo.passport_number}</span>
        </div>

        <div class="info-row">
          <span class="label">Date of Birth:</span>
          <span class="value">${personalInfo.date_of_birth}</span>
        </div>

        <div class="info-row">
          <span class="label">Place of Birth:</span>
          <span class="value">${personalInfo.place_of_birth}</span>
        </div>

        <div class="info-row">
          <span class="label">Gender:</span>
          <span class="value">${personalInfo.gender}</span>
        </div>

        <div class="info-row">
          <span class="label">Date of Issue:</span>
          <span class="value">${personalInfo.date_of_issue}</span>
        </div>

        <div class="info-row">
          <span class="label">Date of Expiry:</span>
          <span class="value">${personalInfo.date_of_expiry}</span>
        </div>
      </div>
    `;
  }

  override _onClick(): void {
    console.log('Autotransport Card clicked');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'autotransport-card': AutotransportCard;
  }
}

