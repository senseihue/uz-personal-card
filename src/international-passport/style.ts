import { css, type CSSResultGroup } from 'lit';

export class InternationalPassportStyle {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      background: url('../assets/internation-passport.svg') center/cover no-repeat;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .card.small {
      max-width: 300px;
      font-size: 12px;
    }

    .card.medium {
      max-width: 400px;
      font-size: 14px;
    }

    .card.large {
      max-width: 500px;
      font-size: 16px;
    }

    .header {
      font-weight: bold;
      margin-bottom: 12px;
      border-bottom: 2px solid #333;
      padding-bottom: 8px;
    }

    .info-row {
      margin: 8px 0;
      display: flex;
      justify-content: space-between;
    }

    .label {
      font-weight: bold;
      color: #666;
    }

    .value {
      color: #333;
    }

    .photo {
      width: 100px;
      height: 120px;
      object-fit: cover;
      border-radius: 4px;
      margin: 12px 0;
    }

    .section {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #eee;
    }

    .document-item {
      margin: 8px 0;
      padding: 8px;
      background: #f9f9f9;
      border-radius: 4px;
    }

    .pins-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }

    .pin-item {
      padding: 4px 8px;
      background: #e0e0e0;
      border-radius: 4px;
    }
  `;
}

