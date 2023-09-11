function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}  
var all_countries1 =[

    {
        name : "Andorra",
        code : 'AD',
        coords : [42.5, 1.5],
        style : {fill:'green'}
        },
        {
        name : "United Arab Emirates",
        code : 'AE',
        coords : [24, 54],
        style : {fill:'green'}
        },
        {
        name : "Afghanistan",
        code : 'AF',
        coords : [33, 65],
        style : {fill:'green'}
        },
        {
        name : "Antigua and Barbuda",
        code : 'AG',
        coords : [17.05, -61.8],
        style : {fill:'green'}
        },
        {
        name : "Anguilla",
        code : 'AI',
        coords : [18.25, -63.17],
        style : {fill:'green'}
        },
        {
        name : "Albania",
        code : 'AL',
        coords : [41, 20],
        style : {fill:'green'}
        },
        {
        name : "Armenia",
        code : 'AM',
        coords : [40, 45],
        style : {fill:'green'}
        },
        {
        name : "Netherlands Antilles",
        code : 'AN',
        coords : [12.25, -68.75],
        style : {fill:'green'}
        },
        {
        name : "Angola",
        code : 'AO',
        coords : [-12.5, 18.5],
        style : {fill:'green'}
        },
        {
        name : "Asia/Pacific Region",
        code : 'AP',
        coords : [35, 105],
        style : {fill:'green'}
        },
        {
        name : "Antarctica",
        code : 'AQ',
        coords : [-90, 0],
        style : {fill:'green'}
        },
        {
        name : "Argentina",
        code : 'AR',
        coords : [-34, -64],
        style : {fill:'green'}
        },
        {
        name : "American Samoa",
        code : 'AS',
        coords : [-14.33, -170],
        style : {fill:'green'}
        },
        {
        name : "Austria",
        code : 'AT',
        coords : [47.33, 13.33],
        style : {fill:'green'}
        },
        {
        name : "Australia",
        code : 'AU',
        coords : [-27, 133],
        style : {fill:'green'}
        },
        {
        name : "Aruba",
        code : 'AW',
        coords : [12.5, -69.97],
        style : {fill:'green'}
        },
        {
        name : "Azerbaijan",
        code : 'AZ',
        coords : [40.5, 47.5],
        style : {fill:'green'}
        },
        {
        name : "Bosnia and Herzegovina",
        code : 'BA',
        coords : [44, 18],
        style : {fill:'green'}
        },
        {
        name : "Barbados",
        code : 'BB',
        coords : [13.17, -59.53],
        style : {fill:'green'}
        },
        {
        name : "Bangladesh",
        code : 'BD',
        coords : [24, 90],
        style : {fill:'green'}
        },
        {
        name : "Belgium",
        code : 'BE',
        coords : [50.83, 4],
        style : {fill:'green'}
        },
        {
        name : "Burkina Faso",
        code : 'BF',
        coords : [13, -2],
        style : {fill:'green'}
        },
        {
        name : "Bulgaria",
        code : 'BG',
        coords : [43, 25],
        style : {fill:'green'}
        },
        {
        name : "Bahrain",
        code : 'BH',
        coords : [26, 50.55],
        style : {fill:'green'}
        },
        {
        name : "Burundi",
        code : 'BI',
        coords : [-3.5, 30],
        style : {fill:'green'}
        },
        {
        name : "Benin",
        code : 'BJ',
        coords : [9.5, 2.25],
        style : {fill:'green'}
        },
        {
        name : "Bermuda",
        code : 'BM',
        coords : [32.33, -64.75],
        style : {fill:'green'}
        },
        {
        name : "Brunei Darussalam",
        code : 'BN',
        coords : [4.5, 114.67],
        style : {fill:'green'}
        },
        {
        name : "Bolivia",
        code : 'BO',
        coords : [-17, -65],
        style : {fill:'green'}
        },
        {
        name : "Brazil",
        code : 'BR',
        coords : [-10, -55],
        style : {fill:'green'}
        },
        {
        name : "Bahamas",
        code : 'BS',
        coords : [24.25, -76],
        style : {fill:'green'}
        },
        {
        name : "Bhutan",
        code : 'BT',
        coords : [27.5, 90.5],
        style : {fill:'green'}
        },
        {
        name : "Bouvet Island",
        code : 'BV',
        coords : [-54.43, 3.4],
        style : {fill:'green'}
        },
        {
        name : "Botswana",
        code : 'BW',
        coords : [-22, 24],
        style : {fill:'green'}
        },
        {
        name : "Belarus",
        code : 'BY',
        coords : [53, 28],
        style : {fill:'green'}
        },
        {
        name : "Belize",
        code : 'BZ',
        coords : [17.25, -88.75],
        style : {fill:'green'}
        },
        {
        name : "Canada",
        code : 'CA',
        coords : [60, -95],
        style : {fill:'green'}
        },
        {
        name : "Cocos (Keeling) Islands",
        code : 'CC',
        coords : [-12.5, 96.83],
        style : {fill:'green'}
        },
        {
        name : "Congo, The Democratic Republic of the",
        code : 'CD',
        coords : [0, 25],
        style : {fill:'green'}
        },
        {
        name : "Central African Republic",
        code : 'CF',
        coords : [7, 21],
        style : {fill:'green'}
        },
        {
        name : "Congo",
        code : 'CG',
        coords : [-1, 15],
        style : {fill:'green'}
        },
        {
        name : "Switzerland",
        code : 'CH',
        coords : [47, 8],
        style : {fill:'green'}
        },
        {
        name : "Cote d'Ivoire",
        code : 'CI',
        coords : [8, -5],
        style : {fill:'green'}
        },
        {
        name : "Cook Islands",
        code : 'CK',
        coords : [-21.23, -159.77],
        style : {fill:'green'}
        },
        {
        name : "Chile",
        code : 'CL',
        coords : [-30, -71],
        style : {fill:'green'}
        },
        {
        name : "Cameroon",
        code : 'CM',
        coords : [6, 12],
        style : {fill:'green'}
        },
        {
        name : "China",
        code : 'CN',
        coords : [35, 105],
        style : {fill:'green'}
        },
        {
        name : "Colombia",
        code : 'CO',
        coords : [4, -72],
        style : {fill:'green'}
        },
        {
        name : "Costa Rica",
        code : 'CR',
        coords : [10, -84],
        style : {fill:'green'}
        },
        {
        name : "Cuba",
        code : 'CU',
        coords : [21.5, -80],
        style : {fill:'green'}
        },
        {
        name : "Cape Verde",
        code : 'CV',
        coords : [16, -24],
        style : {fill:'green'}
        },
        {
        name : "Christmas Island",
        code : 'CX',
        coords : [-10.5, 105.67],
        style : {fill:'green'}
        },
        {
        name : "Cyprus",
        code : 'CY',
        coords : [35, 33],
        style : {fill:'green'}
        },
        {
        name : "Czech Republic",
        code : 'CZ',
        coords : [49.75, 15.5],
        style : {fill:'green'}
        },
        {
        name : "Germany",
        code : 'DE',
        coords : [51, 9],
        style : {fill:'green'}
        },
        {
        name : "Djibouti",
        code : 'DJ',
        coords : [11.5, 43],
        style : {fill:'green'}
        },
        {
        name : "Denmark",
        code : 'DK',
        coords : [56, 10],
        style : {fill:'green'}
        },
        {
        name : "Dominica",
        code : 'DM',
        coords : [15.42, -61.33],
        style : {fill:'green'}
        },
        {
        name : "Dominican Republic",
        code : 'DO',
        coords : [19, -70.67],
        style : {fill:'green'}
        },
        {
        name : "Algeria",
        code : 'DZ',
        coords : [28, 3],
        style : {fill:'green'}
        },
        {
        name : "Ecuador",
        code : 'EC',
        coords : [-2, -77.5],
        style : {fill:'green'}
        },
        {
        name : "Estonia",
        code : 'EE',
        coords : [59, 26],
        style : {fill:'green'}
        },
        {
        name : "Egypt",
        code : 'EG',
        coords : [27, 30],
        style : {fill:'green'}
        },
        {
        name : "Western Sahara",
        code : 'EH',
        coords : [24.5, -13],
        style : {fill:'green'}
        },
        {
        name : "Eritrea",
        code : 'ER',
        coords : [15, 39],
        style : {fill:'green'}
        },
        {
        name : "Spain",
        code : 'ES',
        coords : [40, -4],
        style : {fill:'green'}
        },
        {
        name : "Ethiopia",
        code : 'ET',
        coords : [8, 38],
        style : {fill:'green'}
        },
        {
        name : "Europe",
        code : 'EU',
        coords : [47, 8],
        style : {fill:'green'}
        },
        {
        name : "Finland",
        code : 'FI',
        coords : [64, 26],
        style : {fill:'green'}
        },
        {
        name : "Fiji",
        code : 'FJ',
        coords : [-18, 175],
        style : {fill:'green'}
        },
        {
        name : "Falkland Islands (Malvinas)",
        code : 'FK',
        coords : [-51.75, -59],
        style : {fill:'green'}
        },
        {
        name : "Micronesia, Federated States of",
        code : 'FM',
        coords : [6.92, 158.25],
        style : {fill:'green'}
        },
        {
        name : "Faroe Islands",
        code : 'FO',
        coords : [62, -7],
        style : {fill:'green'}
        },
        {
        name : "France",
        code : 'FR',
        coords : [46, 2],
        style : {fill:'green'}
        },
        {
        name : "Gabon",
        code : 'GA',
        coords : [-1, 11.75],
        style : {fill:'green'}
        },
        {
        name : "United Kingdom",
        code : 'GB',
        coords : [54, -2],
        style : {fill:'green'}
        },
        {
        name : "Grenada",
        code : 'GD',
        coords : [12.12, -61.67],
        style : {fill:'green'}
        },
        {
        name : "Georgia",
        code : 'GE',
        coords : [42, 43.5],
        style : {fill:'green'}
        },
        {
        name : "French Guiana",
        code : 'GF',
        coords : [4, -53],
        style : {fill:'green'}
        },
        {
        name : "Ghana",
        code : 'GH',
        coords : [8, -2],
        style : {fill:'green'}
        },
        {
        name : "Gibraltar",
        code : 'GI',
        coords : [36.18, -5.37],
        style : {fill:'green'}
        },
        {
        name : "Greenland",
        code : 'GL',
        coords : [72, -40],
        style : {fill:'green'}
        },
        {
        name : "Gambia",
        code : 'GM',
        coords : [13.47, -16.57],
        style : {fill:'green'}
        },
        {
        name : "Guinea",
        code : 'GN',
        coords : [11, -10],
        style : {fill:'green'}
        },
        {
        name : "Guadeloupe",
        code : 'GP',
        coords : [16.25, -61.58],
        style : {fill:'green'}
        },
        {
        name : "Equatorial Guinea",
        code : 'GQ',
        coords : [2, 10],
        style : {fill:'green'}
        },
        {
        name : "Greece",
        code : 'GR',
        coords : [39, 22],
        style : {fill:'green'}
        },
        {
        name : "South Georgia and the South Sandwich Islands",
        code : 'GS',
        coords : [-54.5, -37],
        style : {fill:'green'}
        },
        {
        name : "Guatemala",
        code : 'GT',
        coords : [15.5, -90.25],
        style : {fill:'green'}
        },
        {
        name : "Guam",
        code : 'GU',
        coords : [13.47, 144.78],
        style : {fill:'green'}
        },
        {
        name : "Guinea-Bissau",
        code : 'GW',
        coords : [12, -15],
        style : {fill:'green'}
        },
        {
        name : "Guyana",
        code : 'GY',
        coords : [5, -59],
        style : {fill:'green'}
        },
        {
        name : "Hong Kong",
        code : 'HK',
        coords : [22.25, 114.17],
        style : {fill:'green'}
        },
        {
        name : "Heard Island and McDonald Islands",
        code : 'HM',
        coords : [-53.1, 72.52],
        style : {fill:'green'}
        },
        {
        name : "Honduras",
        code : 'HN',
        coords : [15, -86.5],
        style : {fill:'green'}
        },
        {
        name : "Croatia",
        code : 'HR',
        coords : [45.17, 15.5],
        style : {fill:'green'}
        },
        {
        name : "Haiti",
        code : 'HT',
        coords : [19, -72.42],
        style : {fill:'green'}
        },
        {
        name : "Hungary",
        code : 'HU',
        coords : [47, 20],
        style : {fill:'green'}
        },
        {
        name : "Indonesia",
        code : 'ID',
        coords : [-5, 120],
        style : {fill:'green'}
        },
        {
        name : "Ireland",
        code : 'IE',
        coords : [53, -8],
        style : {fill:'green'}
        },
        {
        name : "Israel",
        code : 'IL',
        coords : [31.5, 34.75],
        style : {fill:'green'}
        },
        {
        name : "India",
        code : 'IN',
        coords : [20, 77],
        style : {fill:'green'}
        },
        {
        name : "British Indian Ocean Territory",
        code : 'IO',
        coords : [-6, 71.5],
        style : {fill:'green'}
        },
        {
        name : "Iraq",
        code : 'IQ',
        coords : [33, 44],
        style : {fill:'green'}
        },
        {
        name : "Iran, Islamic Republic of",
        code : 'IR',
        coords : [32, 53],
        style : {fill:'green'}
        },
        {
        name : "Iceland",
        code : 'IS',
        coords : [65, -18],
        style : {fill:'green'}
        },
        {
        name : "Italy",
        code : 'IT',
        coords : [42.83, 12.83],
        style : {fill:'green'}
        },
        {
        name : "Jamaica",
        code : 'JM',
        coords : [18.25, -77.5],
        style : {fill:'green'}
        },
        {
        name : "Jordan",
        code : 'JO',
        coords : [31, 36],
        style : {fill:'green'}
        },
        {
        name : "Japan",
        code : 'JP',
        coords : [36, 138],
        style : {fill:'green'}
        },
        {
        name : "Kenya",
        code : 'KE',
        coords : [1, 38],
        style : {fill:'green'}
        },
        {
        name : "Kyrgyzstan",
        code : 'KG',
        coords : [41, 75],
        style : {fill:'green'}
        },
        {
        name : "Cambodia",
        code : 'KH',
        coords : [13, 105],
        style : {fill:'green'}
        },
        {
        name : "Kiribati",
        code : 'KI',
        coords : [1.42, 173],
        style : {fill:'green'}
        },
        {
        name : "Comoros",
        code : 'KM',
        coords : [-12.17, 44.25],
        style : {fill:'green'}
        },
        {
        name : "Saint Kitts and Nevis",
        code : 'KN',
        coords : [17.33, -62.75],
        style : {fill:'green'}
        },
        {
        name : "Korea, Democratic People's Republic of",
        code : 'KP',
        coords : [40, 127],
        style : {fill:'green'}
        },
        {
        name : "Korea, Republic of",
        code : 'KR',
        coords : [37, 127.5],
        style : {fill:'green'}
        },
        {
        name : "Kuwait",
        code : 'KW',
        coords : [29.34, 47.66],
        style : {fill:'green'}
        },
        {
        name : "Cayman Islands",
        code : 'KY',
        coords : [19.5, -80.5],
        style : {fill:'green'}
        },
        {
        name : "Kazakhstan",
        code : 'KZ',
        coords : [48, 68],
        style : {fill:'green'}
        },
        {
        name : "Lao People's Democratic Republic",
        code : 'LA',
        coords : [18, 105],
        style : {fill:'green'}
        },
        {
        name : "Lebanon",
        code : 'LB',
        coords : [33.83, 35.83],
        style : {fill:'green'}
        },
        {
        name : "Saint Lucia",
        code : 'LC',
        coords : [13.88, -61.13],
        style : {fill:'green'}
        },
        {
        name : "Liechtenstein",
        code : 'LI',
        coords : [47.17, 9.53],
        style : {fill:'green'}
        },
        {
        name : "Sri Lanka",
        code : 'LK',
        coords : [7, 81],
        style : {fill:'green'}
        },
        {
        name : "Liberia",
        code : 'LR',
        coords : [6.5, -9.5],
        style : {fill:'green'}
        },
        {
        name : "Lesotho",
        code : 'LS',
        coords : [-29.5, 28.5],
        style : {fill:'green'}
        },
        {
        name : "Lithuania",
        code : 'LT',
        coords : [56, 24],
        style : {fill:'green'}
        },
        {
        name : "Luxembourg",
        code : 'LU',
        coords : [49.75, 6.17],
        style : {fill:'green'}
        },
        {
        name : "Latvia",
        code : 'LV',
        coords : [57, 25],
        style : {fill:'green'}
        },
        {
        name : "Libyan Arab Jamahiriya",
        code : 'LY',
        coords : [25, 17],
        style : {fill:'green'}
        },
        {
        name : "Morocco",
        code : 'MA',
        coords : [32, -5],
        style : {fill:'green'}
        },
        {
        name : "Monaco",
        code : 'MC',
        coords : [43.73, 7.4],
        style : {fill:'green'}
        },
        {
        name : "Moldova, Republic of",
        code : 'MD',
        coords : [47, 29],
        style : {fill:'green'}
        },
        {
        name : "Montenegro",
        code : 'ME',
        coords : [42, 19],
        style : {fill:'green'}
        },
        {
        name : "Madagascar",
        code : 'MG',
        coords : [-20, 47],
        style : {fill:'green'}
        },
        {
        name : "Marshall Islands",
        code : 'MH',
        coords : [9, 168],
        style : {fill:'green'}
        },
        {
        name : "Macedonia",
        code : 'MK',
        coords : [41.83, 22],
        style : {fill:'green'}
        },
        {
        name : "Mali",
        code : 'ML',
        coords : [17, -4],
        style : {fill:'green'}
        },
        {
        name : "Myanmar",
        code : 'MM',
        coords : [22, 98],
        style : {fill:'green'}
        },
        {
        name : "Mongolia",
        code : 'MN',
        coords : [46, 105],
        style : {fill:'green'}
        },
        {
        name : "Macao",
        code : 'MO',
        coords : [22.17, 113.55],
        style : {fill:'green'}
        },
        {
        name : "Northern Mariana Islands",
        code : 'MP',
        coords : [15.2, 145.75],
        style : {fill:'green'}
        },
        {
        name : "Martinique",
        code : 'MQ',
        coords : [14.67, -61],
        style : {fill:'green'}
        },
        {
        name : "Mauritania",
        code : 'MR',
        coords : [20, -12],
        style : {fill:'green'}
        },
        {
        name : "Montserrat",
        code : 'MS',
        coords : [16.75, -62.2],
        style : {fill:'green'}
        },
        {
        name : "Malta",
        code : 'MT',
        coords : [35.83, 14.58],
        style : {fill:'green'}
        },
        {
        name : "Mauritius",
        code : 'MU',
        coords : [-20.28, 57.55],
        style : {fill:'green'}
        },
        {
        name : "Maldives",
        code : 'MV',
        coords : [3.25, 73],
        style : {fill:'green'}
        },
        {
        name : "Malawi",
        code : 'MW',
        coords : [-13.5, 34],
        style : {fill:'green'}
        },
        {
        name : "Mexico",
        code : 'MX',
        coords : [23, -102],
        style : {fill:'green'}
        },
        {
        name : "Malaysia",
        code : 'MY',
        coords : [2.5, 112.5],
        style : {fill:'green'}
        },
        {
        name : "Mozambique",
        code : 'MZ',
        coords : [-18.25, 35],
        style : {fill:'green'}
        },
        {
        name : "Namibia",
        code : 'NA',
        coords : [-22, 17],
        style : {fill:'green'}
        },
        {
        name : "New Caledonia",
        code : 'NC',
        coords : [-21.5, 165.5],
        style : {fill:'green'}
        },
        {
        name : "Niger",
        code : 'NE',
        coords : [16, 8],
        style : {fill:'green'}
        },
        {
        name : "Norfolk Island",
        code : 'NF',
        coords : [-29.03, 167.95],
        style : {fill:'green'}
        },
        {
        name : "Nigeria",
        code : 'NG',
        coords : [10, 8],
        style : {fill:'green'}
        },
        {
        name : "Nicaragua",
        code : 'NI',
        coords : [13, -85],
        style : {fill:'green'}
        },
        {
        name : "Netherlands",
        code : 'NL',
        coords : [52.5, 5.75],
        style : {fill:'green'}
        },
        {
        name : "Norway",
        code : 'NO',
        coords : [62, 10],
        style : {fill:'green'}
        },
        {
        name : "Nepal",
        code : 'NP',
        coords : [28, 84],
        style : {fill:'green'}
        },
        {
        name : "Nauru",
        code : 'NR',
        coords : [-0.53, 166.92],
        style : {fill:'green'}
        },
        {
        name : "Niue",
        code : 'NU',
        coords : [-19.03, -169.87],
        style : {fill:'green'}
        },
        {
        name : "New Zealand",
        code : 'NZ',
        coords : [-41, 174],
        style : {fill:'green'}
        },
        {
        name : "Oman",
        code : 'OM',
        coords : [21, 57],
        style : {fill:'green'}
        },
        {
        name : "Panama",
        code : 'PA',
        coords : [9, -80],
        style : {fill:'green'}
        },
        {
        name : "Peru",
        code : 'PE',
        coords : [-10, -76],
        style : {fill:'green'}
        },
        {
        name : "French Polynesia",
        code : 'PF',
        coords : [-15, -140],
        style : {fill:'green'}
        },
        {
        name : "Papua New Guinea",
        code : 'PG',
        coords : [-6, 147],
        style : {fill:'green'}
        },
        {
        name : "Philippines",
        code : 'PH',
        coords : [13, 122],
        style : {fill:'green'}
        },
        {
        name : "Pakistan",
        code : 'PK',
        coords : [30, 70],
        style : {fill:'green'}
        },
        {
        name : "Poland",
        code : 'PL',
        coords : [52, 20],
        style : {fill:'green'}
        },
        {
        name : "Saint Pierre and Miquelon",
        code : 'PM',
        coords : [46.83, -56.33],
        style : {fill:'green'}
        },
        {
        name : "Puerto Rico",
        code : 'PR',
        coords : [18.25, -66.5],
        style : {fill:'green'}
        },
        {
        name : "Palestinian Territory",
        code : 'PS',
        coords : [32, 35.25],
        style : {fill:'green'}
        },
        {
        name : "Portugal",
        code : 'PT',
        coords : [39.5, -8],
        style : {fill:'green'}
        },
        {
        name : "Palau",
        code : 'PW',
        coords : [7.5, 134.5],
        style : {fill:'green'}
        },
        {
        name : "Paraguay",
        code : 'PY',
        coords : [-23, -58],
        style : {fill:'green'}
        },
        {
        name : "Qatar",
        code : 'QA',
        coords : [25.5, 51.25],
        style : {fill:'green'}
        },
        {
        name : "Reunion",
        code : 'RE',
        coords : [-21.1, 55.6],
        style : {fill:'green'}
        },
        {
        name : "Romania",
        code : 'RO',
        coords : [46, 25],
        style : {fill:'green'}
        },
        {
        name : "Serbia",
        code : 'RS',
        coords : [44, 21],
        style : {fill:'green'}
        },
        {
        name : "Russian Federation",
        code : 'RU',
        coords : [60, 100],
        style : {fill:'green'}
        },
        {
        name : "Rwanda",
        code : 'RW',
        coords : [-2, 30],
        style : {fill:'green'}
        },
        {
        name : "Saudi Arabia",
        code : 'SA',
        coords : [25, 45],
        style : {fill:'green'}
        },
        {
        name : "Solomon Islands",
        code : 'SB',
        coords : [-8, 159],
        style : {fill:'green'}
        },
        {
        name : "Seychelles",
        code : 'SC',
        coords : [-4.58, 55.67],
        style : {fill:'green'}
        },
        {
        name : "Sudan",
        code : 'SD',
        coords : [15, 30],
        style : {fill:'green'}
        },
        {
        name : "Sweden",
        code : 'SE',
        coords : [62, 15],
        style : {fill:'green'}
        },
        {
        name : "Singapore",
        code : 'SG',
        coords : [1.37, 103.8],
        style : {fill:'green'}
        },
        {
        name : "Saint Helena",
        code : 'SH',
        coords : [-15.93, -5.7],
        style : {fill:'green'}
        },
        {
        name : "Slovenia",
        code : 'SI',
        coords : [46, 15],
        style : {fill:'green'}
        },
        {
        name : "Svalbard and Jan Mayen",
        code : 'SJ',
        coords : [78, 20],
        style : {fill:'green'}
        },
        {
        name : "Slovakia",
        code : 'SK',
        coords : [48.67, 19.5],
        style : {fill:'green'}
        },
        {
        name : "Sierra Leone",
        code : 'SL',
        coords : [8.5, -11.5],
        style : {fill:'green'}
        },
        {
        name : "San Marino",
        code : 'SM',
        coords : [43.77, 12.42],
        style : {fill:'green'}
        },
        {
        name : "Senegal",
        code : 'SN',
        coords : [14, -14],
        style : {fill:'green'}
        },
        {
        name : "Somalia",
        code : 'SO',
        coords : [10, 49],
        style : {fill:'green'}
        },
        {
        name : "Suriname",
        code : 'SR',
        coords : [4, -56],
        style : {fill:'green'}
        },
        {
        name : "Sao Tome and Principe",
        code : 'ST',
        coords : [1, 7],
        style : {fill:'green'}
        },
        {
        name : "El Salvador",
        code : 'SV',
        coords : [13.83, -88.92],
        style : {fill:'green'}
        },
        {
        name : "Syrian Arab Republic",
        code : 'SY',
        coords : [35, 38],
        style : {fill:'green'}
        },
        {
        name : "Swaziland",
        code : 'SZ',
        coords : [-26.5, 31.5],
        style : {fill:'green'}
        },
        {
        name : "Turks and Caicos Islands",
        code : 'TC',
        coords : [21.75, -71.58],
        style : {fill:'green'}
        },
        {
        name : "Chad",
        code : 'TD',
        coords : [15, 19],
        style : {fill:'green'}
        },
        {
        name : "French Southern Territories",
        code : 'TF',
        coords : [-43, 67],
        style : {fill:'green'}
        },
        {
        name : "Togo",
        code : 'TG',
        coords : [8, 1.17],
        style : {fill:'green'}
        },
        {
        name : "Thailand",
        code : 'TH',
        coords : [15, 100],
        style : {fill:'green'}
        },
        {
        name : "Tajikistan",
        code : 'TJ',
        coords : [39, 71],
        style : {fill:'green'}
        },
        {
        name : "Tokelau",
        code : 'TK',
        coords : [-9, -172],
        style : {fill:'green'}
        },
        {
        name : "Turkmenistan",
        code : 'TM',
        coords : [40, 60],
        style : {fill:'green'}
        },
        {
        name : "Tunisia",
        code : 'TN',
        coords : [34, 9],
        style : {fill:'green'}
        },
        {
        name : "Tonga",
        code : 'TO',
        coords : [-20, -175],
        style : {fill:'green'}
        },
        {
        name : "Turkey",
        code : 'TR',
        coords : [39, 35],
        style : {fill:'green'}
        },
        {
        name : "Trinidad and Tobago",
        code : 'TT',
        coords : [11, -61],
        style : {fill:'green'}
        },
        {
        name : "Tuvalu",
        code : 'TV',
        coords : [-8, 178],
        style : {fill:'green'}
        },
        {
        name : "Taiwan",
        code : 'TW',
        coords : [23.5, 121],
        style : {fill:'green'}
        },
        {
        name : "Tanzania, United Republic of",
        code : 'TZ',
        coords : [-6, 35],
        style : {fill:'green'}
        },
        {
        name : "Ukraine",
        code : 'UA',
        coords : [49, 32],
        style : {fill:'green'}
        },
        {
        name : "Uganda",
        code : 'UG',
        coords : [1, 32],
        style : {fill:'green'}
        },
        {
        name : "United States Minor Outlying Islands",
        code : 'UM',
        coords : [19.28, 166.6],
        style : {fill:'green'}
        },
        {
        name : "United States",
        code : 'US',
        coords : [38, -97],
        style : {fill:'green'}
        },
        {
        name : "Uruguay",
        code : 'UY',
        coords : [-33, -56],
        style : {fill:'green'}
        },
        {
        name : "Uzbekistan",
        code : 'UZ',
        coords : [41, 64],
        style : {fill:'green'}
        },
        {
        name : "Holy See (Vatican City State)",
        code : 'VA',
        coords : [41.9, 12.45],
        style : {fill:'green'}
        },
        {
        name : "Saint Vincent and the Grenadines",
        code : 'VC',
        coords : [13.25, -61.2],
        style : {fill:'green'}
        },
        {
        name : "Venezuela",
        code : 'VE',
        coords : [8, -66],
        style : {fill:'green'}
        },
        {
        name : "Virgin Islands, British",
        code : 'VG',
        coords : [18.5, -64.5],
        style : {fill:'green'}
        },
        {
        name : "Virgin Islands, U.S.",
        code : 'VI',
        coords : [18.33, -64.83],
        style : {fill:'green'}
        },
        {
        name : "Vietnam",
        code : 'VN',
        coords : [16, 106],
        style : {fill:'green'}
        },
        {
        name : "Vanuatu",
        code : 'VU',
        coords : [-16, 167],
        style : {fill:'green'}
        },
        {
        name : "Wallis and Futuna",
        code : 'WF',
        coords : [-13.3, -176.2],
        style : {fill:'green'}
        },
        {
        name : "Samoa",
        code : 'WS',
        coords : [-13.58, -172.33],
        style : {fill:'green'}
        },
        {
        name : "Yemen",
        code : 'YE',
        coords : [15, 48],
        style : {fill:'green'}
        },
        {
        name : "Mayotte",
        code : 'YT',
        coords : [-12.83, 45.17],
        style : {fill:'green'}
        },
        {
        name : "South Africa",
        code : 'ZA',
        coords : [-29, 24],
        style : {fill:'green'}
        },
        {
        name : "Zambia",
        code : 'ZM',
        coords : [-15, 30],
        style : {fill:'green'}
        },
        {
        name : "Zimbabwe",
        code : 'ZW',
        coords : [-20, 30],
        style : {fill:'green'}
        },
]

var all_countries =[
    {
        name : "Andorra",
        code : 'AD',
        coords : [42.5, 1.5],
        },
        {
        name : "United Arab Emirates",
        code : 'AE',
        coords : [24, 54],
        },
        {
        name : "Afghanistan",
        code : 'AF',
        coords : [33, 65],
        },
        {
        name : "Antigua and Barbuda",
        code : 'AG',
        coords : [17.05, -61.8],
        },
        {
        name : "Anguilla",
        code : 'AI',
        coords : [18.25, -63.17],
        },
        {
        name : "Albania",
        code : 'AL',
        coords : [41, 20],
        },
        {
        name : "Armenia",
        code : 'AM',
        coords : [40, 45],
        },
        {
        name : "Netherlands Antilles",
        code : 'AN',
        coords : [12.25, -68.75],
        },
        {
        name : "Angola",
        code : 'AO',
        coords : [-12.5, 18.5],
        },
        
        {
        name : "Argentina",
        code : 'AR',
        coords : [-34, -64],
        },
       
        {
        name : "Austria",
        code : 'AT',
        coords : [47.33, 13.33],
        },
        {
        name : "Australia",
        code : 'AU',
        coords : [-27, 133],
        },
        {
        name : "Aruba",
        code : 'AW',
        coords : [12.5, -69.97],
        },
        {
        name : "Azerbaijan",
        code : 'AZ',
        coords : [40.5, 47.5],
        },
        {
        name : "Bosnia and Herzegovina",
        code : 'BA',
        coords : [44, 18],
        },
        {
        name : "Barbados",
        code : 'BB',
        coords : [13.17, -59.53],
        },
        {
        name : "Bangladesh",
        code : 'BD',
        coords : [24, 90],
        },
        {
        name : "Belgium",
        code : 'BE',
        coords : [50.83, 4],
        },
        {
        name : "Burkina Faso",
        code : 'BF',
        coords : [13, -2],
        },
        {
        name : "Bulgaria",
        code : 'BG',
        coords : [43, 25],
        },
        {
        name : "Bahrain",
        code : 'BH',
        coords : [26, 50.55],
        },
        {
        name : "Burundi",
        code : 'BI',
        coords : [-3.5, 30],
        },
        {
        name : "Benin",
        code : 'BJ',
        coords : [9.5, 2.25],
        },
        {
        name : "Bermuda",
        code : 'BM',
        coords : [32.33, -64.75],
        },
        {
        name : "Brunei Darussalam",
        code : 'BN',
        coords : [4.5, 114.67],
        },
        {
        name : "Bolivia",
        code : 'BO',
        coords : [-17, -65],
        },
        {
        name : "Brazil",
        code : 'BR',
        coords : [-10, -55],
        },
        {
        name : "Bahamas",
        code : 'BS',
        coords : [24.25, -76],
        },
        {
        name : "Bhutan",
        code : 'BT',
        coords : [27.5, 90.5],
        },
       
        {
        name : "Botswana",
        code : 'BW',
        coords : [-22, 24],
        },
        {
        name : "Belarus",
        code : 'BY',
        coords : [53, 28],
        },
        {
        name : "Belize",
        code : 'BZ',
        coords : [17.25, -88.75],
        },
        {
        name : "Canada",
        code : 'CA',
        coords : [60, -95],
        },
       
        {
        name : "Congo, The Democratic Republic of the",
        code : 'CD',
        coords : [0, 25],
        },
        {
        name : "Central African Republic",
        code : 'CF',
        coords : [7, 21],
        },
        {
        name : "Congo",
        code : 'CG',
        coords : [-1, 15],
        },
        {
        name : "Switzerland",
        code : 'CH',
        coords : [47, 8],
        },
        {
        name : "Cote d'Ivoire",
        code : 'CI',
        coords : [8, -5],
        },
        {
        name : "Cook Islands",
        code : 'CK',
        coords : [-21.23, -159.77],
        },
        {
        name : "Chile",
        code : 'CL',
        coords : [-30, -71],
        },
        {
        name : "Cameroon",
        code : 'CM',
        coords : [6, 12],
        },
        {
        name : "China",
        code : 'CN',
        coords : [35, 105],
        },
        {
        name : "Colombia",
        code : 'CO',
        coords : [4, -72],
        },
        {
        name : "Costa Rica",
        code : 'CR',
        coords : [10, -84],
        },
        {
        name : "Cuba",
        code : 'CU',
        coords : [21.5, -80],
        },
        {
        name : "Cape Verde",
        code : 'CV',
        coords : [16, -24],
        },
       
        {
        name : "Cyprus",
        code : 'CY',
        coords : [35, 33],
        },
        {
        name : "Czech Republic",
        code : 'CZ',
        coords : [49.75, 15.5],
        },
        {
        name : "Germany",
        code : 'DE',
        coords : [51, 9],
        },
        {
        name : "Djibouti",
        code : 'DJ',
        coords : [11.5, 43],
        },
        {
        name : "Denmark",
        code : 'DK',
        coords : [56, 10],
        },
        {
        name : "Dominica",
        code : 'DM',
        coords : [15.42, -61.33],
        },
        {
        name : "Dominican Republic",
        code : 'DO',
        coords : [19, -70.67],
        },
        {
        name : "Algeria",
        code : 'DZ',
        coords : [28, 3],
        },
        {
        name : "Ecuador",
        code : 'EC',
        coords : [-2, -77.5],
        },
        {
        name : "Estonia",
        code : 'EE',
        coords : [59, 26],
        },
        {
        name : "Egypt",
        code : 'EG',
        coords : [27, 30],
        },
       
        {
        name : "Eritrea",
        code : 'ER',
        coords : [15, 39],
        },
        {
        name : "Spain",
        code : 'ES',
        coords : [40, -4],
        },
        {
        name : "Ethiopia",
        code : 'ET',
        coords : [8, 38],
        },
       
        {
        name : "Finland",
        code : 'FI',
        coords : [64, 26],
        },
        {
        name : "Fiji",
        code : 'FJ',
        coords : [-18, 175],
        },
        
        {
        name : "Micronesia, Federated States of",
        code : 'FM',
        coords : [6.92, 158.25],
        },
       
        {
        name : "France",
        code : 'FR',
        coords : [46, 2],
        },
        {
        name : "Gabon",
        code : 'GA',
        coords : [-1, 11.75],
        },
        {
        name : "United Kingdom",
        code : 'GB',
        coords : [54, -2],
        },
        {
        name : "Grenada",
        code : 'GD',
        coords : [12.12, -61.67],
        },
        {
        name : "Georgia",
        code : 'GE',
        coords : [42, 43.5],
        },
       
        {
        name : "Ghana",
        code : 'GH',
        coords : [8, -2],
        },
      
        {
        name : "Greenland",
        code : 'GL',
        coords : [72, -40],
        },
        {
        name : "Gambia",
        code : 'GM',
        coords : [13.47, -16.57],
        },
        {
        name : "Guinea",
        code : 'GN',
        coords : [11, -10],
        },
        
        {
        name : "Equatorial Guinea",
        code : 'GQ',
        coords : [2, 10],
        },
        {
        name : "Greece",
        code : 'GR',
        coords : [39, 22],
        },
       
        {
        name : "Guatemala",
        code : 'GT',
        coords : [15.5, -90.25],
        },
        
        {
        name : "Guinea-Bissau",
        code : 'GW',
        coords : [12, -15],
        },
        {
        name : "Guyana",
        code : 'GY',
        coords : [5, -59],
        },
       
        
        {
        name : "Honduras",
        code : 'HN',
        coords : [15, -86.5],
        },
        {
        name : "Croatia",
        code : 'HR',
        coords : [45.17, 15.5],
        },
        {
        name : "Haiti",
        code : 'HT',
        coords : [19, -72.42],
        },
        {
        name : "Hungary",
        code : 'HU',
        coords : [47, 20],
        },
        {
        name : "Indonesia",
        code : 'ID',
        coords : [-5, 120],
        },
        {
        name : "Ireland",
        code : 'IE',
        coords : [53, -8],
        },
        {
        name : "Israel",
        code : 'IL',
        coords : [31.5, 34.75],
        },
        {
        name : "India",
        code : 'IN',
        coords : [20, 77],
        },
       
        {
        name : "Iraq",
        code : 'IQ',
        coords : [33, 44],
        },
        {
        name : "Iran, Islamic Republic of",
        code : 'IR',
        coords : [32, 53],
        },
        {
        name : "Iceland",
        code : 'IS',
        coords : [65, -18],
        },
        {
        name : "Italy",
        code : 'IT',
        coords : [42.83, 12.83],
        },
        {
        name : "Jamaica",
        code : 'JM',
        coords : [18.25, -77.5],
        },
        {
        name : "Jordan",
        code : 'JO',
        coords : [31, 36],
        },
        {
        name : "Japan",
        code : 'JP',
        coords : [36, 138],
        },
        {
        name : "Kenya",
        code : 'KE',
        coords : [1, 38],
        },
        {
        name : "Kyrgyzstan",
        code : 'KG',
        coords : [41, 75],
        },
        {
        name : "Cambodia",
        code : 'KH',
        coords : [13, 105],
        },
        {
        name : "Kiribati",
        code : 'KI',
        coords : [1.42, 173],
        },
        {
        name : "Comoros",
        code : 'KM',
        coords : [-12.17, 44.25],
        },
        {
        name : "Saint Kitts and Nevis",
        code : 'KN',
        coords : [17.33, -62.75],
        },
        {
        name : "Korea, Democratic People's Republic of",
        code : 'KP',
        coords : [40, 127],
        },
        {
        name : "Korea, Republic of",
        code : 'KR',
        coords : [37, 127.5],
        },
        {
        name : "Kuwait",
        code : 'KW',
        coords : [29.34, 47.66],
        },
        
        {
        name : "Kazakhstan",
        code : 'KZ',
        coords : [48, 68],
        },
        {
        name : "Lao People's Democratic Republic",
        code : 'LA',
        coords : [18, 105],
        },
        {
        name : "Lebanon",
        code : 'LB',
        coords : [33.83, 35.83],
        },
        
        {
        name : "Liechtenstein",
        code : 'LI',
        coords : [47.17, 9.53],
        },
        {
        name : "Sri Lanka",
        code : 'LK',
        coords : [7, 81],
        },
        {
        name : "Liberia",
        code : 'LR',
        coords : [6.5, -9.5],
        },
        {
        name : "Lesotho",
        code : 'LS',
        coords : [-29.5, 28.5],
        },
        {
        name : "Lithuania",
        code : 'LT',
        coords : [56, 24],
        },
        {
        name : "Luxembourg",
        code : 'LU',
        coords : [49.75, 6.17],
        },
        {
        name : "Latvia",
        code : 'LV',
        coords : [57, 25],
        },
        {
        name : "Libyan Arab Jamahiriya",
        code : 'LY',
        coords : [25, 17],
        },
        {
        name : "Morocco",
        code : 'MA',
        coords : [32, -5],
        },
        {
        name : "Monaco",
        code : 'MC',
        coords : [43.73, 7.4],
        },
        {
        name : "Moldova, Republic of",
        code : 'MD',
        coords : [47, 29],
        },
        {
        name : "Montenegro",
        code : 'ME',
        coords : [42, 19],
        },
        {
        name : "Madagascar",
        code : 'MG',
        coords : [-20, 47],
        },
        {
        name : "Marshall Islands",
        code : 'MH',
        coords : [9, 168],
        },
        {
        name : "Macedonia",
        code : 'MK',
        coords : [41.83, 22],
        },
        {
        name : "Mali",
        code : 'ML',
        coords : [17, -4],
        },
        {
        name : "Myanmar",
        code : 'MM',
        coords : [22, 98],
        },
        {
        name : "Mongolia",
        code : 'MN',
        coords : [46, 105],
        },
        {
        name : "Macao",
        code : 'MO',
        coords : [22.17, 113.55],
        },
       
        
        {
        name : "Mauritania",
        code : 'MR',
        coords : [20, -12],
        },
        
        {
        name : "Malta",
        code : 'MT',
        coords : [35.83, 14.58],
        },
        {
        name : "Mauritius",
        code : 'MU',
        coords : [-20.28, 57.55],
        },
        {
        name : "Maldives",
        code : 'MV',
        coords : [3.25, 73],
        },
        {
        name : "Malawi",
        code : 'MW',
        coords : [-13.5, 34],
        },
        {
        name : "Mexico",
        code : 'MX',
        coords : [23, -102],
        },
        {
        name : "Malaysia",
        code : 'MY',
        coords : [2.5, 112.5],
        },
        {
        name : "Mozambique",
        code : 'MZ',
        coords : [-18.25, 35],
        },
        {
        name : "Namibia",
        code : 'NA',
        coords : [-22, 17],
        },
        
        {
        name : "Niger",
        code : 'NE',
        coords : [16, 8],
        },
        {
        name : "Norfolk Island",
        code : 'NF',
        coords : [-29.03, 167.95],
        },
        {
        name : "Nigeria",
        code : 'NG',
        coords : [10, 8],
        },
        {
        name : "Nicaragua",
        code : 'NI',
        coords : [13, -85],
        },
        {
        name : "Netherlands",
        code : 'NL',
        coords : [52.5, 5.75],
        },
        {
        name : "Norway",
        code : 'NO',
        coords : [62, 10],
        },
        {
        name : "Nepal",
        code : 'NP',
        coords : [28, 84],
        },
        {
        name : "Nauru",
        code : 'NR',
        coords : [-0.53, 166.92],
        },
       
        {
        name : "New Zealand",
        code : 'NZ',
        coords : [-41, 174],
        },
        {
        name : "Oman",
        code : 'OM',
        coords : [21, 57],
        },
        {
        name : "Panama",
        code : 'PA',
        coords : [9, -80],
        },
        {
        name : "Peru",
        code : 'PE',
        coords : [-10, -76],
        },
       
        {
        name : "Papua New Guinea",
        code : 'PG',
        coords : [-6, 147],
        },
        {
        name : "Philippines",
        code : 'PH',
        coords : [13, 122],
        },
        {
        name : "Pakistan",
        code : 'PK',
        coords : [30, 70],
        },
        {
        name : "Poland",
        code : 'PL',
        coords : [52, 20],
        },
        
        {
        name : "Puerto Rico",
        code : 'PR',
        coords : [18.25, -66.5],
        },
       
        {
        name : "Portugal",
        code : 'PT',
        coords : [39.5, -8],
        },
        {
        name : "Palau",
        code : 'PW',
        coords : [7.5, 134.5],
        },
        {
        name : "Paraguay",
        code : 'PY',
        coords : [-23, -58],
        },
        {
        name : "Qatar",
        code : 'QA',
        coords : [25.5, 51.25],
        },
       
        {
        name : "Romania",
        code : 'RO',
        coords : [46, 25],
        },
        {
        name : "Serbia",
        code : 'RS',
        coords : [44, 21],
        },
        {
        name : "Russian Federation",
        code : 'RU',
        coords : [60, 100],
        },
        {
        name : "Rwanda",
        code : 'RW',
        coords : [-2, 30],
        },
        {
        name : "Saudi Arabia",
        code : 'SA',
        coords : [25, 45],
        },
        {
        name : "Solomon Islands",
        code : 'SB',
        coords : [-8, 159],
        },
        {
        name : "Seychelles",
        code : 'SC',
        coords : [-4.58, 55.67],
        },
        {
        name : "Sudan",
        code : 'SD',
        coords : [15, 30],
        },
        {
        name : "Sweden",
        code : 'SE',
        coords : [62, 15],
        },
        {
        name : "Singapore",
        code : 'SG',
        coords : [1.37, 103.8],
        },
        
        {
        name : "Slovenia",
        code : 'SI',
        coords : [46, 15],
        },
        
        {
        name : "Slovakia",
        code : 'SK',
        coords : [48.67, 19.5],
        },
        {
        name : "Sierra Leone",
        code : 'SL',
        coords : [8.5, -11.5],
        },
        {
        name : "San Marino",
        code : 'SM',
        coords : [43.77, 12.42],
        },
        {
        name : "Senegal",
        code : 'SN',
        coords : [14, -14],
        },
        {
        name : "Somalia",
        code : 'SO',
        coords : [10, 49],
        },
        {
        name : "Suriname",
        code : 'SR',
        coords : [4, -56],
        },
        {
        name : "Sao Tome and Principe",
        code : 'ST',
        coords : [1, 7],
        },
        {
        name : "El Salvador",
        code : 'SV',
        coords : [13.83, -88.92],
        },
        {
        name : "Syrian Arab Republic",
        code : 'SY',
        coords : [35, 38],
        },
        {
        name : "Swaziland",
        code : 'SZ',
        coords : [-26.5, 31.5],
        },
       
        {
        name : "Chad",
        code : 'TD',
        coords : [15, 19],
        },
        
        {
        name : "Togo",
        code : 'TG',
        coords : [8, 1.17],
        },
        {
        name : "Thailand",
        code : 'TH',
        coords : [15, 100],
        },
        {
        name : "Tajikistan",
        code : 'TJ',
        coords : [39, 71],
        },
       
        {
        name : "Turkmenistan",
        code : 'TM',
        coords : [40, 60],
        },
        {
        name : "Tunisia",
        code : 'TN',
        coords : [34, 9],
        },
      
        {
        name : "Turkey",
        code : 'TR',
        coords : [39, 35],
        },
        {
        name : "Trinidad and Tobago",
        code : 'TT',
        coords : [11, -61],
        },
        {
        name : "Tuvalu",
        code : 'TV',
        coords : [-8, 178],
        },
        {
        name : "Taiwan",
        code : 'TW',
        coords : [23.5, 121],
        },
        {
        name : "Tanzania, United Republic of",
        code : 'TZ',
        coords : [-6, 35],
        },
        {
        name : "Ukraine",
        code : 'UA',
        coords : [49, 32],
        },
        {
        name : "Uganda",
        code : 'UG',
        coords : [1, 32],
        },
        
        {
        name : "United States",
        code : 'US',
        coords : [38, -97],
        },
        {
        name : "Uruguay",
        code : 'UY',
        coords : [-33, -56],
        },
        {
        name : "Uzbekistan",
        code : 'UZ',
        coords : [41, 64],
        },
        {
        name : "Holy See (Vatican City State)",
        code : 'VA',
        coords : [41.9, 12.45],
        },
        {
        name : "Saint Vincent and the Grenadines",
        code : 'VC',
        coords : [13.25, -61.2],
        },
        {
        name : "Venezuela",
        code : 'VE',
        coords : [8, -66],
        },
        
        {
        name : "Vietnam",
        code : 'VN',
        coords : [16, 106],
        },
        {
        name : "Vanuatu",
        code : 'VU',
        coords : [-16, 167],
        },
        
        
        {
        name : "Yemen",
        code : 'YE',
        coords : [15, 48],
        },
       
        {
        name : "South Africa",
        code : 'ZA',
        coords : [-29, 24],
        },
        {
        name : "Zambia",
        code : 'ZM',
        coords : [-15, 30],
        },
        {
        name : "Zimbabwe",
        code : 'ZW',
        coords : [-20, 30],
        },

]