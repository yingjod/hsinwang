
from rest_framework import viewsets
from rest_framework import generics
from .models import Cake, Sizes, Filling, Base, Acc, Breads
from .serializers import CakeSerializer,SizesSerializer,FillingSerializer,BaseSerializer, AccSerializer, BreadsSerializer
from rest_framework.generics import RetrieveAPIView

class CakeViewSet(viewsets.ModelViewSet):
    queryset = Cake.objects.all()
    serializer_class = CakeSerializer


class SizeList(generics.ListAPIView):
    queryset = Sizes.objects.all()
    serializer_class = SizesSerializer

    
class FillingList(generics.ListAPIView):
    queryset = Filling.objects.all()
    serializer_class = FillingSerializer

    
class BaseList(generics.ListAPIView):
    queryset = Base.objects.all()
    serializer_class = BaseSerializer

class AccList(generics.ListAPIView):
    queryset = Acc.objects.all()
    serializer_class = AccSerializer

class BreadsList(generics.ListAPIView):
    queryset = Breads.objects.all()
    serializer_class = BreadsSerializer

class BreadDetail(RetrieveAPIView):
    queryset = Breads.objects.all()
    serializer_class = BreadsSerializer