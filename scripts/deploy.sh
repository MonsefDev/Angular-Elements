#!/bin/bash

DOC_ROOT=pwd
BUILD_PATH="./widgetjs"

if [ $# -eq 0 ]; then
    echo "missing BucketName"
    exit 1
else
    s3_url="s3://$1"
	CNAME=$1
fi


echo "======== Install application in $s3_url =============="


echo "---------------------Install the  dependencies packages ---------------------"
    npm install || exit 1


echo "---------------------Build  front---------------------"
    npm run build:elements || exit 1

echo "---------------------update site in $s3_url---------------------"
aws s3 sync $BUILD_PATH  $s3_url --cache-control max-age=600,public,s-maxage=600

aws s3 cp $BUILD_PATH/../web/index.html  $s3_url --cache-control max-age=600,public,s-maxage=600

echo "---------------------Purge Cloudfront cache---------------------"
CLOUDFRONTID=$(aws cloudfront list-distributions --query "DistributionList.Items[?Aliases.Items!=null] | [?contains(Aliases.Items, '$CNAME')].Id | [0]")
	if [[ "$CLOUDFRONTID" == "" || "$CLOUDFRONTID" == "null" ]]; then
		echo "Unable to find a distribution with a CNAME named $CNAME".
		echo "Here are the availble distributions with CNAME :"
		aws  cloudfront list-distributions --query 'DistributionList.Items[*].{Id:Id,Aliases:Aliases.Items[*]}' --output text
		exit 1
	fi
tmp="${CLOUDFRONTID%\"}"
tmp="${tmp#\"}"
CLOUDFRONTID=$tmp
echo "CNAME $CNAME match with distribution $CLOUDFRONTID"

aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $CLOUDFRONTID --paths '/*' --output text || exit 1
