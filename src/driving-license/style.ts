import { css, unsafeCSS, type CSSResultGroup } from 'lit';
import bg from '../assets/driving-license.svg'
export class DrivingLicenseStyle {
  static styles: CSSResultGroup = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
       width: 450px;
      height: 281px;
      position: relative;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .card.small {
      font-size: 12px;
    }

    .card.medium {
      font-size: 14px;
    }

    .card.large {
      font-size: 16px;
    }

    .card-frontside {
            background-image: url('${unsafeCSS(bg)}');
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    .header {
      font-weight: bold;
      margin-bottom: 12px;
      border-bottom: 2px solid #333;
      padding-bottom: 8px;
    }

    .info-row {
    }

    .label {
      font-weight: bold;
      color: #666;
    }

    .value {
      color: #333;
    }

    .categories {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #eee;
    }

    .category-item {
      display: inline-block;
      margin: 4px 8px 4px 0;
      padding: 4px 8px;
      background: #f0f0f0;
      border-radius: 4px;
    }
  `;
}

