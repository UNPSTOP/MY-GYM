from django.db import models

# Create your models here.
class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128)
    membership_type = models.CharField(max_length=50)
    joined_on = models.DateField(auto_now_add = True)
