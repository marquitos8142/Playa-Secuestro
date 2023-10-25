from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    readonly_fields = ('Registro_Creado', 'Registro_Actualizado')

admin.site.register(Task, TaskAdmin)
