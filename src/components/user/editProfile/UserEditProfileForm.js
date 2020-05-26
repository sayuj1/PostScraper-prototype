import React, { Fragment, useContext, useState, useEffect } from "react";
import { Row, Col, Form, Input, Radio, Select } from "antd";

import UserContext from "../../../context/userContext/userContext";
import EditUserProfileBtn from "../../buttons/user/editProfile/UserEditProfileForm/EditUserProfileBtn";
import SaveUserProfileBtn from "../../buttons/user/editProfile/UserEditProfileForm/SaveUserProfileBtn";
import Styles from "../../../styles/user/editProfile/UserEditProfileForm.module.css";
const { TextArea } = Input;
const { Option } = Select;

const UserEditProfileForm = () => {
  const { user } = useContext(UserContext);
  const [userInfo, setuserInfo] = useState({ ...user });
  const [readOnly, setreadOnly] = useState(true);
  // updating user-info value on updating user state
  useEffect(() => {
    setuserInfo({ ...user });
  }, [user]);

  const handleChange = (e) => {
    if (e.target.name == "firstname" || e.target.name == "lastname") {
      // removing whitespaces
      setuserInfo({
        ...userInfo,
        [e.target.name]: e.target.value.trim(),
      });
    } else {
      setuserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      });
    }
  };
  const countryLists = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan (Province of China)",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  return (
    <Fragment>
      <Form>
        {/* username */}
        <Row className={Styles.row}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
          >
            <label className={Styles.label}>Username</label>
            <Input
              name="username"
              value={userInfo.username}
              className={`${Styles.formInputs}`}
              disabled
              required
            />
          </Col>
        </Row>
        {/* firstname & lastname */}
        <Row className={Styles.row}>
          <Col
            xs={{ span: 11 }}
            sm={{ span: 11 }}
            md={{ span: 8, offset: 2 }}
            lg={{ span: 8, offset: 2 }}
          >
            <label className={Styles.label}>Firstname</label>
            <Input
              name="firstname"
              value={userInfo.firstname}
              onChange={handleChange}
              readOnly={readOnly}
              className={Styles.formInputs}
              required
            />
          </Col>
          <Col
            xs={{ span: 11, offset: 2 }}
            sm={{ span: 11 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <label className={Styles.label}>Lastname</label>
            <Input
              name="lastname"
              value={userInfo.lastname}
              onChange={handleChange}
              readOnly={readOnly}
              className={Styles.formInputs}
              required
            />
          </Col>
        </Row>
        {/* user description */}
        <Row className={Styles.row}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 18, offset: 2 }}
            lg={{ span: 18, offset: 2 }}
          >
            <label className={Styles.label}>About You</label>
            <TextArea
              name="userDescription"
              onChange={handleChange}
              value={userInfo.userDescription}
              placeholder="A short brief description about you..."
              autoSize={{ minRows: 6, maxRows: 6 }}
              maxLength={500}
              readOnly={readOnly}
              className={Styles.userDescription}
              allowClear={true}
            />
          </Col>
        </Row>
        {/* user gender */}
        <Row className={Styles.row}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 18, offset: 2 }}
            lg={{ span: 18, offset: 2 }}
          >
            <label className={Styles.label}>Gender</label>
            <br />
            <Radio.Group
              name="gender"
              defaultValue={userInfo.gender}
              onChange={handleChange}
              disabled={readOnly}
            >
              <Radio value="male" className={Styles.radioGroup}>
                <span className={Styles.radioLabels}>Male</span>
              </Radio>
              <Radio value="female" className={Styles.radioGroup}>
                <span className={Styles.radioLabels}>Female</span>
              </Radio>
              <Radio value="other" className={Styles.radioGroup}>
                <span className={Styles.radioLabels}>Other</span>
              </Radio>
            </Radio.Group>
          </Col>
        </Row>
        {/* user location */}
        <Row className={Styles.row}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 18, offset: 2 }}
            lg={{ span: 18, offset: 2 }}
          >
            <label className={Styles.label}>Location</label>
            <br />

            <Select
              disabled={readOnly}
              size="large"
              defaultValue={
                userInfo.location ? userInfo.location : "Select your location"
              }
              showSearch
              style={{ width: "100%" }}
              optionFilterProp="children"
              onChange={(value) =>
                setuserInfo({ ...userInfo, location: value })
              }
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {countryLists.map((countryList) => (
                <Option key={countryList} value={countryList}>
                  {countryList}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        {/* edit-btn & save-btn */}
        <Row className={Styles.rowBtns}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 18, offset: 2 }}
            lg={{ span: 18, offset: 2 }}
          >
            {readOnly ? (
              <EditUserProfileBtn setreadOnly={setreadOnly} />
            ) : (
              <SaveUserProfileBtn
                setreadOnly={setreadOnly}
                userInfo={userInfo}
                setuserInfo={setuserInfo}
              />
            )}
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default UserEditProfileForm;
