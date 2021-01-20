import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ENTER_KEY } from '../../../Core/Constants';
import { I18N_KEYS } from '../../../Core/I18N';

export default function Search() {
  const { t } = useTranslation();
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    history.push(`/search/${term}`);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search">
      <h2 className="search title">{t(I18N_KEYS.SEARCH_TITLE)}</h2>
      <div className="search search-bar">
        <input
          className="search search-bar__input"
          placeholder={t(I18N_KEYS.SEARCH_PLACEHOLDER)}
          value={term}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button className="search search-bar__btn" onClick={handleSearch}>
          {t(I18N_KEYS.SEARCH_BUTTON)}
        </button>
      </div>
    </div>
  );
}
