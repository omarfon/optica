## INSTALLAR CAMARA

``` 
npm install @capacitor/camera
```

## SINCRONIZAR LAS LIBRERIAS DE CAPACITOR QUE ACABAMSOS DE INSTALLAR  
``` 
npx cap sync
```  

# AÑADIR AL CONFIG.XML EN AndroidManifest  

```  
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```