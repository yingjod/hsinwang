from django.contrib import admin
from .models import Cake, Size, Filling, CakeBase, Acc

admin.site.register(Cake)
admin.site.register(Size)
admin.site.register(Filling)
admin.site.register(CakeBase)
admin.site.register(Acc)