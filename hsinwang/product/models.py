from django.db import models

class Size(models.Model):
    name = models.CharField(max_length=10)  

    def __str__(self):
        return self.name
    
class Filling(models.Model):
    name = models.CharField(max_length=100)
    additional_price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name
    
class CakeBase(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

    
class Cake(models.Model):
    
    name = models.CharField(max_length=100)  
    description = models.TextField(blank=True) 
    image = models.ImageField(upload_to='cakes/', blank=True, null=True)
    filling = models.ForeignKey(
        Filling, 
        on_delete=models.CASCADE, 
        related_name='cakes',
        null=True,
        blank=True)
    
    base = models.ForeignKey(
        CakeBase,
        on_delete=models.CASCADE,
        related_name='cakes',
        null=True,
        blank=False  # 如果不希望蛋糕缺少 base，可以設置 blank=False
    )
    sizes = models.ManyToManyField(Size) 
    price_4 = models.DecimalField(max_digits=10, decimal_places=2,default=680)
    price_6 = models.DecimalField(max_digits=10, decimal_places=2, default=1180)
    price_8 = models.DecimalField(max_digits=10, decimal_places=2, default=1680)
    price_46 = models.DecimalField(max_digits=10, decimal_places=2, default=1980)
    price_68 = models.DecimalField(max_digits=10, decimal_places=2, default=2980)

    def __str__(self):
        return self.name

class Acc(models.Model):
    
    name = models.CharField(max_length=100)  
    image = models.ImageField(upload_to='cakes/', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name