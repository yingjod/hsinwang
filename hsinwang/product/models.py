from django.db import models

class Cake(models.Model):
    name = models.CharField(max_length=100)  
    description = models.TextField(blank=True) 
    image = models.ImageField(upload_to='cakes/', blank=True, null=True)

    def __str__(self):
        return self.name

class CakeSize(models.Model):
    cake = models.ForeignKey(Cake, on_delete=models.CASCADE, related_name='sizes')  
    size = models.CharField(max_length=50)
    base_price = models.DecimalField(max_digits=10, decimal_places=2) 

    def __str__(self):
        return f"{self.cake.name} - {self.size} - ${self.base_price}"

class FlavorOption(models.Model):
    cake = models.ForeignKey(Cake, on_delete=models.CASCADE, related_name='flavor_options') 
    name = models.CharField(max_length=100) 
    additional_price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.cake.name} - {self.name} +${self.additional_price}"

