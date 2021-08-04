
  "prBodyDefinitions": {
    "Age": "[![age](https://badges.renovateapi.com/packages/{{datasource}}/{{replace '/' '%2f' depName}}/{{{toVersion}}}/age-slim)](https://docs.renovatebot.com/merge-confidence/)",
    "Adoption": "[![adoption](https://badges.renovateapi.com/packages/{{datasource}}/{{replace '/' '%2f' depName}}/{{{toVersion}}}/adoption-slim)](https://docs.renovatebot.com/merge-confidence/)",
    "Passing": "[![passing](https://badges.renovateapi.com/packages/{{datasource}}/{{replace '/' '%2f' depName}}/{{{toVersion}}}/compatibility-slim/{{{fromVersion}}})](https://docs.renovatebot.com/merge-confidence/)",
    "Confidence": "[![confidence](https://badges.renovateapi.com/packages/{{datasource}}/{{replace '/' '%2f' depName}}/{{{toVersion}}}/confidence-slim/{{{fromVersion}}})](https://docs.renovatebot.com/merge-confidence/)"
  
  "packageRules": [
    {
      "datasources": ["maven", "npm", "pypi"],
      "updateTypes": ["patch", "minor", "major"],
      "prBodyColumns": ["Package", "Change", "Age", "Adoption", "Passing", "Confidence"]
    
  

