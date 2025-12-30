import { css, type CSSResultGroup } from 'lit';

export class AutotransportCardStyle {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      background: white;
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
  `;
}

