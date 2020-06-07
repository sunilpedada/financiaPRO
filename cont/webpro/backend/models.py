from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
# Create your models here.
class User(AbstractUser):
    username=models.CharField(max_length=100)
    email=models.EmailField(_("email address"),unique=True)
    password=models.CharField(max_length=20,null=False)
    USERNAME_FIELD="email"
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
    def __str__(self):
        return "{}".format(self.email)

class custom_user(models.Model):
    CHOICES_TYPE=((0,'ADMIN'),
                (1,"USER"))
    User=models.OneToOneField(settings.AUTH_USER_MODEL,primary_key=True,on_delete=models.CASCADE,related_name='additional')
    phone_number=models.IntegerField(null=False)
    user_type=models.IntegerField(choices=CHOICES_TYPE,null=False,default=1)
    address=models.TextField(max_length=200)