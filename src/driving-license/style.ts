import { css, unsafeCSS, type CSSResultGroup } from 'lit';
import bg from '../assets/driving-license.svg'
export class DrivingLicenseStyle {
  static styles: CSSResultGroup = css`
           .card {
           width: 450px;
           height: 281px;
           position: relative;
       }

       .photo {
           width: 107px;
           height: 136px;
           top: 73px;
           left: 13px;
           border-radius: 6px;
           position: absolute;
           z-index: 0;
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


       .value {
           margin: 0px;
           font-weight: 600;
           line-height: 1.4;
           font-family: "Golos Text", "Trebuchet MS", "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
           letter-spacing: -0.01em;
           font-size: 12px;
           color: rgb(11, 11, 12);
       }


       .info-row {
           position: absolute;
       }

       .user-name {

           top: 73px;
           left: 150px;
       }


       .user-surname {
           top: 88px;
           left: 150px;
       }

       .user-patronymic {
           top: 104px;
           left: 150px;
       }

       .passport-number {
           top: 181px;
           left: 150px;
       }

       .user-birth-info,
       .date-of-issue {
           display: flex;
           align-items: center;
           gap: 10px;
           max-width: 250px;
           flex-wrap: nowrap;
           overflow: hidden;
       }

       .user-birth-info .value {
           max-width: 150px;
           overflow: hidden;
           white-space: nowrap;
       }

       .user-birth-info {
           top: 120px;
           left: 150px;

       }

       .date-of-issue {
           top: 135px;
           left: 150px;
       }

       .date-of-expiry {
           top: 135px;
           left: 264px;
       }

       .place-of-issue {
           top: 150px;
           left: 150px;
       }

       .user-pin {
           top: 165px;
           left: 150px;
       }

       .user-birth-place {
           top: 197px;
           left: 150px;
           font-size: 12px;
           max-width: 250px;
           line-height: 1;
       }


       .categories {
           position: absolute;
           bottom: 24px;
           left: 150px;
           font-size: 12px;
           max-width: 250px;
       }
  `;
}

