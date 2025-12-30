import { css, type CSSResultGroup } from 'lit';

export class InternationalPassportStyle {
  static styles: CSSResultGroup = css`
    .internatioanl-passport {
    width: 450px;
    height: 281px;
    transform-style: preserve-3d;
    transition: transform .8s ease;
    position: relative;
    cursor: pointer;
}

.internatioanl-passport.flipped {
    transform: rotateY(180deg);
}


.internatioanl-passport-frontside {
    background-image: url('./src/assets/internation-passport.svg');
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
    width: 118px;
    height: 152px;
    top: 65px;
    left: 12px;
    border-radius: 4px;
    position: absolute;
    z-index: 0;
}

.user-name {
    top: 62px;
    left: 140px;
}

.user-surname {
    top: 82px;
    left: 140px;
}

.user-patronymic {
    top: 102px;
    left: 140px;
}

.date-of-birth {
    top: 142px;
    left: 140px;
}

.place-of-birth {
    top: 162px;
    left: 140px;
}

.date-of-issue {
    top: 192px;
    left: 140px;
}

.date-of-expiry {
    top: 212px;
    left: 140px;
}

.passport-number {
    top: 34px;
    right: 75px;
}

.user-citizenship {
    top: 122px;
    left: 140px;
}


.place-of-birth {
    top: 162px;
    left: 200px;
}

.place-of-issue {
    top: 192px;
    left: 275px;
}


.user-gender {
    top: 162px;
    left: 140px;
}
.user-p {
    bottom: 20px;
    left: 25px;

}
  `;
}

