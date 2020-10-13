from django.shortcuts import render
from rest_framework import viewsets


from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse,StreamingHttpResponse
import requests


from .models import Pandemic
from .serializers import PandemicSerializer


# Create your views here.
class PandemicView(viewsets.ModelViewSet):
    queryset            =   Pandemic.objects.all()
    serializer_class    =   PandemicSerializer

def displayRest(request):
    restdata = requests.get('http://localhost:8000/Pandemics/?format=json')

    id      =   []
    url     =   []
    name    =   []
    year    =   []

    for i in range(len(restdata.json())):
        id.append(restdata.json()[i]['id'])
        url.append(restdata.json()[i]['url'])
        name.append(restdata.json()[i]['name'])
        year.append(restdata.json()[i]['year'])

    
    fetchdata = zip(id,url,name,year)

    return render(request, 'dashboard.html' , {'fetchdata': fetchdata})