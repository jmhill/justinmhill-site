#!/usr/bin/env bash

cd /var/www/justinmhill-site
git clean -fd
npm install
npm run build
sudo systemctl restart justinmhill-site