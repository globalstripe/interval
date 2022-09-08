npm run build
cp -r build/* public/
firebase deploy --only hosting:monitor
