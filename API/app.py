from flask import Flask, jsonify, request
from modelo.clasificador import Resnet18Covid
from PIL import Image

app = Flask(__name__)

#########################################
# Rutas
#########################################
# Testing Route
@app.route('/', methods=['GET'])
def ping():
    return jsonify({'response': 'Bienvenido a la API!'})

# Ruta UploadImages
@app.route('/xray_image', methods=['POST'])
def handdler_xray_imag():
    data = request.files['image']
    image = Image.open(data).convert('RGB') #Abrimos la imagen con pillow en modo rgb
    model = Resnet18Covid(path_model = "modelo/resnet/model.pt")
    output = model.clasificarImg(image)
    # HACER ALGO CON LA IMAGEN

    return jsonify({"status":"ok", "pronostico":output})



    

#########################################
# Iniziar Servicio
#########################################
if __name__ == '__main__':
    app.run(debug=True, port=4000)



