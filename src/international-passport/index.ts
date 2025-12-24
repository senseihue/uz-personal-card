import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../core/index.ts';
import { INTERNATIONAL_PASSPORT_PERSONAL_INFO, Size } from '../types.ts';
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
      return html`<div class="card">No data available</div>`;
    }

    const { personalInfo } = this;
    const sizeClass = this.size.toLowerCase();

    return html`
      <div class="card ${sizeClass}">
        <div class="header">International Passport</div>
        
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
          <span class="label">Issue Place:</span>
          <span class="value">${personalInfo.issuePlace}</span>
        </div>

        <div class="info-row">
          <span class="label">Issue Date:</span>
          <span class="value">${personalInfo.issueDate}</span>
        </div>

        <div class="info-row">
          <span class="label">End Date:</span>
          <span class="value">${personalInfo.endDate}</span>
        </div>

        ${personalInfo.pins && personalInfo.pins.length > 0 ? html`
          <div class="section">
            <div class="label">PINs:</div>
            <div class="pins-list">
              ${personalInfo.pins.map(pin => html`
                <span class="pin-item">${pin}</span>
              `)}
            </div>
          </div>
        ` : ''}

        ${personalInfo.citizenDocuments && personalInfo.citizenDocuments.length > 0 ? html`
          <div class="section">
            <div class="label">Citizen Documents:</div>
            ${personalInfo.citizenDocuments.map(doc => html`
              <div class="document-item">
                <div><strong>${doc.document}</strong> (${doc.type})</div>
                <div>Begin: ${doc.datebegin} ${doc.dateend ? `- End: ${doc.dateend}` : ''}</div>
                <div>Status: ${doc.status}</div>
              </div>
            `)}
          </div>
        ` : ''}

        ${personalInfo.docs && personalInfo.docs.length > 0 ? html`
          <div class="section">
            <div class="label">Documents:</div>
            ${personalInfo.docs.map(doc => html`
              <div class="document-item">${doc}</div>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }

  override _onClick(): void {
    console.log('International Passport Card clicked');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'international-passport-card': InternationalPassportCard;
  }
}

