import React from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_KEYS } from '../../Core/I18N';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Fallback message
      return <h1>{t(I18N_KEYS.ERROR_TEXT)}</h1>;
    }

    return this.props.children;
  }
}
