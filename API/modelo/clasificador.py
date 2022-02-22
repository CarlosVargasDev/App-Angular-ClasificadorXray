import torch
import torchvision
from PIL import Image

class Resnet18Covid():
    clasificacion = ['normal', 'viral', 'covid']
    
    def __init__(self,path_model= "resnet/modelV2.pt" ):
        self.path_model = path_model
        self.loadModel() #Cargamos el modelo

    def loadModel(self):
        self.resnet18 = torchvision.models.resnet18(pretrained=True)
        self.resnet18.fc = torch.nn.Linear(in_features=512, out_features=3)
        self.resnet18.load_state_dict(torch.load(self.path_model))

        #PRE-TRATEMIENTO DE LA IMAGEN
        self.transform = torchvision.transforms.Compose([
            torchvision.transforms.Resize(size=(224, 224)),
            torchvision.transforms.ToTensor(),
            torchvision.transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
        ])

    def clasificarImg(self, image):
        img_process = self.transform(image)
        img_process = img_process[None,:] #Agregamos otra dimencion

        # Clasifiacamos imagen
        self.resnet18.eval() # Modo Evaluacion
        outputs = self.resnet18(img_process) #Evaluamos lote de imagnes
        _, preds = torch.max(outputs, 1) #Obtenemos la prediccion del lote

        # Retornamos clasificacion
        print("Clasificado como: ", self.clasificacion[preds[0]])
        return self.clasificacion[preds[0]]
