rm -rf dist &&
yarn build
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:oylx/vue-wheel-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://oylx.github.io/vue-wheel-ui-website/