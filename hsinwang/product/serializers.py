# Product/serializers.py
from rest_framework import serializers
from .models import Cake, Sizes, Filling, Base, Acc, Breads


class SizesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sizes
        fields = '__all__'  # Use all fields or specify them as a list ['id', 'name', ...]


class FillingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filling
        fields = '__all__'  # Use all fields or specify them as a list ['id', 'name', ...]

class BaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Base
        fields = '__all__'  # Use all fields or specify them as a list ['id', 'name', ...]


class AccSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acc
        fields = '__all__'  # Use all fields or specify them as a list ['id', 'name', ...]

class BreadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breads
        fields = '__all__'  # Use all fields or specify them as a list ['id', 'name', ...]

class CakeSerializer(serializers.ModelSerializer):
    # 嵌套序列化器
    sizes = SizesSerializer(many=True)  # 将 sizes 显示为嵌套的详细信息
    fillings = FillingSerializer(many=True)
    bases = BaseSerializer(many=True)

    class Meta:
        model = Cake
        fields = '__all__'  # 包括所有字段