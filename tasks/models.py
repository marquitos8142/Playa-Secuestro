from django.db import models
from datetime import datetime

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    Registro_Creado = models.DateTimeField(auto_now_add=True)
    Registro_Actualizado = models.DateTimeField(auto_now=True)
    campo1 = models.TextField(blank=True)
    campo2 = models.TextField(blank=True)
    campo3 = models.TextField(blank=True)
    foto = models.ImageField(upload_to='productos', null = True)
    
    def __str__(self):
        return self.title