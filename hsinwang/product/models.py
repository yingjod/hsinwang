from django.db import models

class Acc(models.Model):
    name = models.CharField(max_length=100)  
    image = models.ImageField(upload_to='cakes/', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

# 蛋糕尺寸模型
class Sizes(models.Model):
    size_name = models.CharField(max_length=50, default='default size')  # 尺寸名称，例如 "小"、"中"、"大"
    price = models.DecimalField(max_digits=6, decimal_places=2)  # 该尺寸的价格

    def __str__(self):
        return f"{self.size_name} (${self.price})"

# 蛋糕餡料模型
class Filling(models.Model):
    filling_name = models.CharField(max_length=100)  # 餡料名称，例如 "巧克力"、"草莓"
    additional_price = models.DecimalField(max_digits=6, decimal_places=2, default=0)  # 该餡料的加价

    def __str__(self):
        return f"{self.filling_name} (+${self.additional_price})"

# 蛋糕体模型
class Base(models.Model):
    base_name = models.CharField(max_length=100)  # 蛋糕体名称，例如 "海绵蛋糕"、"巧克力蛋糕"
    additional_price = models.DecimalField(max_digits=6, decimal_places=2, default=0)  # 该蛋糕体的加价

    def __str__(self):
        return f"{self.base_name} (+${self.additional_price})"

# 蛋糕模型
class Cake(models.Model):
    name = models.CharField(max_length=100)  # 蛋糕名称
    description = models.TextField()  # 蛋糕描述
    image = models.ImageField(upload_to='cakes/', blank=True, null=True)
    sizes = models.ManyToManyField(Sizes, related_name='cakes')  # 尺寸（多选）
    fillings = models.ManyToManyField(Filling, related_name='cakes')  # 餡料（多选）
    bases = models.ManyToManyField(Base, related_name='cakes')  # 蛋糕体（多选）

    def __str__(self):
        return self.name
    
# 麵包甜點模型
class Breads(models.Model):
    name = models.CharField(max_length=100)  
    description = models.TextField()  
    image = models.ImageField(upload_to='breads/', blank=True, null=True)

    def __str__(self):
        return self.name
