React Native App designed to optimise code reusing between web and mobile apps.

# Requirements
- npm

# Install
```
npm install; 
npm start;
```

# Test
```
npm test
```

# Enjoy
browse to http://localhost:3000

# Deploy to Stores
- Android:
```
cd ~/Desktop/mafiledattente/android
```
```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 ~/Desktop/mafiledattente/android/release-unsigned.apk MaFileDattente
```
```
~/Library/Android/sdk/build-tools/25.0.1/zipalign -v 4 ~/Desktop/mafiledattente/android/release-unsigned.apk  ~/Desktop/mafiledattente/mafiledattente.apk
```

- iOS:

Remove line 577 in MaFileDattente.xcodeproj file
```
developmentRegion = English;
```

Ouvrir le projet dans xCode

Selectionner Generic iOS device

Changer par les parametres recommandés par xcode dans le menu de gauche

Ouvrir Ressources/Images.xcassets et supprimer les splashscreens de meteor et cordova

Selectionner MaFileDattente dans le menu de gauche, puis en haut a gauche du cadre blanc central, cliquer sur MaFileDattente et selectionner target MaFileDattente.

Decocher Automatically manage signing, selectionner XC iOS fr.mafiledattente pour les 2 cadres signing

Decocher upside down dans deployment info.

Cocher Push Notifications dans l'onglet capabilities

Dans l'onglet Info selectionner France au lieu de English dans 'Localization native development region'

Toujours dans Info, creer une nouvelle entrée 'Privacy: Bluetooth Peripheral Usage Description' et rentrer la string suivante: 'Advertisement would like to use bluetooth.'

Selectionner Archive dans l'onglet Product du menu xCode

- Server
```
ssh root@137.74.175.30
cd /home/ubuntu/server-alpha-running/bundle
git pull
restart meteor-service
cat /home/ubuntu/server-alpha-running/meteor.log
```

- Renew SSL certificates
```
service nginx stop && certbot renew && service nginx start
```

- Connect to Kadira
```
ssh -i private/kadira-mafiledattente-aws.pem ubuntu@ec2-35-158-148-195.eu-central-1.compute.amazonaws.com
```

- Generates custom tiles
```
python gdal2tiles-multiprocess.py -l -p raster -z 2-4 -w none public/plan-2017.jpg public/tiles
```

- Acceder aux données en SSH
```
ssh root@137.74.175.30 "mongo meteor --norc --quiet --eval 'db.tickets.find().forEach(printjson)'" >> ~/Desktop/data.json
```