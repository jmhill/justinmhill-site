#!/usr/bin/env bash

cd /var/www/justinmhill-site
git clean -fd
npm install
npm run build
chmod +x server.js
sudo systemctl restart justinmhill-site