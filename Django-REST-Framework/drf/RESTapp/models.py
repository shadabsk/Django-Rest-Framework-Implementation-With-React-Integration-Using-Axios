from django.db import models
import uuid

# Create your models here.

class Pandemic(models.Model):
    #year    =   models.IntegerField()
    id      =   models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name    =   models.CharField(max_length=50)
    year    =   models.CharField(max_length=20)

    def __str__(self):
        return self.name
