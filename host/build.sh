cd ../client
npm run build

cp -r build/ ../host/app/views
cd ../host