# Aplicación para la clasificación radiografías de tórax para la detección de Covid

## Descripción
El clasificador alcanza una precisión superior al 95%, aunque es una precisión muy alta este modelo no es lo suficientemente robusto como para ser empleado
en un entorno médico real y solo tiene fines didácticos.

La aplicación web se comunica con el servidor el cual contiene una API, que se encarga de recibir la imagen y hacer el procesamiento para la clasificación de la imagen, al final el servidor nos devuelve la respuesta. Se implementa un componente de "Drag & Drop" para la subida de archivos.

Si quieres saber como se entrena este modelo, visita este repositorio: https://github.com/CarlosVargasDev/clasificador-resnet18-covid-xray

#### Requisitos Previos: API
1. Tener instalado Python.
2. Tener instalado PyTorch y torchvision, el comando para instalarlo mediante anaconda es el siguiente: 'conda install pytorch torchvision cudatoolkit=10.2 -c pytorch';
3. Tener instalado PILL
4. Tener instalado Flask
5. Tener instalado flask-cors

#### Requisitos Previos: Aplicación Angular
1. Tener instalado NodeJs y NPM
2. Tener instalado Angular

## Run: API
- Dirígete a la carpeta 'API'.
- Corre el archivo python 'app.py' con el comando 'python app.py'.
![Lanzando API](https://i.postimg.cc/Qt7kwP6Z/api.png)
## Run: Aplicación Angular
- Dirígete a la carpeta 'frontEnd'
- Para correr localmente ejecuta 'ng serve' y navega a 'http://localhost:4200/'.
- No olvides que previamente tendras que haber lanzado la API del clasificador

#### Capturas sobre el funcionamiento
Home: 
![Home](https://i.postimg.cc/6qNLX0S2/img1.png)

Subiendo Imagen:
![Subiendo Imagenes](https://i.postimg.cc/fTDjq8m1/img3.png)

Pronostico
![Pronosticando imagen](https://i.postimg.cc/cCM743yD/img2.png)
