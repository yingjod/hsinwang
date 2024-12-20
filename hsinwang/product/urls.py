from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CakeViewSet,SizeList,FillingList,BaseList,AccList,BreadsList
from .views import BreadDetail

router = DefaultRouter()
router.register(r'cake', CakeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('sizes/', SizeList.as_view(), name='size-list'), 
    path('Fillings/', FillingList.as_view(), name='Filling-list'),     
    path('base/', BaseList.as_view(), name='base-list'),     
    path('acc/', AccList.as_view(), name='acc-list'),   
    path('breads/', BreadsList.as_view(), name='breads-list'),
    path('breads/<int:pk>/', BreadDetail.as_view(), name='bread-detail'),    
]
