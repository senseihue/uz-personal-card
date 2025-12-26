import { css, unsafeCSS, type CSSResultGroup } from 'lit';
import militryidcard from '../assets/militry-front.svg'
import militryidcardback from '../assets/militry-back.svg'
export class MilitryIdCardStyle {
  static styles: CSSResultGroup = css`
    .militry-id-card {
    width: 450px;
    height: 281px;
    transform-style: preserve-3d;
    transition: transform .8s ease;
    position: relative;
    cursor: pointer;
}

.militry-id-card.flipped {
    transform: rotateY(180deg);
}


.militry-id-card-frontside {
    background-image: url('${unsafeCSS(militryidcard)}');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.militry-id-card-backside {
    transform: rotateY(180deg);
    background-image: url('${unsafeCSS(militryidcardback)}');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}


.info-row {
    position: absolute;
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

.photo {
    width: 131px;
    height: 168px;
    top: 67px;
    left: 14px;
    border-radius: 6px;
    position: absolute;
    z-index: 0;
}

.user-surname {
    top: 106px;
    left: 155px;
}

.user-name {
    top: 73px;
    left: 155px;
}

.user-patronymic {
    top: 140px;
    left: 155px;
}

.user-birth-date {
    top: 173px;
    left: 155px;
}

.date-of-issue {
    top: 205px;
    left: 155px;
}

.place-of-issue {
    top: 238px;
    left: 155px;
}

.passport-number {
    top: 248px;
    right: 20px;
}

.user-citizenship {
    top: 217px;
    right: 20px;
}

.user-gender {
    bottom: 105px;
    right: 35px;
}

.user-pin {
    bottom: 24px;
    right: 38px;
}

.user-nationality {
    top: 55px;
    left: 20px;
}

.user-birth-place {
    top: 89px;
    left: 20px;
}

.place-of-issue {
    top: 237px;
    left: 155px;
}

.id-number {
    bottom: 57px;
    right: 38px;
}

.user-personal-number {
    left: 20px;
    top: 22px;
}

.user-specialty {
    left: 20px;
    top: 135px;
}

.user-martial-status {
    left: 20px;
    top: 168px;
}

.user-atms {
    left: 20px;
    top: 215px;
}

.user-rank {
    left: 20px;
    top: 247px;

}

.user-hhom {
    right: 140px;
    top: 22px;
}

.user-dda {
    left: 270px;
    max-width: 135px;
    top: 103px;
}

.user-registred_date {
    left: 270px;
    top: 165px;
}

.user-head-of-dda {
    left: 270px;
    top: 212px;
}
  `;
}