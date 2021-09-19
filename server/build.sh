cd ../client
npm run build

cp -r build/ ../server/app/views
cd ../host