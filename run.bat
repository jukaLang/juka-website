call npm run docusaurus clear
@RD /S /Q "i18n\en"
call npm run write-translations
call npm run docusaurus start
pause