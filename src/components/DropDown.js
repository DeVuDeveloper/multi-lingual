/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { render } from 'react-dom';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import FlagIcon from './FlagIcon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function DropDown() {
  const [countries] = useState([
    { code: 'de' },
    { code: 'gb', value: 'en' },
    { code: 'fr', value: 'fr' },
    { code: 'pl', value: 'pl' },
    { code: 'fr', value: 'fr' },
    { code: 'ru', value: 'ru' },
  ]);

  const [toggleContents, setToggleContents] = useState('Language');
  const [selectedCountry, setSelectedCountry] = useState();
  const { t } = useTranslation();

  const [lang, setLang] = useState('en');
  const handleChange = (e) => {
    setLang(e.target.value);
    const loc = 'http://localhost:3000/';
    window.location.replace(loc + '?lng=' + e.target.value);
  };

  return (
    <div className="App">
      <div className="App">
        <h1>{t('welcome')}</h1>

        {/* <select value={lang} onChange={handleChange}>
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select> */}
      </div>

      <Form>
        <Dropdown
          onSelect={(eventKey) => {
            const { code, value } = countries.find(
              ({ code }) => eventKey === code,
              ({ vale }) => eventKey === code,
            );

            setSelectedCountry(eventKey);
            setToggleContents(
              <>
                <FlagIcon code={code} />
              </>,
            );
          }}
        >
          <Dropdown.Toggle
            id="dropdown-flags"
            className="text-left btn-sm drop"
          >
            {toggleContents}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {countries.map(({ code, value }) => (
              <Dropdown.Item key={code} eventKey={code}>
                <FlagIcon code={code} value={lang} onChange={handleChange} />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </div>
  );
}
export default DropDown;
