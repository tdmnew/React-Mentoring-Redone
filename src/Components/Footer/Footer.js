import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../Core/I18N';

import './Footer.scss';

export default function Footer() {
  const { t } = useTranslation();
  const title = t(I18N_KEYS.APP_NAME).split(' ');

  return (
    <div className="footer">
      <h4 className="footer__logo">
        <span className="footer__logo--left">{title[0]}</span>
        <span className="footer__logo--right">{title[1]}</span>
      </h4>
    </div>
  );
}
