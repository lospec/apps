#setup
mkdir ./build



#PIXEL EDITOR
#git clone https://github.com/lospec/pixel-editor
cd hello
git clone --branch static-site-conversion https://github.com/lospec/pixel-editor
cd pixel-editor
npm install
npm run build
echo 
echo installed pixel editor
echo

cp -a ./build ../build/pixel-editor