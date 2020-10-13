from rest_framework import serializers
from .models import Pandemic

class PandemicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pandemic
        #fields = ('id','name','year')
        fields = (
            'id','url','name','year'
        )


'''class PandemicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pandemic
        #fields = ('id','name','year')
        fields = '__all__' '''