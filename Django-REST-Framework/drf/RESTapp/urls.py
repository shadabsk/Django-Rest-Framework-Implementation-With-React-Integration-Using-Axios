from django.urls import path, include
from . import views
from rest_framework import routers

router =   routers.DefaultRouter()
router.register('Pandemics', views.PandemicView)

urlpatterns = [
    path('', include(router.urls)),
    path('displayRest/', views.displayRest, name='displayRest')
]
