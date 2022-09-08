gcloud projects list

gcloud config set project the-new-vibe-staging
gcloud config get-value project
echo ""
echo "List Functions matching $1 Y/N"
read x
if [[  $x == "Y" ]];
  then
  gcloud functions list | grep $1
fi
gcloud config set project the-new-vibe
gcloud config get-value project
if [[  $x == "Y" ]];
  then
  gcloud functions list | grep $1
fi
