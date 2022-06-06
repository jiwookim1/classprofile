let PARENT_EDUCATION = [{
  "name": "Masters",
  "value": 6
    }, {
  "name": "Bachelors/College",
  "value": 19
  }, {
  "name": "Prefer not to disclose",
  "value": 7
  }, {
  "name": "Doctorates",
  "value": 1
  }, {
  "name": "High school",
  "value": 3
  }];


let ETHNICITY = [{
  "name": "Middle Eastern Caucasian",
  "value": 1,
  "toggle": "ethnicity-all"
}, {
  "name": "East Asian Caucasian",
  "value": 1,
  "toggle": "ethnicity-all"
}, {
  "name": "Caucasian",
  "value": 22,
  "toggle": "ethnicity-all"
}, {
  "name": "South East Asian",
  "value": 1,
  "toggle": "ethnicity-all"
},  {
  "name": "South Asian",
  "value": 8,
  "toggle": "ethnicity-all"
}, {
  "name": "East Asian",
  "value": 35,
  "toggle": "ethnicity-all"
}, {
  "name": "Middle Eastern",
  "value": 3,
  "toggle": "ethnicity-all"
}, {
  "name": "Prefer not to disclose",
  "value": 1,
  "toggle": "ethnicity-all"
},
// Women
{
  "name": "Middle Eastern Caucasian",
  "value": 0,
  "toggle": "ethnicity-women"
}, {
  "name": "East Asian Caucasian",
  "value": 0,
  "toggle": "ethnicity-women"
}, {
  "name": "Caucasian",
  "value": 2,
  "toggle": "ethnicity-women"
}, {
  "name": "South East Asian",
  "value": 0,
  "toggle": "ethnicity-women"
},  {
  "name": "South Asian",
  "value": 1,
  "toggle": "ethnicity-women"
}, {
  "name": "East Asian",
  "value": 12,
  "toggle": "ethnicity-women"
}, {
  "name": "Middle Eastern",
  "value": 0,
  "toggle": "ethnicity-women"
}, {
  "name": "Prefer not to disclose",
  "value": 0,
  "toggle": "ethnicity-women"
},
// Men
{
  "name": "Middle Eastern Caucasian",
  "value": 1,
  "toggle": "ethnicity-men"
}, {
  "name": "East Asian Caucasian",
  "value": 1,
  "toggle": "ethnicity-men"
}, {
  "name": "Caucasian",
  "value": 20,
  "toggle": "ethnicity-men"
}, {
  "name": "South East Asian",
  "value": 1,
  "toggle": "ethnicity-men"
},  {
  "name": "South Asian",
  "value": 7,
  "toggle": "ethnicity-men"
}, {
  "name": "East Asian",
  "value": 21,
  "toggle": "ethnicity-men"
}, {
  "name": "Middle Eastern",
  "value": 3,
  "toggle": "ethnicity-men"
}, {
  "name": "Prefer not to disclose",
  "value": 1,
  "toggle": "ethnicity-men"
}]

let GENDER = [{
  "name": "Men",
  "value": 20
}, {
  "name": "Women",
  "value": 15
}, {
  "name": "Cookie Monster",
  "value": 1
},];

let YEAR_OF_BIRTH = [{
  "name": "2004",
  "value": 24
}, {
  "name": "2003",
  "value": 11
}];

let SEXUAL_ORIENTATION = [{
  "name": "Heterosexual",
  "value": 25
}, {
  "name": "Bisexual",
  "value": 4
},{
  "name": "Non-binary",
  "value": 1
}, {
  "name": "Prefer not to disclose",
  "value": 5
}];



let NUM_LANGUAGE = [{
  "name": "1",
  "value": 0
}, {
  "name": "2",
  "value": 33
}, {
  "name": "3",
  "value": 2
}, {
  "name": "4",
  "value": 1
}];

let LANGUAGE_KNOWN = [{
  "name": "VIETNAMESE",
  "value": 28
}, {
  "name": "ENGLISH",
  "value": 36
}, {
  "name": "CHINESE",
  "value": 4
}, {
  "name": "KOREAN",
  "value": 8
}, {
  "name": "HAITIAN",
  "value": 1
}, {
  "name": "TANZANIAN",
  "value": 1
}, {
  "name": "FRENCH",
  "value": 1
}];

let SIBLINGS = [{
  "name": "0",
  "value": 3
}, {
  "name": "1",
  "value": 19
}, {
  "name": "2",
  "value": 11
}, {
  "name": "3",
  "value": 1
}, {
  "name": "4",
  "value": 1
}, {
  "name" : "8",
  "value" : 1
}];

let MOTHER_TONGUE = [{
  "name": "Vietnamese",
  "value": 28
}, {
  "name": "Korean",
  "value": 7
}, {
  "name": "Mandarin",
  "value": 1
}];


let FAMILY_INCOME = [{
  "name": "0-50k / year",
  "value": 2
}, {
  "name": "50k-100k / year",
  "value": 22
}, {
  "name": "100-150k / year",
  "value": 10
}, {
  "name": "150k-200k / year",
  "value": 16
}, {
  "name": "200k-250k / year",
  "value": 3
}, {
  "name": "250k-300k / year",
  "value": 2
}, {
  "name": "300k+ / year",
  "value": 7
}, {
  "name": "Prefer not to disclose",
  "value": 10
}];

let CAT_OR_DOG = [{
  "name": "Cat",
  "value": 15
}, {
  "name": "Dog",
  "value": 35
}, {
  "name": "Both",
  "value": 18
}];

const SIBLINGS_PARENTS = [
  {'group': '0', 'siblings-inc-zero': 0, 'siblings-inc-one': 2, 'siblings-inc-two': 1, 'siblings-inc-three': 0},
  {'group': '1', 'siblings-inc-zero': 1, 'siblings-inc-one': 8, 'siblings-inc-two': 4, 'siblings-inc-three': 1},
  {'group': '2+', 'siblings-inc-zero': 2, 'siblings-inc-one': 9, 'siblings-inc-two': 1, 'siblings-inc-three': 0},
]


export {
  PARENT_EDUCATION,
  ETHNICITY,
  GENDER,
  YEAR_OF_BIRTH,
  SEXUAL_ORIENTATION,
  FAMILY_INCOME,
  SIBLINGS,
  MOTHER_TONGUE,
  CAT_OR_DOG,
  NUM_LANGUAGE,
  LANGUAGE_KNOWN,
  SIBLINGS_PARENTS
}
