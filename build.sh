echo 
echo Building apps.Lospec.com
echo
set -x #echo on

mkdir ./build

#PIXEL EDITOR
#git clone https://github.com/lospec/pixel-editor
git clone --branch static-site-conversion https://github.com/lospec/pixel-editor
cd pixel-editor
npm install
npm run build
cp -a ./build ../build/pixel-editor --verbose
cd ..

#final

cp index.htm build --verbose

