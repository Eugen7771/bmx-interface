import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import messages_de from './locales/de/messages';
import messages_en from './locales/en/messages';
import messages_es from './locales/es/messages';
import messages_fr from './locales/fr/messages';
import messages_ja from './locales/ja/messages';
import messages_ko from './locales/ko/messages';
import messages_pseudo from './locales/pseudo/messages';
import messages_ru from './locales/ru/messages';
import messages_zh from './locales/zh/messages';

const messages = {
  de: messages_de,
  en: messages_en,
  es: messages_es,
  fr: messages_fr,
  ja: messages_ja,
  ko: messages_ko,
  pseudo: messages_pseudo,
  ru: messages_ru,
  zh: messages_zh,
};

const language =
  navigator.language.split(/[-_]/)[0] ||
  navigator.userLanguage.split(/[-_]/)[0] ||
  'en';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
